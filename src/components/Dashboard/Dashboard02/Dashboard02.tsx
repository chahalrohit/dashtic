import React from "react";
import award from "../../../assets/images/photos/award.png";
import { PageHeader } from "../../../Shared/Prism/Prism";
import {Link} from "react-router-dom"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
} from "reactstrap";
import { ApexChart2, ApexChart1,CountryTrafficSource,WeekPageViews,MostVisitedPages } from "./data";
import ReactApexChart from "react-apexcharts";
import * as data from "./data";
const Dashboard02 = () => (
  <div>
    <PageHeader title="Analytics Dashboard" date="Select Date" />
   
    <Row>
      <Col lg={12} md={12} xl={6}>
        <Card className="bg-primary text-white">
          <CardBody>
            <Row>
              <Col lg={6} xl={7} md={12}>
                <div className="d-block card-header border-0 text-center px-0">
                  <h2 className="text-center mb-4">
                    Congratulations <b>John!</b>
                  </h2>
                  <small>You reached Page Views</small>
                </div>
                <Row className="text-center">
                  <Col md={12}>
                    <h2 className="mb-0 fs-40 counter font-weight-bold">10M</h2>
                    <h6 className="mt-4 text-white-50">
                      You have done 100% reached target today.
                    </h6>
                  </Col>
                </Row>
              </Col>
              <Col xl={5} md={12} lg={6} className="text-center">
                <img
                  className="mx-auto text-center w-90"
                  alt="img"
                  src={award}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xl={3} lg={6} md={12}>
        <Card>
          <CardBody className=" text-center">
            <span className="fs-50 icon-muted">
              <i className="si si-chart icon-dropshadow-info text-info"></i>
            </span>
            <p className=" mb-1">Bounce Rate</p>
            <h2 className="mb-1 fs-40 font-weight-bold">52.12%</h2>
            <small className="mb-1 text-muted">
              <small className="text-success">
                <i className="fa fa-caret-up  me-1"></i> 19.8
              </small>{" "}
              vs 36,144 than last month
            </small>
          </CardBody>
        </Card>
      </Col>
      <Col xl={3} lg={6} md={12}>
        <Card>
          <CardBody className=" text-center">
            <span className="fs-50 icon-muted">
              <i className="si si-wallet icon-dropshadow-danger text-danger"></i>
            </span>
            <p className=" mb-1 ">Revenue Status</p>
            <h2 className="mb-1 fs-40 font-weight-bold">$2,206.62</h2>
            <small className="mb-1 text-muted">
              <small className="text-danger">
                <i className="fa fa-caret-down  me-1"></i> 43.2
              </small>{" "}
              vs $5,699 than last month
            </small>
          </CardBody>
        </Card>
      </Col>
      <Col lg={12} md={12} xl={12}>
        <Row>
          <Col xl={3} lg={6} md={12}>
            <Card>
              <CardBody>
                <i className="mdi mdi-file-outline card-custom-icon icon-dropshadow-primary text-primary fs-60"></i>
                <p className=" mb-1">Page Views</p>
                <h2 className="mb-1 font-weight-bold">234k</h2>
                <span className="mb-1 text-muted">
                  <span className="text-danger">
                    <i className="fa fa-caret-down  me-1"></i> 43.2
                  </span>{" "}
                  than last month
                </span>
              </CardBody>
            </Card>
          </Col>
          <Col xl={3} lg={6} md={12}>
            <Card>
              <CardBody>
                <i className="mdi mdi-clock card-custom-icon icon-dropshadow-warning text-warning fs-60"></i>
                <p className=" mb-1">Time On Site</p>
                <h2 className="mb-1 font-weight-bold">12m 3s</h2>
                <span className="mb-1 text-muted">
                  <span className="text-success">
                    <i className="fa fa-caret-up  me-1"></i> 19.8
                  </span>{" "}
                  than last month
                </span>
              </CardBody>
            </Card>
          </Col>
          <Col xl={3} lg={6} md={12}>
            <Card>
              <CardBody>
                <i className="mdi mdi-heart-outline card-custom-icon icon-dropshadow-success text-success fs-60"></i>
                <p className=" mb-1">Impressions</p>
                <h2 className="mb-1 font-weight-bold">168</h2>
                <span className="mb-1 text-muted">
                  <span className="text-success">
                    <i className="fa fa-caret-up  me-1"></i> 0.8%
                  </span>{" "}
                  than last month
                </span>
              </CardBody>
            </Card>
          </Col>
          <Col xl={3} lg={6} md={12}>
            <Card>
              <CardBody>
                <i className="mdi mdi-account-multiple-outline card-custom-icon icon-dropshadow-secondary text-secondary fs-60"></i>
                <p className=" mb-1">Total Followers</p>
                <h2 className="mb-1 font-weight-bold">3456k</h2>
                <span className="mb-1 text-muted">
                  <span className="text-success">
                    <i className="fa fa-caret-up  me-1"></i> 0.8%
                  </span>{" "}
                  than last month
                </span>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col xxl={3} xl={6} md={12} lg={6}>
        <Card>
          <CardHeader>
            <h3 className="card-title">Follower Growth</h3>
          </CardHeader>
          <CardBody>
            <Row className="text-center">
              <Col md={12} className=" mb-4 mt-sm-0">
                <div
                  className="mx-auto chart-circle chart-circle-primary chart-circle-lg  mt-sm-0 mb-0 donutShadow"
                  id="chart-circle-primary"
                  data-value="0.85"
                  data-thickness="15"
                  data-color=""
                >
                  <ReactApexChart
                    options={data.Radialbar.options}
                    series={data.Radialbar.series}
                    type="radialBar" 
                    height={230}
                  />
                  <div className="mx-auto chart-circle-value text-center mb-2">
                    <h1 className="mb-0 mt-2">85%</h1>
                    <small>Goal</small>
                  </div>
                </div>
              </Col>
              <Col md={12} className="">
                <h2 className="mb-0 fs-50 mt-3 counter  font-weight-bold">
                  65,268
                </h2>
                <span className=" fs-12 text-muted">
                  <span className="text-danger me-1">
                    <i className="fe fe-arrow-down ms-1"></i>0.82%
                  </span>{" "}
                  since last week
                </span>
                <p className="mt-5 mb-2 text-muted">
                  It is a long established fact that a ayout.{" "}
                </p>
                <small className="mt-1 fs-12 text-muted">
                  Updated 20 minutes ago
                </small>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col xxl={3} xl={6} md={12} lg={6}>
        <Card>
          <CardHeader className=" mb-4">
            <h3 className="card-title">Country Wise Page Views</h3>
          </CardHeader>
          <div className="p-2">
            <h5 className="ps-4 font-weight-bold mb-4">This Week Page Views</h5>
            <Table className="table card-table text-nowrap">
              <tbody>
                {WeekPageViews.map((list, index) => (
                <tr key={index} >
                  <td className={list.class}>
                    <i className={list.icon}></i>
                  </td>
                  <td>{list.country}</td>
                  <td className="w-3 text-end">
                    <span className="">{list.num}</span>
                  </td>
                </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <CardFooter>
            <Link to="#" className="btn btn-lg btn-block btn-white">
              View All
            </Link>
          </CardFooter>
        </Card>
      </Col>
      <Col lg={12} md={12} xl={12} xxl={6}>
        <Card>
          <Row>
            <Col lg={12} md={12} xl={12}>
              <CardHeader>
                <h4 className="card-title">Website Overview</h4>
              </CardHeader>
              <CardBody className="text-center">
                <div className="BarChartShadow " style={{ height: "295px" }}>
                  <ApexChart1 />
                </div>
                <Row className="mt-5">
                  <Col className="text-center">
                    <div className="text-muted float-end">
                      <div className="w-3 h-3 br-3 me-1 mt-1 float-start"></div>
                    </div>
                  </Col>
                  <Col className="text-center">
                    <div className="text-muted float-start">
                      <div className="w-3 h-3 br-3 me-1 mt-1 float-start"></div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xl={8} lg={12} md={12}>
        <Card>
          <CardHeader>
            <h3 className="card-title">Country Traffic Source</h3>
            <div className="card-options ">
              <UncontrolledDropdown className="btn-group mb-0">
                <DropdownToggle
                  className="option-dots"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  color=""
                >
                  <i className="fa fa-ellipsis-v"></i>
                </DropdownToggle>
                <DropdownMenu className="">
                  <DropdownItem className="" href="#">
                    {" "}
                    Download Print
                  </DropdownItem>
                  <DropdownItem className="" href="#">
                    Last Week
                  </DropdownItem>
                  <DropdownItem className="" href="#">
                    Last Month
                  </DropdownItem>
                  <DropdownItem className="" href="#">
                    Yearly
                  </DropdownItem>
                  <div className="dropdown-divider"></div>
                  <DropdownItem className="" href="#">
                    <i className="fa fa-cog me-2"></i> Settings
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>
          <CardBody className="table-responsive ">
            <Table className="table mg-b-0 text-nowrap">
              <thead>
                <tr>
                  <th className="wd-45p border-bottom-0 py-4 font-weight-bold">
                    Country
                  </th>
                  <th className="border-bottom-0 py-4 font-weight-bold text-center">
                    Total Traffic
                  </th>
                  <th className="border-bottom-0 py-4 font-weight-bold text-center">
                    Entrances
                  </th>
                  <th className="border-bottom-0 py-4 font-weight-bold text-center">
                    Bounce Rate
                  </th>
                  <th className="border-bottom-0 py-4 font-weight-bold text-center">
                    Exits
                  </th>
                </tr>
              </thead>
              <tbody>
                {CountryTrafficSource.map((list, index) => (
                <tr key={index}>
                  <td>
                    <i className={list.sourceicon}></i>{" "}
                    <strong>{list.sourcecountry}</strong>
                  </td>
                  <td className="text-center">
                    <strong>{list.sourcenum}</strong>
                  </td>
                  <td className="text-center">
                    <strong>{list.sourcenum2}</strong>{list.sourcenum3} 
                  </td>
                  <td className="text-center">
                    {list.BounceRate}{list.BounceRateicon}
                  </td>
                  <td className="text-center">
                    {list.Exits}{list.Exitsicon}
                  </td>
                </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      <Col xl={4} md={12} lg={12}>
        <Card>
          <CardHeader>
            <h3 className="card-title"> Website Visitors</h3>
          </CardHeader>
          <CardBody className="text-center mx-auto py-6">
            <div>
              <div className="chart-container">
                <div className="canvasDoughnut">
                  <ApexChart2 />
                </div>
              </div>
            </div>
          </CardBody>
          <CardBody>
            <Row className="no-gutters">
              <Col className="text-center col-12" sm={4}>
                <div className="text-muted float-start">
                  <div className="w-4 h-3 bg-success br-3 me-1 mt-1 float-start"></div>{" "}
                  Local
                </div>
              </Col>
              <Col className="text-center">
                <div className="text-muted float-start">
                  <div className="w-4 h-3 bg-primary br-3 me-1 mt-1 float-start"></div>{" "}
                  Domestic
                </div>
              </Col>
              <Col className="col-auto text-center">
                <div className="text-muted float-start">
                  <div className="w-4 h-3 bg-danger br-3 me-1 mt-1 float-start"></div>{" "}
                  International
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!--End row--> */}

    {/* <!--Row--> */}
    <Row>
      <Col md={12} xl={12} lg={12}>
        <Card>
          <CardHeader>
            <h3 className="card-title">Most Visited Pages</h3>
            <div className="card-options ">
              <UncontrolledDropdown className="btn-group mb-0">
                <DropdownToggle
                  className="option-dots"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  color=""
                >
                  <i className="fa fa-ellipsis-v"></i>
                </DropdownToggle>
                <DropdownMenu className="">
                  <DropdownItem className="" href="#">
                    {" "}
                    Download Print
                  </DropdownItem>
                  <DropdownItem className="" href="#">
                    Last Week
                  </DropdownItem>
                  <DropdownItem className="" href="#">
                    Last Month
                  </DropdownItem>
                  <DropdownItem className="" href="#">
                    Yearly
                  </DropdownItem>
                  <div className="dropdown-divider"></div>
                  <DropdownItem className="" href="#">
                    <i className="fa fa-cog me-2"></i> Settings
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>
          <CardBody>
            <div className="">
              <div className="table-responsive">
                <Table className="table card-table table-vcenter text-nowrap mb-0 border">
                  <thead>
                    <tr>
                      <th className="wd-lg-10p">Page Name</th>
                      <th className="wd-lg-20p text-center">Browsers</th>
                      <th className="wd-lg-20p text-center">Visitors</th>
                      <th className="wd-lg-20p text-center">
                        Unique Page Visitors
                      </th>
                      <th className="wd-lg-20p text-center">Bounce Rate</th>
                      <th className="text-center">Page Updated</th>
                      <th className="text-center">Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MostVisitedPages.map((list, index) => (
                    <tr key={index} > 
                      <td>{list.path}</td>
                      <td className="text-center">
                        <div className="avatar-list avatar-list-stacked">
                          <span
                            className="avatar brround"
                            style={{ backgroundImage: `url(${list.img1})` }}
                          ></span>
                          <span
                            className="avatar brround"
                            style={{ backgroundImage: `url(${list.img2})` }}
                          ></span>
                          <span
                            className="avatar brround"
                            style={{ backgroundImage: `url(${list.img3})` }}
                          ></span>
                          <span
                            className="avatar brround"
                            style={{ backgroundImage: `url(${list.img4})` }}
                          ></span>
                          <span
                            className="avatar brround"
                            style={{ backgroundImage: `url(${list.img5})` }}
                          ></span>
                        </div>
                      </td>
                      <td className="text-center">{list.visitors}</td>
                      <td className="text-center">{list.page}</td>
                      <td className="text-center">
                        {list.bounce} {list.bounceicon}
                      </td>
                      <td className="text-nowrap text-center">{list.date}</td>
                      <td className="w-1 text-center">
                        <Link to="#" className="btn btn-icon2 btn-white">
                          <i className="fe fe-eye"></i>
                        </Link>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!--End row--> */}
  </div>
);

Dashboard02.propTypes = {};

Dashboard02.defaultProps = {};

export default Dashboard02;
