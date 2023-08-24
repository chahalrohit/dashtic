import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Card, CardBody, Col, Input, InputGroup, Label, Row } from 'reactstrap';
import { auth } from '../../Firebase/firebase';

interface IData {
    [key: string]: string;
  }


const Register = () => {
    document.querySelector("body")?.classList.add("main-body", "light-mode", "ltr", "page-style1", "error-page");
   document.querySelector("body")?.classList.remove("app","sidebar-mini",);

   const [err, setError] = useState("");
    const [data, setData] = useState({
        fullname: "",
        email: "",
        password: "",
    })
    const { email, password, fullname } = data;
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>, setData: React.Dispatch<React.SetStateAction<IData>>, data: IData) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const Signup = (e: React.FormEvent<HTMLFormElement>, email: string, password: string, setError: React.Dispatch<React.SetStateAction<string>>, RouteChange: () => void) => {
        console.log(typeof e);
        
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(
            user => { console.log(user); RouteChange() }).catch(err => { console.log(err); setError(err.message) })
    }

   return (
  <div>
      <div className="page">
        <div className="page-single">
            <div className="container">

                <Row className="justify-content-center">
                    <Col md={7} lg={6} xl={5}>
                        <Card className="p-4 mb-0 mt-7 mt-md-2">
                            <CardBody className="">
                                <div className="text-center title-style mb-6">
                                    <h1 className="mb-2">Register</h1>
                                    <hr/>
                                    <p className="text-muted">Create New Account</p>
                                </div>
                                <div className="btn-list d-lg-flex">
                                    <a href="https://www.google.com/gmail/" target="_blank" className="btn btn-danger btn-w-lg d-block">Google</a>
                                    <a href="https://twitter.com/" target="_blank" className="btn btn-info d-lg-inline d-block">Twitter</a>
                                    <a href="https://www.facebook.com/" target="_blank" className="btn btn-primary d-lg-inline d-block me-2">Facebook</a>
                                </div>
                                <hr className="divider my-6"/>
                                {err && <Alert color="danger">{err}</Alert>}
                                <InputGroup className="input-group mb-3">
                                    <span className="input-group-addon"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3"/><circle cx="12" cy="8" opacity=".3" r="2"/><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/></svg></span>
                                    <Input className="form-control" placeholder="Enter your Name" name="fullname" type="text" value={fullname} onChange={()=>changeHandler} required />
                                </InputGroup>
                                <InputGroup className="input-group mb-4">
                                    <span className="input-group-addon"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity=".3"/><path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"/></svg></span>
                                    <Input className="form-control" placeholder="Enter your email" type="email" name="email" value={email} onChange={()=>changeHandler} required />
                                </InputGroup>
                                <InputGroup className="input-group mb-4">
                                    <span className="input-group-addon"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><g fill="none"><path d="M0 0h24v24H0V0z"/><path d="M0 0h24v24H0V0z" opacity=".87"/></g><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg></span>
                                    <Input  className="form-control" placeholder="Enter your password" name="password" type="password" value={password} onChange={()=>changeHandler} required/>
                                </InputGroup>
                                <div className="mb-3">
                                    <Label className="custom-control custom-checkbox">
                                            <Input type="checkbox" className="custom-control-input" />
                                            <span className="custom-control-label">Agree the <Link to="#" className="btn-link">Terms and policy</Link></span>
                                        </Label>
                                </div>
                                <Row>
                                    <Col className="col-12">
                                        <Button color="" role="button" onClick={()=>Signup} className="btn btn-lg btn-primary btn-block px-4"><i className="fe fe-arrow-right"></i> Create a new account</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <div className="text-center pt-4">
                            <div className="font-weight-normal fs-16">You Already have an account <Link className="btn-link font-weight-normal" to={`${import.meta.env.BASE_URL}Auth/Login/Login`}>Login Here</Link></div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  </div>
);
   }
Register.propTypes = {};

Register.defaultProps = {};

export default Register;

