import React, { LegacyRef, useRef } from "react";
import user1 from "../../../assets/images/users/1.jpg";
import user11 from "../../../assets/images/users/11.jpg";
import user10 from "../../../assets/images/users/10.jpg";
import user2 from "../../../assets/images/users/2.jpg";
import user3 from "../../../assets/images/users/3.jpg";
import user4 from "../../../assets/images/users/4.jpg";
import user5 from "../../../assets/images/users/5.jpg";
import user6 from "../../../assets/images/users/6.jpg";
import user7 from "../../../assets/images/users/7.jpg";
import user8 from "../../../assets/images/users/8.jpg";
import user9 from "../../../assets/images/users/9.jpg";
import user15 from "../../../assets/images/users/15.jpg";
import user13 from "../../../assets/images/users/13.jpg";
import user16 from "../../../assets/images/users/16.jpg";
import user14 from "../../../assets/images/users/14.jpg";
import user12 from "../../../assets/images/users/12.jpg";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import { Card, CardBody, Col, CardHeader, CardTitle, Row } from "reactstrap";

const Avatars = () => {
  //clipboard functions
const elementRef: LegacyRef<HTMLPreElement>= useRef <HTMLInputElement>(null)
const elementRef2: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef3: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef4: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef5: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef6: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef7: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef8: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef9: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef10: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef11: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef12: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)

//clipboard function for ShowCode

let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
  let data = ele.current?.innerText
  navigator.clipboard.writeText(data || '')
  alert("Text copied successfully")
  }

  return (

  <div>
    <PageHeaders
      title="Avatars"
      home="Home"
      name="Elements"
      fonticonsname="Avatars"
    />
    <Row className="row-deck">
      <Col md="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Simple Square Avatar</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="avatar-list">
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user1})` }}
              ></span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user2})` }}
              ></span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user1})` }}
              ></span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user2})` }}
              ></span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user3})` }}
              ></span>
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
              <code className="language-markup mb-0">
                {`
                  <div className="avatar-list">
                    <span
                      className="avatar"
                      style={{ backgroundImage:url(${user1})}}
                    ></span>
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user2})}}
                    ></span>
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user1})}}
                    ></span>
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user2})}}
                    ></span>
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user3})}}
                    ></span>
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
      <Col md="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Simple Round Avatar</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="avatar-list">
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user1})` }}
              ></span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user2})` }}
              ></span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user1})` }}
              ></span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user2})` }}
              ></span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user3})` }}
              ></span>
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
              <code className="language-markup mb-0">
                {`
                  <div className="avatar-list">
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user1})}}
                    ></span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user2})}}
                    ></span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user1})}}
                    ></span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user2})}}
                    ></span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user3})}}
                    ></span>
                  </div>
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
      <Col md="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Simple Radius Avatar</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="avatar-list">
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user1})` }}
              ></span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user2})` }}
              ></span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user1})` }}
              ></span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user2})` }}
              ></span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user3})` }}
              ></span>
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
              <code className="language-markup mb-0">
                {`
                  <div className="avatar-list">
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user1})}}
                    ></span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user2})}}
                    ></span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user1})}}
                    ></span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user2})}}
                    ></span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user3})}}
                    ></span>
                  </div>
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
      </Col>
      <Col md="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Avatar Size</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="avatar-list">
              <span
                className="avatar avatar-sm"
                style={{ backgroundImage: `url(${user4})` }}
              ></span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user3})` }}
              ></span>
              <span
                className="avatar avatar-md"
                style={{ backgroundImage: `url(${user5})` }}
              ></span>
              <span
                className="avatar avatar-lg"
                style={{ backgroundImage: `url(${user6})` }}
              ></span>
              <span
                className="avatar avatar-xl"
                style={{ backgroundImage: `url(${user4})` }}
              ></span>
              <span
                className="avatar avatar-xxl"
                style={{ backgroundImage: `url(${user7})` }}
              ></span>
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
              <code className="language-markup mb-0">
                {`
                  <div className="avatar-list">
                    <span
                      className="avatar avatar-sm"
                      style={{ backgroundImage:url(${user4})}}
                    ></span>
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user3})}}
                    ></span>
                    <span
                      className="avatar avatar-md"
                      style={{ backgroundImage: url(${user5})}}
                    ></span>
                    <span
                      className="avatar avatar-lg"
                      style={{ backgroundImage: url(${user6})}}
                    ></span>
                    <span
                      className="avatar avatar-xl"
                      style={{ backgroundImage: url(${user4})}}
                    ></span>
                    <span
                      className="avatar avatar-xxl"
                      style={{ backgroundImage: url(${user7})}}
                    ></span>
                  </div>
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
      <Col md="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Rounded Avatar Size</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="avatar-list">
              <span
                className="avatar avatar-sm brround"
                style={{ backgroundImage: `url(${user15})` }}
              ></span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user13})` }}
              ></span>
              <span
                className="avatar avatar-md brround"
                style={{ backgroundImage: `url(${user16})` }}
              ></span>
              <span
                className="avatar avatar-lg brround"
                style={{ backgroundImage: `url(${user7})` }}
              ></span>
              <span
                className="avatar avatar-xl brround"
                style={{ backgroundImage: `url(${user14})` }}
              ></span>
              <span
                className="avatar avatar-xxl brround"
                style={{ backgroundImage: `url(${user8})` }}
              ></span>
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
              <code className="language-markup mb-0">
                {`
                  <div className="avatar-list">
                    <span
                      className="avatar avatar-sm brround"
                      style={{ backgroundImage: url(${user15})}}
                    ></span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user13})}}
                    ></span>
                    <span
                      className="avatar avatar-md brround"
                      style={{ backgroundImage: url(${user16})}}
                    ></span>
                    <span
                      className="avatar avatar-lg brround"
                      style={{ backgroundImage: url(${user7})}}
                    ></span>
                    <span
                      className="avatar avatar-xl brround"
                      style={{ backgroundImage: url(${user14})}}
                    ></span>
                    <span
                      className="avatar avatar-xxl brround"
                      style={{ backgroundImage: url(${user8})}}
                    ></span>
                  </div>
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
      <Col md="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Radius Avatar Size</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="avatar-list">
              <span
                className="avatar avatar-sm bradius"
                style={{ backgroundImage: `url(${user15})` }}
              ></span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user13})` }}
              ></span>
              <span
                className="avatar avatar-md bradius"
                style={{ backgroundImage: `url(${user16})` }}
              ></span>
              <span
                className="avatar avatar-lg bradius"
                style={{ backgroundImage: `url(${user7})` }}
              ></span>
              <span
                className="avatar avatar-xl bradius"
                style={{ backgroundImage: `url(${user14})` }}
              ></span>
              <span
                className="avatar avatar-xxl bradius"
                style={{ backgroundImage: `url(${user8})` }}
              ></span>
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
              <code className="language-markup mb-0">
                {`
                  <div className="avatar-list">
                    <span
                      className="avatar avatar-sm bradius"
                      style={{ backgroundImage: url(${user15})}}
                    ></span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user13})}}
                    ></span>
                    <span
                      className="avatar avatar-md bradius"
                      style={{ backgroundImage: url(${user16})}}
                    ></span>
                    <span
                      className="avatar avatar-lg bradius"
                      style={{ backgroundImage: url(${user7})}}
                    ></span>
                    <span
                      className="avatar avatar-xl bradius"
                      style={{ backgroundImage: url(${user14})}}
                    ></span>
                    <span
                      className="avatar avatar-xxl bradius"
                      style={{ backgroundImage: url(${user8})}}
                    ></span>
                  </div>
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
      <Col md="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Avatar Status</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="avatar-list">
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user8})` }}
              ></span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user5})` }}
              >
                <span className="avatar-status"></span>
              </span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user9})` }}
              >
                <span className="avatar-status bg-red"></span>
              </span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user6})` }}
              >
                <span className="avatar-status bg-green"></span>
              </span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user7})` }}
              >
                <span className="avatar-status bg-yellow"></span>
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
              <code className="language-markup mb-0">
                {`
                  <div className="avatar-list">
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user8})}}
                    ></span>
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user5})}}
                    >
                      <span className="avatar-status"></span>
                    </span>
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user9})}}
                    >
                      <span className="avatar-status bg-red"></span>
                    </span>
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user6})}}
                    >
                      <span className="avatar-status bg-green"></span>
                    </span>
                    <span
                      className="avatar"
                      style={{ backgroundImage:url(${user7})}}
                    >
                      <span className="avatar-status bg-yellow"></span>
                    </span>
                  </div>
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
      <Col md="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Rounded Avatar Status</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="avatar-list">
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user9})` }}
              ></span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user15})` }}
              >
                <span className="avatar-status"></span>
              </span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user2})` }}
              >
                <span className="avatar-status bg-red"></span>
              </span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user16})` }}
              >
                <span className="avatar-status bg-green"></span>
              </span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user14})` }}
              >
                <span className="avatar-status bg-yellow"></span>
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
              <code className="language-markup mb-0">
                {`
                  <div className="avatar-list">
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user9})}}
                    ></span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user15})}}
                    >
                      <span className="avatar-status"></span>
                    </span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage:url(${user2})}}
                    >
                      <span className="avatar-status bg-red"></span>
                    </span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user16})}}
                    >
                      <span className="avatar-status bg-green"></span>
                    </span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage:url(${user7})}}
                    >
                      <span className="avatar-status bg-yellow"></span>
                    </span>
                  </div>
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
      <Col md="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Radius Avatar Status</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="avatar-list">
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user9})` }}
              ></span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user15})` }}
              >
                <span className="avatar-status"></span>
              </span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user2})` }}
              >
                <span className="avatar-status bg-red"></span>
              </span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user16})` }}
              >
                <span className="avatar-status bg-green"></span>
              </span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user7})` }}
              >
                <span className="avatar-status bg-yellow"></span>
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
          <figure className="highlight mb-0" id="element9">
            <pre ref={elementRef9}>
              <code className="language-markup mb-0">
                {`
                  <div className="avatar-list">
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user9})}}
                    ></span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user15})}}
                    >
                      <span className="avatar-status"></span>
                    </span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user2})}}
                    >
                      <span className="avatar-status bg-red"></span>
                    </span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user16})}}
                    >
                      <span className="avatar-status bg-green"></span>
                    </span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user7})}}
                    >
                      <span className="avatar-status bg-yellow"></span>
                    </span>
                  </div>
              `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element9">
              <svg onClick={()=>{
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
      <Col md="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Avatars List</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="avatar-list avatar-list-stacked">
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user10})` }}
              ></span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user8})` }}
              ></span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user9})` }}
              ></span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user10})` }}
              ></span>
              <span
                className="avatar"
                style={{ backgroundImage: `url(${user11})` }}
              ></span>
              <span className="avatar">+8</span>
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
            <pre ref={elementRef10}>
              <code className="language-markup mb-0">
                {`
                  <div className="avatar-list avatar-list-stacked">
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user10})}}
                    ></span>
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user8})}}
                    ></span>
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user9})}}
                    ></span>
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user10})}}
                    ></span>
                    <span
                      className="avatar"
                      style={{ backgroundImage: url(${user11})}}
                    ></span>
                    <span className="avatar">+8</span>
                  </div>
              `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element10">
              <svg onClick={()=>{
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
      <Col md="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Rounded Avatars List</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="avatar-list avatar-list-stacked">
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user12})` }}
              ></span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user2})` }}
              ></span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user9})` }}
              ></span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user2})` }}
              ></span>
              <span
                className="avatar brround"
                style={{ backgroundImage: `url(${user4})` }}
              ></span>
              <span className="avatar brround">+8</span>
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
            <pre ref={elementRef11}>
              <code className="language-markup mb-0">
                {`
                  <div className="avatar-list avatar-list-stacked">
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user12})}}
                    ></span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user2})}}
                    ></span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user9})}}
                    ></span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user2})}}
                    ></span>
                    <span
                      className="avatar brround"
                      style={{ backgroundImage: url(${user4})}}
                    ></span>
                    <span className="avatar brround">+8</span>
                  </div>
              `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element11">
              <svg onClick={()=>{
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
      <Col md="12" xl="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Radius Avatars List</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="avatar-list avatar-list-stacked">
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user12})` }}
              ></span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user2})` }}
              ></span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user9})` }}
              ></span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user2})` }}
              ></span>
              <span
                className="avatar bradius"
                style={{ backgroundImage: `url(${user4})` }}
              ></span>
              <span className="avatar bradius">+8</span>
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
            <pre ref={elementRef12}>
              <code className="language-markup mb-0">
                {`
                  <div className="avatar-list avatar-list-stacked">
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user12})}}
                    ></span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user2})}}
                    ></span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user9}) }}
                    ></span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user2})}}
                    ></span>
                    <span
                      className="avatar bradius"
                      style={{ backgroundImage: url(${user4})}}
                    ></span>
                    <span className="avatar bradius">+8</span>
                  </div>
              `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element12">
              <svg onClick={()=>{
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
  </div>
)
  };

Avatars.propTypes = {};

Avatars.defaultProps = {};

export default Avatars;
