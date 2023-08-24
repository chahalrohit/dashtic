import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';
import {PageHeaders} from '../../../../Shared/Prism/Prism';
import { Annotation, BasicChart, Dashedline, Stepline } from '../ChartFunction/apexchart';

const Line = () => (
  <div className="Line">
   <PageHeaders
      title="LineChart"
      home="Home"
      name="Charts"
      fonticonsname="LineChart"
    />

    <Row>
      <Col xl={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Basic Line chart</CardTitle>
          </CardHeader>
          <CardBody>
            <BasicChart />
          </CardBody>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Step line Chart</CardTitle>
          </CardHeader>
          <CardBody>
            <Stepline />
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
    <Row>
      <Col xl={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Dashed line Chart with Gradient color</CardTitle>
          </CardHeader>
          <CardBody>
            <Dashedline />
          </CardBody>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Line with Annotation Charts</CardTitle>
          </CardHeader>
          <CardBody>
            <Annotation />
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}
    {/* <!-- Container closed --> */}
  </div>
);

Line.propTypes = {};

Line.defaultProps = {};

export default Line;
