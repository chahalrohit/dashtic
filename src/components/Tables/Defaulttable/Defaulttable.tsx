import React from "react";
import { Basic } from "./data";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import { Card, CardHeader,CardBody,Table, Col, Row } from "reactstrap";
const Defaulttable = () => (
  <div>
    <PageHeaders
      title="Default Tables"
      home="Home"
      name="Tables"
      fonticonsname="Default Tables"
    />

    <Row>
      <Col md={12}lg={12}>
        <Card>
          <CardHeader>
            <h3 className="card-title">Basic Table</h3>
          </CardHeader>
          <div className="table-responsive">
            <Table className="table card-table table-vcenter text-nowrap mb-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {Basic.map((list) => (
                  <tr key={list.ID}>
                    <th scope="row">{list.ID}</th>
                    <td>{list.Name}</td>
                    <td>{list.Position}</td>
                    <td>{list.Salary}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {/* <!-- table-responsive --> */}
        </Card>
        <Card>
          <CardHeader>
            <h3 className="card-title">Striped Rows</h3>
          </CardHeader>
          <CardBody className=" p-0">
            <div className="table-responsive">
              <Table className="table table-striped card-table table-vcenter text-nowrap mb-0 table-bordered border-top-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {Basic.map((list) => (
                    <tr key={list.ID}>
                      <th scope="row">{list.ID}</th>
                      <td>{list.Name}</td>
                      <td>{list.Position}</td>
                      <td>{list.Salary}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            {/* <!-- bd --> */}
          </CardBody>
          {/* <!-- bd --> */}
        </Card>
        {/* <!-- bd --> */}

        <Card>
          <CardHeader>
            <h3 className="card-title">Bordered Table</h3>
          </CardHeader>
          <CardBody className="">
            <div className="table-responsive">
              <Table className="table table-bordered card-table table-vcenter text-nowrap mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {Basic.map((list) => (
                    <tr key={list.ID}>
                      <th scope="row">{list.ID}</th>
                      <td>{list.Name}</td>
                      <td>{list.Position}</td>
                      <td>{list.Salary}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="card-title">Hoverable Rows Table</h3>
          </CardHeader>
          <CardBody className=" p-0">
            <div className="table-responsive">
              <Table className="table table-hover card-table table-vcenter text-nowrap mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {Basic.map((list) => (
                    <tr key={list.ID}>
                      <th scope="row">{list.ID}</th>
                      <td>{list.Name}</td>
                      <td>{list.Position}</td>
                      <td>{list.Salary}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row -->

                        <!-- Row --> */}
    <Row>
      <Col md={12}lg={12}>
        <Card>
          <CardHeader>
            <h3 className="card-title">Full color variations</h3>
          </CardHeader>
          <div className="table-responsive">
            <Table className="table card-table table-vcenter text-nowrap table-primary mb-0">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-white">ID</th>
                  <th className="text-white">Name</th>
                  <th className="text-white">Position</th>
                  <th className="text-white">Salary</th>
                </tr>
              </thead>
              <tbody>
                {Basic.map((list) => (
                  <tr key={list.ID}>
                    <th scope="row">{list.ID}</th>
                    <td>{list.Name}</td>
                    <td>{list.Position}</td>
                    <td>{list.Salary}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {/* <!-- table-responsive --> */}
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row -->

                        <!-- Row --> */}
    <Row>
      <Col md={12}lg={12}>
        <Card>
          <CardHeader>
            <h3 className="card-title">Full color variations2</h3>
          </CardHeader>
          <div className="table-responsive">
            <Table className="table card-table table-vcenter text-nowrap table-warning mb-0">
              <thead className="bg-warning text-white">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {Basic.map((list) => (
                  <tr key={list.ID}>
                    <th scope="row">{list.ID}</th>
                    <td>{list.Name}</td>
                    <td>{list.Position}</td>
                    <td>{list.Salary}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {/* <!-- table-responsive --> */}
        </Card>
      </Col>
    </Row>
  </div>
);

Defaulttable.propTypes = {};

Defaulttable.defaultProps = {};

export default Defaulttable;
