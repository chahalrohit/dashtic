import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  Input,
  Table,
  CardFooter,
} from "reactstrap";
import { PageHeaderstyle } from "./../../../../Shared/Prism/Prism";

const AddInvoice = () => (
  <div>
    <PageHeaderstyle
      title="Add Invoice"
      home="Home"
      Pages="Pages"
      elements="Invoice"
      name="Add Invoice"
    />

    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle>Add Invoice</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col className="col-12">
                <Row className="mb-3">
                  <Col md="12">
                    <Label className="form-label">Invoice Title</Label>
                    <Input
                      className="form-control"
                      placeholder="Invoice title"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="12">
                    <Label className="form-label">Subject</Label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Subject of Invoice"
                    ></textarea>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="12">
                    <Label className="form-label">Payment Number</Label>
                    <Input
                      className="form-control"
                      placeholder="Payment Number"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="12">
                    <Label className="form-label">Payment Date</Label>
                    <Input
                      className="form-control"
                      placeholder="Payment Date"
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="12">
                    <Label className="form-label">Bill To</Label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Bill To"
                    ></textarea>
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="table-responsive">
              <Table className="table nowrap text-nowrap border mt-5">
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th className="w-40">DESCRIPTION</th>
                    <th>QNTY</th>
                    <th>UNIT PRICE</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Input
                        className="form-control"
                        placeholder=""
                        type="text"

                      />
                    </td>
                    <td>
                      <textarea rows={1} className="form-control"></textarea>
                    </td>
                    <td>
                      <Input
                        className="form-control"
                        placeholder=""
                        type="text"

                      />
                    </td>
                    <td>
                      <Input
                        className="form-control"
                        placeholder=""
                        type="text"
                      />
                    </td>
                    <td>
                      <Input
                        className="form-control"
                        placeholder=""
                        type="text"
                      />
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>
                      <Link className="btn btn-light" to="#">
                        <i className="fe fe-plus"></i> Add Product
                      </Link>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tfoot>
              </Table>
            </div>
            <Row>
              <Col md="12">
                <Label className="form-label">Vat Rate</Label>
                <Input
                  className="form-control"
                  placeholder="Vat Rate"
                  type="text"
                />
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="card-footer">
            <Row>
              <Col className="col">
                <div className="btn-list">
                  <Link className="btn btn-success me-1" to="#">
                    <i className="fe fe-plus"></i> Add New Invoice
                  </Link>
                  <Link className="btn btn-light me-1" to="#">
                    Cancel
                  </Link>
                 </div> 
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  </div>
);

AddInvoice.propTypes = {};

AddInvoice.defaultProps = {};

export default AddInvoice;
