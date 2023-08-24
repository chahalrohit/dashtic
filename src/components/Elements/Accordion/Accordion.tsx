import React, { LegacyRef, useRef } from "react";
import { Card, CardBody, CardHeader, Col, Row,UncontrolledAccordion ,
  AccordionBody,
  AccordionHeader,
  AccordionItem } from "reactstrap";

import { PageHeaders } from "../../../Shared/Prism/Prism";

const Accordions = () =>{ 

        //clipboard functions
        const elementRef: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef2: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef3: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef4: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef5: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)

    //clipboard function for ShowCode
    
    let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
      
      let data = ele.current?.innerText
      navigator.clipboard.writeText(data || '')
      alert("Text copied successfully")
      }

  return(
  <div>
    <PageHeaders
      title="Accordion"
      home="Home"
      name="Elements"
      fonticonsname="Accordion"
    />
    <Row>
      <Col md={12}>
        <Card>
          <CardHeader>
            <h3 className="card-title">Default Accordion</h3>
          </CardHeader>
          <CardBody>
             <UncontrolledAccordion className="panel-group Accordion1" role="tablist" aria-multiselectable="true" defaultOpen="w"  >
              <AccordionItem className="panel panel-default">
                <AccordionHeader targetId="headingOne" className="panel-heading" tag="h4">
                      Collapsible Group Item #1
                </AccordionHeader>
                <AccordionBody 
                  id="collapseOne"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  accordionId="headingOne"
                >
                  <div className="panel-body border-0 p-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className="panel panel-default mt-2">
                <AccordionHeader className="panel-heading" role="tab" targetId="headingTwo" tag="h4">
                      Collapsible Group Item #2
                </AccordionHeader>
                <AccordionBody
                  id="collapseTwo"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  accordionId="headingTwo"
                >
                  <div className="panel-body border-0 p-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className="panel panel-default mt-2">
                <AccordionHeader className="panel-heading" role="tab" targetId="headingThree">
                      Collapsible Group Item #3
                </AccordionHeader>
                <AccordionBody
                  id="collapseThree"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  accordionId="headingThree"
                >
                  <div className="panel-body border-0 p-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </AccordionBody>
              </AccordionItem>
            </UncontrolledAccordion> 
            {/* <!-- panel-group --> */}
          </CardBody>
          <div className="html-code">
            <svg
              className="svg-icon me-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>{" "}
            Show Code{" "}
          </div>
          {/* <!---Prism Pre code--> */}
          <figure className="highlight mb-0" id="element1">
            <pre ref={elementRef}>
              <code className="language-markup mb-0">
               {`<UncontrolledAccordion className="panel-group Accordion1" role="tablist" aria-multiselectable="true"defaultOpen="">
              <AccordionItem className="panel panel-default active">
                <AccordionHeader targetId="headingOne" className="panel-heading" tag="h4">
                      Collapsible Group Item #1
                </AccordionHeader>
                <AccordionBody 
                  id="collapseOne"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  accordionId="headingOne"
                >
                  <div className="panel-body border-0 p-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className="panel panel-default mt-2">
                <AccordionHeader className="panel-heading" role="tab" targetId="headingTwo" tag="h4">
                      Collapsible Group Item #2
                </AccordionHeader>
                <AccordionBody
                  id="collapseTwo"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  accordionId="headingTwo"
                >
                  <div className="panel-body border-0 p-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className="panel panel-default mt-2">
                <AccordionHeader className="panel-heading" role="tab" targetId="headingThree">
                      Collapsible Group Item #3
                </AccordionHeader>
                <AccordionBody
                  id="collapseThree"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  accordionId="headingThree"
                >
                  <div className="panel-body border-0 p-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </AccordionBody>
              </AccordionItem>
            </UncontrolledAccordion> `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element1">
              <svg onClick={()=>{
                CopytoClipBoard(elementRef)
            }}
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14 7H8v14h11v-9h-5z" opacity=".3" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
              </svg>
            </div>
          </figure>
          {/* <!---Prism Pre code--> */}
        </Card>
        <Card>
          <CardHeader>
            <h3 className="card-title">Default Accordion 2</h3>
          </CardHeader>
          <CardBody>
            <UncontrolledAccordion className="panel-group Accordion1" role="tablist" aria-multiselectable="true" defaultOpen="w">
              <AccordionItem className="panel panel-default active">
                <AccordionHeader className="panel-heading " role="tab" targetId="headingOne1" tag="h4">
                      Collapsible Group Item #1
                      <span className="d-flex float-end ms-auto">
                        <i className="fe fe-chevron-right"></i>
                      </span>
                </AccordionHeader>
                <AccordionBody
                  id="collapseOne1"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  accordionId="headingOne1"
                >
                  <div className="panel-body border-0 p-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className="panel panel-default mt-2">
                <AccordionHeader className="panel-heading" role="tab" targetId="headingTwo2" tag="h4">
                  
                      Collapsible Group Item #2
                      <span className="d-flex float-end ms-auto">
                        <i className="fe fe-chevron-right"></i>
                      </span>
                   
                </AccordionHeader>
                <AccordionBody
                  id="collapseTwo2"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  accordionId="headingTwo2"
                >
                  <div className="panel-body border-0 p-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className="panel panel-default mt-2">
                <AccordionHeader className="panel-heading" role="tab" targetId="headingThree3" tag="h4">
                      Collapsible Group Item #3
                      <span className="d-flex float-end ms-auto">
                        <i className="fe fe-chevron-right"></i>
                      </span>
                </AccordionHeader>
                <AccordionBody
                  id="collapseThree3"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  accordionId="headingThree3"
                >
                  <div className="panel-body border-0 p-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </AccordionBody>
              </AccordionItem>
            </UncontrolledAccordion> 
            {/* <!-- panel-group --> */}
          </CardBody>
          <div className="html-code">
            <svg
              className="svg-icon me-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>{" "}
            Show Code{" "}
          </div>
          {/* <!---Prism Pre code--> */}
          <figure className="highlight mb-0" id="element12">
            <pre ref={elementRef2}>
              <code className="language-markup mb-0">
             {` <UncontrolledAccordion className="panel-group Accordion1" role="tablist" aria-multiselectable="true" >
              <AccordionItem className="panel panel-default active">
                <AccordionHeader className="panel-heading " role="tab" targetId="headingOne1" tag="h4">
                      Collapsible Group Item #1
                      <span className="d-flex float-end ms-auto">
                        <i className="fe fe-chevron-right"></i>
                      </span>
                </AccordionHeader>
                <AccordionBody
                  id="collapseOne1"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  accordionId="headingOne1"
                >
                  <div className="panel-body border-0 p-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className="panel panel-default mt-2">
                <AccordionHeader className="panel-heading" role="tab" targetId="headingTwo2" tag="h4">
                  
                      Collapsible Group Item #2
                      <span className="d-flex float-end ms-auto">
                        <i className="fe fe-chevron-right"></i>
                      </span>
                   
                </AccordionHeader>
                <AccordionBody
                  id="collapseTwo2"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  accordionId="headingTwo2"
                >
                  <div className="panel-body border-0 p-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className="panel panel-default mt-2">
                <AccordionHeader className="panel-heading" role="tab" targetId="headingThree3" tag="h4">
                      Collapsible Group Item #3
                      <span className="d-flex float-end ms-auto">
                        <i className="fe fe-chevron-right"></i>
                      </span>
                </AccordionHeader>
                <AccordionBody
                  id="collapseThree3"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  accordionId="headingThree3"
                >
                  <div className="panel-body border-0 p-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </AccordionBody>
              </AccordionItem>
            </UncontrolledAccordion>`}
              </code>
            </pre>

            <div className="clipboard-icon" data-clipboard-target="#element12">
              <svg onClick={()=>{
                CopytoClipBoard(elementRef2)
            }}
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14 7H8v14h11v-9h-5z" opacity=".3" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
              </svg>
            </div>
          </figure>
          {/* <!---Prism Pre code--> */}
        </Card>
      </Col>
    </Row>
    {/* <!--End Row--> */}

    {/* <!--Row--> */}
    <Row>
      <Col md={12}>
        <Card>
          <CardHeader>
            <h3 className="card-title">Closed Accordion</h3>
          </CardHeader>
          <CardBody>
            {/* <!-- Accordion begin --> */}
              <UncontrolledAccordion
                className="demo-accordion accordionjs m-0"
                data-active-index="false"
                defaultOpen={[
                  'Closed1',
                  'Closed2',
                ]}
                stayOpen
              >
                {/* <!-- Section 1 --> */}
                <AccordionItem>
                  <AccordionHeader tag="h3" targetId="Closed1">
                    Section 1
                  </AccordionHeader>
                  <AccordionBody accordionId="Closed1" >
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </AccordionBody>
                {/* <!-- Section 2 --> */}
                
                  <AccordionHeader tag="h3" targetId="Closed2">
                    Section 2
                  </AccordionHeader>
                  <AccordionBody accordionId="Closed2">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </AccordionBody>
                
                {/* <!-- Section 3 --> */}
                
                  <AccordionHeader tag="h3" targetId="Closed3" className="border-bottom-0">
                    Section 3
                  </AccordionHeader>
                  <AccordionBody accordionId="Closed3">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
          </CardBody>
          <div className="html-code">
            <svg
              className="svg-icon me-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>{" "}
            Show Code{" "}
          </div>
          {/* <!---Prism Pre code--> */}
          <figure className="highlight mb-0" id="element12">
            <pre ref={elementRef3}>
              <code className="language-markup mb-0">
             {` <UncontrolledAccordion
                className="demo-accordion accordionjs m-0"
                data-active-index="false"
                defaultOpen={[
                  'Closed1',
                  'Closed2',
                ]}
              >
                {/* <!-- Section 1 --> */}
                <AccordionItem>
                  <AccordionHeader tag="h3" targetId="Closed1">
                    Section 1
                  </AccordionHeader>
                  <AccordionBody accordionId="Closed1" >
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </AccordionBody>
                {/* <!-- Section 2 --> */}
                
                  <AccordionHeader tag="h3" targetId="Closed2">
                    Section 2
                  </AccordionHeader>
                  <AccordionBody accordionId="Closed2">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </AccordionBody>
                
                {/* <!-- Section 3 --> */}
                
                  <AccordionHeader tag="h3" targetId="Closed3">
                    Section 3
                  </AccordionHeader>
                  <AccordionBody accordionId="Closed3">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>`}
              </code>
            </pre>

            <div className="clipboard-icon" data-clipboard-target="#element12">
              <svg onClick={()=>{
                CopytoClipBoard(elementRef3)
            }}
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14 7H8v14h11v-9h-5z" opacity=".3" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
              </svg>
            </div>
          </figure>
        </Card>
      </Col>
    </Row>
    {/* <!--End Row--> */}

    {/* <!--Row--> */}
    <Row>
      <Col md={12}>
        <Card>
          <CardHeader>
            <h3 className="card-title">Accordion Style 3</h3>
          </CardHeader>
          <CardBody>
            <UncontrolledAccordion className="demo-accordion accordionjs m-0 Accordion1" defaultOpen="a" >
              <AccordionItem>
                <AccordionHeader targetId="1" tag="h3" className="border-bottom">
                  Section 1
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                </AccordionBody>
              
                <AccordionHeader targetId="2" tag="h3" className="border-bottom">
                  Section 2
                </AccordionHeader>
                <AccordionBody accordionId="2">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                </AccordionBody>
              
                <AccordionHeader targetId="3" tag="h3" className="border-bottom">
                  Section 3
                </AccordionHeader>
                <AccordionBody accordionId="3">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                </AccordionBody>
                <AccordionHeader targetId="4" tag="h3" className="border-bottom-0">
                  Section 4
                </AccordionHeader>
                <AccordionBody accordionId="4">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                </AccordionBody>
              </AccordionItem>
            </UncontrolledAccordion>
          </CardBody>
          <div className="html-code">
            <svg
              className="svg-icon me-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>{" "}
            Show Code{" "}
          </div>
          {/* <!---Prism Pre code--> */}
          <figure className="highlight mb-0" id="element3">
            <pre ref={elementRef4}>
              <code className="language-markup mb-0">
              {`<UncontrolledAccordion className="demo-accordion accordionjs m-0 Accordion1"defaultOpen="1">
              <AccordionItem>
                <AccordionHeader targetId="1" tag="h3">
                  Section 1
                </AccordionHeader>
                <AccordionBody accordionId="1">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                </AccordionBody>
              
                <AccordionHeader targetId="2" tag="h3">
                  Section 2
                </AccordionHeader>
                <AccordionBody accordionId="2">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                </AccordionBody>
              
                <AccordionHeader targetId="3" tag="h3">
                  Section 3
                </AccordionHeader>
                <AccordionBody accordionId="3">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                </AccordionBody>
                <AccordionHeader targetId="4" tag="h3">
                  Section 4
                </AccordionHeader>
                <AccordionBody accordionId="4">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Fusce aliquet neque et accumsan fermentum. Aliquam lobortis neque in nulla tempus, molestie fermentum purus euismod.
                </AccordionBody>
              </AccordionItem>
            </UncontrolledAccordion>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element3">
              <svg onClick={()=>{
                CopytoClipBoard(elementRef4)
            }}
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14 7H8v14h11v-9h-5z" opacity=".3" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
              </svg>
            </div>
          </figure>
          {/* <!---Prism Pre code--> */}
        </Card>
      </Col>
    </Row>
    {/* <!--End Row--> */}

    {/* <!--Row--> */}
    <Row>
      <Col md={12}>
        <Card>
          <CardHeader>
            <h3 className="card-title">Accordion style</h3>
          </CardHeader>
          <CardBody>
           <UncontrolledAccordion className="panel-group1 accordion2" id="accordion1" defaultOpen="e">
              <AccordionItem className="panel panel-default mb-4 br-7 overflow-hidden">
                <AccordionHeader  className="panel-heading1 " targetId="collapseFour" tag="h4">
                  
                      Section 1
                   
                </AccordionHeader>
                <AccordionBody 
                  accordionId="collapseFour"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-expanded="false"
                >
                 
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words{" "}
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled.Nor again is
                      there anyone who loves or pursues or desires to obtain
                      pain of itself, because it is pain, but because
                      occasionally circumstances occur in which toil and pain
                      can procure him some great pleasure. To take a trivial
                      example, which of us ever undertakes laborious physical
                      exercise
                    </p>
                  
                </AccordionBody>
              </AccordionItem>
              </UncontrolledAccordion>
              <UncontrolledAccordion className="panel-group1 accordion2" id="accordion1" defaultOpen="d">
              <AccordionItem className="panel panel-default br-7 overflow-hidden">
                <AccordionHeader className="panel-heading1" targetId="collapseFive" tag="h4">
                  
                      Section 2
                   
                </AccordionHeader>
                <AccordionBody
                  accordionId="collapseFive"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-expanded="false"
                >
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words{" "}
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled.Nor again is
                      there anyone who loves or pursues or desires to obtain
                      pain of itself, because it is pain, but because
                      occasionally circumstances occur in which toil and pain
                      can procure him some great pleasure. To take a trivial
                      example, which of us ever undertakes laborious physical
                      exercise
                    </p>
                </AccordionBody>
              </AccordionItem>
            </UncontrolledAccordion> 
          </CardBody>
          <div className="html-code">
            <svg
              className="svg-icon me-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>{" "}
            Show Code{" "}
          </div>
          {/* <!---Prism Pre code--> */}
          <figure className="highlight mb-0" id="element4">
            <pre ref={elementRef5}>
              <code className="language-markup mb-0">
                {`<UncontrolledAccordion className="panel-group1 accordion2" id="accordion1"defaultOpen="">
              <AccordionItem className="panel panel-default mb-4 br-7 overflow-hidden">
                <AccordionHeader  className="panel-heading1 " targetId="collapseFour" tag="h4">
                  
                      Section 1
                   
                </AccordionHeader>
                <AccordionBody 
                  accordionId="collapseFour"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-expanded="false"
                >
                 
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words{" "}
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled.Nor again is
                      there anyone who loves or pursues or desires to obtain
                      pain of itself, because it is pain, but because
                      occasionally circumstances occur in which toil and pain
                      can procure him some great pleasure. To take a trivial
                      example, which of us ever undertakes laborious physical
                      exercise
                    </p>
                  
                </AccordionBody>
              </AccordionItem>
              <AccordionItem className="panel panel-default br-7 overflow-hidden">
                <AccordionHeader className="panel-heading1" targetId="collapseFive" tag="h4">
                  
                      Section 2
                   
                </AccordionHeader>
                <AccordionBody
                  accordionId="collapseFive"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-expanded="false"
                >
                    <p>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words{" "}
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled.Nor again is
                      there anyone who loves or pursues or desires to obtain
                      pain of itself, because it is pain, but because
                      occasionally circumstances occur in which toil and pain
                      can procure him some great pleasure. To take a trivial
                      example, which of us ever undertakes laborious physical
                      exercise
                    </p>
                </AccordionBody>
              </AccordionItem>
            </UncontrolledAccordion>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element4">
              <svg onClick={()=>{
                CopytoClipBoard(elementRef5)
            }}
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14 7H8v14h11v-9h-5z" opacity=".3" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
              </svg>
            </div>
          </figure>
          {/* <!---Prism Pre code--> */}
        </Card>
      </Col>
    </Row>
  </div>
);
 }
Accordions.propTypes = {};

Accordions.defaultProps = {};

export default Accordions;
