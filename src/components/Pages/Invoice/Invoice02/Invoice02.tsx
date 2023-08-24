import React from "react";
import { Button, Card, CardBody, Col, Label, Row, Table } from "reactstrap";
import { PageHeaderstyle } from "../../../../Shared/Prism/Prism";

const Invoice02 = () => {
  const print = () => {
    window.print();
  };
  return (
    <div>
      <PageHeaderstyle
        title="Invoice"
        home="Home"
        Pages="Pages"
        elements="Invoice"
        name="Invoice 02"
      />

      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <div className="invoice-header text-end d-block mb-5">
                <h1 className="invoice-title font-weight-bold text-uppercase mb-1">
                  Invoice
                </h1>
              </div>
              {/* <!-- invoice-header --> */}
              <Row className="mt-4">
                <Col className="col-md">
                  <Label className="font-weight-bold">Billed To</Label>
                  <div className="billed-to">
                    <h6>Goerge</h6>
                    <p>
                      2406 Raoul Wallenberg Place
                      <br /> Tel No: 203-875-4147
                      <br /> Email: goerge234@gmail.com
                    </p>
                  </div>
                </Col>
                <Col className="col-md">
                  <div className="billed-from text-md-end">
                    <Label className="font-weight-bold">Billed From</Label>
                    <h6>Spruko Technologies Pvt Ltd.</h6>
                    <p>
                      201 Something St., Something Town, YT 242, Country 6546
                      <br /> Tel No: 324 445-4544
                      <br /> Email: info@spruko.com
                    </p>
                  </div>
                  {/* <!-- billed-from --> */}
                </Col>
              </Row>
              <div className="table-responsive mt-4">
                <Table className="table table-bordered border text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="wd-20p">Product</th>
                      <th className="tx-center">QNTY</th>
                      <th className="tx-right">Unit Price</th>
                      <th className="tx-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-weight-bold">
                        Website design & development
                      </td>
                      <td className="tx-center">6</td>
                      <td className="tx-right">$250.00</td>
                      <td className="tx-right">$1500.00</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Branding</td>
                      <td className="tx-center">1</td>
                      <td className="tx-right">$900.00</td>
                      <td className="tx-right">$900.00</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Redesign Service</td>
                      <td className="tx-center">1</td>
                      <td className="tx-right">$500.00</td>
                      <td className="tx-right">$500.00</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Wordpress Plugins</td>
                      <td className="tx-center">5</td>
                      <td className="tx-right">$360.00</td>
                      <td className="tx-right">$1800.00</td>
                    </tr>
                    <tr>
                      <td className="valign-middle" colSpan={2} rowSpan={4}>
                        <div className="invoice-notes">
                          <Label className="main-content-label tx-13 font-weight-semibold">
                            Notes
                          </Label>
                          <p> voluptatum deleniti atque corrupti explicabo.</p>
                        </div>
                        {/* <!-- invoice-notes --> */}
                      </td>
                      <td className="tx-right font-weight-semibold">
                        Sub-Total
                      </td>
                      <td className="tx-right font-weight-semibold">
                        $4700.00
                      </td>
                    </tr>
                    <tr>
                      <td className="tx-right font-weight-semibold">
                        Tax (5%)
                      </td>
                      <td className="tx-right font-weight-semibold" colSpan={3}>
                        $235.50
                      </td>
                    </tr>
                    <tr>
                      <td className="tx-right font-weight-semibold">
                        Discount
                      </td>
                      <td className="tx-right font-weight-semibold" colSpan={3}>
                        -$50.00
                      </td>
                    </tr>
                    <tr>
                      <td className="text-uppercase font-weight-semibold">
                        Total Due
                      </td>
                      <td className="tx-right" colSpan={3}>
                        <h4 className="text-primary font-weight-bold">
                          $4,885.50
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="float-end">
                <Button
                  color=""
                  type="button"
                  className="btn btn-primary mt-4 me-1"
                  onClick={print}
                >
                  <i className="si si-wallet"></i> Pay Invoice
                </Button>
                <Button
                  color=""
                  type="button"
                  className="btn btn-secondary mt-4 me-1"
                  onClick={print}
                >
                  <i className="si si-paper-plane"></i> Send Invoice
                </Button>
                <Button
                  color=""
                  type="button"
                  className="btn btn-info mt-4 me-1"
                  onClick={print}
                >
                  <i className="si si-printer"></i> Print Invoice
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
Invoice02.propTypes = {};

Invoice02.defaultProps = {};

export default Invoice02;
