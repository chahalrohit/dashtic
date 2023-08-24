import React from "react";
import { Card, Col, Row, CardBody } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import { ApexChart3, ApexChart4, ApexChart5 } from "./data";
import ReactApexChart from "react-apexcharts";
import { Line } from "react-chartjs-2";
import * as data from "./data";
const ChartWidgets = () => (
  <div>
    <PageHeaders
      title="Chart Widgets"
      home="Home"
      name="Widgets"
      fonticonsname="Chart Widgets"
    />
    <Row>
      <Col xl={4}>
        <Card>
          <CardBody className="py-0">
            <Row>
              <Col className="my-auto">
                <div className="mb-2 fs-18 text-muted">Total Application</div>
                <h1 className="font-weight-bold mb-1">45,675</h1>
                <span className="text-primary">
                  <i className="fa fa-arrow-up me-1"></i> +1.4%
                </span>
              </Col>
              <Col className="col-auto">
                <ReactApexChart
                  options={data.Radialbar.options}
                  series={data.Radialbar.series}
                  type="radialBar"
                  className="mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0"
                  height={170}
                  width={100}
                />

                <div className="mx-auto chart-circle-value text-center fs-20">
                  85%
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xl={4}>
        <Card>
          <CardBody className="py-0">
            <Row>
              <Col className="my-auto">
                <div className="mb-2 fs-18 text-muted">Shortlisted</div>
                <h1 className="font-weight-bold mb-1">30,175</h1>
                <span className="text-success">
                  <i className="fa fa-arrow-up me-1"></i> +1.8%
                </span>
              </Col>
              <Col className="col-auto">
                <ReactApexChart
                  options={data.Radialbar1.options}
                  series={data.Radialbar1.series}
                  type="radialBar"
                  className="mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0"
                  height={170}
                  width={100}
                />

                <div className="mx-auto chart-circle-value text-center fs-20">
                  60%
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xl={4}>
        <Card>
          <CardBody className="py-0">
            <Row>
              <Col className="my-auto">
                <div className="mb-2 fs-18 text-muted">Rejected</div>
                <h1 className="font-weight-bold mb-1">7,745</h1>
                <span className="text-danger">
                  <i className="fa fa-arrow-down me-1"></i> -2.4%
                </span>
              </Col>
              <Col className="col-auto">
                <ReactApexChart
                  options={data.Radialbar2.options}
                  series={data.Radialbar2.series}
                  type="radialBar"
                  className="mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0"
                  height={170}
                  width={100}
                />
                <div className="mx-auto chart-circle-value text-center fs-20">
                  25%
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl={4} md={12} lg={6}>
        <Card>
          <CardBody>
            <Row>
              <Col>
                <p className="mb-1">Today Revenue</p>
                <h2 className="mb-0 font-weight-bold">$897k</h2>
              </Col>
              <Col>
                <ApexChart3 />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xl={4} md={12} lg={6}>
        <Card>
          <CardBody>
            <Row>
              <Col>
                <p className="mb-1">Unique Visitors</p>
                <h2 className="mb-0 font-weight-bold">5,896</h2>
              </Col>
              <Col>
                <ApexChart4 />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xl={4} md={12} lg={6}>
        <Card>
          <CardBody>
            <Row>
              <Col>
                <p className="mb-1">Expenses</p>
                <h2 className="mb-0 font-weight-bold">$178</h2>
              </Col>
              <Col>
                <ApexChart5 />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* <!--Row--> */}
    <Row>
      <Col xl={3} lg={6} md={12}>
        <Card className="overflow-hidden">
          <CardBody className="pb-0">
            <div className="text-start mb-4">
              <p className=" mb-1 ">
                <i className="fa fa-line-chart me-1"></i> Total Sales
              </p>
              <h2 className="mb-0 font-weight-bold">
                4,786
                <span className="fs-12 text-muted">
                  <span className="text-success me-1">
                    <i className="fe fe-arrow-up ms-1 "></i> 12%
                  </span>{" "}
                  last week
                </span>
              </h2>
            </div>
          </CardBody>
          <div className="chart-wrapper">
            <data.Salesbar />
          </div>
        </Card>
      </Col>
      <Col xl={3} lg={6} md={12}>
        <Card className="overflow-hidden">
          <CardBody className="pb-0">
            <div className="text-start mb-4">
              <p className=" mb-1 ">
                <i className="fa fa-usd me-1"></i> Total Profits
              </p>
              <h2 className="mb-0 font-weight-bold">
                $873
                <span className="fs-12 text-muted">
                  <span className="text-danger me-1">
                    <i className="fe fe-arrow-down ms-1 "></i> 0.34%
                  </span>{" "}
                  last week
                </span>
              </h2>
            </div>
          </CardBody>
          <div className="chart-wrapper">
            <data.Profitsbar />
          </div>
        </Card>
      </Col>
      <Col xl={3} lg={6} md={12}>
        <Card className="overflow-hidden">
          <CardBody className="pb-0">
            <div className="text-start mb-4">
              <p className=" mb-1 ">
                <i className="fa fa-cart-arrow-down me-1"></i> Total Orders
              </p>
              <h2 className="mb-0 font-weight-bold">
                6,295
                <span className="fs-12 text-muted">
                  <span className="text-success me-1">
                    <i className="fe fe-arrow-up ms-1 "></i> 0.22%
                  </span>{" "}
                  last week
                </span>
              </h2>
            </div>
          </CardBody>
          <div className="chart-wrapper">
            <data.Ordersbar />
          </div>
        </Card>
      </Col>
      <Col xl={3} lg={6} md={12}>
        <Card className="overflow-hidden">
          <CardBody className="pb-0">
            <div className="text-start mb-4">
              <p className=" mb-1">
                <i className="fa fa-signal me-1"></i> Total Sales Revenue
              </p>
              <h2 className="mb-0 font-weight-bold">
                $356
                <span className="fs-12 text-muted">
                  <span className="text-danger me-1">
                    <i className="fe fe-arrow-down ms-1"></i>0.82%
                  </span>{" "}
                  last week
                </span>
              </h2>
            </div>
          </CardBody>
          <div className="chart-wrapper">
            <data.Revenuebar />
          </div>
        </Card>
      </Col>
    </Row>
    {/* <!--End row--> */}

    {/* <!--Row--> */}
    <Row>
      <Col xl={3} md={6} lg={6}>
        <Card className="overflow-hidden">
          <CardBody className="pb-0">
            <div>
              <p className=" mb-0">BTC / USDT</p>
              <h3 className="mb-1 font-weight-bold">$10513</h3>
            </div>
          </CardBody>
          <div className="chart-wrapper ">
            <Line
              options={data.Bitcoinexhange}
              data={data.bitcoinexchange}
              id="CryptoChart"
              className="h-5 overflow-hidden"
            />
          </div>
        </Card>
      </Col>
      <Col xl={3} md={6} lg={6}>
        <Card className="overflow-hidden">
          <CardBody className="pb-0">
            <div>
              <p className=" mb-0">XEM / USDT</p>
              <h3 className="mb-1 font-weight-bold">$966</h3>
            </div>
          </CardBody>
          <div className="chart-wrapper ">
            <Line
              options={data.Bitcoinexhange2}
              data={data.bitcoinexchange2}
              id="CryptoChart"
              className="h-5 overflow-hidden"
            />
          </div>
        </Card>
      </Col>
      <Col xl={3} md={6} lg={6}>
        <Card className="overflow-hidden">
          <CardBody className="pb-0">
            <div>
              <p className=" mb-0">XRP / USDT</p>
              <h3 className="mb-1 font-weight-bold">$7,349</h3>
            </div>
          </CardBody>
          <div className="chart-wrapper ">
            <Line
              options={data.Bitcoinexhange3}
              data={data.bitcoinexchange3}
              id="CryptoChart"
              className="h-5 overflow-hidden"
            />
          </div>
        </Card>
      </Col>
      <Col xl={3} md={6} lg={6}>
        <Card className="overflow-hidden">
          <CardBody className="pb-0">
            <div>
              <p className=" mb-0">NEO / USDT</p>
              <h3 className="mb-1 font-weight-bold">$5,563</h3>
            </div>
          </CardBody>
          <div className="chart-wrapper ">
            <Line
              options={data.Bitcoinexhange4}
              data={data.bitcoinexchange4}
              id="CryptoChart"
              className="h-5 overflow-hidden"
            />
          </div>
        </Card>
      </Col>
    </Row>
    {/* <!--End Row--> */}

    {/* <!-- Row --> */}
    <Row>
      <Col xl={4} sm={12}>
        <Card className="text-center">
          <div className="widget-line mt-5 ">
            <p className="mb-2">Shares</p>
            <h1 className="font-weight-bold">1452</h1>
          </div>
          <ReactApexChart
            options={data.Radialbar.options}
            series={data.Radialbar.series}
            type="radialBar"
            className="mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0"
            height={170}
            width={100}
          />
          <div className="chart-circle-value fs">
            <i className="fa fa-random text-primary"></i>
          </div>
          <ul className="widget-line-list mt-5 mb-5">
            <li className="border-end">
              45% <br />
              <span className="text-success">
                <i className="fa fa-hand-o-up"></i> Positive
              </span>
            </li>
            <li>
              6% <br />
              <span className="text-danger">
                <i className="fa fa-hand-o-down"></i> Negative
              </span>
            </li>
          </ul>
        </Card>
      </Col>
      <Col xl={4} sm={12} className="p-l-0 p-r-0">
        <Card className="text-center">
          <div className="widget-line mt-5">
            <p className="mb-2">Projects</p>
            <h1 className="font-weight-bold">3265</h1>
          </div>
          <ReactApexChart
            options={data.Radialbar2.options}
            series={data.Radialbar2.series}
            type="radialBar"
            className="mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0"
            height={170}
            width={100}
          />
          <div className="chart-circle-value fs">
            <i className="fa fa-life-ring text-secondary"></i>
          </div>
          <ul className="widget-line-list mt-5 mb-5">
            <li className="border-end">
              55% <br />
              <span className="text-success">
                <i className="fa fa-hand-o-up"></i> Positive
              </span>
            </li>
            <li>
              3% <br />
              <span className="text-danger">
                <i className="fa fa-hand-o-down"></i> Negative
              </span>
            </li>
          </ul>
        </Card>
      </Col>
      <Col xl={4} sm={12} className=" p-l-0">
        <Card className="text-center">
          <div className="widget-line  mt-5">
            <p className="mb-2">Users</p>
            <h1 className="font-weight-bold">9562</h1>
          </div>
          <ReactApexChart
            options={data.Radialbar1.options}
            series={data.Radialbar1.series}
            type="radialBar"
            className="mx-auto chart-circle chart-circle-md chart-circle-primary mt-sm-0 mb-0"
            height={170}
            width={100}
          />

          <div className="chart-circle-value fs">
            <i className="fa fa-tags text-success"></i>
          </div>
          <ul className="widget-line-list mt-5 mb-5">
            <li className="border-end">
              75% <br />
              <span className="text-success">
                <i className="fa fa-hand-o-up"></i> Positive
              </span>
            </li>
            <li>
              6% <br />
              <span className="text-danger">
                <i className="fa fa-hand-o-down"></i> Negative
              </span>
            </li>
          </ul>
        </Card>
      </Col>
    </Row>
  </div>
);

ChartWidgets.propTypes = {};

ChartWidgets.defaultProps = {};

export default ChartWidgets;
