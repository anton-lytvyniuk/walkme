import videoItemReducer from './VideoItem';
import videoSearchReducer from './VideoSearch';

export default {
    videos: videoItemReducer,
    searchLine: videoSearchReducer
};
