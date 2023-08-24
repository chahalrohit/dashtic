import React from "react";
import { PageHeader } from "../../../Shared/Prism/Prism";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Input,
  CardFooter,
  CardTitle,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import * as data from "./data";
import ReactApexChart from "react-apexcharts";
import {
  ApexChart2,
  BestEmployees,
  ProjectStatus,
  ApplicationStatus,
  EmployeeDetails,
  ProjectTracked
} from "./data";
const Dashboard04 = () => (
  <div>

    <PageHeader title="Hr Dashboard" date="Select Date" />
   
    <Row>
      <Col lg={4}>
        <Card>
          <CardBody>
            <Row>
              <Col className="mb-lg-4 mb-xl-0">
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
                <div className="chart-circle-value text-center fs-20">85%</div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col lg={4}>
        <Card>
          <CardBody>
            <Row>
              <Col className="mb-lg-4 mb-xl-0">
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
                  className="mx-auto chart-circle chart-circle-md chart-circle-success mt-sm-0 mb-0"
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
      <Col lg={4}>
        <Card>
          <CardBody>
            <Row>
              <Col className="mb-lg-4 mb-xl-0">
                <div className="mb-2 fs-18 text-muted">Rejected</div>
                <h1 className="font-weight-bold mb-1">74,745</h1>
                <span className="text-danger">
                  <i className="fa fa-arrow-down me-1"></i> -2.4%
                </span>
              </Col>
              <Col className="col-auto">
                <ReactApexChart
                  options={data.Radialbar2.options}
                  series={data.Radialbar2.series}
                  type="radialBar"
                  className="mx-auto chart-circle chart-circle-md chart-circle-secondary mt-sm-0 mb-0"
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
    <Row className="row row-deck">
      <Col md={12} xl={8} lg={7}>
        <Card>
          <CardHeader className="d-sm-flex d-block">
            <CardTitle as="h3">Project Tracked</CardTitle>
            <div className="d-flex ms-auto mt-sm-0 mt-2">
              <UncontrolledDropdown className="btn-group mb-0">
                <DropdownToggle
                  color=""
                  tag="a"
                  type="button"
                  className="btn btn-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  This Year
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu p-0">
                  <DropdownItem href="#">last Year</DropdownItem>
                  <DropdownItem href="#">2018</DropdownItem>
                  <DropdownItem href="#">2017</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>
          <CardBody>
            {/* <div id="projectTracked" className="h-300 overflow-hidden"></div> */}
            <ProjectTracked/>
          </CardBody>
          <CardFooter className="text-start">
            <Row>
              <Col xl={4} lg={4} sm={4} className=" mb-4 mb-sm-0 text-center">
                <h2 className="font-weight-normal text-dark mb-0">1,897</h2>
                <div className="text-muted mb-1 fs-13 d-inline-flex">
                  <div className="w-3 h-3 bg-primary me-2 mt-1 br-3"></div>{" "}
                  Project In
                </div>
              </Col>
              <Col xl={4} lg={4} sm={4} className=" mb-4 mb-sm-0 text-center">
                <h2 className="font-weight-normal text-dark mb-0">3,785</h2>
                <div className="text-muted mb-1 fs-13 d-inline-flex">
                  <div className="w-3 h-3 bg-secondary me-2 mt-1 br-3"></div>{" "}
                  Project Take
                </div>
              </Col>
              <Col xl={4} lg={4} sm={4} className=" text-center">
                <h2 className="font-weight-normal text-dark mb-0">16,897</h2>
                <div className="text-muted mb-1 fs-13 d-inline-flex">
                  <div className="w-3 h-3 bg-light-color me-2 mt-1 br-3"></div>{" "}
                  On Hold
                </div>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Col>
      <Col xl={4} md={12} lg={5}>
        <Card>
          <CardHeader>
            <CardTitle as="h3">Best Employees</CardTitle>
            <div className="card-options ">
              <UncontrolledDropdown className="btn-group mb-0">
                <DropdownToggle
                  color=""
                  tag="a"
                  className="option-dots"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-v"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu">
                  <DropdownItem href=""> Download Print</DropdownItem>
                  <DropdownItem href="">Last Week</DropdownItem>
                  <DropdownItem href="">Last Month</DropdownItem>
                  <DropdownItem href="">Yearly</DropdownItem>
                  <div className="dropdown-divider"></div>
                  <DropdownItem href="">
                    <i className="fa fa-cog me-2"></i> Settings
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>
          <CardBody className=" p-3">
            <div className="table-responsive">
              <Table className="table transaction-table mb-0 text-nowrap">
                <tbody>
                  {BestEmployees.map((list, index) => (
                    <tr key={index}>
                      <td className="d-sm-flex">
                        <img
                          className="w-7 h-7 rounded shadow me-3"
                          src={list.img}
                          alt="media1"
                        />
                        <div className="mt-1">
                          <h6 className="mb-1 font-weight-semibold">
                            {list.name}
                          </h6>
                          <small className="text-muted">{list.work}</small>
                        </div>
                      </td>
                      <td className="text-end">
                        <Link className="btn btn-white" to="#">
                          Profile
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!--End Row--> */}

    <Row className=" row-deck">
      <Col xl={4}>
        <Card>
          <CardHeader>
            <CardTitle as="h3">Project Status</CardTitle>
            <div className="d-flex ms-auto">
              <UncontrolledDropdown className="btn-group mb-0">
                <DropdownToggle
                  color=""
                  tag="a"
                  type="button"
                  className="btn btn-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  This Year
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu p-0">
                  <DropdownItem href="#">last Year</DropdownItem>
                  <DropdownItem href="#">2018</DropdownItem>
                  <DropdownItem href="#">2017</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>
          <CardBody className=" mx-auto text-center">
            <div className="overflow-hidden">
              <div className="chart-container">
                <ApexChart2 />
              </div>
            </div>
          </CardBody>
          <CardBody className=" p-0">
            <Table className="table table-hover mb-0">
              <tbody>
                {ProjectStatus.map((list, index) => (
                  <tr className="border-bottom" key={index}>
                    <td className="p-3 d-flex">
                      <div className={list.class}></div> {list.title}
                    </td>
                    <td className="p-3">{list.num}</td>
                    <td className="p-3">{list.performance}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      <Col xl={8}>
        <Card>
          <CardHeader>
            <CardTitle as="h3">Application Status</CardTitle>
          </CardHeader>
          <div className="p-5">
            <Row className=" d-sm-flex d-block">
              <Col className="my-2">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </Col>
              <Col className="my-2">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Date"
                />
              </Col>
              <Col className="my-2">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Reason"
                />
              </Col>
              <Col className="my-2">
                <Link className="btn btn-primary btn-block" to="#">
                  Search
                </Link>
              </Col>
            </Row>
          </div>
          <CardBody className=" table-responsive p-0 mx-313 scroll-3">
            <Table className="table card-table table-vcenter text-nowrap table-borderedless border-0 inde4-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Date</th>
                  <th>Employee</th>
                  <th>Leave</th>
                  <th>Period</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {ApplicationStatus.map((list, index) => (
                  <tr key={index}>
                    <td>{list.Code}</td>
                    <td>{list.Date}</td>
                    <td>{list.Employee}</td>
                    <td>{list.Leave}</td>
                    <td>{list.Period}</td>
                    <td>{list.Reason}</td>
                    <td>
                      <span className={list.class}>{list.Status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
          <CardFooter className="card-footer text-center">
            <Link className="btn-link" to="#">
              View All
            </Link>
          </CardFooter>
        </Card>
      </Col>
    </Row>

    {/* <!-- Row--> */}
    <Row>
      <Col md={12}>
        <Card>
          <CardHeader>
            <CardTitle as="h3">Employee Details</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
              <Table className="table table-vcenter text-nowrap mb-0 border">
                <thead>
                  <tr>
                    <th className="border-bottom-0">Employee</th>
                    <th className="text-center">Occupation</th>
                    <th className="text-center">Projects</th>
                    <th className="text-center">Performance</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {EmployeeDetails.map((list, i) => (
                    <tr key={i}>
                      <td className="d-flex">
                        <img
                          className="avatar-lg rounded-circle me-3"
                          src={list.pic}
                          alt="Image description"
                        />
                        <div className="ms-3 mt-2">
                          <h5 className="mb-0 text-dark">{list.name}</h5>
                          <p className="mb-0  fs-13 text-muted">{list.email}</p>
                        </div>
                      </td>
                      <td className="text-center">{list.work}</td>
                      <td className="text-center">{list.projecrt}</td>
                      <td>
                      <div className="mx-auto chart-circle chart-circle-xs chart-circle-success  mt-sm-0 mb-0">
                      <data.Round />
                      <div className="mx-auto chart-circle-value chartcircle text-center">
                            {list.performance}
                        </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <Link className="btn btn-light" to="#">
                          {" "}
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    
    {/* <!-- End Row --> */}
  </div>
);

Dashboard04.propTypes = {};

Dashboard04.defaultProps = {};

export default Dashboard04;
