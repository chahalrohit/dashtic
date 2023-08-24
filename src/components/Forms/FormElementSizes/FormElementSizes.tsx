import React, { LegacyRef, useRef } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Input,
  Label,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const FormElementSizes = () => {

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
      title="Form Sizes"
      home="Home"
      name="Forms"
      fonticonsname="Form Sizes"
    />
    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3" className="mb-0 ">
              Form Element Sizes
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xl="12">
                <p>
                  Form control small Size add class{" "}
                  <code className="highlighter-rouge">.form-control-sm</code> to{" "}
                  <code className="highlighter-rouge">.form-control</code>
                </p>
                <div className="mb-3">
                  <Input
                    type="text"
                    className="form-control form-control-sm"
                    name="input"
                  />
                </div>
              </Col>
              <Col xl="12">
                <div className="mb-3">
                  <Label>
                    Form Control Medium Size{" "}
                    <code className="highlighter-rouge">.form-control</code>
                  </Label>
                  <Input type="text" className="form-control" name="input" />
                </div>
              </Col>
              <Col xl="12">
                <div className="mb-3">
                  <p>
                    Form control small Size add class{" "}
                    <code className="highlighter-rouge">.form-control-lg</code>{" "}
                    to <code className="highlighter-rouge">.form-control</code>
                  </p>
                  <Input
                    type="text"
                    className="form-control form-control-lg"
                    name="input"
                  />
                </div>
              </Col>
            </Row>
            {/* <!---Prism Pre code--> */}
            <figure className="highlight" id="Element">
              <pre ref={elementRef}>
                <code className="language-markup">{`
   <Row>
     <Col xl="12">
       <p>
         Form control small Size add class{" "}
         <code className="highlighter-rouge">
           .form-control-sm
         </code>{" "}
         to{" "}
         <code className="highlighter-rouge">
           .form-control
         </code>
       </p>
       <div className="mb-3">
         <Input
           type="text"
           className="form-control form-control-sm"
           name="input"
         />
       </div>
     </Col>
     <Col xl="12">
       <div className="mb-3">
         <Label>
           Form Control Medium Size{" "}
           <code className="highlighter-rouge">
             .form-control
           </code>
         </Label>
         <Input
           type="text"
           className="form-control"
           name="input"
         />
       </div>
     </Col>
     <Col xl="12">
       <div className="mb-3">
         <p>
           Form control small Size add class{" "}
           <code className="highlighter-rouge">
             .form-control-lg
           </code>{" "}
           to{" "}
           <code className="highlighter-rouge">
             .form-control
           </code>
         </p>
         <Input
           type="text"
           className="form-control form-control-lg"
           name="input"
         />
       </div>
     </Col>
   </Row>
                `}</code>
              </pre>
              <div
                className="clipboard-icon text-white-50"
                data-clipboard-target="#Element"
              >
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
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3" className="mb-0 ">
              Checkbox Sizes
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xl="4">
                <div className="mb-3 m-0">
                  <div className="form-label mb-4">Checkboxes</div>
                  <div className="custom-controls-stacked">
                    <Label className="custom-control custom-checkbox">
                      <Input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label">Option 1</span>
                    </Label>
                    <Label className="custom-control custom-checkbox">
                      <Input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label">Option 2</span>
                    </Label>
                    <Label className="custom-control custom-checkbox">
                      <Input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox3"
                        value="option3"
                        disabled
                      />
                      <span className="custom-control-label">
                        Option Disabled
                      </span>
                    </Label>
                    <Label className="custom-control custom-checkbox">
                      <Input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox4"
                        value="option4"
                        defaultChecked
                        disabled
                      />
                      <span className="custom-control-label">
                        Option Disabled Checked
                      </span>
                    </Label>
                  </div>
                </div>
              </Col>
              <Col xl="4" className="mt-4 mt-xl-0">
                <div className="mb-3 m-0">
                  <div className="form-label mb-4">Checkboxes Medium Sizes</div>
                  <div className="custom-controls-stacked">
                    <Label className="custom-control custom-checkbox custom-control-md">
                      <Input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-md">
                        Option 1
                      </span>
                    </Label>
                    <Label className="custom-control custom-checkbox custom-control-md">
                      <Input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label custom-control-label-md">
                        Option 2
                      </span>
                    </Label>
                    <Label className="custom-control custom-checkbox custom-control-md">
                      <Input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox3"
                        value="option3"
                        disabled
                      />
                      <span className="custom-control-label custom-control-label-md">
                        Option Disabled
                      </span>
                    </Label>
                    <Label className="custom-control custom-checkbox custom-control-md">
                      <Input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox4"
                        value="option4"
                        defaultChecked
                        disabled
                      />
                      <span className="custom-control-label custom-control-label-md">
                        Option Disabled Checked
                      </span>
                    </Label>
                  </div>
                </div>
              </Col>
              <Col xl="4" className="mt-4 mt-xl-0">
                <div className="mb-3 m-0">
                  <div className="form-label mb-4">Checkboxes Large Size</div>
                  <div className="custom-controls-stacked">
                    <Label className="custom-control custom-checkbox custom-control-lg">
                      <Input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-lg">
                        Option 1
                      </span>
                    </Label>
                    <Label className="custom-control custom-checkbox custom-control-lg">
                      <Input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox2"
                        value="option2"
                      />
                      <span className="custom-control-label custom-control-label-lg">
                        Option 2
                      </span>
                    </Label>
                    <Label className="custom-control custom-checkbox custom-control-lg">
                      <Input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox3"
                        value="option3"
                        disabled
                      />
                      <span className="custom-control-label custom-control-label-lg">
                        Option Disabled
                      </span>
                    </Label>
                    <Label className="custom-control custom-checkbox custom-control-lg">
                      <Input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox4"
                        value="option4"
                        defaultChecked
                        disabled
                      />
                      <span className="custom-control-label custom-control-label-lg">
                        Option Disabled Checked
                      </span>
                    </Label>
                  </div>
                </div>
              </Col>
            </Row>

            {/* <!---Prism Pre code--> */}
            <figure className="highlight" id="Element1">
              <pre ref={elementRef2}>
                <code className="language-markup">{`
   <Row>
     <Col xl="4">
       <div className="mb-3 m-0">
         <div className="form-label mb-4">Checkboxes</div>
         <div className="custom-controls-stacked">
           <Label className="custom-control custom-checkbox">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox1"
               value="option1"
               defaultChecked
             />
             <span className="custom-control-label">
               Option 1
             </span>
           </Label>
           <Label className="custom-control custom-checkbox">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox2"
               value="option2"
             />
             <span className="custom-control-label">
               Option 2
             </span>
           </Label>
           <Label className="custom-control custom-checkbox">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox3"
               value="option3"
               disabled
             />
             <span className="custom-control-label">
               Option Disabled
             </span>
           </Label>
           <Label className="custom-control custom-checkbox">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox4"
               value="option4"
               defaultChecked
               disabled
             />
             <span className="custom-control-label">
               Option Disabled Checked
             </span>
           </Label>
         </div>
       </div>
     </Col>
     <Col xl="4" className="mt-4 mt-xl-0">
       <div className="mb-3 m-0">
         <div className="form-label mb-4">
           Checkboxes Medium Sizes
         </div>
         <div className="custom-controls-stacked">
           <Label className="custom-control custom-checkbox custom-control-md">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox1"
               value="option1"
               defaultChecked
             />
             <span className="custom-control-label custom-control-label-md">
               Option 1
             </span>
           </Label>
           <Label className="custom-control custom-checkbox custom-control-md">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox2"
               value="option2"
             />
             <span className="custom-control-label custom-control-label-md">
               Option 2
             </span>
           </Label>
           <Label className="custom-control custom-checkbox custom-control-md">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox3"
               value="option3"
               disabled
             />
             <span className="custom-control-label custom-control-label-md">
               Option Disabled
             </span>
           </Label>
           <Label className="custom-control custom-checkbox custom-control-md">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox4"
               value="option4"
               defaultChecked
               disabled
             />
             <span className="custom-control-label custom-control-label-md">
               Option Disabled Checked
             </span>
           </Label>
         </div>
       </div>
     </Col>
     <Col xl="4" className="mt-4 mt-xl-0">
       <div className="mb-3 m-0">
         <div className="form-label mb-4">
           Checkboxes Large Size
         </div>
         <div className="custom-controls-stacked">
           <Label className="custom-control custom-checkbox custom-control-lg">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox1"
               value="option1"
               defaultChecked
             />
             <span className="custom-control-label custom-control-label-lg">
               Option 1
             </span>
           </Label>
           <Label className="custom-control custom-checkbox custom-control-lg">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox2"
               value="option2"
             />
             <span className="custom-control-label custom-control-label-lg">
               Option 2
             </span>
           </Label>
           <Label className="custom-control custom-checkbox custom-control-lg">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox3"
               value="option3"
               disabled
             />
             <span className="custom-control-label custom-control-label-lg">
               Option Disabled
             </span>
           </Label>
           <Label className="custom-control custom-checkbox custom-control-lg">
             <Input
               type="checkbox"
               className="custom-control-input"
               name="example-checkbox4"
               value="option4"
               defaultChecked
               disabled
             />
             <span className="custom-control-label custom-control-label-lg">
               Option Disabled Checked
             </span>
           </Label>
         </div>
       </div>
     </Col>
   </Row>
                `}</code>
              </pre>
              <div
                className="clipboard-icon text-white-50"
                data-clipboard-target="#Element1"
              >
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
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3" className="mb-0 ">
              Radio Sizes
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xl="4">
                <div className="mb-3 ">
                  <div className="form-label">Radios</div>
                  <div className="custom-controls-stacked">
                    <Label className="custom-control custom-radio">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label">Option 1</span>
                    </Label>
                    <Label className="custom-control custom-radio">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios"
                        value="option2"
                      />
                      <span className="custom-control-label">Option 2</span>
                    </Label>
                    <Label className="custom-control custom-radio">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios"
                        value="option3"
                        disabled
                      />
                      <span className="custom-control-label">
                        Option Disabled
                      </span>
                    </Label>
                    <Label className="custom-control custom-radio">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios02"
                        value="option4"
                        disabled
                        defaultChecked
                      />
                      <span className="custom-control-label">
                        Option Disabled Checked
                      </span>
                    </Label>
                  </div>
                </div>
              </Col>
              <Col xl="4" className="mt-4 mt-xl-0">
                <div className="mb-3 ">
                  <div className="form-label">Medium Radios</div>
                  <div className="custom-controls-stacked">
                    <Label className="custom-control custom-radio custom-control-md">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios1"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-md">
                        Option 1
                      </span>
                    </Label>
                    <Label className="custom-control custom-radio custom-control-md">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios1"
                        value="option2"
                      />
                      <span className="custom-control-label custom-control-label-md">
                        Option 2
                      </span>
                    </Label>
                    <Label className="custom-control custom-radio custom-control-md">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios1"
                        value="option3"
                        disabled
                      />
                      <span className="custom-control-label custom-control-label-md">
                        Option Disabled
                      </span>
                    </Label>
                    <Label className="custom-control custom-radio custom-control-md">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios12"
                        value="option4"
                        disabled
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-md">
                        Option Disabled Checked
                      </span>
                    </Label>
                  </div>
                </div>
              </Col>
              <Col xl="4" className="mt-4 mt-xl-0">
                <div className="mb-3 ">
                  <div className="form-label">Large Radios</div>
                  <div className="custom-controls-stacked">
                    <Label className="custom-control custom-radio custom-control-lg">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios2"
                        value="option1"
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-lg">
                        Option 1
                      </span>
                    </Label>
                    <Label className="custom-control custom-radio custom-control-lg">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios2"
                        value="option2"
                      />
                      <span className="custom-control-label custom-control-label-lg">
                        Option 2
                      </span>
                    </Label>
                    <Label className="custom-control custom-radio custom-control-lg">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios2"
                        value="option3"
                        disabled
                      />
                      <span className="custom-control-label custom-control-label-lg">
                        Option Disabled
                      </span>
                    </Label>
                    <Label className="custom-control custom-radio custom-control-lg">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="example-radios22"
                        value="option4"
                        disabled
                        defaultChecked
                      />
                      <span className="custom-control-label custom-control-label-lg">
                        Option Disabled Checked
                      </span>
                    </Label>
                  </div>
                </div>
              </Col>
            </Row>
            {/* <!---Prism Pre code--> */}
            <figure className="highlight" id="Element2">
              <pre ref={elementRef3}>
                <code className="language-markup">{`                 
    <Row>
      <Col xl="4">
        <div className="mb-3 ">
          <div className="form-label">Radios</div>
          <div className="custom-controls-stacked">
            <Label className="custom-control custom-radio">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios"
                value="option1"
                defaultChecked
              />
              <span className="custom-control-label">
                Option 1
              </span>
            </Label>
            <Label className="custom-control custom-radio">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios"
                value="option2"
              />
              <span className="custom-control-label">
                Option 2
              </span>
            </Label>
            <Label className="custom-control custom-radio">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios"
                value="option3"
                disabled
              />
              <span className="custom-control-label">
                Option Disabled
              </span>
            </Label>
            <Label className="custom-control custom-radio">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios02"
                value="option4"
                disabled
                defaultChecked
              />
              <span className="custom-control-label">
                Option Disabled Checked
              </span>
            </Label>
          </div>
        </div>
      </Col>
      <Col xl="4" className="mt-4 mt-xl-0">
        <div className="mb-3 ">
          <div className="form-label">Medium Radios</div>
          <div className="custom-controls-stacked">
            <Label className="custom-control custom-radio custom-control-md">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios1"
                value="option1"
                defaultChecked
              />
              <span className="custom-control-label custom-control-label-md">
                Option 1
              </span>
            </Label>
            <Label className="custom-control custom-radio custom-control-md">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios1"
                value="option2"
              />
              <span className="custom-control-label custom-control-label-md">
                Option 2
              </span>
            </Label>
            <Label className="custom-control custom-radio custom-control-md">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios1"
                value="option3"
                disabled
              />
              <span className="custom-control-label custom-control-label-md">
                Option Disabled
              </span>
            </Label>
            <Label className="custom-control custom-radio custom-control-md">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios12"
                value="option4"
                disabled
                defaultChecked
              />
              <span className="custom-control-label custom-control-label-md">
                Option Disabled Checked
              </span>
            </Label>
          </div>
        </div>
      </Col>
      <Col xl="4" className="mt-4 mt-xl-0">
        <div className="mb-3 ">
          <div className="form-label">Large Radios</div>
          <div className="custom-controls-stacked">
            <Label className="custom-control custom-radio custom-control-lg">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios2"
                value="option1"
                defaultChecked
              />
              <span className="custom-control-label custom-control-label-lg">
                Option 1
              </span>
            </Label>
            <Label className="custom-control custom-radio custom-control-lg">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios2"
                value="option2"
              />
              <span className="custom-control-label custom-control-label-lg">
                Option 2
              </span>
            </Label>
            <Label className="custom-control custom-radio custom-control-lg">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios2"
                value="option3"
                disabled
              />
              <span className="custom-control-label custom-control-label-lg">
                Option Disabled
              </span>
            </Label>
            <Label className="custom-control custom-radio custom-control-lg">
              <Input
                type="radio"
                className="custom-control-input"
                name="example-radios22"
                value="option4"
                disabled
                defaultChecked
              />
              <span className="custom-control-label custom-control-label-lg">
                Option Disabled Checked
              </span>
            </Label>
          </div>
        </div>
      </Col>
    </Row>
    `}
                </code>
              </pre>
              <div
                className="clipboard-icon text-white-50"
                data-clipboard-target="#Element2"
              >
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
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3" className="mb-0 ">
              Check Box Sizes Switches
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xl="4">
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Check Box
                    </span>
                    <Input
                      type="checkbox"
                      name="form-switch-checkbox1"
                      className="form-switch-input"
                    />
                    <span className="form-switch-indicator"></span>
                  </Label>
                </div>
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Check Box
                    </span>
                    <Input
                      type="checkbox"
                      name="form-switch-checkbox1"
                      className="form-switch-input"
                      defaultChecked
                    />
                    <span className="form-switch-indicator form-switch-indicator-lg"></span>
                  </Label>
                </div>
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Check Box
                    </span>
                    <Input
                      type="checkbox"
                      name="form-switch-checkbox1"
                      className="form-switch-input"
                    />
                    <span className="form-switch-indicator form-switch-indicator-xl"></span>
                  </Label>
                </div>
              </Col>
              <Col xl="4" className="mt-4 mt-xl-0">
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Check Box
                    </span>
                    <Input
                      type="checkbox"
                      name="form-switch-checkbox2"
                      className="form-switch-input"
                    />
                    <span className="form-switch-indicator custom-square"></span>
                  </Label>
                </div>
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Check Box
                    </span>
                    <Input
                      type="checkbox"
                      name="form-switch-checkbox2"
                      className="form-switch-input"
                    />
                    <span className="form-switch-indicator form-switch-indicator-lg custom-square"></span>
                  </Label>
                </div>
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Check Box
                    </span>
                    <Input
                      type="checkbox"
                      name="form-switch-checkbox2"
                      className="form-switch-input"
                      defaultChecked
                    />
                    <span className="form-switch-indicator form-switch-indicator-xl custom-square"></span>
                  </Label>
                </div>
              </Col>
              <Col xl="4" className="mt-4 mt-xl-0">
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Check Box
                    </span>
                    <Input
                      type="checkbox"
                      name="form-switch-checkbox3"
                      className="form-switch-input"
                      defaultChecked
                    />
                    <span className="form-switch-indicator custom-radius"></span>
                  </Label>
                </div>
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Check Box
                    </span>
                    <Input
                      type="checkbox"
                      name="form-switch-checkbox3"
                      className="form-switch-input"
                    />
                    <span className="form-switch-indicator form-switch-indicator-lg custom-radius"></span>
                  </Label>
                </div>
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Check Box
                    </span>
                    <Input
                      type="checkbox"
                      name="form-switch-checkbox3"
                      className="form-switch-input"
                    />
                    <span className="form-switch-indicator form-switch-indicator-xl custom-radius"></span>
                  </Label>
                </div>
              </Col>
            </Row>
            {/* <!---Prism Pre code--> */}
            <figure className="highlight" id="Element3">
              <pre ref={elementRef4}>
                <code className="language-markup">{`
   <Row>
     <Col xl="4">
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-lg"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-xl"></span>
         </Label>
       </div>
     </Col>
     <Col xl="4" className="mt-4 mt-xl-0">
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator custom-square"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-lg custom-square"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-xl custom-square"></span>
         </Label>
       </div>
     </Col>
     <Col xl="4" className="mt-4 mt-xl-0">
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator custom-radius"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-lg custom-radius"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Check Box
           </span>
           <Input
             type="checkbox"
             name="form-switch-checkbox"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-xl custom-radius"></span>
         </Label>
       </div>
     </Col>
   </Row>
                `}</code>
              </pre>
              <div
                className="clipboard-icon text-white-50"
                data-clipboard-target="#Element3"
              >
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
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3" className="mb-0 ">
              Radio Button Sizes Switches
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xl="4">
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Radio Buttons
                    </span>
                    <Input
                      type="radio"
                      name="form-switch-radio"
                      className="form-switch-input"
                    />
                    <span className="form-switch-indicator"></span>
                  </Label>
                </div>
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Radio Buttons
                    </span>
                    <Input
                      type="radio"
                      name="form-switch-radio"
                      className="form-switch-input"
                    />
                    <span className="form-switch-indicator form-switch-indicator-lg"></span>
                  </Label>
                </div>
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Radio Buttons
                    </span>
                    <Input
                      type="radio"
                      name="form-switch-radio"
                      className="form-switch-input"
                      defaultChecked
                    />
                    <span className="form-switch-indicator form-switch-indicator-xl"></span>
                  </Label>
                </div>
              </Col>
              <Col xl="4" className="mt-4 mt-xl-0">
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Radio Buttons
                    </span>
                    <Input
                      type="radio"
                      name="form-switch-radio1"
                      className="form-switch-input"
                    />
                    <span className="form-switch-indicator custom-square"></span>
                  </Label>
                </div>
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Radio Buttons
                    </span>
                    <Input
                      type="radio"
                      name="form-switch-radio1"
                      className="form-switch-input"
                    />
                    <span className="form-switch-indicator form-switch-indicator-lg custom-square"></span>
                  </Label>
                </div>
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Radio Buttons
                    </span>
                    <Input
                      type="radio"
                      name="form-switch-radio1"
                      className="form-switch-input"
                      defaultChecked
                    />
                    <span className="form-switch-indicator form-switch-indicator-xl custom-square"></span>
                  </Label>
                </div>
              </Col>
              <Col xl="4" className="mt-4 mt-xl-0">
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Radio Buttons
                    </span>
                    <Input
                      type="radio"
                      name="form-switch-radio2"
                      className="form-switch-input"
                      defaultChecked
                    />
                    <span className="form-switch-indicator custom-radius"></span>
                  </Label>
                </div>
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Radio Buttons
                    </span>
                    <Input
                      type="radio"
                      name="form-switch-radio2"
                      className="form-switch-input"
                    />
                    <span className="form-switch-indicator form-switch-indicator-lg custom-radius"></span>
                  </Label>
                </div>
                <div className="mb-3">
                  <Label className="form-switch">
                    <span className="form-switch-description me-2">
                      Radio Buttons
                    </span>
                    <Input
                      type="radio"
                      name="form-switch-radio2"
                      className="form-switch-input"
                    />
                    <span className="form-switch-indicator form-switch-indicator-xl custom-radius"></span>
                  </Label>
                </div>
              </Col>
            </Row>
            {/* <!---Prism Pre code--> */}
            <figure className="highlight" id="Element4">
              <pre ref={elementRef5}>
                <code className="language-markup">{`
  <Row>
     <Col xl="4">
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio"
             className="form-switch-input"
           />
           <span className="form-switch-indicator"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-lg"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-xl"></span>
         </Label>
       </div>
     </Col>
     <Col xl="4" className="mt-4 mt-xl-0">
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio1"
             className="form-switch-input"
           />
           <span className="form-switch-indicator custom-square"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio1"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-lg custom-square"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio1"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-xl custom-square"></span>
         </Label>
       </div>
     </Col>
     <Col xl="4" className="mt-4 mt-xl-0">
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio2"
             className="form-switch-input"
           />
           <span className="form-switch-indicator custom-radius"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio2"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-lg custom-radius"></span>
         </Label>
       </div>
       <div className="mb-3">
         <Label className="form-switch">
           <span className="form-switch-description me-2">
             Radio Buttons
           </span>
           <Input
             type="radio"
             name="form-switch-radio2"
             className="form-switch-input"
           />
           <span className="form-switch-indicator form-switch-indicator-xl custom-radius"></span>
         </Label>
       </div>
     </Col>
   </Row>
                `}</code>
              </pre>
              <div
                className="clipboard-icon text-white-50"
                data-clipboard-target="#Element4"
              >
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
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
)
  };

FormElementSizes.propTypes = {};

FormElementSizes.defaultProps = {};

export default FormElementSizes;
