import React from "react";
import { Card, CardHeader,CardBody, CardTitle, Col, Row } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import {BasicTable} from "./Basictable"
import{Fixedheader} from "./Fixedheader"
import { ExportCSV } from './Exportcvs';
import{DataTabless} from "./Deleterows"
import {Savetable} from "./Addrows"

const DataTable = () => (
  <div>
    <PageHeaders
      title="Data Tables"
      home="Home"
      name="Tables"
      fonticonsname="Data Tables"
    />
    <Row>
      <Col className="col-12">
        {/* <!--div--> */}
        <Card>
          <CardHeader>
            <CardTitle>Basic DataTable</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
            <BasicTable />
            </div>
          </CardBody>
        </Card>
        {/* <!--/div--> */}
        {/* <!--div--> */}
        <Card>
          <CardHeader>
            <CardTitle>File Export</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="file-export">
              <div className="table-responsive">
              <ExportCSV />
              </div>
            </div>
          </CardBody>
        </Card>
        {/* <!--/div--> */}

        {/* <!--div--> */}
        <Card>
          <CardHeader>
            <CardTitle>Deleted Row DataTable</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
            <DataTabless />
            </div>
          </CardBody>
        </Card>
        {/* <!--/div--> */}

        {/* <!--div--> */}
        <Card>
          <CardHeader>
            <CardTitle>Details Display DataTable</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="table-responsive">
            <Savetable/>
            </div>
          </CardBody>
        </Card>
        {/* <!--div--> */}
        <Card>
          <CardHeader>
            <CardTitle>
              Fixed Header
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div className="table-responsive datatble-filter">
            <Fixedheader />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

DataTable.propTypes = {};

DataTable.defaultProps = {};

export default DataTable;
