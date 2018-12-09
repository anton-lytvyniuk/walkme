import Autosuggest from 'react-bootstrap-autosuggest';
import { FormGroup, ControlLabel } from 'react-bootstrap';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateSearchLine, searchVideo, playVideo } from '../actions';
import VideoAdapter from '../components/VideoAdapter';

class SearchLine extends Component {
    render() {
        const { value, message, data, searchVideo, showToggle, playVideo } = this.props;
        const onSelect = item => {
            if (item && item.id) playVideo(item.id.videoId, item.title, item.thumbnail.url);
        }

        return (
            <FormGroup controlId="repoInput">
                <ControlLabel>YouTube videos</ControlLabel>
                <Autosuggest
                    required={true} 
                    datalist={data}
                    datalistMessage={message}
                    placeholder="select youtube video..."
                    value={value}
                    showToggle={showToggle}
                    itemAdapter={VideoAdapter}
                    itemReactKeyPropName="etag"
                    itemValuePropName="title"
                    searchDebounce={500}
                    onSearch={searchVideo}
                    onSelect={onSelect}
                />
            </FormGroup>
        );
    }
}

const stateToProps = state => ({
    value: state.searchLine.value
    , data: state.searchLine.data
    , message: state.searchLine.message
    , showToggle: state.searchLine.showToggle
});

const actionsToProps = dispatch => ({
    updateSearchLine: bindActionCreators(updateSearchLine, dispatch)
    , searchVideo: bindActionCreators(searchVideo, dispatch)
    , playVideo: bindActionCreators(playVideo, dispatch)
})

export default connect(stateToProps, actionsToProps)(SearchLine);