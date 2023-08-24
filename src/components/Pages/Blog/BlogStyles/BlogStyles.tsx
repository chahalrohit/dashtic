import React from 'react';
import user16 from "../../../../assets/images/users/16.jpg"
import user14 from "../../../../assets/images/users/14.jpg"
import photo7 from "../../../../assets/images/photos/7.jpg"
import user6 from "../../../../assets/images/users/6.jpg"
import photo8 from "../../../../assets/images/photos/8.jpg"
import photo2 from "../../../../assets/images/photos/2.jpg"
import user12 from "../../../../assets/images/users/12.jpg"
import user3 from "../../../../assets/images/users/3.jpg"
import photo18 from "../../../../assets/images/photos/18.jpg"
import user15 from "../../../../assets/images/users/15.jpg"
import photo15 from "../../../../assets/images/photos/15.jpg"
import photo14 from "../../../../assets/images/photos/14.jpg"
import photo13 from "../../../../assets/images/photos/13.jpg"
import photo9 from "../../../../assets/images/photos/9.jpg"
import photo10 from "../../../../assets/images/photos/10.jpg"
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PageHeaderstyle } from './../../../../Shared/Prism/Prism';
const BlogStyles = () => (
    <div>
        <PageHeaderstyle title="Blog" home="Home" Pages="Pages" elements="Blog" name="Blog Styles" />

        {/* <!--End Page header--> */}

        {/* <!-- Row --> */}
        <Row>
            <Col md="6" xl="4">
                <Card className="overflow-hidden">
                    <CardBody className=" d-flex flex-column">
                        <h4><Link to="#"> annoying consequences</Link></h4>
                        <div className="text-muted">Who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces.</div>
                    </CardBody>
                    <CardBody className="">
                        <div className="d-flex align-items-center mt-auto">
                            <div className="avatar brround avatar-md me-3" style={{ backgroundImage: `url(${user16})` }}></div>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="font-weight-semibold">Anna Ogden</Link>
                                <small className="d-block text-muted">2 days ago</small>
                            </div>
                            <div className="ms-auto text-muted">
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg></Link>
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg></Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col md="6" xl="4">
                <Card>
                    <CardBody className=" d-flex flex-column">
                        <h4><Link to="#">voluptatem quia voluptas.</Link></h4>
                        <div className="text-muted">Who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces.</div>
                    </CardBody>
                    <CardBody className="">
                        <div className="d-flex align-items-center mt-auto">
                            <div className="avatar brround avatar-md me-3" style={{ backgroundImage: `url(${user16})` }}></div>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="font-weight-semibold">Anna Ogden</Link>
                                <small className="d-block text-muted">2 days ago</small>
                            </div>
                            <div className="ms-auto text-muted">
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg></Link>
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg></Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col md="6" xl="4">
                <Card>
                    <CardBody className=" d-flex flex-column">
                        <h4><Link to="#">voluptatem quia voluptas</Link></h4>
                        <div className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...</div>
                    </CardBody>
                    <CardBody className="">
                        <div className="d-flex align-items-center mt-auto">
                            <div className="avatar  brround avatar-md me-3" style={{ backgroundImage: `url(${user14})` }}></div>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="font-weight-semibold">Carol Paige</Link>
                                <small className="d-block text-muted">2 days ago</small>
                            </div>
                            <div className="ms-auto text-muted">
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg></Link>
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg></Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col md="6" xl="4">
                <Card className="overflow-hidden">
                    <Link to={`${import.meta.env.BASE_URL}pages/blog/blog03`}><img className="card-img-top  " src={photo8} alt="img" /></Link>
                    <CardBody className=" d-flex flex-column">
                        <h4><Link to="#">voluptatem quia voluptas.</Link></h4>
                        <div className="text-muted">To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it...</div>
                        <Link to="#" className="mt-3 btn btn-lg btn-primary">Read more</Link>
                    </CardBody>
                </Card>
            </Col>
            <Col md="6" xl="4">
                <Card className="overflow-hidden">
                    <Link to={`${import.meta.env.BASE_URL}pages/blog/blog03`}><img className="card-img-top " src={photo9} alt="img" /></Link>
                    <CardBody className=" d-flex flex-column">
                        <h4><Link to="#">voluptatem quia voluptas.</Link></h4>
                        <div className="text-muted">To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it...</div>
                        <Link to="#" className="mt-3 btn btn-lg btn-primary">Read more</Link>
                    </CardBody>
                </Card>
            </Col>
            <Col md="6" xl="4">
                <Card className="overflow-hidden">
                    <Link to={`${import.meta.env.BASE_URL}pages/blog/blog03`}><img className="card-img-top " src={photo10} alt="img" /></Link>
                    <CardBody className=" d-flex flex-column">
                        <h4><Link to="#">voluptatem quia voluptas.</Link></h4>
                        <div className="text-muted">To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some advantage from it...</div>
                        <Link to="#" className="mt-3 btn btn-lg btn-primary">Read more</Link>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        {/* <!--End Row-->

                        <!-- Row--> */}
        <Row>
            <Col lg="6">
                <Card className="card-aside">
                    <Link to={`${import.meta.env.BASE_URL}pages/blog/blog03`} className="card-aside-column br-tl-7 br-bl-7" style={{ backgroundImage: `url(${photo7})` }}></Link>
                    <CardBody className=" d-flex flex-column">
                        <div className="d-flex align-items-center mb-5">
                            <div className="avatar  brround avatar-md me-3" style={{ backgroundImage: `url(${user6})` }}></div>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="font-weight-semibold">Thomos Scott</Link>
                                <small className="d-block text-muted">1 day ago</small>
                            </div>
                            <div className="ms-auto text-muted">
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg></Link>
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg></Link>
                            </div>
                        </div>
                        <h4><Link to="#">Publishing packages</Link></h4>
                        <div className="text-muted ">Many desktop publishing packages and web page editors now use default model text, and a search for will uncover...</div>
                        <div><Link to="#" className=" mt-3 btn btn-sm btn-primary">Read more</Link></div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="6">
                <Card className="card-aside">
                    <CardBody className=" d-flex flex-column">
                        <div className="d-flex align-items-center mb-5">
                            <div className="avatar  brround avatar-md me-3" style={{ backgroundImage: `url(${user16})` }}></div>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="font-weight-semibold">Irene	Scott</Link>
                                <small className="d-block text-muted">2 days ago</small>
                            </div>
                            <div className="ms-auto text-muted">
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg></Link>
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg></Link>
                            </div>
                        </div>
                        <h4><Link to="#">Nihil molestaturrgt.</Link></h4>
                        <div className="text-muted ">Many desktop publishing packages and web page editors now use default model text, and a search for will uncover...</div>
                        <div><Link to="#" className=" mt-3 btn btn-sm btn-primary">Read more</Link></div>
                    </CardBody>
                    <Link to={`${import.meta.env.BASE_URL}pages/blog/blog03`} className="card-aside-column br-br-7 br-tr-7" style={{ backgroundImage: `url(${photo8})` }}></Link>
                </Card>
            </Col>
            <Col lg="6">
                <Card className="card-aside">
                    <Link to={`${import.meta.env.BASE_URL}pages/blog/blog03`} className="card-aside-column br-tl-7 br-bl-7" style={{ backgroundImage: `url(${photo2})` }}></Link>
                    <CardBody className=" d-flex flex-column">
                        <h4><Link to="#">Generator on the Internet..</Link></h4>
                        <div className="text-muted">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum....</div>
                        <div className="d-flex align-items-center pt-5 mt-auto">
                            <div className="avatar  brround avatar-md me-3" style={{ backgroundImage: `url(${user12})` }}></div>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="font-weight-semibold">Anna Ogden</Link>
                                <small className="d-block text-muted">1 days ago</small>
                            </div>
                            <div className="ms-auto text-muted">
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg></Link>
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg></Link>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="6">
                <Card className="card-aside">
                    <CardBody className=" d-flex flex-column">
                        <h4><Link to="#">Nihil Molestiae.</Link></h4>
                        <div className="text-muted">Many desktop publishing packages and web page editors now use default model text, and a search for will uncover...</div>
                        <div className="d-flex align-items-center pt-5 mt-auto">
                            <div className="avatar  brround avatar-md me-3" style={{ backgroundImage: `url(${user3})` }}></div>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="font-weight-semibold">Irene	Scott</Link>
                                <small className="d-block text-muted">2 days ago</small>
                            </div>
                            <div className="ms-auto text-muted">
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg></Link>
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg></Link>
                            </div>
                        </div>
                    </CardBody>
                    <Link to={`${import.meta.env.BASE_URL}pages/blog/blog03`} className="card-aside-column br-br-7 br-tr-7" style={{ backgroundImage: `url(${photo18})` }}></Link>
                </Card>
            </Col>
            <Col md="6" xl="4">
                <Card>
                    <CardBody className=" d-flex flex-column">
                        <h4><Link to="#">voluptatem quia voluptas.</Link></h4>
                        <div className="text-muted">To take a trivial example, which of us ever undertakes laborious physical exerciser , except to obtain some </div>
                        <div className="d-flex align-items-center pt-5 mt-auto">
                            <div className="avatar brround avatar-md me-3" style={{ backgroundImage: `url(${user15})` }}></div>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="font-weight-semibold">MeganPeters</Link>
                                <small className="d-block text-muted">1 days ago</small>
                            </div>
                            <div className="ms-auto text-muted">
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg></Link>
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg></Link>
                            </div>
                        </div>
                    </CardBody>
                    <Link to={`${import.meta.env.BASE_URL}pages/blog/blog03`}><img className="card-img-top br-7 br-tl-0 br-tr-0" src={photo13} alt="And this isn&#39;t my nose. This is a false one." /></Link>
                </Card>
            </Col>
            <Col md="6" xl="4">
                <Card>
                    <CardBody className=" d-flex flex-column">
                        <h4><Link to="#">voluptatem quia voluptas.</Link></h4>
                        <div className="text-muted">Who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces.</div>
                        <div className="d-flex align-items-center pt-5 mt-auto">
                            <div className="avatar brround avatar-md me-3" style={{ backgroundImage: `url(${user16})` }}></div>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="font-weight-semibold">Anna Ogden</Link>
                                <small className="d-block text-muted">2 days ago</small>
                            </div>
                            <div className="ms-auto text-muted">
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg></Link>
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg></Link>
                            </div>
                        </div>
                    </CardBody>
                    <Link to={`${import.meta.env.BASE_URL}pages/blog/blog03`}><img className="card-img-top br-7 br-tl-0 br-tr-0" src={photo14} alt="Well, I didn&#39;t vote for you." /></Link>
                </Card>
            </Col>
            <Col md="6" xl="4">
                <Card>
                    <CardBody className=" d-flex flex-column">
                        <h4><Link to="#">voluptatem quia voluptas</Link></h4>
                        <div className="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque...</div>
                        <div className="d-flex align-items-center pt-5 mt-auto">
                            <div className="avatar  brround avatar-md me-3" style={{ backgroundImage: `url(${user14})` }}></div>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="font-weight-semibold">Carol Paige</Link>
                                <small className="d-block text-muted">2 days ago</small>
                            </div>
                            <div className="ms-auto text-muted">
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.5 5c-1.54 0-3.04.99-3.56 2.36h-1.87C10.54 5.99 9.04 5 7.5 5 5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.9 10.05l.1.1.1-.1C16.86 14.24 20 11.39 20 8.5c0-2-1.5-3.5-3.5-3.5z" opacity=".3" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg></Link>
                                <Link to="#" className="icon d-none d-md-inline-block ms-3"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3" /><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z" /></svg></Link>
                            </div>
                        </div>
                    </CardBody>
                    <Link to={`${import.meta.env.BASE_URL}pages/blog/blog03`}><img className="card-img-top br-7 br-tl-0 br-tr-0" src={photo15} alt="How do you know she is a witch?" /></Link>
                </Card>
            </Col>
        </Row>
    </div>
);

BlogStyles.propTypes = {};

BlogStyles.defaultProps = {};

export default BlogStyles;
