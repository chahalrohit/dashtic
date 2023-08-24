import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Display = () => (
  <div>
    <PageHeaders
      title="Display"
      home="Home"
      name="Utilites"
      fonticonsname="Display"
    />
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Basic Display</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
              <Table className="table table-bordered border-top text-nowrap mb-0 mg-t-5">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.d-inline</code>
                    </td>
                    <td>Set an inline display property of an element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-inline-block</code>
                    </td>
                    <td>Set an inline-block display property of an element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-block</code>
                    </td>
                    <td>Set a block display property of an element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Hiding Elements</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
              <Table className="table table-bordered border-top text-nowrap mb-0 mg-t-5">
                <thead>
                  <tr>
                    <th className="wd-40p">Class</th>
                    <th className="wd-60p">Screen Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.d-none</code>
                    </td>
                    <td>Hidden on all</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-sm-block</code>
                    </td>
                    <td>Hidden only on xs</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-sm-none .d-md-block</code>
                    </td>
                    <td>Hidden only on sm</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-md-none .d-lg-block</code>
                    </td>
                    <td>Hidden only on md</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-lg-none .d-xl-block</code>
                    </td>
                    <td>Hidden only on lg</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-xl-none</code>
                    </td>
                    <td>Hidden only on xl</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-block</code>
                    </td>
                    <td>Visible on all</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-block .d-sm-none</code>
                    </td>
                    <td>Visible only on xs</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-sm-block .d-md-none</code>
                    </td>
                    <td>Visible only on sm</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-md-block .d-lg-none</code>
                    </td>
                    <td>Visible only on md</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-lg-block .d-xl-none</code>
                    </td>
                    <td>Visible only on lg</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-xl-block</code>
                    </td>
                    <td>Visible only on xl</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

Display.propTypes = {};

Display.defaultProps = {};

export default Display;
