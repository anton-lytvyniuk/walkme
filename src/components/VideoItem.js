import React, { Component } from 'react';
import { Grid, Button, Row, Col } from 'react-bootstrap';

class VideoItem extends Component {
    render() {
        const { title, thumbnail, onClickPlay, onClickDelete } = this.props;

        return (
            <Grid>
                <Row>
                    <Col xs={4} style={{ width: '150px' }}>
                        <img src={thumbnail} />
                    </Col>
                    <Col xs={6}>
                        <p style={{ wordBreak: 'break-all', whiteSpace: 'normal', fontSize: '14px' }}>
                            {title}
                        </p>
                        <Button onClick={onClickPlay}>Play</Button>
                        <Button onClick={onClickDelete}>Delete</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default VideoItem;