import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Table,
  Col,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Padding = () => (
  <div>
    <PageHeaders
      title="Paddning Values"
      home="Home"
      name="Utilites"
      fonticonsname="Paddning Values"
    />
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle>Padding Positions</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-sm-flex overflow-auto">
              <div className="w-9 h-9 bg-gray-200 p-1 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .p-1
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 ps-1 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .ps-1
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 pe-1 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .pe-1
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 pt-1 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .pt-1
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 pb-1 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .pb-1
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 px-1 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .px-1
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 py-1 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .py-1
                </div>
              </div>
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
                      <code className="pd-0 bg-light">className="p-1"</code>
                    </td>
                    <td>Add padding all sides to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="ps-1"</code>
                    </td>
                    <td>Add padding left side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="pe-1"</code>
                    </td>
                    <td>Add padding right side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="pt-1"</code>
                    </td>
                    <td>Add padding top side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="pb-1"</code>
                    </td>
                    <td>Add padding bottom side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="px-1"</code>
                    </td>
                    <td>Add padding horizonatl sides to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="py-1"</code>
                    </td>
                    <td>Add padding vertical sides to element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Padding values</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-sm-flex overflow-auto">
              <div className="w-9 h-9 bg-gray-200 p-1 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .p-1
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 p-2 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .p-2
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 p-3 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .p-3
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 p-4 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .p-4
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 p-5 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .p-5
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 p-6 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .p-6
                </div>
              </div>
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
                      <code className="pd-0 bg-light">className="p-1"</code>
                    </td>
                    <td>Add padding p-1 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="p-2"</code>
                    </td>
                    <td>Add padding p-2 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="p-3"</code>
                    </td>
                    <td>Add padding p-3 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="p-4"</code>
                    </td>
                    <td>Add padding p-4 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="p-5"</code>
                    </td>
                    <td>Add padding p-5 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="p-6"</code>
                    </td>
                    <td>Add padding p-6 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="p-7"</code>
                    </td>
                    <td>Add padding p-7 to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="p-8"</code>
                    </td>
                    <td>Add padding p-8 to element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Remove Padding</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-sm-flex overflow-auto">
              <div className="w-9 h-9 bg-gray-200 p-0 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .p-0
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 p-1 ps-0 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .ps-0
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 p-1 pe-0 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .pe-0
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 p-1 pt-0 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .pt-0
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 p-1 pb-0 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .pb-0
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 p-1 px-0 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .px-0
                </div>
              </div>
              <div className="w-9 h-9 bg-gray-200 p-1 py-0 ms-sm-3 mb-2 mb-sm-0">
                <div className="d-flex align-items-center justify-content-center h-100">
                  .py-0
                </div>
              </div>
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
                      <code className="pd-0 bg-light">className="p-0"</code>
                    </td>
                    <td>Remove padding all sides to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="ps-0"</code>
                    </td>
                    <td>Remove padding left side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="pe-0"</code>
                    </td>
                    <td>Remove padding right side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="pt-0"</code>
                    </td>
                    <td>Remove padding top side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="pb-0"</code>
                    </td>
                    <td>Remove padding bottom side to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="px-0"</code>
                    </td>
                    <td>Remove padding horizonatl sides to element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code className="pd-0 bg-light">className="py-0"</code>
                    </td>
                    <td>Remove padding vertical sides to element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Media Query Padding</CardTitle>
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
                        .pt-[size]-[value]
                      </code>
                      <code className="pd-0 bg-light mb-1">
                        .pb-[size]-[value]
                      </code>
                      <code className="pd-0 bg-light mb-1">
                        .pe-[size]-[value]
                      </code>
                      <code className="pd-0 bg-light mb-1">
                        .ps-[size]-[value]
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

Padding.propTypes = {};

Padding.defaultProps = {};

export default Padding;
