import React from 'react';
import user16 from "../../../../assets/images/users/16.jpg"
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Blogdata } from './data';
import { PageHeaderstyle } from './../../../../Shared/Prism/Prism';

const Blog01 = () => (
  <div>
<PageHeaderstyle title="Blog"home="Home"Pages="Pages"elements="Blog"name="Blog 01"/>
                
                        <Row>
                            {Blogdata.map((list, index) => (
                            <Col xl="4"lg="6"md="12" key={index}>
                                <Card className="overflow-hidden">
                                    <div className="item7-card-img">
                                        <Link to={`${import.meta.env.BASE_URL}pages/blog/blog03`}>
                                            <img src={list.pic} alt="img" className="cover-image w-100"/>
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
                                        <p>Lorem ipsum dolor quis exercitationem into enim ad minima nostrum itationem </p>
                                    </CardBody>
                                    <CardBody>
                                    <div className="d-flex align-items-center mt-auto">
                                            <div className="avatar brround avatar-md me-3" style={{backgroundImage: `url(${user16})`}}></div>
                                            <div>
                                                <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="font-weight-semibold">Anna Ogden</Link>
                                                <small className="d-block text-muted">2 days ago</small>
                                            </div>
                                            <div className="ms-auto text-muted">
                                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg></Link>
                                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3"/><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"/></svg></Link>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            ))}
                            
                        </Row>
  </div>
);

Blog01.propTypes = {};

Blog01.defaultProps = {};

export default Blog01;
