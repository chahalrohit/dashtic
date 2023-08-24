import React from 'react';
import user12 from '../../../../assets/images/users/12.jpg'
import user9 from '../../../../assets/images/users/9.jpg'
import user2 from '../../../../assets/images/users/2.jpg'
import blogs from '../../../../assets/images/photos/blog.jpg'
import user1 from "../../../../assets/images/users/1.jpg"
import user3 from "../../../../assets/images/users/3.jpg"
import { Card, CardBody, CardHeader, Col, Input, Row,CardTitle,Button, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PageHeaderstyle } from './../../../../Shared/Prism/Prism';

const Blog03 = () => (
  <div>
    <PageHeaderstyle title="Blog"home="Home"Pages="Pages"elements="Blog"name="Blog 03"/>

                        <Row>
                            <Col xl="12"lg="12"md="12">
                                <Card className="overflow-hidden">
                                    <div className="item7-card-img px-4 pt-4">
                                        <Link to="#"></Link>
                                        <img src={blogs} alt="img" className="cover-image br-7 w-100"/>
                                    </div>
                                    <CardBody>
                                        <div className="item7-card-desc d-md-flex mb-5">
                                            <Link to="#" className="d-flex me-3 mb-2"><svg className="svg-icon me-2" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z"/><path d="M4 5.01h16V8H4z" opacity=".3"/></svg><div className="mt-0">Jan-18-2020</div></Link>
                                            <Link to="#" className="d-flex mb-2"><svg className="svg-icon me-2" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3"></path><circle cx="12" cy="8" opacity=".3" r="2"></circle><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></svg><div className="mt-0">Anna Ogden</div></Link>
                                            <div className="ms-auto mb-2">
                                                <Link className="me-0 d-flex" to="#"><svg className="svg-icon me-2" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 17.17V4H4v12h14.83L20 17.17zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" opacity=".3"/><path d="M4 18h14l4 4-.01-18c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM4 4h16v13.17L18.83 16H4V4zm2 8h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"/></svg><div className="mt-0">12 Comments</div></Link>
                                            </div>
                                        </div>
                                        <Link to="#" className="mt-4">
                                            <h5 className="font-weight-semibold">Excepteur occaecat cupidatat</h5>
                                        </Link>
                                        <p className="">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
                                            truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
                                        <p>but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is
                                            pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example</p>
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

                                {/* <!--Comments--> */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">3 Comments</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="d-sm-flex mt-0 p-5 sub-review-section border border-bottom-0 br-bl-0 br-br-0">
                                            <div className="d-flex me-3">
                                                <Link to="#"><img className="media-object brround avatar-md" alt="64x64" src={user1}/> </Link>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-1 font-weight-semibold d-inline-flex">Joanne Scott
                                                    <span className="fs-14 mx-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="verified"><i className="fa fa-check-circle-o text-success"></i></span>
                                                    <span className="fs-14 ms-2"> 4.5 <i className="fa fa-star text-yellow"></i></span>
                                                </h5>
                                                <p className="font-13  mb-2 mt-2">
                                                    Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat.
                                                </p>
                                                <Link to="#" className="me-2 mt-1"><span className="badge bg-primary">Helpful</span></Link>
                                                <Link to="#" className="me-2 mt-1" data-bs-toggle="" data-bs-target="#Comment"><span className="badge bg-light">Comment</span></Link>
                                                <Link to="#" className="me-2 mt-1" data-bs-toggle="" data-bs-target="#report"><span className="badge bg-light">Report</span></Link>
                                                <div className="btn-group btn-group-sm mb-1 ms-auto float-sm-end mt-1">
                                                    <Button color="" className="btn btn-light" type="button"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3"></path><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"></path></svg></Button>
                                                    <Button color="" className="btn btn-light" type="button"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M3 12v2h8.77l-1.11 5.34L15 15V5H6z" opacity=".3"/><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L11.77 14H3v-2l3-7h9v10zm4-12h4v12h-4z"/></svg></Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-sm-flex p-5 sub-review-section border subsection-color br-tl-0 br-tr-0">
                                            <div className="d-flex me-3">
                                                <Link to="#"><img className="media-object brround avatar-md" alt="64x64" src={user2}/> </Link>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-1 font-weight-semibold d-inline-flex">Rose Slater<span className="fs-14 mx-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="verified"><i className="fa fa-check-circle-o text-success"></i></span></h5>
                                                <p className="font-13  mb-2 mt-2">
                                                    Lorem ipsum dolor sit amet nostrud exercitation ullamco laboris commodo consequat.
                                                </p>
                                                <Link to="#" data-bs-toggle="" data-bs-target="#Comment" className="mt-1 me-2"><span className="badge bg-light">Comment</span></Link>
                                                <div className="btn-group btn-group-sm mb-1 ms-auto float-sm-end mt-1">
                                                    <Button color="" className="btn btn-light" type="button"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3"></path><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"></path></svg></Button>
                                                    <Button color="" className="btn btn-light" type="button"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M3 12v2h8.77l-1.11 5.34L15 15V5H6z" opacity=".3"/><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L11.77 14H3v-2l3-7h9v10zm4-12h4v12h-4z"/></svg></Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-sm-flex p-5 mt-4 border sub-review-section">
                                            <div className="d-flex me-3">
                                                <Link to="#"><img className="media-object brround avatar-md" alt="64x64" src={user3}/> </Link>
                                            </div>
                                            <div className="media-body">
                                                <h5 className="mt-0 mb-1 font-weight-semibold d-inline-flex"> Edward 
                                                    <span className="fs-14 mx-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="verified"><i className="fa fa-check-circle-o text-success"></i></span>
                                                    <span className="fs-14 ms-2"> 4 <i className="fa fa-star text-yellow"></i></span>
                                                </h5>
                                                <p className="font-13  mb-2 mt-2">
                                                    Lorem ipsum dolor sit amet, quis Neque porro quisquam est, nostrud exercitation ullamco laboris commodo consequat.
                                                </p>
                                                <Link to="#" className="me-2 mt-1"><span className="badge bg-primary">Helpful</span></Link>
                                                <Link to="#" className="me-2 mt-1" data-bs-toggle="" data-bs-target="#Comment"><span className="badge bg-light">Comment</span></Link>
                                                <Link to="#" className="me-2 mt-1" data-bs-toggle="" data-bs-target="#report"><span className="badge bg-light">Report</span></Link>
                                                <div className="btn-group btn-group-sm mb-1 ms-auto float-sm-end mt-1">
                                                    <Button color="" className="btn btn-light" type="button"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"></path><path d="M21 12v-2h-9l1.34-5.34L9 9v10h9z" opacity=".3"></path><path d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"></path></svg></Button>
                                                    <Button color="" className="btn btn-light" type="button"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18"><path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/><path d="M3 12v2h8.77l-1.11 5.34L15 15V5H6z" opacity=".3"/><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.58-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L11.77 14H3v-2l3-7h9v10zm4-12h4v12h-4z"/></svg></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                {/* <!--/Comments--> */}

                                <Card className="mb-lg-0">
                                    <CardHeader>
                                        <CardTitle tag="h3">Add a Comment</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="mt-2">
                                            <div className="mb-3">
                                                <Input type="text" className="form-control" id="name1" placeholder="Your Name"/>
                                            </div>
                                            <div className="mb-3">
                                                <Input type="email" className="form-control" id="email" placeholder="Email Address" autoComplete="off"/>
                                            </div>
                                            <div className="mb-3">
                                                <textarea className="form-control" name="example-textarea-input" rows={6} placeholder="Write Review"></textarea>
                                            </div>
                                            <Link to="#" className="btn btn-primary">Send Reply</Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
  </div>
);

Blog03.propTypes = {};

Blog03.defaultProps = {};

export default Blog03;
