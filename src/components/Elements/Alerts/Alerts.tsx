import React,{ LegacyRef, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Card, CardBody, CardHeader, CardTitle,TabContent,TabPane, Col, Nav, NavItem, NavLink, PopoverBody, PopoverHeader, Row, UncontrolledAlert, UncontrolledPopover } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import {initialList,LinkData,AlertsStyle,Alerticon} from "./data";


const Alerts = () =>{ 


//clipboard functions
const elementRef: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef2: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef3: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef4: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef5: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
const elementRef6: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)

//clipboard function for ShowCode

let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
  let data = ele.current?.innerText
  navigator.clipboard.writeText(data || '')
  alert("Text copied successfully")
  }


  const [Tab1, setTab1] = useState<string>("info");
  const style = (tab:string): void => {
      if (Tab1 !== tab) {
          setTab1(tab);
      }
  };
  const [alertData, setalertData] = useState(initialList);
  let handleRemove = (id: string): void => {
    const newList = alertData.filter((list) => list.id !== id);
    setalertData(newList);
  }

  const [linkalert, setlinkalert] = useState(LinkData);
  let handleRemove1 = (id: string): void => {
    const newList = linkalert.filter((list) => list.id !== id);
    setlinkalert(newList);
  }
  const [AlertsStyledata, setAlertsStyledata] = useState(AlertsStyle);
  let handleRemove2 = (id: string): void => {
    const newList = AlertsStyledata.filter((list) => list.id !== id);
    setAlertsStyledata(newList);
  }
  const [Alertsicon, setAlertsicon] = useState(Alerticon);
  let handleRemove3 = (id: string): void => {
    const newList = Alertsicon.filter((list) => list.id !== id);
    setAlertsicon(newList);
  }
  return(
  <div>
    <PageHeaders
      title="Alerts"
      home="Home"
      name="Elements"
      fonticonsname="Alerts"
    />

    <Row>
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Default alerts</CardTitle>
          </CardHeader>
          <CardBody>
              {alertData.map((item) => (
                        <Alert key={Math.random()}
                          color={item.color}
                          className="default-alerts"
                        >
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove(item.id)}
                            className="btn-close"
                          >
                            
                          </Button>
                          {" "}
                          <strong>{item.show}</strong> {item.text}
                        </Alert>
              ))}
              
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
  const [alertData, setalertData] = useState(initialList);
  let handleRemove = (id) => {
    const newList = alertData.filter((list) => list.id !== id);
    setalertData(newList);
  }
              {alertData.map((item) => (
                        <Alert key={Math.random()}
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <strong>{item.show}</strong> {item.text}
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                        </Alert>
              ))}`}
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
      </Col>
    </Row>
    <Row>
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Links in alerts</CardTitle>
          </CardHeader>
          <CardBody>
          {linkalert.map((item) => (
                        <Alert key={Math.random()}
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <strong>{item.show}</strong> {item.text}
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove1(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                          <Link
      className="alert-link"
      to="#"
    >
     {item.linktext}
    </Link>
    {item.text2}
                        </Alert>
              ))}
            
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
            <pre ref={elementRef2}>
              <code className="language-markup mb-0">
                {`
                const [linkalert, setlinkalert] = useState(LinkData);
                let handleRemove1 = (id) => {
                  const newList = linkalert.filter((list) => list.id !== id);
                  setlinkalert(newList);
                }
                {linkalert.map((item) => (
                        <Alert key={Math.random()}
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <strong>{item.show}</strong> {item.text}
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove1(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                          <Link
      className="alert-link"
      to="#"
    >
     {item.linktext}
    </Link>
    {item.text2}
                        </Alert>
              ))}`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element3">
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

    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Tabs Alerts</CardTitle>
          </CardHeader>
          <CardBody>
          <Nav className="nav nav-pills nav-with-alerts row">
                    <NavItem tag="li" className="col-lg-3">
                      <NavLink tag="a" onClick={() => { style("info"); }}>
                        <div className="alert alert-info">Informations</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="col-lg-3">
                      <NavLink onClick={() => { style("success"); }}>
                        <div className="alert alert-success">Successes</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="col-lg-3">
                      <NavLink onClick={() => { style("warning"); }}>
                        <div className="alert alert-warning">Warnings</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="col-lg-3">
                      <NavLink onClick={() => { style("error"); }}>
                        <div className="alert alert-danger">Errors</div>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="tab-content" activeTab={Tab1}>
                    <TabPane className="tab-pane" tabId="info">
                      <div className="alert alert-info">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut vehicula nec arcu at faucibus. Duis justo
                          urna, adipiscing quis turpis non, dictum hendrerit
                          ipsum. Fusce non viverra erat. Curabitur sit amet ante
                          dui. Donec congue molestie mi a varius. Suspendisse
                          potenti. Cum sociis natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus. Aliquam
                          ornare quam eu ultricies bibendum. Cras ante augue,
                          pharetra eget ultricies eu, aliquam eu velit.
                          Phasellus mattis vitae justo pretium tempus. Duis
                          vitae felis et sem tristique suscipit. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit
                        </p>
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="success">
                      <div className="alert alert-success">
                        <p>
                          Nulla magna sapien, ullamcorper nec dolor id, gravida
                          venenatis velit. Aliquam et malesuada metus. Sed vitae
                          turpis pharetra nunc dignissim ultricies et sit amet
                          lacus. Cras gravida felis mauris, a pellentesque augue
                          interdum ac. In varius facilisis ante, nec viverra
                          libero commodo ac. Maecenas tempus, elit nec aliquet
                          fermentum, tellus odio auctor sapien, eu scelerisque
                          purus turpis quis eros. Morbi id ante diam. Phasellus
                          aliquet purus id odio mollis dignissim. Proin
                          sagittis, risus a ullamcorper dapibus, velit enim
                          adipiscing nulla, vel facilisis ipsum dui quis diam.
                          Aliquam ullamcorper accumsan felis id consequat.
                          Nullam vehicula ut mi eget porta.
                        </p>
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="warning">
                      <div className="alert alert-warning">
                        <p>
                          Curabitur varius euismod nisi ac lacinia. Curabitur
                          nec urna adipiscing, fermentum augue id, commodo nisl.
                          Quisque ut convallis est. Suspendisse tellus nisi,
                          tempus eu nulla quis, laoreet imperdiet ante. Vivamus
                          in lorem purus. Integer luctus elit et metus
                          condimentum porta. Suspendisse viverra sit amet mauris
                          vel elementum. Fusce lorem arcu, accumsan non odio
                          vel, vestibulum pharetra odio. Sed non mollis mi, ac
                          lacinia nunc. Cras eleifend massa velit, tincidunt
                          tempor arcu sodales at. Nam sit amet erat enim. Mauris
                          placerat suscipit odio, vitae gravida purus bibendum
                          sed. Suspendisse a nunc quis libero rutrum mattis at
                          ac metus. In ac risus eleifend, vestibulum mi eget,
                          dapibus nulla. Nunc diam eros, convallis a sagittis
                          non, rhoncus non nunc. Maecenas in eleifend quam.
                        </p>
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="error">
                      <div className="alert alert-danger">
                        <p>
                          Sed quis dapibus nunc. Proin vestibulum libero elit,
                          gravida tincidunt mauris tincidunt blandit. Donec non
                          ultrices neque, nec sollicitudin elit. Curabitur
                          volutpat nulla vel mauris vestibulum, tempor ultrices
                          quam ullamcorper. Fusce ultricies elementum pretium.
                          In vel consectetur leo, nec rutrum velit. Fusce
                          fermentum pulvinar nibh. Ut posuere ante sed luctus
                          egestas. Aenean ut suscipit tortor.
                        </p>
                      </div>
                    </TabPane>
                  </TabContent>
            
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
            <pre ref={elementRef3}>
              <code className="language-markup mb-0">
                {`
                
                
                <Nav className="nav nav-pills nav-with-alerts row">
                    <NavItem tag="li" className="col-lg-3">
                      <NavLink tag="a" onClick={() => { style("info"); }} data-bs-toggle="tab">
                        <div className="alert alert-info">Informations</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="col-lg-3">
                      <NavLink onClick={() => { style("success"); }} data-bs-toggle="tab">
                        <div className="alert alert-success">Successes</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="col-lg-3">
                      <NavLink onClick={() => { style("warning"); }} data-bs-toggle="tab">
                        <div className="alert alert-warning">Warnings</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="col-lg-3">
                      <NavLink onClick={() => { style("error"); }} data-bs-toggle="tab">
                        <div className="alert alert-danger">Errors</div>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent className="tab-content" activeTab={Tab1}>
                    <TabPane className="tab-pane" tabId="info">
                      <div className="alert alert-info">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut vehicula nec arcu at faucibus. Duis justo
                          urna, adipiscing quis turpis non, dictum hendrerit
                          ipsum. Fusce non viverra erat. Curabitur sit amet ante
                          dui. Donec congue molestie mi a varius. Suspendisse
                          potenti. Cum sociis natoque penatibus et magnis dis
                          parturient montes, nascetur ridiculus mus. Aliquam
                          ornare quam eu ultricies bibendum. Cras ante augue,
                          pharetra eget ultricies eu, aliquam eu velit.
                          Phasellus mattis vitae justo pretium tempus. Duis
                          vitae felis et sem tristique suscipit. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit
                        </p>
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="success">
                      <div className="alert alert-success">
                        <p>
                          Nulla magna sapien, ullamcorper nec dolor id, gravida
                          venenatis velit. Aliquam et malesuada metus. Sed vitae
                          turpis pharetra nunc dignissim ultricies et sit amet
                          lacus. Cras gravida felis mauris, a pellentesque augue
                          interdum ac. In varius facilisis ante, nec viverra
                          libero commodo ac. Maecenas tempus, elit nec aliquet
                          fermentum, tellus odio auctor sapien, eu scelerisque
                          purus turpis quis eros. Morbi id ante diam. Phasellus
                          aliquet purus id odio mollis dignissim. Proin
                          sagittis, risus a ullamcorper dapibus, velit enim
                          adipiscing nulla, vel facilisis ipsum dui quis diam.
                          Aliquam ullamcorper accumsan felis id consequat.
                          Nullam vehicula ut mi eget porta.
                        </p>
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="warning">
                      <div className="alert alert-warning">
                        <p>
                          Curabitur varius euismod nisi ac lacinia. Curabitur
                          nec urna adipiscing, fermentum augue id, commodo nisl.
                          Quisque ut convallis est. Suspendisse tellus nisi,
                          tempus eu nulla quis, laoreet imperdiet ante. Vivamus
                          in lorem purus. Integer luctus elit et metus
                          condimentum porta. Suspendisse viverra sit amet mauris
                          vel elementum. Fusce lorem arcu, accumsan non odio
                          vel, vestibulum pharetra odio. Sed non mollis mi, ac
                          lacinia nunc. Cras eleifend massa velit, tincidunt
                          tempor arcu sodales at. Nam sit amet erat enim. Mauris
                          placerat suscipit odio, vitae gravida purus bibendum
                          sed. Suspendisse a nunc quis libero rutrum mattis at
                          ac metus. In ac risus eleifend, vestibulum mi eget,
                          dapibus nulla. Nunc diam eros, convallis a sagittis
                          non, rhoncus non nunc. Maecenas in eleifend quam.
                        </p>
                      </div>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="error">
                      <div className="alert alert-danger">
                        <p>
                          Sed quis dapibus nunc. Proin vestibulum libero elit,
                          gravida tincidunt mauris tincidunt blandit. Donec non
                          ultrices neque, nec sollicitudin elit. Curabitur
                          volutpat nulla vel mauris vestibulum, tempor ultrices
                          quam ullamcorper. Fusce ultricies elementum pretium.
                          In vel consectetur leo, nec rutrum velit. Fusce
                          fermentum pulvinar nibh. Ut posuere ante sed luctus
                          egestas. Aenean ut suscipit tortor.
                        </p>
                      </div>
                    </TabPane>
                  </TabContent>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element4">
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
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Alerts Popovers</CardTitle>
          </CardHeader>
          <CardBody>
            <Button 
            color=""
              type="button"
              className="me-1 btn btn-success mt-1 mb-1"
              id="Success"
            >
              Show success
            </Button>
            <UncontrolledPopover
    placement="bottom"
    target="Success"
  >
    <PopoverHeader tag="h3" >
     Alert Success
    </PopoverHeader>
    <PopoverBody >
    Well done! You successfully read this important alert message..
    </PopoverBody>
  </UncontrolledPopover>
            <Button 
            color=""
              type="button"
              className="me-1 btn btn-info mt-1 mb-1"
              id="Info"
            >
              Show info
            </Button>
            <UncontrolledPopover
    placement="top"
    target="Info"
  >
    <PopoverHeader tag="h3" >
    Alert Info
    </PopoverHeader>
    <PopoverBody >
    Heads up! This alert needs your attention, but it's not super important...
    </PopoverBody>
  </UncontrolledPopover>
            <Button 
            color=""
              type="button"
              className="me-1 btn btn-warning mt-1 mb-1"
              id="Warning"
            >
              Show warning
            </Button>
            <UncontrolledPopover
    placement="bottom"
    target="Warning"
  >
    <PopoverHeader tag="h3" >
    Alert Warning
    </PopoverHeader>
    <PopoverBody>
    Warning! Best check yo self, you're not looking too good..
    </PopoverBody>
  </UncontrolledPopover>
            <Button 
            color=""
              type="button"
              className="me-1 btn btn-secondary mt-1 mb-1"
              id="Secondary"
            >
              Show secondary
            </Button>
            <UncontrolledPopover
    placement="top"
    target="Secondary"
  >
    <PopoverHeader tag="h3" >
    Alert Secondary
    </PopoverHeader>
    <PopoverBody>
    Error! Please Check u r emial id..
    </PopoverBody>
  </UncontrolledPopover>
            <Button 
            color=""
              type="button"
              className="me-1 btn btn-danger mt-1 mb-1"
              id="Danger"
            >
              Show danger
            </Button>
            <UncontrolledPopover
    placement="bottom"
    target="Danger"
  >
    <PopoverHeader tag="h3" >
    Alert Danger
    </PopoverHeader>
    <PopoverBody>
    Oh snap! Change a few things up and try submitting again..
    </PopoverBody>
  </UncontrolledPopover>
            <Button 
            color=""
              type="button"
              className="me-1 btn btn-primary mt-1 mb-1"
              id="Primary"
            >
              Show primary
            </Button>
            <UncontrolledPopover
    placement="top"
    target="Primary"
  >
    <PopoverHeader tag="h3" >
    Alert Primary
    </PopoverHeader>
    <PopoverBody>
    Cool! This alert will close in 3 seconds. The data-delay attribute is in milliseconds..
    </PopoverBody>
  </UncontrolledPopover>
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
            <pre ref={elementRef4}>
              <code className="language-markup mb-0">{`<Button 
            color=""
              type="button"
              className="me-1 btn btn-success mt-1 mb-1"
              id="Success"
            >
              Show success
            </Button>
            <UncontrolledPopover
    placement="bottom"
    target="Success"
  >
    <PopoverHeader tag="h3" >
     Alert Success
    </PopoverHeader>
    <PopoverBody >
    Well done! You successfully read this important alert message..
    </PopoverBody>
  </UncontrolledPopover>`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element5">
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
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Alerts style</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
                {AlertsStyledata.map((item) => (
              <Col sm="6"md="6"  key={Math.random()}>
                        <Alert
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <strong>{item.show}</strong>
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove2(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                          
                          <hr className="message-inner-separator" />
                           {item.text}
                        </Alert>
              </Col>
              ))}
              
            </Row>
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
            <pre ref={elementRef5}>
              <code className="language-markup mb-0">
               {`
                 const [AlertsStyledata, setAlertsStyledata] = useState(AlertsStyle);
                 let handleRemove2 = (id) => {
                   const newList = AlertsStyledata.filter((list) => list.id !== id);
                   setAlertsStyledata(newList);
                 }
               
               {AlertsStyledata.map((item) => (
              <Col sm="6"md="6"  key={Math.random()}>
                        <Alert
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <strong>{item.show}</strong>
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove2(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                          
                          <hr className="message-inner-separator" />
                           {item.text}
                        </Alert>
              </Col>
              ))}`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element6">
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
            <CardTitle tag="h3">Alert with icon</CardTitle>
          </CardHeader>
          <CardBody>
          {Alertsicon.map((item) => (
                        <Alert key={Math.random()}
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove3(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                          
                          <i className={item.icon} aria-hidden="true"></i>{item.text}
                        </Alert>
              
              ))}
           
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
            <pre ref={elementRef6}>
              <code className="language-markup mb-0">
                {`
                const [Alertsicon, setAlertsicon] = useState(Alerticon);
                let handleRemove3 = (id) => {
                  const newList = Alertsicon.filter((list) => list.id !== id);
                  setAlertsicon(newList);
                }
                
                {Alertsicon.map((item) => (
                        <Alert key={Math.random()}
                          className={item.class}
                          color={item.color}
                        >
                          {" "}
                          <Button
                            color=""
                            type="button"
                            onClick={() => handleRemove3(item.id)}
                            className="btn-close btn"
                          >
                            
                          </Button>
                          
                          <i className={item.icon} aria-hidden="true"></i>{item.text}
                        </Alert>
              
              ))}
           `}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element7">
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
  </div>
);
            }
Alerts.propTypes = {};

Alerts.defaultProps = {};

export default Alerts;
