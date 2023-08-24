import React, { LegacyRef, useRef } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  Col,
  Row,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";



const Popover = () => {

  //clipboard functions
  const elementRef : LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef2: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef3: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)

  //clipboard function for ShowCode



  let CopytoClipBoard = (ele: { current?: HTMLElement | null }) => {
    let data = ele.current?.innerText
    navigator.clipboard.writeText(data || '')
    alert("Text copied successfully")
  }

  return (

    <div>
      <PageHeaders
        title="Tooltip and Popover"
        home="Home"
        name="Elements"
        fonticonsname="Tooltip and Popover"
      />

      <Row>
        <Col lg="12">
          {/* <!--div--> */}
          <Card className="mb-4" id="popover">
            <CardHeader>
              <CardTitle>Default Popover</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="form-label mb-2">Static Example</div>
              <div className="popover-static-demo mb-4 border br-3 pb-6">
                <Row className="row-sm">
                  <Col md="6" className=" mt-4">
                    <div className="popover bs-popover-top">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover top</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" className=" mt-4">
                    <div className="popover bs-popover-bottom">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Bottom</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" className=" mt-4">
                    <div className="popover bs-popover-start">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Left</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" className=" mt-4">
                    <div className="popover bs-popover-end">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Right</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="form-label mb-2">Example</div>
              <div className="px-4 bg-light border br-3 pt-4 pb-5">
                <Row className="row-sm text-center">
                  
                  <Col sm="6" lg="3" className="mt-3">
                    <Button
                      className="btn btn-secondary"
                      id="top"
                    >
                      Click me
                    </Button>
                    <UncontrolledPopover placement="top" target="top">
                      <PopoverHeader>Popover Top</PopoverHeader>
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                      </PopoverBody>
                    </UncontrolledPopover>
                  </Col>
                  <Col sm="6" lg="3" className="mt-3">
                    <Button
                      color=""
                      className="btn btn-secondary"
                      data-bs-container="body"
                      data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      id="bottom"
                      data-bs-popover-color="default"
                      data-bs-toggle="popover"
                      title="Popover bottom"
                      type="button"
                    >
                      Click me
                    </Button>
                    <UncontrolledPopover placement="bottom" target="bottom">
                      <PopoverHeader>Popover Bottom</PopoverHeader>
                      <PopoverBody style={{ margin: 0 }}>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                      </PopoverBody>
                    </UncontrolledPopover>
                  </Col>
                  <Col sm="6" lg="3" className="mt-3">
                    <Button
                      color=""
                      className="btn btn-secondary"
                      data-bs-container="body"
                      data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      id="left"
                      data-bs-popover-color="default"
                      data-bs-toggle="popover"
                      title="Popover left"
                      type="button"
                    >
                      Click me
                    </Button>
                    <UncontrolledPopover placement="left" target="left">
                      <PopoverHeader>Popover left</PopoverHeader>
                      <PopoverBody style={{ margin: 0 }}>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                      </PopoverBody>
                    </UncontrolledPopover>
                  </Col>
                  <Col sm="6" lg="3" className="mt-3">
                    <Button
                      color=""
                      className="btn btn-secondary"
                      data-bs-container="body"
                      data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      id="right"
                      data-bs-popover-color="default"
                      data-bs-toggle="popover"
                      title="Popover right"
                      type="button"
                    >
                      Click me
                    </Button>
                    <UncontrolledPopover placement="right" target="right">
                      <PopoverHeader>Popover right</PopoverHeader>
                      <PopoverBody style={{ margin: 0 }}>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                      </PopoverBody>
                    </UncontrolledPopover>
                  </Col>
                </Row>
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
    <Row className="row-sm text-center">
    <Col sm="6" lg="3" className="mt-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        id="top"
        data-bs-popover-color="default"
        data-bs-toggle="popover"
        title="Popover top"
        type="button"
      >
        Click me
      </Button>
      <UncontrolledPopover placement="top" target="top">
        <PopoverHeader>Popover top</PopoverHeader>
        <PopoverBody style={{ margin: 0 }}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </UncontrolledPopover>
    </Col>
    <Col sm="6" lg="3" className="mt-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        id="bottom"
        data-bs-popover-color="default"
        data-bs-toggle="popover"
        title="Popover bottom"
        type="button"
      >
        Click me
      </Button>
      <UncontrolledPopover placement="bottom" target="bottom">
        <PopoverHeader>Popover Bottom</PopoverHeader>
        <PopoverBody style={{ margin: 0 }}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </UncontrolledPopover>
    </Col>
    <Col sm="6" lg="3" className="mt-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        id="left"
        data-bs-popover-color="default"
        data-bs-toggle="popover"
        title="Popover left"
        type="button"
      >
        Click me
      </Button>
      <UncontrolledPopover placement="left" target="left">
        <PopoverHeader>Popover left</PopoverHeader>
        <PopoverBody style={{ margin: 0 }}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </UncontrolledPopover>
    </Col>
    <Col sm="6" lg="3" className="mt-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        id="right"
        data-bs-popover-color="default"
        data-bs-toggle="popover"
        title="Popover right"
        type="button"
      >
        Click me
      </Button>
      <UncontrolledPopover placement="right" target="right">
        <PopoverHeader>Popover right</PopoverHeader>
        <PopoverBody style={{ margin: 0 }}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </UncontrolledPopover>
    </Col>
  </Row>           
               
               `}
                </code>
              </pre>
              <div className="clipboard-icon" data-clipboard-target="#element1">
                <svg
                  onClick={() => {
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
          {/* <!--/div--> */}
          {/* <!--div--> */}
          <Card className="mb-4" id="popover1">
            <CardHeader>
              <CardTitle>Colored Head Popover</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="form-label mb-2">Static Example</div>
              <div className="popover-static-demo mb-4">
                <Row className="row-sm">
                  <Col md="6" className="">
                    <div className="popover popover-head-primary bs-popover-top">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover top</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" className=" mt-5 mt-md-0">
                    <div className="popover popover-head-secondary bs-popover-bottom">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Bottom</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="form-label mb-2">Example</div>
              <div className="px-4 bg-light border br-3 pt-4 pb-5">
                <Row className="row-sm text-center">
                  <Col sm="6" lg="3" className="  mt-3 text-center">
                    <Button
                      color=""
                      className="btn btn-secondary"
                      data-bs-container="body"
                      data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      id="Coloredtop"
                      data-bs-popover-color="head-primary"
                      title="Popover top"
                      type="button"
                    >
                      Click me
                    </Button>
                    <UncontrolledPopover
                      placement="top"
                      target="Coloredtop"
                      className="popover-head-primary"
                    >
                      <PopoverHeader>Popover top</PopoverHeader>
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                      </PopoverBody>
                    </UncontrolledPopover>
                  </Col>
                  <Col sm="6" lg="3" className=" mt-3 text-center">
                    <Button
                      color=""
                      className="btn btn-secondary"
                      data-bs-container="body"
                      data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      id="Coloredbottom"
                      data-bs-popover-color="head-secondary"
                      title="Popover bottom"
                      type="button"
                    >
                      Click me
                    </Button>
                    <UncontrolledPopover
                      placement="bottom"
                      target="Coloredbottom"
                      className="popover-head-secondary"
                    >
                      <PopoverHeader>Popover bottom</PopoverHeader>
                      <PopoverBody style={{ margin: 0 }}>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                      </PopoverBody>
                    </UncontrolledPopover>
                  </Col>
                </Row>
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
            <figure className="highlight mb-0" id="element2">
              <pre ref={elementRef2}>
                <code className="language-markup mb-0">
                  {`
     <Row className="row-sm text-center">
     <Col sm="6" lg="3" className="  mt-3 text-center">
       <Button
         color=""
         className="btn btn-secondary"
         data-bs-container="body"
         data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
         id="Coloredtop"
         data-bs-popover-color="head-primary"
         title="Popover top"
         type="button"
       >
         Click me
       </Button>
       <UncontrolledPopover
         placement="top"
         target="Coloredtop"
         className="popover-head-primary"
       >
         <PopoverHeader>Popover top</PopoverHeader>
         <PopoverBody style={{ margin: 0 }}>
           Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
         </PopoverBody>
       </UncontrolledPopover>
     </Col>
     <Col sm="6" lg="3" className=" mt-3 text-center">
       <Button
         color=""
         className="btn btn-secondary"
         data-bs-container="body"
         data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
         id="bottom"
         data-bs-popover-color="head-secondary"
         title="Popover bottom"
         type="button"
       >
         Click me
       </Button>
       <UncontrolledPopover
         placement="bottom"
         target="bottom"
         className="popover-head-secondary"
       >
         <PopoverHeader>Popover bottom</PopoverHeader>
         <PopoverBody style={{ margin: 0 }}>
           Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
         </PopoverBody>
       </UncontrolledPopover>
     </Col>
   </Row>           
               
               `}
                </code>
              </pre>
              <div className="clipboard-icon" data-clipboard-target="#element2">
                <svg
                  onClick={() => {
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
          {/* <!--/div--> */}
          {/* <!--div--> */}
          <div className="card" id="popover2">
            <CardHeader>
              <CardTitle>Full Colored Popover</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="form-label mb-2">Static Example</div>
              <div className="popover-static-demo mb-4 pb-6">
                <Row className="row-sm">
                  <Col md="6" className=" mt-4">
                    <div className="popover popover-primary bs-popover-top">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover top</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md="6" className=" mt-4">
                    <div className="popover popover-secondary bs-popover-bottom">
                      <div className="popover-arrow"></div>
                      <h3 className="popover-header">Popover Bottom</h3>
                      <div className="popover-body">
                        <p>
                          Sed posuere consectetur est at lobortis. Aenean eu leo
                          quam. Pellentesque ornare sem lacinia quam venenatis
                          vestibulum.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="form-label mb-2">Example</div>
              <div className="px-4 bg-light border br-3 pb-5 pt-4">
                <Row className="row-sm text-center">
                  <Col sm="6" lg="3" className=" mt-3">
                    <Button
                      color=""
                      className="btn btn-secondary"
                      data-bs-container="body"
                      data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      id="topfullcolor"
                      data-bs-popover-color="primary"
                      title="Popover top"
                      type="button"
                    >
                      Click me
                    </Button>
                    <UncontrolledPopover placement="top" target="topfullcolor" className="full-primary">
                      <PopoverHeader tag="h3" className="" >Popover top</PopoverHeader>
                      <PopoverBody >
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                      </PopoverBody >
                    </UncontrolledPopover>
                  </Col>
                  <Col sm="6" lg="3" className=" mt-3">
                    <Button
                      color=""
                      className="btn btn-secondary"
                      data-bs-container="body"
                      data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                      id="bottomfullcolor"
                      data-bs-popover-color="secondary"
                      title="Popover bottom"
                      type="button"
                    >
                      Click me
                    </Button>
                    <UncontrolledPopover
                      placement="bottom"
                      target="bottomfullcolor"
                      className="full-secondary"
                    >
                      <PopoverHeader tag="h3" >Popover bottom</PopoverHeader>
                      <PopoverBody>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                      </PopoverBody>
                    </UncontrolledPopover>
                  </Col>
                </Row>
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
    <Row className="row-sm text-center">
    <Col sm="6" lg="3" className=" mt-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        id="topfullcolor"
        data-bs-popover-color="primary"
        title="Popover top"
        type="button"
      >
        Click me
      </Button>
      <UncontrolledPopover placement="top" target="topfullcolor" className="full-primary">
        <PopoverHeader tag="h3">Popover top</PopoverHeader>
        <PopoverBody>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </UncontrolledPopover>
    </Col>
    <Col sm="6" lg="3" className=" mt-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        id="bottomfullcolor"
        data-bs-popover-color="secondary"
        title="Popover bottom"
        type="button"
      >
        Click me
      </Button>
      <UncontrolledPopover
        placement="bottom"
        target="bottomfullcolor"
        className="full-secondary"
      >
        <PopoverHeader tag="h3">Popover bottom</PopoverHeader>
        <PopoverBody>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </PopoverBody>
      </UncontrolledPopover>
    </Col>
  </Row>
              `}</code>
              </pre>
              <div className="clipboard-icon" data-clipboard-target="#element3">
                <svg
                  onClick={() => {
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
          </div>
          {/* <!--/div--> */}
        </Col>
      </Row>
    </div>
  )
};

Popover.propTypes = {};

Popover.defaultProps = {};

export default Popover;
