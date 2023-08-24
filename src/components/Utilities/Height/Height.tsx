import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Table,
  Row,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Height = () => (
  <div>
    <PageHeaders
      title="Height"
      home="Home"
      name="Utilites"
      fonticonsname="Height"
    />
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle>Height Values</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex">
              <div className="d-flex align-items-center justify-content-center w-150 h-5 bg-gray-100">
                .h-5
              </div>
              <div className="d-flex align-items-center justify-content-center w-150 h-9 bg-gray-100 ms-4">
                .h-9
              </div>
              <div className="d-flex align-items-center justify-content-center w-150 h-200 bg-gray-100 ms-4">
                .h-200
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
                      <code>.h-[value]</code>
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
                      <code>.h-[value]</code>
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
                      <code>.h-[value]</code>
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

Height.propTypes = {};

Height.defaultProps = {};

export default Height;
