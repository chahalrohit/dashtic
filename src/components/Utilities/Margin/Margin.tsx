import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Margin = () => (
  <div>
    <PageHeaders
      title="Margin Values"
      home="Home"
      name="Utilites"
      fonticonsname="Margin Values"
    />
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle>Margin Positions</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex">
              <div className="w-9 h-9 bg-gray-200">
                <div className="d-flex align-items-center justify-content-center h-100"></div>
              </div>
              <div className="w-9 h-9 bg-gray-200 ms-4">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .ms-4
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 ms-7">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .ms-7
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <Table className="table table-bordered border-top text-nowrap mt-4">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="m-1"</code>
                    </td>
                    <td>Add Margin all sides to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="ms-1"</code>
                    </td>
                    <td>Add Margin left side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="me-1"</code>
                    </td>
                    <td>Add Margin right side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="mt-1"</code>
                    </td>
                    <td>Add Margin top side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="mb-1"</code>
                    </td>
                    <td>Add Margin bottom side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="mx-1"</code>
                    </td>
                    <td>Add Margin horizonatl sides to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="my-1"</code>
                    </td>
                    <td>Add Margin vertical sides to element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Margin values</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
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
                      <code className="pd-0 bg-light">className="m-1"</code>
                    </td>
                    <td>Add margin m-1 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="m-2"</code>
                    </td>
                    <td>Add margin m-2 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="m-3"</code>
                    </td>
                    <td>Add margin m-3 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="m-4"</code>
                    </td>
                    <td>Add margin m-4 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="m-5"</code>
                    </td>
                    <td>Add margin m-5 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="m-6"</code>
                    </td>
                    <td>Add margin m-6 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="m-7"</code>
                    </td>
                    <td>Add margin m-7 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="m-8"</code>
                    </td>
                    <td>Add margin m-8 to element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Remove Margin</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
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
                      <code className="pd-0 bg-light">className="m-0"</code>
                    </td>
                    <td>Remove margin all sides to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="ms-0"</code>
                    </td>
                    <td>Remove margin left side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="me-0"</code>
                    </td>
                    <td>Remove margin right side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="mt-0"</code>
                    </td>
                    <td>Remove margin top side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="mb-0"</code>
                    </td>
                    <td>Remove margin bottom side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="mx-0"</code>
                    </td>
                    <td>Remove margin horizonatl sides to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="my-0"</code>
                    </td>
                    <td>Remove margin vertical sides to element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Media Query margins</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
              <Table className="table table-bordered border-top text-nowrap mg-t-0 mg-b-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Class</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light mb-1">
                        .mt-[size]-[value]
                      </code>
                      <code className="pd-0 bg-light mb-1">
                        .mb-[size]-[value]
                      </code>
                      <code className="pd-0 bg-light mb-1">
                        .me-[size]-[value]
                      </code>
                      <code className="pd-0 bg-light mb-1">
                        .ms-[size]-[value]
                      </code>
                    </td>
                    <td>
                      <p className="mg-b-5">size: xs | sm | md | lg | xl</p>
                      <p className="mg-b-0">
                        value: the padding value (refer to code above)
                      </p>
                    </td>
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

Margin.propTypes = {};

Margin.defaultProps = {};

export default Margin;
