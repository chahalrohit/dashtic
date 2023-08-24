import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import user16 from "../../../../assets/images/users/16.jpg"
import photo1 from "../../../../assets/images/photos/1.jpg"
import photo2 from "../../../../assets/images/photos/2.jpg"
import photo3 from "../../../../assets/images/photos/3.jpg"
import photo4 from "../../../../assets/images/photos/4.jpg"
import user7 from "../../../../assets/images/users/7.jpg"
import user6 from "../../../../assets/images/users/6.jpg"
import user5 from "../../../../assets/images/users/5.jpg"
import user1 from "../../../../assets/images/users/1.jpg"
import user8 from "../../../../assets/images/users/8.jpg"
import user3 from "../../../../assets/images/users/3.jpg"
import user4 from "../../../../assets/images/users/4.jpg"
import user9 from "../../../../assets/images/users/9.jpg"
import { Card, CardBody,Nav,NavItem,NavLink,TabContent,TabPane, Col, Row,Button } from 'reactstrap';
import classnames from "classnames";
import { PageHeaderstyle } from './../../../../Shared/Prism/Prism';



const Profile02 = () =>{
    const [Tab1, setTab1] = useState<string>("tab-7");

    const style1 = (tab: string): void => {
      if (Tab1 !== tab) {
       setTab1(tab);
     }
    };
    return(
  <div>
        <PageHeaderstyle title="Profile"home="Home"Pages="Pages"elements="Profile"name="Profile 02"/>
    
                        <div className="main-proifle">
                            <Row>
                                <Col lg="7">
                                    <div className="box-widget widget-user">
                                        <div className="widget-user-image d-sm-flex">
                                            <img alt="User Avatar" className="rounded-circle border p-0" src={user16}/>
                                            <div className="ms-sm-4 mt-4">
                                                <h4 className="pro-user-username mb-3 font-weight-bold">John Thomson <i className="fa fa-check-circle text-success"></i></h4>
                                                <div className="d-flex mb-1">
                                                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5.08 8h2.95c.32-1.25.78-2.45 1.38-3.56-1.84.63-3.37 1.9-4.33 3.56zm2.42 4c0-.68.06-1.34.14-2H4.26c-.16.64-.26 1.31-.26 2s.1 1.36.26 2h3.38c-.08-.66-.14-1.32-.14-2zm-2.42 4c.96 1.66 2.49 2.93 4.33 3.56-.6-1.11-1.06-2.31-1.38-3.56H5.08zM12 4.04c-.83 1.2-1.48 2.53-1.91 3.96h3.82c-.43-1.43-1.08-2.76-1.91-3.96zM18.92 8c-.96-1.65-2.49-2.93-4.33-3.56.6 1.11 1.06 2.31 1.38 3.56h2.95zM12 19.96c.83-1.2 1.48-2.53 1.91-3.96h-3.82c.43 1.43 1.08 2.76 1.91 3.96zm2.59-.4c1.84-.63 3.37-1.91 4.33-3.56h-2.95c-.32 1.25-.78 2.45-1.38 3.56zM19.74 10h-3.38c.08.66.14 1.32.14 2s-.06 1.34-.14 2h3.38c.16-.64.26-1.31.26-2s-.1-1.36-.26-2zM9.66 10c-.09.65-.16 1.32-.16 2s.07 1.34.16 2h4.68c.09-.66.16-1.32.16-2s-.07-1.35-.16-2H9.66z" opacity=".3"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
                                                    <div className="h6 mb-0 ms-3 mt-1">https://demowebsite.com</div>
                                                </div>
                                                <div className="d-flex mb-1">
                                                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity=".3"/><path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"/></svg>
                                                    <div className="h6 mb-0 ms-3 mt-1">collinbridgman@gmail.com</div>
                                                </div>
                                                <div className="d-flex">
                                                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.2 18.21c1.21.41 2.48.67 3.8.76v-1.5c-.88-.07-1.75-.22-2.6-.45l-1.2 1.19zM6.54 5h-1.5c.09 1.32.35 2.59.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58zM14 8h5V5h-5z" opacity=".3"/><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM12 3v10l3-3h6V3h-9zm7 5h-5V5h5v3z"/></svg>
                                                    <div className="h6 mb-0 ms-3 mt-1">+345 657 567</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="5" className="col-md-auto">
                                    <div className="text-lg-end mt-4 mt-lg-0 btn-list">
                                        <Link to="#" className="btn btn-white">Message</Link>
                                        <Link to="#" className="btn btn-primary">Edit Profile</Link>
                                    </div>
                                    <div className="mt-5">
                                        <Row className="main-profile-contact-list">
                                            <Col sm="4"md="6"xl="4" className="media ">
                                                <div className="media-icon bg-light text-primary me-3 mt-1">
                                                    <i className="fa fa-sticky-note-o fs-18"></i>
                                                </div>
                                                <div className="media-body">
                                                    <small className="text-muted">Posts</small>
                                                    <div className="font-weight-bold fs-25">
                                                        245
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm="4"md="6"xl="4" className="media ">
                                                <div className="media-icon bg-light text-primary me-3 mt-1">
                                                    <i className="fa fa-user fs-18"></i>
                                                </div>
                                                <div className="media-body">
                                                    <small className="text-muted">Followers</small>
                                                    <div className="font-weight-bold fs-25">
                                                        689k
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm="4"md="12"xl="4" className="media ">
                                                <div className="media-icon bg-light text-primary me-3 mt-1">
                                                    <i className="fa fa-feed fs-18"></i>
                                                </div>
                                                <div className="media-body">
                                                    <small className="text-muted">Following</small>
                                                    <div className="font-weight-bold fs-25">
                                                        3,765
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <div className="profile-cover">
                                <div className="wideget-user-tab">
                                    <div className="tab-menu-heading p-0">
                                        <div className="tabs-menu1 px-3">
                                            <Nav  className="nav">
                                                <NavItem><NavLink  className={classnames({ active: Tab1 === "tab-7", })} onClick={() => { style1("tab-7"); }} data-bs-toggle="tab">About</NavLink></NavItem>
                                                <NavItem><NavLink className={classnames({ active: Tab1 === "tab-8", })} onClick={() => { style1("tab-8"); }} data-bs-toggle="tab" >Friends</NavLink></NavItem>
                                                <NavItem><NavLink  className={classnames({ active: Tab1 === "tab-9", })} onClick={() => { style1("tab-9"); }} data-bs-toggle="tab" >Timeline</NavLink></NavItem>
                                            </Nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /.profile-cover --> */}
                        </div>
                        {/* <!-- Row --> */}
                        <Row>
                            <Col xl="12" lg="12" md="12">
                                <div className="border-0">
                                    <TabContent className="tab-content" activeTab={Tab1}>
                                        <TabPane className="tab-pane " tabId="tab-7">
                                            <Card>
                                                <CardBody>
                                                    <h5 className="font-weight-bold">Biography</h5>
                                                    <div className="main-profile-bio mb-0">
                                                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                            It has survived not only five centuries nchanged.</p>
                                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. </p>
                                                        <p className="mb-0">pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure.. <Link to="#">More</Link></p>
                                                    </div>
                                                </CardBody>
                                                <CardBody className="border-top">
                                                    <h5 className="font-weight-bold">Work & Education</h5>
                                                    <div className="main-profile-contact-list d-lg-flex">
                                                        <div className="media me-5">
                                                            <div className="media-icon bg-success-transparent text-success me-4">
                                                                <i className="fa fa-whatsapp"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="font-weight-bold mb-1">Web Designer at <Link to="#" className="btn-link">Spruko</Link></h6>
                                                                <span>2018 - present</span>
                                                                <p>Past Work: Spruko, Inc.</p>
                                                            </div>
                                                        </div>
                                                        <div className="media me-5">
                                                            <div className="media-icon bg-danger-transparent text-danger me-4">
                                                                <i className="fa fa-briefcase"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="font-weight-bold mb-1">Studied at <Link to="#" className="btn-link">University</Link></h6>
                                                                <span>2004-2008</span>
                                                                <p>Graduation: Bachelor of Science in Computer Science</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardBody>
                                                <CardBody className="border-top">
                                                    <h5 className="font-weight-bold">Skills</h5>
                                                    <Link className="btn btn-sm btn-white mt-1 me-1" to="#">HTML5</Link>
                                                    <Link className="btn btn-sm btn-white mt-1 me-1" to="#">CSS</Link>
                                                    <Link className="btn btn-sm btn-white mt-1 me-1" to="#">Java Script</Link>
                                                    <Link className="btn btn-sm btn-white mt-1 me-1" to="#">Photo Shop</Link>
                                                    <Link className="btn btn-sm btn-white mt-1 me-1" to="#">Php</Link>
                                                    <Link className="btn btn-sm btn-white mt-1 me-1" to="#">Wordpress</Link>
                                                    <Link className="btn btn-sm btn-white mt-1 me-1" to="#">Sass</Link>
                                                    <Link className="btn btn-sm btn-white mt-1 me-1" to="#">Angular</Link>
                                                </CardBody>
                                                <CardBody className="border-top">
                                                    <h5 className="font-weight-bold">Contact</h5>
                                                    <div className="main-profile-contact-list d-lg-flex">
                                                        <div className="media me-4">
                                                            <div className="media-icon bg-primary-transparent text-primary me-3 mt-1">
                                                                <i className="fa fa-phone"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <small className="text-muted">Mobile</small>
                                                                <div className="font-weight-bold">
                                                                    +245 354 654
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media me-4">
                                                            <div className="media-icon bg-warning-transparent text-warning me-3 mt-1">
                                                                <i className="fa fa-slack"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <small className="text-muted">Stack</small>
                                                                <div className="font-weight-bold">
                                                                    @spruko.com
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media">
                                                            <div className="media-icon bg-info-transparent text-info me-3 mt-1">
                                                                <i className="fa fa-map"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <small className="text-muted">Current Address</small>
                                                                <div className="font-weight-bold">
                                                                    San Francisco, USA
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!-- main-profile-contact-list --> */}
                                                </CardBody>
                                            </Card>
                                        </TabPane>
                                        <TabPane className="tab-pane" tabId="tab-8">
                                            <Card className="p-5">
                                                <Row>
                                                    <Col lg="6">
                                                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src={user7}/>
                                                            <div className="wrapper ms-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">Denis Rosenblum</p>
                                                                <small>Project Manager</small>
                                                            </div>
                                                            <div className="float-sm-end ms-auto">
                                                                <Link to="#" className="btn btn-primary btn-sm"><i className="si si-eye me-1 m-1"></i>View</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src={user6}/>
                                                            <div className="wrapper ms-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">Harvey Mattos</p>
                                                                <small>Project Manager</small>
                                                            </div>
                                                            <div className="float-sm-end ms-auto">
                                                                <Link to="#" className="btn btn-primary btn-sm"><i className="si si-eye me-1 m-1"></i>View</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src={user5}/>
                                                            <div className="wrapper ms-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">Catrice Doshier</p>
                                                                <small>Project Manager</small>
                                                            </div>
                                                            <div className="float-sm-end ms-auto">
                                                                <Link to="#" className="btn btn-primary btn-sm"><i className="si si-eye me-1 m-1"></i>View</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src={user1}/>
                                                            <div className="wrapper ms-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">Catherina Bamber</p>
                                                                <small>Project Manager</small>
                                                            </div>
                                                            <div className="float-sm-end ms-auto">
                                                                <Link to="#" className="btn btn-primary btn-sm"><i className="si si-eye me-1 m-1"></i>View</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src={user8}/>
                                                            <div className="wrapper ms-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">Margie Fitts</p>
                                                                <small>Project Manager</small>
                                                            </div>
                                                            <div className="float-sm-end ms-auto">
                                                                <Link to="#" className="btn btn-primary btn-sm"><i className="si si-eye me-1 m-1"></i>View</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src={user5}/>
                                                            <div className="wrapper ms-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">Dana Lott</p>
                                                                <small>Project Manager</small>
                                                            </div>
                                                            <div className="float-sm-end ms-auto">
                                                                <Link to="#" className="btn btn-primary btn-sm"><i className="si si-eye me-1 m-1"></i>View</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src={user6}/>
                                                            <div className="wrapper ms-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">Benedict Vallone</p>
                                                                <small>Project Manager</small>
                                                            </div>
                                                            <div className="float-sm-end ms-auto">
                                                                <Link to="#" className="btn btn-primary btn-sm"><i className="si si-eye me-1 m-1"></i>View</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src={user8}/>
                                                            <div className="wrapper ms-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">Robbie Ruder</p>
                                                                <small>Project Manager</small>
                                                            </div>
                                                            <div className="float-sm-end ms-auto">
                                                                <Link to="#" className="btn btn-primary btn-sm"><i className="si si-eye me-1 m-1"></i>View</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src={user3}/>
                                                            <div className="wrapper ms-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">Micaela Aultman</p>
                                                                <small>Project Manager</small>
                                                            </div>
                                                            <div className="float-sm-end ms-auto">
                                                                <Link to="#" className="btn btn-primary btn-sm"><i className="si si-eye me-1 m-1"></i>View</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src={user4}/>
                                                            <div className="wrapper ms-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">Jacquelynn Sapienza</p>
                                                                <small>Project Manager</small>
                                                            </div>
                                                            <div className="float-sm-end ms-auto">
                                                                <Link to="#" className="btn btn-primary btn-sm"><i className="si si-eye me-1 m-1"></i>View</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src={user9}/>
                                                            <div className="wrapper ms-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">Elida Distefano</p>
                                                                <small>Project Manager</small>
                                                            </div>
                                                            <div className="float-sm-end ms-auto">
                                                                <Link to="#" className="btn btn-primary btn-sm"><i className="si si-eye me-1 m-1"></i>View</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg="6">
                                                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                                                            <img className="avatar avatar-lg brround d-block cover-image" src={user7}/>
                                                            <div className="wrapper ms-3">
                                                                <p className="mb-0 mt-1 text-dark font-weight-semibold">Collin Bridgman</p>
                                                                <small>Project Manager</small>
                                                            </div>
                                                            <div className="float-sm-end ms-auto">
                                                                <Link to="#" className="btn btn-primary btn-sm"><i className="si si-eye me-1 m-1"></i>View</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col md="12">
                                                        <Link className="btn btn-block btn-light" to="#"><i className="fe fe-chevron-down"></i> See All</Link>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </TabPane>
                                        <TabPane className="tab-pane" tabId="tab-9">
                                            <ul className="timelineleft pb-5">
                                                <li className="timeleft-label"><span className="bg-danger">10 May. 2020</span></li>
                                                <li>
                                                    <i className="fa fa-envelope bg-primary"></i>
                                                    <div className="timelineleft-item">
                                                        <span className="time"><i className="fa fa-clock-o text-danger"></i> 12:05</span>
                                                        <h3 className="timelineleft-header"><Link to="#">Support Team</Link> <span>sent you an email</span></h3>
                                                        <div className="timelineleft-body">
                                                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...
                                                        </div>
                                                        <div className="timelineleft-footer">
                                                            <Button colo="" className="btn btn-primary text-white btn-sm me-1">Read more</Button>
                                                            <Button color="" className="btn btn-secondary text-white btn-sm me-1 ">Delete</Button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-user bg-secondary"></i>
                                                    <div className="timelineleft-item">
                                                        <span className="time"><i className="fa fa-clock-o text-danger"></i> 5 mins ago</span>
                                                        <h3 className="timelineleft-header no-border"><Link to="#">Sarah Young</Link> accepted your friend request</h3>
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-comments bg-warning"></i>
                                                    <div className="timelineleft-item">
                                                        <span className="time"><i className="fa fa-clock-o text-danger"></i> 27 mins ago</span>
                                                        <h3 className="timelineleft-header"><Link to="#">Jay White</Link> commented on your post</h3>
                                                        <div className="timelineleft-body">
                                                            Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!
                                                        </div>
                                                        <div className="timelineleft-footer">
                                                            <Button color="" className="btn btn-info text-white btn-flat btn-sm">View comment</Button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-video-camera bg-pink"></i>
                                                    <div className="timelineleft-item">
                                                        <span className="time"><i className="fa fa-clock-o text-danger"></i> 1 hour ago</span>
                                                        <h3 className="timelineleft-header"><Link to="#">Mr. John</Link> shared a video</h3>
                                                        <div className="timelineleft-body">
                                                            <div className="embed-responsive embed-responsive-16by9 w-75">
                                                                <iframe className="embed-responsive-item br-5" src="https://www.youtube.com/embed/tMWkeBIohBs" allowFullScreen></iframe>
                                                            </div>
                                                            <div className="timelineleft-body mt-3">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus.Lorem ipsum dolor sit amet
                                                            </div>
                                                        </div>
                                                        <div className="timelineleft-footer">
                                                            <Link to="#" className="btn btn-sm bg-warning text-white">See comments</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="timeleft-label">
                                                    <span className="bg-success"> 3 Jan. 2014</span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-camera bg-orange"></i>
                                                    <div className="timelineleft-item">
                                                        <span className="time"><i className="fa fa-clock-o text-danger"></i> 2 days ago</span>
                                                        <h3 className="timelineleft-header"><Link to="#">Mina Lee</Link> uploaded new photos</h3>
                                                        <div className="timelineleft-body">
                                                            <img src={photo1} alt="..." className="margin mt-2 mb-2 me-2 br-5"/>
                                                            <img src={photo2} alt="..." className="margin mt-2 mb-2 me-2 br-5"/>
                                                            <img src={photo3} alt="..." className="margin mt-2 mb-2 me-2 br-5"/>
                                                            <img src={photo4} alt="..." className="margin mt-2 mb-2 br-5"/>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-video-camera bg-pink"></i>
                                                    <div className="timelineleft-item">
                                                        <span className="time"><i className="fa fa-clock-o text-danger"></i> 5 days ago</span>
                                                        <h3 className="timelineleft-header"><Link to="#">Mr. Doe</Link> shared a video</h3>
                                                        <div className="timelineleft-body">
                                                            <div className="embed-responsive embed-responsive-16by9 w-75">
                                                                <iframe className="embed-responsive-item br-5" src="https://www.youtube.com/embed/tMWkeBIohBs" allowFullScreen></iframe>
                                                            </div>
                                                        </div>
                                                        <div className="timelineleft-footer">
                                                            <Link to="#" className="btn btn-sm bg-warning text-white">See comments</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-clock-o bg-success pb-3"></i>
                                                </li>
                                            </ul>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </Col>
                        </Row>
  </div>
);
    }

Profile02.propTypes = {};

Profile02.defaultProps = {};

export default Profile02;
