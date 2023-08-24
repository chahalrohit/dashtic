import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Col,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import { PageHeaderstyle } from "./../../../../Shared/Prism/Prism";

const EditInvoice = () => (
  <div>
    <PageHeaderstyle
      title="Invoice Edit"
      home="Home"
      Pages="Pages"
      elements="Invoice"
      name="Invoice Edit"
    />

    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle>Edit Invoice</CardTitle>
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
                      defaultValue="Invoice"
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
                      defaultValue="Hi Jessica Allen,This is the receipt for a payment of $450.00 (USD) for your works"
                    ></textarea>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md="12">
                    <Label className="form-label">Payment Number</Label>
                    <Input
                      className="form-control"
                      placeholder="Payment Number"
                      defaultValue="23543"
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
                      defaultValue="Street Address, State, City, Region, Postal Code, ctr@example.com"
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
                        defaultValue="Logo Creation"
                      />
                    </td>
                    <td>
                      <textarea
                        rows={1}
                        className="form-control"
                        defaultValue="Logo and business cards design"
                      ></textarea>
                    </td>
                    <td>
                      <Input
                        className="form-control"
                        placeholder=""
                        type="text"
                        defaultValue="2"
                      />
                    </td>
                    <td>
                      <Input
                        className="form-control"
                        placeholder=""
                        type="text"
                        defaultValue="$60.00"
                      />
                    </td>
                    <td>
                      <Input
                        className="form-control"
                        placeholder=""
                        type="text"
                        defaultValue="$120.00"
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
                  defaultValue="20%"
                />
              </Col>
            </Row>
          </CardBody>
          <CardFooter className="card-footer">
            <Row>
              <Col className="col">
                <Link className="btn btn-success me-1" to="#">
                  Save
                </Link>
                <Link className="btn btn-light me-1" to="#">
                  Cancel
                </Link>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  </div>
);

EditInvoice.propTypes = {};

EditInvoice.defaultProps = {};

export default EditInvoice;
