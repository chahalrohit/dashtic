import React from 'react';
import { Card,CardBody,CardTitle,CardHeader, Col, Row } from 'reactstrap';
import {PageHeaders} from "../../../../Shared/Prism/Prism"
import { BarNagetiveValue, BasicBarChart, GroupedBarChart, StackedBar } from '../ChartFunction/apexchart';

const Bar = () => (
  <div className="Bar">
     <PageHeaders
      title="BarChart"
      home="Home"
      name="Charts"
      fonticonsname="BarChart"
    />
 
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Basic Bar chart</CardTitle>
          </CardHeader>
          <CardBody>
            <BasicBarChart />
          </CardBody>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Grouped Bar Chart</CardTitle>
          </CardHeader>
          <CardBody>
            <GroupedBarChart />
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Stacked Bar chart</CardTitle>
          </CardHeader>
          <CardBody>
            <StackedBar />
          </CardBody>
        </Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Bar with Negative Values</CardTitle>
          </CardHeader>
          <CardBody>
            <BarNagetiveValue />
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}
    {/* <!-- Container closed --> */}
  </div>
);

Bar.propTypes = {};

Bar.defaultProps = {};

export default Bar;
