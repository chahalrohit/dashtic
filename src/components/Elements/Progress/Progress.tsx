import React, { LegacyRef, useRef } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Progress,
  Row,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Progressbar = () => {

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
      title="Progress"
      home="Home"
      name="Elements"
      fonticonsname="Progress"
    />

    <Row>
      <Col md="6" sm="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Basic Progress</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="mb-3">
              <Progress className="" color="default" value="7"></Progress>
            </div>
            <div className="mb-3">
              <Progress className="" color="primary" value="20"></Progress>
            </div>
            <div className="mb-3">
              <Progress className="" color="primary" value="40"></Progress>
            </div>
            <div className="mb-3">
              <Progress className="" color="primary" value="60"></Progress>
            </div>
            <div className="">
              <Progress className="" color="primary" value="80"></Progress>
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
  <div className="mb-3">
    <Progress className="" color="default" value="7"></Progress>
  </div>
  <div className="mb-3">
    <Progress className="" color="primary" value="20"></Progress>
  </div>
  <div className="mb-3">
    <Progress className="" color="primary" value="40"></Progress>
  </div>
  <div className="mb-3">
    <Progress className="" color="primary" value="60"></Progress>
  </div>
  <div className="">
    <Progress className="" color="primary" value="80"></Progress>
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
      <Col md="6" sm="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Contextual Progress</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="mb-3">
              <Progress className="" color="pink" value="7"></Progress>
            </div>
            <div className="mb-3">
              <Progress className="" color="green" value="20"></Progress>
            </div>
            <div className="mb-3">
              <Progress className="" color="yellow" value="40"></Progress>
            </div>
            <div className="mb-3">
              <Progress className="" color="blue" value="60"></Progress>
            </div>
            <div className="">
              <Progress className="" color="orange" value="80"></Progress>
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
  <div className="mb-3">
    <Progress className="" color="pink" value="7"></Progress>
  </div>
  <div className="mb-3">
    <Progress className="" color="green" value="20"></Progress>
  </div>
  <div className="mb-3">
    <Progress className="" color="yellow" value="40"></Progress>
  </div>
  <div className="mb-3">
    <Progress className="" color="blue" value="60"></Progress>
  </div>
  <div className="">
    <Progress className="" color="orange" value="80"></Progress>
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
      <Col md="6" sm="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Basic Progress with label</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="mb-3">
              <Progress className="" color="primary" value="7">
                7%
              </Progress>
            </div>
            <div className="mb-3">
              <Progress className="" color="primary" value="20">
                20%
              </Progress>
            </div>
            <div className="mb-3">
              <Progress className="" color="primary" value="40">
                40%
              </Progress>
            </div>
            <div className="mb-3">
              <Progress className="" color="primary" value="60">
                60%
              </Progress>
            </div>
            <div className="">
              <Progress className="" color="primary" value="80">
                80%
              </Progress>
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
    <div className="mb-3">
    <Progress className="" color="primary" value="7">
      7%
    </Progress>
    </div>
    <div className="mb-3">
    <Progress className="" color="primary" value="20">
      20%
    </Progress>
    </div>
    <div className="mb-3">
    <Progress className="" color="primary" value="40">
      40%
    </Progress>
    </div>
    <div className="mb-3">
    <Progress className="" color="primary" value="60">
      60%
    </Progress>
    </div>
    <div className="">
    <Progress className="" color="primary" value="80">
      80%
    </Progress>
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
      <Col md="6" sm="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Contextual Progress with label</CardTitle>
          </CardHeader>
          <CardBody>
            <div className=" mb-3">
              <Progress className="" color="pink" value="7">
                7%
              </Progress>
            </div>
            <div className="mb-3">
              <Progress className="" color="green" value="20">
                20%
              </Progress>
            </div>
            <div className=" mb-3">
              <Progress className="" color="yellow" value="40">
                40%
              </Progress>
            </div>
            <div className=" mb-3">
              <Progress className="" color="blue" value="60">
                60%
              </Progress>
            </div>
            <div className="">
              <Progress className="" color="orange" value="80">
                80%
              </Progress>
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
   <div className=" mb-3">
   <Progress className="" color="pink" value="7">
     7%
   </Progress>
 </div>
 <div className="mb-3">
   <Progress className="" color="green" value="20">
     20%
   </Progress>
 </div>
 <div className=" mb-3">
   <Progress className="" color="yellow" value="40">
     40%
   </Progress>
 </div>
 <div className=" mb-3">
   <Progress className="" color="blue" value="60">
     60%
   </Progress>
 </div>
 <div className="">
   <Progress className="" color="orange" value="80">
     80%
   </Progress>
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
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col md="6" sm="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Progress Sizes</CardTitle>
          </CardHeader>
          <CardBody>
            <div className=" mb-3">
              <Progress
                className=""
                color="blue"
                style={{ height: "3px" }}
                value="30"
              ></Progress>
            </div>
            <div className=" mb-3">
              <Progress
                className=""
                color="blue"
                style={{ height: "8px" }}
                value="60"
              ></Progress>
            </div>
            <div className=" mb-3">
              <Progress
                className=""
                color="blue"
                style={{ height: "14px" }}
                value="70"
              >
                70%
              </Progress>
            </div>
            <div className="">
              <Progress
                className=""
                color="blue"
                style={{ height: "20px" }}
                value="80"
              >
                80%
              </Progress>
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
    <div className=" mb-3">
    <Progress
      className=""
      color="blue"
      style={{ height: "3px" }}
      value="30"
    ></Progress>
  </div>
  <div className=" mb-3">
    <Progress
      className=""
      color="blue"
      style={{ height: "8px" }}
      value="60"
    ></Progress>
  </div>
  <div className=" mb-3">
    <Progress
      className=""
      color="blue"
      style={{ height: "14px" }}
      value="70"
    >
      70%
    </Progress>
  </div>
  <div className="">
    <Progress
      className=""
      color="blue"
      style={{ height: "20px" }}
      value="80"
    >
      80%
    </Progress>
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
      </Col>
      <Col md="6" sm="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Mixed color Progress with Sizes</CardTitle>
          </CardHeader>
          <CardBody>
            <div className=" mb-3">
              <Progress multi style={{ height: "4px" }}>
                <Progress bar value="5" color="orange" />
                <Progress bar color="warning" value="5" />
                <Progress bar color="info" value="5" />
              </Progress>
            </div>
            <div className="mb-3">
              <Progress multi style={{ height: "9px" }}>
                <Progress bar value="10" color="pink" />
                <Progress bar color="yellow" value="15" />
                <Progress bar color="teal" value="15" />
              </Progress>
            </div>
            <div className=" mb-3">
              <Progress multi style={{ height: "16px" }}>
                <Progress bar value="18" color="pink" />
                <Progress bar color="blue" value="20" />
                <Progress bar color="cyan" value="30" />
              </Progress>
            </div>
            <div className="">
              <Progress multi style={{ height: "22px" }}>
                <Progress bar value="30" color="green" />
                <Progress bar color="pink" value="20" />
                <Progress bar color="orange" value="40" />
              </Progress>
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
  <div className=" mb-3">
  <Progress multi style={{ height: "4px" }}>
    <Progress bar value="5" color="orange" />
    <Progress bar color="warning" value="5" />
    <Progress bar color="info" value="5" />
  </Progress>
</div>
<div className="mb-3">
  <Progress multi style={{ height: "9px" }}>
    <Progress bar value="10" color="pink" />
    <Progress bar color="yellow" value="15" />
    <Progress bar color="teal" value="15" />
  </Progress>
</div>
<div className=" mb-3">
  <Progress multi style={{ height: "16px" }}>
    <Progress bar value="18" color="pink" />
    <Progress bar color="blue" value="20" />
    <Progress bar color="cyan" value="30" />
  </Progress>
</div>
<div className="">
  <Progress multi style={{ height: "22px" }}>
    <Progress bar value="30" color="green" />
    <Progress bar color="pink" value="20" />
    <Progress bar color="orange" value="40" />
  </Progress>
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
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col md="6" sm="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Striped Progress</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="mb-3">
              <Progress
                className=""
                color="teal"
                animated
                style={{ height: "16px" }}
                value="15"
              ></Progress>
            </div>
            <div className="mb-3">
              <Progress
                className=""
                color="info"
                animated
                striped
                style={{ height: "16px" }}
                value="25"
              ></Progress>
            </div>
            <div className="mb-3">
              <Progress
                className=""
                color="yellow"
                animated
                striped
                style={{ height: "16px" }}
                value="50"
              >
                50%
              </Progress>
            </div>
            <div className="">
              <Progress
                className=""
                color="green"
                animated
                striped
                style={{ height: "16px" }}
                value="70"
              >
                70%
              </Progress>
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
  <div className="mb-3">
  <Progress
    className=""
    color="teal"
    animated
    style={{ height: "16px" }}
    value="15"
  ></Progress>
</div>
<div className="mb-3">
  <Progress
    className=""
    color="info"
    animated
    striped
    style={{ height: "16px" }}
    value="25"
  ></Progress>
</div>
<div className="mb-3">
  <Progress
    className=""
    color="yellow"
    animated
    striped
    style={{ height: "16px" }}
    value="50"
  >
    50%
  </Progress>
</div>
<div className="">
  <Progress
    className=""
    color="green"
    animated
    striped
    style={{ height: "16px" }}
    value="70"
  >
    70%
  </Progress>
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
      <Col md="6" sm="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Animated Progress</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="mb-3">
              <Progress
                className="progress-bar-indeterminate"
                color="pink"
                style={{ height: "16px" }}
                value="100"
              ></Progress>
            </div>
            <div className="mb-3">
              <Progress
                className="progress-bar-indeterminate"
                color="cyan"
                style={{ height: "16px" }}
                value="100"
              ></Progress>
            </div>
            <div className="mb-3">
              <Progress
                className="progress-bar-indeterminate"
                color="teal"
                style={{ height: "16px" }}
                value="100"
              ></Progress>
            </div>
            <div className="">
              <Progress
                className="progress-bar-indeterminate"
                color="purple"
                style={{ height: "16px" }}
                value="100"
              ></Progress>
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
    <div className="mb-3">
      <Progress
        className="progress-bar-indeterminate"
        color="pink"
        style={{ height: "16px" }}
        value="100"
      ></Progress>
    </div>
    <div className="mb-3">
      <Progress
        className="progress-bar-indeterminate"
        color="cyan"
        style={{ height: "16px" }}
        value="100"
      ></Progress>
    </div>
    <div className="mb-3">
      <Progress
        className="progress-bar-indeterminate"
        color="teal"
        style={{ height: "16px" }}
        value="100"
      ></Progress>
    </div>
    <div className="">
      <Progress
        className="progress-bar-indeterminate"
        color="purple"
        style={{ height: "16px" }}
       value="100"
      ></Progress>
    </div>
                
                `}
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
    </Row>
  </div>
)
  };

Progressbar.propTypes = {};

Progressbar.defaultProps = {};

export default Progressbar;
