import React from 'react';
import {PageHeaders} from "../../../../Shared/Prism/Prism"
import { BasicAreaChart, DateTime, NagetiveArea, StackedChart } from '../ChartFunction/apexchart';
import { Card,CardBody,CardHeader,CardTitle, Col, Row } from 'reactstrap';

const Area = () => (
  <div className="Area">
    <PageHeaders
      title="AreaChart"
      home="Home"
      name="Charts"
      fonticonsname="AreaChart"
    />

    <Row>
      <Col lg={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Basic Area chart</CardTitle>
          </CardHeader>
          <CardBody>
            <BasicAreaChart />
          </CardBody>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Stacked Area Chart</CardTitle>
          </CardHeader>
          <CardBody>
            <StackedChart />
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}


    {/* <!-- ROW-2 OPEN --> */}
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Area with Negative Values</CardTitle>
          </CardHeader>
          <CardBody>
            <NagetiveArea />
          </CardBody>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Datetime X-Axis</CardTitle>
          </CardHeader>
          <CardBody>
            <DateTime />
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}
    {/* <!-- Container closed --> */}
  </div>
);

Area.propTypes = {};

Area.defaultProps = {};

export default Area;
