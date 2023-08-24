import React, { LegacyRef, useRef } from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import user4 from "../../../assets/images/users/4.jpg";
import user9 from "../../../assets/images/users/9.jpg";
import user8 from "../../../assets/images/users/8.jpg";
import user11 from "../../../assets/images/users/11.jpg";
import user12 from "../../../assets/images/users/12.jpg";
import user2 from "../../../assets/images/users/2.jpg";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const MediaObject = () => {

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
      title="MediaObject"
      home="Home"
      name="Elements"
      fonticonsname="MediaObject"
    />

    {/* <!--End Page header--> */}

    <Row>
      <Col lg="12">
        {/* <!--div--> */}
        <Card id="media">
          <CardHeader>
            <CardTitle>Basic Example</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="border p-4">
              <div className="media d-block d-sm-flex">
                <img
                  alt=""
                  className="avatar avatar-xl brround me-3"
                  src={user4}
                />
                <div className="media-body pt-4 pt-sm-0">
                  <h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
                  Lorem Ipsum generators on the Internet as necessary aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </div>
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
    <div className="border p-4">
      <div className="media d-block d-sm-flex">
        <img
          alt=""
          className="avatar avatar-xl brround me-3"
          src={user4}
        />
        <div className="media-body pt-4 pt-sm-0">
          <h5 className="mg-b-5 tx-inverse tx-15">
            Media heading
          </h5>
          Lorem Ipsum generators on the Internet as necessary aut
          odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </div>
      </div>
    </div>`}
              </code>
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
        {/* <!--/div--> */}
        {/* <!--div--> */}
        <Card id="media1">
          <CardHeader>
            <CardTitle>Nesting</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="border p-4">
              <div className="media d-block d-sm-flex">
                <img
                  alt=""
                  className="avatar avatar-xl brround me-3"
                  src={user9}
                />
                <div className="media-body pt-4 pt-sm-0">
                  <h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
                  <p>
                    Lorem Ipsum generators on the Internet as necessary aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit
                  </p>
                  <div className="media d-block d-sm-flex mg-t-25">
                    <img
                      alt=""
                      className="avatar avatar-xl brround me-3"
                      src={user8}
                    />
                    <div className="media-body">
                      <h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
                      Lorem Ipsum generators on the Internet as necessary aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit
                    </div>
                  </div>
                </div>
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
    <div className="border p-4">
      <div className="media d-block d-sm-flex">
        <img
          alt=""
          className="avatar avatar-xl brround me-3"
          src={user9}
        />
        <div className="media-body pt-4 pt-sm-0">
          <h5 className="mg-b-5 tx-inverse tx-15">
            Media heading
          </h5>
          <p>
            Lorem Ipsum generators on the Internet as necessary
            aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit
          </p>
          <div className="media d-block d-sm-flex mg-t-25">
            <img
              alt=""
              className="avatar avatar-xl brround me-3"
              src={user8}
            />
            <div className="media-body">
              <h5 className="mg-b-5 tx-inverse tx-15">
                Media heading
              </h5>
              Lorem Ipsum generators on the Internet as necessary
              aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit
            </div>
          </div>
        </div>
      </div>
    </div>
                  `}
              </code>
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
        {/* <!--/div--> */}
        {/* <!--div--> */}
        <Card id="media2">
          <CardHeader>
            <CardTitle>Alignment</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="border p-4">
              <div className="media d-block d-sm-flex">
                <img
                  alt=""
                  className="avatar avatar-xl brround me-3 align-self-center"
                  src={user11}
                />
                <div className="media-body pt-4 pt-sm-0">
                  <h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
                  Lorem Ipsum generators on the Internet as necessary aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                  Lorem Ipsum generators on the Internet as necessary aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </div>
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
    <div className="border p-4">
      <div className="media d-block d-sm-flex">
        <img
          alt=""
          className="avatar avatar-xl brround me-3 align-self-center"
          src={user11}
        />
        <div className="media-body pt-4 pt-sm-0">
          <h5 className="mg-b-5 tx-inverse tx-15">
            Media heading
          </h5>
          Lorem Ipsum generators on the Internet as necessary aut
          odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit Lorem Ipsum generators on
          the Internet as necessary aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit
        </div>
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
        {/* <!--/div--> */}
        {/* <!--div--> */}
        <Card id="media3">
          <CardHeader>
            <CardTitle>Order</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="border p-4">
              <div className="media d-block d-sm-flex">
                <div className="media-body mb-4 mb-sm-0">
                  <h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
                  Lorem Ipsum generators on the Internet as necessary aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </div>
                <img
                  alt=""
                  className="avatar avatar-xl brround ms-3"
                  src={user12}
                />
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
    <div className="border p-4">
      <div className="media d-block d-sm-flex">
        <div className="media-body mb-4 mb-sm-0">
          <h5 className="mg-b-5 tx-inverse tx-15">
            Media heading
          </h5>
          Lorem Ipsum generators on the Internet as necessary aut
          odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </div>
        <img
          alt=""
          className="avatar avatar-xl brround ms-3"
          src={user12}
        />
      </div>
    </div>
                  `}
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
        {/* <!--/div--> */}

        {/* <!--div--> */}
        <Card id="media4">
          <CardHeader>
            <CardTitle>Media List</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="border p-4">
              <ul className="list-unstyled mb-0">
                <li className="media d-block d-sm-flex border-0">
                  <img
                    alt=""
                    className="avatar avatar-xl brround me-3"
                    src={user2}
                  />
                  <div className="media-body pt-4 pt-sm-0">
                    <h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
                    Lorem Ipsum generators on the Internet as necessary aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit
                  </div>
                </li>
                <li className="media d-block d-sm-flex mt-5 border-0">
                  <img
                    alt=""
                    className="avatar avatar-xl brround me-3"
                    src={user12}
                  />
                  <div className="media-body pt-4 pt-sm-0">
                    <h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
                    Lorem Ipsum generators on the Internet as necessary aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit
                  </div>
                </li>
                <li className="media d-block d-sm-flex mt-5 border-0">
                  <img
                    alt=""
                    className="avatar avatar-xl brround me-3"
                    src={user2}
                  />
                  <div className="media-body pt-4 pt-sm-0">
                    <h5 className="mg-b-5 tx-inverse tx-15">Media heading</h5>
                    Lorem Ipsum generators on the Internet as necessary aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit
                  </div>
                </li>
              </ul>
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
    <div className="border p-4">
      <ul className="list-unstyled mb-0">
        <li className="media d-block d-sm-flex border-0">
          <img
            alt=""
            className="avatar avatar-xl brround me-3"
            src={user2}
          />
          <div className="media-body pt-4 pt-sm-0">
            <h5 className="mg-b-5 tx-inverse tx-15">
              Media heading
            </h5>
            Lorem Ipsum generators on the Internet as necessary
            aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit
          </div>
        </li>
        <li className="media d-block d-sm-flex mt-5 border-0">
          <img
            alt=""
            className="avatar avatar-xl brround me-3"
            src={user12}
          />
          <div className="media-body pt-4 pt-sm-0">
            <h5 className="mg-b-5 tx-inverse tx-15">
              Media heading
            </h5>
            Lorem Ipsum generators on the Internet as necessary
            aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit
          </div>
        </li>
        <li className="media d-block d-sm-flex mt-5 border-0">
          <img
            alt=""
            className="avatar avatar-xl brround me-3"
            src={user2}
          />
          <div className="media-body pt-4 pt-sm-0">
            <h5 className="mg-b-5 tx-inverse tx-15">
              Media heading
            </h5>
            Lorem Ipsum generators on the Internet as necessary
            aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt.
            Neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit
          </div>
        </li>
      </ul>
    </div>
               `}
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
        {/* <!--/div--> */}
      </Col>
    </Row>
  </div>
)
  };

MediaObject.propTypes = {};

MediaObject.defaultProps = {};

export default MediaObject;
