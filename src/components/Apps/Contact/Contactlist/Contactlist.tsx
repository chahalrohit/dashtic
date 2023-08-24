import React,{useState} from "react";
import { PageHeaders } from "../../../../Shared/Prism/Prism";
import user7 from "../../../../assets/images/users/7.jpg";
import user1 from "../../../../assets/images/users/1.jpg";
import user2 from "../../../../assets/images/users/2.jpg";
import user3 from "../../../../assets/images/users/3.jpg";
import user4 from "../../../../assets/images/users/4.jpg";
import user5 from "../../../../assets/images/users/5.jpg";
import user6 from "../../../../assets/images/users/6.jpg";
import user8 from "../../../../assets/images/users/8.jpg";
import user9 from "../../../../assets/images/users/9.jpg";

import { Link } from "react-router-dom";
import { Button, Col,Card,ModalHeader,Modal,Form,ModalFooter, Label, ModalBody, Row,Input } from "reactstrap";

interface ContactListProps {
  args: [] | undefined
}

const Contactlist = () =>{ 
  function ContactList({ args}: ContactListProps) {
    const [modal, setModal] = useState<boolean>(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button color="" className="btn btn-primary" onClick={toggle}>
        <i className="fe fe-plus"></i>  Add New Contact
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args} size="lg">
          <ModalHeader toggle={toggle}>Create User</ModalHeader>
          <ModalBody className="modal-body">
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
                        <Button color="" className="btn btn-primary" >
                          Save Changes
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
  
  return(
  <div>
    <PageHeaders
      title="Contact List"
      home="Home"
      name="Apps"
      fonticonsname="Contact List"
    />
   
    <Row className="flex-lg-nowrap">
      <Col className="col-12">
        <Row className="flex-lg-nowrap">
          <Col className="col-12 mb-3">
            <div className="">
              <div className="">
                <Row>
                  <Col className="mb-4">
                  <ContactList args={undefined}/>
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
                          placeholder="Search Contact"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} xl={4}>
                    <Card className="text-center user-contact-list">
                      <div className="p-5">
                        <div>
                          <img
                            src={user7}
                            alt=""
                            className="avatar avatar-xxl brround d-block cover-image mx-auto"
                          />{" "}
                        </div>
                        <div className="wrapper mt-3">
                          <p className="mb-0 mt-1 text-dark font-weight-semibold">
                            Denis Rosenblum
                          </p>
                          <small className="text-muted">Project Manager</small>
                        </div>
                        <div className="btn-list mt-5">
                          <Link
                            className="btn btn-white btn-svgs me-1"
                            to="#"
                          >
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z"
                                opacity=".3"
                              />
                              <path d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
                            </svg>{" "}
                            Message
                          </Link>
                          <Link className="btn btn-light btn-svgs" to="#">
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"
                                opacity=".3"
                              />
                              <circle cx="12" cy="8" opacity=".3" r="2" />
                              <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                            </svg>
                            Profile
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xl={4} lg={6}>
                    <Card className="text-center user-contact-list">
                      <div className="p-5">
                        <div>
                          <img
                            className="avatar avatar-xxl brround d-block cover-image mx-auto"
                            alt=""
                            src={user1}
                          />
                        </div>
                        <div className="wrapper mt-3">
                          <p className="mb-0 mt-1 text-dark font-weight-semibold">
                            Catherina Bamber
                          </p>
                          <small className="text-muted">Company Manager</small>
                        </div>
                        <div className="btn-list mt-5">
                          <Link
                            className="btn btn-white btn-svgs"
                            to="#"
                          >
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z"
                                opacity=".3"
                              />
                              <path d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
                            </svg>{" "}
                            Message
                          </Link>
                          <Link className="btn btn-light btn-svgs" to="#">
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"
                                opacity=".3"
                              />
                              <circle cx="12" cy="8" opacity=".3" r="2" />
                              <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                            </svg>
                            Profile
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xl={4} lg={6}>
                    <Card className="text-center user-contact-list">
                      <div className="p-5">
                        <div>
                          <img
                            className="avatar avatar-xxl brround d-block cover-image mx-auto"
                            alt=""
                            src={user2}
                          />
                        </div>
                        <div className="wrapper mt-3">
                          <p className="mb-0 mt-1 text-dark font-weight-semibold">
                            Dana Lott
                          </p>
                          <small className="text-muted">Hr Manager</small>
                        </div>
                        <div className="btn-list mt-5">
                          <Link
                            className="btn btn-white btn-svgs"
                            to="#"
                          >
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z"
                                opacity=".3"
                              />
                              <path d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
                            </svg>{" "}
                            Message
                          </Link>
                          <Link className="btn btn-light btn-svgs" to="#">
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"
                                opacity=".3"
                              />
                              <circle cx="12" cy="8" opacity=".3" r="2" />
                              <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                            </svg>
                            Profile
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xl={4} lg={6}>
                    <Card className="text-center user-contact-list">
                      <div className="p-5">
                        <div>
                          <img
                            className="avatar avatar-xxl brround d-block cover-image mx-auto"
                            src={user3}
                            alt=""
                          />
                        </div>
                        <div className="wrapper mt-3">
                          <p className="mb-0 mt-1 text-dark font-weight-semibold">
                            Benedict Vallone
                          </p>
                          <small className="text-muted">Hr Recriuter</small>
                        </div>
                        <div className="btn-list mt-5">
                          <Link
                            className="btn btn-white btn-svgs"
                            to="#"
                          >
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z"
                                opacity=".3"
                              />
                              <path d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
                            </svg>{" "}
                            Message
                          </Link>
                          <Link className="btn btn-light btn-svgs" to="#">
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"
                                opacity=".3"
                              />
                              <circle cx="12" cy="8" opacity=".3" r="2" />
                              <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                            </svg>
                            Profile
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xl={4} lg={6}>
                    <Card className="text-center user-contact-list">
                      <div className="p-5">
                        <div>
                          <img
                            src={user4}
                            alt=""
                            className="avatar avatar-xxl brround d-block cover-image mx-auto"
                          />
                        </div>
                        <div className="wrapper mt-3">
                          <p className="mb-0 mt-1 text-dark font-weight-semibold">
                            Robbie Ruder
                          </p>
                          <small className="text-muted">Ceo</small>
                        </div>
                        <div className="btn-list mt-5">
                          <Link
                            className="btn btn-white btn-svgs"
                            to="#"
                          >
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z"
                                opacity=".3"
                              />
                              <path d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
                            </svg>{" "}
                            Message
                          </Link>
                          <Link className="btn btn-light btn-svgs" to="#">
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"
                                opacity=".3"
                              />
                              <circle cx="12" cy="8" opacity=".3" r="2" />
                              <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                            </svg>
                            Profile
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xl={4} lg={6}>
                    <Card className="text-center user-contact-list">
                      <div className="p-5">
                        <div>
                          <img
                            src={user5}
                            alt=""
                            className="avatar avatar-xxl brround d-block cover-image mx-auto"
                          />
                        </div>
                        <div className="wrapper mt-3">
                          <p className="mb-0 mt-1 text-dark font-weight-semibold">
                            Micaela Aultman
                          </p>
                          <small className="text-muted">Php developer</small>
                        </div>
                        <div className="btn-list mt-5">
                          <Link
                            className="btn btn-white btn-svgs"
                            to="#"
                          >
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z"
                                opacity=".3"
                              />
                              <path d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
                            </svg>{" "}
                            Message
                          </Link>
                          <Link className="btn btn-light btn-svgs" to="#">
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"
                                opacity=".3"
                              />
                              <circle cx="12" cy="8" opacity=".3" r="2" />
                              <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                            </svg>
                            Profile
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xl={4} lg={6}>
                    <Card className="text-center user-contact-list">
                      <div className="p-5">
                        <div>
                          <img
                            src={user6}
                            className="avatar avatar-xxl brround d-block cover-image mx-auto"
                            alt=""
                          />
                        </div>
                        <div className="wrapper mt-3">
                          <p className="mb-0 mt-1 text-dark font-weight-semibold">
                            Jacquelynn Sapienza
                          </p>
                          <small className="text-muted">Web developer</small>
                        </div>
                        <div className="btn-list mt-5">
                          <Link
                            className="btn btn-white btn-svgs"
                            to="#"
                          >
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z"
                                opacity=".3"
                              />
                              <path d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
                            </svg>{" "}
                            Message
                          </Link>
                          <Link className="btn btn-light btn-svgs" to="#">
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"
                                opacity=".3"
                              />
                              <circle cx="12" cy="8" opacity=".3" r="2" />
                              <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                            </svg>
                            Profile
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xl={4} lg={6}>
                    <Card className="text-center user-contact-list">
                      <div className="p-5">
                        <div>
                          <img
                            className="avatar avatar-xxl brround d-block cover-image mx-auto"
                            src={user8}
                            alt=""
                          />
                        </div>
                        <div className="wrapper mt-3">
                          <p className="mb-0 mt-1 text-dark font-weight-semibold">
                            Elida Distefano
                          </p>
                          <small className="text-muted">Hr Manager</small>
                        </div>
                        <div className="btn-list mt-5">
                          <Link
                            className="btn btn-white btn-svgs"
                            to="#"
                          >
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z"
                                opacity=".3"
                              />
                              <path d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
                            </svg>{" "}
                            Message
                          </Link>
                          <Link className="btn btn-light btn-svgs" to="#">
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"
                                opacity=".3"
                              />
                              <circle cx="12" cy="8" opacity=".3" r="2" />
                              <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                            </svg>
                            Profile
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col xl={4} lg={6}>
                    <Card className="text-center user-contact-list">
                      <div className="p-5">
                        <div>
                          <img
                            src={user9}
                            alt=""
                            className="avatar avatar-xxl brround d-block cover-image mx-auto"
                          />
                        </div>
                        <div className="wrapper mt-3">
                          <p className="mb-0 mt-1 text-dark font-weight-semibold">
                            Collin Bridgman
                          </p>
                          <small className="text-muted">web designer</small>
                        </div>
                        <div className="btn-list mt-5">
                          <Link
                            className="btn btn-white btn-svgs"
                            to="#"
                          >
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z"
                                opacity=".3"
                              />
                              <path d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
                            </svg>{" "}
                            Message
                          </Link>
                          <Link className="btn btn-light btn-svgs" to="#">
                            <svg
                              className="svg-icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z"
                                opacity=".3"
                              />
                              <circle cx="12" cy="8" opacity=".3" r="2" />
                              <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                            </svg>
                            Profile
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        {/* <!-- User Form Modal --> */}
      </Col>
    </Row>
  </div>
);
   }
Contactlist.propTypes = {};

Contactlist.defaultProps = {};

export default Contactlist;
