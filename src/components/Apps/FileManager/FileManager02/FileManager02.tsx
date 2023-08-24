import React from "react";
import { Link } from "react-router-dom";
import file from "../../../../assets/images/files/file.png";
import folder from "../../../../assets/images/files/folder.png";
import photo from "../../../../assets/images/photos/1.jpg";
import word from "../../../../assets/images/files/word.png";
import { PageHeaders } from "../../../../Shared/Prism/Prism";
import { Card, CardBody, Col,Table,Button,Form,Input, Label, ListGroup, ListGroupItem, Row } from "reactstrap";
import * as data from "./data";
const FileManager02 = () => (
  <div>
    <PageHeaders
      title="File Manager"
      home="Home"
      name="Apps"
      fonticonsname="File Manager"
    />
    <Row>
      <Col lg="4"xl="3">
        <Card>
          <CardBody className="d-flex">
            <data.Round />
              <div className="mx-auto chart-circle-value chartcirclevalue text-center fs-14">
                85%
            </div>
            <div className="mt-3">
              <h5 className="mb-1 font-weight-bold">Storage</h5>
              <p className="mb-0">
                <span className="text-muted">13.65gb</span> /{" "}
                <span className="text-muted">16gb</span>
              </p>
            </div>
          </CardBody>
          <CardBody>
            <ListGroup className="list-group list-group-transparent mb-0 file-manger">
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0"
              >
                <svg
                  className="svg-icon me-2"
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
                Images
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0"
              >
                <svg
                  className="svg-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M5 8h10v8H5z" opacity=".3" />
                  <path d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z" />
                </svg>{" "}
                Videos
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0"
              >
                <svg
                  className="svg-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z"
                    opacity=".3"
                  />
                  <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                </svg>{" "}
                Docs
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0"
              >
                <svg
                  className="svg-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M3 19h18V5H3v14zm8-7c.35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3s1.34-3 3-3z"
                    opacity=".3"
                  />
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-1c1.65 0 2.98-1.33 3-2.97V8h3V6h-5v6.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3z" />
                </svg>{" "}
                Music
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0"
              >
                <svg
                  className="svg-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M4 4h10v16H4z" opacity=".3" />
                  <path d="M14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H4V4h10v16zm6.1-12.3l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM17 10.8c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3l-1 1z" />
                </svg>{" "}
                APKs
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0"
              >
                <svg
                  className="svg-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M14.17 11H13V5h-2v6H9.83L12 13.17z" opacity=".3" />
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z" />
                </svg>{" "}
                Downloads
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0"
              >
                <svg
                  className="svg-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z"
                    opacity=".3"
                  />
                  <path d="M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65l2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z" />
                </svg>{" "}
                More
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0"
              >
                <svg
                  className="svg-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M6 20h12V10H6v10zm2-6h3v-3h2v3h3v2h-3v3h-2v-3H8v-2z"
                    opacity=".3"
                  />
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10zm-7-1h2v-3h3v-2h-3v-3h-2v3H8v2h3z" />
                </svg>{" "}
                Hiddent Files
              </ListGroupItem>
            </ListGroup>
          </CardBody>
          <CardBody>
            <ListGroup className="list-group list-group-transparent mb-0 mail-inbox">
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-primary-transparent me-2"></span>
                Remote Control
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-secondary-transparent me-2"></span>
                Google Drive
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-success-transparent me-2"></span>
                FTP Files
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-info-transparent me-2"></span>
                Transfer files
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-warning-transparent me-2"></span>
                Deep Clean
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-danger-transparent me-2"></span>
                Favourities
              </ListGroupItem>
              <ListGroupItem
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-primary-transparent me-2"></span>
                Settings
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
      <Col xl="9"lg="8">
        <Row>
          <Col className="mb-4">
            <Link to="#" className="btn btn-primary mb-1 me-1">
              <i className="fe fe-plus"></i> Upload New Files
            </Link>
            <Link to="#" className="btn btn-light mb-1">
              <i className="fe fe-folder"></i> New folder
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
                  placeholder="Search Files"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Card>
          <CardBody className="py-2 px-3">
            <div className="e-table">
              <div className="table-responsive table-lg mt-3">
                <Table className="table" id="example1">
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
                          <div className="mt-1">document.pdf</div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>10 Jan 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">pdf</td>
                      <td className="text-nowrap align-middle">453kb</td>
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
                          <img
                            src={folder}
                            alt="img"
                            className="w-5 h-5 me-2"
                          />
                          <div className="mt-1">Images</div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>09 Feb 2020</span>
                      </td>
                      <td className="text-nowrap align-middle"></td>
                      <td className="text-nowrap align-middle">3.45gb</td>
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
                          <img
                            src={folder}
                            alt="img"
                            className="w-5 h-5 me-2"
                          />
                          <div className="mt-1">Videos</div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>01 Mar 2020</span>
                      </td>
                      <td className="text-nowrap align-middle"></td>
                      <td className="text-nowrap align-middle">1.23gb</td>
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
                          <img
                            src={folder}
                            alt="img"
                            className="w-5 h-5 me-2"
                          />
                          <div className="mt-1">Documents</div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>03 Mar 2020</span>
                      </td>
                      <td className="text-nowrap align-middle"></td>
                      <td className="text-nowrap align-middle">1.65gb</td>
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
                          <img
                            src={folder}
                            alt="img"
                            className="w-5 h-5 me-2"
                          />
                          <div className="mt-1">Music</div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>09 Mar 2020</span>
                      </td>
                      <td className="text-nowrap align-middle"></td>
                      <td className="text-nowrap align-middle">890mb</td>
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
                          <img
                            src={folder}
                            alt="img"
                            className="w-5 h-5 me-2"
                          />
                          <div className="mt-1">Downloads</div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>09 Mar 2020</span>
                      </td>
                      <td className="text-nowrap align-middle"></td>
                      <td className="text-nowrap align-middle">1.45gb</td>
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
                          <i className="fa fa-music text-secondary fs-20"></i>
                          <div className="ms-3">Topmusicsong</div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>10 Apr 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">Mp4</td>
                      <td className="text-nowrap align-middle">34kb</td>
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
                          <img
                            src={photo}
                            alt="img"
                            className="w-5 h-5 me-2 br-3"
                          />
                          <div className="mt-1">Image</div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>11 Apr 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">jpg</td>
                      <td className="text-nowrap align-middle">1gb</td>
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
                          <img
                            src={folder}
                            alt="img"
                            className="w-5 h-5 me-2"
                          />
                          <div className="mt-1">File Documents</div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>11 Apr 2020</span>
                      </td>
                      <td className="text-nowrap align-middle"></td>
                      <td className="text-nowrap align-middle">11gb</td>
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
                          <img
                            src={folder}
                            alt="img"
                            className="w-5 h-5 me-2"
                          />
                          <div className="mt-1">New Folder</div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>12 Apr 2020</span>
                      </td>
                      <td className="text-nowrap align-middle"></td>
                      <td className="text-nowrap align-middle">1.24gb</td>
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
                          <img src={word} alt="img" className="w-5 h-5 me-2" />
                          <div className="mt-1">Word Document</div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>09 May 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">
                        Ms Word Document
                      </td>
                      <td className="text-nowrap align-middle">54kb</td>
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
                          <div className="mt-1">Pdfdocument</div>
                        </div>
                      </td>
                      <td className="text-nowrap align-middle">
                        <span>09 May 2020</span>
                      </td>
                      <td className="text-nowrap align-middle">pdf</td>
                      <td className="text-nowrap align-middle">34kb</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </CardBody>
        </Card>

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
                <Button color=""
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
                      <Col sm="5"  className="col-12 offset-sm-1 mb-3">
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
                        <Button className="btn btn-primary" type="submit">
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

FileManager02.propTypes = {};

FileManager02.defaultProps = {};

export default FileManager02;
