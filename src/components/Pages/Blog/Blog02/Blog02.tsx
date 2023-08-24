import React from 'react';
import user16 from'../../../../assets/images/users/16.jpg'
import user12 from'../../../../assets/images/users/12.jpg'
import user2 from'../../../../assets/images/users/2.jpg'
import user9 from'../../../../assets/images/users/9.jpg'
import { Card, CardBody, Col,DropdownMenu, DropdownToggle, Row, UncontrolledDropdown,DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Blogdata } from '../Blog01/data';
import { PageHeaderstyle } from '../../../../Shared/Prism/Prism';


const Blog02 = () => (
  <div>
    <PageHeaderstyle title="Blog"home="Home"Pages="Pages"elements="Blog"name="Blog 02"/>
                        
                        <Row>
                        {Blogdata.map((list, index) => (
                            <Col xl="4"lg="6"md="12" key={index}>
                                <Card className="overflow-hidden">
                                    <CardBody className="px-4">
                                        <div className="d-flex align-items-center mt-auto">
                                            <div className="avatar brround avatar-md me-3" style={{backgroundImage: `url(${user16})`}}></div>
                                            <div>
                                                <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="font-weight-semibold">Anna Ogden</Link>
                                                <small className="d-block text-muted">2 days ago</small>
                                            </div>
                                            <UncontrolledDropdown className="ms-auto text-muted">
                                                <DropdownToggle tag="a" color="" className="option-dots new-list2" data-bs-toggle="dropdown"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></DropdownToggle>
                                                <DropdownMenu className="dropdown-menu tx-13 dropdown-menu-end">
                                                    <DropdownItem className="dropdown-item" href="#">Assigned to</DropdownItem>
                                                    <DropdownItem className="dropdown-item" href="#">Mark As Unread</DropdownItem>
                                                    <DropdownItem className="dropdown-item" href="#">Mark As Important</DropdownItem>
                                                    <DropdownItem className="dropdown-item" href="#">Add Star</DropdownItem>
                                                    <DropdownItem className="dropdown-item" href="#">Move to</DropdownItem>
                                                    <DropdownItem className="dropdown-item" href="#">Mute</DropdownItem>
                                                    <DropdownItem className="dropdown-item" href="#">Move to Trash</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </div>
                                    </CardBody>
                                    <div className="item7-card-img px-4">
                                        <Link to={`${import.meta.env.BASE_URL}pages/blog/blog03`}>
                                            <img src={list.pic} alt="img" className="cover-image br-7 w-100"/>
                                        </Link>
                                    </div>
                                    <CardBody>
                                        <div className="item7-card-desc d-flex mb-5">
                                            <Link to="#" className="d-flex"><svg className="svg-icon me-2" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z"/><path d="M4 5.01h16V8H4z" opacity=".3"/></svg><div className="mt-0">{list.day}</div></Link>
                                            <div className="ms-auto">
                                                <Link className="me-0 d-flex" to="#"><svg className="svg-icon me-2" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 17.17V4H4v12h14.83L20 17.17zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" opacity=".3"/><path d="M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 4h16v13.17L18.83 16H4V4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"/></svg><div className="mt-0">{list.comment}</div></Link>
                                            </div>
                                        </div>
                                        <Link to="#" className="mt-4">
                                            <h5 className="font-weight-semibold">{list.h5}</h5>
                                        </Link>
                                        <p className="">Lorem ipsum dolor quis exercitationem into enim ad minima nostrum itationem </p>
                                        <div className="media py-3 mt-0 border-top">
                                            <div className="media-user me-2">
                                                <div className="avatar-list avatar-list-stacked">
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user12})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user2})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user9})`}}></span>
                                                    <span className="avatar brround" style={{backgroundImage: `url(${user2})`}}></span>
                                                </div>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="d-flex">
                                                    <Link className="new" to="#"><svg className="svg-icon me-3 mt-2" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg></Link>
                                                    <Link className="new" to="#"><svg className="svg-icon me-3 mt-2" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 17.17V4H4v12h14.83L20 17.17zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" opacity=".3"/><path d="M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 4h16v13.17L18.83 16H4V4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"/></svg></Link>
                                                    <Link className="new" to="#"><svg className="svg-icon mt-2" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="18" cy="5" opacity=".3" r="1"/><circle cx="6" cy="12" opacity=".3" r="1"/><circle cx="18" cy="19.02" opacity=".3" r="1"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                            
                        </Row>
  </div>
);

Blog02.propTypes = {};

Blog02.defaultProps = {};

export default Blog02;
