import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody,CardTitle, CardFooter, CardHeader, Col, Input, Label, Row } from 'reactstrap';
import user16 from "../../../assets/images/users/16.jpg"
import { PageHeaders } from '../../../Shared/Prism/Prism';
import Select from "react-select";

const EditProfile = () =>{
    const [selectedOption, setSelectedOption] = React.useState<any>(null);
    const options = [
        { value: "Germany", label: "Germany" },
        { value: "Real Estate", label: "Real Estate" },
        { value: "Canada", label: "Canada" },
        { value: "Usa", label: "Usa " },
        { value: "Afghanistan", label: "Afghanistan" },
        { value: "Usa", label: "Usa " },
        { value: "Albania", label: "Albania" },
        { value: "China", label: "China " },
        { value: "Denmark", label: "Denmark" },
        { value: "Finland", label: "Finland " },
        { value: "India", label: "India" },
        { value: "China", label: "China " },
        { value: "Kiribati", label: "Kiribati" },
        { value: "Kuwait", label: "Kuwait " },
        { value: "Mexico", label: "Mexico" },
        { value: "Pakistan", label: "Pakistan" },
      ];
    return(
  <div>
      <PageHeaders
      title="EditProfile"
      home="Home"
      name="Pages"
      fonticonsname="EditProfile"
    />
                        <Row>
                            <Col xl="4" lg="5">
                                <Card className="box-widget widget-user">
                                    <div className="widget-user-image mx-auto mt-5 text-center"><img alt="User Avatar" className="rounded-circle" src={user16}/></div>
                                    <CardBody className="text-center">
                                        <div className="pro-user">
                                            <h3 className="pro-user-username text-dark mb-1">Jenna Side</h3>
                                            <h6 className="pro-user-desc text-muted">Web Designer</h6>
                                            <Link to={`${import.meta.env.BASE_URL}pages/profile/profile01`} className="btn btn-primary mt-3">View Profile</Link>
                                        </div>
                                    </CardBody>
                                    <CardFooter className="p-0">
                                        <Row>
                                            <Col sm="6" className="border-end text-center">
                                                <div className="description-block p-4">
                                                    <h5 className="description-header mb-1 font-weight-bold">689k</h5>
                                                    <span className="text-muted">Followers</span>
                                                </div>
                                            </Col>
                                            <Col sm="6" className="">
                                                <div className="description-block text-center p-4">
                                                    <h5 className="description-header mb-1 font-weight-bold">3,765</h5>
                                                    <span className="text-muted">Following</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Edit Password</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="text-center mb-5">
                                            <img alt="User Avatar" className="rounded-circle  me-3" src={user16}/>
                                            <div className="mt-4 ms-0 ms-sm-auto ">
                                                <Link to="#" className="btn btn-primary mb-1 me-1">Edit profile</Link>
                                                <Link to="#" className="btn btn-danger mb-1 me-1">Delete profile</Link>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <Label className="form-label">Change Password</Label>
                                            <Input type="password" className="form-control" defaultValue="password"/>
                                        </div>
                                        <div className="mb-3">
                                            <Label className="form-label">New Password</Label>
                                            <Input type="password" className="form-control" defaultValue="password"/>
                                        </div>
                                        <div className="mb-3">
                                            <Label className="form-label">Confirm Password</Label>
                                            <Input type="password" className="form-control" defaultValue="password"/>
                                        </div>
                                    </CardBody>
                                    <CardFooter className="text-end">
                                        <Link to="#" className="btn btn-primary me-1">Updated</Link>
                                        <Link to="#" className="btn btn-danger me-1">Cancel</Link>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col xl="8"lg="7">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Edit Profile</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <CardTitle className="font-weight-bold">Basic info:</CardTitle>
                                        <Row>
                                            <Col sm="6"md="6">
                                                <div className="mb-3">
                                                    <Label className="form-label">First Name</Label>
                                                    <Input type="text" className="form-control" placeholder="First Name"/>
                                                </div>
                                            </Col>
                                            <Col sm="6"md="6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Last Name</Label>
                                                    <Input type="text" className="form-control" placeholder="Last Name"/>
                                                </div>
                                            </Col>
                                            <Col sm="6"md="6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Email address</Label>
                                                    <Input type="email" className="form-control" placeholder="Email"/>
                                                </div>
                                            </Col>
                                            <Col sm="6"md="6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Phone Number</Label>
                                                    <Input type="number" className="form-control" placeholder="Number"/>
                                                </div>
                                            </Col>
                                            <Col md="12">
                                                <div className="mb-3">
                                                    <Label className="form-label">Address</Label>
                                                    <Input type="text" className="form-control" placeholder="Home Address"/>
                                                </div>
                                            </Col>
                                            <Col sm="6"md="4">
                                                <div className="mb-3">
                                                    <Label className="form-label">City</Label>
                                                    <Input type="text" className="form-control" placeholder="City"/>
                                                </div>
                                            </Col>
                                            <Col sm="6"md="3">
                                                <div className="mb-3">
                                                    <Label className="form-label">Postal Code</Label>
                                                    <Input type="number" className="form-control" placeholder="ZIP Code"/>
                                                </div>
                                            </Col>
                                            <Col md="5">
                                                <div className="mb-3">
                                                    <Label className="form-label">Country</Label>
                                                    <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                          placeholder="Chrome"
                          classNamePrefix="Search"
                        />
                                                    
                                                </div>
                                            </Col>
                                        </Row>
                                        <CardTitle className="font-weight-bold mt-5">External Links:</CardTitle>
                                        <Row>
                                            <Col sm="6"md="6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Facebook</Label>
                                                    <Input type="text" className="form-control" placeholder="https://www.facebook.com/"/>
                                                </div>
                                            </Col>
                                            <Col sm="6"md="6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Google</Label>
                                                    <Input type="text" className="form-control" placeholder="https://www.google.com/"/>
                                                </div>
                                            </Col>
                                            <Col sm="6"md="6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Twitter</Label>
                                                    <Input type="text" className="form-control" placeholder="https://twitter.com/"/>
                                                </div>
                                            </Col>
                                            <Col sm="6"md="6">
                                                <div className="mb-3">
                                                    <Label className="form-label">Pinterest</Label>
                                                    <Input type="text" className="form-control" placeholder="https://in.pinterest.com/"/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <CardTitle className="font-weight-bold mt-5">About:</CardTitle>
                                        <Row>
                                            <Col md="12">
                                                <div className="mb-3">
                                                    <Label className="form-label">About Me</Label>
                                                    <textarea rows={5} className="form-control" placeholder="Enter About your description"></textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardFooter className="text-end">
                                        <div className="btn-list">
                                            <Link to="#" className="btn btn-primary">Updated</Link>
                                            <Link to="#" className="btn btn-danger">Cancel</Link>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
  </div>
);
    }
EditProfile.propTypes = {};

EditProfile.defaultProps = {};

export default EditProfile;
