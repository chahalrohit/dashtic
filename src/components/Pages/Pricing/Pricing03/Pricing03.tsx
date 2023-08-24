import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, ListGroup, ListGroupItem, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import { PageHeaderstyle } from './../../../../Shared/Prism/Prism';

const Pricing03 = () => {
      // style 1
      const [Pricing, setpricing] = useState<string>("Year");
      const toggle = (on: string): void => {
          if (Pricing !== on) {
            setpricing(on);
          }
      };
       // style 2
       const [Pricing1, setpricing1] = useState<string>("Month1");
       const toggle1 = (on: string): void => {
           if (Pricing1 !== on) {
             setpricing1(on);
           }
       };
       // style 3
       const [Pricing3, setpricing3] = useState<string>("Year3");
       const toggle3 = (on: string): void => {
           if (Pricing3 !== on) {
             setpricing3(on);
           }
       };
    return(
  <div>
    <PageHeaderstyle title="Pricing"home="Home"Pages="Pages"elements="Pricing"name="Pricing 03"/>
  
                        <div className="pricing-tabs">
                            <div className="text-center">
                                <div className="pri-tabs-heading">
                                <Nav tabs className="nav nav-price">
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: Pricing === "Month", })} onClick={() => { toggle("Month"); }} >
                                            Month
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: Pricing === "Year", })} onClick={() => { toggle("Year"); }} >
                                            Year
                                            </NavLink>
                                        </NavItem>
                                        
                                    </Nav>
                                    
                                </div>
                                <TabContent activeTab={Pricing} className="text-muted">
                                        <TabPane tabId="Month" >
                                        <Row className="row-sm pricing-style01">
                                            <Col sm="6"xl="3">
                                                <Card className="mg-b-20 mg-lg-b-0">
                                                    <CardBody className="text-center">
                                                        <div className="bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3">Free</div>
                                                        <div className="display-4 font-weight-semibold my-4">$0</div>
                                                        <ul className="list-unstyled leading-loose">
                                                            <li><strong>4</strong> Ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 30 days</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 1 Gb Storage</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Security Check</li>
                                                            <li><i className="fe fe-x text-danger mx-2"></i> Private Messages</li>
                                                            <li><i className="fe fe-x text-danger mx-2"></i> Urgent Ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 24/7 Support</li>
                                                        </ul>
                                                        <div className="text-center mt-6">
                                                            <Link to="#" className="btn btn-lg btn-primary btn-block">Choose plan</Link>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col sm="6"xl="3">
                                                <Card className="mg-b-20 mg-lg-b-0">
                                                    <CardBody className="text-center">
                                                        <div className="bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3">Premium</div>
                                                        <div className="display-4 font-weight-semibold my-4">$65</div>
                                                        <ul className="list-unstyled leading-loose">
                                                            <li><strong>50</strong> Ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 60 Days</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 10 Gb Storage</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Security Check</li>
                                                            <li><i className="fe fe-x text-danger mx-2"></i> Private Messages</li>
                                                            <li><i className="fe fe-x text-danger mx-2"></i> Urgent ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 24/7 Support</li>
                                                        </ul>
                                                        <div className="text-center mt-6">
                                                            <Link to="#" className="btn btn-lg btn-success btn-block">Choose plan</Link>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col sm="6"xl="3">
                                                <Card className="mg-b-20 mg-sm-b-0">
                                                    <CardBody className="text-center">
                                                        <div className="bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3">Enterprise</div>
                                                        <div className="display-4 font-weight-semibold my-4">$100</div>
                                                        <ul className="list-unstyled leading-loose">
                                                            <li><strong>100</strong> Ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 180 days</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 25 Gb Storage</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Security Check</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Private Messages</li>
                                                            <li><i className="fe fe-x text-danger mx-2"></i> Urgent ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 24/7 Support</li>
                                                        </ul>
                                                        <div className="text-center mt-6">
                                                            <Link to="#" className="btn btn-lg btn-primary btn-block">Choose plan</Link>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col sm="6"xl="3">
                                                <Card className="mb-0">
                                                    <CardBody className="text-center">
                                                        <div className="bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3">Unlimited</div>
                                                        <div className="display-4 font-weight-semibold my-4">$150</div>
                                                        <ul className="list-unstyled leading-loose">
                                                            <li><strong>Unlimited</strong> Ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 365 Days</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 50 Gb Storage</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Security Check</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Private Messages</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Urgent ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 24/7 Support</li>
                                                        </ul>
                                                        <div className="text-center mt-6">
                                                            <Link to="#" className="btn btn-lg btn-primary btn-block">Choose plan</Link>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                        </TabPane>

                                        <TabPane tabId="Year" >
                                        <Row className="row-sm pricing-style01">
                                            <Col sm="6"xl="3">
                                                <Card className="mg-b-20 mg-lg-b-0">
                                                    <CardBody className="text-center">
                                                        <div className="bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3">Free</div>
                                                        <div className="display-4 font-weight-semibold my-4">$0</div>
                                                        <ul className="list-unstyled leading-loose">
                                                            <li><strong>4</strong> Ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 30 days</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 1 Gb Storage</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Security Check</li>
                                                            <li><i className="fe fe-x text-danger mx-2"></i> Private Messages</li>
                                                            <li><i className="fe fe-x text-danger mx-2"></i> Urgent Ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 24/7 Support</li>
                                                        </ul>
                                                        <div className="text-center mt-6">
                                                            <Link to="#" className="btn btn-lg btn-primary btn-block">Choose plan</Link>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col sm="6"xl="3">
                                                <Card className="mg-b-20 mg-lg-b-0">
                                                    <CardBody className="text-center">
                                                        <div className="bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3">Premium</div>
                                                        <div className="display-4 font-weight-semibold my-4">$250</div>
                                                        <ul className="list-unstyled leading-loose">
                                                            <li><strong>50</strong> Ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 60 Days</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 10 Gb Storage</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Security Check</li>
                                                            <li><i className="fe fe-x text-danger mx-2"></i> Private Messages</li>
                                                            <li><i className="fe fe-x text-danger mx-2"></i> Urgent ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 24/7 Support</li>
                                                        </ul>
                                                        <div className="text-center mt-6">
                                                            <Link to="#" className="btn btn-lg btn-success btn-block">Choose plan</Link>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col sm="6"xl="3">
                                                <Card className="mg-b-20 mg-sm-b-0">
                                                    <CardBody className="text-center">
                                                        <div className="bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3">Enterprise</div>
                                                        <div className="display-4 font-weight-semibold my-4">$500</div>
                                                        <ul className="list-unstyled leading-loose">
                                                            <li><strong>100</strong> Ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 180 days</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 25 Gb Storage</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Security Check</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Private Messages</li>
                                                            <li><i className="fe fe-x text-danger mx-2"></i> Urgent ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 24/7 Support</li>
                                                        </ul>
                                                        <div className="text-center mt-6">
                                                            <Link to="#" className="btn btn-lg btn-primary btn-block">Choose plan</Link>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col sm="6"xl="3">
                                                <Card className="mb-0">
                                                    <CardBody className="text-center">
                                                        <div className="bg-light p-2 text-uppercase font-weight-semibold fs-16 br-3">Unlimited</div>
                                                        <div className="display-4 font-weight-semibold my-4">$1000</div>
                                                        <ul className="list-unstyled leading-loose">
                                                            <li><strong>Unlimited</strong> Ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 365 Days</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 50 Gb Storage</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Security Check</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Private Messages</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> Urgent ads</li>
                                                            <li><i className="fe fe-check text-success mx-2"></i> 24/7 Support</li>
                                                        </ul>
                                                        <div className="text-center mt-6">
                                                            <Link to="#" className="btn btn-lg btn-primary btn-block">Choose plan</Link>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                        </TabPane>
                                    </TabContent>
                                
                            </div>
                        </div>
                        <div className="pricing-tabs mt-7 bg-white br-7 px-5 pt-5 pb-0">
                            <div className="text-center">
                                <div className="pri-tabs-heading pri-tabs-heading2">
                                <Nav tabs className="nav nav-price">
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: Pricing1 === "Month1", })} onClick={() => { toggle1("Month1"); }} >
                                            Month
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: Pricing1 === "Year1", })} onClick={() => { toggle1("Year1"); }} >
                                            Year
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    
                                </div>
                                <div className="tab-content">
                                <TabContent activeTab={Pricing1} className="text-muted">
                                        <TabPane tabId="Month1" >
                                        <Row className="text-center">
                                            <Col sm="6"xl="3">
                                                <Card className="plan-card shadow-none border">
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
                                            <Col sm="6"xl="3">
                                                <Card className="plan-card shadow-none border">
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
                                            <Col sm="6"xl="3">
                                                <Card className="plan-card shadow-none border">
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
                                            <Col sm="6"xl="3">
                                                <Card className="plan-card shadow-none border">
                                                    <div className="card-block">
                                                        <div className="pt-4 pb-4">
                                                            <h1><i className="fa fa-cube plan-icon bg-success"></i></h1>
                                                            <h6 className="text-uppercase font-weight-semibold text-success">Unlimited Pack</h6>
                                                        </div>
                                                        <div>
                                                            <h1 className="plan-price padding-b-15 display-4 mb-0 font-weight-semibold">$49 <span className="text-muted m-l-10"><sup>Per Month</sup></span></h1>
                                                            <div className="plan-div-border"></div>
                                                        </div>
                                                        <div className="plan-features pb-4 mt-4 text-muted padding-t-b-30">
                                                            <p><strong>12 </strong> FreeDomain Name</p>
                                                            <p><strong>10</strong> One-Click Apps</p>
                                                            <p><strong>6</strong> Databases</p>
                                                            <p><strong>Money</strong> BackGuarntee</p>
                                                            <p><strong>24/7</strong> Support</p>
                                                            <Link to="#" className="btn btn-lg btn-success mt-4">Sign Up Now</Link>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Col>
                                        </Row>
                                        </TabPane>
                                        <TabPane tabId="Year1" >
                                        <Row className="text-center">
                                            <Col sm="6"xl="3">
                                                <Card className="plan-card shadow-none border">
                                                    <div className="card-block">
                                                        <div className="pt-4 pb-4">
                                                            <h1><i className="fa fa-plane plan-icon bg-primary"></i></h1>
                                                            <h6 className="text-uppercase font-weight-semibold text-primary">Starter Pack</h6>
                                                        </div>
                                                        <div>
                                                            <h1 className="plan-price padding-b-15 display-4 mb-0 font-weight-semibold">$119 <span className="text-muted m-l-10"><sup>Per Year</sup></span></h1>
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
                                            <Col sm="6"xl="3">
                                                <Card className="plan-card shadow-none border">
                                                    <div className="card-block">
                                                        <div className="pt-4 pb-4">
                                                            <h1><i className="fa fa-trophy plan-icon bg-info"></i></h1>
                                                            <h6 className="text-uppercase font-weight-semibold text-info">Professional Pack</h6>
                                                        </div>
                                                        <div>
                                                            <h1 className="plan-price padding-b-15 display-4 mb-0  font-weight-semibold">$129 <span className="text-muted m-l-10"><sup>Per Year</sup></span></h1>
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
                                            <Col sm="6"xl="3">
                                                <Card className="plan-card shadow-none border">
                                                    <div className="card-block">
                                                        <div className="pt-4 pb-4">
                                                            <h1><i className="fa fa-umbrella plan-icon bg-secondary"></i></h1>
                                                            <h6 className="text-uppercase font-weight-semibold text-secondary">Enterprise Pack</h6>
                                                        </div>
                                                        <div>
                                                            <h1 className="plan-price padding-b-15 display-4 mb-0 font-weight-semibold">$139 <span className="text-muted m-l-10"><sup>Per Year</sup></span></h1>
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
                                            <Col sm="6"xl="3">
                                                <Card className="plan-card shadow-none border">
                                                    <div className="card-block">
                                                        <div className="pt-4 pb-4">
                                                            <h1><i className="fa fa-cube plan-icon bg-success"></i></h1>
                                                            <h6 className="text-uppercase font-weight-semibold text-success">Unlimited Pack</h6>
                                                        </div>
                                                        <div>
                                                            <h1 className="plan-price padding-b-15 display-4 mb-0 font-weight-semibold">$149 <span className="text-muted m-l-10"><sup>Per Year</sup></span></h1>
                                                            <div className="plan-div-border"></div>
                                                        </div>
                                                        <div className="plan-features pb-4 mt-4 text-muted padding-t-b-30">
                                                            <p><strong>12 </strong> FreeDomain Name</p>
                                                            <p><strong>10</strong> One-Click Apps</p>
                                                            <p><strong>6</strong> Databases</p>
                                                            <p><strong>Money</strong> BackGuarntee</p>
                                                            <p><strong>24/7</strong> Support</p>
                                                            <Link to="#" className="btn btn-lg btn-success mt-4">Sign Up Now</Link>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </Col>
                                        </Row>
                                        </TabPane>
                                    </TabContent>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="pricing-tabs mt-7">
                            <div className="text-center">
                                <div className="pri-tabs-heading pri-tabs-heading3">
                                <Nav tabs className="nav nav-price">
                                <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: Pricing3 === "Week3", })} onClick={() => { toggle3("Week3"); }} >
                                            Week
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: Pricing3 === "Month3", })} onClick={() => { toggle3("Month3"); }} >
                                            Month
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink style={{ cursor: "pointer" }} className={classnames({ active: Pricing3 === "Year3", })} onClick={() => { toggle3("Year3"); }} >
                                            Year
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                                <div className="tab-content">
                                <TabContent activeTab={Pricing3} className="text-muted">
                                        <TabPane tabId="Week3" >
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
                                                        <p className="lead font-weight-semibold"><strong>$0 /</strong> 7 Days</p>
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
                                                        <p className="lead font-weight-semibold"><strong>$15 /</strong> 7 Days</p>
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
                                                        <p className="lead font-weight-semibold"><strong>$25 /</strong> 7 Days</p>
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
                                                        <p className="lead font-weight-semibold"><strong>$49 /</strong> 7 days</p>
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
                                        </TabPane>
                                        <TabPane tabId="Month3" >
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
                                                        <Link className="btn  btn-lg btn-primary btn-block" to="#">Purchase Now!</Link>
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
                                        </TabPane>
                                        <TabPane tabId="Year3" >
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
                                                        <p className="lead font-weight-semibold"><strong>$115 /</strong> Year</p>
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
                                                        <p className="lead font-weight-semibold"><strong>$125 /</strong> Year</p>
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
                                                        <p className="lead font-weight-semibold"><strong>$135 /</strong> Year</p>
                                                    </div>
                                                    <ListGroup className="list-group list-group-flush text-center">
                                                        <ListGroupItem className="list-group-item"><strong> 4 Free</strong> Domain Name</ListGroupItem>
                                                        <ListGroupItem className="list-group-item"><strong>6 </strong> One-Click Apps</ListGroupItem>
                                                        <ListGroupItem className="list-group-item"><strong> 2 </strong> Databases</ListGroupItem>
                                                        <ListGroupItem className="list-group-item"><strong> Money </strong> BackGuarntee</ListGroupItem>
                                                        <ListGroupItem className="list-group-item"><strong> 24/7</strong> support</ListGroupItem>
                                                    </ListGroup>
                                                    <div className="panel-footer text-center border-end-0 border-start-0">
                                                        <Link className="btn  btn-lg btn-secondary btn-block" to="#">Purchase Now!</Link>
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
                                                        <p className="lead font-weight-semibold"><strong>$199 /</strong> Year</p>
                                                    </div>
                                                    <ListGroup className="list-group list-group-flush text-center">
                                                        <ListGroupItem className="list-group-item"><strong> 5 Free</strong> Domain Name</ListGroupItem>
                                                        <ListGroupItem className="list-group-item"><strong>8 </strong> One-Click Apps</ListGroupItem>
                                                        <ListGroupItem className="list-group-item"><strong> 2 </strong> Databases</ListGroupItem>
                                                        <ListGroupItem className="list-group-item"><strong> Money </strong> BackGuarntee</ListGroupItem>
                                                        <ListGroupItem className="list-group-item"><strong> 24/7</strong> support</ListGroupItem>
                                                    </ListGroup>
                                                    <div className="panel-footer text-center border-end-0 border-start-0">
                                                        <Link className="btn  btn-lg btn-primary btn-block" to="#">Purchase Now!</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        </TabPane>
                                    </TabContent>
                                    
                                </div>
                            </div>
                        </div>
  </div>
);
    }
Pricing03.propTypes = {};

Pricing03.defaultProps = {};

export default Pricing03;
