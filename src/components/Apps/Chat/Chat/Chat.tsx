import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import user5 from "../../../../assets/images/users/5.jpg";
import user2 from "../../../../assets/images/users/2.jpg";
import user7 from "../../../../assets/images/users/7.jpg";
import user3 from "../../../../assets/images/users/3.jpg";
import user9 from "../../../../assets/images/users/9.jpg";
import user6 from "../../../../assets/images/users/6.jpg";
import user16 from "../../../../assets/images/users/16.jpg";
import classnames from "classnames";
import { Row, Col, Card, Nav, NavItem, DropdownToggle, NavLink, TabContent, TabPane, UncontrolledDropdown, DropdownMenu, DropdownItem, ListGroup, ListGroupItem, UncontrolledTooltip } from "reactstrap";
import { PageHeaderstyle } from "../../../../Shared/Prism/Prism";
import { Link } from "react-router-dom";

const Chat = () => {
  const [navTabactive, setnavTabactive] = useState("tab-7");
  const Navtabs = (tab: string): void => {
    if (navTabactive !== tab) {
      setnavTabactive(tab);
    }
  };
  return (
    <div>
      <PageHeaderstyle title="Chat" home="Home" Pages="Apps" elements="Chat" name="Chat 01" />
      <Row>
        <Col md={12}>
          <Card className="bootstrap snippet  overflow-hidden">
            <div className="tile tile-alt mb-0" id="messages-main">
              <div className="ms-menu">
                <div className="tab-menu-heading border-top-0">
                  <div className="tabs-menu1 px-3">
                    <Nav className="">
                      <NavItem>
                        <NavLink className={classnames({ active: navTabactive === "tab-7" })}
                          onClick={() => {
                            Navtabs("tab-7");
                          }}>
                          Chat
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: navTabactive === "tab-8" })}
                          onClick={() => {
                            Navtabs("tab-8");
                          }}>
                          Contacts
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </div>
                <TabContent activeTab={navTabactive}>
                  <TabPane className="tab-pane" tabId="tab-7">
                    <ListGroup
                      className="list-group lg-alt chat-conatct-list"
                      id="ChatList"
                    >
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="float-start pe-2">
                          <img
                            src={user5}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Davil Parnell
                          </div>
                          <small className="list-group-item-text text-muted">
                            Fierent fastidii recteque ad pro
                          </small>
                        </div>
                        <span className="chat-time text-muted">2 mins</span>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="float-start pe-2">
                          <img
                            src={user2}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Ann Watkinson
                          </div>
                          <small className="list-group-item-text text-muted">
                            Cum sociis natoque penatibus{" "}
                          </small>
                        </div>
                        <span className="chat-time text-muted">10 mins</span>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="float-start pe-2">
                          <img
                            src={user7}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Marse Walter
                          </div>
                          <small className="list-group-item-text text-muted">
                            Suspendisse sapien ligula
                          </small>
                        </div>
                        <span className="chat-time text-muted">15 mins</span>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="lv-avatar float-start pe-2">
                          <img
                            src={user3}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Jeremy Robbins
                          </div>
                          <small className="list-group-item-text text-muted">
                            Phasellus porttitor tellus nec
                          </small>
                        </div>
                        <span className="chat-time text-muted">30 mins</span>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="lv-avatar float-start pe-2">
                          <img
                            src={user9}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Reginald Horace
                          </div>
                          <small className="list-group-item-text text-muted">
                            Quisque consequat arcu eget
                          </small>
                        </div>
                        <span className="chat-time text-muted">50 min</span>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="float-start pe-2">
                          <img
                            src={user6}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Shark Henry
                          </div>
                          <small className="list-group-item-text text-muted">
                            Nam lobortis odio et leo maximu
                          </small>
                        </div>
                        <span className="chat-time text-muted">1 day</span>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="float-start pe-2">
                          <img
                            src={user7}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Paul Van Dack
                          </div>
                          <small className="list-group-item-text text-muted">
                            Nam posuere purus sed velit auctor sodales
                          </small>
                        </div>
                        <span className="chat-time text-muted">2 days</span>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="lv-avatar float-start pe-2">
                          <img
                            src={user5}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            James Anderson
                          </div>
                          <small className="list-group-item-text text-muted">
                            Vivamus imperdietsag
                          </small>
                        </div>
                        <span className="chat-time text-muted">2 days</span>
                      </ListGroupItem>
                    </ListGroup>
                  </TabPane>
                  <TabPane className="tab-pane" tabId="tab-8">
                    <ListGroup
                      className="list-group lg-alt chat-conatct-list"
                      id="ChatList2"
                    >
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="float-start pe-2">
                          <img
                            src={user5}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Davil Parnell
                          </div>
                          <small className="list-group-item-text text-muted">
                            davilparnell@gmail.com
                          </small>
                        </div>
                        <div className="ms-auto">
                          <UncontrolledDropdown >
                            <DropdownToggle tag="a" color=""
                              data-bs-toggle="dropdown"
                              className="option-dots"
                            >
                              <svg
                                className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu dropdown-menu-end">
                              <DropdownItem href="#">Call
                              </DropdownItem>
                              <DropdownItem href="#">Videocall
                              </DropdownItem>
                              <DropdownItem href="#">New Message
                              </DropdownItem>
                              <DropdownItem href="#">Settings
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="float-start pe-2">
                          <img
                            src={user2}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Ann Watkinson
                          </div>
                          <small className="list-group-item-text text-muted">
                            annwatkinso@gmail.com
                          </small>
                        </div>
                        <div className="ms-auto">
                          <UncontrolledDropdown >
                            <DropdownToggle tag="a" color=""
                              data-bs-toggle="dropdown"
                              className="option-dots"
                            >
                              <svg
                                className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu dropdown-menu-end">
                              <DropdownItem href="#">Call
                              </DropdownItem>
                              <DropdownItem href="#">Videocall
                              </DropdownItem>
                              <DropdownItem href="#">New Message
                              </DropdownItem>
                              <DropdownItem href="#">Settings
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="float-start pe-2">
                          <img
                            src={user7}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Marse Walter
                          </div>
                          <small className="list-group-item-text text-muted">
                            marsewalter@gmail.com
                          </small>
                        </div>
                        <div className="ms-auto">
                          <UncontrolledDropdown>
                            <DropdownToggle tag="a" color=""
                              data-bs-toggle="dropdown"
                              className="option-dots"
                            >
                              <svg
                                className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu dropdown-menu-end">
                              <DropdownItem href="#">Call
                              </DropdownItem>
                              <DropdownItem href="#">Videocall
                              </DropdownItem>
                              <DropdownItem href="#">New Message
                              </DropdownItem>
                              <DropdownItem href="#">Settings
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="lv-avatar float-start pe-2">
                          <img
                            src={user3}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Jeremy Robbins
                          </div>
                          <small className="list-group-item-text text-muted">
                            jeremyrobbins@gmail.com
                          </small>
                        </div>
                        <div className="ms-auto">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              data-bs-toggle="dropdown"
                              className="option-dots"
                              color=""
                              tag="a"
                            >
                              <svg
                                className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu dropdown-menu-end">
                              <DropdownItem href="#">Call
                              </DropdownItem>
                              <DropdownItem href="#">Videocall
                              </DropdownItem>
                              <DropdownItem href="#">New Message
                              </DropdownItem>
                              <DropdownItem href="#">Settings
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="lv-avatar float-start pe-2">
                          <img
                            src={user9}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Reginald Horace
                          </div>
                          <small className="list-group-item-text text-muted">
                            reginaldhorace@gmail.com
                          </small>
                        </div>
                        <div className="ms-auto">
                          <UncontrolledDropdown >
                            <DropdownToggle tag="a" color=""
                              data-bs-toggle="dropdown"
                              className="option-dots"
                            >
                              <svg
                                className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu dropdown-menu-end">
                              <DropdownItem href="#">Call
                              </DropdownItem>
                              <DropdownItem href="#">Videocall
                              </DropdownItem>
                              <DropdownItem href="#">New Message
                              </DropdownItem>
                              <DropdownItem href="#">Settings
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="float-start pe-2">
                          <img
                            src={user6}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Shark Henry
                          </div>
                          <small className="list-group-item-text text-muted">
                            sharkhenry@gmail.com
                          </small>
                        </div>
                        <div className="ms-auto">
                          <UncontrolledDropdown >
                            <DropdownToggle tag="a" color=""
                              data-bs-toggle="dropdown"
                              className="option-dots"
                            >
                              <svg
                                className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu dropdown-menu-end">
                              <DropdownItem href="#">Call
                              </DropdownItem>
                              <DropdownItem href="#">Videocall
                              </DropdownItem>
                              <DropdownItem href="#">New Message
                              </DropdownItem>
                              <DropdownItem href="#">Settings
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="float-start pe-2">
                          <img
                            src={user7}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            Paul Van Dack
                          </div>
                          <small className="list-group-item-text text-muted">
                            paulvandack@gmail.com
                          </small>
                        </div>
                        <div className="ms-auto">
                          <UncontrolledDropdown >
                            <DropdownToggle tag="a" color=""
                              data-bs-toggle="dropdown"
                              className="option-dots"
                            >
                              <svg
                                className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu dropdown-menu-end">
                              <DropdownItem href="#">Call
                              </DropdownItem>
                              <DropdownItem href="#">Videocall
                              </DropdownItem>
                              <DropdownItem href="#">New Message
                              </DropdownItem>
                              <DropdownItem href="#">Settings
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </ListGroupItem>
                      <ListGroupItem className=" media p-4 border-top mt-0">
                        <div className="lv-avatar float-start pe-2">
                          <img
                            src={user5}
                            alt=""
                            className="avatar avatar-md brround"
                          />
                        </div>
                        <div className="media-body">
                          <div className="list-group-item-heading text-default font-weight-semibold">
                            James Anderson
                          </div>
                          <small className="list-group-item-text text-muted">
                            jamesanderson@gmail.com
                          </small>
                        </div>
                        <div className="ms-auto">
                          <UncontrolledDropdown >
                            <DropdownToggle tag="a" color=""
                              data-bs-toggle="dropdown"
                              className="option-dots"
                            >
                              <svg
                                className="svg-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu dropdown-menu-end">
                              <DropdownItem href="#">Call
                              </DropdownItem>
                              <DropdownItem href="#">Videocall
                              </DropdownItem>
                              <DropdownItem href="#">New Message
                              </DropdownItem>
                              <DropdownItem href="#">Settings
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </ListGroupItem>
                    </ListGroup>
                  </TabPane>
                </TabContent>
              </div>
              <div className="ms-body">
                <div className="action-header clearfix">
                  <div className="" id="ms-menu-trigger">
                    <i className="fa fa-bars"></i>
                  </div>
                  <div className="float-start hidden-xs d-flex ms-6 chat-user">
                    <img
                      src={user16}
                      alt=""
                      className="avatar avatar-md brround me-2"
                    />
                    <div className="align-items-center mt-2">
                      <span className="font-weight-bold">Jhon Thomson</span>
                    </div>
                  </div>
                  <ul className="float-end actions align-items-center">
                    <li>
                      <Link className="text-default" data-bs-toggle="tooltip" id="Call" to="#">
                        <svg
                          className="svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6H5.03z"
                            opacity=".3"
                          />
                          <path d="M9.07 7.57C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02zm7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5c.07.89.22 1.76.46 2.59L5.79 8.8z" />
                        </svg>
                      </Link>
                      <UncontrolledTooltip palcement="top" target="Call">
                        Call
                      </UncontrolledTooltip>
                    </li>
                    <li>
                      <Link data-bs-toggle="tooltip" to="#" id="Archive">
                        <svg
                          className="svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M5 19h14V8H5v11zm5.55-6v-3h2.91v3H16l-4 4-4-4h2.55z"
                            opacity=".3"
                          />
                          <path d="M16 13h-2.55v-3h-2.9v3H8l4 4zm4.54-7.77l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM19 19H5V8h14v11z" />
                        </svg>
                      </Link>
                      <UncontrolledTooltip palcement="top" target="Archive">
                        Archive
                      </UncontrolledTooltip>
                    </li>
                    <li>
                      <Link data-bs-toggle="tooltip" to="#" id="Trash">
                        <svg
                          className="svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M8 9h8v10H8z" opacity=".3" />
                          <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
                        </svg>
                      </Link>
                      <UncontrolledTooltip palcement="top" target="Trash">
                        Trash
                      </UncontrolledTooltip>
                    </li>
                    <li>
                      <Link data-bs-toggle="tooltip" to="#" id="View">
                        <svg
                          className="svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path
                            d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z"
                            opacity=".3"
                          />
                          <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                      </Link>
                      <UncontrolledTooltip palcement="top" target="View">
                        View Info
                      </UncontrolledTooltip>
                    </li>
                    <UncontrolledDropdown tag="li" className="dropdown">
                      <DropdownToggle color="" tag="a"
                        data-bs-toggle="dropdown"
                        className="option-dots"

                      >
                        <svg
                          className="svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu dropdown-menu-end">
                        <DropdownItem href="#">Refresh
                        </DropdownItem>
                        <DropdownItem href="#">Message Settings
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </ul>
                </div>
                <div className="chat-body-style" id="ChatBody">
                  <SimpleBar style={{ height: 500 }}>
                    <div className="message-feed media mt-0">
                      <div className="float-start pe-2">
                        <img
                          src={user16}
                          alt=""
                          className="avatar avatar-md brround"
                        />
                      </div>
                      <div className="media-body">
                        <div className="mf-content">
                          Quisque consequat arcu eget odio cursus, ut tempor arcu
                          vestibulum. Etiam ex arcu, porta a urna non, lacinia
                          pellentesque orci. Proin semper sagittis erat, eget
                          condimentum sapien viverra et.
                        </div>
                        <small className="mf-date">
                          <i className="fa fa-clock-o"></i> 20/05/2020 at 09:00
                        </small>
                      </div>
                    </div>
                    <div className="message-feed right">
                      <div className="float-end ps-2">
                        <img
                          src={user5}
                          alt=""
                          className="avatar avatar-md brround"
                        />
                      </div>
                      <div className="media-body">
                        <div className="mf-content">
                          Mauris volutpat magna nibh, et condimentum est rutrum a.
                          Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.
                        </div>
                        <small className="mf-date">
                          <i className="fa fa-clock-o"></i> 20/05/2020 at 09:30
                        </small>
                      </div>
                    </div>
                    <div className="message-feed media">
                      <div className="float-start pe-2">
                        <img
                          src={user16}
                          alt=""
                          className="avatar avatar-md brround"
                        />
                      </div>
                      <div className="media-body">
                        <div className="mf-content">Etiam ex arcumentum</div>
                        <small className="mf-date">
                          <i className="fa fa-clock-o"></i> 20/05/2020 at 09:33
                        </small>
                      </div>
                    </div>
                    <div className="message-feed right">
                      <div className="float-end ps-2">
                        <img
                          src={user5}
                          alt=""
                          className="avatar avatar-md brround"
                        />
                      </div>
                      <div className="media-body">
                        <div className="mf-content">
                          Etiam nec facilisis lacus. Nulla imperdiet augue
                          ullamcorper dui ullamcorper, eu laoreet sem consectetur.
                          Aenean et ligula risus. Praesent sed posuere sem. Cum
                          sociis natoque penatibus et magnis dis parturient
                          montes,
                        </div>
                        <small className="mf-date">
                          <i className="fa fa-clock-o"></i> 20/05/2020 at 10:10
                        </small>
                      </div>
                    </div>
                    <div className="message-feed media">
                      <div className="float-start pe-2">
                        <img
                          src={user16}
                          alt=""
                          className="avatar avatar-md brround"
                        />
                      </div>
                      <div className="media-body">
                        <div className="mf-content">
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Etiam ac tortor ut elit
                          sodales varius. Mauris id ipsum id mauris malesuada
                          tincidunt. Vestibulum elit massa, pulvinar at sapien
                          sed, luctus vestibulum eros.
                        </div>
                        <small className="mf-date">
                          <i className="fa fa-clock-o"></i> 20/05/2020 at 10:24
                        </small>
                      </div>
                    </div>
                  </SimpleBar>
                </div>
                <div className="msb-reply">
                  <textarea placeholder="What's on your mind..."></textarea>
                  <button>
                    <svg
                      className="svg-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                        d="M4 8.25l7.51 1-7.5-3.22zm.01 9.72l7.5-3.22-7.51 1z"
                        opacity=".3"
                      />
                      <path d="M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
