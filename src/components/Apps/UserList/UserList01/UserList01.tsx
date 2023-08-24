import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Progress,
  Label,
  Input,
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
} from "reactstrap";
import { userdata } from "./data";
import { PageHeaderstyle } from './../../../../Shared/Prism/Prism';

const UserList01 = () => {
  function USerModal(args: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Modal> & Readonly<ModalProps>) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
      <div>
        <Button
          color=""
          className="btn btn-sm btn-white btn-svg edit-btn"
          type="button"
          onClick={toggle}
        >
          Edit
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
          <ModalHeader toggle={toggle}>Create User</ModalHeader>

          <ModalBody>
            <div className="py-1">
              <Form className="" noValidate>
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
                  <Col sm={6} className="col-12  mb-3">
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
                          <label>New Password</label>
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
                            <span className="d-none d-xl-inline">Password</span>
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
              </Form>
            </div>
          </ModalBody>
          <ModalFooter>
            <Row>
              <Col className=" d-flex justify-content-end">
                <Button color="" className="btn btn-primary" type="submit" onClick={toggle}>
                  Save Changes
                </Button>
              </Col>
            </Row>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  return (
    <div>
       <PageHeaderstyle title="User List"home="Home"Pages="Apps"elements="User List"name="User List 01"/>

      <Row className="flex-lg-nowrap">
        <Col className="col-12">
          <Row className="flex-lg-nowrap">
            <Col className="col-12 mb-3">
              <Card className="e-panel ">
                <CardBody>
                  <div className="e-table">
                    <div className="table-responsive table-lg mt-3">
                      <Table
                        className="table table-bordered border-top text-nowrap"
                        id="example1"
                      >
                        <thead>
                          <tr>
                            <th className="align-top border-bottom-0 wd-5"></th>
                            <th className="border-bottom-0 w-20">User</th>
                            <th className="border-bottom-0 w-15">
                              Date of joining
                            </th>
                            <th className="border-bottom-0 w-30">
                              Performance
                            </th>
                            <th className="border-bottom-0 w-10">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userdata.map((list, index) => (
                            <tr key={index}>
                              <td className="align-middle">
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
                                  <span
                                    className="avatar brround avatar-md d-block"
                                    style={{
                                      backgroundImage: `url(${list.photo})`
                                    }}
                                  ></span>
                                  <div className="ms-3 mt-1">
                                    <h6 className="mb-0 font-weight-bold">
                                      {list.name}
                                    </h6>
                                    <small className="">{list.work}</small>
                                  </div>
                                </div>
                              </td>
                              <td className="text-nowrap align-middle">
                                <span>{list.join}</span>
                              </td>
                              <td className="text-nowrap align-middle">
                                <div className="float-end">
                                  <h6 className="mb-2 ms-4 font-weight-bold">
                                    {list.num}
                                  </h6>
                                </div>

                                <Progress
                                  className="progress-sm mb-0 mt-1"
                                  color="primary"
                                  value={list.progress}
                                />
                              </td>
                              <td className="align-middle">
                                <div className="btn-group align-top">
                                  <USerModal />
                                  <Button
                                    color=""
                                    className="btn btn-sm btn-white btn-svg"
                                    type="button"
                                  >
                                    <svg
                                      className="svg-icon"
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      width="24"
                                    >
                                      <path d="M0 0h24v24H0V0z" fill="none" />
                                      <path d="M8 9h8v10H8z" opacity=".3" />
                                      <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
                                    </svg>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* <!-- User Form Modal --> */}
          
        </Col>
      </Row>
    </div>
  );
};
UserList01.propTypes = {};

UserList01.defaultProps = {};

export default UserList01;
