import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import ReactEcharts from "echarts-for-react";
import * as echarts from "./data";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Echart = () => (
  <div>
    <PageHeaders
      title="Echarts"
      home="Home"
      name="Charts"
      fonticonsname="Echarts"
    />
    <Row>
      <Col lg="6" md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Line chart</CardTitle>
          </CardHeader>
          <CardBody>
            <div id="echart1" className="chartsh">
              <ReactEcharts
                className=""
                option={echarts.echart2.option}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6" md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Combination of Line & Bar Chart</CardTitle>
          </CardHeader>
          <CardBody>
            <div id="echart2" className="chartsh">
              <ReactEcharts
                className=""
                option={echarts.echart1.option}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col lg="6" md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Vertical Line chart</CardTitle>
          </CardHeader>
          <CardBody>
            <div id="echart3" className="chartsh">
              <ReactEcharts
                className=""
                option={echarts.echart4.option}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6" md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">
              Vertical Combination of Line & Bar Chart
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div id="echart4" className="chartsh">
              <ReactEcharts
                className=""
                option={echarts.echart3.option}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!--End  Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col lg="6" md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Bar Chart</CardTitle>
          </CardHeader>
          <CardBody>
            <div id="echart5" className="chartsh">
              <ReactEcharts
                className=""
                option={echarts.echart5.option}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6" md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Horizontal Bar Chart</CardTitle>
          </CardHeader>
          <CardBody>
            <div id="echart6" className="chartsh">
              <ReactEcharts
                className=""
                option={echarts.echart6.option}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col lg="6" md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Single line chart</CardTitle>
          </CardHeader>
          <CardBody>
            <div id="echart7" className="chartsh">
              <ReactEcharts
                className=""
                option={echarts.echart7.option}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6" md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Single smooth line chart</CardTitle>
          </CardHeader>
          <CardBody>
            <div id="echart8" className="chartsh">
              <ReactEcharts
               
               className=""
                option={echarts.echart8.option}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

Echart.propTypes = {};

Echart.defaultProps = {};

export default Echart;
