import React, { LegacyRef, useRef } from "react";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const Breadcrumd = () => {

    //clipboard functions
const elementRef: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef2: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef3: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef4: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef5: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef6: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
const elementRef7: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)


//clipboard function for ShowCode

let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
  let data = ele.current?.innerText
  navigator.clipboard.writeText(data || '')
  alert("Text copied successfully")
  }
  return (

  <div>
    <PageHeaders
      title="Breadcrumbs"
      home="Home"
      name="Elements"
      fonticonsname="Breadcrumbs"
    />

    <Row>
      <Col md="12" lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Simple Breadcrumbs</CardTitle>
          </CardHeader>
          <CardBody>
            <Breadcrumb className="breadcrumb1">
              <BreadcrumbItem className="breadcrumb-item1" active>
                Home
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item1" active>
                About
              </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb className="breadcrumb1">
              <BreadcrumbItem className="breadcrumb-item1">
                <a href="#">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item1" active>
                Library
              </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb className="breadcrumb1">
              <BreadcrumbItem className="breadcrumb-item1">
                <a href="#">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item1">
                <a href="#">Library</a>
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item1" active>
                Data
              </BreadcrumbItem>
            </Breadcrumb>
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
    <Breadcrumb className="breadcrumb1">
      <BreadcrumbItem className="breadcrumb-item1 active">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item1 active">
        About
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="breadcrumb1">
      <BreadcrumbItem className="breadcrumb-item1">
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item1 active">
        Library
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="breadcrumb1">
      <BreadcrumbItem className="breadcrumb-item1">
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item1">
        <a href="#">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item1 active">
        Data
      </BreadcrumbItem>
    </Breadcrumb>
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
    </Row>
    {/* <!--div--> */}
    <Card className="mg-b-20" id="breadcrumb1">
      <CardHeader>
        <CardTitle>Custom Styling</CardTitle>
      </CardHeader>
      <CardBody>
        <nav aria-label="breadcrumb">
          <Breadcrumb className="breadcrumb breadcrumb-style1 mb-0 p-0">
            <BreadcrumbItem className="breadcrumb-item">
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem className="breadcrumb-item">
              <a href="#">Library</a>
            </BreadcrumbItem>
            <BreadcrumbItem className="breadcrumb-item active">
              Data
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
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
    <nav aria-label="breadcrumb">
      <Breadcrumb className="breadcrumb breadcrumb-style1 mb-0 p-0">
        <BreadcrumbItem className="breadcrumb-item">
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item">
          <a href="#">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item active">
          Data
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
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
    {/* <!--/div--> */}
    {/* <!--div--> */}
    <Card className="mg-b-20" id="breadcrumb2">
      <CardHeader>
        <CardTitle>Custom Divider</CardTitle>
      </CardHeader>
      <CardBody>
        <nav aria-label="breadcrumb">
          <Breadcrumb className="breadcrumb breadcrumb-style2 mb-0 p-0">
            <BreadcrumbItem className="breadcrumb-item">
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem className="breadcrumb-item">
              <a href="#">Library</a>
            </BreadcrumbItem>
            <BreadcrumbItem className="breadcrumb-item active">
              Data
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
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
    <nav aria-label="breadcrumb">
      <Breadcrumb className="breadcrumb breadcrumb-style2 mb-0 p-0">
        <BreadcrumbItem className="breadcrumb-item">
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item">
          <a href="#">Library</a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item active">
          Data
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
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
    {/* <!--/div--> */}
    <Row>
      <Col md="12" lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Color Breadcrumbs</CardTitle>
          </CardHeader>
          <CardBody>
            <Breadcrumb className="breadcrumb1 bg-blue">
              <BreadcrumbItem className="breadcrumb-item1 text-white" active>
                Home
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item1 text-white" active>
                About
              </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb className="breadcrumb1 bg-secondary">
              <BreadcrumbItem className="breadcrumb-item1">
                <a href="#" className="text-white">
                  Home
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item1 text-white" active>
                Library
              </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb className="breadcrumb1 bg-success">
              <BreadcrumbItem className="breadcrumb-item1">
                <a href="#" className="text-white">
                  Home
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item1 text-white">
                <a href="#" className="text-white">
                  Library
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item1 text-white" active>
                Data
              </BreadcrumbItem>
            </Breadcrumb>
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
   <Breadcrumb className="breadcrumb1 bg-blue">
     <BreadcrumbItem
       className="breadcrumb-item1 text-white"
       active
     >
       Home
     </BreadcrumbItem>
     <BreadcrumbItem
       className="breadcrumb-item1 text-white"
       active
     >
       About
     </BreadcrumbItem>
   </Breadcrumb>
   <Breadcrumb className="breadcrumb1 bg-secondary">
     <BreadcrumbItem className="breadcrumb-item1">
       <a href="#" className="text-white">
         Home
       </a>
     </BreadcrumbItem>
     <BreadcrumbItem
       className="breadcrumb-item1 text-white"
       active
     >
       Library
     </BreadcrumbItem>
   </Breadcrumb>
   <Breadcrumb className="breadcrumb1 bg-success">
     <BreadcrumbItem className="breadcrumb-item1">
       <a href="#" className="text-white">
         Home
       </a>
     </BreadcrumbItem>
     <BreadcrumbItem className="breadcrumb-item1">
       <a href="#" className="text-white">
         Library
       </a>
     </BreadcrumbItem>
     <BreadcrumbItem
       className="breadcrumb-item1 text-white"
       active
     >
       Data
     </BreadcrumbItem>
   </Breadcrumb>
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
        <Card id="breadcrumb4">
          <CardHeader>
            <CardTitle tag="h3">Icon Breadcrumbs</CardTitle>
          </CardHeader>
          <CardBody>
            <nav aria-label="breadcrumb">
              <Breadcrumb className="breadcrumb1 border bg-transparent">
                <BreadcrumbItem className="breadcrumb-item1 " active>
                  <i
                    className="fa fa-star-o me-2 white-text"
                    aria-hidden="true"
                  ></i>
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem className="breadcrumb-item1 " active>
                  About
                </BreadcrumbItem>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1">
                <BreadcrumbItem className="breadcrumb-item1">
                  <a href="#" className="">
                    <i className="fa fa-star-o me-2" aria-hidden="true"></i>Home
                  </a>
                </BreadcrumbItem>
                <BreadcrumbItem className="breadcrumb-item1" active>
                  <i className="fa fa-star-o me-2" aria-hidden="true"></i>
                  Library
                </BreadcrumbItem>
              </Breadcrumb>
              <Breadcrumb className="breadcrumb1 bg-primary mb-0">
                <BreadcrumbItem className="breadcrumb-item1">
                  <a href="#" className="text-white">
                    <i
                      className="fa fa-star-o me-2 white-text"
                      aria-hidden="true"
                    ></i>
                    Home
                  </a>
                </BreadcrumbItem>
                <BreadcrumbItem className="breadcrumb-item1 text-white">
                  <a href="#" className="text-white">
                    <i
                      className="fa fa-star-o me-2 white-text"
                      aria-hidden="true"
                    ></i>
                    Library
                  </a>
                </BreadcrumbItem>
                <BreadcrumbItem className="breadcrumb-item1 text-white" active>
                  <i
                    className="fa fa-star-o me-2 white-text"
                    aria-hidden="true"
                  ></i>
                  Data
                </BreadcrumbItem>
              </Breadcrumb>
            </nav>
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
    <nav aria-label="breadcrumb">
      <Breadcrumb className="breadcrumb1 border bg-transparent">
        <BreadcrumbItem className="breadcrumb-item1" active>
          <i
            className="fa fa-star-o me-2 white-text"
            aria-hidden="true"
          ></i>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item1" active>
          About
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb className="breadcrumb1">
        <BreadcrumbItem className="breadcrumb-item1">
          <a href="#" className="">
            <i
              className="fa fa-star-o me-2"
              aria-hidden="true"
            ></i>
            Home
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item1" active>
          <i className="fa fa-star-o me-2" aria-hidden="true"></i>
          Library
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb className="breadcrumb1 bg-primary mb-0">
        <BreadcrumbItem className="breadcrumb-item1">
          <a href="#" className="text-white">
            <i
              className="fa fa-star-o me-2 white-text"
              aria-hidden="true"
            ></i>
            Home
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem className="breadcrumb-item1 text-white">
          <a href="#" className="text-white">
            <i
              className="fa fa-star-o me-2 white-text"
              aria-hidden="true"
            ></i>
            Library
          </a>
        </BreadcrumbItem>
        <BreadcrumbItem
          className="breadcrumb-item1 text-white"
          active
        >
          <i
            className="fa fa-star-o me-2 white-text"
            aria-hidden="true"
          ></i>
          Data
        </BreadcrumbItem>
      </Breadcrumb>
    </nav>
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
        {/* <!--/div--> */}
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Style Breadcrumbs</CardTitle>
          </CardHeader>
          <CardBody>
            <Breadcrumb className="breadcrumb-arrow mt-3">
              <BreadcrumbItem>
                <a href="#">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active className="">
                <span>Data</span>
              </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb className="breadcrumb-arrow mt-3">
              <BreadcrumbItem>
                <a href="#">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#">Library</a>
              </BreadcrumbItem>
              <BreadcrumbItem active className="">
                <span>Data</span>
              </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb className="breadcrumb-arrow mt-3">
              <BreadcrumbItem>
                <a href="#">Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#">Library</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a href="#">Elements</a>
              </BreadcrumbItem>
              <BreadcrumbItem active className="">
                <span>Data</span>
              </BreadcrumbItem>
            </Breadcrumb>
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
    <Breadcrumb className="breadcrumb breadcrumb-arrow mt-3">
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active className="">
        <span>Data</span>
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="breadcrumb breadcrumb-arrow mt-3">
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem active className="">
        <span>Data</span>
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="breadcrumb breadcrumb-arrow mt-3">
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="#">Elements</a>
      </BreadcrumbItem>
      <BreadcrumbItem active className="">
        <span>Data</span>
      </BreadcrumbItem>
    </Breadcrumb>
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

        <Card>
          <CardHeader>
            <CardTitle tag="h3">Svg Breadcrumb</CardTitle>
          </CardHeader>
          <CardBody className="breadcrumb-style4">
            <Breadcrumb className="breadcrumb border p-4 mb-4">
              <BreadcrumbItem className="breadcrumb-item">
                <a href="#" className="d-flex">
                  <svg
                    className="svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
                    <path
                      d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z"
                      opacity=".3"
                    />
                  </svg>
                  <span className="breadcrumb-icon"> Home</span>
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item " active>
                <span>Data</span>
              </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb className="breadcrumb border p-4 mb-4 bg-light">
              <BreadcrumbItem className="breadcrumb-item">
                <a href="#" className="d-flex">
                  <svg
                    className="svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
                    <path
                      d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z"
                      opacity=".3"
                    />
                  </svg>
                  <span className="breadcrumb-icon"> Home</span>
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item">
                <a href="#">Library</a>
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item" active>
                <span>Data</span>
              </BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb className="breadcrumb p-4 bg-primary br-3 overflow-hidden">
              <BreadcrumbItem className="breadcrumb-item text-white">
                <a href="#" className="d-flex text-white">
                  <svg
                    className="svg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
                    <path
                      d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z"
                      opacity=".3"
                    />
                  </svg>
                  <span className="breadcrumb-icon"> Home</span>
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item text-white">
                <a href="#" className="text-white">
                  Library
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item text-white">
                <a href="#" className="text-white">
                  Elements
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem className="breadcrumb-item text-white" active>
                <span>Data</span>
              </BreadcrumbItem>
            </Breadcrumb>
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
    <Breadcrumb className="breadcrumb border p-4 mb-4">
      <BreadcrumbItem className="breadcrumb-item">
        <a href="#" className="d-flex">
          <svg
            className="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
            <path
              d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z"
              opacity=".3"
            />
          </svg>
          <span className="breadcrumb-icon"> Home</span>
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item " active>
        <span>Data</span>
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="breadcrumb border p-4 mb-4 bg-light">
      <BreadcrumbItem className="breadcrumb-item">
        <a href="#" className="d-flex">
          <svg
            className="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
            <path
              d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z"
              opacity=".3"
            />
          </svg>
          <span className="breadcrumb-icon"> Home</span>
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item">
        <a href="#">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item " active>
        <span>Data</span>
      </BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb className="breadcrumb p-4 bg-primary br-3 overflow-hidden">
      <BreadcrumbItem className="breadcrumb-item text-white">
        <a href="#" className="d-flex text-white">
          <svg
            className="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z" />
            <path
              d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z"
              opacity=".3"
            />
          </svg>
          <span className="breadcrumb-icon"> Home</span>
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item text-white">
        <a href="#" className="text-white">
          Library
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem className="breadcrumb-item text-white">
        <a href="#" className="text-white">
          Elements
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem
        className="breadcrumb-item text-white"
        active
      >
        <span>Data</span>
      </BreadcrumbItem>
    </Breadcrumb>
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
    </Row>
  </div>
)
  };

Breadcrumd.propTypes = {};

Breadcrumd.defaultProps = {};

export default Breadcrumd;
