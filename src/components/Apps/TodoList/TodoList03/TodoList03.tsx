import React from "react";
import {
  Row,
  Nav,
  Card,
  Button,
  Col,
  NavItem,
  NavLink,
  CardBody,
  Input,
  Label,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { PageHeaderstyle } from "../../../../Shared/Prism/Prism";
import { data } from "./data";

const TodoList03 = () => (
  <div>
    <PageHeaderstyle title="Todo List"home="Home"Pages="Apps"elements="Todo List"name="Todo List 03"/>

    <Row>
      <Col md={12} lg={4} xl={3}>
        <Card>
          <Nav className="list-group list-group-transparent mb-0 mail-inbox pb-3">
            <div className="m-4 text-center">
              <Button color="" className="btn btn-primary btn-block">
                Add New Task
              </Button>
            </div>
            <NavItem>
              <NavLink
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center active"
              >
                <svg
                  className="svg-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 10h3.13c.21.78.67 1.47 1.27 2H5v-2zm14 2h-4.4c.6-.53 1.06-1.22 1.27-2H19v2zm0-4h-5v1c0 1.07-.93 2-2 2s-2-.93-2-2V8H5V5h14v3zm-5 7v1c0 .47-.19.9-.48 1.25-.37.45-.92.75-1.52.75s-1.15-.3-1.52-.75c-.29-.35-.48-.78-.48-1.25v-1H3v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4h-7zm-9 2h3.13c.02.09.06.17.09.25.24.68.65 1.28 1.18 1.75H5v-2zm14 2h-4.4c.54-.47.95-1.07 1.18-1.75.03-.08.07-.16.09-.25H19v2z" />
                  <path
                    d="M8.13 10H5v2h4.4c-.6-.53-1.06-1.22-1.27-2zm6.47 2H19v-2h-3.13c-.21.78-.67 1.47-1.27 2zm-6.38 5.25c-.03-.08-.06-.16-.09-.25H5v2h4.4c-.53-.47-.94-1.07-1.18-1.75zm7.65-.25c-.02.09-.06.17-.09.25-.23.68-.64 1.28-1.18 1.75H19v-2h-3.13z"
                    opacity=".3"
                  />
                </svg>{" "}
                All Tasks <span className="ms-auto badge bg-success">12</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center"
              >
                <svg
                  className="svg-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M18.49 9.89l.26-2.79-2.74-.62-1.43-2.41L12 5.18 9.42 4.07 7.99 6.48l-2.74.62.26 2.78L3.66 12l1.85 2.11-.26 2.8 2.74.62 1.43 2.41L12 18.82l2.58 1.11 1.43-2.41 2.74-.62-.26-2.79L20.34 12l-1.85-2.11zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z"
                    opacity=".3"
                  />
                  <path d="M20.9 5.54l-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12l-2.44-2.78.34-3.68zM18.75 16.9l-2.74.62-1.43 2.41L12 18.82l-2.58 1.11-1.43-2.41-2.74-.62.26-2.8L3.66 12l1.85-2.12-.26-2.78 2.74-.61 1.43-2.41L12 5.18l2.58-1.11 1.43 2.41 2.74.62-.26 2.79L20.34 12l-1.85 2.11.26 2.79zM11 15h2v2h-2zm0-8h2v6h-2z" />
                </svg>{" "}
                Important <span className="ms-auto badge bg-danger">3</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center"
              >
                <svg
                  className="svg-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M17.11 10.83l-2.47-.21-1.2-.1-.47-1.11L12 7.13l-.97 2.28-.47 1.11-1.2.1-2.47.21 1.88 1.63.91.79-.27 1.17-.57 2.42 2.13-1.28 1.03-.63 1.03.63 2.13 1.28-.57-2.42-.27-1.17.91-.79z"
                    opacity=".3"
                  />
                  <path d="M22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24zm-7.41 5.18l.56 2.41-2.12-1.28-1.03-.62-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.16z" />
                </svg>{" "}
                Starred
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center"
              >
                <svg
                  className="svg-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-4h-2V7h2v6z"
                    opacity=".3"
                  />
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z" />
                </svg>{" "}
                Spam
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center"
              >
                <svg
                  className="svg-icon me-2"
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
                </svg>{" "}
                Archive
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center"
              >
                <svg
                  className="svg-icon me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M8 9h8v10H8z" opacity=".3" />
                  <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
                </svg>{" "}
                Trash
              </NavLink>
            </NavItem>
          </Nav>
          <CardBody className="border-top">
            <Nav className="list-group list-group-transparent mb-0 mail-inbox">
              <NavLink
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-primary-transparent me-2"></span>{" "}
                Pending Tasks
              </NavLink>
              <NavLink
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-secondary-transparent me-2"></span>{" "}
                Unassigned Tasks
              </NavLink>
              <NavLink
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-success-transparent me-2"></span>{" "}
                Completed Tasks
              </NavLink>
              <NavLink
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-info-transparent me-2"></span>{" "}
                Hold Tasks
              </NavLink>
              <NavLink
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-warning-transparent me-2"></span>{" "}
                Task Issue
              </NavLink>
              <NavLink
                href="#"
                className="list-group-item list-group-item-action d-flex align-items-center px-0 py-2"
              >
                <span className="w-3 h-3 brround bg-danger-transparent me-2"></span>{" "}
                Settings
              </NavLink>
            </Nav>
          </CardBody>
        </Card>
      </Col>
      <Col lg={8} xl={9} md={12}>
        <Row>
        {data.map((list, index) => (
          <Col xl={3} lg={4} md={4} sm={6} key={index}>
            <Card>
              <CardBody className="p-0">
                <div className="todo-widget-header d-flex pb-2 p-4">
                  <Label className="custom-control custom-checkbox mb-0">
                    <Input
                      type="checkbox"
                      className="custom-control-input"
                      name="example-checkbox2"
                      value="option2"
                    />
                    <span className="custom-control-label"></span>
                  </Label>
                  <div className="ms-auto">
                    <UncontrolledDropdown className="">
                      <DropdownToggle
                      tag="a"
                      color=""
                        className="option-dots new-list"
                        data-bs-toggle="dropdown"
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
                      <DropdownMenu className="dropdown-menu tx-13 dropdown-menu-end">
                        <DropdownItem className="dropdown-item" href="#">
                          Assigned to
                        </DropdownItem>
                        <DropdownItem className="dropdown-item" href="#">
                          Mark As Unread
                        </DropdownItem>
                        <DropdownItem className="dropdown-item" href="#">
                          Mark As Important
                        </DropdownItem>
                        <DropdownItem className="dropdown-item" href="#">
                          Add to Tasks
                        </DropdownItem>
                        <DropdownItem className="dropdown-item" href="#">
                          Add Star
                        </DropdownItem>
                        <DropdownItem className="dropdown-item" href="#">
                          Move to
                        </DropdownItem>
                        <DropdownItem className="dropdown-item" href="#">
                          Mute
                        </DropdownItem>
                        <DropdownItem className="dropdown-item" href="#">
                          Move to Trash
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </div>
                <div className="px-5 pb-5 text-center">
                  <img src={list.photo} alt="img" className="w-80 mx-auto" />
                  <h6 className="mb-1 font-weight-semibold mt-4">
                  {list.name}
                  </h6>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
        </Row>
      </Col>
    </Row>
  </div>
);

TodoList03.propTypes = {};

TodoList03.defaultProps = {};

export default TodoList03;
