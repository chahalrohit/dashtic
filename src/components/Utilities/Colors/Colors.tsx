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
import photo28 from "../../../assets/images/photos/28.jpg";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Colors = () => (
  <div>
    <PageHeaders
      title="Colors"
      home="Home"
      name="Utilites"
      fonticonsname="Colors"
    />
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle>Gray Set</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex flex-wrap ht-80">
              <div className="w-9 bg-gray-900 h-9"></div>
              <div className="w-9 bg-gray-800 h-9"></div>
              <div className="w-9 bg-gray-700 h-9"></div>
              <div className="w-9 bg-gray-600 h-9"></div>
              <div className="w-9 bg-gray-500 h-9"></div>
              <div className="w-9 bg-gray-400 h-9"></div>
              <div className="w-9 bg-gray-300 h-9"></div>
              <div className="w-9 bg-gray-200 h-9"></div>
              <div className="w-9 bg-gray-100 h-9"></div>
            </div>
            <div className="table-responsive mt-5 mb-0">
              <Table className="table table-bordered text-nowrap">
                <tbody>
                  <tr>
                    <td className="wd-20p">
                      <b>Classes</b>
                    </td>
                    <td>
                      <code>class="bg-gray-[value]"</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="wd-20p">
                      <b>Values</b>
                    </td>
                    <td>900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Solid Background Set</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex flex-wrap ht-80">
              <div className="w-9 bg-primary h-9"></div>
              <div className="w-9 bg-success h-9"></div>
              <div className="w-9 bg-warning h-9"></div>
              <div className="w-9 bg-danger h-9"></div>
              <div className="w-9 bg-info h-9"></div>
              <div className="w-9 bg-indigo h-9"></div>
              <div className="w-9 bg-purple h-9"></div>
              <div className="w-9 bg-pink h-9"></div>
              <div className="w-9 bg-teal h-9"></div>
              <div className="w-9 bg-orange h-9"></div>
            </div>
            <div className="table-responsive mt-5 mb-0">
              <Table className="table table-bordered text-nowrap">
                <tbody>
                  <tr>
                    <td className="wd-20p">
                      <b>Classes</b>
                    </td>
                    <td>
                      <code>class="bg-[value]"</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="wd-20p">
                      <b>Values</b>
                    </td>
                    <td>
                      primary | secondary | success | warning | danger | info |
                      indigo | purple | pink | teal | orange
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transparent White Set</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex flex-wrap ht-80">
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-white-1"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-white-2"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-white-3"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-white-4"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-white-5"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-white-6"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-white-7"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-white-8"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-white-9"></div>
              </div>
            </div>
            <div className="table-responsive mt-5 mb-0">
              <Table className="table table-bordered text-nowrap">
                <tbody>
                  <tr>
                    <td className="wd-20p">
                      <b>Classes</b>
                    </td>
                    <td>
                      <code>class="bg-white-[value]"</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="wd-20p">
                      <b>Values</b>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Transparent Black Set</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="d-flex flex-wrap ht-80">
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-black-1"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-black-2"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-black-3"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-black-4"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-black-5"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-black-6"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-black-7"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-black-8"></div>
              </div>
              <div className="w-9 relative">
                <img alt="" className="w-9 h-9 cover-image" src={photo28} />
                <div className="pos-absolute a-0 bg-black-9"></div>
              </div>
            </div>
            <div className="table-responsive mt-5 mb-0">
              <Table className="table table-bordered text-nowrap">
                <tbody>
                  <tr>
                    <td className="wd-20p">
                      <b>Classes</b>
                    </td>
                    <td>
                      <code>class="bg-black-[value]"</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="wd-20p">
                      <b>Values</b>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
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

Colors.propTypes = {};

Colors.defaultProps = {};

export default Colors;
