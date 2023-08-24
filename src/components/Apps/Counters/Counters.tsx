import React from "react";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import user8 from "../../../assets/images/photos/8.jpg";
import user9 from "../../../assets/images/photos/9.jpg";
import user10 from "../../../assets/images/photos/10.jpg";
import { DayCounter, Middle, TimeCountingdaysLimit, Timers, Uptimer } from "./data";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const Counters = () => (
  <div>
     <PageHeaders
      title="Counters"
      home="Home"
      name="Apps"
      fonticonsname="Counters"
    />     
     <Row>
      <Col md="12"xl="4">
        <Card className="overflow-hidden">
          <Link to="#">
            <img
              className="card-img-top  "
              src={user8}
              alt="img"
            />
          </Link>
          <CardBody className="d-flex flex-column">
            <h4 className="font-weight-bold">
              <Link to="#">Time Counting From 0</Link>
            </h4>
            <div className="text-muted">
              To take a trivial example, which of us ever undertakes laborious
              physical exerciser , except to obtain some advantage from it...
            </div>
            <div className="bg-primary p-3 br-3 mt-4 text-center">
              <span
                id="timer-countup"
                className="h4 text-white mb-0 font-weight-bold"
              >
                <Uptimer />
              </span>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md="12"xl="4">
        <Card className="overflow-hidden">
          <Link to="#">
            <img
              className="card-img-top "
              src={user9}
              alt="img"
            />
          </Link>
          <CardBody className="d-flex flex-column">
            <h4 className="font-weight-bold">
              <Link to="#">Time Counting From 60 to 20</Link>
            </h4>
            <div className="text-muted">
              To take a trivial example, which of us ever undertakes laborious
              physical exerciser , except to obtain some advantage from it...
            </div>
            <div className="bg-secondary p-3 br-3 mt-4 text-center">
              <span
                id="timer-countinbetween"
                className="h4 text-white mb-0 font-weight-bold"
              >
                 <Timers min={1} />
              </span>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md="12"xl="4">
        <Card className="overflow-hidden">
          <Link to="#">
            <img
              className="card-img-top "
              src={user10}
              alt="img"
            />
          </Link>
          <CardBody className="d-flex flex-column">
            <h4 className="font-weight-bold">
              <Link to="#">Time 1 minute counter</Link>
            </h4>
            <div className="text-muted">
              To take a trivial example, which of us ever undertakes laborious
              physical exerciser , except to obtain some advantage from it...
            </div>
            <div className="bg-warning p-3 br-3 mt-4 text-center">
              <span
                id="timer-countercallback"
                className="h4 text-white mb-0 font-weight-bold"
              >
                <Middle />
              </span>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row> 
    {/* <!-- Row --> */}
     <Row>
      <Col md="12"lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Time Counting days Limit</CardTitle>
          </CardHeader>
          <CardBody className="text-center">
            <div className="bg-info p-3 br-3 text-center">
              <span
                id="timer-outputpattern"
                className="h3 text-white mb-0 font-weight-bold"
              >
                <TimeCountingdaysLimit />
              </span>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="4">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Numbers counter</CardTitle>
          </CardHeader>
          <CardBody className="text-center list-icons">
            <i className="fe fe-user text-primary"></i>
            <h5 className="mt-4">Employess</h5>
            <CountUp className='h2' end={2569} />
          </CardBody>
        </Card>
      </Col>
      <Col lg="4">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Numbers counter</CardTitle>
          </CardHeader>
          <CardBody className="text-center list-icons">
            <i className="fe fe-dollar-sign text-success"></i>
            <h5 className="mt-4">Profit</h5>
            <CountUp className="h2" start={0} end={56989.32} prefix="2," decimal="." decimals={2} />
          </CardBody>
        </Card>
      </Col>
      <Col lg="4">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Numbers counter</CardTitle>
          </CardHeader>
          <CardBody className="text-center list-icons">
            <i className="fe fe-alert-circle text-secondary"></i>
            <h5 className="mt-4">Errors</h5>
            <CountUp className='h2' end={8998} prefix="0." />
          </CardBody>
        </Card>
      </Col>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Day Counter</CardTitle>
          </CardHeader>
          <CardBody className="text-center">
           <DayCounter /> 
          </CardBody>
        </Card>
      </Col>
    </Row> 
  </div>
);



export default Counters;
