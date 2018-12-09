import searchYoutube from 'youtube-api-v3-search';

import * as types from './../constants';

export const removeVideo = videoId =>
    dispatch => fetch('http://localhost:8080/api/remove-video', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST'
        , body: JSON.stringify({ videoId })
    })
        .then(res => dispatch({
            type: types.REMOVE_VIDEO
            , payload: videoId
        }))
        .catch(err => console.log(err));

export const updateSearchLine = value => ({
    type: types.UPDATE_SEARCH_LINE
    , payload: value
});

export const searchVideo = string =>
    dispatch => {
        dispatch({
            type: types.START_SEARCH
            , payload: 'searching videos'
        });

        return searchYoutube(types.API_KEY, {
            maxResults: 4
            , q: string
            , type: 'video'
            , part: 'snippet'
        })
            .then(({ items }) => {
                dispatch({
                    type: types.FINISH_SEARCH
                    , payload: items.map(({ id, etag, snippet: { title, thumbnails } }) =>
                        ({ id, etag, title, thumbnail: thumbnails.default }))
                })
            })
            .catch(err =>
                dispatch({
                    type: types.ERROR_SEARCH
                    , payload: `error: ${err}`
                })
            )
    }

export const playVideo = (videoId, title, thumbnail) =>
    (dispatch, getState) => {
        const currentState = getState();

        if (!currentState.videos[videoId])
            dispatch(addVideo(videoId, title, thumbnail));

        return dispatch({
            type: types.VIDEO_TO_PLAY
            , payload: videoId
        });
    };

export const addVideo = (videoId, title, thumbnail) =>
    dispatch => fetch('http://localhost:8080/api/add-video', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST'
        , body: JSON.stringify({ videoId, title, thumbnail })
    })
        .then(res => dispatch({
            type: types.ADD_VIDEO
            , payload: { videoId, title, thumbnail }
        }))
        .catch(err => console.log(err));

export const loadVideos = () =>
    dispatch => fetch('http://localhost:8080/api/video-list')
        .then(res => res.json())
        .then(res => {
            const data = res.length > 0 ? res.reduce((acc, v) => (v.videoId ? {
                ...acc
                , [v.videoId]: { title: v.title, thumbnail: v.thumbnail }
            } : { ...acc }), {}) : {};

            return dispatch({
                type: types.LOAD_VIDEOS
                , payload: data
            })
        })
        .catch(err => console.log(err));