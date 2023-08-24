import React, { LegacyRef, useRef, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Tabs = () => {

  //clipboard functions
  const elementRef: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef2: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef3: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef4: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)
  const elementRef5: LegacyRef<HTMLPreElement> = useRef<HTMLInputElement>(null)

  //clipboard function for ShowCode

  let CopytoClipBoard = (ele: { current?: HTMLElement | null }) => {
    let data = ele.current?.innerText
    navigator.clipboard.writeText(data || '')
    alert("Text copied successfully")
  }

  const [Tab1, setTab1] = useState<string>("1");
  const style1 = (tab: string): void  => {
    if (Tab1 !== tab) {
      setTab1(tab);
    }
  };
  const [Tab2, setTab2] = useState<string>("tab5");
  const style2 = (tab: string): void  => {
    if (Tab2 !== tab) {
      setTab2(tab);
    }
  };
  const [Tab3, setTab3] = useState<string>("tab11");
  const style3 = (tab: string): void  => {
    if (Tab3 !== tab) {
      setTab3(tab);
    }
  };
  const [Tab4, setTab4] = useState<string>("tab21");
  const style4 = (tab: string): void  => {
    if (Tab4 !== tab) {
      setTab4(tab);
    }
  };
  const [Tab5, setTab5] = useState<string>("tab28");
  const style5 = (tab: string): void  => {
    if (Tab5 !== tab) {
      setTab5(tab);
    }
  };
  return (
    <div>
      <PageHeaders
        title="Tabs"
        home="Home"
        name="Elements"
        fonticonsname="Tabs"
      />
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h3">Tabs style</CardTitle>
            </CardHeader>
            <CardBody className="p-6">
              <div className="panel panel-primary">
                <div className="tab-menu-heading">
                  <div className="tabs-menu ">
                    {/* <!-- Tabs --> */}
                    <Nav className="nav panel-tabs">
                      <NavItem className="">
                        <NavLink
                          className={classnames({ active: Tab1 === "1" })}
                          onClick={() => {
                            style1("1");
                          }}
                        >
                          Tab 1
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: Tab1 === "2" })}
                          onClick={() => {
                            style1("2");
                          }}
                          data-bs-toggle="tab"
                        >
                          Tab 2
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: Tab1 === "3" })}
                          onClick={() => {
                            style1("3");
                          }}
                          data-bs-toggle="tab"
                        >
                          Tab 3
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: Tab1 === "4" })}
                          onClick={() => {
                            style1("4");
                          }}
                          data-bs-toggle="tab"
                        >
                          Tab 4
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
                <div className="panel-body tabs-menu-body">
                  <TabContent activeTab={Tab1} className="tab-content">
                    <TabPane tabId="1" className="tab-pane">
                      <p>
                        page editors now use Lorem Ipsum as their default model
                        text, and a search for 'lorem ipsum' will uncover many
                        web sites still in their infancy. Various versions have
                        evolved over the years, sometimes by accident, sometimes
                        on purpose (injected humour and the like
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et
                      </p>
                    </TabPane>
                    <TabPane tabId="2" className="tab-pane">
                      <p>
                        {" "}
                        default model text, and a search for 'lorem ipsum' will
                        uncover many web sites still in their infancy. Various
                        versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the
                        like
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et
                      </p>
                    </TabPane>
                    <TabPane tabId="3" className="tab-pane">
                      <p>
                        over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et
                      </p>
                    </TabPane>
                    <TabPane tabId="4" className="tab-pane">
                      <p>
                        page editors now use Lorem Ipsum as their default model
                        text, and a search for 'lorem ipsum' will uncover many
                        web sites still in their infancy. Various versions have
                        evolved over the years, sometimes by accident, sometimes
                        on purpose (injected humour and the like
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et
                      </p>
                    </TabPane>
                  </TabContent>
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
            <figure className="highlight mb-0" id="element1">
              <pre ref={elementRef}>
                <code className="language-markup mb-0">{`            
    <div className="panel panel-primary">
    <div className="tab-menu-heading">
      <div className="tabs-menu ">
        {/* <!-- Tabs --> */}
        <Nav className="nav panel-tabs">
          <NavItem className="">
            <NavLink
              className={classnames({ active: Tab1 === "1" })}
              onClick={() => {
                style1("1");
              }}
            >
              Tab 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab1 === "2" })}
              onClick={() => {
                style1("2");
              }}
              data-bs-toggle="tab"
            >
              Tab 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab1 === "3" })}
              onClick={() => {
                style1("3");
              }}
              data-bs-toggle="tab"
            >
              Tab 3
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab1 === "4" })}
              onClick={() => {
                style1("4");
              }}
              data-bs-toggle="tab"
            >
              Tab 4
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
    <div className="panel-body tabs-menu-body">
      <TabContent activeTab={Tab1} className="tab-content">
        <TabPane tabId="1" className="tab-pane">
          <p>
            page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many
            web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes
            on purpose (injected humour and the like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
        <TabPane tabId="2" className="tab-pane">
          <p>
            {" "}
            default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the
            like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
        <TabPane tabId="3" className="tab-pane">
          <p>
            over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
        <TabPane tabId="4" className="tab-pane">
          <p>
            page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many
            web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes
            on purpose (injected humour and the like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
      </TabContent>
    </div>
  </div>            
                `}</code>
              </pre>
              <div className="clipboard-icon" data-clipboard-target="#element1">
                <svg
                  onClick={() => {
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
          <Card>
            <CardHeader>
              <CardTitle tag="h3">Tabs Style 2</CardTitle>
            </CardHeader>
            <CardBody className="p-6">
              <div className="panel panel-primary">
                <div className=" tab-menu-heading p-0 bg-light">
                  <div className="tabs-menu1 ">
                    {/* <!-- Tabs --> */}
                    <Nav className="nav panel-tabs">
                      <NavItem className="">
                        <NavLink
                          className={classnames({ active: Tab2 === "tab5" })}
                          onClick={() => {
                            style2("tab5");
                          }}
                          data-bs-toggle="tab"
                        >
                          Tab 1
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: Tab2 === "tab6" })}
                          onClick={() => {
                            style2("tab6");
                          }}
                          data-bs-toggle="tab"
                        >
                          Tab 2
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: Tab2 === "tab7" })}
                          onClick={() => {
                            style2("tab7");
                          }}
                          data-bs-toggle="tab"
                        >
                          Tab 3
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: Tab2 === "tab8" })}
                          onClick={() => {
                            style2("tab8");
                          }}
                          data-bs-toggle="tab"
                        >
                          Tab 4
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
                <div className="panel-body tabs-menu-body">
                  <TabContent activeTab={Tab2} className="tab-content">
                    <TabPane className="tab-pane" tabId="tab5">
                      <p>
                        page editors now use Lorem Ipsum as their default model
                        text, and a search for 'lorem ipsum' will uncover many
                        web sites still in their infancy. Various versions have
                        evolved over the years, sometimes by accident, sometimes
                        on purpose (injected humour and the like
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et
                      </p>
                    </TabPane>
                    <TabPane className="tab-pane " tabId="tab6">
                      <p>
                        {" "}
                        default model text, and a search for 'lorem ipsum' will
                        uncover many web sites still in their infancy. Various
                        versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the
                        like
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et
                      </p>
                    </TabPane>
                    <TabPane className="tab-pane " tabId="tab7">
                      <p>
                        over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et
                      </p>
                    </TabPane>
                    <TabPane className="tab-pane " tabId="tab8">
                      <p>
                        page editors now use Lorem Ipsum as their default model
                        text, and a search for 'lorem ipsum' will uncover many
                        web sites still in their infancy. Various versions have
                        evolved over the years, sometimes by accident, sometimes
                        on purpose (injected humour and the like
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et
                      </p>
                    </TabPane>
                  </TabContent>
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
            <figure className="highlight mb-0" id="element2">
              <pre ref={elementRef2}>
                <code className="language-markup mb-0">{`
    <div className="panel panel-primary">
    <div className=" tab-menu-heading p-0 bg-light">
      <div className="tabs-menu1 ">
        {/* <!-- Tabs --> */}
        <Nav className="nav panel-tabs">
          <NavItem className="">
            <NavLink
              className={classnames({ active: Tab2 === "tab5" })}
              onClick={() => {
                style2("tab5");
              }}
              data-bs-toggle="tab"
            >
              Tab 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab2 === "tab6" })}
              onClick={() => {
                style2("tab6");
              }}
              data-bs-toggle="tab"
            >
              Tab 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab2 === "tab7" })}
              onClick={() => {
                style2("tab7");
              }}
              data-bs-toggle="tab"
            >
              Tab 3
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab2 === "tab8" })}
              onClick={() => {
                style2("tab8");
              }}
              data-bs-toggle="tab"
            >
              Tab 4
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
    <div className="panel-body tabs-menu-body">
      <TabContent activeTab={Tab2} className="tab-content">
        <TabPane className="tab-pane" tabId="tab5">
          <p>
            page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many
            web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes
            on purpose (injected humour and the like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
        <TabPane className="tab-pane " tabId="tab6">
          <p>
            {" "}
            default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the
            like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
        <TabPane className="tab-pane " tabId="tab7">
          <p>
            over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
        <TabPane className="tab-pane " tabId="tab8">
          <p>
            page editors now use Lorem Ipsum as their default model
            text, and a search for 'lorem ipsum' will uncover many
            web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes
            on purpose (injected humour and the like
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et
          </p>
        </TabPane>
      </TabContent>
    </div>
  </div>            
                `}</code>
              </pre>
              <div className="clipboard-icon" data-clipboard-target="#element2">
                <svg
                  onClick={() => {
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

          {/* <!-- div --> */}
          <Card id="tabs-style3">
            <CardHeader>
              <CardTitle>Tab Style3</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="panel panel-primary tabs-style-3">
                <div className="tab-menu-heading">
                  <div className="tabs-menu ">
                    {/* <!-- Tabs --> */}
                    <Nav className="nav panel-tabs">
                      <NavItem>
                        <NavLink
                          className={classnames({ active: Tab3 === "tab11" })}
                          onClick={() => {
                            style3("tab11");
                          }}
                          data-bs-toggle="tab"
                        >
                          <i className="fa fa-laptop"></i> Tab Style 01
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: Tab3 === "tab12" })}
                          onClick={() => {
                            style3("tab12");
                          }}
                          data-bs-toggle="tab"
                        >
                          <i className="fa fa-cube"></i> Tab Style 02
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: Tab3 === "tab13" })}
                          onClick={() => {
                            style3("tab13");
                          }}
                          data-bs-toggle="tab"
                        >
                          <i className="fa fa-cogs"></i> Tab Style 03
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: Tab3 === "tab14" })}
                          onClick={() => {
                            style3("tab14");
                          }}
                          data-bs-toggle="tab"
                        >
                          <i className="fa fa-tasks"></i> Tab Style 04
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
                <div className="panel-body tabs-menu-body">
                  <TabContent className="tab-content" activeTab={Tab3}>
                    <TabPane className="tab-pane" tabId="tab11">
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                      <p className="mb-0">
                        Et harum quidem rerum facilis est et expedita
                        distinctio. Nam libero tempore, cum soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quod
                        maxime placeat facere possimus, omnis voluptas assumenda
                        est, omnis dolor repellendus.{" "}
                      </p>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="tab12">
                      <p>
                        {" "}
                        Et harum quidem rerum facilis est et expedita
                        distinctio. Nam libero tempore, cum soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quod
                        maxime placeat facere possimus, omnis voluptas assumenda
                        est, omnis dolor repellendus.{" "}
                      </p>
                      <p className="mb-0">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                      </p>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="tab13">
                      <p>
                        Temporibus autem quibusdam et aut officiis debitis aut
                        rerum necessitatibus saepe eveniet ut et voluptates
                        repudiandae sint et molestiae non recusandae
                      </p>
                      <p className="mb-0">
                        Et harum quidem rerum facilis est et expedita
                        distinctio. Nam libero tempore, cum soluta nobis est
                        eligendi optio cumque nihil impedit quo minus id quod
                        maxime placeat facere possimus, omnis voluptas assumenda
                        est, omnis dolor repellendus.{" "}
                      </p>
                    </TabPane>
                    <TabPane className="tab-pane" tabId="tab14">
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment, so
                        blinded by desire
                      </p>
                      <p className="mb-0">
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus, omnis voluptas assumenda est, omnis
                        dolor repellendus. Temporibus autem quibusdam et aut
                        officiis debitis aut rerum necessitatibus{" "}
                      </p>
                    </TabPane>
                  </TabContent>
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
            <figure className="highlight mb-0" id="element5">
              <pre ref={elementRef3}>
                <code className="language-markup mb-0">{`
    <div className="panel panel-primary tabs-style-3">
    <div className="tab-menu-heading">
      <div className="tabs-menu ">
        {/* <!-- Tabs --> */}
        <Nav className="nav panel-tabs">
          <NavItem>
            <NavLink
              className={classnames({ active: Tab3 === "tab11" })}
              onClick={() => {
                style3("tab11");
              }}
              data-bs-toggle="tab"
            >
              <i className="fa fa-laptop"></i> Tab Style 01
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab3 === "tab12" })}
              onClick={() => {
                style3("tab12");
              }}
              data-bs-toggle="tab"
            >
              <i className="fa fa-cube"></i> Tab Style 02
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab3 === "tab13" })}
              onClick={() => {
                style3("tab13");
              }}
              data-bs-toggle="tab"
            >
              <i className="fa fa-cogs"></i> Tab Style 03
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: Tab3 === "tab14" })}
              onClick={() => {
                style3("tab14");
              }}
              data-bs-toggle="tab"
            >
              <i className="fa fa-tasks"></i> Tab Style 04
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
    <div className="panel-body tabs-menu-body">
      <TabContent className="tab-content" activeTab={Tab3}>
        <TabPane className="tab-pane" tabId="tab11">
          <p>
            At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt
            in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga.
          </p>
          <p className="mb-0">
            Et harum quidem rerum facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod
            maxime placeat facere possimus, omnis voluptas assumenda
            est, omnis dolor repellendus.{" "}
          </p>
        </TabPane>
        <TabPane className="tab-pane" tabId="tab12">
          <p>
            {" "}
            Et harum quidem rerum facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod
            maxime placeat facere possimus, omnis voluptas assumenda
            est, omnis dolor repellendus.{" "}
          </p>
          <p className="mb-0">
            At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt
            in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga.
          </p>
        </TabPane>
        <TabPane className="tab-pane" tabId="tab13">
          <p>
            Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates
            repudiandae sint et molestiae non recusandae
          </p>
          <p className="mb-0">
            Et harum quidem rerum facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod
            maxime placeat facere possimus, omnis voluptas assumenda
            est, omnis dolor repellendus.{" "}
          </p>
        </TabPane>
        <TabPane className="tab-pane" tabId="tab14">
          <p>
            On the other hand, we denounce with righteous
            indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so
            blinded by desire
          </p>
          <p className="mb-0">
            Nam libero tempore, cum soluta nobis est eligendi optio
            cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis
            dolor repellendus. Temporibus autem quibusdam et aut
            officiis debitis aut rerum necessitatibus{" "}
          </p>
        </TabPane>
      </TabContent>
    </div>
  </div>            
                `}</code>
              </pre>
              <div className="clipboard-icon" data-clipboard-target="#element5">
                <svg
                  onClick={() => {
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
          {/* <!-- /div --> */}
          {/* <!-- div --> */}
          <Card id="tabs-style4">
            <CardHeader>
              <CardTitle>Vertical Tabs</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="d-lg-flex">
                <div className="border border-end-0 br-tl-7 br-bl-7">
                  <div className="panel panel-primary tabs-style-4">
                    <div className="tab-menu-heading border-0">
                      <div className="tabs-menu ">
                        {/* <!-- Tabs --> */}
                        <Nav className="nav panel-tabs">
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: Tab4 === "tab21",
                              })}
                              onClick={() => {
                                style4("tab21");
                              }}
                              data-bs-toggle="tab"
                            >
                              <i className="fa fa-laptop"></i> Tab Style 01
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: Tab4 === "tab22",
                              })}
                              onClick={() => {
                                style4("tab22");
                              }}
                              data-bs-toggle="tab"
                            >
                              <i className="fa fa-cube"></i> Tab Style 02
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: Tab4 === "tab23",
                              })}
                              onClick={() => {
                                style4("tab23");
                              }}
                              data-bs-toggle="tab"
                            >
                              <i className="fa fa-cogs"></i> Tab Style 03
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: Tab4 === "tab24",
                              })}
                              onClick={() => {
                                style4("tab24");
                              }}
                              data-bs-toggle="tab"
                            >
                              <i className="fa fa-tasks"></i> Tab Style 04
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabs-style-4">
                  <div className="panel-body tabs-menu-body br-tr-7 br-bl-0">
                    <TabContent className="tab-content" activeTab={Tab4}>
                      <TabPane className="tab-pane active" tabId="tab21">
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </p>
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </p>
                        <p className="mb-0">
                          Et harum quidem rerum facilis est et expedita
                          distinctio. Nam libero tempore, cum soluta nobis est
                          eligendi optio cumque nihil impedit quo minus id quod
                          maxime placeat facere possimus, omnis voluptas
                          assumenda est, omnis dolor repellendus.{" "}
                        </p>
                      </TabPane>
                      <TabPane className="tab-pane" tabId="tab22">
                        <p>
                          {" "}
                          Et harum quidem rerum facilis est et expedita
                          distinctio. Nam libero tempore, cum soluta nobis est
                          eligendi optio cumque nihil impedit quo minus id quod
                          maxime placeat facere possimus, omnis voluptas
                          assumenda est, omnis dolor repellendus.{" "}
                        </p>
                        <p>
                          {" "}
                          Et harum quidem rerum facilis est et expedita
                          distinctio. Nam libero tempore, cum soluta nobis est
                          eligendi optio cumque nihil impedit quo minus id quod
                          maxime placeat facere possimus, omnis voluptas
                          assumenda est, omnis dolor repellendus.{" "}
                        </p>
                        <p className="mb-0">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </p>
                      </TabPane>
                      <TabPane className="tab-pane" tabId="tab23">
                        <p>
                          Temporibus autem quibusdam et aut officiis debitis aut
                          rerum necessitatibus saepe eveniet ut et voluptates
                          repudiandae sint et molestiae non recusandae quod
                          maxime placeat facere possimus, omnis voluptas
                          assumenda est, omnis dolor repellendus.
                        </p>
                        <p>
                          Temporibus autem quibusdam et aut officiis debitis aut
                          rerum necessitatibus saepe eveniet ut et voluptates
                          repudiandae sint et molestiae non recusandae quod
                          maxime placeat facere possimus, omnis voluptas
                          assumenda est, omnis dolor repellendus.
                        </p>
                        <p className="mb-0">
                          Et harum quidem rerum facilis est et expedita
                          distinctio. Nam libero tempore, cum soluta nobis est
                          eligendi optio cumque nihil impedit quo minus id quod
                          maxime placeat facere possimus, omnis voluptas
                          assumenda est, omnis dolor repellendus.{" "}
                        </p>
                      </TabPane>
                      <TabPane className="tab-pane" tabId="tab24">
                        <p>
                          On the other hand, we denounce with righteous
                          indignation and dislike men who are so beguiled and
                          demoralized by the charms of pleasure of the moment,
                          so blinded by desire quod maxime placeat facere
                          possimus, omnis voluptas assumenda est, omnis dolor
                          repellendus.
                        </p>
                        <p>
                          On the other hand, we denounce with righteous
                          indignation and dislike men who are so beguiled and
                          demoralized by the charms of pleasure of the moment,
                          so blinded by desire quod maxime placeat facere
                          possimus, omnis voluptas assumenda est, omnis dolor
                          repellendus.
                        </p>
                        <p className="mb-0">
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est,
                          omnis dolor repellendus. Temporibus autem quibusdam et
                          aut officiis debitis aut rerum necessitatibus{" "}
                        </p>
                      </TabPane>
                    </TabContent>
                  </div>
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
              <pre ref={elementRef4}>
                <code className="language-markup mb-0">{`
    <div className="d-lg-flex">
    <div className="border border-end-0 br-tl-7 br-bl-7">
      <div className="panel panel-primary tabs-style-4">
        <div className="tab-menu-heading border-0">
          <div className="tabs-menu ">
            {/* <!-- Tabs --> */}
            <Nav className="nav panel-tabs">
              <NavItem>
                <NavLink
                  className={classnames({
                    active: Tab4 === "tab21",
                  })}
                  onClick={() => {
                    style4("tab21");
                  }}
                  data-bs-toggle="tab"
                >
                  <i className="fa fa-laptop"></i> Tab Style 01
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: Tab4 === "tab22",
                  })}
                  onClick={() => {
                    style4("tab22");
                  }}
                  data-bs-toggle="tab"
                >
                  <i className="fa fa-cube"></i> Tab Style 02
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: Tab4 === "tab23",
                  })}
                  onClick={() => {
                    style4("tab23");
                  }}
                  data-bs-toggle="tab"
                >
                  <i className="fa fa-cogs"></i> Tab Style 03
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: Tab4 === "tab24",
                  })}
                  onClick={() => {
                    style4("tab24");
                  }}
                  data-bs-toggle="tab"
                >
                  <i className="fa fa-tasks"></i> Tab Style 04
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    </div>
    <div className="tabs-style-4">
      <div className="panel-body tabs-menu-body br-tr-7 br-bl-0">
        <TabContent className="tab-content" activeTab={Tab4}>
          <TabPane className="tab-pane active" tabId="tab21">
            <p>
              At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
            <p className="mb-0">
              Et harum quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.{" "}
            </p>
          </TabPane>
          <TabPane className="tab-pane" tabId="tab22">
            <p>
              {" "}
              Et harum quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.{" "}
            </p>
            <p>
              {" "}
              Et harum quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.{" "}
            </p>
            <p className="mb-0">
              At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
          </TabPane>
          <TabPane className="tab-pane" tabId="tab23">
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut
              rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae quod
              maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.
            </p>
            <p>
              Temporibus autem quibusdam et aut officiis debitis aut
              rerum necessitatibus saepe eveniet ut et voluptates
              repudiandae sint et molestiae non recusandae quod
              maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.
            </p>
            <p className="mb-0">
              Et harum quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus.{" "}
            </p>
          </TabPane>
          <TabPane className="tab-pane" tabId="tab24">
            <p>
              On the other hand, we denounce with righteous
              indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment,
              so blinded by desire quod maxime placeat facere
              possimus, omnis voluptas assumenda est, omnis dolor
              repellendus.
            </p>
            <p>
              On the other hand, we denounce with righteous
              indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment,
              so blinded by desire quod maxime placeat facere
              possimus, omnis voluptas assumenda est, omnis dolor
              repellendus.
            </p>
            <p className="mb-0">
              Nam libero tempore, cum soluta nobis est eligendi
              optio cumque nihil impedit quo minus id quod maxime
              placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et
              aut officiis debitis aut rerum necessitatibus{" "}
            </p>
          </TabPane>
        </TabContent>
      </div>
    </div>
  </div> 
                `}</code>
              </pre>
              <div className="clipboard-icon" data-clipboard-target="#element6">
                <svg
                  onClick={() => {
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
          {/* <!-- /div --> */}

          <Card>
            <CardHeader>
              <CardTitle tag="h3">Tabs Style 5</CardTitle>
            </CardHeader>
            <CardBody className="p-6">
              <div className="panel panel-primary">
                <div className="tab_wrapper first_tab">
                  <Nav className="tab_list">
                    <NavItem
                      className={classnames({ active: Tab5 === "tab28" })}
                      onClick={() => {
                        style5("tab28");
                      }}
                    >
                      Tab 1
                    </NavItem>
                    <NavItem
                      className={classnames({ active: Tab5 === "tab29" })}
                      onClick={() => {
                        style5("tab29");
                      }}
                    >
                      Tab 2
                    </NavItem>
                    <NavItem
                      className={classnames({ active: Tab5 === "tab30" })}
                      onClick={() => {
                        style5("tab30");
                      }}
                    >
                      Tab 3
                    </NavItem>
                    <NavItem
                      className={classnames({ active: Tab5 === "tab31" })}
                      onClick={() => {
                        style5("tab31");
                      }}
                    >
                      Tab 4
                    </NavItem>
                  </Nav>
                  <div className="content_wrapper">
                    <TabContent className="tab-content" activeTab={Tab5}>
                      <TabPane className="p-3" tabId="tab28">
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like) It is a long
                          established fact that a reader will be distracted by
                          the readable content of a page when looking at its
                          layout. The point of using Lorem Ipsum is that it has
                          a more-or-less normal distribution of letters, as
                          opposed to using 'Content here, content here', making
                          it look like readable English. Many desktop publishing
                          packages and web page editors now use Lorem Ipsum as
                          their default model text, and a search for 'lorem
                          ipsum' will uncover many web sites still in their
                          infancy. Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose (injected
                          humour and the like).
                        </p>
                      </TabPane>
                      <TabPane className="p-3" tabId="tab29">
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites of
                          the word in classical literature, discovered the
                          undoubtable source. Lorem Ipsum comes from sections
                          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                          (The Extremes of Good and Evil) by Cicero, written in
                          45 BC. This book is a treatise on the theory of
                          ethics, very popular during the Renaissance. The first
                          line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                          comes from a line in section 1.10.32. Contrary to
                          popular belief, Lorem Ipsum is not simply random text.
                          It has roots in a piece of classical Latin literature
                          from 45 BC, making it over 2000 years old. Richard
                          McClintock, a Latin professor at Hampden-Sydney
                          College in Virginia, looked up one of the more obscure
                          Latin words, consectetur, from a Lorem Ipsum passage,
                          and going through the cites of the word in classical
                          literature, discovered the undoubtable source. Lorem
                          Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                          Finibus Bonorum et Malorum" (The Extremes of Good and
                          Evil) by Cicero, written in 45 BC. This book is a
                          treatise on the theory of ethics, very popular during
                          the Renaissance. The first line of Lorem Ipsum, "Lorem
                          ipsum dolor sit amet..", comes from a line in section
                          1.10.32.
                        </p>
                      </TabPane>
                      <TabPane className="p-3" tabId="tab30">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable. If you are
                          going to use a passage of Lorem Ipsum, you need to be
                          sure there isn't anything embarrassing hidden in the
                          middle of text. All the Lorem Ipsum generators on the
                          Internet tend to repeat predefined chunks as
                          necessary, making this the first true generator on the
                          Internet. It uses a dictionary of over 200 Latin
                          words, combined with a handful of model sentence
                          structures, to generate Lorem Ipsum which looks
                          reasonable. The generated Lorem Ipsum is therefore
                          always free from repetition, injected humour, or
                          non-characteristic words etc. There are many
                          variations of passages of Lorem Ipsum available, but
                          the majority have suffered alteration in some form, by
                          injected humour, or randomised words which don't look
                          even slightly believable. If you are going to use a
                          passage of Lorem Ipsum, you need to be sure there
                          isn't anything embarrassing hidden in the middle of
                          text. All the Lorem Ipsum generators on the Internet
                          tend to repeat predefined chunks as necessary, making
                          this the first true generator on the Internet. It uses
                          a dictionary of over 200 Latin words, combined with a
                          handful of model sentence structures, to generate
                          Lorem Ipsum which looks reasonable. The generated
                          Lorem Ipsum is therefore always free from repetition,
                          injected humour, or non-characteristic words etc.
                        </p>
                      </TabPane>
                      <TabPane className="p-3" tabId="tab31">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum. Lorem Ipsum is simply dummy text of the
                          printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the
                          1500s, when an unknown printer took a galley of type
                          and scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </TabPane>
                    </TabContent>
                  </div>
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
            <figure className="highlight mb-0" id="element3">
              <pre ref={elementRef5}>
                <code className="language-markup mb-0">{`
    <div className="panel panel-primary">
    <div className="tab_wrapper first_tab">
      <Nav className="tab_list">
        <NavItem
          className={classnames({ active: Tab5 === "tab28" })}
          onClick={() => {
            style5("tab28");
          }}
        >
          Tab 1
        </NavItem>
        <NavItem
          className={classnames({ active: Tab5 === "tab29" })}
          onClick={() => {
            style5("tab29");
          }}
        >
          Tab 2
        </NavItem>
        <NavItem
          className={classnames({ active: Tab5 === "tab30" })}
          onClick={() => {
            style5("tab30");
          }}
        >
          Tab 3
        </NavItem>
        <NavItem
          className={classnames({ active: Tab5 === "tab31" })}
          onClick={() => {
            style5("tab31");
          }}
        >
          Tab 4
        </NavItem>
      </Nav>
      <div className="content_wrapper">
        <TabContent className="tab-content" activeTab={Tab5}>
          <TabPane className="p-3" tabId="tab28">
            <p>
              It is a long established fact that a reader will be
              distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum
              is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content
              here', making it look like readable English. Many
              desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved
              over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like) It is a long
              established fact that a reader will be distracted by
              the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has
              a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing
              packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their
              infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
          </TabPane>
          <TabPane className="p-3" tabId="tab29">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a
              Lorem Ipsum passage, and going through the cites of
              the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
              (The Extremes of Good and Evil) by Cicero, written in
              45 BC. This book is a treatise on the theory of
              ethics, very popular during the Renaissance. The first
              line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
              comes from a line in section 1.10.32. Contrary to
              popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure
              Latin words, consectetur, from a Lorem Ipsum passage,
              and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de
              Finibus Bonorum et Malorum" (The Extremes of Good and
              Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section
              1.10.32.
            </p>
          </TabPane>
          <TabPane className="p-3" tabId="tab30">
            <p>
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words
              which don't look even slightly believable. If you are
              going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the
              Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the
              Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence
              structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc. There are many
              variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look
              even slightly believable. If you are going to use a
              passage of Lorem Ipsum, you need to be sure there
              isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses
              a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate
              Lorem Ipsum which looks reasonable. The generated
              Lorem Ipsum is therefore always free from repetition,
              injected humour, or non-characteristic words etc.
            </p>
          </TabPane>
          <TabPane className="p-3" tabId="tab31">
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </TabPane>
        </TabContent>
      </div>
    </div>
  </div>
                `}</code>
              </pre>
              <div className="clipboard-icon" data-clipboard-target="#element3">
                <svg
                  onClick={() => {
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
    </div>
  );
};

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
