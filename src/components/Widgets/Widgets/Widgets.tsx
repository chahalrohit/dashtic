import React from 'react';
import { Card, CardBody, CardFooter, CardTitle, Col, Row,Button, Progress } from 'reactstrap';
import user1 from "../../../assets/images/users/1.jpg"
import user16 from "../../../assets/images/users/16.jpg"
import user3 from "../../../assets/images/users/3.jpg"
import photo1 from "../../../assets/images/photos/1.jpg"
import photo2 from "../../../assets/images/photos/2.jpg"
import photo3 from "../../../assets/images/photos/3.jpg"
import photo4 from "../../../assets/images/photos/4.jpg"
import photo5 from "../../../assets/images/photos/5.jpg"
import photo6 from "../../../assets/images/photos/6.jpg"
import { PageHeaders } from '../../../Shared/Prism/Prism';
import { CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';


const Widgets = () => (
  <div>

                        <PageHeaders
      title="Widgets"
      home="Home"
      name="Widgets"
      fonticonsname="Widgets"
    />
                        <Row>
                            <Col xl={4}lg={4}md={12}>
                                <Card>
                                    <CardBody>
                                        <svg className="card-custom-icon text-success icon-dropshadow-success" x="1008" y="1248" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                                <path opacity=".0" d="M3.31,11 L5.51,19.01 L18.5,19 L20.7,11 L3.31,11 Z M12,17 C10.9,17 10,16.1 10,15 C10,13.9 10.9,13 12,13 C13.1,13 14,13.9 14,15 C14,16.1 13.1,17 12,17 Z"></path>
                                                <path d="M22,9 L17.21,9 L12.83,2.44 C12.64,2.16 12.32,2.02 12,2.02 C11.68,2.02 11.36,2.16 11.17,2.45 L6.79,9 L2,9 C1.45,9 1,9.45 1,10 C1,10.09 1.01,10.18 1.04,10.27 L3.58,19.54 C3.81,20.38 4.58,21 5.5,21 L18.5,21 C19.42,21 20.19,20.38 20.43,19.54 L22.97,10.27 L23,10 C23,9.45 22.55,9 22,9 Z M12,4.8 L14.8,9 L9.2,9 L12,4.8 Z M18.5,19 L5.51,19.01 L3.31,11 L20.7,11 L18.5,19 Z M12,13 C10.9,13 10,13.9 10,15 C10,16.1 10.9,17 12,17 C13.1,17 14,16.1 14,15 C14,13.9 13.1,13 12,13 Z"></path>
                                            </svg>
                                        <p className=" mb-1 ">All Orders</p>
                                        <h2 className="mb-1 font-weight-bold">3257</h2>
                                        <span className="mb-1 text-muted"><span className="text-danger"><i className="fa fa-caret-down  me-1"></i> 43.2</span> than last month</span>
                                        <div className=" mt-3 ">
                                        <Progress
                      className="bg-success-transparent"
                      style={{
                        height: "8px",
                      }}
                      color="br-5 bg-success "
                      animated
                      value="78"
                    ></Progress>
                                       
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={4}lg={4}md={12}>
                                <Card>
                                    <CardBody>
                                        <svg className="card-custom-icon text-secondary icon-dropshadow-secondary" x="1008" y="1248" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                                <path opacity=".0" d="M12.07,6.01 C8.2,6.01 5.07,9.14 5.07,13.01 C5.07,16.88 8.2,20.01 12.07,20.01 C15.94,20.01 19.07,16.88 19.07,13.01 C19.07,9.14 15.94,6.01 12.07,6.01 Z M13.07,14.01 L11.07,14.01 L11.07,8.01 L13.07,8.01 L13.07,14.01 Z"></path>
                                                <path d="M9.07,1.01 L15.07,1.01 L15.07,3.01 L9.07,3.01 L9.07,1.01 Z M11.07,8.01 L13.07,8.01 L13.07,14.01 L11.07,14.01 L11.07,8.01 Z M19.1,7.39 L20.52,5.97 C20.09,5.46 19.62,4.98 19.11,4.56 L17.69,5.98 C16.14,4.74 14.19,4 12.07,4 C7.1,4 3.07,8.03 3.07,13 C3.07,17.97 7.09,22 12.07,22 C17.05,22 21.07,17.97 21.07,13 C21.07,10.89 20.33,8.93 19.1,7.39 Z M12.07,20.01 C8.2,20.01 5.07,16.88 5.07,13.01 C5.07,9.14 8.2,6.01 12.07,6.01 C15.94,6.01 19.07,9.14 19.07,13.01 C19.07,16.88 15.94,20.01 12.07,20.01 Z"></path></svg>
                                        <p className=" mb-1 ">Pending Orders</p>
                                        <h2 className="mb-1 font-weight-bold">1658</h2>
                                        <span className="mb-1 text-muted"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 19.8</span> than last month</span>
                                        <div className=" mt-3 ">
                                            <Progress
                      className="bg-secondary-transparent"
                      style={{
                        height: "8px",
                      }}
                      color="br-5 bg-secondary "
                      animated
                      value="58"
                    ></Progress>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={4}lg={4}md={12}>
                                <Card>
                                    <CardBody>
                                        <svg className="card-custom-icon text-primary icon-dropshadow-primary" x="1008" y="1248" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                                <path d="M17.65,6.35 C16.2,4.9 14.21,4 12,4 C7.58,4 4.01,7.58 4.01,12 C4.01,16.42 7.58,20 12,20 C15.73,20 18.84,17.45 19.73,14 L17.65,14 C16.83,16.33 14.61,18 12,18 C8.69,18 6,15.31 6,12 C6,8.69 8.69,6 12,6 C13.66,6 15.14,6.69 16.22,7.78 L13,11 L20,11 L20,4 L17.65,6.35 Z"></path></svg>
                                        <p className=" mb-1 ">Refund Request</p>
                                        <h2 className="mb-1 font-weight-bold">168</h2>
                                        <span className="mb-1 text-muted"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 0.8%</span> than last month</span>
                                        <div className=" mt-3 ">
                                        <Progress
                      className="bg-primary-transparent"
                      style={{
                        height: "8px",
                      }}
                      color="br-5 bg-primary "
                      animated
                      value="58"
                    ></Progress>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={3}lg={6}md={12}>
                                <Card>
                                    <CardBody>
                                        <i className="mdi mdi-file-outline card-custom-icon icon-dropshadow-primary text-primary fs-60"></i>
                                        <p className=" mb-1">Page Views</p>
                                        <h2 className="mb-1 font-weight-bold">234k</h2>
                                        <span className="mb-1 text-muted"><span className="text-danger"><i className="fa fa-caret-down  me-1"></i> 43.2</span> than last month</span>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={3}lg={6}md={12}>
                                <Card>
                                    <CardBody>
                                        <i className="mdi mdi-clock card-custom-icon icon-dropshadow-warning text-warning fs-60"></i>
                                        <p className=" mb-1">Time On Site</p>
                                        <h2 className="mb-1 font-weight-bold">12m 3s</h2>
                                        <span className="mb-1 text-muted"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 19.8</span> than last month</span>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={3}lg={6}md={12}>
                                <Card>
                                    <CardBody>
                                        <i className="mdi mdi-heart-outline card-custom-icon icon-dropshadow-success text-success fs-60"></i>
                                        <p className=" mb-1">Impressions</p>
                                        <h2 className="mb-1 font-weight-bold">168</h2>
                                        <span className="mb-1 text-muted"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 0.8%</span> than last month</span>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={3}lg={6}md={12}>
                                <Card>
                                    <CardBody>
                                        <i className="mdi mdi-account-multiple-outline card-custom-icon icon-dropshadow-secondary text-secondary fs-60"></i>
                                        <p className=" mb-1">Total Followers</p>
                                        <h2 className="mb-1 font-weight-bold">3456k</h2>
                                        <span className="mb-1 text-muted"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 0.8%</span> than last month</span>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col xl={4}md={12}lg={12}>
                                <Card className="bg-primary text-white">
                                    <CardBody className="text-center">
                                        <img className="avatar avatar-xxl brround mb-5" src={user16} alt="img"/>
                                        <h4 className="font-weight-semibold mb-1">John Thomson</h4>
                                        <p className="fs-12 mb-0">UI/UX Designer</p>
                                    </CardBody>
                                    <CardBody className="border-transparent">
                                        <Row className="mb-3">
                                            <Col className="col-4 fs-12">Previous</Col>
                                            <Col className="col-8 font-weight-semibold fs-12">New Tech Software Pvt Ltd</Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-4 fs-12">Education</Col>
                                            <Col className="col-8 font-weight-semibold fs-12">Bachelors of Engineering</Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={4}md={12}lg={12}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="card-title">Interview Schedule</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <h3 className="font-weight-bold">04<sup>th</sup> July, 2020</h3>
                                        <div className="d-flex mb-3">
                                            <div className="icon icon-shape bg-primary rounded-circle text-white mb-0 me-3">
                                                <div>04</div>
                                            </div>
                                            <div>
                                                <p className="mb-1">New Modal Technologies<br/> <b>Software Pvt ltd</b></p>
                                                <small className="text-muted">10.04am</small>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="icon icon-shape bg-secondary rounded-circle text-white mb-0 me-3">
                                                <div>04</div>
                                            </div>
                                            <div>
                                                <p className="mb-1">New Modal Technologies<br/> <b>Software Pvt ltd</b></p>
                                                <small className="text-muted">12.04pm</small>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={4}md={12}lg={12}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Revenue of this Month</CardTitle>
                                    </CardHeader>
                                    <CardBody className="p-6">
                                        <div className="d-flex align-items-center justify-content-between mg-b-5 mg-t-15">
                                            <h6 className="tx-uppercase tx-10 tx-spacing-1 tx-color-02 tx-semibold mg-b-0">Monthly Profit</h6>
                                            <span className="tx-10 tx-color-04">57.45% goal reached</span>
                                        </div>
                                        <div className="d-flex align-items-end justify-content-between mg-b-5">
                                            <h4 className="font-weight-bold">$25,854</h4>
                                            <h4 className="font-weight-bold">45,000</h4>
                                        </div>
                                        <div className="mb-7">
                                            <Progress
                      className="bg-primary-transparent"
                      style={{
                        height: "8px",
                      }}
                      color="br-5 bg-primary "
                      value="50"
                    ></Progress>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mg-b-5 mg-t-20">
                                            <h6 className="tx-uppercase tx-10 tx-spacing-1 tx-color-02 tx-semibold mg-b-0">Monthly Orders</h6>
                                            <span className="tx-10 tx-color-04">52.43% goal reached</span>
                                        </div>
                                        <div className="d-flex justify-content-between mg-b-5">
                                            <h4 className="font-weight-bold">8,654</h4>
                                            <h4 className="font-weight-bold">50,000</h4>
                                        </div>
                                        <div className=" mb-0">
                                            <Progress
                      className="bg-warning-transparent"
                      style={{
                        height: "8px",
                      }}
                      color="br-5 bg-warning "
                      value="50"
                    ></Progress>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        {/* <!--Row--> */}
                        <Row>
                            <Col lg={4}>
                                <Card>
                                    <CardBody>
                                        <div className="mb-4 fs-14 font-weight-semibold">
                                            Actual Revenue Vs Target Revenue
                                        </div>
                                        <Row>
                                            <Col>
                                                Target Achivement
                                            </Col>
                                            <Col className="col-auto">
                                                <span className="text-success h5">+90%</span>
                                            </Col>
                                        </Row>
                                        <div className="mb-3 mt-2">
                                            <Progress
                      className="bg-primary-transparent"
                      style={{
                        height: "8px",
                      }}
                      color="br-5 bg-primary "
                      value="90"
                    ></Progress>
                                        </div>
                                        <Row>
                                            <Col>
                                                <div className="mt-4">
                                                    <h6 className="mb-1 fs-12">Target Revenue</h6>
                                                    <h4 className="mb-0 font-weight-semibold">$35,425</h4>
                                                </div>
                                            </Col>
                                            <Col className="col-auto">
                                                <div className="mt-4">
                                                    <h6 className="mb-1 fs-12">Actual Revenue</h6>
                                                    <h4 className="mb-0 font-weight-semibold">$28,425</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card>
                                    <CardBody>
                                        <div className="mb-4 fs-14 font-weight-semibold">
                                            Actual Customers Vs Target
                                        </div>
                                        <Row>
                                            <Col>
                                                Target Achivement
                                            </Col>
                                            <Col className="col-auto">
                                                <span className="text-danger h5">-25%</span>
                                            </Col>
                                        </Row>
                                        <div className=" mb-3 mt-2">
                                            <Progress
                      className="bg-secondary-transparent"
                      style={{
                        height: "8px",
                      }}
                      color="br-5 bg-secondary "
                      value="30"
                    ></Progress>
                                        </div>
                                        <Row>
                                            <Col>
                                                <div className="mt-4">
                                                    <h6 className="mb-1 fs-12">Target Customers</h6>
                                                    <h4 className="mb-0 font-weight-semibold">5,643</h4>
                                                </div>
                                            </Col>
                                            <Col className="col-auto">
                                                <div className="mt-4">
                                                    <h6 className="mb-1 fs-12">Actual Customers</h6>
                                                    <h4 className="mb-0 font-weight-semibold">2,341</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card>
                                    <CardBody>
                                        <div className="mb-4 fs-14 font-weight-semibold">
                                            Customer Avg Revenue Vs Target
                                        </div>
                                        <Row>
                                            <Col>
                                                Target Achievement
                                            </Col>
                                            <Col className="col-auto">
                                                <span className="text-success h5">+95%</span>
                                            </Col>
                                        </Row>
                                        <div className=" mb-3 mt-2">
                                            <Progress
                      className="bg-success-transparent"
                      style={{
                        height: "8px",
                      }}
                      color="br-5 bg-success "
                      value="95"
                    ></Progress>
                                        </div>
                                        <Row>
                                            <Col>
                                                <div className="mt-4">
                                                    <h6 className="mb-1 fs-12">Target Revenue</h6>
                                                    <h4 className="mb-0 font-weight-semibold">$67,234</h4>
                                                </div>
                                            </Col>
                                            <Col className="col-auto">
                                                <div className="mt-4">
                                                    <h6 className="mb-1 fs-12">Actual Revenue</h6>
                                                    <h4 className="mb-0 font-weight-semibold">$32,543</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        {/* <!--Row--> */}
                        <Row>
                            <Col md={12}>
                                <Card>
                                    <Row className="me-0 ms-0">
                                        <Col xl={2}lg={6}sm={6} className=" pe-0 ps-0 border-end">
                                            <CardBody className="text-center">
                                                <p className="mb-1">Visits</p>
                                                <h2 className="mb-1 font-weight-bold">3,56,667</h2>
                                                <span className="mb-0 text-muted"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 0.7%</span> Last month</span>
                                            </CardBody>
                                        </Col>
                                        <Col xl={2}lg={6}sm={6} className=" pe-0 ps-0 border-end">
                                            <CardBody className="text-center">
                                                <p className="mb-1">Avg visit Duration</p>
                                                <h2 className="mb-1 font-weight-bold">39Sec</h2>
                                                <span className="mb-0 text-muted"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 0.2%</span> Last month</span>
                                            </CardBody>
                                        </Col>
                                        <Col xl={2}lg={6}sm={6} className=" pe-0 ps-0 border-end">
                                            <CardBody className="text-center">
                                                <p className="mb-1">Page Views</p>
                                                <h2 className="mb-1 font-weight-bold">5,987</h2>
                                                <span className="mb-0 text-muted"><span className="text-danger"><i className="fa fa-caret-down  me-1"></i> 12%</span> Last month</span>
                                            </CardBody>
                                        </Col>
                                        <Col xl={2}lg={6}sm={6} className=" pe-0 ps-0 border-end">
                                            <CardBody className="text-center">
                                                <p className="mb-1">Bounce Rate</p>
                                                <h2 className="mb-1 font-weight-bold">35.8%</h2>
                                                <span className="mb-0 text-muted"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 0.2%</span> Last month</span>
                                            </CardBody>
                                        </Col>
                                        <Col xl={2}lg={6}sm={6} className=" pe-0 ps-0 border-end">
                                            <CardBody className="text-center">
                                                <p className="mb-1">Pages per Visit</p>
                                                <h2 className="mb-1 font-weight-bold">2.89</h2>
                                                <span className="mb-0 text-muted"><span className="text-danger"><i className="fa fa-caret-down  me-1"></i> 1.2%</span> Last month</span>
                                            </CardBody>
                                        </Col>
                                        <Col xl={2}lg={6}sm={6} className=" pe-0 ps-0">
                                            <CardBody className="text-center">
                                                <p className="mb-1">Goal Conversion</p>
                                                <h2 className="mb-1 font-weight-bold">12.7%</h2>
                                                <span className="mb-0 text-muted"><span className="text-danger"><i className="fa fa-caret-down  me-1"></i> 0.6%</span> Last month</span>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!--End row--> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col xl={4}lg={4}md={12}>
                                <Card>
                                    <CardBody>
                                        <p className=" mb-1">Income Budget</p>
                                        <h2 className="mb-1 font-weight-bold">4500,00<span className="fs-12 text-muted mx-1">this month</span></h2>
                                        <span className="mb-1 text-muted"><span className="text-danger"><i className="fa fa-caret-down  me-1"></i> 43.2</span> vs $56,699 than last month</span>
                                        <div className=" mt-3">
                                            <Progress
                      className="bg-primary-transparent"
                      style={{
                        height: "4px",
                      }}
                      color="br-5 bg-primary "
                      value="95"
                    ></Progress>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={4}lg={4}md={12}>
                                <Card>
                                    <CardBody>
                                        <p className=" mb-1 ">Expense Budget</p>
                                        <h2 className="mb-1 font-weight-bold">5678,20<span className="fs-12 text-muted mx-1">this month</span></h2>
                                        <span className="mb-1 text-muted"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 19.8</span> vs $36,144 than last month</span>
                                        <div className=" mt-3">
                                            <Progress
                      className="bg-secondary-transparent"
                      style={{
                        height: "4px",
                      }}
                      color="br-5 bg-secondary"
                      value="58"
                    ></Progress>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={4}lg={4}md={12}>
                                <Card>
                                    <CardBody>
                                        <p className=" mb-1 ">Gross Profit Margin</p>
                                        <h2 className="mb-1 font-weight-bold">78%<span className="fs-12 text-muted mx-1">since last week</span></h2>
                                        <span className="mb-1 text-muted"><span className="text-success"><i className="fa fa-caret-up  me-1"></i> 0.8%</span> vs 1.6% than last month</span>
                                        <div className="mt-3">
                                            <Progress
                      className="bg-warning-transparent"
                      style={{
                        height: "4px",
                      }}
                      color="br-5 bg-warning"
                      value="58"
                    ></Progress>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- End Row--> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col sm={6}md={6}lg={3}>
                                <Card>
                                    <CardBody>
                                        <h2 className="mb-1 font-weight-bold">678</h2>
                                        <div className="text-muted">Visitors online</div>
                                        <div className="mt-2">
                                            <Progress
                      className="bg-primary-transparent"
                      style={{
                        height: "8px",
                      }}
                      color="br-5 bg-primary"
                      value="58"
                      animated
                      striped
                    ></Progress>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={6}md={6}lg={3}>
                                <Card>
                                    <CardBody>
                                        <h2 className="mb-1 font-weight-bold">567</h2>
                                        <div className="text-muted">Total Sales</div>
                                        <div className="mt-2">
                                            <Progress
                      className="bg-warning-transparent"
                      style={{
                        height: "8px",
                      }}
                      color="br-5 bg-warning"
                      value="58"
                      animated
                      striped
                    ></Progress>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={6}md={6}lg={3}>
                                <Card>
                                    <CardBody>
                                        <h2 className="mb-1 font-weight-bold">56</h2>
                                        <div className="text-muted">Total Projects</div>
                                        <div className="mt-2">
                                            <Progress
                      className="bg-info-transparent"
                      style={{
                        height: "8px",
                      }}
                      color="br-5 bg-info"
                      value="58"
                      animated
                      striped
                    ></Progress>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={6}md={6}lg={3}>
                                <Card>
                                    <CardBody>
                                        <h2 className="mb-1 font-weight-bold">567</h2>
                                        <div className="text-muted ">Today Income</div>
                                        <div className="mt-2">
                                            <Progress
                      className="bg-secondary-transparent"
                      style={{
                        height: "8px",
                      }}
                      color="br-5 bg-secondary"
                      value="58"
                      animated
                      striped
                    ></Progress>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={12}xl={3}lg={6}>
                                <Card className="text-center">
                                    <CardBody> <span>Today Orders</span>
                                        <h1 className=" mb-1 mt-1 font-weight-bold">6532</h1>
                                        <div className="text-muted"><i className="si si-arrow-up-circle text-danger"></i> <span className="">15%</span> Increase</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={12}xl={3}lg={6}>
                                <Card className="text-center">
                                    <CardBody> <span>Today Sales</span>
                                        <h1 className=" mb-1 mt-1 font-weight-bold">5835</h1>
                                        <div className="text-muted"><i className="si si-arrow-up-circle text-success"></i> <span className="">22%</span> Increase</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={12}xl={3}lg={6}>
                                <Card className="text-center">
                                    <CardBody> <span>Today Profit</span>
                                        <h1 className=" mb-1 mt-1 font-weight-bold">$69588</h1>
                                        <div className="text-muted"><i className="si si-arrow-up-circle text-success"></i> <span className="">32%</span> Increase</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={12}xl={3}lg={6}>
                                <Card className="text-center">
                                    <CardBody> <span>Position in Market</span>
                                        <h1 className=" mb-1 mt-1 font-weight-bold">12</h1>
                                        <div className="text-muted"><i className="si si-arrow-up-circle text-warning"></i> <span className=""></span> Increase from 20 to 12</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={12}lg={4}>
                                <Card>
                                    <CardBody className="text-center list-icons">
                                        <svg className="svg-icon2  fill-white text-primary icon-dropshadow-primary" x="0" y="240" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4v0a2 2 0 100-4v0zm-8 2a2 2 0 11-4 0v0a2 2 0 114 0v0z"></path></svg>
                                        <p className="card-text mt-3 mb-0">New Orders</p>
                                        <p className="h2 text-center font-weight-bold">262</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={12}lg={4}>
                                <Card>
                                    <CardBody className="text-center list-icons">
                                        <svg className="svg-icon2 text-success icon-dropshadow-success" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                        <p className="card-text mt-3 mb-0">Customer Visitis</p>
                                        <p className="h2 text-center font-weight-bold">2635</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={12}lg={4}>
                                <Card>
                                    <CardBody className="text-center list-icons">
                                        <svg className="svg-icon2 fill-secondary icon-dropshadow-secondary" x="0" y="240" viewBox="0 0 24 24" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><path opacity=".0" d="M20,8 L12,13 L4,8 L4,18 L20,18 L20,8 Z M20,6 L4,6 L12,10.99 L20,6 Z"></path>
                                                <path d="M4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 C22,4.9 21.1,4 20,4 L4,4 C2.9,4 2,4.9 2,6 L2,18 C2,19.1 2.9,20 4,20 Z M20,6 L12,10.99 L4,6 L20,6 Z M4,8 L12,13 L20,8 L20,18 L4,18 L4,8 Z"></path>
                                            </svg>
                                        <p className="card-text mt-3 mb-0">Mails</p>
                                        <p className="h2 text-center font-weight-bold">245</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-6"sm={6}lg={3}>
                                <Card>
                                    <CardBody className="text-center">
                                        <div className="h2 m-0 font-weight-bold"><i className="mdi mdi-account-multiple-outline text-primary"></i> 67</div>
                                        <div className="text-muted mb-0"> Customers</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-6"sm={6}lg={3}>
                                <Card>
                                    <CardBody className="text-center">
                                        <div className="h2 m-0 font-weight-bold"><i className="mdi mdi-cash-multiple text-red"></i> 76</div>
                                        <div className="text-muted mb-0"> Total Sales</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-6"sm={6}lg={3}>
                                <Card>
                                    <CardBody className="text-center">
                                        <div className="h2 m-0 font-weight-bold"><i className="mdi mdi-chart-line text-warning"></i> 45</div>
                                        <div className="text-muted mb-0"> New Orders</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col className="col-6"sm={6}lg={3}>
                                <Card>
                                    <CardBody className="text-center">
                                        <div className="h2 m-0 font-weight-bold"><i className="mdi mdi-account-outline text-info"></i> 38</div>
                                        <div className="text-muted mb-0"> Invoice</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={12}md={6}xl={3}>
                                <Card className="bg-primary">
                                    <CardBody>
                                        <div className="d-flex no-block align-items-center">
                                            <div>
                                                <h6 className="text-white">Invoices</h6>
                                                <h2 className="text-white m-0 font-weight-bold">625</h2>
                                            </div>
                                            <div className="ms-auto">
                                                <span className="text-white display-6"><i className="fa fa-file-text-o fa-2x"></i></span>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={12}md={6}xl={3}>
                                <Card className="bg-secondary">
                                    <CardBody>
                                        <div className="d-flex no-block align-items-center">
                                            <div>
                                                <h6 className="text-white">Sales</h6>
                                                <h2 className="text-white m-0 font-weight-bold">25k</h2>
                                            </div>
                                            <div className="ms-auto">
                                                <span className="text-white display-6"><i className="fa fa-signal fa-2x"></i></span>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={12}md={6}xl={3}>
                                <Card className="bg-warning">
                                    <CardBody>
                                        <div className="d-flex no-block align-items-center">
                                            <div>
                                                <h6 className="text-white">Profit</h6>
                                                <h2 className="text-white m-0 font-weight-bold">62K</h2>
                                            </div>
                                            <div className="ms-auto">
                                                <span className="text-white display-6"><i className="fa fa-usd fa-2x"></i></span>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={12}md={6}xl={3}>
                                <Card className="bg-info">
                                    <CardBody>
                                        <div className="d-flex no-block align-items-center">
                                            <div>
                                                <h6 className="text-white">News</h6>
                                                <h2 className="text-white m-0 font-weight-bold">542</h2>
                                            </div>
                                            <div className="ms-auto">
                                                <span className="text-white display-6"><i className="fa fa-newspaper-o fa-2x"></i></span>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- End  Row --> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col lg={12}xl={4}sm={12}>
                                <Card className=" mb-5">
                                    <CardBody>
                                        <div className="media mt-0">
                                            <figure className="rounded-circle align-self-start mb-0">
                                                <img src={user1} alt="Generic placeholder image" className="avatar brround avatar-md me-3"/>
                                            </figure>
                                            <div className="media-body">
                                                <h5 className="time-title p-0 mb-0 font-weight-semibold leading-normal">Victoria</h5>
                                                New york, UK
                                            </div>
                                            <Button color="" className="btn btn-primary d-none d-sm-block me-2"><i className="fa fa-comments"></i> </Button>
                                            <Button color="" className="btn btn-info d-none d-sm-block"><i className="fa fa-phone"></i> </Button>
                                        </div>
                                    </CardBody>
                                    <CardFooter className="text-secondary border-top">
                                        Email: <span className="text-primary">victoriacott@Dashtic.com</span>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col lg={12}xl={4}sm={12}>
                                <Card className="mb-5">
                                    <CardBody>
                                        <div className="media mt-0">
                                            <figure className="rounded-circle align-self-start mb-0">
                                                <img src={user16}alt="Generic placeholder image" className="avatar brround avatar-md me-3"/>
                                            </figure>
                                            <div className="media-body">
                                                <h5 className="time-title p-0 mb-0 font-weight-semibold leading-normal">Thomas Jaim</h5>
                                                Spain, UN
                                            </div>
                                            <Button color="" className="btn btn-primary d-none d-sm-block me-2"><i className="fa fa-comments"></i> </Button>
                                            <Button color="" className="btn btn-info d-none d-sm-block"><i className="fa fa-phone"></i> </Button>
                                        </div>
                                    </CardBody>
                                    <CardFooter className="text-secondary border-top">
                                        Email: <span className="text-primary">thomasjaim@Dashtic.com</span>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col lg={12}xl={4}sm={12}>
                                <Card className="mb-5">
                                    <CardBody>
                                        <div className="media mt-0">
                                            <figure className="rounded-circle align-self-start mb-0">
                                                <img src={user3} alt="Generic placeholder image" className="avatar brround avatar-md me-3"/>
                                            </figure>
                                            <div className="media-body">
                                                <h5 className="time-title p-0 font-weight-semibold leading-normal mb-0">Rebbaca wisely</h5>
                                                Japan, UN
                                            </div>
                                            <Button color="" className="btn btn-primary d-none d-sm-block me-2"><i className="fa fa-comments"></i> </Button>
                                            <Button color="" className="btn btn-info d-none d-sm-block"><i className="fa fa-phone"></i> </Button>
                                        </div>
                                    </CardBody>
                                    <CardFooter className="text-secondary border-top">
                                        Email: <span className="text-primary">rebbacawisely@Dashtic.com</span>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- End Row --> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col md={12}sm={12}lg={12}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Best Pictures for Today</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div>
                                            <Row className="img-gallery">
                                                <Col className="col-3">
                                                    <Link to={`${import.meta.env.BASE_URL}pages/gallery`} className="d-block link-overlay">
                                                        <img className="d-block img-fluid rounded" src={photo1} alt=""/>
                                                        <span className="link-overlay-bg rounded">
                                                                <i className="fa fa-search"></i>
                                                            </span>
                                                    </Link>
                                                </Col>
                                                <Col className="col-3">
                                                    <Link to={`${import.meta.env.BASE_URL}pages/gallery`} className="d-block link-overlay">
                                                        <img className="d-block img-fluid rounded" src={photo2} alt=""/>
                                                        <span className="link-overlay-bg rounded">
                                                                <i className="fa fa-search"></i>
                                                            </span>
                                                    </Link>
                                                </Col>
                                                <Col className="col-3">
                                                    <Link to={`${import.meta.env.BASE_URL}pages/gallery`} className="d-block link-overlay">
                                                        <img className="d-block img-fluid rounded" src={photo3} alt=""/>
                                                        <span className="link-overlay-bg rounded">
                                                                <i className="fa fa-search"></i>
                                                            </span>
                                                    </Link>
                                                </Col>
                                                <Col className="col-3">
                                                    <Link to={`${import.meta.env.BASE_URL}pages/gallery`} className="d-block link-overlay">
                                                        <img className="d-block img-fluid rounded" src={photo4} alt=""/>
                                                        <span className="link-overlay-bg rounded">
                                                                <i className="fa fa-search"></i>
                                                            </span>
                                                    </Link>
                                                </Col>
                                                <Col className="col-3">
                                                    <Link to={`${import.meta.env.BASE_URL}pages/gallery`} className="d-block link-overlay">
                                                        <img className="d-block img-fluid rounded" src={photo5} alt=""/>
                                                        <span className="link-overlay-bg rounded">
                                                                <i className="fa fa-search"></i>
                                                            </span>
                                                    </Link>
                                                </Col>
                                                <Col className="col-3">
                                                    <Link to={`${import.meta.env.BASE_URL}pages/gallery`} className="d-block link-overlay">
                                                        <img className="d-block img-fluid rounded" src={photo6} alt=""/>
                                                        <span className="link-overlay-bg rounded">
                                                                <i className="fa fa-search"></i>
                                                            </span>
                                                    </Link>
                                                </Col>
                                                <Col className="col-3">
                                                    <Link to={`${import.meta.env.BASE_URL}pages/gallery`} className="d-block link-overlay">
                                                        <img className="d-block img-fluid rounded" src={photo1} alt=""/>
                                                        <span className="link-overlay-bg rounded">
                                                                <i className="fa fa-search"></i>
                                                            </span>
                                                    </Link>
                                                </Col>
                                                <Col className="col-3">
                                                    <Link to={`${import.meta.env.BASE_URL}pages/gallery`} className="d-block link-overlay">
                                                        <img className="d-block img-fluid rounded" src={photo2} alt=""/>
                                                        <span className="link-overlay-bg rounded">
                                                                <i className="fa fa-search"></i>
                                                            </span>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- End Row --> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col lg={6}xl={3}md={6}sm={12} className=" m-b-3">
                                <Card className="overflow-hidden">
                                    <div className="">
                                        <Row>
                                            <Col className="col-12">
                                                <div className="facebook p-4 ">
                                                    <div className="text-center text-white social">
                                                        <i className="fa fa-facebook"></i>
                                                    </div>
                                                </div>
                                                <CardBody className="mt-0">
                                                    <div className="d-flex  align-items-center">
                                                        <div>
                                                            <h3 className="font-weight-semibold mb-1">56k</h3>
                                                            <h5 className="text-muted mb-0">Following</h5>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <h3 className="font-weight-semibold mb-1">17k</h3>
                                                            <h5 className="text-muted mb-0">Friends</h5>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg={6}xl={3}md={6}sm={12} className=" m-b-3">
                                <Card className="overflow-hidden">
                                    <div className="">
                                        <Row>
                                            <Col className="col-12">
                                                <div className="twitter p-4 ">
                                                    <div className="text-center text-white social">
                                                        <i className="fa fa-twitter"></i>
                                                    </div>
                                                </div>
                                                <CardBody className="mt-0">
                                                    <div className="d-flex  align-items-center">
                                                        <div>
                                                            <h3 className="font-weight-semibold mb-1">86k</h3>
                                                            <h5 className="text-muted mb-0">Following</h5>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <h3 className="font-weight-semibold mb-1">20k</h3>
                                                            <h5 className="text-muted mb-0">Friends</h5>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg={6}xl={3}md={6}sm={12} className=" m-b-3">
                                <Card className="overflow-hidden">
                                    <div className="">
                                        <Row>
                                            <Col className="col-12">
                                                <div className="linkedin p-4 ">
                                                    <div className="text-center text-white social">
                                                        <i className="fa fa-linkedin"></i>
                                                    </div>
                                                </div>
                                                <CardBody className="mt-0">
                                                    <div className="d-flex  align-items-center">
                                                        <div>
                                                            <h3 className="font-weight-semibold mb-1">76k</h3>
                                                            <h5 className="text-muted mb-0">Following</h5>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <h3 className="font-weight-semibold mb-1">27k</h3>
                                                            <h5 className="text-muted mb-0">Friends</h5>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg={6}xl={3}md={6}sm={12} className=" m-b-3">
                                <Card className="overflow-hidden">
                                    <div className="">
                                        <Row>
                                            <Col className="col-12">
                                                <div className="instagram p-4 ">
                                                    <div className="text-center text-white social">
                                                        <i className="fa fa-instagram"></i>
                                                    </div>
                                                </div>
                                                <CardBody className="mt-0">
                                                    <div className="d-flex  align-items-center">
                                                        <div>
                                                            <h3 className="font-weight-semibold mb-1">36k</h3>
                                                            <h5 className="text-muted mb-0">Following</h5>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <h3 className="font-weight-semibold mb-1">10k</h3>
                                                            <h5 className="text-muted mb-0">Friends</h5>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
  </div>
);

Widgets.propTypes = {};

Widgets.defaultProps = {};

export default Widgets;
