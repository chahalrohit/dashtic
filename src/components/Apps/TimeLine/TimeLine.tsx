import React,{useState} from 'react';
import user12 from '../../../assets/images/users/12.jpg'
import user2 from '../../../assets/images/users/2.jpg'
import user9 from '../../../assets/images/users/9.jpg'
import user4 from '../../../assets/images/users/4.jpg'
import user16 from "../../../assets/images/users/16.jpg"
import photo4 from "../../../assets/images/photos/4.jpg"
import photo2 from "../../../assets/images/photos/2.jpg"
import photo3 from "../../../assets/images/photos/3.jpg"
import photo5 from "../../../assets/images/photos/5.jpg"
import photo6 from "../../../assets/images/photos/6.jpg"
import { Card,CardBody, Col, Row, UncontrolledTooltip,Form,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem, CardHeader, CardTitle, Label,Button, ListGroup, ListGroupItem, Nav, NavItem, NavLink  } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from "classnames";
import { PageHeaders } from '../../../Shared/Prism/Prism';
const TimeLine = () =>{
    const [Tab1, setTab1] = useState("1");
    const style1 = (tab: string) => {
        if (Tab1 !== tab) {
            setTab1(tab);
        }
    };
return(
  <div>
     <PageHeaders
      title="TimeLine"
      home="Home"
      name="Apps"
      fonticonsname="TimeLine"
    />

                        <Row className="row-sm">
                            <Col lg="8">
                                <Card>
                                    <div className="tab-menu-heading p-0 border-0">
                                        <div className="tabs-menu1 px-3">
                                            <Nav className="nav">
                                                <NavItem><NavLink className={classnames({ active: Tab1 === "1", })} onClick={() => { style1("1"); }}  data-bs-toggle="tab">Post</NavLink></NavItem>
                                                <NavItem><NavLink className={classnames({ active: Tab1 === "2", })} onClick={() => { style1("2"); }} data-bs-toggle="tab" >Albumbs</NavLink></NavItem>
                                                <NavItem><NavLink className={classnames({ active: Tab1 === "3", })} onClick={() => { style1("3"); }} data-bs-toggle="tab">Videos</NavLink></NavItem>
                                            </Nav>
                                        </div>
                                    </div>
                                    <CardBody className="d-flex border-top">
                                        <div className="me-4"><img alt="" className="rounded-circle avatar avatar-md mw-fit-content" src={user16}/></div>
                                        <Form className="profile-edit w-100">
                                            <textarea className="form-control" placeholder="What are you doing right now?" rows={5}></textarea>
                                            <div className="profile-share border border-top-0">
                                                <Link to="#" className="me-2" title="" data-bs-toggle="tooltip" data-bs-placement="bottom" id="Audio"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 13.3c.66 0 1.19-.54 1.19-1.2l.01-6.2c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2 1.2v6.2c0 .66.54 1.2 1.2 1.2z" opacity=".3"/><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm-1.2-9.1c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2s-1.2-.54-1.2-1.2V5.9zm6.5 6.1c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.41 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg></Link>
                                                <UncontrolledTooltip target="Audio" placement='bottom' >Audio</UncontrolledTooltip>
                                                <Link to="#" className="me-2" title="" data-bs-toggle="tooltip" data-bs-placement="bottom" id="Video"><svg  className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 8h10v8H5z" opacity=".3"/><path d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z"/></svg></Link>
                                                <UncontrolledTooltip target="Video" placement='bottom' >Video</UncontrolledTooltip>
                                                <Link to="#" className="me-2" title="" data-bs-toggle="tooltip" data-bs-placement="bottom" id="Picture"><svg  className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 19h14V5H5v14zm4-5.86l2.14 2.58 3-3.87L18 17H6l3-3.86z" opacity=".3"/><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zm-4.86-7.14l-3 3.86L9 13.14 6 17h12z"/></svg></Link>
                                                <UncontrolledTooltip target="Picture" placement='bottom' >Picture</UncontrolledTooltip>
                                                <Button color="" type="submit" className="btn btn-sm btn-success pull-right"><i className="fa fa-share ms-1"></i> Share</Button>
                                            </div>
                                        </Form>
                                    </CardBody>
                                </Card>
                                <Card className="overflow-hidden">
                                    <CardBody className="pb-0">
                                        <div className="d-flex">
                                            <div className="media mt-0">
                                                <div className="media-user me-2">
                                                    <div className=""><img alt="" className="rounded-circle avatar avatar-md mw-fit-content" src={user16}/></div>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="mb-0 mt-1 font-weight-bold">Peter Hill</h6>
                                                    <small className="text-primary">just now</small>
                                                </div>
                                            </div>
                                            <div className="ms-auto">
                                                <UncontrolledDropdown className="dropdown show">
                                                    <DropdownToggle tag="a" color=""className="new option-dots" data-bs-toggle="dropdown"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                                        <DropdownItem className="dropdown-item" href="#">Edit Post</DropdownItem>
                                                        <DropdownItem className="dropdown-item" href="#">Delete Post</DropdownItem>
                                                        <DropdownItem className="dropdown-item" href="#">Personal Settings</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                        </div>
                                        <div className="media mg-t-15 profile-footer">
                                            <div className="media-user me-2">
                                                <div className="avatar-list avatar-list-stacked">
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user12})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user2})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user9})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user2})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user4})`}}></span>
                                                    <span className="avatar brround">+28</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="mb-0 mt-2 ms-2">28 people like your photo</h6>
                                            </div>
                                            <div className="">
                                                <div className="d-flex">
                                                    <Link className="new" to="#"><svg className="svg-icon me-3 mt-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg></Link>
                                                    <Link className="new" to="#"><svg className="svg-icon me-3 mt-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 17.17V4H4v12h14.83L20 17.17zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" opacity=".3"/><path d="M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 4h16v13.17L18.83 16H4V4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"/></svg></Link>
                                                    <Link className="new" to="#"><svg className="svg-icon mt-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="18" cy="5" opacity=".3" r="1"/><circle cx="6" cy="12" opacity=".3" r="1"/><circle cx="18" cy="19.02" opacity=".3" r="1"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card className="overflow-hidden">
                                    <CardBody className="pb-0">
                                        <div className="d-flex">
                                            <div className="media mt-0">
                                                <div className="media-user me-2">
                                                    <div className=""><img alt="" className="rounded-circle avatar avatar-md mw-fit-content" src={user16}/></div>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="mb-0 mt-1 font-weight-bold">Peter Hill</h6>
                                                    <small className="text-muted">Sep 26 2019, 10:14am</small>
                                                </div>
                                            </div>
                                            <div className="ms-auto">
                                                <UncontrolledDropdown className="dropdown show">
                                                    <DropdownToggle color="" tag="a" className="new option-dots" data-bs-toggle="dropdown"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                                        <DropdownItem className="dropdown-item" href="#">Edit Post</DropdownItem>
                                                        <DropdownItem className="dropdown-item" href="#">Delete Post</DropdownItem>
                                                        <DropdownItem className="dropdown-item" href="#">Personal Settings</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                            <div className="d-flex">
                                                <img src={photo2} alt="img" className="w-40 m-1 br-5"/>
                                                <img src={photo3} alt="img" className="w-40 m-1 br-5"/>
                                            </div>
                                        </div>
                                        <div className="media mg-t-15 profile-footer">
                                            <div className="media-user me-2">
                                                <div className="avatar-list avatar-list-stacked">
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user12})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user2})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user9})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user2})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user4})`}}></span>
                                                    <span className="avatar brround">+28</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="mb-0 mt-2 ms-2">28 people like your photo</h6>
                                            </div>
                                            <div className="">
                                                <div className="d-flex">
                                                    <Link className="new" to="#"><svg className="svg-icon me-3 mt-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg></Link>
                                                    <Link className="new" to="#"><svg className="svg-icon me-3 mt-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 17.17V4H4v12h14.83L20 17.17zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" opacity=".3"/><path d="M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 4h16v13.17L18.83 16H4V4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"/></svg></Link>
                                                    <Link className="new" to="#"><svg className="svg-icon mt-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="18" cy="5" opacity=".3" r="1"/><circle cx="6" cy="12" opacity=".3" r="1"/><circle cx="18" cy="19.02" opacity=".3" r="1"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card className="overflow-hidden">
                                    <CardBody className="pb-0">
                                        <div className="d-flex">
                                            <div className="media mt-0">
                                                <div className="media-user me-2">
                                                    <div className=""><img alt="" className="rounded-circle avatar avatar-md mw-fit-content" src={user16}/></div>
                                                </div>
                                                <div className="media-body">
                                                    <h6 className="mb-0 mt-1 font-weight-bold">Peter Hill</h6>
                                                    <small className="text-muted">Sep 24 2019, 09:14am</small>
                                                </div>
                                            </div>
                                            <div className="ms-auto">
                                                <UncontrolledDropdown className="dropdown show">
                                                    <DropdownToggle color="" tag="a"  className="new option-dots"  data-bs-toggle="dropdown"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu dropdown-menu-end">
                                                        <DropdownItem className="dropdown-item" href="#">Edit Post</DropdownItem>
                                                        <DropdownItem className="dropdown-item" href="#">Delete Post</DropdownItem>
                                                        <DropdownItem className="dropdown-item" href="#">Personal Settings</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                            <div className="d-flex">
                                                <img src={photo4} alt="img" className="w-30 m-1 br-5"/>
                                                <img src={photo5} alt="img" className="w-30 m-1 br-5"/>
                                                <img src={photo6} alt="img" className="w-30 m-1 br-5"/>
                                            </div>
                                        </div>
                                        <div className="media mg-t-15 profile-footer">
                                            <div className="media-user me-2">
                                                <div className="avatar-list avatar-list-stacked">
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user12})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user2})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user9})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user2})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user4})`}}></span>
                                                    <span className="avatar brround">+28</span>
                                                </div>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="mb-0 mt-2 ms-2">28 people like your photo</h6>
                                            </div>
                                            <div className="">
                                                <div className="d-flex">
                                                    <Link className="new" to="#"><svg className="svg-icon me-3 mt-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg></Link>
                                                    <Link className="new" to="#"><svg className="svg-icon me-3 mt-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 17.17V4H4v12h14.83L20 17.17zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" opacity=".3"/><path d="M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 4h16v13.17L18.83 16H4V4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"/></svg></Link>
                                                    <Link className="new" to="#"><svg className="svg-icon mt-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="18" cy="5" opacity=".3" r="1"/><circle cx="6" cy="12" opacity=".3" r="1"/><circle cx="18" cy="19.02" opacity=".3" r="1"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="mg-b-20 card--events">
                                    <CardHeader>
                                        <CardTitle>
                                            Trending Posts
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody className="p-0">
                                        <div className="">
                                            <ListGroup className="list-group mb-0">
                                                <ListGroupItem className="list-group-item d-flex border-top-0 border-start-0 border-end-0">
                                                    <div className="w-3 h-3 bg-primary me-3 mt-1 brround"></div>
                                                    <div>
                                                        <Label className="fs-12">Oct 20 <span className="font-weight-semibold">Sunday</span></Label>
                                                        <h5>New Fests Blog</h5>
                                                        <p className="mb-0 text-muted fs-12"><strong>8AM - 4PM</strong> Rew City, USA</p>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="list-group-item d-flex border-start-0 border-end-0">
                                                    <div className="w-3 h-3 bg-secondary me-3 mt-1 brround"></div>
                                                    <div>
                                                        <Label className="fs-12">Oct 18 <span className="font-weight-semibold">Friday</span></Label>
                                                        <h6>New Location Visited</h6>
                                                        <p className="mb-0 text-muted fs-12"><strong>8AM - 5PM</strong> Newyork</p>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="list-group-item d-flex border-start-0 border-end-0">
                                                    <div className="w-3 h-3 bg-success me-3 mt-1 brround"></div>
                                                    <div>
                                                        <Label className="fs-12">Oct 12 <span className="font-weight-semibold">Saturday</span></Label>
                                                        <h6>Weding Event Dance Show</h6>
                                                        <p className="mb-0 text-muted fs-12"><strong>8AM - 5PM</strong> Japan</p>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="list-group-item d-flex border-start-0 border-end-0">
                                                    <div className="w-3 h-3 bg-warning me-3 mt-1 brround"></div>
                                                    <div>
                                                        <Label className="fs-12">Sep 20 <span className="font-weight-semibold">Friday</span></Label>
                                                        <h6>Field day Festival Events Orders</h6>
                                                        <p className="mb-0 text-muted fs-12"><strong>8AM - 4PM</strong> Rew City, USA</p>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="list-group-item d-flex border-start-0 border-end-0">
                                                    <div className="w-3 h-3 bg-info me-3 mt-1 brround"></div>
                                                    <div>
                                                        <Label className="fs-12">Sep 25 <span className="font-weight-semibold">Wednesday</span></Label>
                                                        <h6>Christamas Party Event Orders</h6>
                                                        <p className="mb-0 text-muted fs-12"><strong>8AM - 5PM</strong> Newyork</p>
                                                    </div>
                                                </ListGroupItem>
                                                <ListGroupItem className="list-group-item d-flex border-start-0 border-end-0">
                                                    <div className="w-3 h-3 bg-danger me-3 mt-1 brround"></div>
                                                    <div>
                                                        <Label className="fs-12">Sep 30 <span className="font-weight-semibold">Monday</span></Label>
                                                        <h6>New Weding Event Dance Show Orders</h6>
                                                        <p className="mb-0 text-muted fs-12"><strong>8AM - 5PM</strong> Japan</p>
                                                    </div>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                        </Row>

  </div>
);
 }
TimeLine.propTypes = {};

TimeLine.defaultProps = {};

export default TimeLine;
