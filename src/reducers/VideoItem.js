import * as types from './../constants';

const initialState = {};

const videoItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REMOVE_VIDEO: {
            const stateCopy = { ...state };

            delete stateCopy[action.payload];
            return stateCopy;
        }

        case types.ADD_VIDEO: return {
            ...state
            , [action.payload.videoId]: { ...action.payload }
        }

        case types.LOAD_VIDEOS: return {
            ...action.payload
        }

        default: return { ...state };
    };
};

export default videoItemReducer;