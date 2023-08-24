import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CardBody, Button, Card, Col, Row, Input, InputGroup, Alert, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { auth } from '../../Firebase/firebase';
import classnames from "classnames";

import firebaselogo from '../../assets/images/png/4.png';
import reactlogo from '../../assets/images/png/5.png';

const Login = () => {


    const [Tab1, setTab1] = useState("1");
    const style1 = (tab: any) => {
        if (Tab1 !== tab) {
            setTab1(tab);
        }
    };

    document.querySelector("body")?.classList.add("main-body", "light-mode", "ltr", "page-style1", "error-page");
    document.querySelector("body")?.classList.remove("app", "sidebar-mini",);

    const [loading, setLoader] = useState(false);
    const [err, setError] = useState("");
    const [data, setData] = useState({
        "email": "adminreact@gmail.com",
        "password": "1234567890",
    })
    const { email, password } = data;
    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setError("");
    }
    const Login = (e: any) => {
        setLoader(true)
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(
            user => { console.log(user); RouteChange(); setLoader(false) }).catch(err => { console.log(err); setError(err.message); setLoader(false) })
    }

    let navigate = useNavigate();
    const RouteChange = () => {
        let path = `${import.meta.env.BASE_URL}dashboard/dashboard01/`;
        navigate(path);
    }


    return (
        <div>
            <div className="page">
                <div className="page-single">
                    <div className="container auth-tabs">
                        <div className="panel panel-primary">
                            <div className="tab-menu-heading border-0 py-0 h-7">
                                <div className="tabs-menu ">
                                    {/* <!-- Tabs --> */}
                                    <Nav className="nav panel-tabs">
                                        <NavItem >
                                            <NavLink
                                                className={classnames({ active: Tab1 === "1" })}
                                                onClick={() => {
                                                    style1("1");
                                                }}
                                            >
                                                <img src={firebaselogo} alt='logo1' />
                                            </NavLink>
                                        </NavItem>
                                        <NavItem >
                                            <NavLink
                                                className={classnames({ active: Tab1 === "2" })}
                                                onClick={() => {
                                                    style1("2");
                                                }}
                                                data-bs-toggle="tab"
                                            >
                                                <img src={reactlogo} alt='logo1' />

                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </div>
                            <div className="panel-body tabs-menu-body border-0">
                                <TabContent activeTab={Tab1} className="tab-content">
                                    <TabPane tabId="1" className="tab-pane">
                                        <Row className="justify-content-center">
                                            <Col md={7} lg={6} xl={5}>
                                                <Card className=" p-4 mb-0 mt-7 mt-md-2">
                                                    <CardBody className="">
                                                        <div className="text-center title-style mb-6">
                                                            <h1 className="mb-2">Login</h1>
                                                            <hr />
                                                            <p className="text-muted">Sign In to your account</p>
                                                        </div>
                                                        <div className="btn-list d-lg-flex">
                                                            <a href="https://www.google.com/gmail/" target="_blank" className="btn btn-danger btn-w-lg d-block">Google</a>
                                                            <a href="https://twitter.com/" target="_blank" className="btn btn-info d-lg-inline d-block">Twitter</a>
                                                            <a href="https://www.facebook.com/" target="_blank" className="btn btn-primary d-lg-inline d-block me-2">Facebook</a>
                                                        </div>
                                                        <hr className="divider my-6" />
                                                        {err && <Alert color="danger">{err}</Alert>}

                                                        <InputGroup className="input-group mb-3">
                                                            <span className="input-group-addon"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3" /><circle cx="12" cy="8" opacity=".3" r="2" /><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" /></svg></span>
                                                            <Input type="text" className="form-control" name="email" placeholder="Enter your email" value={email} onChange={changeHandler} />
                                                        </InputGroup>
                                                        <InputGroup className="input-group mb-4">
                                                            <span className="input-group-addon"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z" /><path d="M0 0h24v24H0V0z" opacity=".87" /></g><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg></span>
                                                            <Input className="form-control" name="password" placeholder="Enter your password" type="password" value={password} onChange={changeHandler} />
                                                        </InputGroup>
                                                        <Row>
                                                            <Col className="col-12">
                                                                <Button color="" role="button" className="btn btn-lg btn-primary btn-block" onClick={Login}><i className="fe fe-arrow-right"></i> Login
                                                                    {loading ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ""}
                                                                </Button>
                                                            </Col>
                                                            <Col className="col-12">
                                                                <Link to="#" className="btn btn-link box-shadow-0 px-0">Forgot password?</Link>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                                <div className="text-center pt-4">
                                                    <div className="font-weight-normal fs-16">You Don't have an account <Link className="btn-link font-weight-normal" to={`${import.meta.env.BASE_URL}Auth/Signup/Signup`}>Register Here</Link></div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2" className="tab-pane">
                                        <Row className="justify-content-center">
                                            <Col md={7} lg={6} xl={5}>
                                                <Card className=" p-4 mb-0 mt-7 mt-md-2">
                                                    <CardBody className="">
                                                        <div className="text-center title-style mb-6">
                                                            <h1 className="mb-2">Login</h1>
                                                            <hr />
                                                            <p className="text-muted">Sign In to your account</p>
                                                        </div>
                                                        <div className="btn-list d-lg-flex">
                                                            <a href="https://www.google.com/gmail/" target="_blank" className="btn btn-danger btn-w-lg d-block">Google</a>
                                                            <a href="https://twitter.com/" target="_blank" className="btn btn-info d-lg-inline d-block">Twitter</a>
                                                            <a href="https://www.facebook.com/" target="_blank" className="btn btn-primary d-lg-inline d-block me-2">Facebook</a>
                                                        </div>
                                                        <hr className="divider my-6" />
                                                        <InputGroup className="input-group mb-3">
                                                            <span className="input-group-addon"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3" /><circle cx="12" cy="8" opacity=".3" r="2" /><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" /></svg></span>
                                                            <Input type="text" className="form-control" placeholder="adminreact@gmail.com" />
                                                        </InputGroup>
                                                        <InputGroup className="input-group mb-4">
                                                            <span className="input-group-addon"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z" /><path d="M0 0h24v24H0V0z" opacity=".87" /></g><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3" /><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" /></svg></span>
                                                            <Input type="password" className="form-control" placeholder="Password" />
                                                        </InputGroup>
                                                        <Row>
                                                            <Col className="col-12">
                                                                <Link to={`${import.meta.env.BASE_URL}dashboard/dashboard01`} role="button" className="btn btn-lg btn-primary btn-block"><i className="fe fe-arrow-right"></i> Login</Link>
                                                            </Col>
                                                            <Col className="col-12">
                                                                <Link to={`${import.meta.env.BASE_URL}account/forgetpassword/forgetpassword01`} className="btn btn-link box-shadow-0 px-0">Forgot password?</Link>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                                <div className="text-center pt-4">
                                                    <div className="font-weight-normal fs-16">You Don't have an account <Link className="btn-link font-weight-normal" to={`${import.meta.env.BASE_URL}account/register/register01`}>Register Here</Link></div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}
Login.propTypes = {};

Login.defaultProps = {};

export default Login;
