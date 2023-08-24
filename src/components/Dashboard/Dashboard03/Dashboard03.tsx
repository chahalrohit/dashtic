import React from "react";
import user1 from "../../../assets/images/users/1.jpg"
import user2 from "../../../assets/images/users/2.jpg"
import user4 from "../../../assets/images/users/4.jpg"
import user14 from "../../../assets/images/users/14.jpg"
import user8 from "../../../assets/images/users/8.jpg"
import user10 from "../../../assets/images/users/10.jpg"
import user3 from "../../../assets/images/users/3.jpg"
import {Row,Col,Card,CardBody,CardHeader,Progress,CardTitle,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,Table} from "reactstrap"
import {ApexChart2} from "../Dashboard02/data"
import SimpleBar from 'simplebar-react';
import {Link} from "react-router-dom"
import { PageHeader } from '../../../Shared/Prism/Prism';
import {ProjectInvestment,ApexChart3,CompleteInvoices} from "./data"
const Dashboard03 = () => (
  <div>
     <PageHeader title="Project Management" date="Select Date"  />
  
    <Row>
      <Col md={12} xl={4}>
        <Card className="expenses-card overflow-hidden">
          <CardBody>
            <div className="feature">
              <i className="fa fa-university feature-icon"></i>
              <h1 className="font-weight-bold mb-0 mt-4">$12,345.00</h1>
              <p className="text-muted fs-18 mb-0">Expenses This Month</p>
            </div>
          </CardBody>
          <div className="chart-wrapper">
            <div className="chart-container">
          <ApexChart3/>
          </div>
          </div>
        </Card>
      </Col>
      <Col md={12} xl={8}>
        <Card>
          <CardBody>
            <Row>
              <Col  className="col-12 col-sm d-flex mb-4 mb-sm-0">
                <i className="mdi mdi-basket-fill fs-60 text-success icon-dropshadow-success me-3"></i>
                <div className="mt-5">
                  <h6>Total Orders</h6>
                  <h3 className="mb-0 font-weight-bold">2245</h3>
                </div>
              </Col>
              <Col  className="col-12 col-sm d-flex mb-4 mb-sm-0">
                <i className="mdi mdi-basket-fill fs-60 text-primary icon-dropshadow-primary me-3"></i>
                <div className="mt-5">
                  <h6>Recent Order</h6>
                  <h3 className="mb-0 font-weight-bold">45%</h3>
                </div>
              </Col>
              <Col className="col-12 col-sm d-flex">
                <i className="mdi mdi-basket-fill fs-60 text-danger icon-dropshadow-danger me-3"></i>
                <div className="mt-5">
                  <h6>Cancel Orders</h6>
                  <h3 className="mb-0 font-weight-bold">56%</h3>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Row>
          <Col md={12} lg={4}xl={4}>
            <Card>
              <CardBody>
                <p className="mb-1">Total Invoices</p>
                <h2 className="mb-1 font-weight-bold">245</h2>
                <span className="mb-1 text-muted">
                  <span className="text-danger">
                    <i className="fa fa-caret-down  me-1"></i> 43.2
                  </span>{" "}
                  last month
                </span>
              </CardBody>
            </Card>
          </Col>
          <Col md={12} lg={4}xl={4}>
            <Card>
              <CardBody>
                <p className="mb-1">Credited Amount</p>
                <h2 className="mb-1 font-weight-bold">$53k</h2>
                <span className="mb-1 text-muted">
                  <span className="text-success">
                    <i className="fa fa-caret-up  me-1"></i> 19.8
                  </span>{" "}
                  last month
                </span>
              </CardBody>
            </Card>
          </Col>
          <Col md={12} lg={4}xl={4}>
            <Card>
              <CardBody>
                <p className="mb-1">Pending Amount</p>
                <h2 className="mb-1 font-weight-bold">$2345</h2>
                <span className="mb-1 text-muted">
                  <span className="text-success">
                    <i className="fa fa-caret-up  me-1"></i> 0.8%
                  </span>{" "}
                  last month
                </span>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row className="row-deck">
      <Col lg={12} md={12}xl={4}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Project Status</CardTitle>
            <div className="d-flex ms-auto">
              <UncontrolledDropdown className="btn-group mb-0">
                <DropdownToggle
                  type="button"
                  className="btn btn-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"color=""
                >
                  This week
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem className="dropdown-item" href="#">
                    Next Week
                  </DropdownItem>
                  <div className="dropdown-divider"></div>
                  <DropdownItem className="dropdown-item" href="#">
                    {" "}
                    Last Month
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>
          <CardBody>
            <div className="latest-timeline latest-timeline1">
              <ul className="timeline mb-0">
                <li className="mt-0 media media-lg">
                  <span className="latest-timeline1-icon bg-primary shadow3">
                    10
                  </span>
                  <div className="media mt-0">
                    <div className="media-body">
                      <h6 className="mb-1">
                        <Link to="#" className="font-weight-semibold fs-17">
                          Angular Project
                        </Link>
                        <span className="badge bg-success ms-2">Completed</span>
                      </h6>
                      <p className="mt-1 fs-13 mb-1">
                        <b>Client:</b> Hoyt Righter
                      </p>
                      <span className="text-muted fs-12 d-block">12.00 am</span>
                      <Link
                        className="text-primary fs-12 font-weight-bold"
                        to="#"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="mt-0 media media-lg">
                  <div className="media mt-0">
                    <span className="latest-timeline1-icon bg-secondary shadow3">
                      11
                    </span>
                    <div className="media-body">
                      <h6 className="mb-1">
                        <Link to="#" className="font-weight-semibold fs-17">
                          Html Project
                        </Link>
                        <span className="badge bg-secondary ms-2">Hold</span>
                      </h6>
                      <p className="mt-1 fs-13 mb-1">
                        <b>Client:</b> Riva Digangi
                      </p>
                      <span className="text-muted fs-12 d-block">11.00 am</span>
                      <Link
                        className="text-primary fs-12 font-weight-bold"
                        to="#"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="mt-0 media media-lg">
                  <div className="media mt-0">
                    <span className="latest-timeline1-icon bg-success shadow3">
                      12
                    </span>
                    <div className="media-body">
                      <h6 className="mb-1">
                        <Link to="#" className="font-weight-semibold fs-17">
                          Php Project
                        </Link>
                        <span className="badge bg-primary ms-2">Running</span>
                      </h6>
                      <p className="mt-1 fs-13 mb-1">
                        <b>Client:</b> Craig Dollard{" "}
                      </p>
                      <span className="text-muted fs-12 d-block">10.00am</span>
                      <Link
                        className="text-primary fs-12 font-weight-bold"
                        to="#"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md={12} lg={12} xl={8}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Project Investment</CardTitle>
            <div className="d-flex ms-auto">
              <UncontrolledDropdown className="btn-group mb-0">
                <DropdownToggle
                color=""
                  type="button"
                  className="btn btn-white dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  This Year
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu p-0">
                  <DropdownItem className="dropdown-item" href="#">
                    last Year
                  </DropdownItem>
                  <DropdownItem className="dropdown-item" href="#">
                    2018
                  </DropdownItem>
                  <DropdownItem className="dropdown-item" href="#">
                    2017
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>
          <CardBody>
            <div id="ProjectInvestment" className="h-330">
              <ProjectInvestment/>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md={12} lg={5} xl={4}>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle as='h3'>Project Statistics</CardTitle>
          </CardHeader>
          <CardBody className="mx-auto text-center pb-0">
            <div className="chart-container2">
              <ApexChart2/>
            </div>
          </CardBody>
          <CardBody className="pt-0 border-top-0">
            <Row className=" mt-4 no-gutters">
              <Col>
                <div className="text-muted mb-1 fs-13 d-flex">
                  <div className="w-3 h-3 bg-primary me-2 mt-1 brround"></div>{" "}
                  Running
                </div>
              </Col>
              <Col>
                <div className="text-muted mb-1 fs-13 d-flex">
                  <div className="w-3 h-3 bg-secondary me-2 mt-1 brround"></div>{" "}
                  Pending
                </div>
              </Col>
              <Col>
                <div className="text-muted mb-1 fs-13 d-flex">
                  <div className="w-3 h-3 bg-success me-2 mt-1 brround"></div>{" "}
                  Completed
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col md={12} lg={7} xl={8}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Complete Invoices</CardTitle>
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
                <DropdownMenu className="dropdown-menu">
                  <DropdownItem className="dropdown-item" href="#">
                    {" "}
                    Download Print
                  </DropdownItem>
                  <DropdownItem className="dropdown-item" href="#">
                    Last Week
                  </DropdownItem>
                  <DropdownItem className="dropdown-item" href="#">
                    Last Month
                  </DropdownItem>
                  <DropdownItem className="dropdown-item" href="#">
                    Yearly
                  </DropdownItem>
                  <div className="dropdown-divider"></div>
                  <DropdownItem className="dropdown-item" href="#">
                    <i className="fa fa-cog me-2"></i> Settings
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>
          <CardBody>
            <div className="">
              <div className="table-responsive invoice-table-responsive">
                <Table className="table card-table table-vcenter text-nowrap mb-0 border">
                  <thead>
                    <tr>
                      <th className="wd-lg-10p">Client</th>
                      <th className="wd-lg-20p">Date</th>
                      <th className="wd-lg-20p">Invoice</th>
                      <th className="wd-lg-20p">Amount</th>
                      <th className="wd-lg-20p">Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CompleteInvoices.map((list, index) => (
                    <tr key={index}>
                      <td className="font-weight-semibold">{list.Client}</td>
                      <td className="text-nowrap">{list.Date}</td>
                      <td>{list.Invoice}</td>
                      <td>{list.Amount}</td>
                      <td>
                        <span className={list.class}>
                          {list.Status}
                        </span>
                      </td>
                      <td>
                        <UncontrolledDropdown className="btn-group mb-0">
                          <DropdownToggle color=""
                            type="button"
                            className="btn btn-white dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Actions
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem className="dropdown-item" href="#">
                              Copy
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              Send Email
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              Before Due
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              Print Invoice
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              Download Print
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
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
      <Col  md={12} lg={12} xl={4}>
        <Card>
          <CardHeader>
            <CardTitle as='h3'>Project Payment Status</CardTitle>
          </CardHeader>
          <CardBody className="p-5">
            <div className="d-flex align-items-end justify-content-between mg-b-5">
              <h6 className="">Angular Project</h6>
              <h6 className="font-weight-bold mb-1">50%</h6>
            </div>
            <div className=" progress-sm mb-5">
              <Progress
                className="progress-bar"
                style={{
                    height: '9px'
                  }}
                  value={50}
                  color="primary"
              ></Progress>
            </div>
            <div className="d-flex align-items-end justify-content-between mg-b-5">
              <h6 className="">Php Project</h6>
              <h6 className="font-weight-bold mb-1">60%</h6>
            </div>
            <div className=" progress-sm mb-5">
              <Progress
                className="progress-bar "
                style={{
                    height: '9px'
                  }}
                  value={60}
                  color="secondary"
              ></Progress>
            </div>
            <div className="d-flex align-items-end justify-content-between mg-b-5">
              <h6 className="">Ecommerce Project</h6>
              <h6 className="font-weight-bold mb-1">40%</h6>
            </div>
            <div className=" progress-sm mb-5">
            <Progress
    className="my-3 progress-bar "
    style={{
      height: '9px'
    }}
    value={40}
    color="info"
  />
              
            </div>
            <div className="d-flex align-items-end justify-content-between mg-b-5">
              <h6 className="">Html Project</h6>
              <h6 className="font-weight-bold mb-1">100%</h6>
            </div>
            <div className=" progress-sm mb-5">
              <Progress
                className="progress-bar"
                style={{
                    height: '9px'
                  }}
                  value={100}
                  color="success"
              ></Progress>
            </div>
            <div className="d-flex align-items-end justify-content-between mg-b-5">
              <h6 className="">Java Project</h6>
              <h6 className="font-weight-bold mb-1">50%</h6>
            </div>
            <div className=" progress-sm mb-5">
              <Progress
                className="progress-bar"
                style={{
                    height: '9px'
                  }}
                  value={50}
                  color="danger"
              ></Progress>
            </div>
            <div className="d-flex align-items-end justify-content-between mg-b-5">
              <h6 className="">Wordpress Project</h6>
              <h6 className="font-weight-bold mb-1">90%</h6>
            </div>
            <div className=" progress-sm mb-0">
              <Progress
                className="progress-bar "
                style={{
                    height: '9px'
                  }}
                  value={90}
                color="warning"
              ></Progress>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg={12} md={12}xl={4}>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle as='h3'>Project Review Activity</CardTitle>
          </CardHeader>
          <div className="p-4 scrollbar" id="scrollbar">
          <SimpleBar style={{height: '340px'}}>
            <div className="activity">
              <img src={user14} alt="" className="img-activity shadow3 border-primary"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    Adam Berry{" "}
                    <span className="text-muted">Add a new projects </span>{" "}
                    AngularJS Template
                  </p>
                  <small className="text-muted ">30 mins ago</small>
                </div>
              </div>
              <img src={user10} alt="" className="img-activity shadow3 border-secondary"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    Irene Hunter{" "}
                    <span className="text-muted"> Add a new projects </span>Free
                    HTML Template
                  </p>
                  <small className="text-muted ">1 days ago</small>
                </div>
              </div>
              <img src={user4} alt="" className="img-activity shadow3 border-success"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    John Payne
                    <span className="text-muted"> Add a new projects </span>Free
                    PSD Template
                  </p>
                  <small className="text-muted ">3 days ago</small>
                </div>
              </div>
              <img src={user8} alt="" className="img-activity shadow3 border-danger"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    Julia Hardacre
                    <span className="text-muted"> Add a new projects </span>Free
                    UI Template
                  </p>
                  <small className="text-muted ">5 days ago</small>
                </div>
              </div>
              <img src={user14} alt="" className="img-activity shadow3 border-primary"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    Adam Berry{" "}
                    <span className="text-muted">Add a new projects </span>{" "}
                    AngularJS Template
                  </p>
                  <small className="text-muted ">30 mins ago</small>
                </div>
              </div>
              <img src={user10} alt="" className="img-activity shadow3 border-secondary"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    Irene Hunter{" "}
                    <span className="text-muted"> Add a new projects </span>Free
                    HTML Template
                  </p>
                  <small className="text-muted ">1 days ago</small>
                </div>
              </div>
              <img src={user4} alt="" className="img-activity shadow3 border-success"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    John Payne
                    <span className="text-muted"> Add a new projects </span>Free
                    PSD Template
                  </p>
                  <small className="text-muted ">3 days ago</small>
                </div>
              </div>
              <img src={user8} alt="" className="img-activity shadow3 border-danger"/>
              <div className="time-activity mb-0">
                <div className="item-activity mb-0">
                  <p className="mb-0 font-weight-bold">
                    Julia Hardacre
                    <span className="text-muted"> Add a new projects </span>Free
                    UI Template
                  </p>
                  <small className="text-muted ">5 days ago</small>
                </div>
              </div>
            </div>
            </SimpleBar>
          </div>
        </Card>
      </Col>
      <Col lg={12} md={12}xl={4}>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle as='h3'>Email Notification</CardTitle>
          </CardHeader>
          <div className="p-4 scrollbar2" id="scrollbar2">
          <SimpleBar style={{height: '340px'}}>
            <div className="activity">
              <img src={user4} alt="" className="img-activity shadow3 border-primary"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    New Project <span className="text-muted">Issue Fixed</span>
                  </p>
                  <small className="text-muted ">30 mins ago</small>
                </div>
              </div>
              <img src={user2} alt="" className="img-activity shadow3 border-secondary"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    Wordpress Project
                    <span className="text-muted"> New theme updated </span>
                  </p>
                  <small className="text-muted ">1 days ago</small>
                </div>
              </div>
              <img src={user1} alt="" className="img-activity shadow3 border-success"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    E-Commerce
                    <span className="text-muted">
                      Plugin Issue Fixed and Updated
                    </span>
                  </p>
                  <small className="text-muted ">3 days ago</small>
                </div>
              </div>
              <img src={user3} alt="" className="img-activity shadow3 border-danger"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    New Theme
                    <span className="text-muted"> Updated in Site</span>
                  </p>
                  <small className="text-muted ">5 days ago</small>
                </div>
              </div>
              <img src={user4} alt="" className="img-activity shadow3 border-primary"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    New Project <span className="text-muted">Issue Fixed</span>
                  </p>
                  <small className="text-muted ">30 mins ago</small>
                </div>
              </div>
              <img src={user2} alt="" className="img-activity shadow3 border-secondary"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    Wordpress Project
                    <span className="text-muted"> New theme updated </span>
                  </p>
                  <small className="text-muted ">1 days ago</small>
                </div>
              </div>
              <img src={user1} alt="" className="img-activity shadow3 border-success"/>
              <div className="time-activity">
                <div className="item-activity">
                  <p className="mb-0 font-weight-bold">
                    E-Commerce
                    <span className="text-muted">
                      Plugin Issue Fixed and Updated
                    </span>
                  </p>
                  <small className="text-muted ">3 days ago</small>
                </div>
              </div>
            </div>
         </SimpleBar>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
);

Dashboard03.propTypes = {};

Dashboard03.defaultProps = {};

export default Dashboard03;
