import React, { LegacyRef, useRef, useState } from "react";
import Select from "react-select";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  FormGroup,
  Form,
  UncontrolledTooltip,
  ModalProps,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Modals = (args: [] | undefined) => {

  
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

  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  //small modall
  const [modal1, setModal1] = useState(false);

  const toggle1 = () => setModal1(!modal1);

  const [modalsmall, setModalsmall] = useState(false);

  const togglesmall = () => setModalsmall(!modalsmall);
  //small modal
  //large modal
  const [modallg, setModallg] = useState(false);

  const togglelg = () => setModallg(!modallg);
  //large modal
  //success modal
  const [modalsuccess, setModalsuccess] = useState(false);

  const togglesuccess = () => setModalsuccess(!modalsuccess);
  //success modal
  //Error modal
  const [modaldanger, setModaldanger] = useState(false);

  const toggledanger = () => setModaldanger(!modaldanger);
  //Error modal
  //Default modal
  const [modaldefault, setModaldefault] = useState(false);

  const toggledefault = () => setModaldefault(!modaldefault);

  //Default modal
  //large modal
  const [modallarge, setModallarge] = useState(false);

  const togglelarge = () => setModallarge(!modallarge);

  //large modal
  //Grid modal
  const [modalGrid, setModalGrid] = useState(false);

  const toggleGrid = () => setModalGrid(!modalGrid);

  //Grid modal
  //Fade modal
  const [modalFade, setModalFade] = useState(false);

  const toggleFade = () => setModalFade(!modalFade);

  //Fade modal
  //Scroll modal
  const [modalScroll, setModalScroll] = useState(false);

  const toggleScroll = () => setModalScroll(!modalScroll);

  //Scroll modal
  //@mdo modal
  const [modalmdo, setModalmdo] = useState(false);

  const togglemdo = () => setModalmdo(!modalmdo);
  //@mdo modal
  //@fat modal
  const [modalfat, setModalfat] = useState(false);

  const togglefat = () => setModalfat(!modalfat);
  //@mdo modal
  //justme modal
  const [modaljustme, setModaljustme] = useState(false);

  const togglejustme = () => setModaljustme(!modaljustme);
  //justme modal
  //tooltip modal
  const [modaltooltip, setModaltooltip] = useState(false);

  const toggletooltip = () => setModaltooltip(!modaltooltip);
  //tooltip modal
  //tooltip modal
  const [modalselect, setModalselect] = useState(false);

  const toggleselect = () => setModalselect(!modalselect);
  //tooltip modal
  //timeout modal
  const [modaltimeout, setModaltimeout] = useState(false);

  const toggletimeout = () => setModaltimeout(!modaltimeout);
  //timeout modal
  //timeout modal
  const [modalVertically, setModalVertically] = useState(false);

  const toggleVertically = () => setModalVertically(!modalVertically);
  //timeout modal
  //@getbootstrap modal
  const [modalgetbootstrap, setModalgetbootstrap] = useState(false);

  const togglegetbootstrap = () => setModalgetbootstrap(!modalgetbootstrap);
  //@getbootstrap modal
  //Nested modal
  const [modalNest, setModalNest] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggleNest = () => setModalNest(!modalNest);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  //Nested modal
  const options = [
    { value: "Firefox", label: "Firefox" },
    { value: "Chrome", label: "Chrome" },
    { value: "Safari", label: "Safari" },
    { value: "Opera", label: "Opera " },
    { value: "Internet Explorer", label: "Internet Explorer" },
  ];

  return (
    <div>
      <PageHeaders
        title="Modal"
        home="Home"
        name="Elements"
        fonticonsname="Modal"
      />

      <Row>
        <Col lg="12">
          {/* <!--div--> */}
          <Card id="modal">
            <CardHeader>
              <CardTitle>Basic Modal</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="p-4 bg-light border border-bottom-0">
                <div className="d-block pos-static">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content modal-content-demo">
                      <div className="modal-header">
                        <h6 className="modal-title">Message Preview</h6>
                        <Button
                          color=""
                          aria-label="Close"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          type="button"
                        >
                          
                        </Button>
                      </div>
                      <div className="modal-body">
                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <Button
                          color=""
                          className="btn btn-indigo"
                          type="button"
                        >
                          Save changes
                        </Button>{" "}
                        <Button
                          color=""
                          className="btn btn-light"
                          type="button"
                        >
                          Close
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- pd-y-50 --> */}
              <div className="text-center py-4 bg-light border">
                <Button color="" className="btn btn-primary" onClick={toggle}>
                  View Live Demo
                </Button>
                <Modal isOpen={modal} toggle={toggle} {...args}>
                  <ModalHeader toggle={toggle}>Message Preview</ModalHeader>
                  <ModalBody>
                    <h6>Why We Use Electoral College, Not Popular Vote</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color=""
                      className="btn btn-indigo"
                      onClick={toggle}
                    >
                      Save changes
                    </Button>{" "}
                    <Button color="" className="btn btn-light" onClick={toggle}>
                      Colse
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
              {/* <!-- pd-y-30 --> */}
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
  <Button color="" className="btn btn-primary" onClick={toggle}>
    View Live Demo
  </Button>
  <Modal isOpen={modal} toggle={toggle} {...args}>
  <ModalHeader toggle={toggle}>Message Preview</ModalHeader>
    <ModalBody>
      <h6>Why We Use Electoral College, Not Popular Vote</h6>
      <p>
        It is a long established fact that a reader will be
        distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it
        has a more-or-less normal distribution of letters, as
        opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
    </ModalBody>
    <ModalFooter>
      <Button
        color=""
        className="btn btn-indigo"
        onClick={toggle}
      >
        Save changes
      </Button>{" "}
      <Button color="" className="btn btn-light" onClick={toggle}>
        Colse
      </Button>
    </ModalFooter>
  </Modal>
                `}
                    {/* <!-- pd-y-30 --> */}
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
          {/* <!--/div--> */}
          {/* <!--div--> */}
          <Card id="modal1">
            <CardHeader>
              <CardTitle>Small Modal</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="p-4 bg-light border border-bottom-0">
                <div className="d-block pos-static">
                  <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content modal-content-demo">
                      <div className="modal-header">
                        <h6 className="modal-title">Notice</h6>
                        <Button
                        color=""
                          aria-label="Close"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          type="button"
                        >
                          
                        </Button>
                      </div>
                      <div className="modal-body">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>
                      </div>
                      <div className="modal-footer justify-content-center">
                        <Button color="" className="btn btn-indigo" type="button">
                          Save changes
                        </Button>{" "}
                        <Button color="" className="btn btn-light" type="button">
                          Close
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- modal-wrapper-demo --> */}
              <div className="text-center py-4 bg-light border">
                {/* <a className="btn btn-primary" data-bs-target="#modaldemo2" data-bs-toggle="modal" href="#">View Live Demo</a> */}
                <Button color="" className="btn btn-primary" onClick={toggle1}>
                  View Live Demo
                </Button>
                <Modal isOpen={modal1} toggle={toggle1} size="sm">
                  <ModalHeader toggle={toggle1}>Message </ModalHeader>
                  <ModalBody>
                    <h6>Why We Use Electoral College, Not Popular Vote</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color=""
                      className="btn btn-indigo"
                      onClick={toggle1}
                    >
                      Save changes
                    </Button>{" "}
                    <Button
                      color=""
                      className="btn btn-light"
                      onClick={toggle1}
                    >
                      Colse
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
              {/* <!-- pd-y-30 --> */}
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
                <code className="language-markup mb-0"> {`            
    <Button color="" className="btn btn-primary" onClick={toggle1}>
      View Live Demo
    </Button>
    <Modal isOpen={modal1} toggle={toggle1} size="sm">
    <ModalHeader toggle={toggle1}>Message </ModalHeader>
      <ModalBody>
        <h6>Why We Use Electoral College, Not Popular Vote</h6>
        <p>
          It is a long established fact that a reader will be
          distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button
          color=""
          className="btn btn-indigo"
          onClick={toggle1}
        >
          Save changes
        </Button>{" "}
        <Button
          color=""
          className="btn btn-light"
          onClick={toggle1}
        >
          Colse
        </Button>
      </ModalFooter>
    </Modal>
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
          {/* <!--/div--> */}
          {/* <!--div--> */}
          <Card id="modal2">
            <CardHeader>
              <CardTitle>Large Modal</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="p-4 bg-light border border-bottom-0">
                <div className="d-block pos-static">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content modal-content-demo">
                      <div className="modal-header">
                        <h6 className="modal-title">Message Preview</h6>
                        <Button
                        color=""
                          aria-label="Close"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          type="button"
                        >
                        </Button>
                      </div>
                      <div className="modal-body">
                        <h6>Why We Use Electoral College, Not Popular Vote</h6>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <Button color="" className="btn btn-indigo" type="button">
                          Save changes
                        </Button>
                        <Button color="" className="btn btn-light" type="button">
                          Close
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- modal-wrapper-demo --> */}
              <div className="text-center py-4 bg-light border">
                {/* <a className="btn btn-primary" data-bs-target="#modaldemo3" data-bs-toggle="modal" href="#">View Live Demo</a> */}
                <Button color="" className="btn btn-primary" onClick={togglelg}>
                  View Live Demo
                </Button>
                <Modal isOpen={modallg} toggle={togglelg} size="lg">
                  <ModalHeader toggle={togglelg}>Message </ModalHeader>
                  <ModalBody>
                    <h6>Why We Use Electoral College, Not Popular Vote</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color=""
                      className="btn btn-indigo"
                      onClick={togglelg}
                    >
                      Save changes
                    </Button>{" "}
                    <Button
                      color=""
                      className="btn btn-light"
                      onClick={togglelg}
                    >
                      Colse
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
              {/* <!-- pd-y-30 --> */}
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
    <Button color="" className="btn btn-primary" onClick={togglelg}>
      View Live Demo
    </Button>
    <Modal isOpen={modallg} toggle={togglelg} size="lg">
      <ModalHeader toggle={togglelg}>Message </ModalHeader>
      <ModalBody>
        <h6>Why We Use Electoral College, Not Popular Vote</h6>
        <p>
          It is a long established fact that a reader will be
          distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button
          color=""
          className="btn btn-indigo"
          onClick={togglelg}
        >
          Save changes
        </Button>{" "}
        <Button
          color=""
          className="btn btn-light"
          onClick={togglelg}
        >
          Colse
        </Button>
      </ModalFooter>
    </Modal>
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
          {/* <!--/div--> */}
          {/* <!--div--> */}
          <Card id="modal3">
            <CardHeader>
              <CardTitle>Success Alert Messages</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="p-4 bg-light border border-bottom-0">
                <div className="d-block pos-static">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body text-center p-4">
                        <Button
                        color=""
                          aria-label="Close"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          type="button"
                        >
                          
                        </Button>
                        <i className="fe fe-check-circle fs-100 text-success lh-1 mb-4 d-inline-block"></i>
                        <h4 className="text-success mb-4">Congratulations!</h4>
                        <p className="mb-4 mx-4">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration.
                        </p>
                        <Button color=""
                          className="btn btn-success pd-x-25"
                          type="button"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- modal-wrapper-demo --> */}
              <div className="text-center py-4 bg-light border">
                {/* <a className="btn btn-primary" data-bs-target="#modaldemo4" data-bs-toggle="modal" href="#">View Live Demo</a> */}
                <Button
                  color=""
                  className="btn btn-primary"
                  onClick={togglesuccess}
                >
                  View Live Demo
                </Button>
                <Modal isOpen={modalsuccess} toggle={togglesuccess}>
                <ModalHeader toggle={togglesuccess}>Message </ModalHeader>
                  <ModalBody className="text-center p-4">
                    <i className="fe fe-check-circle fs-100 text-success lh-1 mb-4 d-inline-block"></i>
                    <h4 className="text-success mb-4">Congratulations!</h4>
                    <p className="mb-4 mx-4">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                    <Button
                      onClick={togglesuccess}
                      color=""
                      className="btn btn-success pd-x-25"
                      type="button"
                    >
                      Continue
                    </Button>
                  </ModalBody>
                </Modal>
              </div>
              {/* <!-- modal-footer-demo --> */}
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
                <code className="language-markup mb-0">
                {` 
    <Button
      color=""
      className="btn btn-primary"
      onClick={togglesuccess}
    >
      View Live Demo
    </Button>
    <Modal isOpen={modalsuccess} toggle={togglesuccess}>
    <ModalHeader toggle={togglesuccess}>Message </ModalHeader>
      <ModalBody className="text-center p-4">
        <i className="fe fe-check-circle fs-100 text-success lh-1 mb-4 d-inline-block"></i>
        <h4 className="text-success mb-4">Congratulations!</h4>
        <p className="mb-4 mx-4">
          There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration.
        </p>
        <Button
          onClick={togglesuccess}
          color=""
          className="btn btn-success pd-x-25"
          type="button"
        >
          Continue
        </Button>
      </ModalBody>
    </Modal>`}
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
          {/* <!--/div--> */}
          {/* <!--div--> */}
          <Card id="modal4">
            <CardHeader>
              <CardTitle>Warning Alert Messages</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="p-4 bg-light border border-bottom-0 mg-t-20">
                <div className="d-block pos-static">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body text-center p-4">
                        <Button
                        color=""
                          aria-label="Close"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          type="button"
                        >
                          
                        </Button>
                        <i className="fe fe-x-circle fs-100 text-danger lh-1 mb-4 d-inline-block"></i>
                        <h4 className="text-danger mb-20">
                          Error: Cannot process your entry!
                        </h4>
                        <p className="mb-4 mx-4">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration.
                        </p>
                        <Button
                        color=""
                          aria-label="Close"
                          className="btn btn-danger pd-x-25"
                          type="button"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- modal-wrapper-demo --> */}
              <div className="text-center py-4 bg-light border">
                <Button
                  color=""
                  className="btn btn-primary"
                  onClick={toggledanger}
                >
                  View Live Demo
                </Button>
                <Modal isOpen={modaldanger} toggle={toggledanger}>
                <ModalHeader toggle={toggledanger}>Message </ModalHeader>
                  <ModalBody className="text-center p-4">
                    <i className="fe fe-x-circle fs-100 text-danger lh-1 mb-4 d-inline-block"></i>
                    <h4 className="text-danger mb-20">
                      Error: Cannot process your entry!
                    </h4>
                    <p className="mb-4 mx-4">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                    <Button
                      onClick={toggledanger}
                      color=""
                      className="btn btn-danger pd-x-25"
                      type="button"
                    >
                      Continue
                    </Button>
                  </ModalBody>
                </Modal>
              </div>
              {/* <!-- modal-footer-demo --> */}
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
                <code className="language-markup mb-0">
                 {`
    <Button
      color=""
      className="btn btn-primary"
      onClick={toggledanger}
    >
      View Live Demo
    </Button>
    <Modal isOpen={modaldanger} toggle={toggledanger}>
    <ModalHeader toggle={toggledanger}>Message </ModalHeader>
      <ModalBody className="text-center p-4">
        <i className="fe fe-x-circle fs-100 text-danger lh-1 mb-4 d-inline-block"></i>
        <h4 className="text-danger mb-20">
          Error: Cannot process your entry!
        </h4>
        <p className="mb-4 mx-4">
          There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration.
        </p>
        <Button
          onClick={toggledanger}
          color=""
          className="btn btn-danger pd-x-25"
          type="button"
        >
          Continue
        </Button>
      </ModalBody>
    </Modal>
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
          {/* <!--/div--> */}

          {/* <!--div--> */}
          <Card id="modal5">
            <CardHeader>
              <CardTitle>Modal Styles</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col sm="6" md="4" xl="3">
                  <Button
                    onClick={toggleGrid}
                    color=""
                    className="modal-effect btn btn-primary btn-block mb-3"
                  >
                    Grid Modal
                  </Button>
                  <Modal
                    backdrop={false}
                    isOpen={modalGrid}
                    toggle={toggleGrid}
                    {...args}
                    size="lg"
                  >
                    <ModalHeader toggle={toggleGrid}>Grid Modal 
                    </ModalHeader>
                    <ModalBody>
                      <Row>
                        {" "}
                        <Col md="6">
                          {" "}
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                          </p>
                        </Col>{" "}
                        <Col md="6">
                          {" "}
                          <p>
                            But I must explain to you how all this mistaken idea
                            of denouncing pleasure and praising pain was born
                            and I will give you a complete account of the who
                            loves toil and pain can procureor sit aspernatur
                            system.
                          </p>
                        </Col>{" "}
                      </Row>{" "}
                      <Row>
                        {" "}
                        <Col md="6">
                          {" "}
                          <p>
                            expound the actual teachings of the great explorer
                            of the truth, the master-builder of human happiness.
                            No one rejects, dislikes, or avoids pleasure itself,
                            because it is pleasure desires to obtain pain.
                          </p>
                        </Col>{" "}
                        <Col md="6">
                          {" "}
                          <p>
                            Neque porro quisquam est, qui dolorem ipsum quia
                            dolor sit amet, consectetur, adipisci velit, sed
                            quia non numquam eius modi tempora incidunt ut
                            labore et dolore magnam aliquam quaerat aut odit
                            voluptatem.
                          </p>
                        </Col>{" "}
                      </Row>{" "}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggleGrid}>
                        Save Changes
                      </Button>
                      <Button color="secondary" onClick={toggleGrid}>
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                </Col>
                <Col sm="6" md="4" xl="3">
                  <Button
                    color=""
                    onClick={toggleFade}
                    className="modal-effect btn btn-primary btn-block mb-3"
                    data-bs-effect="effect-slide-in-right"
                    data-bs-toggle="modal"
                  >
                    FadeLess
                  </Button>
                  <Modal isOpen={modalFade} fade={false} toggle={toggleFade} backdrop={false}>
                    <ModalHeader toggle={toggleFade}>Modal title
                    </ModalHeader>
                    <ModalBody>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggleFade}>
                        Save changes
                      </Button>{" "}
                      <Button color="secondary" onClick={toggleFade}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </Col>
                <Col sm="6" md="4" xl="3">
                  <Button
                    color=""
                    onClick={toggleNest}
                    className="modal-effect btn btn-primary btn-block mb-3"
                    data-bs-effect="effect-slide-in-bottom"
                    data-bs-toggle="modal"
                  >
                    Nested
                  </Button>
                  <Modal isOpen={modalNest} toggle={toggleNest} backdrop={false}>
                    <ModalHeader toggle={toggleNest}>Modal title
                    </ModalHeader>
                    
                    <ModalBody>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                      <br />
                      <Button color="primary" onClick={toggleNested}>
                        Show Nested Modal
                      </Button>
                      <Modal
                      backdrop={false}
                        isOpen={nestedModal}
                        toggle={toggleNested}
                        onClosed={closeAll ? toggle : undefined}
                      >
                        <ModalHeader toggle={toggleNested}>Nested Modal title 
                        </ModalHeader>
                        <ModalBody>
                          <h6>
                            Why We Use Electoral College, Not Popular Vote
                          </h6>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onClick={toggleNested}>
                            Done
                          </Button>{" "}
                          <Button color="secondary" onClick={toggleAll}>
                            All Done
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggleNest}>
                        Save changes
                      </Button>{" "}
                      <Button color="secondary" onClick={toggleNest}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </Col>
                <Col sm="6" md="4" xl="3">
                  <Button
                    className="modal-effect btn btn-primary btn-block mb-3"
                    color=""
                    onClick={toggleScroll}
                  >
                    Scroll Modal
                  </Button>

                  <Modal
                  backdrop={false}
                    isOpen={modalScroll}
                    toggle={toggleScroll}
                    scrollable={true}
                  >
                    <ModalHeader toggle={toggleScroll}>
                      Scrolling With Content Modal
                      
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee the pain and
                        trouble that are bound to ensue; and equal blame belongs
                        to those who fail in their duty through weakness of
                        will, which is the same as saying through shrinking from
                        toil and pain.
                      </p>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire, that they cannot foresee the pain and
                        trouble that are bound to ensue; and equal blame belongs
                        to those who fail in their duty through weakness of
                        will, which is the same as saying through shrinking from
                        toil and pain.
                      </p>
                      <p>
                        These cases are perfectly simple and easy to
                        distinguish. In a free hour, when our power of choice is
                        untrammelled and when nothing prevents our being able to
                        do what we like best, every pleasure is to be welcomed
                        and every pain avoided. But in certain circumstances and
                        owing to the claims of duty or the obligations of
                        business it will frequently occur that pleasures have to
                        be repudiated and annoyances accepted. The wise man
                        therefore always holds in these matters to this
                        principle of selection: he rejects pleasures to secure
                        other greater pleasures, or else he endures pains to
                        avoid worse pains.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggleScroll}>
                        Save Changes
                      </Button>
                      <Button color="secondary" onClick={toggleScroll}>
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                </Col>
                <Col sm="6" md="4" xl="3">
                  <Button
                    color=""
                    className="modal-effect btn btn-primary btn-block mb-3"
                    onClick={togglemdo}
                  >
                    Open modal for @mdo
                  </Button>

                  <Modal isOpen={modalmdo} onClick={togglemdo} backdrop={false}>
                    <ModalHeader toggle={togglemdo}>
                      Modal heading
                    </ModalHeader>
                    <ModalBody>
                      <Form>
                        <FormGroup className="mb-3">
                          <Label>Recipient:</Label>
                          <Input type="email" placeholder="@mdo" autoFocus />
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <Label>Message:</Label>
                          <textarea
                            className="form-control"
                            rows={3}
                          ></textarea>
                        </FormGroup>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" onClick={togglemdo}>
                        Close
                      </Button>
                      <Button color="primary">Send message</Button>
                    </ModalFooter>
                  </Modal>
                </Col>
                <Col sm="6" md="4" xl="3">
                  <Button
                    className="modal-effect btn btn-primary btn-block mb-3"
                    color="primary"
                    onClick={togglefat}
                  >
                    Open modal for @fat
                  </Button>

                  <Modal isOpen={modalfat} onClick={togglefat} backdrop={false}>
                    <ModalHeader toggle={togglefat}>
                      Modal heading
                    </ModalHeader>
                    <ModalBody>
                      <Form>
                        <FormGroup className="mb-3">
                          <Label>Recipient:</Label>
                          <Input type="email" placeholder="@mdo" autoFocus />
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <Label>Message:</Label>
                          <Input
                            as="textarea"
                            className="form-control"
                            rows={3}
                          />
                        </FormGroup>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" onClick={togglefat}>
                        Close
                      </Button>
                      <Button color="primary">Send message</Button>
                    </ModalFooter>
                  </Modal>
                </Col>
                <Col sm="6" md="4" xl="3">
                  <Button
                    className="modal-effect btn btn-primary btn-block mb-3"
                    color="primary"
                    onClick={togglegetbootstrap}
                  >
                    Open modal for @getbootstrap
                  </Button>

                  <Modal
                  backdrop={false}
                    isOpen={modalgetbootstrap}
                    onClick={togglegetbootstrap}
                  >
                    <ModalHeader toggle={togglegetbootstrap}>
                      Modal heading
                    </ModalHeader>
                    <ModalBody>
                      <Form>
                        <FormGroup className="mb-3">
                          <Label>Recipient:</Label>
                          <Input
                            type="email"
                            placeholder=" @getbootstrap"
                            autoFocus
                          />
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <Label>Message:</Label>
                          <Input
                            className="form-control"
                            as="textarea"
                            rows={3}
                          ></Input>
                        </FormGroup>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" onClick={togglegetbootstrap}>
                        Close
                      </Button>
                      <Button color="primary">Send message</Button>
                    </ModalFooter>
                  </Modal>
                </Col>
                <Col sm="6" md="4" xl="3">
                  <Button
                    color=""
                    className="modal-effect btn btn-primary btn-block mb-3"
                    data-bs-effect="effect-super-scaled"
                    data-bs-toggle="modal"
                    onClick={toggletooltip}
                  >
                    Tooltips Modal
                  </Button>
                  <Modal isOpen={modaltooltip} onClick={toggletooltip} backdrop={false}>
                    <ModalHeader toggle={toggletooltip}>
                      Modal heading
                    </ModalHeader>
                    <ModalBody className="">
                      <h6>Why We Use Electoral College, Not Popular Vote</h6>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using
                      </p>
                      <h3 className="" id="toltip">
                        Tooltip
                      </h3>
                      <UncontrolledTooltip placement="right" target="toltip">
                        {" "}
                      </UncontrolledTooltip>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" onClick={toggletooltip}>
                        Close
                      </Button>
                      <Button color="primary" onClick={toggletooltip}>
                        Send message
                      </Button>
                    </ModalFooter>
                  </Modal>
                </Col>
                <Col sm="6" md="4" xl="3">
                  <Button
                    className="modal-effect btn btn-primary btn-block mb-3"
                    color=""
                    onClick={toggleselect}
                  >
                    Select2 Modal
                  </Button>

                  <Modal isOpen={modalselect} backdrop={false} >
                    <ModalHeader toggle={toggleselect}>
                      Select2 Modal
                    </ModalHeader>
                    
                    <ModalBody>
                      <h6>Modal Body</h6>
                      <div className=" SlectBox">
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                          placeholder="Chrome"
                          classNamePrefix="Search"
                        />
                      </div>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggleselect}>
                        Save Changes
                      </Button>
                      <Button color="secondary" onClick={toggleselect}>
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                </Col>
                <Col sm="6" md="4" xl="3">
                  {/* <a className="modal-effect btn btn-primary btn-block mb-3" data-bs-effect="effect-rotate-bottom" data-bs-toggle="modal" href="#modaldemo8">Rotate Bottom</a> */}
                  <Button
                    className="modal-effect btn btn-primary btn-block mb-3"
                    color=""
                    onClick={toggleVertically}
                  >
                    View Demo
                  </Button>

                  <Modal
                  backdrop={false}
                    size="lg"
                    isOpen={modalVertically}
                    onClick={toggleVertically}
                    centered
                  >
                    
                    <ModalHeader toggle={toggleVertically}>
                      Modal Heading
                    </ModalHeader>
                    <ModalBody>
                      <h4>Centered Modal</h4>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        className="modal-effect  d-grid mb-3"
                        onClick={toggleVertically}
                      >
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                </Col>
                <Col sm="6" md="4" xl="3">
                  <Button
                    className="modal-effect btn btn-primary btn-block mb-3"
                    color=""
                    onClick={toggletimeout}
                  >
                    TimeOut
                  </Button>
                  <Modal
                  backdrop={false}
                    isOpen={modaltimeout}
                    modalTransition={{ timeout: 600 }}
                    backdropTransition={{ timeout: 1000 }}
                    toggle={toggletimeout}
                  >
                    
                    <ModalHeader toggle={toggletimeout}>
                      Modal Heading
                    </ModalHeader>
                    
                    <ModalBody>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggletimeout}>
                        Do Something
                      </Button>{" "}
                      <Button color="secondary" onClick={toggletimeout}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </Col>
                <Col sm="6" md="4" xl="3">
                  <Button
                    className="modal-effect btn btn-primary btn-block mb-3"
                    color="primary"
                    onClick={togglejustme}
                  >
                    Just Me
                  </Button>

                  <Modal
                  backdrop={false}
                    isOpen={modaljustme}
                    onClick={togglejustme}
                    className="effect-just-me"
                  >
                    
                    <ModalHeader toggle={togglejustme}>
                      Modal Heading
                    </ModalHeader>
                    <ModalBody className="">
                      <h6>Why We Use Electoral College, Not Popular Vote</h6>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" onClick={togglejustme}>
                        Close
                      </Button>
                      <Button color="primary">Send message</Button>
                    </ModalFooter>
                  </Modal>
                </Col>
              </Row>
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
    <Button
      onClick={toggleGrid}
      color=""
      className="modal-effect btn btn-primary btn-block mb-3"
    >
      Grid Modal
    </Button>
    <Modal
      isOpen={modalGrid}
      toggle={toggleGrid}
      {...args}
      size="lg"
    >
      <ModalHeader toggle={toggleGrid}>Grid Modal</ModalHeader>
      <ModalBody>
        <Row>
          {" "}
          <Col md="6">
            {" "}
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta
              sunt explicabo.
            </p>
          </Col>{" "}
          <Col md="6">
            {" "}
            <p>
              But I must explain to you how all this mistaken idea
              of denouncing pleasure and praising pain was born
              and I will give you a complete account of the who
              loves toil and pain can procureor sit aspernatur
              system.
            </p>
          </Col>{" "}
        </Row>{" "}
        <Row>
          {" "}
          <Col md="6">
            {" "}
            <p>
              expound the actual teachings of the great explorer
              of the truth, the master-builder of human happiness.
              No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure desires to obtain pain.
            </p>
          </Col>{" "}
          <Col md="6">
            {" "}
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed
              quia non numquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat aut odit
              voluptatem.
            </p>
          </Col>{" "}
        </Row>{" "}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggleGrid}>
          Save Changes
        </Button>
        <Button color="secondary" onClick={toggleGrid}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
                
                `}</code>
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
          {/* <!--/div--> */}
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row>
        <Col sm="12"md="12">
          <Card>
            <CardHeader>
              <CardTitle>Modal Sizes</CardTitle>
            </CardHeader>
            <CardBody className="text-center">
              <p>
                Add <code className="highlighter-rouge">.modal-sm </code> or{" "}
                <code className="highlighter-rouge">.modal-lg </code> to
                modal-dialog to increase and decrease the modal box sizes.
              </p>
              <Button
                color=""
                className="btn btn-primary mt-3 me-1"
                onClick={togglesmall}
              >
                Small Modal
              </Button>
              <Modal isOpen={modalsmall} toggle={togglesmall} size="sm">
                <ModalHeader toggle={togglesmall}>Message Preview</ModalHeader>
                <ModalBody>
                  <h6>Why We Use Electoral College, Not Popular Vote</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color=""
                    className="btn btn-secondary"
                    onClick={togglesmall}
                  >
                    Colse
                  </Button>{" "}
                  <Button
                    color=""
                    className="btn btn-primary"
                    onClick={togglesmall}
                  >
                    Save changes
                  </Button>
                </ModalFooter>
              </Modal>
              <Button
                color=""
                className="btn btn-secondary mt-3 me-1"
                onClick={toggledefault}
              >
                Default Modal
              </Button>
              <Modal isOpen={modaldefault} toggle={toggledefault}>
              <ModalHeader toggle={toggledefault}>Message Preview</ModalHeader>
                <ModalBody>
                  <h6>Why We Use Electoral College, Not Popular Vote</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color=""
                    className="btn btn-secondary"
                    onClick={toggledefault}
                  >
                    Colse
                  </Button>{" "}
                  <Button
                    color=""
                    className="btn btn-primary"
                    onClick={toggledefault}
                  >
                    Save changes
                  </Button>
                </ModalFooter>
              </Modal>
              <Button
                color=""
                className="btn btn-info mt-3 me-1"
                onClick={togglelarge}
              >
                Large Modal
              </Button>
              <Modal isOpen={modallarge} toggle={togglelarge} size="lg">
                <ModalHeader toggle={togglelarge}>Message Preview</ModalHeader>
                <ModalBody>
                  <h6>Why We Use Electoral College, Not Popular Vote</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color=""
                    className="btn btn-secondary"
                    onClick={togglelarge}
                  >
                    Colse
                  </Button>{" "}
                  <Button
                    color=""
                    className="btn btn-primary"
                    onClick={togglelarge}
                  >
                    Save changes
                  </Button>
                </ModalFooter>
              </Modal>
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
    <Button
      color=""
      className="btn btn-primary mt-3 me-1"
      onClick={togglesmall}
    >
      Small Modal
    </Button>
    <Modal isOpen={modalsmall} toggle={togglesmall} size="sm">
      <ModalHeader toggle={togglesmall}>Message Preview</ModalHeader>
      <ModalBody>
        <h6>Why We Use Electoral College, Not Popular Vote</h6>
        <p>
          It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to
          using 'Content here, content here', making it look like
          readable English.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button
          color=""
          className="btn btn-secondary"
          onClick={togglesmall}
        >
          Colse
        </Button>{" "}
        <Button
          color=""
          className="btn btn-primary"
          onClick={togglesmall}
        >
          Save changes
        </Button>
      </ModalFooter>
    </Modal>
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
      </Row>
    </div>
  );
};
Modals.propTypes = {

};

Modals.defaultProps = {};

export default Modals;
