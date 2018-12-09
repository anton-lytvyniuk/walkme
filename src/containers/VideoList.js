import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap'

import VideoItem from '../components/VideoItem';
import { removeVideo, playVideo } from './../actions'

class VideoList extends Component {
    removeVideoWrapper = id => () => this.props.removeVideo(id);
    playVideoWrapper = id => () => this.props.playVideo(id);

    render() {
        const { videos } = this.props;
        const videoItems = Object.keys(videos).map(id => (
            <ListGroupItem key={id}>
                <VideoItem 
                    title={videos[id].title} 
                    thumbnail={videos[id].thumbnail} 
                    onClickPlay={this.playVideoWrapper(id)}
                    onClickDelete={this.removeVideoWrapper(id)} 
                />
            </ListGroupItem>
        ));

        return (
            <ListGroup style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                {videoItems}
            </ListGroup>
        )
    }
};

const stateToProps = state => ({
    videos: state.videos
});

const actionsToProps = dispatch => ({
    removeVideo: bindActionCreators(removeVideo, dispatch)
    , playVideo: bindActionCreators(playVideo, dispatch)
});

export default connect(stateToProps, actionsToProps)(VideoList);