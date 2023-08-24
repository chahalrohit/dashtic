import React, { LegacyRef, useRef } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  PaginationItem,
  PaginationLink,
  Pagination,
  Row,
  Nav,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Paginations = () => {

        //clipboard functions
        const elementRef: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef2: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef3: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef4: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef5: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef6: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef7: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
        const elementRef8: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)

              //clipboard function for ShowCode
    
    let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
      let data = ele.current?.innerText
      navigator.clipboard.writeText(data || '')
      alert("Text copied successfully")
      }

  return (

  <div>
    <PageHeaders
      title="Pagination"
      home="Home"
      name="Elements"
      fonticonsname="Pagination"
    />
    <Row>
      <Col md="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Basic pagination</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="pagination-wrapper">
              <Nav aria-label="Page navigation">
                <Pagination className="pagination mb-0">
                  <PaginationItem className="page-item " active>
                    <PaginationLink className="page-link" href="#">
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item">
                    <PaginationLink className="page-link" href="#">
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item">
                    <PaginationLink className="page-link" href="#">
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item">
                    <PaginationLink className="page-link" href="#">
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item">
                    <PaginationLink className="page-link" href="#">
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item">
                    <PaginationLink
                      aria-label="Next"
                      className="page-link"
                      href="#"
                    >
                      <i className="fa fa-angle-right"></i>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </Nav>
            </div>
            {/* <!-- pagination-wrapper --> */}
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
              <code className="language-markup mb-0">{` 
              <Nav aria-label="Page navigation">
              <Pagination className="pagination mb-0">
                <PaginationItem className="page-item " active>
                  <PaginationLink className="page-link" href="#">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    5
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink
                    aria-label="Next"
                    className="page-link"
                    href="#"
                  >
                    <i className="fa fa-angle-right"></i>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </Nav>
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
      <Col md="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Basic pagination</CardTitle>
          </CardHeader>
          <CardBody>
            <Pagination className="pagination ">
              <PaginationItem className="page-item page-prev " disabled>
                <PaginationLink className="page-link" href="#" tabIndex={-1}>
                  Prev
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item " active>
                <PaginationLink className="page-link" href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item">
                <PaginationLink className="page-link" href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item">
                <PaginationLink className="page-link" href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item">
                <PaginationLink className="page-link" href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item page-next">
                <PaginationLink className="page-link" href="#">
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            {/* <!-- pagination-wrapper --> */}
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
    <Pagination className="pagination ">
    <PaginationItem className="page-item page-prev " disabled>
      <PaginationLink className="page-link" href="#" tabIndex="-1">
        Prev
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item " active>
      <PaginationLink className="page-link" href="#">
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item">
      <PaginationLink className="page-link" href="#">
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item">
      <PaginationLink className="page-link" href="#">
        3
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item">
      <PaginationLink className="page-link" href="#">
        4
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item page-next">
      <PaginationLink className="page-link" href="#">
        Next
      </PaginationLink>
    </PaginationItem>
    </Pagination>
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
      <Col md="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Model Pagination</CardTitle>
          </CardHeader>
          <CardBody>
            <Pagination className="pagination mg-b-0 page-0 ">
              <PaginationItem className="page-item">
                <PaginationLink
                  aria-label="Last"
                  className="page-link"
                  href="#"
                >
                  <i className="fa fa-angle-double-left"></i>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item">
                <PaginationLink
                  aria-label="Next"
                  className="page-link"
                  href="#"
                >
                  <i className="fa fa-angle-left"></i>
                </PaginationLink>
              </PaginationItem>

              <PaginationItem className="page-item">
                <PaginationLink className="page-link" href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item " active>
                <PaginationLink className="page-link" href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item">
                <PaginationLink className="page-link hidden-xs-down" href="#">
                  4
                </PaginationLink>
              </PaginationItem>

              <PaginationItem className="page-item">
                <PaginationLink
                  aria-label="Next"
                  className="page-link"
                  href="#"
                >
                  <i className="fa fa-angle-right"></i>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="page-item">
                <PaginationLink
                  aria-label="Last"
                  className="page-link"
                  href="#"
                >
                  <i className="fa fa-angle-double-right"></i>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </CardBody>
          {/* <!-- pagination-wrapper --> */}
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
              <code className="language-markup mb-0">
                {` 
    <Pagination className="pagination mg-b-0 page-0 ">
    <PaginationItem className="page-item">
      <PaginationLink
        aria-label="Last"
        className="page-link"
        href="#"
      >
        <i className="fa fa-angle-double-left"></i>
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item">
      <PaginationLink
        aria-label="Next"
        className="page-link"
        href="#"
      >
        <i className="fa fa-angle-left"></i>
      </PaginationLink>
    </PaginationItem>
  
    <PaginationItem className="page-item">
      <PaginationLink className="page-link" href="#">
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item " active>
      <PaginationLink className="page-link" href="#">
        3
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item">
      <PaginationLink className="page-link hidden-xs-down" href="#">
        4
      </PaginationLink>
    </PaginationItem>
  
    <PaginationItem className="page-item">
      <PaginationLink
        aria-label="Next"
        className="page-link"
        href="#"
      >
        <i className="fa fa-angle-right"></i>
      </PaginationLink>
    </PaginationItem>
    <PaginationItem className="page-item">
      <PaginationLink
        aria-label="Last"
        className="page-link"
        href="#"
      >
        <i className="fa fa-angle-double-right"></i>
      </PaginationLink>
    </PaginationItem>
              </Pagination>
                `}
              </code>
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
        {/* <!-- section-wrapper --> */}
      </Col>
      <Col md="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Model Pagination2</CardTitle>
          </CardHeader>
          <CardBody>
            <Nav aria-label="Page navigation">
              <Pagination className="pagination pagination-success mb-0">
                <PaginationItem className="page-item page-0">
                  <PaginationLink
                    aria-label="Next"
                    className="page-link"
                    href="#"
                  >
                    <i className="fa fa-angle-left"></i>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink
                    aria-label="Last"
                    className="page-link"
                    href="#"
                  >
                    <i className="fa fa-angle-double-left"></i>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item " active>
                  <PaginationLink className="page-link" href="#">
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item disabled">
                  <span className="page-link">...</span>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    10
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item page-0">
                  <PaginationLink
                    aria-label="Next"
                    className="page-link"
                    href="#"
                  >
                    <i className="fa fa-angle-right"></i>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink
                    aria-label="Last"
                    className="page-link"
                    href="#"
                  >
                    <i className="fa fa-angle-double-right"></i>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </Nav>
            {/* <!-- pagination-wrapper --> */}
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
              <code className="language-markup mb-0">
                {`
    <Nav aria-label="Page navigation">
    <Pagination className="pagination pagination-success mb-0">
      <PaginationItem className="page-item page-0">
        <PaginationLink
          aria-label="Next"
          className="page-link"
          href="#"
        >
          <i className="fa fa-angle-left"></i>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink
          aria-label="Last"
          className="page-link"
          href="#"
        >
          <i className="fa fa-angle-double-left"></i>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item " active>
        <PaginationLink className="page-link" href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item disabled">
        <span className="page-link">...</span>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          10
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item page-0">
        <PaginationLink
          aria-label="Next"
          className="page-link"
          href="#"
        >
          <i className="fa fa-angle-right"></i>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink
          aria-label="Last"
          className="page-link"
          href="#"
        >
          <i className="fa fa-angle-double-right"></i>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
    </Nav>
                `}
              </code>
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
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col md="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Model Pagination2</CardTitle>
          </CardHeader>
          <CardBody>
            <Nav aria-label="Page navigation example">
              <Pagination className="pagination">
                <PaginationItem className="page-item">
                  <PaginationLink
                    className="page-link"
                    href="#"
                    aria-label="Previous"
                  >
                    <i className="fa fa-angle-left"></i>
                    <span className="sr-only">Previous</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink
                    className="page-link"
                    href="#"
                    aria-label="Next"
                  >
                    <i className="fa fa-angle-right"></i>
                    <span className="sr-only">Next</span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </Nav>
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
          <figure className="highlight mb-0" id="element5">
            <pre ref={elementRef5}>
              <code className="language-markup mb-0">
                {`
    <Nav aria-label="Page navigation example">
    <Pagination className="pagination">
      <PaginationItem className="page-item">
        <PaginationLink
          className="page-link"
          href="#"
          aria-label="Previous"
        >
          <i className="fa fa-angle-left"></i>
          <span className="sr-only">Previous</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink
          className="page-link"
          href="#"
          aria-label="Next"
        >
          <i className="fa fa-angle-right"></i>
          <span className="sr-only">Next</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
              </Nav>
                `}
              </code>
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
      </Col>
      <Col md="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Pagination left alignment</CardTitle>
          </CardHeader>
          <CardBody>
            <nav aria-label="Page navigation example">
              <Pagination className="pagination ">
                <PaginationItem className="page-item " disabled>
                  <PaginationLink className="page-link" href="#" tabIndex={-1}>
                    <i className="fa fa-angle-left"></i>
                    <span className="sr-only">Previous</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item active">
                  <PaginationLink className="page-link" href="#">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    <i className="fa fa-angle-right"></i>
                    <span className="sr-only">Next</span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </nav>
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
          <figure className="highlight mb-0" id="element6">
            <pre ref={elementRef6}>
              <code className="language-markup mb-0">
               {`
    <nav aria-label="Page navigation example">
    <Pagination className="pagination ">
      <PaginationItem className="page-item " disabled>
        <PaginationLink className="page-link" href="#" tabIndex="-1">
          <i className="fa fa-angle-left"></i>
          <span className="sr-only">Previous</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item active">
        <PaginationLink className="page-link" href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          <i className="fa fa-angle-right"></i>
          <span className="sr-only">Next</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
             </nav>
               `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element6">
              <svg onClick={()=>{
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
      <Col md="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Pagination center alignment</CardTitle>
          </CardHeader>
          <CardBody>
            <nav aria-label="Page navigation example">
              <Pagination className="pagination justify-content-center">
                <PaginationItem className="page-item " disabled>
                  <PaginationLink className="page-link" href="#" tabIndex={-1}>
                    <i className="fa fa-angle-left"></i>
                    <span className="sr-only">Previous</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item " active>
                  <PaginationLink className="page-link" href="#">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    <i className="fa fa-angle-right"></i>
                    <span className="sr-only">Next</span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </nav>
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
          <figure className="highlight mb-0" id="element7">
            <pre ref={elementRef7}>
              <code className="language-markup mb-0">
                {`
    <nav aria-label="Page navigation example">
      <Pagination className="pagination justify-content-center">
        <PaginationItem className="page-item " disabled>
          <PaginationLink className="page-link" href="#" tabIndex="-1">
            <i className="fa fa-angle-left"></i>
            <span className="sr-only">Previous</span>
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="page-item">
          <PaginationLink className="page-link" href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="page-item " active>
          <PaginationLink className="page-link" href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="page-item">
          <PaginationLink className="page-link" href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="page-item">
          <PaginationLink className="page-link" href="#">
            <i className="fa fa-angle-right"></i>
            <span className="sr-only">Next</span>
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </nav>
            `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element7">
              <svg onClick={()=>{
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
      <Col md="12" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Pagination Right Alignment</CardTitle>
          </CardHeader>
          <CardBody>
            <nav aria-label="Page navigation example">
              <Pagination className="pagination justify-content-end">
                <PaginationItem className="page-item" disabled>
                  <PaginationLink className="page-link" href="#" tabIndex={-1}>
                    <i className="fa fa-angle-left"></i>
                    <span className="sr-only">Previous</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item " active>
                  <PaginationLink className="page-link" href="#">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link" href="#">
                    <i className="fa fa-angle-right"></i>
                    <span className="sr-only">Next</span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </nav>
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
          <figure className="highlight mb-0" id="element8">
            <pre ref={elementRef8}>
              <code className="language-markup mb-0">
                {`
    <nav aria-label="Page navigation example">
    <Pagination className="pagination justify-content-end">
      <PaginationItem className="page-item" disabled>
        <PaginationLink className="page-link" href="#" tabIndex="-1">
          <i className="fa fa-angle-left"></i>
          <span className="sr-only">Previous</span>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item " active>
        <PaginationLink className="page-link" href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="page-item">
        <PaginationLink className="page-link" href="#">
          <i className="fa fa-angle-right"></i>
          <span className="sr-only">Next</span>
        </PaginationLink>
      </PaginationItem>
    </Pagination>
              </nav>
                
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element8">
              <svg onClick={()=>{
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
    </Row>
  </div>
)
  };

Paginations.propTypes = {};

Paginations.defaultProps = {};

export default Paginations;
