import React, { LegacyRef, useRef } from "react";
import { Card, CardHeader, CardBody, Col, Row, CardTitle } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Panel = () => {

    //clipboard functions
        const elementRef: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef2: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef3: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef4: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
  
    //clipboard function for ShowCode
    
    let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
      let data = ele.current?.innerText
      navigator.clipboard.writeText(data || '')
      alert("Text copied successfully")
      }

  return (

  <div>
    <PageHeaders
      title="Panels"
      home="Home"
      name="Elements"
      fonticonsname="Panels"
    />
    
    <Row>
      <Col md="12" lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Simple Panels</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="expanel expanel-default mt-4">
              <div className="expanel-body">Basic panel example</div>
            </div>
          </CardBody>
          {/* <!---Prism Pre code--> */}
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
          <figure className="highlight mb-0" id="element1">
            <pre ref={elementRef}>
              <code className="language-markup mb-0">
                {`
    <div className="expanel expanel-default mt-4">
        <div className="expanel-body">Basic panel example</div>
    </div>
                `}
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
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col md="12" lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Panel with heading</CardTitle>
          </CardHeader>
          <CardBody>
            <Row className="mt-4">
              <Col lg="6">
                <div className="expanel expanel-default">
                  <div className="expanel-heading">
                    Panel heading without title
                  </div>
                  <div className="expanel-body">Panel content</div>
                </div>
              </Col>
              <Col lg="6">
                <div className="expanel expanel-default">
                  <div className="expanel-heading">
                    <h3 className="expanel-title">Panel title</h3>
                  </div>
                  <div className="expanel-body">Panel content</div>
                </div>
              </Col>
            </Row>
          </CardBody>
          {/* <!---Prism Pre code--> */}
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
          <figure className="highlight mb-0" id="element2">
            <pre ref={elementRef2}>
              <code className="language-markup mb-0">{`
    <Row className="mt-4">
      <Col lg="6">
        <div className="expanel expanel-default">
          <div className="expanel-heading">
            Panel heading without title
          </div>
          <div className="expanel-body">Panel content</div>
        </div>
      </Col>
      <Col lg="6">
        <div className="expanel expanel-default">
          <div className="expanel-heading">
            <h3 className="expanel-title">Panel title</h3>
          </div>
          <div className="expanel-body">Panel content</div>
        </div>
      </Col>
    </Row>
                  `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element2">
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
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col md="12" lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Panel with footer</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="expanel expanel-default mt-4">
              <div className="expanel-body">Panel content</div>
              <div className="expanel-footer">Panel footer</div>
            </div>
          </CardBody>
          {/* <!---Prism Pre code--> */}
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
          <figure className="highlight mb-0" id="element3">
            <pre ref={elementRef3}>
              <code className="language-markup mb-0">{`
    <div className="expanel expanel-default mt-4">
      <div className="expanel-body">Panel content</div>
      <div className="expanel-footer">Panel footer</div>
    </div>
              `}</code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element3">
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
          {/* <!---Prism Pre code--> */}
        </Card>
      </Col>
    </Row>
    {/* <!--End  Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col md="12" lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Panel with color header</CardTitle>
          </CardHeader>
          <CardBody>
            <Row className="mt-4">
              <Col lg="6">
                <div className="expanel expanel-primary">
                  <div className="expanel-heading">
                    <h3 className="expanel-title">Panel title</h3>
                  </div>
                  <div className="expanel-body">Panel content</div>
                </div>
              </Col>
              <Col lg="6">
                <div className="expanel expanel-secondary">
                  <div className="expanel-heading">
                    <h3 className="expanel-title">Panel title</h3>
                  </div>
                  <div className="expanel-body">Panel content</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <div className="expanel expanel-success">
                  <div className="expanel-heading">
                    <h3 className="expanel-title">Panel title</h3>
                  </div>
                  <div className="expanel-body">Panel content</div>
                </div>
              </Col>
              <Col lg="6">
                <div className="expanel expanel-danger">
                  <div className="expanel-heading">
                    <h3 className="expanel-title">Panel title</h3>
                  </div>
                  <div className="expanel-body">Panel content</div>
                </div>
              </Col>
            </Row>
          </CardBody>
          {/* <!---Prism Pre code--> */}
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
          <figure className="highlight mb-0" id="element4">
            <pre ref={elementRef4}>
              <code className="language-markup mb-0">{`
    <Row className="mt-4">
      <Col lg="6">
        <div className="expanel expanel-primary">
          <div className="expanel-heading">
            <h3 className="expanel-title">Panel title</h3>
          </div>
          <div className="expanel-body">Panel content</div>
        </div>
      </Col>
      <Col lg="6">
        <div className="expanel expanel-secondary">
          <div className="expanel-heading">
            <h3 className="expanel-title">Panel title</h3>
          </div>
          <div className="expanel-body">Panel content</div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col lg="6">
        <div className="expanel expanel-success">
          <div className="expanel-heading">
            <h3 className="expanel-title">Panel title</h3>
          </div>
          <div className="expanel-body">Panel content</div>
        </div>
      </Col>
      <Col lg="6">
        <div className="expanel expanel-danger">
          <div className="expanel-heading">
            <h3 className="expanel-title">Panel title</h3>
          </div>
          <div className="expanel-body">Panel content</div>
        </div>
      </Col>
    </Row>
              `}</code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element4">
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
  </div>
)
  };

Panel.propTypes = {};

Panel.defaultProps = {};

export default Panel;
