import * as types from './../constants';

const initialState = {
    value: ''
    , message: ''
    , data: null
    , videoId: null
    , showTogle: 'auto'
};

const VideoSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_SEARCH_LINE: 
            return { ...state, value: action.payload, showTogle: 'auto' };
        
        case types.START_SEARCH: 
            return { ...state, message: action.payload, data: null };
        
        case types.ERROR_SEARCH:
            return { ...state, message: action.payload, data: null };

        case types.FINISH_SEARCH: 
            return { ...state, message: '', data: action.payload };
        
        case types.VIDEO_TO_PLAY: 
            return { ...state, videoId: action.payload, showTogle: false };

        default: return { ...state };
    };
};

export default VideoSearchReducer;