import React from 'react';
import { Card, Col,CardHeader,CardTitle,CardBody, Row } from 'reactstrap';
import {PageHeaders} from '../../../../Shared/Prism/Prism';
import { BasicColumn, ColumnMarker, ColumnNegativeValue, StackedColumn } from '../ChartFunction/apexchart';


const Column = () => (
  <div className="Column">
    <PageHeaders
      title="ColumnChart"
      home="Home"
      name="Charts"
      fonticonsname="ColumnChart"
    />

    <Row>
      <Col xl={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Basic Column Chart</CardTitle>
          </CardHeader>
          <CardBody>
            <BasicColumn />
          </CardBody>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Stacked Column Chart</CardTitle>
          </CardHeader>
          <CardBody>
            <StackedColumn />
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}

    <Row>
      <Col xl={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Column Chart with Negative Values</CardTitle>
          </CardHeader>
          <CardBody>
            <ColumnNegativeValue />
          </CardBody>
        </Card>
      </Col>
      <Col xl={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Column with Markers</CardTitle>
          </CardHeader>
          <CardBody>
            <ColumnMarker />
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-2 CLOSED --> */}
    {/* <!-- Container closed --> */}
  </div>
);

Column.propTypes = {};

Column.defaultProps = {};

export default Column;
