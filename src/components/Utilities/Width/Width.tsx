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

const Width = () => (
  <div>
    <PageHeaders
      title="Width"
      home="Home"
      name="Utilites"
      fonticonsname="Width"
    />
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle>Width Values</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex">
              <div className="d-flex align-items-center justify-content-center w-8 h-9 bg-gray-200">
                .w-8
              </div>
              <div className="d-flex align-items-center justify-content-center w-150 h-9 bg-gray-200 ms-4">
                .w-150
              </div>
              <div className="d-flex align-items-center justify-content-center w-50 h-9 bg-gray-200 ms-4">
                .w-50
              </div>
            </div>
            <div className="table-responsive">
              <Table className="table table-bordered text-nowrap mt-4">
                <tbody>
                  <tr>
                    <td className="w-20">
                      <b>Classes</b>
                    </td>
                    <td>
                      <code>.w-[value]</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-20">
                      <b>Values</b>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-responsive">
              <Table className="table table-bordered text-nowrap mt-4">
                <tbody>
                  <tr>
                    <td className="w-20">
                      <b>Classes</b>
                    </td>
                    <td>
                      <code>.w-[value]</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-20">
                      <b>Values</b>
                    </td>
                    <td>
                      100h | 150 | 200 | 250 | 300 | ... | 500 &nbsp; (step of
                      50) Bigger Height
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-responsive">
              <Table className="table table-bordered text-nowrap mt-4">
                <tbody>
                  <tr>
                    <td className="w-20">
                      <b>Classes</b>
                    </td>
                    <td>
                      <code>.w-[value]</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-20">
                      <b>Values</b>
                    </td>
                    <td>
                      10 | 15 | 20 | 25 | 30 | ... | 100 &nbsp; (step of 5) %
                      Percentage Height
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

Width.propTypes = {};

Width.defaultProps = {};

export default Width;
