import React from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import file from "../../../../assets/images/files/file.png";
import { PageHeaderstyle } from "../../../../Shared/Prism/Prism";

const Invoice03 = () => (
  <div>
    <PageHeaderstyle
      title="Invoice"
      home="Home"
      Pages="Pages"
      elements="Invoice"
      name="Invoice 03"
    />

    <Row>
      <Col lg="12">
        <Card>
          <CardBody>
            <Row className="m-0 no-gutters">
              <Col lg="4">
                <div
                  className="p-0 invoicelist"
                  id="invoicelist"
                >
                  <CardBody className=" p-0">
                    <div className="tab-menu-heading sub-panel-heading p-0 border-0">
                      <div className="tabs-menu">
                        {/* <!-- Tabs --> */}
                        <ul className="nav panel-tabs">
                          <li className="active">
                            <a
                              className="d-flex"
                              data-bs-toggle="tab"
                              href="#tab41"
                              aria-expanded="true"
                            >
                              <img
                                src={file}
                                alt="img"
                                className="w-7 h-7 me-4"
                              />
                              <div className="mt-1">
                                <h5 className="mb-1 font-weight-bold mt-0">
                                  Invoice #234
                                </h5>
                                <p className="mb-0 text-muted">
                                  Transcation Id : Inv54324
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="d-flex"
                              data-bs-toggle="tab"
                              href="#tab42"
                              aria-expanded="false"
                            >
                              <img
                                src={file}
                                alt="img"
                                className="w-7 h-7 me-4"
                              />
                              <div className="mt-1">
                                <h5 className="mb-1 font-weight-bold mt-0">
                                  Invoice #543
                                </h5>
                                <p className="mb-0 text-muted">
                                  Transcation Id : Inv24234
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="d-flex"
                              data-bs-toggle="tab"
                              href="#tab41"
                              aria-expanded="false"
                            >
                              <img
                                src={file}
                                alt="img"
                                className="w-7 h-7 me-4"
                              />
                              <div className="mt-1">
                                <h5 className="mb-1 font-weight-bold mt-0">
                                  Invoice #124
                                </h5>
                                <p className="mb-0 text-muted">
                                  Transcation Id : Inv65432
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="d-flex"
                              data-bs-toggle="tab"
                              href="#tab42"
                              aria-expanded="false"
                            >
                              <img
                                src={file}
                                alt="img"
                                className="w-7 h-7 me-4"
                              />
                              <div className="mt-1">
                                <h5 className="mb-1 font-weight-bold mt-0">
                                  Invoice #543
                                </h5>
                                <p className="mb-0 text-muted">
                                  Transcation Id : Inv87543
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="d-flex"
                              data-bs-toggle="tab"
                              href="#tab41"
                              aria-expanded="false"
                            >
                              <img
                                src={file}
                                alt="img"
                                className="w-7 h-7 me-4"
                              />
                              <div className="mt-1">
                                <h5 className="mb-1 font-weight-bold mt-0">
                                  Invoice #456
                                </h5>
                                <p className="mb-0 text-muted">
                                  Transcation Id : Inv65342
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="d-flex"
                              data-bs-toggle="tab"
                              href="#tab42"
                              aria-expanded="false"
                            >
                              <img
                                src={file}
                                alt="img"
                                className="w-7 h-7 me-4"
                              />
                              <div className="mt-1">
                                <h5 className="mb-1 font-weight-bold mt-0">
                                  Invoice #534
                                </h5>
                                <p className="mb-0 text-muted">
                                  Transcation Id : Inv67543
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="d-flex"
                              data-bs-toggle="tab"
                              href="#tab41"
                              aria-expanded="false"
                            >
                              <img
                                src={file}
                                alt="img"
                                className="w-7 h-7 me-4"
                              />
                              <div className="mt-1">
                                <h5 className="mb-1 font-weight-bold mt-0">
                                  Invoice #634
                                </h5>
                                <p className="mb-0 text-muted">
                                  Transcation Id : Inv73456
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="d-flex"
                              data-bs-toggle="tab"
                              href="#tab42"
                              aria-expanded="false"
                            >
                              <img
                                src={file}
                                alt="img"
                                className="w-7 h-7 me-4"
                              />
                              <div className="mt-1">
                                <h5 className="mb-1 font-weight-bold mt-0">
                                  Invoice #623
                                </h5>
                                <p className="mb-0 text-muted">
                                  Transcation Id : Inv45325
                                </p>
                              </div>
                            </a>
                          </li>
                          <li className="">
                            <a
                              className="d-flex"
                              data-bs-toggle="tab"
                              href="#tab41"
                              aria-expanded="false"
                            >
                              <img
                                src={file}
                                alt="img"
                                className="w-7 h-7 me-4"
                              />
                              <div className="mt-1">
                                <h5 className="mb-1 font-weight-bold mt-0">
                                  Invoice #243
                                </h5>
                                <p className="mb-0 text-muted">
                                  Transcation Id : Inv87654
                                </p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </div>
              </Col>
              <Col lg="8" className=" p-md-0">
                <div
                  className="panel-body tabs-menu-body p-6 invoice-print d-block invoicedetailspage"
                  id="invoicedetailspage"
                >
                  <div className="tab-content">
                    <div className="tab-pane active text-center" id="tab01">
                      <Row className="my-7">
                        <Col md="9" className="my-8 d-block mx-auto">
                          <img src={file} alt="img" className="w-30 mb-4" />
                          <h4 className="font-weight-bold">Invoice Details</h4>
                          <p className="text-muted">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident
                          </p>
                          <div className="">
                            <Button
                              color=""
                              type="button"
                              className="btn btn-light mt-1 me-1 "
                              onClick={() => window.print()}
                            >
                              <i className="fe fe-eye"></i> View
                            </Button>
                            <Button
                              color=""
                              type="button"
                              className="btn btn-light mt-1 me-1 "
                              onClick={() => window.print()}
                            >
                              <i className="fe fe-download"></i> Download
                            </Button>
                            <Button
                              color=""
                              type="button"
                              className="btn btn-light mt-1 me-1 "
                              onClick={() => window.print()}
                            >
                              <i className="fe fe-share"></i> Send
                            </Button>
                            <Button
                              color=""
                              type="button"
                              className="btn btn-primary mt-1 me-1 "
                              onClick={() => window.print()}
                            >
                              <i className="fe fe-printer"></i> Print
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

Invoice03.propTypes = {};

Invoice03.defaultProps = {};

export default Invoice03;
