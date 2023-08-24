import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Col,
  Input,
  Row,
  AccordionHeader,
  AccordionItem,
  AccordionBody,
  UncontrolledAccordion,
} from "reactstrap";
import { Link } from "react-router-dom";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const FAQS = () => {
  return (
    <div>
      <PageHeaders title="FAQS" home="Home" name="Pages" fonticonsname="FAQS" />
      <Row>
        <Col md="12">
          <Card className="p-5">
            <div className="panel-group faqaccordion1" id="accordion1">
              <UncontrolledAccordion className="panel panel-default border-0" defaultOpen="a">
                <AccordionItem>
                  <AccordionHeader tag="h4" targetId="headingOne1">
                    How To Insert All The Plugins?
                  </AccordionHeader>
                  <AccordionBody
                    accordionId="headingOne1"
                    className="panel-collapse collapse"
                  >
                    <div className="panel-body border-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
              <UncontrolledAccordion className="panel panel-default border-0 mt-2" defaultOpen="b">
                <AccordionItem>
                  <AccordionHeader tag="h4" targetId="headingTwo2">
                    How Can I contact?
                  </AccordionHeader>
                  <AccordionBody
                    accordionId="headingTwo2"
                    className="panel-collapse collapse"
                  >
                    <div className="panel-body border-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
              <UncontrolledAccordion className="panel panel-default border-0 mt-2"  defaultOpen="c">
                <AccordionItem>
                  <AccordionHeader tag="h4" targetId="headingThree3">
                    Can I use this Plugins in Another Template?
                  </AccordionHeader>
                  <AccordionBody
                    id="collapseThree3"
                    className="panel-collapse collapse"
                    accordionId="headingThree3"
                  >
                    <div className="panel-body border-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
              <UncontrolledAccordion className="panel panel-default border-0 mt-2"  defaultOpen="d">
                <AccordionItem>
                  <AccordionHeader tag="h4" targetId="heading4">
                    It is Easy to Customizable?
                  </AccordionHeader>
                  <AccordionBody
                    id="collapse4"
                    className="panel-collapse collapse"
                    accordionId="heading4"
                  >
                    <div className="panel-body border-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
              <UncontrolledAccordion className="panel panel-default border-0 mt-2"  defaultOpen="e">
                <AccordionItem>
                  <AccordionHeader tag="h4" targetId="heading5">
                    How can I download This template?
                  </AccordionHeader>
                  <AccordionBody
                    id="collapse5"
                    className="panel-collapse collapse"
                    accordionId="heading5"
                  >
                    <div className="panel-body border-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
              <UncontrolledAccordion className="panel panel-default border-0 mt-2"  defaultOpen='f'>
                <AccordionItem>
                  <AccordionHeader tag="h4" targetId="heading6">
                    How Can I Add another page in Template?
                  </AccordionHeader>
                  <AccordionBody
                    id="collapse6"
                    className="panel-collapse collapse"
                    accordionId="heading6"
                  >
                    <div className="panel-body border-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
            </div>
            {/* <!-- panel-group --> */}
          </Card>
          <Card className="mb-lg-0">
            <CardHeader>
              <CardTitle tag="h3">Ask Question</CardTitle>
            </CardHeader>
            <CardBody>
              <h5>
                If Your Query Not Clarifified Post Your Question, My Customer
                Support will help You
              </h5>
              <div className="pt-4">
                <div className="mb-3">
                  <Input
                    type="text"
                    className="form-control"
                    id="name1"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <Input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    name="example-textarea-input"
                    rows={6}
                    placeholder="Post Your Quesry"
                  ></textarea>
                </div>
                <Link to="#" className="btn btn-primary">
                  Send Question
                </Link>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
FAQS.propTypes = {};

FAQS.defaultProps = {};

export default FAQS;
