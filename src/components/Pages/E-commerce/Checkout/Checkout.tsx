import React, { useState } from "react";
import Select from 'react-select';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Progress,
} from "reactstrap";
import classnames from "classnames";
import product2 from "../../../../assets/images/products/2.jpg";
import product5 from "../../../../assets/images/products/5.jpg";
import { Link } from "react-router-dom";
import { PageHeaderstyle } from './../../../../Shared/Prism/Prism';

const Checkout = () => {
  const Countryoptions = [
    { value: 'Brazil', label: 'Brazil' },
    { value: 'Czech Republic', label: 'Czech Republic' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Poland', label: 'Poland' },
  ];
  const [countryOption, setCountryOption] = useState<any>(null);

  const [activeTab, setactiveTab] = useState(1);
  const [progressbarvalue, setprogressbarvalue] = useState(0);
  const [passedSteps, setPassedSteps] = useState([1]);

  function toggleTab(tab: number, value: number) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];

      if (tab >= 1 && tab <= 6) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
    setprogressbarvalue(value);
  }
  const [Tab1, setTab1] = useState<string>("tab1");
  const style1 = (tab: string): void => {
	  if (Tab1 !== tab) {
		  setTab1(tab);
	  }
  };

// Quentity items

const [num,setNumber] = useState(0);
const [num1,setNumber1] = useState(0);

const Increment = () => {
  setNumber(num + 1);
};

const Decrement = () => {
  if (num === 0) {
      return false;
  }
  setNumber(num - 1);
};

const Increment1 = () => {
  setNumber1(num1 + 1);
};

const Decrement1 = () => {
  if (num1 === 0) {
      return false;
  }
  setNumber1(num1 - 1);
};
  return (
    <div>
    <PageHeaderstyle title="Checkout"home="Home"Pages="Pages"elements="E-commerce"name="Checkout"/>

      <Row>
        <Col xl="12">
          <Card className="">
            <CardHeader>
              <CardTitle tag="h3">Checkout</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xxl="6" className="mx-auto mt-4 ">
                  <CardHeader className="p-0 p-sm-5">
                    <div className="progress-nav w-100">
                      <Progress
                        value={progressbarvalue}
                        style={{ height: "4px" }}
                      />
                      <Nav
                        className="nav-pills progress-bar-tab custom-nav"
                        role="tablist"
                      >
                        <NavItem className="wd25p">
                          <NavLink
                            to="#"
                            className={classnames({
                              active: activeTab === 1,
                              done: activeTab <= 6 && activeTab >= 0,
                            })}
                            onClick={() => {
                              toggleTab(1, 0);
                            }}
                          >
                            <i>
                              <span className="number">1</span>
                            </i>
                          </NavLink>
                        </NavItem>
                        <NavItem className="wd25p">
                          <NavLink
                            to="#"
                            className={classnames({
                              active: activeTab === 2,
                              done: activeTab <= 6 && activeTab > 1,
                            })}
                            onClick={() => {
                              toggleTab(2, 25);
                            }}
                          >
                            <i>
                              <span className="number">2</span>
                            </i>
                          </NavLink>
                        </NavItem>
                        <NavItem className="wd25p">
                          <NavLink
                            to="#"
                            className={classnames({
                              active: activeTab === 3,
                              done: activeTab <= 6 && activeTab > 2,
                            })}
                            onClick={() => {
                              toggleTab(3, 50);
                            }}
                          >
                            <i>
                              <span className="number">3</span>
                            </i>
                          </NavLink>
                        </NavItem>
                        <NavItem className="wd25p">
                          <NavLink
                            to="#"
                            className={classnames({
                              active: activeTab === 4,
                              done: activeTab <= 6 && activeTab > 3,
                            })}
                            onClick={() => {
                              toggleTab(4, 75);
                            }}
                          >
                            <i>
                              <span className="number">4</span>
                            </i>
                          </NavLink>
                        </NavItem>
                        <NavItem className="wd25">
                          <NavLink
                            to="#"
                            className={classnames({
                              active: activeTab === 5,
                              done: activeTab <= 6 && activeTab > 4,
                            })}
                            onClick={() => {
                              toggleTab(5, 100);
                            }}
                          >
                            <i>
                              <span className="number">5</span>
                            </i>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </CardHeader>
                  <CardBody className="px-0 p-sm-5">
                    <TabContent activeTab={activeTab} >
                      <TabPane tabId={1}>
                        <div className="container">
                          <h4>Signin</h4>
                          <section>
                            <Form>
                              <h5 className="text-start mb-2">
                                Signin to Your Account
                              </h5>
                              <p className="mb-4 text-muted tx-13 ms-0 text-start">
                                Signin to create, discover and connect with the
                                global community
                              </p>
                              <FormGroup className="form-group text-start">
                                <Label>Email</Label>
                                <Input
                                  className="form-control"
                                  placeholder="Enter your email"
                                  type="text"
                                />
                              </FormGroup>
                              <FormGroup className="form-group text-start">
                                <Label>Password</Label>
                                <Input
                                  className="form-control"
                                  placeholder="Enter your password"
                                  type="password"
                                />
                              </FormGroup>
                              <Button
                                color=""
                                className="btn ripple btn-primary btn-block"
                              >
                                Sign In
                              </Button>
                            </Form>
                          </section>
                          <div className="d-flex align-items-start gap-3 mt-4">
                            <Button
                              color=""
                              type="button"
                              style={{ background: "#949eb7", color: "#fff" }}
                              onClick={() => {
                                toggleTab(activeTab - 1, 0);
                              }}
                            >
                              Previous
                            </Button>
                            <Button
                              color=""
                              type="button"
                              className="btn btn-primary ms-auto"
                              onClick={() => {
                                toggleTab(activeTab + 1, 25);
                              }}
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId={2}>
                        <div className="container">
                          <h4>Billing</h4>
                          <section>
                            <Form className="needs-validation" noValidate>
                              <h5 className="text-start mb-2">
                                Billing Information
                              </h5>
                              <p className="mb-4 text-muted tx-13 ms-0 text-start">
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since
                              </p>
                              <Row>
                                <Col md="6" className="mb-3">
                                  <Label htmlFor="firstName">First name</Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder=""
                                    defaultValue=""
                                    required
                                  />
                                  <div className="invalid-feedback">
                                    Valid first name is required.
                                  </div>
                                </Col>
                                <Col md="6" className="mb-3">
                                  <Label htmlFor="lastName">Last name</Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder=""
                                    defaultValue=""
                                    required
                                  />
                                  <div className="invalid-feedback">
                                    Valid last name is required.
                                  </div>
                                </Col>
                              </Row>
                              <div className="mb-3">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="address"
                                  placeholder="1234 Main St"
                                  required
                                />
                                <div className="invalid-feedback">
                                  Please enter your shipping address.
                                </div>
                              </div>
                              <div className="mb-3">
                                <Label htmlFor="address2">
                                  Address 2{" "}
                                  <span className="text-muted">(Optional)</span>
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="address2"
                                  placeholder="Apartment or suite"
                                />
                              </div>
                              <div className="mb-3">
                                <Label htmlFor="mobile">Mobile Number</Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="mobile"
                                />
                              </div>
                              <Row>
                                <Col md="5" className="mb-3">
                                  <Label className="form-label">Country</Label>
                                  
                                    <Select
                    defaultValue={countryOption}
                    onChange={setCountryOption}
                    options={Countryoptions}
                    placeholder="Brazil"
                    classNamePrefix="Search"
                  />
                                  <div className="invalid-feedback">
                                    Please select a valid country.
                                  </div>
                                </Col>
                                <Col md="4" className="mb-3">
                                  <Label className="form-label">State</Label>
                                  <Select
                    defaultValue={countryOption}
                    onChange={setCountryOption}
                    options={Countryoptions}
                    placeholder="Poland"
                    classNamePrefix="Search"
                  />
                                  <div className="invalid-feedback">
                                    Please provide a valid state.
                                  </div>
                                </Col>
                                <Col md="3" className="mb-3">
                                  <Label htmlFor="zip">Zip</Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="zip"
                                    placeholder=""
                                    required
                                  />
                                  <div className="invalid-feedback">
                                    Zip code required.
                                  </div>
                                </Col>
                              </Row>
                              <hr className="mb-4" />
                              <Button
                                color=""
                                className="btn btn-primary btn-block"
                                type="submit"
                              >
                                {" "}
                                Checkout
                              </Button>
                            </Form>
                          </section>
                          <div className="d-flex align-items-start gap-3 mt-4">
                            <Button
                              color=""
                              type="button"
                              style={{ background: "#949eb7", color: "#fff" }}
                              onClick={() => {
                                toggleTab(activeTab - 1, 0);
                              }}
                            >
                              Previous
                            </Button>
                            <Button
                              color=""
                              type="button"
                              className="btn btn-primary ms-auto"
                              onClick={() => {
                                toggleTab(activeTab + 1, 25);
                              }}
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId={3}>
                        <div className="container">
                          <h4>Order</h4>
                          <section>
                            <h5 className="text-start mb-2">Your Order</h5>
                            <p className="mb-4 text-muted tx-13 ms-0 text-start">
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since
                            </p>
                            <div className="product">
                              <div className="item flex-wrap">
                                <div className="left mb-2">
                                  {" "}
                                  <Link to="#" className="thumb">
                                    {" "}
                                    <img
                                      src={product2}
                                      alt=""
                                      className="br-5"
                                    />{" "}
                                  </Link>
                                  <div className="purchase">
                                    <h6>
                                      {" "}
                                      <Link to="#">Flowerpot</Link>{" "}
                                    </h6>
                                    <div className="d-flex flex-wrap  mt-2">
                                      <div className="my-2 product-title tx-12">
                                        Quantity:
                                      </div>
                                      <div
                                        className="handle-counter ms-2"
                                        id="handleCounter1"
                                      >
                                        <Button
                                          color=""
                                          className="counter-minus btn btn-outline-light border"
                                          onClick={Decrement}
                                        >
                                          <i className="fe fe-minus"></i>
                                        </Button>
                                        <span 
                                         
                                          defaultValue="2"
                                          className="form-control qty"
                                        >{num}</span>
                                        <Button
                                          color=""
                                          className="counter-plus btn btn-outline-light border"
                                          onClick={Increment}
                                        >
                                          <i className="fe fe-plus"></i>
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                                <span className="price tx-20">$290</span>
                              </div>
                              <div className="item flex-wrap">
                                <div className="left mb-2">
                                  {" "}
                                  <Link to="#" className="thumb">
                                    {" "}
                                    <img
                                      src={product5}
                                      alt=""
                                      className="br-5"
                                    />{" "}
                                  </Link>
                                  <div className="purchase">
                                    <h6>
                                      {" "}
                                      <Link to="#">white chair</Link>{" "}
                                    </h6>
                                    <div className="d-flex flex-wrap mt-2">
                                      <div className="my-2 product-title tx-12">
                                        Quantity:
                                      </div>
                                      <div
                                        className="handle-counter ms-2"
                                        id="handleCounter2"
                                      >
                                         <Button
                                          color=""
                                          className="counter-minus btn btn-outline-light border"
                                          onClick={Decrement1}
                                        >
                                          <i className="fe fe-minus"></i>
                                        </Button>
                                        <span 
                                         
                                          defaultValue="2"
                                          className="form-control qty"
                                        >{num1}</span>
                                        <Button
                                          color=""
                                          className="counter-plus btn btn-outline-light border"
                                          onClick={Increment1}
                                        >
                                          <i className="fe fe-plus"></i>
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                                <span className="price tx-20">$124</span>
                              </div>
                            </div>
                            <div className="checkout">
                              <div className="subtotal">
                                {" "}
                                <span className="heading">Subtotal</span>{" "}
                                <span className="total tx-20 font-weight-bold">
                                  $364
                                </span>{" "}
                              </div>
                            </div>
                          </section>
                          <div className="d-flex align-items-start gap-3 mt-4">
                            <Button
                              color=""
                              type="button"
                              style={{ background: "#949eb7", color: "#fff" }}
                              onClick={() => {
                                toggleTab(activeTab - 1, 0);
                              }}
                            >
                              Previous
                            </Button>
                            <Button
                              color=""
                              type="button"
                              className="btn btn-primary ms-auto"
                              onClick={() => {
                                toggleTab(activeTab + 1, 25);
                              }}
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId={4}>
                        <div className="container">
                          <h4>Payments</h4>
                          <section>
                            <div className="">
                              <h5 className="text-start mb-2">Payments</h5>
                              <p className="mb-4 text-muted tx-13 ms-0 text-start">
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since
                              </p>
                            </div>
                            <div className="card-pay">
                              <Nav className="tabs-menu nav">
                                <NavItem className="">
                                  <NavLink
									className={classnames({ active: Tab1 === "tab1", })} onClick={() => { style1("tab1"); }}
                                  >
                                    <i className="fa fa-credit-card"></i> Credit
                                    Card
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
									className={classnames({ active: Tab1 === "tab2", })} onClick={() => { style1("tab2"); }}
                                  >
                                    <i className="fa fa-paypal"></i> Paypal
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({ active: Tab1 === "tab3", })} onClick={() => { style1("tab3"); }}
                                  >
                                    <i className="fa fa-university"></i> Bank
                                    Transfer
                                  </NavLink>
                                </NavItem>
                              </Nav>
							  <div  className="panel-body tabs-menu-body">
                              <TabContent className="tab-content" activeTab={Tab1}>
                                <TabPane
                                  className="tab-pane" tabId="tab1"
                                >
                                  <div
                                    className="text-danger py-3 br-3 mb-4"
                                    role="alert"
                                  >
                                    Please Enter Valid Details
                                  </div>
                                  <FormGroup>
                                    <Label className="form-label">
                                      CardHolder Name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      placeholder="First Name"
                                    />
                                  </FormGroup>
                                  <FormGroup>
                                    <Label className="form-label">
                                      Card number
                                    </Label>
                                    <div className="input-group">
                                      <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search for..."
                                      />
                                      <Button
                                        color=""
                                        className="btn btn-primary box-shadow-0"
                                        type="button"
                                      >
                                        <i className="fa fa-cc-visa"></i> &nbsp;
                                        <i className="fa fa-cc-amex"></i> &nbsp;
                                        <i className="fa fa-cc-mastercard"></i>
                                      </Button>
                                    </div>
                                  </FormGroup>
                                  <Row>
                                    <Col sm="8">
                                      <FormGroup>
                                        <Label className="form-label">
                                          Expiration
                                        </Label>
                                        <div className="input-group">
                                          <Input
                                            type="number"
                                            className="form-control"
                                            placeholder="MM"
                                            name="Month"
                                          />
                                          <Input
                                            type="number"
                                            className="form-control"
                                            placeholder="YY"
                                            name="Year"
                                          />
                                        </div>
                                      </FormGroup>
                                    </Col>
                                    <Col sm="4">
                                      <FormGroup>
                                        <Label className="form-label">
                                          CVV
                                          <i className="fa fa-question-circle"></i>
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          required
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </TabPane>
                                <TabPane className="tab-pane" tabId="tab2">
                                  <p className="mt-4">
                                    Paypal is easiest way to pay online
                                  </p>
                                  <p>
                                    <Link to="#" className="btn btn-primary">
                                      <i className="fa fa-paypal"></i> Log in my
                                      Paypal
                                    </Link>
                                  </p>
                                  <p className="mb-0">
                                    <strong>Note:</strong> Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut
                                    odit aut fugit, sed quia consequuntur magni
                                    dolores eos qui ratione voluptatem sequi
                                    nesciunt.{" "}
                                  </p>
                                </TabPane>
                                <TabPane className="tab-pane" tabId="tab3">
                                  <p className="mt-4">Bank account details</p>
                                  <dl className="card-text">
                                    <dt>BANK: </dt>
                                    <dd> THE UNION BANK 0456</dd>
                                  </dl>
                                  <dl className="card-text">
                                    <dt>Account number: </dt>
                                    <dd> 67542897653214</dd>
                                  </dl>
                                  <dl className="card-text">
                                    <dt>IBAN: </dt>
                                    <dd>543218769</dd>
                                  </dl>
                                  <p className="mb-0">
                                    <strong>Note:</strong> Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut
                                    odit aut fugit, sed quia consequuntur magni
                                    dolores eos qui ratione voluptatem sequi
                                    nesciunt.{" "}
                                  </p>
                                </TabPane>
                              </TabContent>
                            </div>
							</div>
                          </section>
                          <div className="d-flex align-items-start gap-3 mt-4">
                            <Button
                              color=""
                              type="button"
                              style={{ background: "#949eb7", color: "#fff" }}
                              onClick={() => {
                                toggleTab(activeTab - 1, 0);
                              }}
                            >
                              Previous
                            </Button>
                            <Button
                              color=""
                              type="button"
                              className="btn btn-primary ms-auto"
                              onClick={() => {
                                toggleTab(activeTab + 1, 25);
                              }}
                            >
                              Next
                            </Button>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId={5}>
                        <div className="container">
                          <h4>Finished</h4>
                          <section className="text-center">
                            <div className="">
                              <h5 className="text-center mb-4">
                                Your order Confirmed!
                              </h5>
                            </div>
                            <svg
                              className="w-100h h-100h mx-auto justify-content-center mb-3 text-center"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 130.2 130.2"
                            >
                              <circle
                                className="path circle"
                                fill="none"
                                stroke="#22c03c"
                                strokeWidth="6"
                                strokeMiterlimit="10"
                                cx="65.1"
                                cy="65.1"
                                r="62.1"
                              />
                              <polyline
                                className="path check"
                                fill="none"
                                stroke="#22c03c"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="100.2,40.2 51.5,88.8 29.8,67.5 "
                              />
                            </svg>
                            <p className="success pl-5 pr-5">
                              Order placed successfully. Your order will be
                              dispacted soon. meanwhile you can track your order
                              in my order section.
                            </p>
                          </section>
                          <div className="d-flex align-items-start gap-3 mt-4">
                            <Button
                              color=""
                              type="button"
                              style={{ background: "#949eb7", color: "#fff" }}
                              onClick={() => {
                                toggleTab(activeTab - 1, 0);
                              }}
                            >
                              Previous
                            </Button>
                            <Button
                              color=""
                              type="button"
                              className="btn btn-success ms-auto"
                            >
                              Order again
                            </Button>
                          </div>
                        </div>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
Checkout.propTypes = {};

Checkout.defaultProps = {};

export default Checkout;
