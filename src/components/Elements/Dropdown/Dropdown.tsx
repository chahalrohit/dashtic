import React, { LegacyRef, useRef } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Dropdown = () => {

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

//clipboard function for ShowCode

let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
  let data = ele.current?.innerText
  navigator.clipboard.writeText(data || '')
  alert("Text copied successfully")
  }

  return (

  <div>
    <PageHeaders
      title="Dropdowns"
      home="Home"
      name="Elements"
      fonticonsname="Dropdowns"
    />

    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Single button dropdowns</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-default">
              <div className="panel-body p-0">
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-default dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-success dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-info dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
          <figure className="highlight mb-0" id="element1">
            <pre ref={elementRef}>
              <code className="language-markup mb-0">{`
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-success dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-info dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-warning dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>
                
`}</code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element1">
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
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Rounded button dropdowns</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-default">
              <div className="panel-body p-0">
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-default btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-primary btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-success btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-info btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-warning btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-danger btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
          <figure className="highlight mb-0" id="element2">
            <pre ref={elementRef2}>
              <code className="language-markup mb-0">{`
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-default btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-primary btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <DropdownItem className="divider"></DropdownItem>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-success btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-info btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-warning btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-danger btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>
                
`}</code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element2">
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
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Split button dropdowns</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-default">
              <div className="panel-body p-0">
                <UncontrolledDropdown className="btn-group mt-2 mb-2">
                  <Button color="" type="button" className="btn btn-default">
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-default dropdown-toggle me-1"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <div className="divider"></div>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button color="" type="button" className="btn btn-primary">
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button color="" type="button" className="btn btn-success">
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-success dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button color="" type="button" className="btn btn-info">
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-info dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button color="" type="button" className="btn btn-warning">
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button color="" type="button" className="btn btn-danger">
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
          <figure className="highlight mb-0" id="element3">
            <pre ref={elementRef3}>
              <code className="language-markup mb-0">{`
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-default"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-primary"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-success"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-success dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                             <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button color="" type="button" className="btn btn-info">
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-info dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-warning"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-warning dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-danger"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                             <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element3">
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
      </Col>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Rounded Split button dropdowns</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-default">
              <div className="panel-body p-0">
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-pill btn-default"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-pill btn-default dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-pill btn-primary"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-pill btn-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-pill btn-success"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-pill btn-success dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-pill btn-info"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-pill btn-info dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-pill btn-warning"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-warning btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                       <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-pill btn-danger"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-pill btn-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
          <figure className="highlight mb-0" id="element4">
            <pre ref={elementRef4}>
              <code className="language-markup mb-0">{`
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-default"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-default dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-primary"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <DropdownItem className="divider"></DropdownItem>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-success"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-success dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-info"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-info dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-warning"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-warning btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                             <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <DropdownItem className="divider"></DropdownItem>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-danger"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>`}
                
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element4">
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
      </Col>

      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">
              Single Square outline button dropdowns
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-default">
              <div className="panel-body p-0">
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-success dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-info dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
          <figure className="highlight mb-0" id="element5">
            <pre ref={elementRef5}>
              <code className="language-markup mb-0">{`
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-success dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-info dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-warning dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>`}
                
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element5">
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
      </Col>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Rounded button dropdowns</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-default">
              <div className="panel-body p-0">
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-primary btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-success btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-info btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-warning btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Action <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
          <figure className="highlight mb-0" id="element6">
            <pre ref={elementRef6}>
              <code className="language-markup mb-0">{`
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-primary btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-success btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-info btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-warning btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          Action <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element6">
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
      </Col>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Split button dropdowns</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-default">
              <div className="panel-body p-0">
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-outline-primary"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-success dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-outline-info"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-info dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-outline-warning"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
          <figure className="highlight mb-0" id="element7">
            <pre ref={elementRef7}>
              <code className="language-markup mb-0">{`
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-success dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-outline-info"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-info dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-outline-warning"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-warning dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element7">
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
      </Col>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Rounded Split button dropdowns</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-default">
              <div className="panel-body p-0">
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-pill btn-outline-primary"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-pill btn-outline-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                       <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-pill btn-outline-success"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-pill btn-outline-success dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-pill btn-outline-info"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-pill btn-outline-info dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-pill btn-outline-warning"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-outline-warning btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <Button
                    color=""
                    type="button"
                    className="btn btn-pill btn-outline-danger"
                  >
                    Action
                  </Button>
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-pill btn-outline-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
          <figure className="highlight mb-0" id="element8">
            <pre ref={elementRef8}>
              <code className="language-markup mb-0">{`
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-primary"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                             <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-success"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-success dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-info"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-info dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-warning"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-outline-warning btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <Button
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-danger"
                        >
                          Action
                        </Button>
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-pill btn-outline-danger dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <span className="caret"></span>
                          <span className="sr-only">Toggle Dropdown</span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <i className="fa fa-angle-up mx-2"></i>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>`}
                
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element8">
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
      </Col>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Dropup variation</CardTitle>
          </CardHeader>
          <CardBody>
            <UncontrolledDropdown className="dropup btn-group mt-2 mb-2 me-2">
              <DropdownToggle
                color=""
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Dropup1
                <span className="caret"></span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu">
                <DropdownItem href="#">HTML</DropdownItem>
                <DropdownItem href="#">CSS</DropdownItem>
                <DropdownItem href="#">JavaScript</DropdownItem>
                <li className="divider"></li>
                <DropdownItem href="#">About Us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* <!-- Split dropup button --> */}
            <UncontrolledDropdown className="dropup btn-group mt-2 mb-2">
              <DropdownToggle
                color=""
                className="btn btn-info dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Dropup2
                <span className="caret"></span>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu">
                <DropdownItem href="#">HTML</DropdownItem>
                <DropdownItem href="#">CSS</DropdownItem>
                <DropdownItem href="#">JavaScript</DropdownItem>
                <li className="divider"></li>
                <DropdownItem href="#">About Us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
          <figure className="highlight mb-0" id="element9">
            <pre ref={elementRef9}>
              <code className="language-markup mb-0">{`
                
                  <UncontrolledDropdown className="dropup btn-group mt-2 mb-2 me-2">
                    <DropdownToggle
                      color=""
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Dropup1
                      <span className="caret"></span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem href="#">HTML</DropdownItem>
                      <DropdownItem href="#">CSS</DropdownItem>
                      <DropdownItem href="#">JavaScript</DropdownItem>
                      <li className="divider"></li>
                      <DropdownItem href="#">About Us</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  {/* <!-- Split dropup button --> */}
                  <UncontrolledDropdown className="dropup btn-group mt-2 mb-2">
                    <DropdownToggle
                      color=""
                      className="btn btn-info dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Dropup2
                      <span className="caret"></span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu">
                      <DropdownItem href="#">HTML</DropdownItem>
                      <DropdownItem href="#">CSS</DropdownItem>
                      <DropdownItem href="#">JavaScript</DropdownItem>
                      <li className="divider"></li>
                      <DropdownItem href="#">About Us</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element9">
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
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Icon Drop Downs dropdowns</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="panel panel-default">
              <div className="panel-body p-0">
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-facebook btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa fa-facebook"></i>{" "}
                    <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-twitter btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa fa-twitter"></i>{" "}
                    <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-google btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa fa-google"></i>{" "}
                    <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-youtube btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa fa-youtube "></i>
                    <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-vimeo btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa fa-vimeo"></i>
                    <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                  <DropdownToggle
                    color=""
                    type="button"
                    className="btn btn-github btn-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa fa-github"></i>{" "}
                    <span className="caret"></span>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu" role="menu">
                    <DropdownItem className="dropdown-plus-title">
                      Dropdown
                      <i className="fa fa-angle-up mx-2" aria-hidden="true"></i>
                    </DropdownItem>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <li className="divider"></li>
                    <DropdownItem href="#">Separated link</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
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
          <figure className="highlight mb-0" id="element10">
            <pre ref={elementRef10}>
              <code className="language-markup mb-0">{`
                
                  <div className="panel panel-default">
                    <div className="panel-body p-0">
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-facebook btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-facebook"></i>{" "}
                          <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-twitter btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-twitter"></i>{" "}
                          <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-google btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-google"></i>{" "}
                          <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-youtube btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-youtube "></i>
                          <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-vimeo btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-vimeo"></i>
                          <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <UncontrolledDropdown className="me-1 btn-group mt-2 mb-2">
                        <DropdownToggle
                          color=""
                          type="button"
                          className="btn btn-github btn-pill dropdown-toggle"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-github"></i>{" "}
                          <span className="caret"></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu" role="menu">
                          <DropdownItem className="dropdown-plus-title">
                            Dropdown
                            <b
                              className="fa fa-angle-up"
                              aria-hidden="true"
                            ></b>
                          </DropdownItem>
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">
                            Something else here
                          </DropdownItem>
                          <li className="divider"></li>
                          <DropdownItem href="#">Separated link</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                  </div>`}
                
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element10">
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
  </div>
)
          };

Dropdown.propTypes = {};

Dropdown.defaultProps = {};

export default Dropdown;
