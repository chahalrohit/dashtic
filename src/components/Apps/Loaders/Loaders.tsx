import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Loaders = () => (
  <div>
    <PageHeaders
      title="Loaders"
      home="Home"
      name="Apps"
      fonticonsname="Loaders"
    />
    
    <Row className="row-deck">
      <Col md="12"lg="6"xl="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">loaders1</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="dimmer active">
              <div className="spinner3">
                <div className="dot1"></div>
                <div className="dot2"></div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md="12"lg="6"xl="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">loaders2</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="dimmer active">
              <div className="spinner4">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md="12"lg="6"xl="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">loaders3</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="dimmer active">
              <div className="sk-circle">
                <div className="sk-circle1 sk-child"></div>
                <div className="sk-circle2 sk-child"></div>
                <div className="sk-circle3 sk-child"></div>
                <div className="sk-circle4 sk-child"></div>
                <div className="sk-circle5 sk-child"></div>
                <div className="sk-circle6 sk-child"></div>
                <div className="sk-circle7 sk-child"></div>
                <div className="sk-circle8 sk-child"></div>
                <div className="sk-circle9 sk-child"></div>
                <div className="sk-circle10 sk-child"></div>
                <div className="sk-circle11 sk-child"></div>
                <div className="sk-circle12 sk-child"></div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md="12"lg="6"xl="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">loaders4</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="dimmer active">
              <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md="12"lg="6"xl="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">loaders5</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="dimmer active">
              <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md="12"lg="6"xl="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">loaders6</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="dimmer active">
              <div className="lds-hourglass"></div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row className="row-deck">
      <Col md="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">loaders7</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="dimmer active">
              <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">loaders8</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="dimmer active">
              <div className="spinner1">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

Loaders.propTypes = {};

Loaders.defaultProps = {};

export default Loaders;
