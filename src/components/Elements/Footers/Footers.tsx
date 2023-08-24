import React from 'react';
import { Card, CardHeader, CardTitle, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PageHeaders } from '../../../Shared/Prism/Prism';


const Footers = () => (
  <div>
    <PageHeaders
      title="Footers"
      home="Home"
      name="Elements"
      fonticonsname="Footers"
    />
                        <Row>
                            <Col md="12">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Footer style 01</CardTitle>
                                    </CardHeader>
                                    <div className="">
                                        <div className="footer br-bl-7 br-br-7 border-top-0">
                                            <div className="container">
                                                <Row className="align-items-center">
                                                    <div className="social">
                                                        <ul className="text-center">
                                                            <li>
                                                                <Link className="social-icon" to="#"><i className="fa fa-facebook"></i></Link>
                                                            </li>
                                                            <li>
                                                                <Link className="social-icon" to="#"><i className="fa fa-twitter"></i></Link>
                                                            </li>
                                                            <li>
                                                                <Link className="social-icon" to="#"><i className="fa fa-rss"></i></Link>
                                                            </li>
                                                            <li>
                                                                <Link className="social-icon" to="#"><i className="fa fa-youtube"></i></Link>
                                                            </li>
                                                            <li>
                                                                <Link className="social-icon" to="#"><i className="fa fa-linkedin"></i></Link>
                                                            </li>
                                                            <li>
                                                                <Link className="social-icon" to="#"><i className="fa fa-google-plus"></i></Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <Col lg='12'sm='12' className=" mt-3 mt-lg-0 text-center">
                                                         Copyright © 2022 <Link to="#;" className="text-primary">Dashtic</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link to="#;"> Spruko </Link> All rights reserved.
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- End Row--> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col md="12">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Footer style 02</CardTitle>
                                    </CardHeader>
                                    <div className="">
                                        <div className="footer br-bl-7 br-br-7 border-top-0">
                                            <div className="container">
                                                <Row className="align-items-center">
                                                    <Col lg="6" sm="12" md='5' className=" mt-3 mt-lg-0 text-center d-none d-md-block">
                                                        <div className="social">
                                                            <ul className="text-center m-0">
                                                                <li>
                                                                    <Link className="social-icon" to="#"><i className="fa fa-facebook"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link className="social-icon" to="#"><i className="fa fa-twitter"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link className="social-icon" to="#"><i className="fa fa-rss"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link className="social-icon" to="#"><i className="fa fa-youtube"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link className="social-icon" to="#"><i className="fa fa-linkedin"></i></Link>
                                                                </li>
                                                                <li>
                                                                    <Link className="social-icon" to="#"><i className="fa fa-google-plus"></i></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                     </Col>
                                                    <Col lg='6' sm='12' md='7' className="mt-3 mt-lg-0 text-md-end">
                                                        Copyright © 2022 <Link to="#">Dashtic</Link>.All rights reserved.
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- End row--> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col md="12">
                                <div className="card overflow-hidden">
                                    <CardHeader>
                                        <CardTitle>Footer style 03</CardTitle>
                                    </CardHeader>
                                    <div className="">
                                        <div className="footer br-bl-7 br-br-7 border-top-0 p-0">
                                            <div className="">
                                                <div className="p-3">
                                                    <Row className="align-items-center text-center">
                                                        <Col lg='6' md='6' className="d-none d-md-block ">
                                                            <div className="social">
                                                                <ul className="text-center m-0 ">
                                                                    <li>
                                                                        <Link className="social-icon" to="#"><i className="fa fa-facebook"></i></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link className="social-icon" to="#"><i className="fa fa-twitter"></i></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link className="social-icon" to="#"><i className="fa fa-rss"></i></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link className="social-icon" to="#"><i className="fa fa-youtube"></i></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link className="social-icon" to="#"><i className="fa fa-linkedin"></i></Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link className="social-icon" to="#"><i className="fa fa-google-plus"></i></Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </Col>
                                                        <Col lg='6' md='6' className="text-md-end privacy">
                                                            <Link to="#" className="btn btn-link">Privacy</Link>
                                                            <Link to="#" className="btn btn-link">Terms</Link>
                                                            <Link to="#" className="btn btn-link">About Us</Link>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <div className="align-items-center flex-row-reverse border-top">
                                                    <div className="text-center p-3 bg-light">
                                                         Copyright © 2022 <Link to="#;" className="text-primary">Dashtic</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link to="#;"> Spruko </Link> All rights reserved.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- pagination-wrapper --> */}
                                </div>
                                {/* <!-- section-wrapper --> */}
                            </Col>
                        </Row>
                        {/* <!-- End Row --> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col md="12">
                                <div className="card overflow-hidden">
                                    <CardHeader>
                                        <CardTitle>Footer style 04</CardTitle>
                                    </CardHeader>
                                    <div className="">
                                        <div className="footer br-bl-7 br-br-7 border-top-0 p-0">
                                            <div className="container">
                                                <div className="p-4">
                                                    <Row className="align-items-center">
                                                        <Col lg='6' md='6' className="d-md-block ">
                                                            Copyright © 2022 <Link to="#">Dashtic</Link>.
                                                        </Col>
                                                        <Col lg='6' md='6' className="text-md-end privacy">
                                                            <Link to="#" className="btn btn-link">Privacy</Link>
                                                            <Link to="#" className="btn btn-link">Terms</Link>
                                                            <Link to="#" className="btn btn-link">About Us</Link>
                                                        </Col>
                                                    </Row>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- pagination-wrapper --> */}
                                </div>
                                {/* <!-- section-wrapper --> */}
                            </Col>
                        </Row>
                        {/* <!-- End Row --> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col md="12">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Footer style 05</CardTitle>
                                    </CardHeader>
                                    <div className="">
                                        <div className="footer br-bl-7 br-br-7 border-top-0">
                                            <div className="container">
                                                <Row className="align-items-center flex-row-reverse">
                                                    <Col lg='12'sm='12' className=" mt-3 mt-lg-0 text-center">
                                                         Copyright © 2022 <Link to="#;" className="text-primary">Dashtic</Link>. Designed with <span className="fa fa-heart text-danger"></span> by <Link to="#;"> Spruko </Link> All rights reserved.
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
  </div>
);

Footers.propTypes = {};

Footers.defaultProps = {};

export default Footers;
