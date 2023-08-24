import React, { LegacyRef, useRef } from "react";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import photo19 from "../../../assets/images/photos/19.jpg";
import photo21 from "../../../assets/images/photos/21.jpg";
import photo22 from "../../../assets/images/photos/22.jpg";
import photo23 from "../../../assets/images/photos/23.jpg";
import photo20 from "../../../assets/images/photos/20.jpg";
import photo24 from "../../../assets/images/photos/24.jpg";
import photo25 from "../../../assets/images/photos/25.jpg";
import photo1 from "../../../assets/images/photos/1.jpg";
import photo2 from "../../../assets/images/photos/2.jpg";
import photo3 from "../../../assets/images/photos/3.jpg";
import photo4 from "../../../assets/images/photos/4.jpg";
import photo5 from "../../../assets/images/photos/5.jpg";
import photo6 from "../../../assets/images/photos/6.jpg";
import photo7 from "../../../assets/images/photos/7.jpg";
import photo8 from "../../../assets/images/photos/8.jpg";
import photo14 from "../../../assets/images/photos/14.jpg";
import photo15 from "../../../assets/images/photos/15.jpg";
import photo16 from "../../../assets/images/photos/16.jpg";
import photo17 from "../../../assets/images/photos/17.jpg";
import photo18 from "../../../assets/images/photos/18.jpg";
import photo11 from "../../../assets/images/photos/11.jpg";
import photo9 from "../../../assets/images/photos/9.jpg";
import photo10 from "../../../assets/images/photos/10.jpg";
import photo12 from "../../../assets/images/photos/12.jpg";
import photo13 from "../../../assets/images/photos/13.jpg";
import photoblue from "../../../assets/images/photos/blue.jpg";
import photogreen from "../../../assets/images/photos/green.jpg";
import photored from "../../../assets/images/photos/red.jpg";
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Col,
  Row,
  UncontrolledCarousel,
} from "reactstrap";

const Carousel = () => {

  //clipboard functions
  const elementRef: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
  const elementRef2: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
  const elementRef3: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
  const elementRef4: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
  const elementRef5: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
  const elementRef6: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
  const elementRef7: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
  const elementRef8: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
  const elementRef9: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
  const elementRef10: LegacyRef<HTMLPreElement> = useRef <HTMLInputElement>(null)
  
  //clipboard function for ShowCode
  
  let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
    let data = ele.current?.innerText
    navigator.clipboard.writeText(data || '')
    alert("Text copied successfully")
    }

  return (

  <div>
    <PageHeaders
      title="Carousel"
      home="Home"
      name="Elements"
      fonticonsname="Carousel"
    />
    <Row>
      <Col md="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Carousel</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="carousel-default"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* <div className="carousel-inner"> */}
              <UncontrolledCarousel
                indicators={false}
                interval={4000}
                controls={false}
                items={[
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo19,
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo20,
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo21,
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo22,
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo23,
                  },
                ]}
              />
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
               {`<UncontrolledCarousel
                indicators={false}
                interval={4000}
                controls={false}
                items={[
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo19,
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo20,
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo21,
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo22,
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo23,
                  },
                ]}
              />`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element1">
              <svg  onClick={()=>{
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
      <Col md="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Carousel with indicators</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="carousel-indicators"
              className="carousel slide carouselindicators"
              data-bs-ride="carousel"
            >
              <UncontrolledCarousel
                interval={4000}
                controls={false}
                items={[
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo24,
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo25,
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo1,
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo2,
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo3,
                  },
                ]}
              />
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
               {`<UncontrolledCarousel
                interval={4000}
                controls={false}
                items={[
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo24,
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo25,
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo1,
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo2,
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo3,
                  },
                ]}
              />`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element2">
              <svg  onClick={()=>{
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
      <Col md="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Carousel with controls</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="carousel-controls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <UncontrolledCarousel
                indicators={false}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo4,
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo5,
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo6,
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo7,
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo8,
                  },
                ]}
              />
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
                {`<UncontrolledCarousel
                indicators={false}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: " ",
                    caption: " ",
                    src: photo4,
                  },
                  {
                    key: 2,
                    altText: " ",
                    caption: " ",
                    src: photo5,
                  },
                  {
                    key: 3,
                    altText: " ",
                    caption: " ",
                    src: photo6,
                  },
                  {
                    key: 4,
                    altText: " ",
                    caption: " ",
                    src: photo7,
                  },
                  {
                    key: 5,
                    altText: " ",
                    caption: " ",
                    src: photo8,
                  },
                ]}
              />`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element3">
              <svg  onClick={()=>{
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
      <Col md="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Carousel with captions</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="carousel-captions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <UncontrolledCarousel
                indicators={false}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo9,
                  },
                  {
                    key: 2,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo10,
                  },
                  {
                    key: 3,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo11,
                  },
                  {
                    key: 4,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo12,
                  },
                  {
                    key: 5,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo13,
                  },
                ]}
              />
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
               {`<UncontrolledCarousel
                indicators={false}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo9,
                  },
                  {
                    key: 2,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo10,
                  },
                  {
                    key: 3,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo11,
                  },
                  {
                    key: 4,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo12,
                  },
                  {
                    key: 5,
                    altText: "Slide label",
                    caption: "Slide label",
                    src: photo13,
                  },
                ]}
              />`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element4">
              <svg  onClick={()=>{
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
      <Col md="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Carousel with top controls</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="carousel-indicators1"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src: photo14,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src: photo15,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src: photo16,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src: photo17,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src: photo18,
                  },
                ]}
              />
              
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
               {`<UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src: photo14,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src: photo15,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src: photo16,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src: photo17,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src: photo18,
                  },
                ]}
              />`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element5">
              <svg  onClick={()=>{
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
      <Col md="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Carousel with top-right controls</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="carousel-indicators2"
              className="carousel slide"
              data-bs-ride="carousel"
            >
                <UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo19,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo20,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo21,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo22,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo23,
                  },
                ]}
              />
              
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
               {` <UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo19,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo20,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo21,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo22,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo23,
                  },
                ]}
              />`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element6">
              <svg  onClick={()=>{
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
    <Row>
      <Col md="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Carousel with top-left controls</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="carousel-indicators3"
              className="carousel slide"
              data-bs-ride="carousel"
            >
                 <UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo24,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo25,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo1,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo2,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo3,
                  },
                ]}
              />
              
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
              <code className="language-markup mb-0">{`<UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo24,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo25,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo1,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo2,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo3,
                  },
                ]}
              />`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element7">
              <svg  onClick={()=>{
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
      <Col md="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Carousel with bottom-right controls</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="carousel-indicators4"
              className="carousel slide"
              data-bs-ride="carousel"
            >
                <UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo4,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo5,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo6,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo7,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo8,
                  },
                ]}
              />
              
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
              <code className="language-markup mb-0">{`<UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo4,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo5,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo6,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo7,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo8,
                  },
                ]}
              />`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element8">
              <svg  onClick={()=>{
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
      <Col md="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Carousel with bottom-left controls</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="carousel-indicators5"
              className="carousel slide"
              data-bs-ride="carousel"
            >
                <UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo9,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo10,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo11,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo12,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo13,
                  },
                ]}
              />
              
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
          <figure className="highlight mb-0" id="9">
            <pre ref={elementRef9}>
              <code className="language-markup mb-0">{`
              <UncontrolledCarousel
                controls={false}
                indicators={true}
                interval={4000}
                items={[
                  {
                    key: 1,
                    altText: "",
                    caption: "",
                    src:photo9,
                  },
                  {
                    key: 2,
                    altText: "",
                    caption: "",
                    src:photo10,
                  },
                  {
                    key: 3,
                    altText: "",
                    caption: "",
                    src:photo11,
                  },
                  {
                    key: 4,
                    altText: "",
                    caption: "",
                    src:photo12,
                  },
                  {
                    key: 5,
                    altText: "",
                    caption: "",
                    src:photo13,
                  },
                ]}
              />
               `} </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element9">
              <svg  onClick={()=>{
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
      <Col md="6" lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">
              Carousel with Background color captions
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="carousel-captions2"
              className="carousel slide"
              data-bs-ride="carousel"
            >
                <UncontrolledCarousel
                controls={true}
                indicators={false}
                interval={4000}
                items={[
                  {
                    key: 1,
                    caption: "The wise man therefore always holds in these matters to this principle.",
                    altText: "",
                    src:photored,
                  },
                  {
                    key: 2,
                    caption: "The wise man therefore always holds in these matters to this principle.",
                    altText: "",
                    src:photoblue,
                  },
                  {
                    key: 3,
                    caption: "The wise man therefore always holds in these matters to this principle.",
                    altText: "",
                    src:photogreen,
                  },
                ]}
              />
              
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
                 <UncontrolledCarousel
                 controls={true}
                 indicators={false}
                 interval={4000}
                 items={[
                   {
                     key: 1,
                     caption: "The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.",
                     altText: "",
                     src:photored,
                   },
                   {
                     key: 2,
                     caption: "The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.",
                     altText: "",
                     src:photoblue,
                   },
                   {
                     key: 3,
                     caption: "The wise man therefore always holds in these matters to this principle of selection he rejects pleasures.",
                     altText: "",
                     src:photogreen,
                   },
                 ]}
               />`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element10">
              <svg  onClick={()=>{
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

Carousel.propTypes = {};

Carousel.defaultProps = {};

export default Carousel;
