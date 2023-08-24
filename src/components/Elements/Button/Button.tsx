import React, { LegacyRef, useRef } from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Col,UncontrolledDropdown,DropdownItem,DropdownMenu,DropdownToggle, Row } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Buttons = () => {

  //clipboard functions
const elementRef: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef2: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef3: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef4: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef5: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef6: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef7: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef8: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef9: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef10: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef11: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef12: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef13: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef14: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef15: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef16: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef17: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef18: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef19: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef20: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)

//clipboard function for ShowCode

let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
  let data = ele.current?.innerText
  navigator.clipboard.writeText(data || '')
  alert("Text copied successfully")
  }

  return (

  <div>
    <PageHeaders
      title="Buttons"
      home="Home"
      name="Elements"
      fonticonsname="Buttons"
    />
    <Row>
      <Col md="12"lg="12">
        <Card>
          <CardHeader>
            <CardTitle>Default Button</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" tag="a"  className="btn btn-light">
                Light
              </Button>
              <Button color="" tag="a"  className="btn btn-primary">
                Primary
              </Button>
              <Button color="" tag="a"  className="btn btn-secondary">
                Secondary
              </Button>
              <Button color="" tag="a"  className="btn btn-success">
                Success
              </Button>
              <Button color="" tag="a"  className="btn btn-info">
                Info
              </Button>
              <Button color="" tag="a"  className="btn btn-warning">
                Warning
              </Button>
              <Button color="" tag="a"  className="btn btn-danger">
                Danger
              </Button>
            </div>
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
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" tag="a"  className="btn btn-light">
                      Light
                    </Button>
                    <Button color="" tag="a"  className="btn btn-primary">
                      Primary
                    </Button>
                    <Button color="" tag="a"  className="btn btn-secondary">
                      Secondary
                    </Button>
                    <Button color="" tag="a"  className="btn btn-success">
                      Success
                    </Button>
                    <Button color="" tag="a"  className="btn btn-info">
                      Info
                    </Button>
                    <Button color="" tag="a"  className="btn btn-warning">
                      Warning
                    </Button>
                    <Button color="" tag="a"  className="btn btn-danger">
                      Danger
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element1">
              <svg  onClick={()=>{
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
      <Col md="12"lg="12">
        <Card>
          <CardHeader>
            <CardTitle>Disabled buttons</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" tag="a"  className="btn btn-light disabled">
                Light
              </Button>
              <Button color="" tag="a"  className="btn btn-primary disabled">
                Primary
              </Button>
              <Button color="" tag="a"  className="btn btn-secondary disabled">
                Secondary
              </Button>
              <Button color="" tag="a"  className="btn btn-success disabled">
                Success
              </Button>
              <Button color="" tag="a"  className="btn btn-info disabled">
                Info
              </Button>
              <Button color="" tag="a"  className="btn btn-warning disabled">
                Warning
              </Button>
              <Button color="" tag="a"  className="btn btn-danger disabled">
                Danger
              </Button>
            </div>
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
          <figure className="highlight mb-0" id="element2">
            <pre ref={elementRef2}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" tag="a"  className="btn btn-light disabled">
                      Light
                    </Button>
                    <Button color="" tag="a"  className="btn btn-primary disabled">
                      Primary
                    </Button>
                    <Button color="" tag="a"  className="btn btn-secondary disabled">
                      Secondary
                    </Button>
                    <Button color="" tag="a"  className="btn btn-success disabled">
                      Success
                    </Button>
                    <Button color="" tag="a"  className="btn btn-info disabled">
                      Info
                    </Button>
                    <Button color="" tag="a"  className="btn btn-warning disabled">
                      Warning
                    </Button>
                    <Button color="" tag="a"  className="btn btn-danger disabled">
                      Danger
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element2">
              <svg  onClick={()=>{
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
      <Col md="12"lg="12">
        <Card>
          <CardHeader>
            <CardTitle>Square buttons</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" tag="a"  className="btn btn-square btn-light">
                Light
              </Button>
              <Button color="" tag="a"  className="btn btn-square btn-primary">
                Primary
              </Button>
              <Button color="" tag="a"  className="btn btn-square btn-secondary">
                Secondary
              </Button>
              <Button color="" tag="a"  className="btn btn-square btn-success">
                Success
              </Button>
              <Button color="" tag="a"  className="btn btn-square btn-info">
                Info
              </Button>
              <Button color="" tag="a"  className="btn btn-square btn-warning">
                Warning
              </Button>
              <Button color="" tag="a"  className="btn btn-square btn-danger">
                Danger
              </Button>
            </div>
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
            <pre ref={elementRef3}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" tag="a"  className="btn btn-square btn-light">
                      Light
                    </Button>
                    <Button color="" tag="a"  className="btn btn-square btn-primary">
                      Primary
                    </Button>
                    <Button color="" tag="a"  className="btn btn-square btn-secondary">
                      Secondary
                    </Button>
                    <Button color="" tag="a"  className="btn btn-square btn-success">
                      Success
                    </Button>
                    <Button color="" tag="a"  className="btn btn-square btn-info">
                      Info
                    </Button>
                    <Button color="" tag="a"  className="btn btn-square btn-warning">
                      Warning
                    </Button>
                    <Button color="" tag="a"  className="btn btn-square btn-danger">
                      Danger
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element3">
              <svg  onClick={()=>{
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
      <Col md="12"lg="12">
        <Card>
          <CardHeader>
            <CardTitle>Rounded buttons</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" tag="a"  className="btn btn-pill btn-light">
                Light
              </Button>
              <Button color="" tag="a"  className="btn btn-pill btn-primary">
                Primary
              </Button>
              <Button color="" tag="a"  className="btn btn-pill btn-secondary">
                Secondary
              </Button>
              <Button color="" tag="a"  className="btn btn-pill btn-success">
                Success
              </Button>
              <Button color="" tag="a"  className="btn btn-pill btn-info">
                Info
              </Button>
              <Button color="" tag="a"  className="btn btn-pill btn-warning">
                Warning
              </Button>
              <Button color="" tag="a"  className="btn btn-pill btn-danger">
                Danger
              </Button>
            </div>
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
            <pre ref={elementRef4}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" tag="a"  className="btn btn-pill btn-light">
                      Light
                    </Button>
                    <Button color="" tag="a"  className="btn btn-pill btn-primary">
                      Primary
                    </Button>
                    <Button color="" tag="a"  className="btn btn-pill btn-secondary">
                      Secondary
                    </Button>
                    <Button color="" tag="a"  className="btn btn-pill btn-success">
                      Success
                    </Button>
                    <Button color="" tag="a"  className="btn btn-pill btn-info">
                      Info
                    </Button>
                    <Button color="" tag="a"  className="btn btn-pill btn-warning">
                      Warning
                    </Button>
                    <Button color="" tag="a"  className="btn btn-pill btn-danger">
                      Danger
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element4">
              <svg  onClick={()=>{
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
      <Col md="12"lg="12">
        <Card>
          <CardHeader>
            <CardTitle>Btn Outline buttons</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" tag="a"  className="btn btn-outline-light">
                Light
              </Button>
              <Button color="" tag="a"  className="btn btn-outline-primary">
                Primary
              </Button>
              <Button color="" tag="a"  className="btn btn-outline-secondary">
                Secondary
              </Button>
              <Button color="" tag="a"  className="btn btn-outline-success">
                Success
              </Button>
              <Button color="" tag="a"  className="btn btn-outline-info">
                Info
              </Button>
              <Button color="" tag="a"  className="btn btn-outline-warning">
                Warning
              </Button>
              <Button color="" tag="a"  className="btn btn-outline-danger">
                Danger
              </Button>
            </div>
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
          <figure className="highlight mb-0" id="element5">
            <pre ref={elementRef5}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" tag="a"  className="btn btn-outline-light">
                      Light
                    </Button>
                    <Button color="" tag="a"  className="btn btn-outline-primary">
                      Primary
                    </Button>
                    <Button color="" tag="a"  className="btn btn-outline-secondary">
                      Secondary
                    </Button>
                    <Button color="" tag="a"  className="btn btn-outline-success">
                      Success
                    </Button>
                    <Button color="" tag="a"  className="btn btn-outline-info">
                      Info
                    </Button>
                    <Button color="" tag="a"  className="btn btn-outline-warning">
                      Warning
                    </Button>
                    <Button color="" tag="a"  className="btn btn-outline-danger">
                      Danger
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element5">
              <svg  onClick={()=>{
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
      <Col md="12"lg="12">
        <Card>
          <CardHeader>
            <CardTitle>Btn Outline Disabled buttons</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" tag="a"  className="btn btn-outline-light disabled">
                Light
              </Button>
              <Button color="" tag="a"  className="btn btn-outline-primary disabled">
                Primary
              </Button>
              <Button color="" tag="a"  className="btn btn-outline-secondary disabled">
                Secondary
              </Button>
              <Button color="" tag="a"  className="btn btn-outline-success disabled">
                Success
              </Button>
              <Button color="" tag="a"  className="btn btn-outline-info disabled">
                Info
              </Button>
              <Button color="" tag="a"  className="btn btn-outline-warning disabled">
                Warning
              </Button>
              <Button color="" tag="a"  className="btn btn-outline-danger disabled">
                Danger
              </Button>
            </div>
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
          <figure className="highlight mb-0" id="element6">
            <pre ref={elementRef6}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" tag="a"  className="btn btn-outline-light disabled">
                      Light
                    </Button>
                    <Button color="" tag="a"  className="btn btn-outline-primary disabled">
                      Primary
                    </Button>
                    <Button color="" tag="a"  className="btn btn-outline-secondary disabled">
                      Secondary
                    </Button>
                    <Button color="" tag="a"  className="btn btn-outline-success disabled">
                      Success
                    </Button>
                    <Button color="" tag="a"  className="btn btn-outline-info disabled">
                      Info
                    </Button>
                    <Button color="" tag="a"  className="btn btn-outline-warning disabled">
                      Warning
                    </Button>
                    <Button color="" tag="a"  className="btn btn-outline-danger disabled">
                      Danger
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element6">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef6)
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
      <Col md="12"lg="12">
        <Card>
          <CardHeader>
            <CardTitle>Button with icon</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" type="button" className="btn btn-dark">
                <i className="fe fe-upload me-2"></i>Upload
              </Button>
              <Button color="" type="button" className="btn btn-warning">
                <i className="fe fe-heart me-2"></i>I like
              </Button>
              <Button color="" type="button" className="btn btn-success">
                <i className="fe fe-check me-2"></i>I agree
              </Button>
              <Button color="" type="button" className="btn btn-primary">
                <i className="fe fe-plus me-2"></i>More
              </Button>
              <Button color="" type="button" className="btn btn-danger">
                <i className="fe fe-link me-2"></i>Link
              </Button>
              <Button color="" type="button" className="btn btn-info">
                <i className="fe fe-message-circle me-2"></i>Comment
              </Button>
            </div>
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
          <figure className="highlight mb-0" id="element7">
            <pre ref={elementRef7}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" type="button" className="btn btn-dark">
                      <i className="fe fe-upload me-2"></i>Upload
                    </Button>
                    <Button color="" type="button" className="btn btn-warning">
                      <i className="fe fe-heart me-2"></i>I like
                    </Button>
                    <Button color="" type="button" className="btn btn-success">
                      <i className="fe fe-check me-2"></i>I agree
                    </Button>
                    <Button color="" type="button" className="btn btn-primary">
                      <i className="fe fe-plus me-2"></i>More
                    </Button>
                    <Button color="" type="button" className="btn btn-danger">
                      <i className="fe fe-link me-2"></i>Link
                    </Button>
                    <Button color="" type="button" className="btn btn-info">
                      <i className="fe fe-message-circle me-2"></i>Comment
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element7">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef7)
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
      {/* <!--Row--> */}

      <Col md="12"lg="12">
        <Card>
          <CardHeader>
            <CardTitle>Button with Svg icon</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button
                color=""
                type="button"
                className="btn btn-dark btn-svgs btn-svg-white"
              >
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z"
                    opacity=".3"
                  ></path>
                  <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path>
                </svg>
                <span className="btn-svg-text">File</span>
              </Button>
              <Button
                color=""
                type="button"
                className="btn btn-warning btn-svgs btn-svg-white"
              >
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    d="M5 19h14V8H5v11zm5.55-6v-3h2.91v3H16l-4 4-4-4h2.55z"
                    opacity=".3"
                  ></path>
                  <path d="M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM19 19H5V8h14v11z"></path>
                </svg>{" "}
                <span className="btn-svg-text">Download</span>
              </Button>
              <Button
                color=""
                type="button"
                className="btn btn-success btn-svgs btn-svg-white"
              >
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path d="M5 8h14V6H5z" opacity=".3"></path>
                  <path d="M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-4 3h2v2h-2zm-4 0h2v2h-2z"></path>
                </svg>{" "}
                <span className="btn-svg-text">Calendar</span>
              </Button>
              <Button
                color=""
                type="button"
                className="btn btn-primary btn-svgs btn-svg-white"
              >
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z"
                    opacity=".3"
                  ></path>
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                </svg>{" "}
                <span className="btn-svg-text">Like</span>
              </Button>
              <Button
                color=""
                type="button"
                className="btn btn-danger  btn-svgs btn-svg-white"
              >
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <circle cx="18" cy="5" opacity=".3" r="1"></circle>
                  <circle cx="6" cy="12" opacity=".3" r="1"></circle>
                  <circle cx="18" cy="19.02" opacity=".3" r="1"></circle>
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                </svg>
                <span className="btn-svg-text"> Share</span>
              </Button>
            </div>
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
          <figure className="highlight mb-0" id="element71">
            <pre ref={elementRef8}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button
                      color=""
                      type="button"
                      className="btn btn-dark btn-svgs btn-svg-white"
                    >
                      <svg
                        className="svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z"
                          opacity=".3"
                        ></path>
                        <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path>
                      </svg>
                      <div className="btn-svg-text">File</div>
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-warning btn-svgs btn-svg-white"
                    >
                      <svg
                        className="svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          d="M5 19h14V8H5v11zm5.55-6v-3h2.91v3H16l-4 4-4-4h2.55z"
                          opacity=".3"
                        ></path>
                        <path d="M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM19 19H5V8h14v11z"></path>
                      </svg>{" "}
                      <span className="btn-svg-text">Download</span>
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-success btn-svgs btn-svg-white"
                    >
                      <svg
                        className="svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M5 8h14V6H5z" opacity=".3"></path>
                        <path d="M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-4 3h2v2h-2zm-4 0h2v2h-2z"></path>
                      </svg>{" "}
                      <span className="btn-svg-text">Calendar</span>
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-primary btn-svgs btn-svg-white"
                    >
                      <svg
                        className="svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z"
                          opacity=".3"
                        ></path>
                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                      </svg>{" "}
                      <span className="btn-svg-text">Like</span>
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-danger  btn-svgs btn-svg-white"
                    >
                      <svg
                        className="svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <circle cx="18" cy="5" opacity=".3" r="1"></circle>
                        <circle cx="6" cy="12" opacity=".3" r="1"></circle>
                        <circle cx="18" cy="19.02" opacity=".3" r="1"></circle>
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                      </svg>
                      <span className="btn-svg-text"> Share</span>
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element71">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef8)
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
      <Col md="12"lg="12">
        <Card>
          <CardHeader>
            <CardTitle>Button with icon-loader</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" type="button" className="btn btn-dark">
                Upload <i className="fa fa-upload fa-spin ms-2"></i>
              </Button>
              <Button color="" type="button" className="btn btn-warning">
                I like <i className="fa fa-heart fa-spin ms-2"></i>
              </Button>
              <Button color="" type="button" className="btn btn-success">
                I agree <i className="fa fa-check fa-spin ms-2"></i>
              </Button>
              <Button color="" type="button" className="btn btn-primary">
                More <i className="fa fa-plus fa-spin ms-2"></i>
              </Button>
              <Button color="" type="button" className="btn btn-danger">
                Link <i className="fa fa-link fa-spin ms-2"></i>
              </Button>
              <Button color="" type="button" className="btn btn-info">
                Comment <i className="fa fa-comment-o fa-spin ms-2"></i>
              </Button>
            </div>
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
          <figure className="highlight mb-0" id="element8">
            <pre ref={elementRef9}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" type="button" className="btn btn-dark">
                      Upload <i className="fa fa-upload fa-spin ms-2"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-warning">
                      I like <i className="fa fa-heart fa-spin ms-2"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-success">
                      I agree <i className="fa fa-check fa-spin ms-2"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-primary">
                      More <i className="fa fa-plus fa-spin ms-2"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-danger">
                      Link <i className="fa fa-link fa-spin ms-2"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-info">
                      Comment <i className="fa fa-comment-o fa-spin ms-2"></i>
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element8">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef9)
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
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle>Button size</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button
                color=""
                type="button"
                className="btn btn-warning btn-sm mb-1"
              >
                Small button
              </Button>
              <Button color="" type="button" className="btn btn-info  mb-1">
                Medium button
              </Button>
              <Button
                color=""
                type="button"
                className="btn btn-success btn-lg mb-1"
              >
                Large button
              </Button>
              <Button
                color=""
                type="button"
                className="btn btn-primary btn-block"
              >
                Block level button
              </Button>
            </div>
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
          <figure className="highlight mb-0" id="element9">
            <pre ref={elementRef10}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button
                      color=""
                      type="button"
                      className="btn btn-warning btn-sm mb-1"
                    >
                      Small button
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-info  mb-1"
                    >
                      Medium button
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-success btn-lg mb-1"
                    >
                      Large button
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-primary btn-block"
                    >
                      Block level button
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element9">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef10)
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
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle>Social buttons</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" type="button" className="btn btn-facebook">
                <i className="fa fa-facebook me-2"></i>Facebook
              </Button>
              <Button color="" type="button" className="btn btn-twitter">
                <i className="fa fa-twitter me-2"></i>Twitter
              </Button>
              <Button color="" type="button" className="btn btn-google">
                <i className="fa fa-google me-2"></i>Google
              </Button>
              <Button color="" type="button" className="btn btn-youtube">
                <i className="fa fa-youtube me-2"></i>Youtube
              </Button>
              <Button color="" type="button" className="btn btn-vimeo">
                <i className="fa fa-vimeo me-2"></i>Vimeo
              </Button>
              <Button color="" type="button" className="btn btn-dribbble">
                <i className="fa fa-dribbble me-2"></i>Dribble
              </Button>
              <Button color="" type="button" className="btn btn-github">
                <i className="fa fa-github me-2"></i>Github
              </Button>
              <Button color="" type="button" className="btn btn-instagram">
                <i className="fa fa-instagram me-2"></i>Instagram
              </Button>
              <Button color="" type="button" className="btn btn-pinterest">
                <i className="fa fa-pinterest me-2"></i>Pinterest
              </Button>
              <Button color="" type="button" className="btn btn-vk">
                <i className="fa fa-vk me-2"></i>VKontakte
              </Button>
              <Button color="" type="button" className="btn btn-rss">
                <i className="fa fa-rss me-2"></i>RSS
              </Button>
              <Button color="" type="button" className="btn btn-flickr">
                <i className="fa fa-flickr me-2"></i>Flickr
              </Button>
            </div>
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
          <figure className="highlight mb-0" id="element10">
            <pre ref={elementRef11}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" type="button" className="btn btn-facebook">
                      <i className="fa fa-facebook me-2"></i>Facebook
                    </Button>
                    <Button color="" type="button" className="btn btn-twitter">
                      <i className="fa fa-twitter me-2"></i>Twitter
                    </Button>
                    <Button color="" type="button" className="btn btn-google">
                      <i className="fa fa-google me-2"></i>Google
                    </Button>
                    <Button color="" type="button" className="btn btn-youtube">
                      <i className="fa fa-youtube me-2"></i>Youtube
                    </Button>
                    <Button color="" type="button" className="btn btn-vimeo">
                      <i className="fa fa-vimeo me-2"></i>Vimeo
                    </Button>
                    <Button color="" type="button" className="btn btn-dribbble">
                      <i className="fa fa-dribbble me-2"></i>Dribble
                    </Button>
                    <Button color="" type="button" className="btn btn-github">
                      <i className="fa fa-github me-2"></i>Github
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-instagram"
                    >
                      <i className="fa fa-instagram me-2"></i>Instagram
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-pinterest"
                    >
                      <i className="fa fa-pinterest me-2"></i>Pinterest
                    </Button>
                    <Button color="" type="button" className="btn btn-vk">
                      <i className="fa fa-vk me-2"></i>VKontakte
                    </Button>
                    <Button color="" type="button" className="btn btn-rss">
                      <i className="fa fa-rss me-2"></i>RSS
                    </Button>
                    <Button color="" type="button" className="btn btn-flickr">
                      <i className="fa fa-flickr me-2"></i>Flickr
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element10">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef11)
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
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle>Color variations</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" tag="a"  className="btn btn-blue">
                Blue
              </Button>
              <Button color="" tag="a"  className="btn btn-azure">
                Azure
              </Button>
              <Button color="" tag="a"  className="btn btn-indigo">
                Indigo
              </Button>
              <Button color="" tag="a"  className="btn btn-purple">
                Purple
              </Button>
              <Button color="" tag="a"  className="btn btn-pink">
                Pink
              </Button>
              <Button color="" tag="a"  className="btn btn-red">
                Red
              </Button>
              <Button color="" tag="a"  className="btn btn-orange">
                Orange
              </Button>
              <Button color="" tag="a"  className="btn btn-yellow">
                Yellow
              </Button>
              <Button color="" tag="a"  className="btn btn-lime">
                Lime
              </Button>
              <Button color="" tag="a"  className="btn btn-green">
                Green
              </Button>
              <Button color="" tag="a"  className="btn btn-teal">
                Teal
              </Button>
              <Button color="" tag="a"  className="btn btn-cyan">
                Cyan
              </Button>
              <Button color="" tag="a"  className="btn btn-gray">
                Gray
              </Button>
              <Button color="" tag="a"  className="btn btn-gray-dark">
                Dark gray
              </Button>
            </div>
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
          <figure className="highlight mb-0" id="element11">
            <pre ref={elementRef12}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" tag="a"  className="btn btn-blue">
                      Blue
                    </Button>
                    <Button color="" tag="a"  className="btn btn-azure">
                      Azure
                    </Button>
                    <Button color="" tag="a"  className="btn btn-indigo">
                      Indigo
                    </Button>
                    <Button color="" tag="a"  className="btn btn-purple">
                      Purple
                    </Button>
                    <Button color="" tag="a"  className="btn btn-pink">
                      Pink
                    </Button>
                    <Button color="" tag="a"  className="btn btn-red">
                      Red
                    </Button>
                    <Button color="" tag="a"  className="btn btn-orange">
                      Orange
                    </Button>
                    <Button color="" tag="a"  className="btn btn-yellow">
                      Yellow
                    </Button>
                    <Button color="" tag="a"  className="btn btn-lime">
                      Lime
                    </Button>
                    <Button color="" tag="a"  className="btn btn-green">
                      Green
                    </Button>
                    <Button color="" tag="a"  className="btn btn-teal">
                      Teal
                    </Button>
                    <Button color="" tag="a"  className="btn btn-cyan">
                      Cyan
                    </Button>
                    <Button color="" tag="a"  className="btn btn-gray">
                      Gray
                    </Button>
                    <Button color="" tag="a"  className="btn btn-gray-dark">
                      Dark gray
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element11">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef12)
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
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle>Social buttons</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" type="button" className="btn btn-facebook">
                <i className="fa fa-facebook"></i>
              </Button>
              <Button color="" type="button" className="btn btn-twitter">
                <i className="fa fa-twitter"></i>
              </Button>
              <Button color="" type="button" className="btn btn-google">
                <i className="fa fa-google"></i>
              </Button>
              <Button color="" type="button" className="btn btn-youtube">
                <i className="fa fa-youtube"></i>
              </Button>
              <Button color="" type="button" className="btn btn-vimeo">
                <i className="fa fa-vimeo"></i>
              </Button>
              <Button color="" type="button" className="btn btn-dribbble">
                <i className="fa fa-dribbble"></i>
              </Button>
              <Button color="" type="button" className="btn btn-github">
                <i className="fa fa-github"></i>
              </Button>
              <Button color="" type="button" className="btn btn-instagram">
                <i className="fa fa-instagram"></i>
              </Button>
              <Button color="" type="button" className="btn btn-pinterest">
                <i className="fa fa-pinterest"></i>
              </Button>
            </div>
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
            <pre ref={elementRef13}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" type="button" className="btn btn-facebook">
                      <i className="fa fa-facebook"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-twitter">
                      <i className="fa fa-twitter"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-google">
                      <i className="fa fa-google"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-youtube">
                      <i className="fa fa-youtube"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-vimeo">
                      <i className="fa fa-vimeo"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-dribbble">
                      <i className="fa fa-dribbble"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-github">
                      <i className="fa fa-github"></i>
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-instagram"
                    >
                      <i className="fa fa-instagram"></i>
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-pinterest"
                    >
                      <i className="fa fa-pinterest"></i>
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element12">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef13)
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
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle>Icon buttons</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" type="button" className="btn btn-primary">
                <i className="fe fe-activity"></i>
              </Button>
              <Button
                color=""
                type="button"
                className="btn btn-primary btn-github"
              >
                <i className="fe fe-github"></i>
              </Button>
              <Button color="" type="button" className="btn btn-success">
                <i className="fe fe-bell"></i>
              </Button>
              <Button color="" type="button" className="btn btn-warning">
                <i className="fe fe-star"></i>
              </Button>
              <Button color="" type="button" className="btn btn-danger">
                <i className="fe fe-trash"></i>
              </Button>
              <Button color="" type="button" className="btn btn-purple">
                <i className="fe fe-bar-chart"></i>
              </Button>
              <Button color="" type="button" className="btn btn-secondary">
                <i className="fe fe-git-merge"></i>
              </Button>
            </div>
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
          <figure className="highlight mb-0" id="element13">
            <pre ref={elementRef14}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" type="button" className="btn btn-primary">
                      <i className="fe fe-activity"></i>
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-primary btn-github"
                    >
                      <i className="fe fe-github"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-success">
                      <i className="fe fe-bell"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-warning">
                      <i className="fe fe-star"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-danger">
                      <i className="fe fe-trash"></i>
                    </Button>
                    <Button color="" type="button" className="btn btn-purple">
                      <i className="fe fe-bar-chart"></i>
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-secondary"
                    >
                      <i className="fe fe-git-merge"></i>
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element13">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef14)
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
        <Col md="12"lg="12">
          <Card>
            <CardHeader>
              <CardTitle>Svg Icon Buttons</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="btn-list">
                <Button
                  color=""
                  type="button"
                  className="btn btn-dark btn-icon btn-svg"
                >
                  <svg
                    className="svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="100%"
                    viewBox="0 0 24 24"
                    width="100%"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path
                      d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z"
                      opacity=".3"
                    ></path>
                    <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path>
                  </svg>
                </Button>
                <Button
                  color=""
                  type="button"
                  className="btn btn-warning btn-icon btn-svg"
                >
                  <svg
                    className="svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="100%"
                    viewBox="0 0 24 24"
                    width="100%"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path
                      d="M5 19h14V8H5v11zm5.55-6v-3h2.91v3H16l-4 4-4-4h2.55z"
                      opacity=".3"
                    ></path>
                    <path d="M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM19 19H5V8h14v11z"></path>
                  </svg>
                </Button>
                <Button
                  color=""
                  type="button"
                  className="btn btn-success btn-icon btn-svg"
                >
                  <svg
                    className="svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="100%"
                    viewBox="0 0 24 24"
                    width="100%"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M5 8h14V6H5z" opacity=".3"></path>
                    <path d="M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-4 3h2v2h-2zm-4 0h2v2h-2z"></path>
                  </svg>
                </Button>
                <Button
                  color=""
                  type="button"
                  className="btn btn-primary btn-icon btn-svg"
                >
                  <svg
                    className="svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="100%"
                    viewBox="0 0 24 24"
                    width="100%"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path
                      d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z"
                      opacity=".3"
                    ></path>
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                  </svg>
                </Button>
                <Button
                  color=""
                  type="button"
                  className="btn btn-danger btn-icon btn-svg"
                >
                  <svg
                    className="svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="100%"
                    viewBox="0 0 24 24"
                    width="100%"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <circle cx="18" cy="5" opacity=".3" r="1"></circle>
                    <circle cx="6" cy="12" opacity=".3" r="1"></circle>
                    <circle cx="18" cy="19.02" opacity=".3" r="1"></circle>
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                  </svg>
                </Button>
              </div>
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
            <figure className="highlight mb-0" id="element72">
              <pre ref={elementRef15}>
                <code className="language-markup mb-0">{`
                    <div className="btn-list">
                      <Button
                        color=""
                        type="button"
                        className="btn btn-dark btn-svgs btn-svg-white"
                      >
                        <svg
                          className="svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z"
                            opacity=".3"
                          ></path>
                          <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path>
                        </svg>
                        File
                      </Button>
                      <Button
                        color=""
                        type="button"
                        className="btn btn-warning btn-svgs btn-svg-white"
                      >
                        <svg
                          className="svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M5 19h14V8H5v11zm5.55-6v-3h2.91v3H16l-4 4-4-4h2.55z"
                            opacity=".3"
                          ></path>
                          <path d="M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM19 19H5V8h14v11z"></path>
                        </svg>{" "}
                        Download
                      </Button>
                      <Button
                        color=""
                        type="button"
                        className="btn btn-success btn-svgs btn-svg-white"
                      >
                        <svg
                          className="svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path d="M5 8h14V6H5z" opacity=".3"></path>
                          <path d="M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-4 3h2v2h-2zm-4 0h2v2h-2z"></path>
                        </svg>{" "}
                        Calendar
                      </Button>
                      <Button
                        color=""
                        type="button"
                        className="btn btn-primary btn-svgs btn-svg-white"
                      >
                        <svg
                          className="svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z"
                            opacity=".3"
                          ></path>
                          <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                        </svg>{" "}
                        Like
                      </Button>
                      <Button
                        color=""
                        type="button"
                        className="btn btn-danger  btn-svgs btn-svg-white"
                      >
                        <svg
                          className="svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <circle cx="18" cy="5" opacity=".3" r="1"></circle>
                          <circle cx="6" cy="12" opacity=".3" r="1"></circle>
                          <circle
                            cx="18"
                            cy="19.02"
                            opacity=".3"
                            r="1"
                          ></circle>
                          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                        </svg>{" "}
                        Share
                      </Button>
                    </div>`}
                </code>
              </pre>
              <div
                className="clipboard-icon"
                data-clipboard-target="#element72"
              >
                <svg
                onClick={()=>{
                  CopytoClipBoard(elementRef15)
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
      </Col>
    </Row>
    {/* <!--End Row--> */}

    {/* <!--Row--> */}
    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle>Button dropdown</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap">
              <p>
                Wrap the dropdown’s toggle using different colors and icons
                implemented in different dropdowns styles (your button or link)
                and the dropdown menu within{" "}
                <code className="highlighter-rouge">.dropdown</code>, or another
                element that declares{" "}
                <code className="highlighter-rouge">position: relative;</code>.
                Dropdowns can be triggered from{" "}
                <code className="highlighter-rouge">&lt;a&gt;</code> or{" "}
                <code className="highlighter-rouge">&lt;button&gt;</code>{" "}
                elements to better fit your potential needs.
              </p>
              <div className="example">
                <div className="btn-list">
                  <UncontrolledDropdown className="dropdown">
                    <DropdownToggle
                      color=""
                      type="button"
                      className="btn btn-secondary dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fe fe-calendar"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem className="dropdown-item" >
                        Dropdown link
                      </DropdownItem>
                      <DropdownItem className="dropdown-item" >
                        Dropdown link
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown className="dropdown">
                    <DropdownToggle 
                      color=""
                      type="button"
                      className="btn btn-info dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fe fe-calendar me-2"></i>Show calendar
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem className="dropdown-item" >
                        Dropdown link
                      </DropdownItem>
                      <DropdownItem  className="dropdown-item" >
                        Dropdown link
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown className="dropdown">
                    <DropdownToggle
                      color=""
                      type="button"
                      className="btn btn-danger dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Show calendar
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem  className="dropdown-item" >
                        Dropdown link
                      </DropdownItem>
                      <DropdownItem  className="dropdown-item" >
                        Dropdown link
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
            </div>
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
          <figure className="highlight mb-0" id="element14">
            <pre ref={elementRef16}>
              <code className="language-markup mb-0">{`
                  <div className="text-wrap">
                    <p>
                      Wrap the dropdown’s toggle using different colors and
                      icons implemented in different dropdowns styles (your
                      button or link) and the dropdown menu within{" "}
                      <code className="highlighter-rouge">.dropdown</code>, or
                      another element that declares{" "}
                      <code className="highlighter-rouge">
                        position: relative;
                      </code>
                      . Dropdowns can be triggered from{" "}
                      <code className="highlighter-rouge">&lt;a&gt;</code> or{" "}
                      <code className="highlighter-rouge">&lt;button&gt;</code>{" "}
                      elements to better fit your potential needs.
                    </p>
                    <div className="example">
                      <div className="btn-list">
                        <UncontrolledDropdown className="dropdown">
                          <DropdownToggle 
                            color=""
                            type="button"
                            className="btn btn-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <i className="fe fe-calendar"></i>
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu">
                            <DropdownItem className="dropdown-item" >
                              Dropdown link
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" >
                              Dropdown link
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className="dropdown">
                          <DropdownToggle
                            color=""
                            type="button"
                            className="btn btn-info dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            <i className="fe fe-calendar me-2"></i>Show calendar
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu">
                            <DropdownItem className="dropdown-item" >
                              Dropdown link
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" >
                              Dropdown link
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown className="dropdown">
                          <DropdownToggle
                            color=""
                            type="button"
                            className="btn btn-danger dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            Show calendar
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu">
                            <DropdownItem className="dropdown-item" >
                              Dropdown link
                            </DropdownItem>
                            <DropdownItem className="dropdown-item" >
                              Dropdown link
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </div>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element14">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef16)
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
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle>Loading button</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wra">
              <p>
                Add <code className="highlighter-rouge">.btn-loading</code> to
                use a loading state on a button. The width of the button depends
                on the length of the text inside Since the loading spinner is
                implemented using the element.
              </p>
              <div className="example">
                <div className="btn-list">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-primary btn-loading"
                  >
                    Button text
                  </Button>
                  <br />
                  <Button
                    color=""
                    type="button"
                    className="btn btn-success btn-loading"
                  >
                    <i className="fe fe-check"></i>
                  </Button>
                  <Button
                    color=""
                    type="button"
                    className="btn btn-warning btn-loading btn-sm"
                  >
                    Button text
                  </Button>
                  <br />
                  <Button
                    color=""
                    type="button"
                    className="btn btn-danger btn-loading btn-lg"
                  >
                    Button text
                  </Button>
                  <Button
                    color=""
                    type="button"
                    className="btn btn-info btn-loading btn-block"
                  >
                    Button text
                  </Button>
                </div>
              </div>
            </div>
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
          <figure className="highlight mb-0" id="element15">
            <pre ref={elementRef17}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button
                      color=""
                      type="button"
                      className="btn btn-primary btn-loading"
                    >
                      Button text
                    </Button>
                    <br />
                    <Button
                      color=""
                      type="button"
                      className="btn btn-success btn-loading"
                    >
                      <i className="fe fe-check"></i>
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-warning btn-loading btn-sm"
                    >
                      Button text
                    </Button>
                    <br />
                    <Button
                      color=""
                      type="button"
                      className="btn btn-danger btn-loading btn-lg"
                    >
                      Button text
                    </Button>
                    <Button
                      color=""
                      type="button"
                      className="btn btn-info btn-loading btn-block"
                    >
                      Button text
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element15">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef17)
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
      <Col md="12"lg="12">
        <Card>
          <CardHeader>
            <CardTitle>List of buttons</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap">
              <p>
                You can now create a list of buttons with the{" "}
                <code className="highlighter-rouge">.btn-list</code> container.
              </p>
              <div className="example">
                <div className="btn-list">
                  <Button color="" tag="a"  className="btn btn-primary">
                    Save changes
                  </Button>
                  <Button color="" tag="a"  className="btn btn-secondary">
                    Save and continue
                  </Button>
                  <Button color="" tag="a"  className="btn btn-danger">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-wrap mt-6">
              <p>
                Use the <code className="highlighter-rouge">.text-center</code>{" "}
                modifiers to alter the alignment.
              </p>
              <div className="example">
                <div className="btn-list text-center">
                  <Button color="" tag="a"  className="btn btn-primary">
                    Save changes
                  </Button>
                  <Button color="" tag="a"  className="btn btn-secondary">
                    Save and continue
                  </Button>
                  <Button color="" tag="a"  className="btn btn-danger">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-wrap mt-6">
              <p>
                Use the <code className="highlighter-rouge">.text-end</code>{" "}
                modifiers to alter the alignment.
              </p>
              <div className="example">
                <div className="btn-list text-end">
                  <Button color="" tag="a"  className="btn btn-primary">
                    Save changes
                  </Button>
                  <Button color="" tag="a"  className="btn btn-secondary">
                    Save and continue
                  </Button>
                  <Button color="" tag="a"  className="btn btn-danger">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
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
          <figure className="highlight mb-0" id="element16">
            <pre ref={elementRef18}>
              <code className="language-markup mb-0">
                  {`<div className="text-wrap">
                    <p>
                      You can now create a list of buttons with the{" "}
                      <code className="highlighter-rouge">.btn-list</code>{" "}
                      container.
                    </p>
                    <div className="example">
                      <div className="btn-list">
                        <Button color="" tag="a"  className="btn btn-primary">
                          Save changes
                        </Button>
                        <Button color="" tag="a"  className="btn btn-secondary">
                          Save and continue
                        </Button>
                        <Button color="" tag="a"  className="btn btn-danger">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrap mt-6">
                    <p>
                      Use the{" "}
                      <code className="highlighter-rouge">.text-center</code>{" "}
                      modifiers to alter the alignment.
                    </p>
                    <div className="example">
                      <div className="btn-list text-center">
                        <Button color="" tag="a"  className="btn btn-primary">
                          Save changes
                        </Button>
                        <Button color="" tag="a"  className="btn btn-secondary">
                          Save and continue
                        </Button>
                        <Button color="" tag="a"  className="btn btn-danger">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrap mt-6">
                    <p>
                      Use the{" "}
                      <code className="highlighter-rouge">.text-end</code>{" "}
                      modifiers to alter the alignment.
                    </p>
                    <div className="example">
                      <div className="btn-list text-end">
                        <Button color="" tag="a"  className="btn btn-primary">
                          Save changes
                        </Button>
                        <Button color="" tag="a"  className="btn btn-secondary">
                          Save and continue
                        </Button>
                        <Button color="" tag="a"  className="btn btn-danger">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element16">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef18)
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
        {/* <!--div--> */}
        <Card id="button7">
          <CardHeader>
            <CardTitle>Group Buttons</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              aria-label="Basic example"
              className="btn-group ms-3 mt-3"
              role="group"
            >
              <Button
                color=""
                className="btn btn-secondary active"
                type="button"
              >
                Left
              </Button>{" "}
              <Button
                color=""
                className="btn btn-secondary pd-x-25"
                type="button"
              >
                Center
              </Button>{" "}
              <Button
                color=""
                className="btn btn-secondary pd-x-25"
                type="button"
              >
                Right
              </Button>
            </div>
            <div
              aria-label="Basic example"
              className="btn-group ms-3 mt-3"
              role="group"
            >
              <Button
                color=""
                className="btn btn-secondary active"
                type="button"
              >
                <i className="typcn typcn-media-play-outline"></i>
              </Button>
              <Button color="" className="btn btn-secondary" type="button">
                <i className="typcn typcn-media-pause-outline"></i>
              </Button>
              <Button color="" className="btn btn-secondary" type="button">
                <i className="typcn typcn-media-stop-outline"></i>
              </Button>
            </div>
            <div
              aria-label="Basic example"
              className="btn-group ms-3 mt-3"
              role="group"
            >
              <Button color="" className="btn btn-primary" type="button">
                <i className="typcn typcn-media-play-outline"></i>
              </Button>
              <Button color="" className="btn btn-primary" type="button">
                <i className="typcn typcn-media-pause-outline"></i>
              </Button>
              <Button color="" className="btn btn-primary" type="button">
                <i className="typcn typcn-media-stop-outline"></i>
              </Button>
            </div>
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
          {/* <!---Prism Pre code--> */}
          <figure className="highlight mb-0" id="element17">
            <pre ref={elementRef19}>
              <code className="language-markup mb-0">
                  {`<div
                    aria-label="Basic example"
                    className="btn-group ms-3 mb-3"
                    role="group"
                  >
                    <Button
                      color=""
                      className="btn btn-secondary active"
                      type="button"
                    >
                      Left
                    </Button>
                    <Button
                      color=""
                      className="btn btn-secondary pd-x-25"
                      type="button"
                    >
                      Center
                    </Button>
                    <Button
                      color=""
                      className="btn btn-secondary pd-x-25"
                      type="button"
                    >
                      Right
                    </Button>
                  </div>
                  <div
                    aria-label="Basic example"
                    className="btn-group ms-3 mb-3"
                    role="group"
                  >
                    <Button
                      color=""
                      className="btn btn-secondary active"
                      type="button"
                    >
                      <i className="typcn typcn-media-play-outline"></i>
                    </Button>{" "}
                    <Button
                      color=""
                      className="btn btn-secondary"
                      type="button"
                    >
                      <i className="typcn typcn-media-pause-outline"></i>
                    </Button>
                    <Button
                      color=""
                      className="btn btn-secondary"
                      type="button"
                    >
                      <i className="typcn typcn-media-stop-outline"></i>
                    </Button>
                  </div>
                  <div
                    aria-label="Basic example"
                    className="btn-group ms-3 mb-3"
                    role="group"
                  >
                    <Button color="" className="btn btn-primary" type="button">
                      <i className="typcn typcn-media-play-outline"></i>
                    </Button>
                    <Button color="" className="btn btn-primary" type="button">
                      <i className="typcn typcn-media-pause-outline"></i>
                    </Button>
                    <Button color="" className="btn btn-primary" type="button">
                      <i className="typcn typcn-media-stop-outline"></i>
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element17">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef19)
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
        {/* <!--/div--> */}
      </Col>
    </Row>
    {/* <!--End Row--> */}

    {/* <!--Row--> */}
    <Row>
      <Col md="12"lg="12">
        <Card>
          <CardHeader>
            <CardTitle>Width Buttons</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="btn-list">
              <Button color="" tag="a"  role="button" className="btn btn-primary btn-w-xs">
                XS
              </Button>
              <Button color="" tag="a"  role="button" className="btn btn-primary btn-w-sm">
                SM
              </Button>
              <Button color="" tag="a"  role="button" className="btn btn-primary btn-w-md">
                MD
              </Button>
              <Button color="" tag="a"  role="button" className="btn btn-primary btn-w-lg">
                LG
              </Button>
            </div>
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
          {/* <!---Prism Pre code--> */}
          <figure className="highlight mb-0" id="element18">
            <pre ref={elementRef20}>
              <code className="language-markup mb-0">{`
                  <div className="btn-list">
                    <Button color="" tag="a"
                      
                      role="button"
                      className="btn btn-primary btn-w-xs"
                    >
                      xs
                    </Button>
                    <Button color="" tag="a"
                      
                      role="button"
                      className="btn btn-primary btn-w-sm"
                    >
                      sm
                    </Button>
                    <Button color="" tag="a"
                      
                      role="button"
                      className="btn btn-primary btn-w-md"
                    >
                      md
                    </Button>
                    <Button color="" tag="a"
                      
                      role="button"
                      className="btn btn-primary btn-w-lg"
                    >
                      lg
                    </Button>
                  </div>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element18">
              <svg  onClick={()=>{
                CopytoClipBoard(elementRef20)
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

Buttons.propTypes = {};

Buttons.defaultProps = {};

export default Buttons;
