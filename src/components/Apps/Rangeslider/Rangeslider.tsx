import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';
import { PageHeaders } from '../../../Shared/Prism/Prism';
import { DiscreteSliderMarks, Rangeslider2, RangeSlider3, RangeSlider4, CustomizedSlider, CustomizedSlider1, CustomizedSlider2, CustomizedSlider4, TrackFalseSlider, TrackFalseSlider1, TrackInvertedSlider1, TrackInvertedSlider } from "./data"

const Rangeslider = () => (
    <div>
        <PageHeaders
            title="Range Slider"
            home="Home"
            name="Apps"
            fonticonsname="Range Slider"
        />

        <Card>
            <CardHeader>
                <CardTitle>
                    Range Slider
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Row className="row-sm">
                    <Col lg="12" className="rangeslider1">
                        <DiscreteSliderMarks

                        />
                    </Col>
                    <Col lg="12" className="mt-4 rangeslider2">
                        <Rangeslider2
                        />
                    </Col>
                </Row>
                <Row className="row-sm">
                    <Col lg="12" className="mt-4 rangeslider3">
                        <RangeSlider3
                        />
                    </Col>
                    <Col lg="12" className="mt-4 rangeslider3">
                        <RangeSlider4
                        />
                    </Col>
                </Row>
            </CardBody>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>
                    Range Slider (Modern Skin)
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Row className="row-sm">
                    <Col lg="12" className="rangeslider1 irs-modern">
                        <CustomizedSlider
                        />
                    </Col>
                    <Col lg="12" className="mt-4">
                        <CustomizedSlider1 />
                    </Col>
                </Row>
                <Row className="row-sm">
                    <Col lg="12" className="mt-4">
                        <CustomizedSlider2 />
                    </Col>
                    <Col lg="12" className="mt-4">
                        <CustomizedSlider4 />
                    </Col>
                </Row>
            </CardBody>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>
                    Range Slider (Outline Skin)
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Row className="row-sm">
                    <Col lg="12">
                        <TrackFalseSlider />
                    </Col>
                    <Col lg="12" className="mt-4">
                        <TrackFalseSlider1 />
                    </Col>
                </Row>
                <Row className="row-sm">
                    <Col lg="12" className="mt-4">
                        <TrackInvertedSlider />
                    </Col>
                    <Col lg="12" className="mt-4">
                        <TrackInvertedSlider1 />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    </div>
);

Rangeslider.propTypes = {};

Rangeslider.defaultProps = {};

export default Rangeslider;
