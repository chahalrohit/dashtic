import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardTitle, Col, Form, Row, Table, UncontrolledTooltip } from "reactstrap";
import user16 from "../../../../assets/images/users/16.jpg";
import { PageHeaderstyle } from './../../../../Shared/Prism/Prism';

const Profile01 = () => (
  <div>
    <PageHeaderstyle title="Profile"home="Home"Pages="Pages"elements="Profile"name="Profile 01"/>
    
    <Row>
      <Col xl="4"lg="4"md="12">
        <Card className="box-widget widget-user">
          <div className="widget-user-image mx-auto mt-5 text-center">
            <img alt="User Avatar" className="rounded-circle" src={user16} />
          </div>
          <CardBody className="text-center">
            <div className="pro-user">
              <h4 className="pro-user-username text-dark mb-1 font-weight-bold">
                John Thomson
              </h4>
              <h6 className="pro-user-desc text-muted">Web Designer</h6>
              <Link
                to={`${import.meta.env.BASE_URL}pages/editprofile`}
                className="btn btn-primary btn-sm mt-3 me-1"
              >
                Edit Profile
              </Link>
              <Link to="#" className="btn btn-success btn-sm mt-3 me-1">
                Follow
              </Link>
            </div>
          </CardBody>
          <CardFooter className="p-0">
            <Row>
              <Col sm="6" className=" border-end text-center">
                <div className="description-block p-4">
                  <h5 className="description-header mb-1 font-weight-bold">
                    689k
                  </h5>
                  <span className="text-muted">Followers</span>
                </div>
              </Col>
              <Col sm="6" className="">
                <div className="description-block text-center p-4">
                  <h5 className="description-header mb-1 font-weight-bold">
                    3,765
                  </h5>
                  <span className="text-muted">Following</span>
                </div>
              </Col>
            </Row>
          </CardFooter>
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h4">Personal Details</CardTitle>
            <div className="table-responsive">
              <Table className="table mb-0">
                <tbody>
                  <tr>
                    <td className="py-2 px-2">
                      <span className="font-weight-semibold w-50">Name </span>
                    </td>
                    <td className="py-2 px-2">Jacob Smith</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2">
                      <span className="font-weight-semibold w-50">
                        Location{" "}
                      </span>
                    </td>
                    <td className="py-2 px-2">USA</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2">
                      <span className="font-weight-semibold w-50">
                        Languages{" "}
                      </span>
                    </td>
                    <td className="py-2 px-2">English, German</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2">
                      <span className="font-weight-semibold w-50">
                        Website{" "}
                      </span>
                    </td>
                    <td className="py-2 px-2">smithabgd.com</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2">
                      <span className="font-weight-semibold w-50">Email </span>
                    </td>
                    <td className="py-2 px-2">georgemestayer@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2">
                      <span className="font-weight-semibold w-50">Phone </span>
                    </td>
                    <td className="py-2 px-2">+125 254 3562s</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl="8"lg="8"md="12">
        <div className="main-content-body main-content-body-profile card mg-b-20">
          {/* <!-- main-profile-body --> */}
          <div className="main-profile-body">
            <div className="tab-content">
              <div className="tab-pane show active" id="about">
                <CardBody>
                  <div className="mb-5">
                    <Form className="profile-edit">
                      <textarea
                        className="form-control"
                        placeholder="What are you doing right now?"
                        rows={5}
                      ></textarea>
                      <div className="profile-share border border-light2 border-top-0">
                        <Link
                          to="#"
                          className="me-2"
                          title=""
                          id="Audio"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="Audio"
                        >
                          <svg
                            className="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                              d="M12 13.3c.66 0 1.19-.54 1.19-1.2l.01-6.2c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2v6.2c0 .66.54 1.2 1.2 1.2z"
                              opacity=".3"
                            />
                            <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2V5.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
                          </svg>
                        </Link>
                        <UncontrolledTooltip placement="bottom" target="Audio">
                        Audio
                    </UncontrolledTooltip>
                        <Link
                          to="#"
                          className="me-2"
                          title=""
                          id="Video"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="Video"
                        >
                          <svg
                            className="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M5 8h10v8H5z" opacity=".3" />
                            <path d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z" />
                          </svg>
                        </Link>
                        <UncontrolledTooltip placement="bottom" target="Video">
                        Video
                    </UncontrolledTooltip>
                        <Link
                          to="#"
                          className="me-2"
                          title=""
                          id="Picture"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-original-title="Picture"
                        >
                          <svg
                            className="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                              d="M5 19h14V5H5v14zm4-5.86l2.14 2.58 3-3.87L18 17H6l3-3.86z"
                              opacity=".3"
                            />
                            <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zm-4.86-7.14l-3 3.86L9 13.14 6 17h12z" />
                          </svg>
                        </Link>
                        <UncontrolledTooltip placement="bottom" target="Picture">
                        Picture
                    </UncontrolledTooltip>
                        <Button
                          color=""
                          className="btn btn-sm btn-success pull-right"
                        >
                          <i className="fa fa-share ms-1"></i> Share
                        </Button>
                      </div>
                    </Form>
                  </div>
                  <h5 className="font-weight-bold">Biography</h5>
                  <div className="main-profile-bio mb-0">
                    <p>
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries nchanged.
                    </p>
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <p className="mb-0">
                      pleasure rationally encounter but because pursue
                      consequences that are extremely painful.occur in which
                      toil and pain can procure him some great pleasure..{" "}
                      <a href="#">More</a>
                    </p>
                  </div>
                </CardBody>
                <CardBody className="border-top">
                  <h5 className="font-weight-bold">Work & Education</h5>
                  <div className="main-profile-contact-list d-xl-flex">
                    <div className="media me-5">
                      <div className="media-icon bg-success-transparent text-success me-4">
                        <i className="fa fa-whatsapp"></i>
                      </div>
                      <div className="media-body">
                        <h6 className="font-weight-bold mb-1">
                          Web Designer at{" "}
                          <Link to="#" className="btn-link">
                            Spruko
                          </Link>
                        </h6>
                        <span>2018 - present</span>
                        <p>Past Work: Spruko, Inc.</p>
                      </div>
                    </div>
                    <div className="media me-5">
                      <div className="media-icon bg-danger-transparent text-danger me-4">
                        <i className="fa fa-briefcase"></i>
                      </div>
                      <div className="media-body">
                        <h6 className="font-weight-bold mb-1">
                          Studied at{" "}
                          <Link to="#" className="btn-link">
                            University
                          </Link>
                        </h6>
                        <span>2004-2008</span>
                        <p>
                          Graduation: Bachelor of Science in Computer Science
                        </p>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <CardBody className="border-top">
                  <h5 className="font-weight-bold">Skills</h5>
                  <Button
                    color=""
                    className="btn btn-sm btn-white mt-1 me-1"
                  >
                    HTML5
                  </Button>
                  <Button
                    color=""
                    className="btn btn-sm btn-white mt-1 me-1"
                  >
                    CSS
                  </Button>
                  <Button
                    color=""
                    className="btn btn-sm btn-white mt-1 me-1"
                  >
                    Java Script
                  </Button>
                  <Button
                    color=""
                    className="btn btn-sm btn-white mt-1 me-1"
                  >
                    Photo Shop
                  </Button>
                  <Button
                    color=""
                    className="btn btn-sm btn-white mt-1 me-1"
                  >
                    Php
                  </Button>
                  <Button
                    color=""
                    className="btn btn-sm btn-white mt-1 me-1"
                  >
                    Wordpress
                  </Button>
                  <Button
                    color=""
                    className="btn btn-sm btn-white mt-1 me-1"
                  >
                    Sass
                  </Button>
                  <Button
                    color=""
                    className="btn btn-sm btn-white mt-1 me-1"
                  >
                    Angular
                  </Button>
                </CardBody>
                <CardBody className="border-top">
                  <h5 className="font-weight-bold">Contact</h5>
                  <div className="main-profile-contact-list d-xl-flex">
                    <div className="media me-4">
                      <div className="media-icon bg-primary-transparent text-primary me-3 mt-1">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="media-body">
                        <small className="text-muted">Mobile</small>
                        <div className="font-weight-bold">+245 354 654</div>
                      </div>
                    </div>
                    <div className="media me-4">
                      <div className="media-icon bg-warning-transparent text-warning me-3 mt-1">
                        <i className="fa fa-slack"></i>
                      </div>
                      <div className="media-body">
                        <small className="text-muted">Stack</small>
                        <div className="font-weight-bold">@spruko.com</div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-icon bg-info-transparent text-info me-3 mt-1">
                        <i className="fa fa-map"></i>
                      </div>
                      <div className="media-body">
                        <small className="text-muted">Current Address</small>
                        <div className="font-weight-bold">
                          San Francisco, USA
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- main-profile-contact-list --> */}
                </CardBody>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

Profile01.propTypes = {};

Profile01.defaultProps = {};

export default Profile01;
