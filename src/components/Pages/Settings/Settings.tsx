import React from "react";
import {
  CardHeader,
  Col,
  Row,
  CardTitle,
  CardBody,
  CardFooter,
  Label,
  Card,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Settings = () => (
  <div>
      <PageHeaders
      title="Settings"
      home="Home"
      name="Pages"
      fonticonsname="Settings"
    />
    
    <Row>
      <Col lg="4" xl="3">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Settings</CardTitle>
          </CardHeader>
          <ListGroup className="list-group list-group-transparent mb-0 mail-inbox pt-3">
            <ListGroupItem
              action
              active
              href="#"
              tag="a"
              className="list-group-item list-group-item-action d-flex align-items-center active"
            >
              <i className="fe fe-home fs-20"></i>
              <span className="mx-3 mt-1">Main</span>
            </ListGroupItem>
            <ListGroupItem
              action
              href="#"
              tag="a"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="fe fe-grid fs-20"></i>
              <span className="mx-3 mt-1">Web Apps</span>
            </ListGroupItem>
            <ListGroupItem
              action
              href="#"
              tag="a"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="fe fe-server fs-20"></i>
              <span className="mx-3 mt-1">General</span>
            </ListGroupItem>
            <ListGroupItem
              action
              href="#"
              tag="a"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="fe fe-globe fs-20"></i>
              <span className="mx-3 mt-1">Components</span>
            </ListGroupItem>
            <ListGroupItem
              action
              href="#"
              tag="a"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="fe fe-layers fs-20"></i>
              <span className="mx-3 mt-1">Pages</span>
            </ListGroupItem>
            <ListGroupItem
              action
              href="#"
              tag="a"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="fe fe-flag fs-20"></i>
              <span className="mx-3 mt-1">Language & Region</span>
            </ListGroupItem>
            <ListGroupItem
              action
              href="#"
              tag="a"
              className="list-group-item list-group-item-action d-flex align-items-center"
            >
              <i className="fe fe-bell fs-20"></i>
              <span className="mx-3 mt-1">Notifications</span>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
      <Col lg="8" xl="9">
        <Card>
          <CardHeader className="d-block border-bottom-0">
            <CardTitle tag="h3" className="mb-1 mt-3">
              Overview
            </CardTitle>
            <p>Used to customize and manage all settngs about this Dashboard</p>
          </CardHeader>
        </Card>
        <Row>
          <Col lg="12" xl="6" md="12" sm="12" className="p-2">
            <Card>
              <CardBody>
                <Row>
                  <Col lg="12">
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <i className="fe fe-home"></i>
                      </div>
                      <div>
                        <p className="fs-15 font-weight-semibold d-flex mb-0">
                          Dashboard
                        </p>
                        <p className="fs-13 text-muted mb-0">
                          Dashboard Settings such as sidemenu,header and main
                          page can be Controlled.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter className="p-3">
                <Link to="#" className="tx-14 mb-0">
                  Go to Settings
                </Link>
                <Label className="form-switch float-end">
                  <Input
                    type="checkbox"
                    name="form-switch-checkbox"
                    className="form-switch-input"
                    defaultChecked
                  />
                  <span className="form-switch-indicator"></span>
                  <span className="form-switch-description">
                    Restore default
                  </span>
                </Label>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="12" xl="6" md="12" sm="12" className="p-2">
            <Card>
              <CardBody>
                <Row>
                  <Col lg="12">
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <i className="fe fe-grid"></i>
                      </div>
                      <div>
                        <p className="fs-15 font-weight-semibold d-flex mb-0">
                          Webapps
                        </p>
                        <p className="fs-13 text-muted mb-0">
                          Web apps settings such as Apps,Elements,Advanced Ui &
                          Mail can be Controlled.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter className="p-3">
                <Link to="#" className="tx-14 mb-0">
                  Go to Settings
                </Link>
                <Label className="form-switch float-end">
                  <Input
                    type="checkbox"
                    name="form-switch-checkbox"
                    className="form-switch-input"
                  />
                  <span className="form-switch-indicator"></span>
                  <span className="form-switch-description">
                    Restore default
                  </span>
                </Label>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="12" xl="6" md="12" sm="12" className="p-2">
            <Card>
              <CardBody>
                <Row>
                  <Col lg="12">
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <i className="fe fe-server"></i>
                      </div>
                      <div>
                        <p className="fs-15 font-weight-semibold d-flex mb-0">
                          General
                        </p>
                        <p className="fs-13 text-muted mb-0">
                          General settings such as Icons,Charts,Ecommerce can be
                          Controlled.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter className="p-3">
                <Link to="#" className="tx-14 mb-0">
                  Go to Settings
                </Link>
                <Label className="form-switch float-end">
                  <Input
                    type="checkbox"
                    name="form-switch-checkbox"
                    className="form-switch-input"
                  />
                  <span className="form-switch-indicator"></span>
                  <span className="form-switch-description">
                    Restore default
                  </span>
                </Label>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="12" xl="6" md="12" sm="12" className="p-2">
            <Card>
              <CardBody>
                <Row>
                  <Col lg="12">
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <i className="fe fe-flag"></i>
                      </div>
                      <div>
                        <p className="fs-15 font-weight-semibold d-flex mb-0">
                          Region & language
                        </p>
                        <p className="fs-13 text-muted mb-0">
                          In this settings we can change the region and language
                          manually.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter className="p-3">
                <Link to="#" className="tx-14 mb-0">
                  Go to Settings
                </Link>
                <Label className="form-switch float-end">
                  <Input
                    type="checkbox"
                    name="form-switch-checkbox"
                    className="form-switch-input"
                    defaultChecked
                  />
                  <span className="form-switch-indicator"></span>
                  <span className="form-switch-description">
                    Restore default
                  </span>
                </Label>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="12" xl="6" md="12" sm="12" className="p-2">
            <Card>
              <CardBody>
                <Row>
                  <Col lg="12">
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <i className="fe fe-bell"></i>
                      </div>
                      <div>
                        <p className="fs-15 font-weight-semibold d-flex mb-0">
                          Notifiation
                        </p>
                        <p className="fs-13 text-muted mb-0">
                          Notification settings we can control the notification
                          privacy and security.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter className="p-3">
                <Link to="#" className="tx-14 mb-0">
                  Go to Settings
                </Link>
                <Label className="form-switch float-end">
                  <Input
                    type="checkbox"
                    name="form-switch-checkbox"
                    className="form-switch-input"
                    defaultChecked
                  />
                  <span className="form-switch-indicator"></span>
                  <span className="form-switch-description">
                    Restore default
                  </span>
                </Label>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="12" xl="6" md="12" sm="12" className="p-2">
            <Card>
              <CardBody>
                <Row>
                  <Col lg="12">
                    <div className="d-flex">
                      <div className="settings-main-icon me-4 mt-1">
                        <i className="fe fe-settings"></i>
                      </div>
                      <div>
                        <p className="fs-15 font-weight-semibold d-flex mb-0">
                          Blog
                        </p>
                        <p className="fs-13 text-muted mb-0">
                          In this settings we can modify all Blog related
                          settings in this template.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter className="p-3">
                <Link to="#" className="tx-14 mb-0">
                  Go to Settings
                </Link>
                <Label className="form-switch float-end">
                  <Input
                    type="checkbox"
                    name="form-switch-checkbox"
                    className="form-switch-input"
                  />
                  <span className="form-switch-indicator"></span>
                  <span className="form-switch-description">
                    Restore default
                  </span>
                </Label>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
