import React, { useState } from "react";
import {Row,Col,Card,CardBody,CardFooter,Form,Label,Input,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,Button,} from "reactstrap";
import { data } from "../../../../Shared/datas/userlist/data"
import { Link } from "react-router-dom";
import { Modaluser, PageHeaderstyle } from './../../../../Shared/Prism/Prism';


interface userList {
  photo: any;
  name: string;
  num: string;
  no: string;
  email: string;
  work: string;
}

const UserList03 = () => {
  const [allData, setAllData] = useState<userList[]>(data);

let allElement2: userList[] = [];

const myfunction = (InputData: string): void => {
  let allElement: userList;
  for (allElement of data) {
    if (allElement.name[0] === ' ') {
      allElement.name = allElement.name.trim();
    }
    if (allElement.name.toLowerCase().includes(InputData.toLowerCase())) {
      if (allElement.name.toLowerCase().startsWith(InputData.toLowerCase())) {
        allElement2.push(allElement);
      }
    }
  }
  setAllData(allElement2);
};
  return (
    <div>
       <PageHeaderstyle title="User List"home="Home"Pages="Apps"elements="User List"name="User List 03"/>

      <Row className="flex-lg-nowrap">
        <Col className="col-12">
          <Row className="flex-lg-nowrap">
            <Col className="col-12 mb-3">
              <Card className="e-panel ">
                <CardBody className="pb-2">
                  <Row>
                    <Col className="mb-4">
                      <Modaluser/>
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
                            placeholder="Search User"
                            onChange={(ele) => { myfunction(ele.target.value) }}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {allData.map((list, index) => (
                      <Col xl={4} md={6} key={index}>
                        <Card className="border p-0 shadow-none">
                          <div className="d-flex align-items-center p-4">
                            <img
                              className="avatar avatar-lg brround d-block cover-image"
                              src={list.photo}
                            />

                            <div className="wrapper ms-3">
                              <p className="mb-0 mt-1 text-dark font-weight-semibold">
                                 {list.name}
                              </p>
                              <small className="text-muted">
                              {list.work}
                              </small>
                            </div>
                            <div className="float-end ms-auto">
                              <UncontrolledDropdown className="btn-group ms-3 mb-0">
                                <DropdownToggle tag="a"
                                  color=""
                                  className="option-dots"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fa fa-ellipsis-v"></i>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu">
                                  <DropdownItem
                                    className="dropdown-item"
                                  >
                                    <i className="fe fe-edit me-2"></i> Edit
                                  </DropdownItem>
                                  <DropdownItem
                                    className="dropdown-item"
                                  >
                                    <i className="fe fe-trash me-2"></i> Delete
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </div>
                          </div>
                          <CardBody className="border-top">
                            <p className="text-muted">
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur
                            </p>
                            <div className="d-flex">
                              <div className="media-icon lh-1">
                                <svg
                                  className="svg-icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  width="24"
                                >
                                  <path d="M0 0h24v24H0V0z" fill="none" />
                                  <path
                                    d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z"
                                    opacity=".3"
                                  />
                                  <path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" />
                                </svg>
                              </div>
                              <div className="h6 mb-0 ms-3 mt-1">
                                 {list.email}
                              </div>
                            </div>
                            <div className="d-flex">
                              <div className="media-icon lh-1">
                                <svg
                                  className="svg-icon"
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  width="24"
                                >
                                  <path d="M0 0h24v24H0V0z" fill="none" />
                                  <path
                                    d="M15.2 18.21c1.21.41 2.48.67 3.8.76v-1.5c-.88-.07-1.75-.22-2.6-.45l-1.2 1.19zM6.54 5h-1.5c.09 1.32.35 2.59.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58zM14 8h5V5h-5z"
                                    opacity=".3"
                                  />
                                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM12 3v10l3-3h6V3h-9zm7 5h-5V5h5v3z" />
                                </svg>
                              </div>
                              <div className="h6 mb-0 ms-3 mt-1">
                                +345 657 567
                              </div>
                            </div>
                          </CardBody>
                          <CardFooter>
                            <Link to="#" className="btn btn-white btn-sm me-1">
                              Message
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-primary btn-sm me-1"
                            >
                              View Profile
                            </Link>
                          </CardFooter>
                        </Card>
                      </Col>
                    ))}
                    
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* <!-- User Form Modal --> */}
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
                        <Col className="col">
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
                            <Col className="mb-3">
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
                        <Col sm={6} className="col-12 mb-3">
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
                        <Col sm={5} className="col-12 offset-sm-1 mb-3">
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
                        <Col className="d-flex justify-content-end">
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
};
UserList03.propTypes = {};

UserList03.defaultProps = {};

export default UserList03;
