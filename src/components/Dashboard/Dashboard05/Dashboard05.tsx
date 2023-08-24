import React, { useState } from "react";
import classnames from "classnames";
import { PageHeader } from "../../../Shared/Prism/Prism";
import { Line } from "react-chartjs-2";
import Select from 'react-select';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Monero from "../../../assets/images/crypto-currencies/round-outline/Monero.svg";
import LanaCoin from "../../../assets/images/crypto-currencies/round-outline/LanaCoin.svg";
import Iconomi from "../../../assets/images/crypto-currencies/round-outline/Iconomi.svg";
import Golem from "../../../assets/images/crypto-currencies/round-outline/Golem.svg";
import Decred from "../../../assets/images/crypto-currencies/round-outline/Decred.svg";
import Bytecoin from "../../../assets/images/crypto-currencies/round-outline/Bytecoin.svg";
import BitConnect from "../../../assets/images/crypto-currencies/round-outline/BitConnect.svg";
import Augur from "../../../assets/images/crypto-currencies/round-outline/Augur.svg";
import AquariusCoin from "../../../assets/images/crypto-currencies/round-outline/AquariusCoin.svg";
import BitShares from "../../../assets/images/crypto-currencies/round-outline/BitShares.svg";
import NEM from "../../../assets/images/crypto-currencies/round-outline/NEM.svg";
import Bitcoin from "../../../assets/images/crypto-currencies/round-outline/Bitcoin.svg";
import Dash from "../../../assets/images/crypto-currencies/round-outline/Dash.svg";
import EOS from "../../../assets/images/crypto-currencies/round-outline/EOS.svg";
import Ethereum from "../../../assets/images/crypto-currencies/round-outline/Ethereum.svg";
import IOTA from "../../../assets/images/crypto-currencies/round-outline/IOTA.svg";
import Litecoin from "../../../assets/images/crypto-currencies/round-outline/Litecoin.svg";
import {
  Card,
  CardBody,
  Col,
  Row,
  CardHeader,
  CardTitle,
  Table,
  Label,
  Input,
  Progress,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import { Link } from "react-router-dom";
import {
  TradeHistory,
  Balance,
  ProjectInvestment,
  Cryptodata,
  Transactions,
  BTC,
  Tabledata,
  BuyUSD,
  BuyBTC
} from "./data";
import SimpleBar from "simplebar-react";


const Dashboard05 = () => {
  const [navTabactive, setnavTabactive] = useState<string>("1");
  const Navtabs = (tab: string): void => {
    if (navTabactive !== tab) {
      setnavTabactive(tab);
    }
  };

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 3,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  rtl: true,
  responsive: [
         {
             breakpoint: 1500,
             settings: {
                 slidesToShow: 6,
                 slidesToScroll: 3,
                 infinite: true,
                 dots: false
             }
         },
         {
             breakpoint: 1300,
             settings: {
                 slidesToShow: 4,
                 slidesToScroll: 3,
                 infinite: true,
                 dots: false
             }
         },
         {
             breakpoint: 1024,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: true,
                 dots: false
             }
         },
         {
             breakpoint: 520,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 2,
                 initialSlide: 2
             }
         },
         {
             breakpoint: 500,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
             }
         },
         {
             breakpoint: 380,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
             }
         }
     ]
};
  return (
    <div>
      <PageHeader title="Crypto Dashboard" date="Select Date" />

      <Row>
        <Col xl={12} md={12} lg={12}>
          <div className="">
            <div className="js-conveyor-example">
              <ul className="news-crypto">
              <Slider {...settings}>
                <li>
                    <div className="d-flex"><img src={AquariusCoin} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125</span> <span className="text-muted fs-10">USD</span><span className="text-danger ms-auto towards-right"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={Augur} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-success ms-auto towards-right"><i className="ion-arrow-up-c me-1"></i>+2.85% </span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={Bitcoin} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125</span> <span className="text-muted fs-10">USD</span><span className="text-success ms-auto towards-right"><i className="ion-arrow-up-c me-1"></i>-2.25%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={BitConnect} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-danger ms-auto towards-right"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={BitShares} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-success ms-auto towards-right"><i className="ion-arrow-up-c me-1"></i>-1.85% </span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={Bytecoin} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-danger ms-auto towards-right"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={Dash} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-success ms-auto towards-right"><i className="ion-arrow-up-c me-1"></i>-0.32%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={Decred} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-danger ms-auto towards-right"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={EOS} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-success ms-auto towards-right"><i className="ion-arrow-up-c me-1"></i>-1.42%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={Ethereum} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-danger ms-auto towards-right"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={Golem} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-success ms-auto towards-right"><i className="ion-arrow-up-c me-1"></i>-1.32%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={Iconomi} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-danger ms-auto towards-right"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={IOTA} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-success ms-auto towards-right"><i className="ion-arrow-up-c me-1"></i>-0.45%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={LanaCoin} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-danger ms-auto towards-right"><i className="ion-arrow-down-c me-1"></i>-0.78%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={Litecoin} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-success ms-auto towards-right"><i className="ion-arrow-up-c me-1"></i>-0.65%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={Monero} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-danger ms-auto towards-right"><i className="ion-arrow-down-c me-1"></i>-0.36%</span></div>
                </li>
                <li>
                    <div className="d-flex"><img src={NEM} className="w-5 h-5" alt="" /><span className="font-weight-bold mx-2">$5.125 </span> <span className="text-muted fs-10">USD</span><span className="text-success ms-auto towards-right"><i className="ion-arrow-up-c me-1"></i>-0.78%</span></div>
                </li>
            </Slider>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
      {/* <!--End Row--> */}

      <Card className="crypto-header-section">
        <CardBody>
          <Row className="mb-3">
            <Col xl={2} lg={4} className="mt-3">
              <div className="border-lg-end">
                <p className="text-muted">Balance</p>
                <h3 className="mb-0 font-weight-bold">$23,768</h3>
              </div>
            </Col>
            <Col xl={3} lg={4} className="mt-3">
              <div className="border-lg-end">
                <p className="text-muted">Coins</p>
                <div className="d-flex">
                  {Balance.map((list, index) => (
                    <img
                      key={index}
                      src={list.pic}
                      className="w-5 h-5 me-2"
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </Col>
            <Col xl={2} lg={4} className="mt-3">
              <div className="today-profit">
                <p className="text-muted">Today Profit</p>
                <h3 className="mb-0 font-weight-bold">
                  $23,768{" "}
                  <span className="fs-12 text-muted">
                    <i className="fa fa-caret-up text-success"></i> 4.7%
                  </span>
                </h3>
              </div>
            </Col>
            <Col xl={5} lg={12} className="mt-4 pt-2 text-xl-end">
              <Link className="btn btn-white m-1" to="#">
                <i className="fe fe-repeat"></i> Send Money
              </Link>
              <Link className="btn btn-primary m-1" to="#">
                <i className="fe fe-plus"></i> Buy Currency
              </Link>
            </Col>
          </Row>
        </CardBody>
      </Card>

      {/* <!--Row--> */}
      <Row>
        {BTC.map((list: any) => (
          <Col xxl={3} sm={6} lg={6} key={Math.random()}>
            <Card className="overflow-hidden">
              <CardBody className="pb-0">
                <div className="d-flex">
                  <img src={list.pic} className="w-7 h-7 me-2" alt="img" />
                  <div>
                    <p className=" mb-1 text-muted fs-12">{list.name}</p>
                    <h3 className="mb-0 font-weight-bold">{list.price1}</h3>
                  </div>
                  <div className="ms-auto text-end">
                    <p className=" mb-1">{list.price}</p>
                    <p className=" mb-0">
                      <span className="text-muted">{list.text}</span>
                      {list.value}
                    </p>
                  </div>
                </div>
              </CardBody>
              <div className="chart-wrapper ">
                <Line
                  options={list.data1}
                  data={list.data2}
                  id="CryptoChart"
                  className="h-5 overflow-hidden"
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      {/* <!--End Row--> */}

      {/* <!--Row--> */}
      <Row>
        <Col md={12} lg={12} xl={4}>
          <Card className="overflow-hidden">
            <CardHeader>
              <h3 className="card-title">Trade History</h3>
            </CardHeader>
            <CardBody className="px-0">
              <div className="table-responsive h-420">
                <Table className="table text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="border-bottom-0 w-30">Coin</th>
                      <th className="border-bottom-0 w-30">Price</th>
                      <th className="border-bottom-0 w-30">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TradeHistory.map((list, index) => (
                      <tr key={index}>
                        <td>
                          <img src={list.pic} className="w-6 h-6 me-2" alt="" />
                          {list.name}
                        </td>
                        <td>
                          {list.price}
                          {list.priceicon}
                        </td>
                        <td>{list.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={12} lg={12} xl={8}>
          <Card>
            <CardHeader>
              <h3 className="card-title">Crypto Trading</h3>
            </CardHeader>
            <CardBody>
              <Row className="mb-2">
                {Cryptodata.map((list, index) => (
                  <Col
                    xl={3}
                    lg={6}
                    md={12}
                    className="mb-5 text-center"
                    key={index}
                  >
                    <p className="mb-1">{list.price}</p>
                    <h3 className="mb-0 font-weight-bold">{list.num}</h3>
                    <span className="fs-12 text-muted">
                      <span className={list.class}>
                        {list.icon}
                        {list.inc}
                      </span>
                      last year
                    </span>
                  </Col>
                ))}
              </Row>
              <div id="cryptotrading" className="h-300">
                <ProjectInvestment />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* <!--End Row--> */}

      <Row className="row-deck">
        <Col lg={6} xl={6}>
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Transactions</CardTitle>
            </CardHeader>
            <div className="scrollbar2 h-370" id="scrollbar2">
              <SimpleBar className="sidebar-menuscroll">
              {Transactions.map((list, index) => (
                <CardBody className="py-3" key={index}>
                  <Row>
                    <Col>
                      <div className="d-flex">
                        <div
                          className={`crypto-icon bg-${list.color}-transparent text-${list.color} icon-dropshadow-${list.color}`}
                        >
                          {list.icons}
                        </div>
                        <div className="mt-2">
                          <h5 className="mb-1 text-dark font-weight-semibold">
                            {list.name}
                          </h5>
                          <p className="mb-0 fs-12 text-muted">{list.id}</p>
                        </div>
                      </div>
                    </Col>
                    <Col className="col-auto">
                      <div className="mt-2 text-end">
                        <h5 className="mb-1 text-dark font-weight-semibold">
                          {list.value}
                        </h5>
                        <p className="mb-0 fs-12 text-muted">
                          {list.day}
                          <sup>{list.sup}</sup>
                          {list.month}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              ))}
              </SimpleBar>
            </div>
          </Card>
        </Col>
        <Col xl={6} lg={6}>
          <div className="panel panel-primary w-100">
            <div className="tab-menu-heading crypto-tabs">
              <div className="tabs-menu1">
                <Nav tabs className="">
                  <NavItem>
                    <NavLink
                      className={classnames({ active: navTabactive === "1" })}
                      onClick={() => {
                        Navtabs("1");
                      }}
                    >
                      Buy BTC
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: navTabactive === "2" })}
                      onClick={() => {
                        Navtabs("2");
                      }}
                    >
                      Sell BTC
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={navTabactive}>
                  <TabPane className="tab-pane" tabId="1">
                    <Card className="panel-body tabs-menu-body br-tl-0 border-top-0 p-6 w-100 shadow2 crypto-content">
                      <div className="mb-0 border">
                        <CardBody className="text-center">
                          <CardTitle className=" text-start text-dark">
                            Buy Crypto Coins
                          </CardTitle>
                          <div className="mb-4">
                            <Label className="form-label float-start">
                              Enter Your Money
                            </Label>
                            <div className="input-group">
                              <Input
                                type="text"
                                className="form-control"
                                defaultValue="10,000"
                              />
                              <div className="br-tl-0 br-bl-0">
                                {/* <select
                                  className="form-control select2 br-0 nice-select br-tl-0 br-bl-0"
                                  data-placeholder="Choose one (with optgroup)"
                                >
                                  <optgroup label="Currecy">
                                    <option defaultValue="USD">USD</option>
                                    <option defaultValue="EUR">EUR</option>
                                    <option defaultValue="INR">INR</option>
                                    <option defaultValue="GBP">GBP</option>
                                    <option defaultValue="JPY">JPY</option>
                                    <option defaultValue="RUB">RUB</option>
                                  </optgroup>
                                </select> */}
                                <Select
                                  className="br-0 nice-select br-tl-0 br-bl-0"
                                  options={BuyUSD}
                                  placeholder="USD"
                                  classNamePrefix="BTCbuy"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mb-4">
                            <Label className="form-label float-start">
                              Your Crypto Coins Converted to
                            </Label>
                            <div className="input-group">
                              <Input
                                type="text"
                                className="form-control"
                                defaultValue="0.254"
                              />
                              <div className="br-tl-0 br-bl-0">
                                {/* <select
                                  className="form-control select2 br-0 nice-select br-tl-0 br-bl-0"
                                  data-placeholder="Choose one (with optgroup)"
                                >
                                  <optgroup label="Coins">
                                    <option defaultValue="BTC">BTC</option>
                                    <option defaultValue="ETH">ETH</option>
                                    <option defaultValue="DAH">DAH</option>
                                    <option defaultValue="RIP">RIP</option>
                                    <option defaultValue="ITA">ITA</option>
                                    <option defaultValue="EOS">EOS</option>
                                  </optgroup>
                                </select> */}
                                <Select
                                  className="br-0 nice-select br-tl-0 br-bl-0"
                                  options={BuyBTC}
                                  placeholder="BTC"
                                  classNamePrefix="BTCbuy"
                                />
                              </div>
                            </div>
                          </div>
                          <Link className="btn btn-block btn-secondary" to="#">
                            Buy Coins
                          </Link>
                        </CardBody>
                      </div>
                    </Card>
                  </TabPane>
                  <TabPane className="tab-pane" tabId="2">
                    <Card className="panel-body tabs-menu-body br-tl-0 border-top-0 p-6 w-100 shadow2 crypto-content">
                      <div className="mb-0 border">
                        <CardBody className="text-center">
                          <CardTitle className=" text-start text-dark">
                            Sell Crypto Coins
                          </CardTitle>
                          <div className="mb-4">
                            <Label className="form-label float-start">
                              Enter Crypto Coin
                            </Label>
                            <div className="input-group">
                              <Input
                                type="text"
                                className="form-control"
                                defaultValue="0.254"
                              />
                              <div className="br-tl-0 br-bl-0">
                                {/* <select
                                  className="form-control select2 br-0 nice-select br-tl-0 br-bl-0"
                                  data-placeholder="Choose one (with optgroup)"
                                >
                                  <optgroup label="Coins">
                                    <option defaultValue="BTC">BTC</option>
                                    <option defaultValue="ETH">ETH</option>
                                    <option defaultValue="DAH">DAH</option>
                                    <option defaultValue="RIP">RIP</option>
                                    <option defaultValue="ITA">ITA</option>
                                    <option defaultValue="EOS">EOS</option>
                                  </optgroup>
                                </select> */}
                                <Select
                                  className="br-0 nice-select br-tl-0 br-bl-0"
                                  options={BuyBTC}
                                  placeholder="BTC"
                                  classNamePrefix="BTCbuy"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mb-4">
                            <Label className="form-label float-start">
                              Your Money Converted to
                            </Label>
                            <div className="input-group">
                              <Input
                                type="text"
                                className="form-control"
                                defaultValue="10,000"
                              />
                              <div className="br-tl-0 br-bl-0">
                                {/* <select
                                  className="form-control select2 br-0 br-tl-0 br-bl-0 nice-select"
                                  data-placeholder="Choose one (with optgroup)"
                                >
                                  <optgroup label="Currecy">
                                    <option defaultValue="USD">USD</option>
                                    <option defaultValue="EUR">EUR</option>
                                    <option defaultValue="INR">INR</option>
                                    <option defaultValue="GBP">GBP</option>
                                    <option defaultValue="JPY">JPY</option>
                                    <option defaultValue="RUB">RUB</option>
                                  </optgroup>
                                </select> */}
                                <Select
                                  className="br-0 nice-select br-tl-0 br-bl-0"
                                  options={BuyUSD}
                                  placeholder="USD"
                                  classNamePrefix="BTCbuy"
                                />
                              </div>
                            </div>
                          </div>
                          <Link className="btn btn-block btn-primary" to="#">
                            Sell Coins
                          </Link>
                        </CardBody>
                      </div>
                    </Card>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* <!--Row--> */}
      <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <CardHeader>
              <h3 className="card-title">Crypt Marketing Values</h3>
            </CardHeader>
            <CardBody>
              <div className="table-responsive">
                <Table className="table mb-0 table-vcenter table-hover text-nowrap border">
                  <thead>
                    <tr>
                      <th className="border-bottom-0">Currency</th>
                      <th>Price</th>
                      <th>Market Cap</th>
                      <th>Volume 1D</th>
                      <th>Change % (1D)</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Tabledata.map((list, index) => (
                      <tr key={index}>
                        <td className="d-flex">
                          <img
                            src={list.currency}
                            className="w-7 h-7 me-3 icon-dropshadow"
                            alt=""
                          />
                          <div className="mt-2">
                            <h5 className="font-weight-bold mb-0">
                              {list.price}
                            </h5>
                            <p className="mb-0">{list.name}</p>
                          </div>
                        </td>
                        <td>
                          <h5 className="font-weight-bold mb-0">
                            {list.price1}
                          </h5>
                        </td>
                        <td>
                          <h5 className="font-weight-bold mb-0">
                            {list.market}
                          </h5>
                        </td>
                        <td>
                          <h5 className="font-weight-bold mb-0">
                            {list.volume}
                          </h5>
                        </td>
                        <td>
                          <div className="mb-1 mt-2 ">
                            <Progress
                              color={list.color}
                              className={`progress progress-sm bg-${list.bg}-transparent`}
                              value={list.length}
                            ></Progress>
                          </div>
                          <span>{list.progressvalue}</span>
                        </td>
                        <td className="text-end">
                          <Link className="btn btn-white btn-sm me-1" to="#">
                            Withdraw
                          </Link>
                          <Link className="btn btn-white btn-sm me-1" to="#">
                            Deposit
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
    </div>
  );
};

Dashboard05.propTypes = {};

Dashboard05.defaultProps = {};

export default Dashboard05;
