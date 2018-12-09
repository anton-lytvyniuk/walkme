import { ItemAdapter } from 'react-bootstrap-autosuggest';
import { Col, Row, Grid } from 'react-bootstrap';
import React from 'react';

class VideoAdapter extends ItemAdapter {
    itemIncludedByInput() {
        return true // don't perform client filtering; show all server items
    }

    sortItems(items) {
        return items // don't sort items; just use server ordering
    }

    renderItem(item) {
        return (
            <Grid>
                <Row>
                    <Col xs={4} style={{ width: '150px' }}>
                        <img src={item.thumbnail.url} />
                    </Col>
                    <Col xs={8}>
                        <p style={{ wordBreak: 'break-all', whiteSpace: 'normal', fontSize: '14px' }}>
                            {item.title}
                        </p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default new VideoAdapter();