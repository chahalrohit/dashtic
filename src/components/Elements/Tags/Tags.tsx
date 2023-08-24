import React, { LegacyRef, useRef } from "react";
import user6 from "../../../assets/images/users/6.jpg";
import user14 from "../../../assets/images/users/14.jpg";
import user1 from "../../../assets/images/users/1.jpg";
import user4 from "../../../assets/images/users/4.jpg";
import user9 from "../../../assets/images/users/9.jpg";
import user12 from "../../../assets/images/users/12.jpg";
import user7 from "../../../assets/images/users/7.jpg";
import user11 from "../../../assets/images/users/11.jpg";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import { Link } from "react-router-dom";

const Tags = () => {

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
      title="Tags"
      home="Home"
      name="Elements"
      fonticonsname="Tags"
    />
    <Row>
      <Col lg="6" md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Default tag</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag">First tag</span>
              <span className="tag">Second tag</span>
              <span className="tag">Third tag</span>
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
  <div className="tags">
    <span className="tag">First tag</span>
    <span className="tag">Second tag</span>
    <span className="tag">Third tag</span>
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
      <Col lg="6" md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Link tag</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <Link to="#" className="tag">
                First tag
              </Link>
              <Link to="#" className="tag">
                Second tag
              </Link>
              <Link to="#" className="tag">
                Third tag
              </Link>
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
    <div className="tags">
      <Link to="#" className="tag">
        First tag
      </Link>
      <Link to="#" className="tag">
        Second tag
      </Link>
      <Link to="#" className="tag">
        Third tag
      </Link>
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
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Rounded tag</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag tag-rounded">First tag</span>
              <span className="tag tag-rounded">Second tag</span>
              <span className="tag tag-rounded">Third tag</span>
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
    <div className="tags">
      <span className="tag tag-rounded">First tag</span>
      <span className="tag tag-rounded">Second tag</span>
      <span className="tag tag-rounded">Third tag</span>
    </div>
              `}</code>
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
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Color tag</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag tag-blue">Blue tag</span>
              <span className="tag tag-azure">Azure tag</span>
              <span className="tag tag-indigo">Indigo tag</span>
              <span className="tag tag-purple">Purple tag</span>
              <span className="tag tag-pink">Pink tag</span>
              <span className="tag tag-red">Red tag</span>
              <span className="tag tag-orange">Orange tag</span>
              <span className="tag tag-yellow">Yellow tag</span>
              <span className="tag tag-lime">Lime tag</span>
              <span className="tag tag-green">Green tag</span>
              <span className="tag tag-teal">Teal tag</span>
              <span className="tag tag-cyan">Cyan tag</span>
              <span className="tag tag-gray">Gray tag</span>
              <span className="tag tag-gray-dark">Dark gray tag</span>
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
    <div className="tags">
      <span className="tag tag-blue">Blue tag</span>
      <span className="tag tag-azure">Azure tag</span>
      <span className="tag tag-indigo">Indigo tag</span>
      <span className="tag tag-purple">Purple tag</span>
      <span className="tag tag-pink">Pink tag</span>
      <span className="tag tag-red">Red tag</span>
      <span className="tag tag-orange">Orange tag</span>
      <span className="tag tag-yellow">Yellow tag</span>
      <span className="tag tag-lime">Lime tag</span>
      <span className="tag tag-green">Green tag</span>
      <span className="tag tag-teal">Teal tag</span>
      <span className="tag tag-cyan">Cyan tag</span>
      <span className="tag tag-gray">Gray tag</span>
      <span className="tag tag-gray-dark">Dark gray tag</span>
    </div>
              `}</code>
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
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">List of tags</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap">
              <p>
                You can create a list of tags with the{" "}
                <code className="highlighter-rouge">.tags</code> container.
              </p>
              <div className="tags">
                <span className="tag">First tag</span>
                <span className="tag">Second tag</span>
                <span className="tag">Third tag</span>
              </div>
              <p className="mt-4">
                If the list is very long, it will automatically wrap on multiple
                lines, while keeping all tags evenly spaced.
              </p>
              <div className="tags">
                <span className="tag">One</span>
                <span className="tag">Two</span>
                <span className="tag">Three</span>
                <span className="tag">Four</span>
                <span className="tag">Five</span>
                <span className="tag">Six</span>
                <span className="tag">Seven</span>
                <span className="tag">Eight</span>
                <span className="tag">Nine</span>
                <span className="tag">Ten</span>
                <span className="tag">Eleven</span>
                <span className="tag">Twelve</span>
                <span className="tag">Thirteen</span>
                <span className="tag">Fourteen</span>
                <span className="tag">Fifteen</span>
                <span className="tag">Sixteen</span>
                <span className="tag">Seventeen</span>
                <span className="tag">Eighteen</span>
                <span className="tag">Nineteen</span>
                <span className="tag">Twenty</span>
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
          <figure className="highlight mb-0" id="element5">
            <pre ref={elementRef5}>
              <code className="language-markup mb-0">{`
                  <div className="text-wrap">
                    <p>
                      You can create a list of tags with the{" "}
                      <code className="highlighter-rouge">.tags</code>{" "}
                      container.
                    </p>
                    <div className="tags">
                      <span className="tag">First tag</span>
                      <span className="tag">Second tag</span>
                      <span className="tag">Third tag</span>
                    </div>
                    <p className="mt-4">
                      If the list is very long, it will automatically wrap on
                      multiple lines, while keeping all tags evenly spaced.
                    </p>
                    <div className="tags">
                      <span className="tag">One</span>
                      <span className="tag">Two</span>
                      <span className="tag">Three</span>
                      <span className="tag">Four</span>
                      <span className="tag">Five</span>
                      <span className="tag">Six</span>
                      <span className="tag">Seven</span>
                      <span className="tag">Eight</span>
                      <span className="tag">Nine</span>
                      <span className="tag">Ten</span>
                      <span className="tag">Eleven</span>
                      <span className="tag">Twelve</span>
                      <span className="tag">Thirteen</span>
                      <span className="tag">Fourteen</span>
                      <span className="tag">Fifteen</span>
                      <span className="tag">Sixteen</span>
                      <span className="tag">Seventeen</span>
                      <span className="tag">Eighteen</span>
                      <span className="tag">Nineteen</span>
                      <span className="tag">Twenty</span>
                    </div>
                  </div>
              `}</code>
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
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Avatar tag</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag">
                <span
                  className="tag-avatar avatar"
                  style={{ backgroundImage: `url(${user6})` }}
                ></span>{" "}
                Victoria
              </span>
              <span className="tag">
                <span
                  className="tag-avatar avatar"
                  style={{ backgroundImage: `url(${user14})` }}
                ></span>{" "}
                Nathan
              </span>
              <span className="tag">
                <span
                  className="tag-avatar avatar"
                  style={{ backgroundImage: `url(${user1})` }}
                ></span>{" "}
                Alice
              </span>
              <span className="tag">
                <span
                  className="tag-avatar avatar"
                  style={{ backgroundImage: `url(${user4})` }}
                ></span>{" "}
                Rose
              </span>
              <span className="tag">
                <span
                  className="tag-avatar avatar"
                  style={{ backgroundImage: `url(${user9})` }}
                ></span>{" "}
                Peter
              </span>
              <span className="tag">
                <span
                  className="tag-avatar avatar"
                  style={{ backgroundImage: `url(${user12})` }}
                ></span>{" "}
                Wayne
              </span>
              <span className="tag">
                <span
                  className="tag-avatar avatar"
                  style={{ backgroundImage: `url(${user7})` }}
                ></span>{" "}
                Michelle
              </span>
              <span className="tag">
                <span
                  className="tag-avatar avatar"
                  style={{ backgroundImage: `url(${user11})` }}
                ></span>{" "}
                Debra
              </span>
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
                  <div className="tags">
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user6})}}
                      ></span>
                      Victoria
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user14})}}
                      ></span>
                      Nathan
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user1})}}
                      ></span>
                      Alice
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user4})}}
                      ></span>
                      Rose
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user9})}}
                      ></span>
                      Peter
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user12})}}
                      ></span>
                      Wayne
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage:url(${user7})}}
                      ></span>
                      Michelle
                    </span>
                    <span className="tag">
                      <span
                        className="tag-avatar avatar"
                        style={{ backgroundImage: url(${user11})}}
                      ></span>
                      Debra
                    </span>
                  </div>
              `}</code>
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
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Tag remove</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag">
                One
                <Link to="#" className="tag-addon">
                  <i className="fe fe-x"></i>
                </Link>
              </span>
              <span className="tag">
                Two
                <Link to="#" className="tag-addon">
                  <i className="fe fe-x"></i>
                </Link>
              </span>
              <span className="tag">
                Three
                <Link to="#" className="tag-addon">
                  <i className="fe fe-x"></i>
                </Link>
              </span>
              <span className="tag">
                Four
                <Link to="#" className="tag-addon">
                  <i className="fe fe-x"></i>
                </Link>
              </span>
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
                  <div className="tags">
                    <span className="tag">
                      One
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag">
                      Two
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag">
                      Three
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                    <span className="tag">
                      Four
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </span>
                  </div>
`}</code>
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
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Tag addons</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <div className="tag">
                npm
                <Link to="#" className="tag-addon">
                  <i className="fe fe-x"></i>
                </Link>
              </div>
              <div className="tag tag-danger">
                npm
                <span className="tag-addon">
                  <i className="fe fe-activity"></i>
                </span>
              </div>
              <div className="tag">
                bundle
                <span className="tag-addon tag-success">passing</span>
              </div>
              <span className="tag tag-dark">
                CSS gzip size
                <span className="tag-addon tag-warning">20.9 kB</span>
              </span>
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
            <pre ref={elementRef8}>
              <code className="language-markup mb-0">{`
              <div className="tags">
                    <div className="tag">
                      npm
                      <Link to="#" className="tag-addon">
                        <i className="fe fe-x"></i>
                      </Link>
                    </div>
                    <div className="tag tag-danger">
                      npm
                      <span className="tag-addon">
                        <i className="fe fe-activity"></i>
                      </span>
                    </div>
                    <div className="tag">
                      bundle
                      <span className="tag-addon tag-success">passing</span>
                    </div>
                    <span className="tag tag-dark">
                      CSS gzip size
                      <span className="tag-addon tag-warning">20.9 kB</span>
                    </span>
                  </div>
`}</code>
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
    </Row>
  </div>
)
  };

Tags.propTypes = {};

Tags.defaultProps = {};

export default Tags;
