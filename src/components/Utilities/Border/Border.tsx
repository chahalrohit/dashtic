import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Border = () => (
  <div>
    <PageHeaders
      title="Border"
      home="Home"
      name="Utilites"
      fonticonsname="Border"
    />
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Set Border</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex">
              <div className="w-9 h-9 border m-2 bg-light2"></div>
              <div className="w-9 h-9 border-start m-2 bg-light2"></div>
              <div className="w-9 h-9 border-end m-2 bg-light2"></div>
              <div className="w-9 h-9 border-bottom m-2 bg-light2"></div>
              <div className="w-9 h-9 border-top m-2 bg-light2"></div>
              <div className="w-9 h-9 border-top-bottom m-2 bg-light2"></div>
              <div className="w-9 h-9 border-left-right m-2 bg-light2"></div>
            </div>
            <div className="table-responsive mt-5">
              <Table className="table table-bordered border-top text-nowrap mg-b-0 mg-t-10">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="border"</code>
                    </td>
                    <td>
                      Add border in all sides of an element using default color
                      and width.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-start"
                      </code>
                    </td>
                    <td>Add border to left side of element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-end"
                      </code>
                    </td>
                    <td>Add border to right side of element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-bottom"
                      </code>
                    </td>
                    <td>Add border to bottom side of element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-top"
                      </code>
                    </td>
                    <td>Add border to top side of element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-top-bottom"
                      </code>
                    </td>
                    <td>Add border to top and bottom side of element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-start-end"
                      </code>
                    </td>
                    <td>Add border to left and right side of element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Border Width</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex">
              <div className="w-9 h-9 border m-2 bg-light border-wd-1"></div>
              <div className="w-9 h-9 border m-2 bg-light border-wd-2"></div>
              <div className="w-9 h-9 border m-2 bg-light border-wd-3"></div>
              <div className="w-9 h-9 border m-2 bg-light border-wd-4"></div>
              <div className="w-9 h-9 border m-2 bg-light border-wd-5"></div>
            </div>
            <div className="table-responsive mt-5">
              <Table className="table table-bordered border-top text-nowrap mg-b-0 mg-t-10">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-wd-1"
                      </code>
                    </td>
                    <td>Set 1px border to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-wd-2"
                      </code>
                    </td>
                    <td>Set 2px border to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-wd-3"
                      </code>
                    </td>
                    <td>Set 3px border to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-wd-4"
                      </code>
                    </td>
                    <td>Set 4px border to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-wd-5"
                      </code>
                    </td>
                    <td>Set 5px border to element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Border Color</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex">
              <div className="w-9 h-9 border m-2 bg-light border-primary border-wd-2"></div>
              <div className="w-9 h-9 border m-2 bg-light border-secondary border-wd-2"></div>
              <div className="w-9 h-9 border m-2 bg-light border-info border-wd-2"></div>
              <div className="w-9 h-9 border m-2 bg-light border-success border-wd-2"></div>
              <div className="w-9 h-9 border m-2 bg-light border-warning border-wd-2"></div>
              <div className="w-9 h-9 border m-2 bg-light border-danger border-wd-2"></div>
              <div className="w-9 h-9 border m-2 bg-light border-light border-wd-2"></div>
              <div className="w-9 h-9 border m-2 bg-light border-dark border-wd-2`																							                      "></div>
            </div>
            <div className="table-responsive mt-5">
              <Table className="table table-bordered border-top text-nowrap mg-b-0 mg-t-10">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-primary"
                      </code>
                    </td>
                    <td>Set Border Color primary to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-secondary"
                      </code>
                    </td>
                    <td>Set Border Color secondary to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-info"
                      </code>
                    </td>
                    <td>Set Border Color info to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-success"
                      </code>
                    </td>
                    <td>Set Border Color success to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-warning"
                      </code>
                    </td>
                    <td>Set Border Color warning to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-danger"
                      </code>
                    </td>
                    <td>Set Border Color danger to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-light"
                      </code>
                    </td>
                    <td>Set Border Color light to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-dark"
                      </code>
                    </td>
                    <td>Set Border Color dark to element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Remove Border</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex">
              <div className="w-9 h-9 border-0 m-2 bg-light2"></div>
              <div className="w-9 h-9 border border-start-0 m-2 bg-light2"></div>
              <div className="w-9 h-9 border border-end-0 m-2 bg-light2"></div>
              <div className="w-9 h-9 border border-bottom-0 m-2 bg-light2"></div>
              <div className="w-9 h-9 border border-top-0 m-2 bg-light2"></div>
              <div className="w-9 h-9 border border-top-bottom-0 m-2 bg-light2"></div>
              <div className="w-9 h-9 border border-left-right-0 m-2 bg-light2"></div>
            </div>
            <div className="table-responsive mt-5">
              <Table className="table table-bordered border-top text-nowrap mg-b-0 mg-t-10">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-0"
                      </code>
                    </td>
                    <td>
                      Remove border in all sides of an element using default
                      color and width.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-start-0"
                      </code>
                    </td>
                    <td>Remove border to left side of element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-end-0"
                      </code>
                    </td>
                    <td>Remove border to right side of element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-bottom-0"
                      </code>
                    </td>
                    <td>Remove border to bottom side of element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-top-0"
                      </code>
                    </td>
                    <td>Remove border to top side of element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-top-bottom-0"
                      </code>
                    </td>
                    <td>Remove border to top and bottom side of element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">
                        className="border-left-right-0"
                      </code>
                    </td>
                    <td>Remove border to left and right side of element.</td>
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

Border.propTypes = {};

Border.defaultProps = {};

export default Border;
