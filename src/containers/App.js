import React, { Component } from 'react';
import { Grid, Col, Row, Jumbotron } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import VideoList from './VideoList';
import VideoSearch from './VideoSearch';
import VideoPlayer from '../components/VideoPlayer'

import { loadVideos } from '../actions';

class App extends Component {
  render() {
    const { videoId } = this.props;

    return (
      <Jumbotron style={{ margin: 0, minHeight: '100vh' }}>
        <Grid>
          <Row>
            <Col xs={4}>
              <h1>Watch History</h1>
              <VideoList />
            </Col>
            <Col xsOffset={1}></Col>
            <Col xs={7}>
              <Grid>
                <Row>
                  <Col xs={10}>
                    <VideoSearch />
                  </Col>
                </Row>
                <Row style={{ paddingLeft: '15px' }}>
                  <VideoPlayer videoId={videoId} />
                </Row>
              </Grid>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    );
  }

  componentDidMount() {
    this.props.loadVideos();
  }
}

const stateToProps = state => ({
  videoId: state.searchLine.videoId
});

const actionToProps = dispatch => ({
  loadVideos: bindActionCreators(loadVideos, dispatch)
});

export default connect(stateToProps, actionToProps)(App);
