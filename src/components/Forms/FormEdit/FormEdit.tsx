import React from "react";
import { Card, CardHeader,CardBody, CardTitle, Col, Row } from "reactstrap";
import { Wrappers } from './Wrapper';
import { FormEditorstyle1 } from './BasicEditor';
import { LargeModaleditor } from './ModalEditor';
import { FromInlineEditEditor } from './InlineEditeditor';
import { PageHeaders } from "../../../Shared/Prism/Prism";


const FormEdit = () => {
  

  return (
    <div>
      <PageHeaders
      title="Form Editor"
      home="Home"
      name="Forms"
      fonticonsname="Form Editor"
    />
      <Row className="row-cards">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h3">Form Editor style1</CardTitle>
            </CardHeader>
            <CardBody>
            <Wrappers />
            </CardBody>
          </Card>
        </Col>
      </Row> 

      {/* <!-- Row --> */}
       <Row className="">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle>Form Editor</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="ql-wrapper ql-wrapper-demo bg-light">
                <div id="quillEditor">
                <FormEditorstyle1 />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row> 
      {/* <!-- /Row --> */}

      {/* <!-- Row --> */}
       <Row className="">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle>Form Editor in Modal</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="text-center p-4 bg-light border">
              <LargeModaleditor />
              </div>
          
              
            </CardBody>
          </Card>
        </Col>
      </Row> 
      {/* <!-- /Row --> */}

      {/* <!-- Row --> */}
       <Row className="">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle>From Inline-Edit Editor</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="wd-xl-100p ht-350">
              <FromInlineEditEditor />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

FormEdit.propTypes = {};

FormEdit.defaultProps = {};

export default FormEdit;
