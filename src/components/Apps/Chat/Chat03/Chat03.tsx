import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Card,
  Col,
  CardBody,Row,CardFooter,
  UncontrolledTooltip 
} from "reactstrap";
import {Popdata} from "./data"
import user9 from "../../../../assets/images/users/9.jpg";
import user16 from "../../../../assets/images/users/16.jpg";
import { Link } from 'react-router-dom';
import { PageHeaderstyle } from "../../../../Shared/Prism/Prism";


const Chat03 = () => {

  type Props = {
    [key: string]: any;
  };
  
  function FormModal(args: Props): JSX.Element {
    const [modal, setModal] = useState<boolean>(false);
  
    const toggle = () => setModal(!modal);
    return (
      <>
        <Link to="#" className="option-dots new-list2" onClick={toggle} color="">
          <svg
            className="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M20 4H4v13.17L5.17 16H20V4zm-6 10H6v-2h8v2zm4-3H6V9h12v2zm0-3H6V6h12v2z"
              opacity=".3"
            />
            <path d="M20 18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14zm-16-.83V4h16v12H5.17L4 17.17zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
          </svg>
        </Link>

        <Modal isOpen={modal} toggle={toggle} {...args} className="border-0 modal-dialog-right chatbox">

              <div className="card overflow-hidden mb-0 border-0 chat">
              <ModalHeader toggle={toggle} className="action-header flex-fill">
                <div className="float-start hidden-xs d-flex ms-2">
                  <div className="img_cont me-3">
                    <img
                      src={user16}
                      className="rounded-circle user_img avatar avatar-md"
                      alt="img"
                    />
                  </div>
                  <div className="align-items-center mt-2 text-white">
                    <h5 className="mb-0">John Thomson</h5>
                    <span className="dot-label bg-success"></span>
                    <span className="me-3 fs-12">online</span>
                  </div>
                </div>
                <ul className="ah-actions actions align-items-center">
                  <li className="call-icon">
                    <a href="#" className="d-done d-md-block phone-button">
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
                    </a>
                  </li>
                  <li className="video-icon">
                    <a href="#" className="d-done d-md-block phone-button">
                      <svg
                        className="svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M5 8h10v8H5z" opacity=".3" />
                        <path d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z" />
                      </svg>
                    </a>
                  </li>
                  <UncontrolledDropdown tag="li" className="dropdown">
                    <DropdownToggle
                    color=""
    data-toggle="dropdown"
    tag="a" aria-expanded="true">
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
                    <DropdownMenu style={{margin:"0px"}} className="">
                      <DropdownItem href="#">
                        <i className="fa fa-user-circle me-2"></i> View profile
                      </DropdownItem>
                      <DropdownItem href="#">
                        <i className="fa fa-users me-2"></i> Add to close friends
                      </DropdownItem>
                      <DropdownItem href="#">
                        <i className="fa fa-plus me-2"></i> Add to group
                      </DropdownItem>
                      <DropdownItem href="#">
                        <i className="fa fa-ban me-2"></i> Block
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <li>
                    <Link
                      to="#"
                      className=""
                      
                      onClick={toggle}
                    >
                      <span aria-hidden="true">
                        <svg
                          className="svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                </ul>
              </ModalHeader>
              <ModalBody className="card-body msg_card_body">
                <div className="chat-box-single-line">
                  <abbr className="timestamp">February 1st, 2019</abbr>
                </div>
                <div className="d-flex justify-content-start">
                  <div className="img_cont_msg">
                    <img
                      src={user9}
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />
                  </div>
                  <div className="msg_cotainer">
                    Hi, how are you Jenna Side?
                    <span className="msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end ">
                  <div className="msg_cotainer_send">
                    Hi Connor Paige i am good tnx how about you?
                    <span className="msg_time_send">8:55 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src={user16}
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start ">
                  <div className="img_cont_msg">
                    <img
                      src={user9}
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />
                  </div>
                  <div className="msg_cotainer">
                    I am good too, thank you for your chat template
                    <span className="msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end ">
                  <div className="msg_cotainer_send">
                    You welcome Connor Paige
                    <span className="msg_time_send">9:05 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src={user16}
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start ">
                  <div className="img_cont_msg">
                    <img
                      src={user9}
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />
                  </div>
                  <div className="msg_cotainer">
                    Yo, Can you update Views?
                    <span className="msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    But I must explain to you how all this mistaken born and I
                    will give
                    <span className="msg_time_send">9:10 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src={user16}
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start ">
                  <div className="img_cont_msg">
                    <img
                      src={user9}
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />
                  </div>
                  <div className="msg_cotainer">
                    Yo, Can you update Views?
                    <span className="msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    But I must explain to you how all this mistaken born and I
                    will give
                    <span className="msg_time_send">9:10 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src={user16}
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start ">
                  <div className="img_cont_msg">
                    <img
                      src={user9}
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />
                  </div>
                  <div className="msg_cotainer">
                    Yo, Can you update Views?
                    <span className="msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                  <div className="msg_cotainer_send">
                    But I must explain to you how all this mistaken born and I
                    will give
                    <span className="msg_time_send">9:10 AM, Today</span>
                  </div>
                  <div className="img_cont_msg">
                    <img
                      src={user16}
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <div className="img_cont_msg">
                    <img
                      src={user9}
                      className="rounded-circle user_img_msg"
                      alt="img"
                    />
                  </div>
                  <div className="msg_cotainer">
                    Okay Bye, text you later..
                    <span className="msg_time">9:12 AM, Today</span>
                  </div>
                </div>
              </ModalBody>
              <CardFooter>
                <div className="msb-reply-button ">
                  <div className="input-group">
                    <Input
                      type="text"
                      className="form-control  bg-white"
                      placeholder="Typing...."
                    />
                    <div className="btn-group">
                      <Button
                        color=""
                        type="button"
                        className="btn btn-primary "
                      >
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
                      </Button>
                    </div>
                  </div>
                </div>
              </CardFooter>
              </div>
        </Modal>
      </>
    );
  }
  return (
    <div>
      <PageHeaderstyle title="Pop up Chat" home="Home" Pages="Apps" elements="Chat" name="Pop up Chat"/>
    
      <Row>
        <Col lg={12} md={12}>
          <Row>
            {/* <!-- col --> */}
            {Popdata.map((list, index) => (
            <Col xl={6} key={index}>
              <Card>
                <CardBody className="p-0">
                  <div className="chat-widget-header d-flex p-5">
                    <div className="font-weight-bold d-flex">
                      <img
                        className="avatat avatar-md brround me-2"
                        src={list.img}
                        alt="img"
                      />
                      <div className="mt-1 d-none d-sm-block">
                        <h6 className="font-weight-semibold mb-0">
                         {list.name}
                        </h6>
                        <small>{list.email}</small>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <div className="d-flex">
                        <FormModal />
                        <Link
                          className="option-dots new-list2"
                          to="#"
                          id={list.call}
                        >
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
                        <UncontrolledTooltip
    placement="top"
    target={list.call}
  >
    call
  </UncontrolledTooltip>
                        <Link
                          className="option-dots new-list2"
                          to="#"
                          id={list.video}
                        >
                          <svg
                            className="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M5 8h10v8H5z" opacity=".3" />
                            <path d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z" />
                          </svg>
                        </Link>
                        <UncontrolledTooltip
    placement="top"
    target={list.video}
  >
   Video call
  </UncontrolledTooltip>
                        <UncontrolledDropdown>
                        <DropdownToggle color=""
                          className="option-dots new-list2"
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
                        <DropdownMenu className="dropdown-menu tx-13 dropdown-menu-end">
                          <DropdownItem e="dropdown-item" href="#">
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
};
Chat03.propTypes = {};

Chat03.defaultProps = {};

export default Chat03;
