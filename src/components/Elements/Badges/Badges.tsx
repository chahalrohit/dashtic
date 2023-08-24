import React, { LegacyRef, useRef } from "react";
import { Badge,Card,Row,CardBody,CardHeader,CardTitle,Col } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Badges = () => {

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

  return (

  <div>
    <PageHeaders
      title="Badges"
      home="Home"
      name="Elements"
      fonticonsname="Badges"
    />
    <Row>
      <Col md="12"lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Simple Badges</CardTitle>
          </CardHeader>
          <CardBody>
            <h1>
              Heading 01 <Badge color="" className="badge-default">New</Badge>
            </h1>
            <h2>
              Heading 02 <Badge color="" className="badge-default">New</Badge>
            </h2>
            <h3>
              Heading 03 <Badge color="" className="badge-default">New</Badge>
            </h3>
            <h4>
              Heading 04 <Badge color="" className="badge-default">New</Badge>
            </h4>
            <h5>
              Heading 05 <Badge color="" className="badge-default">New</Badge>
            </h5>
            <h6>
              Heading 06 <Badge color="" className="badge-default">New</Badge>
            </h6>
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
 <h1>
   Heading 01 <Badge color="" className="badge-default">New</Badge>
 </h1>
 <h2>
   Heading 02 <Badge color="" className="badge-default">New</Badge>
 </h2>
 <h3>
   Heading 03 <Badge color="" className="badge-default">New</Badge>
 </h3>
 <h4>
   Heading 04 <Badge color="" className="badge-default">New</Badge>
 </h4>
 <h5>
   Heading 05 <Badge color="" className="badge-default">New</Badge>
 </h5>
 <h6>
   Heading 06<Badge color="" className="badge-default">New</Badge>
 </h6>
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
      <Col md="12"lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Colored Badges</CardTitle>
          </CardHeader>
          <CardBody>
            <h1 className="text-blue">
              Heading 01 <Badge color="" className="bg-primary">New</Badge>
            </h1>
            <h2 className="text-red">
              Heading 02 <Badge color="" className="bg-danger">New</Badge>
            </h2>
            <h3 className="text-yellow">
              Heading 03 <Badge color="" className="bg-warning">New</Badge>
            </h3>
            <h4 className="text-green">
              Heading 04 <Badge color="" className="bg-success">New</Badge>
            </h4>
            <h5 className="text-info">
              Heading 05 <Badge color="" className="bg-info">New</Badge>
            </h5>
            <h6 className="text-secondary">
              Heading 06 <Badge color="" className="bg-secondary">New</Badge>
            </h6>
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
<h1 className="text-blue">
  Heading 01 <Badge color="" className="bg-primary">New</Badge>
</h1>
<h2 className="text-red">
  Heading 02 <Badge color="" className="bg-danger">New</Badge>
</h2>
<h3 className="text-yellow">
  Heading 03 <Badge color="" className="bg-warning">New</Badge>
</h3>
<h4 className="text-green">
  Heading 04 <Badge color="" className="bg-success">New</Badge>
</h4>
<h5 className="text-info">
  Heading 05 <Badge color="" className="bg-info">New</Badge>
</h5>
<h6 className="text-secondary">
  Heading 06<Badge color="" className="bg-secondary">New</Badge>
</h6>
                
`}</code>
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
    {/* <!--End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col md="12"lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Contextual variations</CardTitle>
          </CardHeader>
          <CardBody>
            <Badge color="" className="me-1 badge-default mt-2">Default</Badge>
            <Badge color="" className="me-1 bg-primary mt-2">Primary</Badge>
            <Badge color="" className="me-1 bg-success mt-2">Success</Badge>
            <Badge color="" className="me-1 bg-info mt-2">Info</Badge>
            <Badge color="" className="me-1 bg-warning mt-2">Warning</Badge>
            <Badge color="" className="me-1 bg-danger mt-2">Danger</Badge>
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
 <Badge color="" className="me-1 badge-default mt-2">Default</Badge>
 <Badge color="" className="me-1 bg-primary mt-2">Primary</Badge>
 <Badge color="" className="me-1 bg-success mt-2">Success</Badge>
 <Badge color="" className="me-1 bg-info mt-2">Info</Badge>
 <Badge color="" className="me-1 bg-warning mt-2">Warning</Badge>
 <Badge color="" className="me-1 bg-danger mt-2">Danger</Badge>
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
      <Col md="12"lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Pill Badges</CardTitle>
          </CardHeader>
          <CardBody>
             <Badge color="" className="me-1 badge rounded-pill badge-default mt-2">Default</Badge>
             <Badge color="" className="me-1 badge rounded-pill bg-primary mt-2">Primary</Badge>
             <Badge color="" className="me-1 badge rounded-pill bg-success mt-2">Success</Badge>
             <Badge color="" className="me-1 badge rounded-pill bg-info mt-2">Info</Badge>
             <Badge color="" className="me-1 badge rounded-pill bg-warning mt-2">Warning</Badge>
             <Badge color="" className="me-1 badge rounded-pill bg-danger mt-2">Danger</Badge>
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
<Badge color="" className="me-1 badge rounded-pill badge-default mt-2">
  Default
</Badge>
<Badge color="" className="me-1 badge rounded-pill bg-primary mt-2">
  Primary
</Badge>
<Badge color="" className="me-1 badge rounded-pill bg-success mt-2">
  Success
</Badge>
<Badge color="" className="me-1 badge rounded-pill bg-info mt-2">Info</Badge>
<Badge color="" className="me-1 badge rounded-pill bg-warning mt-2">
  Warning
</Badge>
<Badge color="" className="me-1 badge rounded-pill bg-danger mt-2">Danger</Badge>
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

    {/* <!-- Row--> */}
    <Card>
      <CardBody className="pb-0">
        <Row>
          <Col xs="12" sm="6"lg="4">
            <div className="offer offer-default">
              <div className="shape">
                <div className="shape-text">top</div>
              </div>
              <div className="offer-content">
                <h3 className="lead font-weight-semibold">Default badge</h3>
                <p className="mb-0">
                  And a little description.
                  <br /> and so one
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12"sm="6"lg="4">
            <div className="offer offer-success">
              <div className="shape">
                <div className="shape-text">top</div>
              </div>
              <div className="offer-content">
                <h3 className="lead font-weight-semibold">Success badge</h3>
                <p className="mb-0">
                  And a little description.
                  <br /> and so one
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12"sm="6"lg="4">
            <div className="offer offer-radius offer-primary">
              <div className="shape">
                <div className="shape-text">top</div>
              </div>
              <div className="offer-content">
                <h3 className="lead font-weight-semibold">Primary badge</h3>
                <p className="mb-0">
                  And a little description.
                  <br /> and so one
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12"sm="6"lg="4">
            <div className="offer offer-info mb-6">
              <div className="shape">
                <div className="shape-text">top</div>
              </div>
              <div className="offer-content">
                <h3 className="lead font-weight-semibold">Info Badge</h3>
                <p className="mb-0">
                  And a little description.
                  <br /> and so one
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12"sm="6"lg="4">
            <div className="offer offer-warning mb-6">
              <div className="shape">
                <div className="shape-text">top</div>
              </div>
              <div className="offer-content">
                <h3 className="lead font-weight-semibold">Warning badge</h3>
                <p className="mb-0">
                  And a little description.
                  <br /> and so one
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12"sm="6"lg="4">
            <div className="offer offer-radius offer-danger mb-6">
              <div className="shape">
                <div className="shape-text">top</div>
              </div>
              <div className="offer-content">
                <h3 className="lead font-weight-semibold">Danger Badge</h3>
                <p className="mb-0">
                  And a little description.
                  <br /> and so one
                </p>
              </div>
            </div>
          </Col>
        </Row>
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
<Col xs="12"sm="6"lg="4">
  <div className="offer offer-default">
    <div className="shape">
      <div className="shape-text">top</div>
    </div>
    <div className="offer-content">
      <h3 className="lead font-weight-semibold">Default badge</h3>
      <p className="mb-0">
        And a little description.
        <br /> and so one
      </p>
    </div>
  </div>
</Col>
<Col xs="12"sm="6"lg="4">
  <div className="offer offer-success">
    <div className="shape">
      <div className="shape-text">top</div>
    </div>
    <div className="offer-content">
      <h3 className="lead font-weight-semibold">Success badge</h3>
      <p className="mb-0">
        And a little description.
        <br /> and so one
      </p>
    </div>
  </div>
</Col>
<Col xs="12"sm="6"lg="4">
  <div className="offer offer-radius offer-primary">
    <div className="shape">
      <div className="shape-text">top</div>
    </div>
    <div className="offer-content">
      <h3 className="lead font-weight-semibold">Primary badge</h3>
      <p className="mb-0">
        And a little description.
        <br /> and so one
      </p>
    </div>
  </div>
</Col>
<Col xs="12"sm="6"lg="4">
  <div className="offer offer-info mb-6">
    <div className="shape">
      <div className="shape-text">top</div>
    </div>
    <div className="offer-content">
      <h3 className="lead font-weight-semibold">Info Badge</h3>
      <p className="mb-0">
        And a little description.
        <br /> and so one
      </p>
    </div>
  </div>
</Col>
<Col xs="12"sm="6"lg="4">
  <div className="offer offer-warning mb-6">
    <div className="shape">
      <div className="shape-text">top</div>
    </div>
    <div className="offer-content">
      <h3 className="lead font-weight-semibold">Warning badge</h3>
      <p className="mb-0">
        And a little description.
        <br /> and so one
      </p>
    </div>
  </div>
</Col>
<Col xs="12"sm="6"lg="4">
  <div className="offer offer-radius offer-danger mb-6">
    <div className="shape">
      <div className="shape-text">top</div>
    </div>
    <div className="offer-content">
      <h3 className="lead font-weight-semibold">Danger Badge</h3>
      <p className="mb-0">
        And a little description.
        <br /> and so one
      </p>
    </div>
  </div>
</Col>
`}</code>
        </pre>
        <div className="clipboard-icon" data-clipboard-target="#element5">
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
  </div>
)
  };

Badges.propTypes = {};

Badges.defaultProps = {};

export default Badges;
