import React, { LegacyRef, useRef } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Button,
  Label,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Tooltips = () => {

      //clipboard functions
      const elementRef: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
      const elementRef2: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)

    //clipboard function for ShowCode
  
  let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
    let data = ele.current?.innerText
    navigator.clipboard.writeText(data || '')
    alert("Text copied successfully")
    }

  return (

  <div>
    <PageHeaders
      title="Tooltip"
      home="Home"
      name="Elements"
      fonticonsname="Tooltip"
    />

    <Row>
      <Col lg="12">
        {/* <!-- div --> */}
        <Card id="Tooltip">
          <CardHeader>
            <CardTitle>Default Tooltip</CardTitle>
          </CardHeader>
          <CardBody>
            <Label className="form-label mb-2">Static Example</Label>
            <div className="tooltip-static-demo mb-4 border br-3">
              <Row>
                <Col sm="6" lg="3">
                  <div className="tooltip bs-tooltip-top" role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">Tooltip on the top</div>
                  </div>
                </Col>
                <Col sm="6" lg="3" className=" mg-t-30 mg-sm-t-0">
                  <div className="tooltip bs-tooltip-bottom" role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">Tooltip on the bottom</div>
                  </div>
                </Col>
                <Col sm="6" lg="3" className=" mg-t-30 mg-lg-t-0">
                  <div className="tooltip bs-tooltip-start" role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">Tooltip on the right</div>
                  </div>
                </Col>
                <Col sm="6" lg="3" className=" mg-t-30 mg-lg-t-0">
                  <div className="tooltip bs-tooltip-end" role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">Tooltip on the left</div>
                  </div>
                </Col>
              </Row>
            </div>
            {/* <!-- tooltip-static-demo --> */}
            <Label className="form-label mb-2">Example</Label>
            <div className="bg-light px-4 pt-4 pb-2 border br-3">
              <Row className="text-center">
                <Col sm="6" lg="3" className=" mb-3">
                  <Button
                    color=""
                    className="btn btn-secondary"
                    data-bs-placement="top"
                    data-bs-toggle="tooltip"
                    id="top"
                    title="Tooltip on top"
                    type="button"
                  >
                    Hover me
                  </Button>
                  <UncontrolledTooltip placement="top" target="top">
                    Tooltip on Top
                  </UncontrolledTooltip>
                </Col>
                <Col sm="6" lg="3" className=" mb-3">
                  <Button
                    color=""
                    className="btn btn-secondary"
                    data-bs-placement="bottom"
                    id="bottom"
                    data-bs-toggle="tooltip"
                    title="Tooltip on Bottom"
                    type="button"
                  >
                    Hover me
                  </Button>
                  <UncontrolledTooltip placement="bottom" target="bottom">
                    Tooltip on Bottom
                  </UncontrolledTooltip>
                </Col>
                <Col sm="6" lg="3" className=" mb-3">
                  <Button
                    color=""
                    className="btn btn-secondary"
                    data-bs-placement="right"
                    id="right"
                    data-bs-toggle="tooltip"
                    title="Tooltip on right"
                    type="button"
                  >
                    Hover me
                  </Button>
                  <UncontrolledTooltip placement="right" target="right">
                    Tooltip on Right
                  </UncontrolledTooltip>
                </Col>
                <Col sm="6" lg="3" className=" mb-3">
                  <Button
                    color=""
                    className="btn btn-secondary"
                    data-bs-placement="left"
                    id="left"
                    data-bs-toggle="tooltip"
                    title="Tooltip on left"
                    type="button"
                  >
                    Hover me
                  </Button>
                  <UncontrolledTooltip placement="left" target="left">
                    Tooltip on Left
                  </UncontrolledTooltip>
                </Col>
              </Row>
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
            Html{" "}
          </div>
          {/* <!---Prism Pre code--> */}
          <figure className="highlight mb-0" id="element1">
            <pre ref={elementRef}>
              <code className="language-markup mb-0">
                {`
    <Row className="text-center">
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-placement="top"
        data-bs-toggle="tooltip"
        id="top"
        title="Tooltip on top"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip placement="top" target="top">
        Tooltip on Top
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-placement="bottom"
        id="bottom"
        data-bs-toggle="tooltip"
        title="Tooltip on Bottom"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip placement="bottom" target="bottom">
        Tooltip on Bottom
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-placement="right"
        id="right"
        data-bs-toggle="tooltip"
        title="Tooltip on right"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip placement="right" target="right">
        Tooltip on Right
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        data-bs-placement="left"
        id="left"
        data-bs-toggle="tooltip"
        title="Tooltip on left"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip placement="left" target="left">
        Tooltip on Left
      </UncontrolledTooltip>
    </Col>
  </Row>
                `}
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
        {/* <!-- /div --> */}
        {/* <!-- div --> */}
        <Card id="Tooltip1">
          <CardHeader>
            <CardTitle>Color Tooltip</CardTitle>
          </CardHeader>
          <CardBody>
            <Label className="form-label  mb-2">Static Example</Label>
            <div className="tooltip-static-demo mb-4 border br-3">
              <Row>
                <Col sm="6" lg="3">
                  <div
                    className="tooltip tooltip-primary bs-tooltip-top"
                    role="tooltip"
                  >
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">Tooltip on the top</div>
                  </div>
                </Col>
                <Col sm="6" lg="3" className=" mg-t-30 mg-sm-t-0">
                  <div
                    className="tooltip tooltip-secondary bs-tooltip-bottom"
                    role="tooltip"
                  >
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">Tooltip on the bottom</div>
                  </div>
                </Col>
                <Col sm="6" lg="3" className=" mg-t-30 mg-lg-t-0">
                  <div
                    className="tooltip tooltip-danger bs-tooltip-start"
                    role="tooltip"
                  >
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">Tooltip on the left</div>
                  </div>
                </Col>
                <Col sm="6" lg="3" className=" mg-t-30 mg-lg-t-0">
                  <div
                    className="tooltip tooltip-info bs-tooltip-end"
                    role="tooltip"
                  >
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">Tooltip on the right</div>
                  </div>
                </Col>
              </Row>
            </div>
            {/* <!-- tooltip-static-demo --> */}
            <Label className="form-label mb-2">Example</Label>
            <div className="bg-light px-4 pt-4 pb-2 border br-3">
              <Row className="text-center color-tooltip">
                <Col sm="6" lg="3" className=" mb-3">
                  <Button
                    color=""
                    className="btn btn-secondary"
                    id="colortop"
                    data-bs-toggle="tooltip-primary"
                    title="Tooltip on top"
                    type="button"
                  >
                    Hover me
                  </Button>
                  <UncontrolledTooltip
                    placement="top"
                    target="colortop"
                    className="primary-tooltip"
                    style={{ background: "var(--primary-bg-color)" }}
                  >
                    Tooltip on Top
                  </UncontrolledTooltip>
                </Col>
                <Col sm="6" lg="3" className=" mb-3">
                  <Button
                    color=""
                    className="btn btn-secondary"
                    id="colorbottom"
                    data-bs-toggle="tooltip-secondary"
                    title="Tooltip on bottom"
                    type="button"
                  >
                    Hover me
                  </Button>
                  <UncontrolledTooltip
                    placement="bottom"
                    target="colorbottom"
                    className="primary-tooltip"
                    style={{ background: "var(--primary-bg-color)" }}
                  >
                    Tooltip on Bottom
                  </UncontrolledTooltip>
                </Col>
                <Col sm="6" lg="3" className=" mb-3">
                  <Button
                    color=""
                    className="btn btn-secondary"
                    id="colorright"
                    data-bs-toggle="tooltip-danger"
                    title="Tooltip on right"
                    type="button"
                  >
                    Hover me
                  </Button>
                  <UncontrolledTooltip
                    placement="right"
                    target="colorright"
                    className="primary-tooltip"
                    style={{ background: "var(--primary-bg-color)" }}
                  >
                    Tooltip on Right
                  </UncontrolledTooltip>
                </Col>
                <Col sm="6" lg="3" className=" mb-3">
                  <Button
                    color=""
                    className="btn btn-secondary"
                    id="colorleft"
                    data-bs-placement="left"
                    data-bs-toggle="tooltip-info"
                    title="Tooltip on left"
                    type="button"
                  >
                    Hover me
                  </Button>
                  <UncontrolledTooltip
                    placement="left"
                    target="colorleft"
                    className="primary-tooltip"
                    style={{ background: "var(--primary-bg-color)" }}
                  >
                    Tooltip on Left
                  </UncontrolledTooltip>
                </Col>
              </Row>
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
            Html{" "}
          </div>
          {/* <!---Prism Pre code--> */}
          <figure className="highlight mb-0" id="element2">
            <pre ref={elementRef2}>
              <code className="language-markup mb-0">
                {`
    <Row className="text-center color-tooltip">
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        id="colortop"
        data-bs-toggle="tooltip-primary"
        title="Tooltip on top"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip
        placement="top"
        target="colortop"
        className="primary-tooltip"
        style={{ background: "var(--primary-bg-color)" }}
      >
        Tooltip on Top
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        id="colorbottom"
        data-bs-toggle="tooltip-secondary"
        title="Tooltip on bottom"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip
        placement="bottom"
        target="colorbottom"
        className="primary-tooltip"
        style={{ background: "var(--primary-bg-color)" }}
      >
        Tooltip on Bottom
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        id="colorright"
        data-bs-toggle="tooltip-danger"
        title="Tooltip on right"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip
        placement="right"
        target="colorright"
        className="primary-tooltip"
        style={{ background: "var(--primary-bg-color)" }}
      >
        Tooltip on Right
      </UncontrolledTooltip>
    </Col>
    <Col sm="6" lg="3" className=" mb-3">
      <Button
        color=""
        className="btn btn-secondary"
        id="colorleft"
        data-bs-placement="left"
        data-bs-toggle="tooltip-info"
        title="Tooltip on left"
        type="button"
      >
        Hover me
      </Button>
      <UncontrolledTooltip
        placement="left"
        target="colorleft"
        className="primary-tooltip"
        style={{ background: "var(--primary-bg-color)" }}
      >
        Tooltip on Left
      </UncontrolledTooltip>
    </Col>
  </Row>
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
        {/* <!-- /div --> */}
      </Col>
    </Row>
  </div>
)
          };

Tooltips.propTypes = {};

Tooltips.defaultProps = {};

export default Tooltips;
