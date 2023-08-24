import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { PageHeaderstyle } from './../../../../Shared/Prism/Prism';



const Pricing02 = () => (
  <div>
            <PageHeaderstyle title="Pricing"home="Home"Pages="Pages"elements="Pricing"name="Pricing 02"/>

                        <Row className="text-center no-gutters mb-7">
                            <Col lg="4">
                                <Card className="plan-card shadow-none">
                                    <div className="card-block">
                                        <div className="pt-4 pb-4">
                                            <h1><i className="fa fa-plane plan-icon bg-primary"></i></h1>
                                            <h6 className="text-uppercase font-weight-semibold text-primary">Starter Pack</h6>
                                        </div>
                                        <div>
                                            <h1 className="plan-price padding-b-15 display-4 mb-0 font-weight-semibold">$19 <span className="text-muted m-l-10"><sup>Per Month</sup></span></h1>
                                            <div className="plan-div-border"></div>
                                        </div>
                                        <div className="plan-features pb-4 mt-4 text-muted padding-t-b-30">
                                            <p><strong>2 </strong> FreeDomain Name</p>
                                            <p><strong>2</strong> One-Click Apps</p>
                                            <p><strong>1</strong> Databases</p>
                                            <p><strong>Money</strong> BackGuarntee</p>
                                            <p><strong>24/7</strong> Support</p>
                                            <Link to="#" className="btn btn-lg btn-primary mt-4">Sign Up Now</Link>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="plan-card border active">
                                    <div className="card-block">
                                        <div className="pt-4 pb-4">
                                            <h1><i className="fa fa-trophy plan-icon bg-info"></i></h1>
                                            <h6 className="text-uppercase font-weight-semibold text-info">Professional Pack</h6>
                                        </div>
                                        <div>
                                            <h1 className="plan-price padding-b-15 display-4 mb-0  font-weight-semibold">$29 <span className="text-muted m-l-10"><sup>Per Month</sup></span></h1>
                                            <div className="plan-div-border"></div>
                                        </div>
                                        <div className="plan-features pb-4 mt-4 text-muted padding-t-b-30">
                                            <p><strong>3 </strong> FreeDomain Name</p>
                                            <p><strong>5</strong> One-Click Apps</p>
                                            <p><strong>3</strong> Databases</p>
                                            <p><strong>Money</strong> BackGuarntee</p>
                                            <p><strong>24/7</strong> Support</p>
                                            <Link to="#" className="btn btn-lg btn-info mt-4">Sign Up Now</Link>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="plan-card shadow-none">
                                    <div className="card-block">
                                        <div className="pt-4 pb-4">
                                            <h1><i className="fa fa-umbrella plan-icon bg-secondary"></i></h1>
                                            <h6 className="text-uppercase font-weight-semibold text-secondary">Enterprise Pack</h6>
                                        </div>
                                        <div>
                                            <h1 className="plan-price padding-b-15 display-4 mb-0 font-weight-semibold">$39 <span className="text-muted m-l-10"><sup>Per Month</sup></span></h1>
                                            <div className="plan-div-border"></div>
                                        </div>
                                        <div className="plan-features pb-4 mt-4 text-muted padding-t-b-30">
                                            <p><strong>10 </strong> FreeDomain Name</p>
                                            <p><strong>10</strong> One-Click Apps</p>
                                            <p><strong>8</strong> Databases</p>
                                            <p><strong>Money</strong> BackGuarntee</p>
                                            <p><strong>24/7</strong> Support</p>
                                            <Link to="#" className="btn btn-lg btn-secondary mt-4">Sign Up Now</Link>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- End Row -->

                        <!-- Row --> */}
                        <div className="bg-white px-5 pt-5 pb-3 br-7">
                            <Row className="no-gutters pt-7 mb-7">
                                <Col sm="12"lg="4">
                                    <Card className="shadow-none">
                                        <CardBody className="text-center pricing bg-primary p-6">
                                            <div className="card-category">Basic</div>
                                            <div className="display-3 my-4 font-weight-semibold">$10</div>
                                            <ul className="list-unstyled leading-loose">
                                                <li><strong>2 </strong> FreeDomain Name</li>
                                                <li><strong>2</strong> One-Click Apps</li>
                                                <li><strong>1</strong> Databases</li>
                                                <li><strong>Money</strong> BackGuarntee</li>
                                                <li><strong>24/7</strong> Support</li>
                                            </ul>
                                            <div className="text-center mt-5">
                                                <Link to="#" className="btn btn-lg btn-white btn-block">Buy Now</Link>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="12"lg="4">
                                    <Card className="pricing-sctive shadow-none">
                                        <CardBody className="text-center pricing bg-secondary p-6 py-7">
                                            <div className="card-category font-weight-semibold">Enterprise</div>
                                            <div className="display-3 my-4 font-weight-semibold">$99</div>
                                            <ul className="list-unstyled leading-loose">
                                                <li><strong>10 </strong> FreeDomain Name</li>
                                                <li><strong>10</strong> One-Click Apps</li>
                                                <li><strong>8</strong> Databases</li>
                                                <li><strong>Money</strong> BackGuarntee</li>
                                                <li><strong>24/7</strong> Support</li>
                                            </ul>
                                            <div className="text-center mt-5">
                                                <Link to="#" className="btn btn-lg btn-white btn-block">Buy Now</Link>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="12"lg="4">
                                    <Card className="shadow-none">
                                        <CardBody className="text-center  pricing bg-primary p-6">
                                            <div className="card-category">Unlimited</div>
                                            <div className="display-3 my-4 font-weight-semibold">$139</div>
                                            <ul className="list-unstyled leading-loose">
                                                <li><strong>12 </strong> FreeDomain Name</li>
                                                <li><strong>10</strong> One-Click Apps</li>
                                                <li><strong>6</strong> Databases</li>
                                                <li><strong>Money</strong> BackGuarntee</li>
                                                <li><strong>24/7</strong> Support</li>
                                            </ul>
                                            <div className="text-center mt-5">
                                                <Link to="#" className="btn btn-lg btn-white btn-block">Buy Now</Link>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                        {/* <!-- End Row -->

                        <!-- Row --> */}
                        <Row className="no-xl-gutters pt-7">
                            <Col sm="6"xl="3" className="mt-2">
                                <div className="panel price  panel-color">
                                    <div className=" bg-white text-center price-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                                <path fill="#4454c3" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                                            </svg>
                                        <div className="price-title">Personal</div>
                                    </div>
                                    <div className="panel-body text-center">
                                        <p className="lead font-weight-semibold"><strong>$15 /</strong> month</p>
                                    </div>
                                    <ListGroup className="list-group list-group-flush text-center">
                                        <ListGroupItem className="list-group-item"><strong> 2 Free</strong> Domain Name</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong>3 </strong> One-Click Apps</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong> 1 </strong> Databases</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong> Money </strong> BackGuarntee</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong> 24/7</strong> support</ListGroupItem>
                                    </ListGroup>
                                    <div className="panel-footer text-center border-end-0 border-start-0">
                                        <Link className="btn btn-lg btn-primary btn-block" to="#">Purchase Now!</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="6"xl="3" className="mt-2">
                                <div className="panel price  panel-color">
                                    <div className=" bg-white text-center price-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                                <path fill="#4454c3" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                                            </svg>
                                        <div className="price-title">Premium</div>
                                    </div>
                                    <div className="panel-body text-center">
                                        <p className="lead font-weight-semibold"><strong>$25 /</strong> month</p>
                                    </div>
                                    <ListGroup className="list-group list-group-flush text-center">
                                        <ListGroupItem className="list-group-item"><strong> 3 Free</strong> Domain Name</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong>4 </strong> One-Click Apps</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong> 2 </strong> Databases</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong> Money </strong> BackGuarntee</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong> 24/7</strong> support</ListGroupItem>
                                    </ListGroup>
                                    <div className="panel-footer text-center border-end-0 border-start-0">
                                        <Link className="btn btn-lg btn-primary btn-block" to="#">Purchase Now!</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="6"xl="3" className="mt-2">
                                <div className="panel price  panel-color active bg-white overflow-hidden">
                                    <div className=" bg-white text-center price-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                                <path fill="#f72d66" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                                            </svg>
                                        <div className="price-title">Corporate</div>
                                    </div>
                                    <div className="panel-body text-center">
                                        <p className="lead font-weight-semibold"><strong>$35 /</strong> month</p>
                                    </div>
                                    <ListGroup className="list-group list-group-flush text-center">
                                        <ListGroupItem className="list-group-item"><strong> 4 Free</strong> Domain Name</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong>6 </strong> One-Click Apps</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong> 2 </strong> Databases</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong> Money </strong> BackGuarntee</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong> 24/7</strong> support</ListGroupItem>
                                    </ListGroup>
                                    <div className="panel-footer text-center border-end-0 border-start-0">
                                        <Link className="btn btn-lg btn-secondary btn-block" to="#">Purchase Now!</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="6"xl="3" className="mt-2">
                                <div className="panel price  panel-color">
                                    <div className=" bg-white text-center price-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                                <path fill="#4454c3" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,256C384,267,480,245,576,245.3C672,245,768,267,864,277.3C960,288,1056,288,1152,261.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                                            </svg>
                                        <div className="price-title">Business</div>
                                    </div>
                                    <div className="panel-body text-center">
                                        <p className="lead font-weight-semibold"><strong>$99 /</strong> month</p>
                                    </div>
                                    <ListGroup className="list-group list-group-flush text-center">
                                        <ListGroupItem className="list-group-item"><strong> 5 Free</strong> Domain Name</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong>8 </strong> One-Click Apps</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong> 2 </strong> Databases</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong> Money </strong> BackGuarntee</ListGroupItem>
                                        <ListGroupItem className="list-group-item"><strong> 24/7</strong> support</ListGroupItem>
                                    </ListGroup>
                                    <div className="panel-footer text-center border-end-0 border-start-0">
                                        <Link className="btn btn-lg btn-primary btn-block" to="#">Purchase Now!</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
  </div>
);

Pricing02.propTypes = {};

Pricing02.defaultProps = {};

export default Pricing02;
