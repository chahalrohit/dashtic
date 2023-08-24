import React, { LegacyRef, useRef } from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const List = () => {

  //clipboard functions
  const elementRef: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef2: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef3: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef4: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef5: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef6: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef7: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef8: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef9: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef10: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef11: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef12: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef13: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef14: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef15: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef16: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef17: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  const elementRef18: LegacyRef<HTMLPreElement> = useRef  <HTMLInputElement>(null)
  
  //clipboard function for ShowCode
  
  let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
    let data = ele.current?.innerText
    navigator.clipboard.writeText(data || '')
    alert("Text copied successfully")
    }


  return (
  <div>
    <PageHeaders
      title="List"
      home="Home"
      name="Elements"
      fonticonsname="List"
    />

    {/* <!--End Page header-->

                        <!-- Row --> */}
    <Row>
      <Col sm="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Basic List Group</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
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
          <figure className="highlight mb-0" id="element11">
            <pre ref={elementRef}>
              <code className="language-markup mb-0">{`
    <ul className="list-group">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element11">
              <svg
              onClick={()=>{
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
      <Col sm="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Active List item</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="list-group">
              <li className="list-group-item active">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
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
          <figure className="highlight mb-0" id="element12">
            <pre ref={elementRef2}>
              <code className="language-markup mb-0">{`
    <ul className="list-group">
      <li className="list-group-item active">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element12">
              <svg
              onClick={()=>{
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
    {/* <!-- End Row-->

                        <!-- Row --> */}
    <Row>
      <div className="col-sm-12 col-lg-4">
        <Card>
          <CardHeader>
            <CardTitle>Default Active Link List</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-default">
              <div className="list-group">
                <Link to="#" className="list-group-item">
                  Cras justo odio
                </Link>
                <Link to="#" className="list-group-item active">
                  Dapibus ac facilisis in
                </Link>
                <Link to="#" className="list-group-item">
                  Morbi leo risus
                </Link>
                <Link to="#" className="list-group-item">
                  Porta ac consectetur ac
                </Link>
                <Link to="#" className="list-group-item">
                  Vestibulum at eros
                </Link>
              </div>
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
          <figure className="highlight mb-0" id="element13">
            <pre ref={elementRef3}>
              <code className="language-markup mb-0">{`
    <div className="panel panel-default">
      <div className="list-group">
        <Link to="#" className="list-group-item">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item active">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item">
          Morbi leo risus
        </Link>
        <Link to="#" className="list-group-item">
          Porta ac consectetur ac
        </Link>
        <Link to="#" className="list-group-item">
          Vestibulum at eros
        </Link>
      </div>
    </div>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element13">
              <svg
              onClick={()=>{
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
      </div>
      <div className="col-sm-12 col-lg-4">
        <Card>
          <CardHeader>
            <CardTitle>Primary Active Link List</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-primary">
              <div className="list-group">
                <Link to="#" className="list-group-item">
                  Cras justo odio
                </Link>
                <Link to="#" className="list-group-item active">
                  Dapibus ac facilisis in
                </Link>
                <Link to="#" className="list-group-item">
                  Morbi leo risus
                </Link>
                <Link to="#" className="list-group-item">
                  Porta ac consectetur ac
                </Link>
                <Link to="#" className="list-group-item">
                  Vestibulum at eros
                </Link>
              </div>
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
          <figure className="highlight mb-0" id="element14">
            <pre ref={elementRef4}>
              <code className="language-markup mb-0"> {` 
    <div className="panel panel-primary">
      <div className="list-group">
        <Link to="#" className="list-group-item">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item active">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item">
          Morbi leo risus
        </Link>
        <Link to="#" className="list-group-item">
          Porta ac consectetur ac
        </Link>
        <Link to="#" className="list-group-item">
          Vestibulum at eros
        </Link>
      </div>
    </div>
    `}   
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element14">
              <svg
              onClick={()=>{
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
      </div>
      <div className="col-sm-12 col-lg-4">
        <Card>
          <CardHeader>
            <CardTitle>Success Active Link List</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-success">
              <div className="list-group">
                <Link to="#" className="list-group-item">
                  Cras justo odio
                </Link>
                <Link to="#" className="list-group-item active">
                  Dapibus ac facilisis in
                </Link>
                <Link to="#" className="list-group-item">
                  Morbi leo risus
                </Link>
                <Link to="#" className="list-group-item">
                  Porta ac consectetur ac
                </Link>
                <Link to="#" className="list-group-item">
                  Vestibulum at eros
                </Link>
              </div>
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
          <figure className="highlight mb-0" id="element15">
            <pre ref={elementRef5}>
              <code className="language-markup mb-0">{`
    <div className="panel panel-success">
      <div className="list-group">
        <Link to="#" className="list-group-item">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item active">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item">
          Morbi leo risus
        </Link>
        <Link to="#" className="list-group-item">
          Porta ac consectetur ac
        </Link>
        <Link to="#" className="list-group-item">
          Vestibulum at eros
        </Link>
      </div>
    </div>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element15">
              <svg
              onClick={()=>{
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
      <div className="col-sm-12 col-lg-4">
        <Card>
          <CardHeader>
            <CardTitle>Info Active Link List</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-info">
              <div className="list-group">
                <Link to="#" className="list-group-item">
                  Cras justo odio
                </Link>
                <Link to="#" className="list-group-item active">
                  Dapibus ac facilisis in
                </Link>
                <Link to="#" className="list-group-item">
                  Morbi leo risus
                </Link>
                <Link to="#" className="list-group-item">
                  Porta ac consectetur ac
                </Link>
                <Link to="#" className="list-group-item">
                  Vestibulum at eros
                </Link>
              </div>
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
          <figure className="highlight mb-0" id="element16">
            <pre ref={elementRef6}>
              <code className="language-markup mb-0">{`
    <div className="panel panel-info">
      <div className="list-group">
        <Link to="#" className="list-group-item">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item active">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item">
          Morbi leo risus
        </Link>
        <Link to="#" className="list-group-item">
          Porta ac consectetur ac
        </Link>
        <Link to="#" className="list-group-item">
          Vestibulum at eros
        </Link>
      </div>
    </div>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element16">
              <svg
              onClick={()=>{
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
      </div>
      <div className="col-sm-12 col-lg-4">
        <Card>
          <CardHeader>
            <CardTitle>Warning Active Link List</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-warning">
              <div className="list-group">
                <Link to="#" className="list-group-item">
                  Cras justo odio
                </Link>
                <Link to="#" className="list-group-item active">
                  Dapibus ac facilisis in
                </Link>
                <Link to="#" className="list-group-item">
                  Morbi leo risus
                </Link>
                <Link to="#" className="list-group-item">
                  Porta ac consectetur ac
                </Link>
                <Link to="#" className="list-group-item">
                  Vestibulum at eros
                </Link>
              </div>
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
          <figure className="highlight mb-0" id="element17">
            <pre ref={elementRef7}>
              <code className="language-markup mb-0">{`
    <div className="panel panel-warning">
      <div className="list-group">
        <Link to="#" className="list-group-item">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item active">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item">
          Morbi leo risus
        </Link>
        <Link to="#" className="list-group-item">
          Porta ac consectetur ac
        </Link>
        <Link to="#" className="list-group-item">
          Vestibulum at eros
        </Link>
      </div>
    </div>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element17">
              <svg
              onClick={()=>{
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
      </div>
      <div className="col-sm-12 col-lg-4">
        <Card>
          <CardHeader>
            <CardTitle>list styles</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-danger">
              <div className="list-group">
                <Link to="#" className="list-group-item">
                  Cras justo odio
                </Link>
                <Link to="#" className="list-group-item active">
                  Dapibus ac facilisis in
                </Link>
                <Link to="#" className="list-group-item">
                  Morbi leo risus
                </Link>
                <Link to="#" className="list-group-item">
                  Porta ac consectetur ac
                </Link>
                <Link to="#" className="list-group-item">
                  Vestibulum at eros
                </Link>
              </div>
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
          <figure className="highlight mb-0" id="element18">
            <pre ref={elementRef8}>
              <code className="language-markup mb-0">{`
    <div className="panel panel-danger">
      <div className="list-group">
        <Link to="#" className="list-group-item">
          Cras justo odio
        </Link>
        <Link to="#" className="list-group-item active">
          Dapibus ac facilisis in
        </Link>
        <Link to="#" className="list-group-item">
          Morbi leo risus
        </Link>
        <Link to="#" className="list-group-item">
          Porta ac consectetur ac
        </Link>
        <Link to="#" className="list-group-item">
          Vestibulum at eros
        </Link>
      </div>
    </div>
                  `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element18">
              <svg
              onClick={()=>{
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
      </div>
    </Row>
    {/* <!-- End Row -->

                        <!-- Row --> */}
    <Row>
      <Col sm="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Order list</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="list-group">
              <li className="listorder">Cras justo odio</li>
              <li className="listorder">Dapibus ac facilisis in</li>
              <li className="listorder">Morbi leo risus</li>
              <li className="listorder">Porta ac consectetur ac</li>
              <li className="listorder">Vestibulum at eros</li>
            </ul>
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
          <figure className="highlight mb-0" id="element19">
            <pre ref={elementRef9}>
              <code className="language-markup mb-0">{`
    <ul className="list-group">
      <li className="listorder">Cras justo odio</li>
      <li className="listorder">Dapibus ac facilisis in</li>
      <li className="listorder">Morbi leo risus</li>
      <li className="listorder">Porta ac consectetur ac</li>
      <li className="listorder">Vestibulum at eros</li>
    </ul>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element19">
              <svg
              onClick={()=>{
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
      <Col sm="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Unorder list</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="list-group">
              <li className="listunorder">Cras justo odio</li>
              <li className="listunorder">Dapibus ac facilisis in</li>
              <li className="listunorder">Morbi leo risus</li>
              <li className="listunorder">Porta ac consectetur ac</li>
              <li className="listunorder">Vestibulum at eros</li>
            </ul>
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
          <figure className="highlight mb-0" id="element20">
            <pre ref={elementRef10}>
              <code className="language-markup mb-0">{`
    <ul className="list-group">
      <li className="listunorder">Cras justo odio</li>
      <li className="listunorder">Dapibus ac facilisis in</li>
      <li className="listunorder">Morbi leo risus</li>
      <li className="listunorder">Porta ac consectetur ac</li>
      <li className="listunorder">Vestibulum at eros</li>
    </ul>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element20">
              <svg
              onClick={()=>{
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
    </Row>
    {/* <!-- End row-->

                        <!-- Row --> */}
    <Row>
      <Col sm="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Disabled List item</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="list-group">
              <li className="list-group-item disabled">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
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
          <figure className="highlight mb-0" id="element">
            <pre ref={elementRef11}>
              <code className="language-markup mb-0">{`
    <ul className="list-group">
      <li className="list-group-item disabled">
        Cras justo odio
      </li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element">
              <svg
              onClick={()=>{
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
      <Col sm="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Contextual classes with List Group</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="list-group">
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item list-group-item-success">
                Dapibus ac facilisis in
              </li>
              <li className="list-group-item list-group-item-info">
                Cras sit amet nibh libero
              </li>
              <li className="list-group-item list-group-item-warning">
                Porta ac consectetur ac
              </li>
              <li className="list-group-item list-group-item-danger">
                Vestibulum at eros
              </li>
            </ul>
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
          <figure className="highlight mb-0" id="element21">
            <pre ref={elementRef12}>
              <code className="language-markup mb-0">{`
    <ul className="list-group">
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item list-group-item-success">
        Dapibus ac facilisis in
      </li>
      <li className="list-group-item list-group-item-info">
        Cras sit amet nibh libero
      </li>
      <li className="list-group-item list-group-item-warning">
        Porta ac consectetur ac
      </li>
      <li className="list-group-item list-group-item-danger">
        Vestibulum at eros
      </li>
    </ul>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element21">
              <svg
              onClick={()=>{
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
    {/* <!-- End Row -->

                        <!-- Row--> */}
    <Row>
      <Col sm="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">List Group with icons</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="list-group">
              <li className="list-group-item">
                <i className="fa fa-check" aria-hidden="true"></i> Cras justo
                odio
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" aria-hidden="true"></i> Dapibus ac
                facilisis in
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" aria-hidden="true"></i> Morbi leo
                risus
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" aria-hidden="true"></i> Porta ac
                consectetur ac
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" aria-hidden="true"></i> Vestibulum at
                eros
              </li>
            </ul>
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
          <figure className="highlight mb-0" id="element22">
            <pre ref={elementRef13}>
              <code className="language-markup mb-0">{`
    <ul className="list-group">
      <li className="list-group-item">
        <i className="fa fa-check" aria-hidden="true"></i> Cras
        justo odio
      </li>
      <li className="list-group-item">
        <i className="fa fa-check" aria-hidden="true"></i> Dapibus
        ac facilisis in
      </li>
      <li className="list-group-item">
        <i className="fa fa-check" aria-hidden="true"></i> Morbi
        leo risus
      </li>
      <li className="list-group-item">
        <i className="fa fa-check" aria-hidden="true"></i> Porta
        ac consectetur ac
      </li>
      <li className="list-group-item">
        <i className="fa fa-check" aria-hidden="true"></i>{" "}
        Vestibulum at eros
      </li>
    </ul>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element22">
              <svg
              onClick={()=>{
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
      <Col sm="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">List Group with colored icons</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="list-group">
              <li className="list-group-item">
                <i className="fa fa-cog text-primary" aria-hidden="true"></i>{" "}
                Dapibus ac facilisis in
              </li>
              <li className="list-group-item">
                <i className="fa fa-cog text-danger" aria-hidden="true"></i>{" "}
                Dapibus ac facilisis in
              </li>
              <li className="list-group-item">
                <i className="fa fa-cog text-success" aria-hidden="true"></i>{" "}
                Cras sit amet nibh libero
              </li>
              <li className="list-group-item">
                <i className="fa fa-cog text-warning" aria-hidden="true"></i>{" "}
                Porta ac consectetur ac
              </li>
              <li className="list-group-item">
                <i className="fa fa-cog text-info" aria-hidden="true"></i>{" "}
                Vestibulum at eros
              </li>
            </ul>
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
          <figure className="highlight mb-0" id="element23">
            <pre ref={elementRef14}>
              <code className="language-markup mb-0">{`
    <ul className="list-group">
      <li className="list-group-item">
        <i
          className="fa fa-cog text-primary"
          aria-hidden="true"
        ></i>{" "}
        Dapibus ac facilisis in
      </li>
      <li className="list-group-item">
        <i
          className="fa fa-cog text-danger"
          aria-hidden="true"
        ></i>{" "}
        Dapibus ac facilisis in
      </li>
      <li className="list-group-item">
        <i
          className="fa fa-cog text-success"
          aria-hidden="true"
        ></i>{" "}
        Cras sit amet nibh libero
      </li>
      <li className="list-group-item">
        <i
          className="fa fa-cog text-warning"
          aria-hidden="true"
        ></i>{" "}
        Porta ac consectetur ac
      </li>
      <li className="list-group-item">
        <i className="fa fa-cog text-info" aria-hidden="true"></i>{" "}
        Vestibulum at eros
      </li>
    </ul>`}
                
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element23">
              <svg
              onClick={()=>{
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
      </Col>
    </Row>
    {/* <!-- End Row-->

                        <!-- Row --> */}
    <Row>
      <Col sm="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">List Group With defalut badges</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="list-group">
              <li className="list-group-item">
                Cras justo odio
                <span className="badgetext badge badge-default rounded-pill">
                  14
                </span>
              </li>
              <li className="list-group-item">
                Dapibus ac facilisis in
                <span className=" badgetext badge badge-default rounded-pill">
                  2
                </span>
              </li>
              <li className="list-group-item">
                Morbi leo risus
                <span className=" badgetext badge badge-default rounded-pill">
                  1
                </span>
              </li>
            </ul>
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
            <pre ref={elementRef15}>
              <code className="language-markup mb-0">{`
    <ul className="list-group">
      <li className="list-group-item">
        Cras justo odio
        <span className="badgetext badge badge-default rounded-pill">
          14
        </span>
      </li>
      <li className="list-group-item">
        Dapibus ac facilisis in
        <span className=" badgetext badge badge-default rounded-pill">
          2
        </span>
      </li>
      <li className="list-group-item">
        Morbi leo risus
        <span className=" badgetext badge badge-default rounded-pill">
          1
        </span>
      </li>
    </ul>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element1">
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
      <Col sm="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">List Group With color badges</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="list-group">
              <li className="list-group-item justify-content-between">
                Cras justo odio
                <span className="badgetext badge bg-primary rounded-pill">
                  14
                </span>
              </li>
              <li className="list-group-item justify-content-between">
                Dapibus ac facilisis in
                <span className="badgetext badge bg-danger rounded-pill">
                  2
                </span>
              </li>
              <li className="list-group-item justify-content-between">
                Morbi leo risus
                <span className="badgetext badge bg-success rounded-pill">
                  1
                </span>
              </li>
            </ul>
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
            <pre ref={elementRef16}>
              <code className="language-markup mb-0">
                {`
    <ul className="list-group">
      <li className="list-group-item justify-content-between">
        Cras justo odio
        <span className="badgetext badge bg-primary rounded-pill">
          14
        </span>
      </li>
      <li className="list-group-item justify-content-between">
        Dapibus ac facilisis in
        <span className="badgetext badge bg-danger rounded-pill">
          2
        </span>
      </li>
      <li className="list-group-item justify-content-between">
        Morbi leo risus
        <span className="badgetext badge bg-success rounded-pill">
          1
        </span>
      </li>
    </ul>`}
                
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element2">
              <svg
              onClick={()=>{
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
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col sm="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">List Group With Custom content</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="list-group">
              <Link
                to="#"
                className="list-group-item list-group-item-action flex-column align-items-start active"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small>3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small>Donec id elit non mi porta.</small>
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">
                  Donec id elit non mi porta.
                </small>
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">
                  Donec id elit non mi porta.
                </small>
              </Link>
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
            <pre ref={elementRef17}>
              <code className="language-markup mb-0">
                {`
    <div className="list-group">
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start active"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </Link>
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small className="text-muted">
          Donec id elit non mi porta.
        </small>
      </Link>
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small className="text-muted">
          Donec id elit non mi porta.
        </small>
      </Link>
    </div>`}
                
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element3">
              <svg
              onClick={()=>{
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
      <Col sm="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">
              List Group With Disabled Custom content
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div className="list-group">
              <Link
                to="#"
                className="list-group-item list-group-item-action flex-column align-items-start disabled"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small>3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small>Donec id elit non mi porta.</small>
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">
                  Donec id elit non mi porta.
                </small>
              </Link>
              <Link
                to="#"
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">
                  Donec id elit non mi porta gravida at eget metus. Maecenas sed
                  diam eget risus varius blandit.
                </p>
                <small className="text-muted">
                  Donec id elit non mi porta.
                </small>
              </Link>
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
          <figure className="highlight mb-0" id="element4">
            <pre ref={elementRef18}>
              <code className="language-markup mb-0">
                {`
    <div className="list-group">
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start disabled"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small>Donec id elit non mi porta.</small>
      </Link>
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small className="text-muted">
          Donec id elit non mi porta.
        </small>
      </Link>
      <Link
        to="#"
        className="list-group-item list-group-item-action flex-column align-items-start"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">
          Donec id elit non mi porta gravida at eget metus.
          Maecenas sed diam eget risus varius blandit.
        </p>
        <small className="text-muted">
          Donec id elit non mi porta.
        </small>
      </Link>
    </div>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element4">
              <svg
              onClick={()=>{
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
      </Col>
    </Row>
  </div>
)
  };

List.propTypes = {};

List.defaultProps = {};

export default List;
