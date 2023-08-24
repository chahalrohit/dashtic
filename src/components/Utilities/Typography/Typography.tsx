import React, { LegacyRef, useRef } from "react";
import { Card, CardBody,CardTitle, CardHeader, Col, Row, Table } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Typography = () => {
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
  const elementRef11: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef12: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef13: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef14: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef15: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef16: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef17: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef18: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef19: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef20: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef21: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef22: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
//clipboard function for ShowCode

let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
let data = ele.current?.innerText
navigator.clipboard.writeText(data || '')
alert("Text copied successfully")
}
  return (
  <div>
    <PageHeaders
      title="Typography"
      home="Home"
      name="Utilites"
      fonticonsname="Typography"
    />
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Default Heading Text</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap">
              <p>
                Examples using standard <code>h1</code> to <code>h6</code> html
                tags
              </p>
              <h1>h1. Heading</h1>
              <h2>h2. Heading</h2>
              <h3>h3. Heading</h3>
              <h4>h4. Heading</h4>
              <h5>h5. Heading</h5>
              <h6>h6. Heading</h6>
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
  <div className="text-wrap">
    <p>
      Examples using standard <code>h1</code> to <code>h6</code>{" "}
      html tags
    </p>
    <h1>h1. Heading</h1>
    <h2>h2. Heading</h2>
    <h3>h3. Heading</h3>
    <h4>h4. Heading</h4>
    <h5>h5. Heading</h5>
    <h6>h6. Heading</h6>
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
      <Col lg={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Heading with color Text</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap">
              <p>
                Examples using standard <code>h1</code> to <code>h6</code> html
                tags
              </p>
              <h1 className="text-primary">h1. Heading</h1>
              <h2 className="text-secondary">h2. Heading</h2>
              <h3 className="text-success">h3. Heading</h3>
              <h4 className="text-danger">h4. Heading</h4>
              <h5 className="text-info">h5. Heading</h5>
              <h6 className="text-warning">h6. Heading</h6>
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
  <div className="text-wrap">
    <p>
      Examples using standard <code>h1</code> to <code>h6</code>{" "}
      html tags
    </p>
    <h1 className="text-primary">h1. Heading</h1>
    <h2 className="text-secondary">h2. Heading</h2>
    <h3 className="text-success">h3. Heading</h3>
    <h4 className="text-danger">h4. Heading</h4>
    <h5 className="text-info">h5. Heading</h5>
    <h6 className="text-warning">h6. Heading</h6>
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
    {/* <!-- End  Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col lg={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Heading-Inverse</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap">
              <p>
                Examples using <code>heading-inverse</code> css
              </p>
              <h1 className="heading-inverse">h1. Heading</h1>
              <h2 className="heading-inverse">h2. Heading</h2>
              <h3 className="heading-inverse">h3. Heading</h3>
              <h4 className="heading-inverse">h4. Heading</h4>
              <h5 className="heading-inverse">h5. Heading</h5>
              <h6 className="heading-inverse">h6. Heading</h6>
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
  <div className="text-wrap">
    <p>
      Examples using <code>heading-inverse</code> css
    </p>
    <h1 className="heading-inverse">h1. Heading</h1>
    <h2 className="heading-secondary">h2. Heading</h2>
    <h3 className="heading-inverse">h3. Heading</h3>
    <h4 className="heading-inverse">h4. Heading</h4>
    <h5 className="heading-inverse">h5. Heading</h5>
    <h6 className="heading-inverse">h6. Heading</h6>
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
      <Col lg={6} md={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Heading primary to danger</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap">
              <p>
                Examples using <code>heading-primary</code> to{" "}
                <code>heading-danger</code> css
              </p>
              <h1 className="heading-inverse bg-primary ">h1. Heading</h1>
              <h2 className="heading-inverse bg-secondary">h2. Heading</h2>
              <h3 className="heading-inverse bg-success">h3. Heading</h3>
              <h4 className="heading-inverse bg-info">h4. Heading</h4>
              <h5 className="heading-inverse bg-warning">h5. Heading</h5>
              <h6 className="heading-inverse bg-danger">h6. Heading</h6>
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
  <div className="text-wrap">
    <p>
      Examples using <code>heading-primary</code> to{" "}
      <code>heading-danger</code> css
    </p>
    <h1 className="heading-inverse bg-primary ">h1. Heading</h1>
    <h2 className="heading-inverse bg-secondary">
      h2. Heading
    </h2>
    <h3 className="heading-inverse bg-success">h3. Heading</h3>
    <h4 className="heading-inverse bg-info">h4. Heading</h4>
    <h5 className="heading-inverse bg-warning">h5. Heading</h5>
    <h6 className="heading-inverse bg-danger">h6. Heading</h6>
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
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col lg={12} md={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Paragraph Text</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <p className="lead">
                Most designers set their type arbitrarily, either by pulling
                values out of the sky or by adhering to a baseline grid. The
                former case isn’t worth discussing here, but the latter requires
                a closer look.
              </p>
              <p>
                You can use the mark tag to <mark>highlight</mark> text.
              </p>
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
      Far far away, behind the word mountains, far from the
      countries Vokalia and Consonantia, there live the blind
      texts. Separated they live in Bookmarksgrove right at the
      coast of the Semantics, a large language ocean. A small
      river named Duden flows by their place and supplies it
      with the necessary regelialia. It is a paradisematic
      country, in which roasted parts of sentences fly into your
      mouth.
    </p>
    <p className="lead">
      Most designers set their type arbitrarily, either by
      pulling values out of the sky or by adhering to a baseline
      grid. The former case isn’t worth discussing here, but the
      latter requires a closer look.
    </p>
    <p>
      You can use the mark tag to <mark>highlight</mark> text.
    </p>
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
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Text alignment</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap">
              <p>
                Easily realign text to components with text alignment classes.
              </p>
              <div className="example">
                <p className="text-start">
                  Left aligned text on all viewport sizes.
                </p>
                <p className="text-center">
                  Center aligned text on all viewport sizes.
                </p>
                <p className="text-end">
                  Right aligned text on all viewport sizes.
                </p>
                <p className="text-justify m-0">
                  Both aligned text on all viewport sizes. Ambitioni dedisse
                  scripsisse iudicaretur. Cras mattis iudicium purus sit amet
                  fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
                </p>
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
          <figure className="highlight mb-0" id="element6">
            <pre ref={elementRef6}>
              <code className="language-markup mb-0">{`
  <div className="text-wrap">
    <p>
      Easily realign text to components with text alignment
      classes.
    </p>
    <div className="example">
      <p className="text-start">
        Left aligned text on all viewport sizes.
      </p>
      <p className="text-center">
        Center aligned text on all viewport sizes.
      </p>
      <p className="text-end">
        Right aligned text on all viewport sizes.
      </p>
      <p className="text-justify m-0">
        Both aligned text on all viewport sizes. Ambitioni
        dedisse scripsisse iudicaretur. Cras mattis iudicium
        purus sit amet fermentum. Donec sed odio operae, eu
        vulputate felis rhoncus.
      </p>
    </div>
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
      <Col lg={12} md={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Text transform</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap">
              <p>
                Transform text in components with text capitalization classes.
              </p>
              <div className="example">
                <p className="text-lowercase">Lowercased text.</p>
                <p className="text-uppercase">Uppercased text.</p>
                <p className="text-capitalize m-0">Capitalized text.</p>
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
          <figure className="highlight mb-0" id="element7">
            <pre ref={elementRef7}>
              <code className="language-markup mb-0">{`
  <div className="text-wrap">
    <p>
      Transform text in components with text capitalization
      classes.
    </p>
    <div className="example">
      <p className="text-lowercase">Lowercased text.</p>
      <p className="text-uppercase">Uppercased text.</p>
      <p className="text-capitalize m-0">Capitalized text.</p>
    </div>
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
      <Col lg={12} md={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Letter spacing</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap">
              <p>
                Utilities for controlling the tracking (letter spacing) of an
                element.
              </p>
              <div className="example">
                <p className="tracking-tight">
                  Lorem ipsum dolor sit amet. Tight letter spacing.
                </p>
                <p className="tracking-normal">
                  Lorem ipsum dolor sit amet. Normal letter spacing.
                </p>
                <p className="tracking-wide m-0">
                  Lorem ipsum dolor sit amet. Wide letter spacing.
                </p>
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
          <figure className="highlight mb-0" id="element8">
            <pre ref={elementRef8}>
              <code className="language-markup mb-0">{`
  <div className="text-wrap">
    <p>
      Utilities for controlling the tracking (letter spacing) of
      an element.
    </p>
    <div className="example">
      <p className="tracking-tight">
        Lorem ipsum dolor sit amet. Tight letter spacing.
      </p>
      <p className="tracking-normal">
        Lorem ipsum dolor sit amet. Normal letter spacing.
      </p>
      <p className="tracking-wide m-0">
        Lorem ipsum dolor sit amet. Wide letter spacing.
      </p>
    </div>
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
      <Col lg={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Line Height</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap">
              <p>
                Utilities for controlling the leading (line height) of an
                element.
              </p>
              <div className="example">
                <p className="leading-none">
                  Lorem ipsum dolor sit amet.
                  <br /> Dolor sit amet.
                </p>
                <p className="leading-tight">
                  Lorem ipsum dolor sit amet.
                  <br /> Dolor sit amet.
                </p>
                <p className="leading-normal">
                  Lorem ipsum dolor sit amet.
                  <br /> Dolor sit amet.
                </p>
                <p className="leading-loose m-0">
                  Lorem ipsum dolor sit amet.
                  <br /> Dolor sit amet.
                </p>
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
          <figure className="highlight mb-0" id="element9">
            <pre ref={elementRef9}>
              <code className="language-markup mb-0">{`
  <div className="text-wrap">
    <p>
      Utilities for controlling the leading (line height) of an
      element.
    </p>
    <div className="example">
      <p className="leading-none">
        Lorem ipsum dolor sit amet.
        <br />
        Dolor sit amet.
      </p>
      <p className="leading-tight">
        Lorem ipsum dolor sit amet.
        <br />
        Dolor sit amet.
      </p>
      <p className="leading-normal">
        Lorem ipsum dolor sit amet.
        <br />
        Dolor sit amet.
      </p>
      <p className="leading-loose m-0">
        Lorem ipsum dolor sit amet.
        <br />
        Dolor sit amet.
      </p>
    </div>
  </div>
              `}</code>
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
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Text-styles</CardTitle>
          </CardHeader>
          <CardBody className="card-body px-5">
            <p>
              You can use the mark tag to
              <mark>highlight</mark> text.
            </p>
            <p>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p>
              <s>
                This line of text is meant to be treated as no longer accurate.
              </s>
            </p>
            <p>
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p>
              <u>This line of text will render as underlined</u>
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              <strong>This line rendered as bold text.</strong>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>
            <p>
              <b>This line rendered as italicized text.</b>
            </p>
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
              <code className="language-markup mb-0">{`
  <p>
    You can use the mark tag to
    <mark>highlight</mark> text.
  </p>
  <p>
    <del>
      This line of text is meant to be treated as deleted text.
    </del>
  </p>
  <p>
    <s>
      This line of text is meant to be treated as no longer
      accurate.
    </s>
  </p>
  <p>
    <ins>
      This line of text is meant to be treated as an addition to
      the document.
    </ins>
  </p>
  <p>
    <u>This line of text will render as underlined</u>
  </p>
  <p>
    <small>
      This line of text is meant to be treated as fine print.
    </small>
  </p>
  <p>
    <strong>This line rendered as bold text.</strong>
  </p>
  <p>
    <em>This line rendered as italicized text.</em>
  </p>
  <p>
    <b>This line rendered as italicized text.</b>
  </p>
              `}</code>
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
        <Row>
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Unorder List Style</CardTitle>
              </CardHeader>
              <CardBody className="card-body px-5">
                <ul className="list-style">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
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
                  <code className="language-markup mb-0">{`
  <ul className="list-style">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
                  `}</code>
                </pre>
                <div
                  className="clipboard-icon"
                  data-clipboard-target="#element11"
                >
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
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Unorder List Style2</CardTitle>
              </CardHeader>
              <CardBody className="card-body px-5">
                <ul className="list-style2">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
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
                  <code className="language-markup mb-0">{`
  <ul className="list-style2">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
                  `}</code>
                </pre>
                <div
                  className="clipboard-icon"
                  data-clipboard-target="#element12"
                >
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
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Unorder List Style3</CardTitle>
              </CardHeader>
              <CardBody className="card-body px-5">
                <ul className="list-style3">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
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
              <figure className="highlight mb-0" id="element13">
                <pre ref={elementRef13}>
                  <code className="language-markup mb-0">{`
  <ul className="list-style3">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
                  `}</code>
                </pre>
                <div
                  className="clipboard-icon"
                  data-clipboard-target="#element13"
                >
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
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Unorder List Style4</CardTitle>
              </CardHeader>
              <CardBody className="card-body px-5">
                <ul className="list-style4">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
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
              <figure className="highlight mb-0" id="element14">
                <pre ref={elementRef14}>
                  <code className="language-markup mb-0">{`
  <ul className="list-style4">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
                  `}</code>
                </pre>
                <div
                  className="clipboard-icon"
                  data-clipboard-target="#element14"
                >
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
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Unorder List Style5</CardTitle>
              </CardHeader>
              <CardBody className="card-body px-5">
                <ul className="list-style5">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
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
              <figure className="highlight mb-0" id="element15">
                <pre ref={elementRef15}>
                  <code className="language-markup mb-0">{`
  <ul className="list-style5">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
                  `}</code>
                </pre>
                <div
                  className="clipboard-icon"
                  data-clipboard-target="#element15"
                >
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
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Unorder List Style6</CardTitle>
              </CardHeader>
              <CardBody className="card-body px-5">
                <ul className="list-style6">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
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
              <figure className="highlight mb-0" id="element16">
                <pre ref={elementRef16}>
                  <code className="language-markup mb-0">{`
  <ul className="list-style6">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
                  `}</code>
                </pre>
                <div
                  className="clipboard-icon"
                  data-clipboard-target="#element16"
                >
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
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Order list</CardTitle>
              </CardHeader>
              <CardBody className="card-body px-5">
                <ol className="order-list">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ol className="order-list">
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ol>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ol>
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
              <figure className="highlight mb-0" id="element17">
                <pre ref={elementRef17}>
                  <code className="language-markup mb-0">{`
  <ol className="order-list">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ol className="order-list">
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ol>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ol>
                  `}</code>
                </pre>
                <div
                  className="clipboard-icon"
                  data-clipboard-target="#element17"
                >
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
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Order With unorder</CardTitle>
              </CardHeader>
              <CardBody className="card-body px-5">
                <ol className="order-list">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ul className="list-style4 ps-5">
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ol>
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
              <figure className="highlight mb-0" id="element18">
                <pre ref={elementRef18}>
                  <code className="language-markup mb-0">{`
  <ol className="order-list">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>
      Nulla volutpat aliquam velit
      <ul className="list-style4 ps-5">
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ol>
                  `}</code>
                </pre>
                <div
                  className="clipboard-icon"
                  data-clipboard-target="#element18"
                >
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
            </Card>
          </Col>
        </Row>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Inline Style</CardTitle>
          </CardHeader>
          <CardBody className="card-body px-5">
            <ul className="list-inline">
              <li className="list-inline-item">Lorem ipsum</li>
              <li className="list-inline-item">Phasellus iaculis</li>
              <li className="list-inline-item">Nulla volutpat</li>
            </ul>
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
          <figure className="highlight mb-0" id="element19">
            <pre ref={elementRef19}>
              <code className="language-markup mb-0">{`
  <ul className="list-inline">
    <li className="list-inline-item">Lorem ipsum</li>
    <li className="list-inline-item">Phasellus iaculis</li>
    <li className="list-inline-item">Nulla volutpat</li>
  </ul>
              `}</code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element19">
              <svg
              onClick={()=>{
                CopytoClipBoard(elementRef19)
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
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Description Align</CardTitle>
          </CardHeader>
          <CardBody className="card-body px-5">
            <dl className="row">
              <dt className="col-sm-3">Description lists</dt>
              <dd className="col-sm-9">
                A description list is perfect for defining terms.
              </dd>

              <dt className="col-sm-3">Euismod</dt>
              <dd className="col-sm-9">
                <p>
                  Vestibulum id ligula porta felis euismod semper eget lacinia
                  odio sem nec elit.
                </p>
                <p>Donec id elit non mi porta gravida at eget metus.</p>
              </dd>

              <dt className="col-sm-3">Malesuada porta</dt>
              <dd className="col-sm-9">
                Etiam porta sem malesuada magna mollis euismod.
              </dd>

              <dt className="col-sm-3 text-truncate">
                Truncated term is truncated
              </dt>
              <dd className="col-sm-9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </dd>

              <dt className="col-sm-3">Nesting</dt>
              <dd className="col-sm-9">
                <dl className="row">
                  <dt className="col-sm-4">Nested definition list</dt>
                  <dd className="col-sm-8">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue
                    blandit nunc.
                  </dd>
                </dl>
              </dd>
            </dl>
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
          <figure className="highlight mb-0" id="element201">
            <pre ref={elementRef20}>
              <code className="language-markup mb-0">{`
  <dl className="row">
    <dt className="col-sm-3">Description lists</dt>
    <dd className="col-sm-9">
      A description list is perfect for defining terms.
    </dd>

    <dt className="col-sm-3">Euismod</dt>
    <dd className="col-sm-9">
      <p>
        Vestibulum id ligula porta felis euismod semper eget
        lacinia odio sem nec elit.
      </p>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
    </dd>

    <dt className="col-sm-3">Malesuada porta</dt>
    <dd className="col-sm-9">
      Etiam porta sem malesuada magna mollis euismod.
    </dd>

    <dt className="col-sm-3 text-truncate">
      Truncated term is truncated
    </dt>
    <dd className="col-sm-9">
      Fusce dapibus, tellus ac cursus commodo, tortor mauris
      condimentum nibh, ut fermentum massa justo sit amet risus.
    </dd>

    <dt className="col-sm-3">Nesting</dt>
    <dd className="col-sm-9">
      <dl className="row">
        <dt className="col-sm-4">Nested definition list</dt>
        <dd className="col-sm-8">
          Aenean posuere, tortor sed cursus feugiat, nunc augue
          blandit nunc.
        </dd>
      </dl>
    </dd>
  </dl>
              `}</code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element201">
              <svg
              onClick={()=>{
                CopytoClipBoard(elementRef20)
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
        </Card>
        <Row>
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Quote Left</CardTitle>
              </CardHeader>
              <CardBody className="card-body px-5">
                <blockquote className="blockquote">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
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
              <figure className="highlight mb-0" id="element211">
                <pre ref={elementRef21}>
                  <code className="language-markup mb-0">{`
  <blockquote className="blockquote">
    <p className="mb-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Integer posuere erat a ante.
    </p>
    <footer className="blockquote-footer">
      Someone famous in{" "}
      <cite title="Source Title">Source Title</cite>
    </footer>
  </blockquote>
                  `}</code>
                </pre>
                <div
                  className="clipboard-icon"
                  data-clipboard-target="#element211"
                >
                  <svg
                  onClick={()=>{
                    CopytoClipBoard(elementRef21)
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
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h3">Quote Center</CardTitle>
              </CardHeader>
              <CardBody className="card-body px-5">
                <blockquote className="blockquote text-center">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
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
              <figure className="highlight mb-0" id="element22">
                <pre ref={elementRef22}>
                  <code className="language-markup mb-0">{`
  <blockquote className="blockquote text-center">
    <p className="mb-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Integer posuere erat a ante.
    </p>
    <footer className="blockquote-footer">
      Someone famous in{" "}
      <cite title="Source Title">Source Title</cite>
    </footer>
  </blockquote>
                  `}</code>
                </pre>
                <div
                  className="clipboard-icon"
                  data-clipboard-target="#element22"
                >
                  <svg
                  onClick={()=>{
                    CopytoClipBoard(elementRef22)
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
            </Card>
          </Col>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <CardTitle>Font Size</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="mb-4">
                  <p className="fs-5">Demo Content Title</p>
                  <p className="fs-6">Demo Content Title</p>
                  <p className="fs-7">Demo Content Title</p>
                  <p className="fs-8">Demo Content Title</p>
                  <p className="fs-9">Demo Content Title</p>
                  <p className="fs-10">Demo Content Title</p>
                  <p className="fs-11">Demo Content Title</p>
                  <p className="fs-12">Demo Content Title</p>
                  <p className="fs-13">Demo Content Title</p>
                  <p className="fs-14">Demo Content Title</p>
                  <p className="fs-15">Demo Content Title</p>
                  <p className="fs-16">Demo Content Title</p>
                  <p className="fs-17">Demo Content Title</p>
                  <p className="fs-18">Demo Content Title</p>
                  <p className="fs-19">Demo Content Title</p>
                  <p className="fs-20">Demo Content Title</p>
                </div>
                <div className="table-responsive">
                  <Table className="table table-bordered text-nowrap mg-t-0">
                    <tbody>
                      <tr>
                        <td className="">
                          <b>Classes</b>
                        </td>
                        <td>
                          <code>.fs-[size]</code>
                        </td>
                      </tr>
                      <tr>
                        <td className="">
                          <b>Values</b>
                        </td>
                        <td>
                          5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
                          18 | 20 | 25 | 30 | ... | 100
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Font Weight</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="mb-4">
                  <p className="font-weight-light">Demo Content Title</p>
                  <p className="font-weight-normal">Demo Content Title</p>
                  <p className="font-weight-semibold">Demo Content Title</p>
                  <p className="font-weight-bold">Demo Content Title</p>
                </div>
                <div className="table-responsive">
                  <Table className="table  table-bordered text-nowrap mg-t-0 mg-b-0">
                    <tbody>
                      <tr>
                        <td className="">
                          <b>Classes</b>
                        </td>
                        <td>
                          <code>.font-[weight]</code>
                        </td>
                      </tr>
                      <tr>
                        <td className="">
                          <b>Weight</b>
                        </td>
                        <td>bold | semibold | normal | light </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Font Color</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="mb-4">
                  <p className="text-primary">Demo Content Title</p>
                  <p className="text-secondary">Demo Content Title</p>
                  <p className="text-info">Demo Content Title</p>
                  <p className="text-success">Demo Content Title</p>
                  <p className="text-warning">Demo Content Title</p>
                  <p className="text-danger">Demo Content Title</p>
                  <p className="text-purple">Demo Content Title</p>
                  <p className="text-orange">Demo Content Title</p>
                </div>
                <div className="table-responsive">
                  <Table className="table table-bordered text-nowrap mg-t-0">
                    <tbody>
                      <tr>
                        <td className="wd-20p">
                          <b>Classes</b>
                        </td>
                        <td>
                          <code>.text-[color]</code>
                        </td>
                      </tr>
                      <tr>
                        <td className="wd-20p">
                          <b>Colors</b>
                        </td>
                        <td>
                          primary | success | warning | danger | info | indigo |
                          purple | orange | teal | pink | black | white |
                          inverse
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
)
  };

Typography.propTypes = {};

Typography.defaultProps = {};

export default Typography;
