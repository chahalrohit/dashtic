import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import {
  BasicTreeview1,
  BasicTreeview2,
  FileSystemNavigator1,
  BasicTreeviewexample1,
  BasicTreeviewexample2,
  FileSystemNavigator2,
  TreeviewStyle,
  TreeviewStylecolord,
  ExpandAll,
} from "./data";

const FormTreeView = () => (
  <div>
    
      <PageHeaders
      title="Form Treeview"
      home="Home"
      name="Forms"
      fonticonsname="Form Treeview"
    />
    <Row>
      <Col xl="6" xxl="4">
        <Card>
          <CardBody>
            <span id="treeview1" className="tree">
              <FileSystemNavigator1 />
              <FileSystemNavigator2 />
            </span>
          </CardBody>
        </Card>
      </Col>
      <Col xl="6" xxl="4">
        <Card>
          <CardBody>
            <span id="treeview2" className="tree">
              <BasicTreeview1 />
              <BasicTreeview2 />
            </span>
          </CardBody>
        </Card>
      </Col>
      <Col xl="6" xxl="4">
        <Card>
          <CardBody>
            <span id="treeview3" className="tree">
              <BasicTreeviewexample1 />
              <BasicTreeviewexample2 />
            </span>
          </CardBody>
        </Card>
      </Col>
      <Col xl="6" xxl="4">
        <Card>
          <CardBody>
          <span className="tree">
            <TreeviewStyle />
            </span>
          </CardBody>
        </Card>
      </Col>
      <Col xl="6" xxl="4">
        <Card>
          <CardBody>
            <span className="tree">
            <TreeviewStylecolord />
            </span>
          </CardBody>
        </Card>
      </Col>
      <Col xl="6" xxl="4">
        <Card>
          <CardBody>
            <span id="tree3" className=" tree">
              <ExpandAll />
            </span>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

FormTreeView.propTypes = {};

FormTreeView.defaultProps = {};

export default FormTreeView;
