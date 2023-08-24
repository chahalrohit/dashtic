import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';
import {PageHeaders} from '../../../../Shared/Prism/Prism';
import { LineandAreaChart, LineColumn, LineColumnArea, MultipleSeries } from '../ChartFunction/apexchart';


const Mixed = () => (
  <div className="Mixed">
    <PageHeaders
      title="MixedChart"
      home="Home"
      name="Charts"
      fonticonsname="MixedChart"
    />

    <Row>
      <Col xl={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Line and Column Chart</CardTitle>
          </CardHeader>
          <CardBody>
            <LineColumn />
          </CardBody>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Multiple Y-axis Chart</CardTitle>
          </CardHeader>
          <CardBody>
            <MultipleSeries />
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    <Row>
      <Col xl={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Line and area Chart</CardTitle>
          </CardHeader>
          <CardBody>
            <LineandAreaChart />
          </CardBody>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Line , Column and area Chart</CardTitle>
          </CardHeader>
          <CardBody>
            <LineColumnArea />
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- Container closed --> */}
  </div>
);

Mixed.propTypes = {};

Mixed.defaultProps = {};

export default Mixed;
