import React from "react";
import file from "../../../../assets/images/files/file.png";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Table,
  Input,
  Label,
  Form,
  Button,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { PageHeaderstyle } from "../../../../Shared/Prism/Prism";

const Invoicelist = () => (
  <div>
    <PageHeaderstyle
      title="Invoice List"
      home="Home"
      Pages="Pages"
      elements="Invoice"
      name="Invoice List"
    />

    <Row>
      <Col lg="12">
        <Card>
          <CardBody className="card-body">
            <Row>
              <Col className="mb-4">
                <Link to="#" className="btn btn-primary">
                  <i className="fe fe-plus"></i> Add New Invoice
                </Link>
              </Col>
              <Col className="col-auto mb-4">
                <div className="mb-3 w-100">
                  <div className="input-icon">
                    <span className="input-icon-addon">
                      <i className="fe fe-search"></i>
                    </span>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Search Invoice"
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <div className="e-table">
              <div className="table-responsive table-lg">
                <Table
                  className="table card-table table-vcenter text-nowrap border"
                  id="example1"
                >
                  <thead>
                    <tr>
                      <th></th>
                      <th>Invoice</th>
                      <th>Amount</th>
                      <th>Generate Date</th>
                      <th>Due Date</th>
                      <th>Bill to</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="align-middle w-5">
                        <Label className="custom-control custom-checkbox">
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            name="example-checkbox2"
                            defaultValue="option2"
                          />
                          <span className="custom-control-label"></span>
                        </Label>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <img src={file} alt="img" className="w-5 h-5 me-2" />
                          <div className="mt-1">
                            <Link className="btn-link" to="#">
                              INVOICE #23543
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span className="font-weight-bold">$230</span>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>10 Jan 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">25 Jan 2020</td>
                      <td className="text-nowrap align-middle">
                        Daneil Robert
                      </td>
                      <td>
                        <UncontrolledDropdown className="">
                          <DropdownToggle
                            tag="a"
                            color="default"
                            className="btn btn-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Options <i className="fa fa-angle-down"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu">
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-eye me-2"></i> View
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-share me-2"></i> Send
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-edit me-2"></i> Edit
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-trash me-2"></i> Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle w-5">
                        <Label className="custom-control custom-checkbox">
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            name="example-checkbox2"
                            defaultValue="option2"
                          />
                          <span className="custom-control-label"></span>
                        </Label>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <img src={file} alt="img" className="w-5 h-5 me-2" />
                          <div className="mt-1">
                            <Link className="btn-link" to="#">
                              INVOICE #43245
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span className="font-weight-bold">$640</span>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>10 Jan 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">25 Jan 2020</td>
                      <td className="text-nowrap align-middle">
                        Daneil Robert
                      </td>
                      <td>
                        <UncontrolledDropdown className="">
                          <DropdownToggle
                            tag="a"
                            color="default"
                            className="btn btn-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Options <i className="fa fa-angle-down"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu">
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-eye me-2"></i> View
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-share me-2"></i> Send
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-edit me-2"></i> Edit
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-trash me-2"></i> Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle w-5">
                        <Label className="custom-control custom-checkbox">
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            name="example-checkbox2"
                            defaultValue="option2"
                          />
                          <span className="custom-control-label"></span>
                        </Label>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <img src={file} alt="img" className="w-5 h-5 me-2" />
                          <div className="mt-1">
                            <Link className="btn-link" to="#">
                              INVOICE #54323
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span className="font-weight-bold">$241</span>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>10 Jan 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">25 Jan 2020</td>
                      <td className="text-nowrap align-middle">
                        Daneil Robert
                      </td>
                      <td>
                        <UncontrolledDropdown className="">
                          <DropdownToggle
                            tag="a"
                            color="default"
                            className="btn btn-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Options <i className="fa fa-angle-down"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu">
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-eye me-2"></i> View
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-share me-2"></i> Send
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-edit me-2"></i> Edit
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-trash me-2"></i> Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle w-5">
                        <Label className="custom-control custom-checkbox">
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            name="example-checkbox2"
                            defaultValue="option2"
                          />
                          <span className="custom-control-label"></span>
                        </Label>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <img src={file} alt="img" className="w-5 h-5 me-2" />
                          <div className="mt-1">
                            <Link className="btn-link" to="#">
                              INVOICE #52345
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span className="font-weight-bold">$543</span>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>10 Jan 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">25 Jan 2020</td>
                      <td className="text-nowrap align-middle">
                        Daneil Robert
                      </td>
                      <td>
                        <UncontrolledDropdown className="">
                          <DropdownToggle
                            tag="a"
                            color="default"
                            className="btn btn-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Options <i className="fa fa-angle-down"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu">
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-eye me-2"></i> View
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-share me-2"></i> Send
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-edit me-2"></i> Edit
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-trash me-2"></i> Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle w-5">
                        <Label className="custom-control custom-checkbox">
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            name="example-checkbox2"
                            defaultValue="option2"
                          />
                          <span className="custom-control-label"></span>
                        </Label>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <img src={file} alt="img" className="w-5 h-5 me-2" />
                          <div className="mt-1">
                            <Link className="btn-link" to="#">
                              INVOICE #65343
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span className="font-weight-bold">$654</span>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>10 Jan 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">25 Jan 2020</td>
                      <td className="text-nowrap align-middle">
                        Daneil Robert
                      </td>
                      <td>
                        <UncontrolledDropdown className="">
                          <DropdownToggle
                            tag="a"
                            color="default"
                            className="btn btn-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Options <i className="fa fa-angle-down"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu">
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-eye me-2"></i> View
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-share me-2"></i> Send
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-edit me-2"></i> Edit
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-trash me-2"></i> Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle w-5">
                        <Label className="custom-control custom-checkbox">
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            name="example-checkbox2"
                            defaultValue="option2"
                          />
                          <span className="custom-control-label"></span>
                        </Label>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <img src={file} alt="img" className="w-5 h-5 me-2" />
                          <div className="mt-1">
                            <Link className="btn-link" to="#">
                              INVOICE #23654
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span className="font-weight-bold">$523</span>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>10 Jan 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">25 Jan 2020</td>
                      <td className="text-nowrap align-middle">
                        Daneil Robert
                      </td>
                      <td>
                        <UncontrolledDropdown className="">
                          <DropdownToggle
                            tag="a"
                            color="default"
                            className="btn btn-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Options <i className="fa fa-angle-down"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu">
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-eye me-2"></i> View
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-share me-2"></i> Send
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-edit me-2"></i> Edit
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-trash me-2"></i> Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle w-5">
                        <Label className="custom-control custom-checkbox">
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            name="example-checkbox2"
                            defaultValue="option2"
                          />
                          <span className="custom-control-label"></span>
                        </Label>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <img src={file} alt="img" className="w-5 h-5 me-2" />
                          <div className="mt-1">
                            <Link className="btn-link" to="#">
                              INVOICE #53245
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span className="font-weight-bold">$324</span>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>10 Jan 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">25 Jan 2020</td>
                      <td className="text-nowrap align-middle">
                        Daneil Robert
                      </td>
                      <td>
                        <UncontrolledDropdown className="">
                          <DropdownToggle
                            tag="a"
                            color="default"
                            className="btn btn-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Options <i className="fa fa-angle-down"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu">
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-eye me-2"></i> View
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-share me-2"></i> Send
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-edit me-2"></i> Edit
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-trash me-2"></i> Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-middle w-5">
                        <Label className="custom-control custom-checkbox">
                          <Input
                            type="checkbox"
                            className="custom-control-input"
                            name="example-checkbox2"
                            defaultValue="option2"
                          />
                          <span className="custom-control-label"></span>
                        </Label>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <img src={file} alt="img" className="w-5 h-5 me-2" />
                          <div className="mt-1">
                            <Link className="btn-link" to="#">
                              INVOICE #34234
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span className="font-weight-bold">$543</span>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>10 Jan 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">25 Jan 2020</td>
                      <td className="text-nowrap align-middle">
                        Daneil Robert
                      </td>
                      <td>
                        <UncontrolledDropdown className="">
                          <DropdownToggle
                            tag="a"
                            color="default"
                            className="btn btn-light btn-sm"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Options <i className="fa fa-angle-down"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu">
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-eye me-2"></i> View
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-share me-2"></i> Send
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-edit me-2"></i> Edit
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" href="#">
                              <i className="fe fe-trash me-2"></i> Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </CardBody>
        </Card>

        <div
          className="modal fade"
          role="dialog"
          tabIndex={-1}
          id="user-form-modal"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create User</h5>
                <Button
                  color=""
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                >
                  <span aria-hidden="true">×</span>
                </Button>
              </div>
              <div className="modal-body">
                <div className="py-1">
                  <Form className="form" noValidate>
                    <Row>
                      <Col>
                        <Row>
                          <Col>
                            <div className="mb-3">
                              <Label>Full Name</Label>
                              <Input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="John Smith"
                                defaultValue="John Smith"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-3">
                              <Label>Username</Label>
                              <Input
                                className="form-control"
                                type="text"
                                name="username"
                                placeholder="johnny.s"
                                defaultValue="johnny.s"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-3">
                              <Label>Email</Label>
                              <Input
                                className="form-control"
                                type="text"
                                placeholder="user@example.com"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="col mb-3">
                            <div className="mb-3">
                              <Label>About</Label>
                              <textarea
                                className="form-control"
                                rows={5}
                                placeholder="My Bio"
                              ></textarea>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="6" className="col-12 mb-3">
                        <div className="mb-2">
                          <b>Change Password</b>
                        </div>
                        <Row>
                          <Col>
                            <div className="mb-3">
                              <Label>Current Password</Label>
                              <Input
                                className="form-control"
                                type="password"
                                placeholder="••••••"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="mb-3">
                              <Label>New Password</Label>
                              <Input
                                className="form-control"
                                type="password"
                                placeholder="••••••"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-3">
                              <Label>
                                Confirm{" "}
                                <span className="d-none d-xl-inline">
                                  Password
                                </span>
                              </Label>
                              <Input
                                className="form-control"
                                type="password"
                                placeholder="••••••"
                              />
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="5" className="col-12  offset-sm-1 mb-3">
                        <div className="mb-2">
                          <b>Keeping in Touch</b>
                        </div>
                        <Row>
                          <Col>
                            <Label>Email Notifications</Label>
                            <div className="custom-controls-stacked px-2">
                              <div className="custom-control custom-checkbox">
                                <Input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="notifications-blog"
                                  defaultChecked
                                />
                                <Label
                                  className="custom-control-label"
                                  htmlFor="notifications-blog"
                                >
                                  Blog posts
                                </Label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <Input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="notifications-news"
                                  defaultChecked
                                />
                                <Label
                                  className="custom-control-label"
                                  htmlFor="notifications-news"
                                >
                                  Newsletter
                                </Label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <Input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="notifications-offers"
                                  defaultChecked
                                />
                                <Label
                                  className="custom-control-label"
                                  htmlFor="notifications-offers"
                                >
                                  Personal Offers
                                </Label>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col className=" d-flex justify-content-end">
                        <Button
                          color=""
                          className="btn btn-primary"
                          type="submit"
                        >
                          Save Changes
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

Invoicelist.propTypes = {};

Invoicelist.defaultProps = {};

export default Invoicelist;
