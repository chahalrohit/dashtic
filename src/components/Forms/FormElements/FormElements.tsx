import React,{useState} from 'react';
import { Card, CardBody, CardHeader, CardTitle,Button,TabContent,NavItem,TabPane, Col,DropdownToggle, DropdownItem, DropdownMenu, Form, Input, Label, Row, UncontrolledDropdown, FormGroup, ListGroup, ListGroupItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import classnames from "classnames";
import { PageHeaders } from '../../../Shared/Prism/Prism';
const FormElements = () =>{
    const [Tab1, setTab1] = useState<string>("tab20");
    const style1 = (tab: string): void => {
        if (Tab1 !== tab) {
            setTab1(tab);
        }
    };
    const Monthsoptions = [
        { value: 'January', label: 'January' },
        { value: 'February', label: 'February' },
        { value: 'March', label: 'March' },
        { value: 'April', label: 'April' },
        { value: 'May', label: 'May' },
        { value: 'June', label: 'June' },
        { value: 'July', label: 'July' },
        { value: 'August', label: 'August' },
        { value: 'September', label: 'September' },
        { value: 'October', label: 'October' },
        { value: 'November', label: 'November' },
        { value: 'December', label: 'December' },
      ];
     
      const [monthsOption, setMonthsOption] = useState<any>(null);
      const Countryoptions = [
        { value: 'Germany', label: 'Germany' },
        { value: 'Canada', label: 'Canada' },
        { value: 'Usa', label: 'Usa' },
        { value: 'Aus', label: 'Aus' },
      ];
     
      const [countryOption, setCountryOption] = useState<any>(null);
      
      const Yearoptions = [
        { value: '2040', label: '2040' },
        { value: '2039', label: '2039' },
        { value: '2037', label: '2037' },
        { value: '2036', label: '2036' },
        { value: '2035', label: '2035' },
        { value: '2034', label: '2034' },
        { value: '2033', label: '2033' },
        { value: '2032', label: '2032' },
        { value: '2031', label: '2031' },
        { value: '2030', label: '2030' },
        { value: '2029', label: '2029' },
        { value: '2028', label: '2028' },
        { value: '2027', label: '2027' },
        { value: '2026', label: '2026' },
        { value: '2025', label: '2025' },
        { value: '2024', label: '2024' },
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' },
        { value: '2021', label: '2021' },
        { value: '2020', label: '2020' },
      ];
     
      const [yearOption, setYearOption] = useState<any>(null);
      const Daysoptions = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
        { value: '11', label: '11' },
        { value: '12', label: '12' },
        { value: '13', label: '13' },
        { value: '14', label: '14' },
        { value: '15', label: '15' },
        { value: '16', label: '16' },
        { value: '17', label: '17' },
        { value: '18', label: '18' },
        { value: '19', label: '19' },
        { value: '20', label: '20' },
        { value: '21', label: '21' },
        { value: '22', label: '22' },
        { value: '23', label: '23' },
        { value: '24', label: '24' },
        { value: '25', label: '25' },
        { value: '26', label: '26' },
        { value: '27', label: '27' },
        { value: '28', label: '28' },
        { value: '29', label: '29' },
        { value: '30', label: '30' },
      ];
     
      const [daysOption, setDaysOption] = useState<any>(null)
    return(
  <div>
    <PageHeaders
      title="Form-Elements"
      home="Home"
      name="Forms"
      fonticonsname="Form-Elements"
    />
                        <Row>
                            <Col lg="12"md="12">
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Inputs & Textareas </CardTitle>
                                    </CardHeader>
                                    <div  className="card-body pb-2">
                                        <div  className="row row-sm">
                                            <div  className="col-lg">
                                                <Input  className="form-control mb-4" placeholder="Input box" type="text"/>
                                            </div>
                                            <div  className="col-lg mg-t-10 mg-lg-t-0">
                                                <Input  className="form-control mb-4" placeholder="Input box (readonly)" readOnly type="text"/>
                                            </div>
                                            <div  className="col-lg mg-t-10 mg-lg-t-0">
                                                <Input  className="form-control mb-4" disabled placeholder="Input box (disabled)" type="text"/>
                                            </div>
                                        </div>
                                        <div  className="row row-sm">
                                            <div  className="col-lg">
                                                <textarea  className="form-control mb-4" placeholder="Textarea" rows={3}></textarea>
                                            </div>
                                            <div  className="col-lg mg-t-10">
                                                <textarea  className="form-control mb-4" placeholder="Textarea (readonly)" readOnly rows={3}></textarea>
                                            </div>
                                            <div  className="col-lg mg-t-10">
                                                <textarea  className="form-control mb-4" disabled placeholder="Texarea (disabled)" rows={3}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Input Sizes</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div  className="row row-sm">
                                            <div  className="col-lg">
                                                <Input  className="form-control form-control-sm  mb-4" placeholder="Input sm box" type="text"/>
                                                <Input  className="form-control  mb-4" placeholder="Input box" type="text"/>
                                                <Input  className="form-control form-control-lg" placeholder="Input lg box" type="text"/>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Valid Inputs</CardTitle>
                                    </CardHeader>
                                    <div  className="card-body pb-2">
                                        <Form  className="needs-validation was-validated">
                                            <div  className="row row-sm">
                                                <div  className="col-lg-6">
                                                    <div  className="mb-3">
                                                        <Input  className="form-control  mb-4 is-valid state-valid" placeholder="Input box (success state)" required type="text" defaultValue="This is input"/>
                                                        <textarea  className="form-control mb-4 is-valid state-valid" placeholder="Textarea (success state)" required rows={3} defaultValue="This is textarea"></textarea>
                                                    </div>
                                                </div>
                                                <div  className="col-lg-6">
                                                    <div  className="mb-3">
                                                        <Input  className="form-control mb-4 is-invalid state-invalid" placeholder="Input box (invalid state)" required type="text"/>
                                                        <textarea  className="form-control mb-4 is-invalid state-invalid" placeholder="Textarea (invalid state)" required rows={3}></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg="12"md="12">
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Form elements</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div  className="mb-3">
                                            <Label  className="form-label">Country</Label>
                                            <Select
                    defaultValue={countryOption}
                    onChange={setCountryOption}
                    options={Countryoptions}
                    placeholder="Country"
                    classNamePrefix="Search"
                  />
                                        </div>
                                        <div  className="mb-3">
                                            <Label  className="form-label">Input group</Label>
                                            <div  className="input-group">
                                                <Input type="text"  className="form-control" placeholder="Search for..."/>
                                                <span  className="btn-group">
                                                        <Button color="" className="btn btn-primary" type="button">Go!</Button>
                                                    </span>
                                            </div>
                                        </div>
                                        <div  className="mb-3">
                                            <Label  className="form-label">Input group buttons</Label>
                                            <div  className="input-group">
                                                <Input type="text"  className="form-control"/>
                                                <UncontrolledDropdown  className="btn-group">
                                                    <DropdownToggle color="" tag="a" data-bs-toggle="dropdown"  className="btn btn-primary dropdown-toggle">Action</DropdownToggle>
                                                    <DropdownMenu  className="dropdown-menu dropdown-menu-end">
                                                        <DropdownItem className="dropdown-item" href="#">News</DropdownItem>
                                                        <DropdownItem className="dropdown-item" href="#">Messages</DropdownItem>
                                                        <DropdownItem divider></DropdownItem>
                                                        <DropdownItem className="dropdown-item" href="#">Edit Profile</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                        <div  className="mb-3">
                                            <Label  className="form-label">Separated inputs</Label>
                                            <Row>
                                                <Col  className="col">
                                                    <Input type="text"  className="form-control" placeholder="Search for..."/>
                                                </Col>
                                                <span  className="col-auto">
                                                        <Button color="" className="btn btn-secondary" type="button"><i  className="fe fe-search"></i></Button>
                                                    </span>
                                            </Row>
                                        </div>
                                        <div  className="mb-3">

                                            <div  className="input-icon">
                                                <span  className="input-icon-addon">
                                                        <i  className="fe fe-user"></i>
                                                    </span>
                                                <Input type="text"  className="form-control" placeholder="Username"/>
                                            </div>
                                        </div>
                                        <div  className="mb-3">
                                            <Label className="form-label">ZIP Code</Label>
                                            <Row className="row gutters-sm">
                                                <Col className="col">
                                                    <Input type="text" className="form-control" placeholder="Search for..."/>
                                                </Col>
                                                <span className="col-auto align-self-center">
                                                        <span className="form-help" data-bs-toggle="popover" data-bs-placement="top"
                                                        data-bs-content="<p>ZIP Code must be US or CDN format. You can use an extended ZIP+4 code to determine address more accurately.</p>
                                                        <p class='mb-0'><a href=''>USP ZIP codes lookup tools</a></p>
                                                        ">?</span>
                                                </span>
                                            </Row>
                                        </div>
                                        <div  className="mb-3">
                                            <Label className="form-label">Bootstrap's Custom File Input</Label>
                                            <div className="form-file">
                                                <Input type="file"  className="form-control form-file-input" name="form-file-input"/>
                                            </div>
                                        </div>
                                        <div  className="mb-3 m-0">
                                            <Label  className="form-label">Date of birth</Label>
                                            <Row>
                                                <Col sm="5" className='mb-3 mb-sm-0'>
                                                <Select
                    defaultValue={monthsOption}
                    onChange={setMonthsOption}
                    options={Monthsoptions}
                    placeholder="Months"
                    classNamePrefix="Search"
                  />
                                                </Col>
                                                <Col sm="3" className='mb-3 mb-sm-0'>
                                                <Select
                    defaultValue={daysOption}
                    onChange={setDaysOption}
                    options={Daysoptions}
                    placeholder="Days"
                    classNamePrefix="Search"
                  />
                                                 
                                                </Col>
                                                <Col sm="4" className='mb-3 mb-sm-0'>
                                                <Select
                    defaultValue={yearOption}
                    onChange={setYearOption}
                    options={Yearoptions}
                    placeholder="Year"
                    classNamePrefix="Search"
                  />
                                                </Col>
                                            </Row>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- End Row --> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col lg="12"xl="12"md="12"sm="12">
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h4">Gerenal Elements</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col lg="6"md="12">
                                                <Form  className="form-horizontal">
                                                    <Row className="mb-3">
                                                        <Label  className="col-md-3 form-label">Text</Label>
                                                        <Col md="9">
                                                            <Input type="text"  className="form-control" defaultValue="Typing....."/>
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Label  className="col-md-3 form-label" htmlFor="example-email">Email</Label>
                                                        <Col md="9">
                                                            <Input type="email" id="example-email" name="example-email"  className="form-control" placeholder="Email"/>
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Label  className="col-md-3 form-label">Password</Label>
                                                        <Col md="9">
                                                            <Input type="password"  className="form-control" defaultValue="password"/>
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Label  className="col-md-3 form-label">Placeholder</Label>
                                                        <Col md="9">
                                                            <Input type="text"  className="form-control" placeholder="text"/>
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Label  className="col-md-3 form-label">Readonly</Label>
                                                        <Col md="9">
                                                            <Input type="text"  className="form-control" readOnly defaultValue="Readonly value"/>
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Label  className="col-md-3 form-label">Disabled</Label>
                                                        <Col md="9">
                                                            <Input type="text"  className="form-control" disabled defaultValue="Disabled value"/>
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Label  className="col-md-3 form-label">Number</Label>
                                                        <Col md="9">
                                                            <Input  className="form-control" type="number" name="number"/>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Col>
                                            <Col lg="6"md="12">
                                                <Form  className="form-horizontal">
                                                    <Row className="mb-3">
                                                        <Label  className="col-md-3 form-label">Name</Label>
                                                        <Col md="9">
                                                            <Input  className="form-control" type="text" name="name"/>
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Label  className="col-md-3 form-label">Text area</Label>
                                                        <Col md="9">
                                                            <textarea  className="form-control" rows={3} defaultValue="Hiiiii....."></textarea>
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Label  className="col-md-3 form-label">URL</Label>
                                                        <Col md="9">
                                                            <Input  className="form-control" type="url" name="url"/>
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Label  className="col-md-3 form-label">Search</Label>
                                                        <Col md="9">
                                                            <Input  className="form-control" type="search" name="search"/>
                                                        </Col>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Label  className="col-md-3 form-label">Tel</Label>
                                                        <Col md="9">
                                                            <Input  className="form-control" type="tel" name="tel"/>
                                                        </Col>
                                                    </Row>
                                                    <Row className=" mb-0">
                                                        <Label  className="col-md-3 form-label">Input Select</Label>
                                                        <Col md="9">
                                                        <Select
                    defaultValue={countryOption}
                    onChange={setCountryOption}
                    options={Countryoptions}
                    placeholder="Country"
                    classNamePrefix="Search"
                  />
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        {/* <!-- Row --> */}
                        <Row>
                            <Col lg="12"md="12">
                                <Form method="post"  className="card">
                                    <CardHeader>
                                        <CardTitle tag="h3">form elements</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col md="6"lg="6">
                                                <div  className="mb-3">
                                                    <Label  className="form-label">Toggle switch single</Label>
                                                    <Label  className="form-switch">
                                                            <Input type="checkbox" name="form-switch-checkbox"  className="form-switch-input"/>
                                                            <span  className="form-switch-indicator"></span>
                                                            <span  className="form-switch-description">I agree with terms and conditions</span>
                                                        </Label>
                                                </div>
                                                <div  className="mb-3 ">
                                                    <Label  className="form-label">Your skills</Label>
                                                    <div  className="selectgroup selectgroup-pills">
                                                        <Label  className="selectgroup-item">
                                                                <Input type="checkbox" name="value" defaultValue="HTML"  className="selectgroup-input" defaultChecked />
                                                                <span  className="selectgroup-button">HTML</span>
                                                            </Label>
                                                        <Label  className="selectgroup-item">
                                                                <Input type="checkbox" name="value" defaultValue="CSS"  className="selectgroup-input"/>
                                                                <span  className="selectgroup-button">CSS</span>
                                                            </Label>
                                                        <Label  className="selectgroup-item">
                                                                <Input type="checkbox" name="value" defaultValue="PHP"  className="selectgroup-input"/>
                                                                <span  className="selectgroup-button">PHP</span>
                                                            </Label>
                                                        <Label  className="selectgroup-item">
                                                                <Input type="checkbox" name="value" defaultValue="JavaScript"  className="selectgroup-input"/>
                                                                <span  className="selectgroup-button">JavaScript</span>
                                                            </Label>
                                                        <Label  className="selectgroup-item">
                                                                <Input type="checkbox" name="value" defaultValue="Angular"  className="selectgroup-input"/>
                                                                <span  className="selectgroup-button">Angular</span>
                                                            </Label>
                                                        <Label  className="selectgroup-item">
                                                                <Input type="checkbox" name="value" defaultValue="Java"  className="selectgroup-input"/>
                                                                <span  className="selectgroup-button">Java</span>
                                                            </Label>
                                                        <Label  className="selectgroup-item">
                                                                <Input type="checkbox" name="value" defaultValue="C++"  className="selectgroup-input"/>
                                                                <span  className="selectgroup-button">C++</span>
                                                            </Label>
                                                    </div>
                                                </div>
                                                <div  className="m-0">
                                                    <Label  className="form-label">Select Color</Label>
                                                    <Row>
                                                        <Col className="col-auto">
                                                            <Label  className="colorinput">
                                                                    <Input name="color" type="checkbox" defaultValue="azure"  className="colorinput-input" defaultChecked />
                                                                    <span  className="colorinput-color bg-azure"></span>
                                                                </Label>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Label  className="colorinput">
                                                                    <Input name="color" type="checkbox" defaultValue="indigo"  className="colorinput-input"  />
                                                                    <span  className="colorinput-color bg-indigo"></span>
                                                                </Label>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Label  className="colorinput">
                                                                    <Input name="color" type="checkbox" defaultValue="purple"  className="colorinput-input" />
                                                                    <span  className="colorinput-color bg-purple"></span>
                                                                </Label>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Label  className="colorinput">
                                                                    <Input name="color" type="checkbox" defaultValue="pink"  className="colorinput-input" />
                                                                    <span  className="colorinput-color bg-pink"></span>
                                                                </Label>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Label  className="colorinput">
                                                                    <Input name="color" type="checkbox" defaultValue="red"  className="colorinput-input" />
                                                                    <span  className="colorinput-color bg-red"></span>
                                                                </Label>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Label  className="colorinput">
                                                                    <Input name="color" type="checkbox" defaultValue="orange"  className="colorinput-input" />
                                                                    <span  className="colorinput-color bg-orange"></span>
                                                                </Label>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Label  className="colorinput">
                                                                    <Input name="color" type="checkbox" defaultValue="yellow"  className="colorinput-input" />
                                                                    <span  className="colorinput-color bg-yellow"></span>
                                                                </Label>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Label  className="colorinput">
                                                                    <Input name="color" type="checkbox" defaultValue="lime"  className="colorinput-input" />
                                                                    <span  className="colorinput-color bg-lime"></span>
                                                                </Label>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Label  className="colorinput">
                                                                    <Input name="color" type="checkbox" defaultValue="green"  className="colorinput-input" />
                                                                    <span  className="colorinput-color bg-green"></span>
                                                                </Label>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Label  className="colorinput">
                                                                    <Input name="color" type="checkbox" defaultValue="teal"  className="colorinput-input" />
                                                                    <span  className="colorinput-color bg-teal"></span>
                                                                </Label>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                            <Col md="6"lg="6">
                                                <div  className="mb-3 ">
                                                    <Label  className="form-label">Radios</Label>
                                                    <div  className="custom-controls-stacked">
                                                        <Label  className="custom-control custom-radio">
                                                                <Input type="radio"  className="custom-control-input" name="example-radios" defaultValue="option1" defaultChecked/>
                                                                <span  className="custom-control-label">Option 1</span>
                                                            </Label>
                                                        <Label  className="custom-control custom-radio">
                                                                <Input type="radio"  className="custom-control-input" name="example-radios" defaultValue="option2"/>
                                                                <span  className="custom-control-label">Option 2</span>
                                                            </Label>
                                                        <Label  className="custom-control custom-radio">
                                                                <Input type="radio"  className="custom-control-input" name="example-radios" defaultValue="option3" disabled/>
                                                                <span  className="custom-control-label">Option Disabled</span>
                                                            </Label>
                                                        <Label  className="custom-control custom-radio">
                                                                <Input type="radio"  className="custom-control-input" name="example-radios2" defaultValue="option4" disabled defaultChecked/>
                                                                <span  className="custom-control-label">Option Disabled defaultChecked</span>
                                                            </Label>
                                                    </div>
                                                </div>

                                                <div  className="mb-3 m-0">
                                                    <Label  className="form-label">Checkboxes</Label>
                                                    <div  className="custom-controls-stacked">
                                                        <Label  className="custom-control custom-checkbox">
                                                                <Input type="checkbox"  className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked/>
                                                                <span  className="custom-control-label">Option 1</span>
                                                            </Label>
                                                        <Label  className="custom-control custom-checkbox">
                                                                <Input type="checkbox"  className="custom-control-input" name="example-checkbox2" defaultValue="option2"/>
                                                                <span  className="custom-control-label">Option 2</span>
                                                            </Label>
                                                        <Label  className="custom-control custom-checkbox">
                                                                <Input type="checkbox"  className="custom-control-input" name="example-checkbox3" defaultValue="option3" disabled/>
                                                                <span  className="custom-control-label">Option Disabled</span>
                                                            </Label>
                                                        <Label  className="custom-control custom-checkbox">
                                                                <Input type="checkbox"  className="custom-control-input" name="example-checkbox4" defaultValue="option4" defaultChecked disabled/>
                                                                <span  className="custom-control-label">Option Disabled defaultChecked</span>
                                                            </Label>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Form>
                            </Col>
                            <Col lg="12">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Switches </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <ListGroup>
                                            <ListGroupItem >
                                                Bootstrap Switch Default
                                                <FormGroup switch className="material-switch pull-right">
                                                    <Input id="someSwitchOptionDefault" name="someSwitchOption001" type="checkbox" />
                                                    <Label htmlFor="someSwitchOptionDefault"  className="label-default"></Label>
                                                </FormGroup>
                                            </ListGroupItem>
                                            <ListGroupItem >
                                                Bootstrap Switch Primary
                                                <FormGroup switch className="material-switch pull-right">
                                                    <Input id="someSwitchOptionPrimary" name="someSwitchOption001" type="checkbox" />
                                                    <Label htmlFor="someSwitchOptionPrimary"  className="label-primary"></Label>
                                                </FormGroup>
                                            </ListGroupItem>
                                            <ListGroupItem >
                                                Bootstrap Switch Success
                                                <FormGroup switch className="material-switch pull-right">
                                                    <Input id="someSwitchOptionSuccess" name="someSwitchOption001" type="checkbox" />
                                                    <Label htmlFor="someSwitchOptionSuccess"  className="label-success"></Label>
                                                </FormGroup>
                                            </ListGroupItem>
                                            <ListGroupItem >
                                                Bootstrap Switch Info
                                                <FormGroup switch className="material-switch pull-right">
                                                    <Input id="someSwitchOptionInfo" name="someSwitchOption001" type="checkbox" />
                                                    <Label htmlFor="someSwitchOptionInfo"  className="label-info"></Label>
                                                </FormGroup>
                                            </ListGroupItem>
                                            <ListGroupItem >
                                                Bootstrap Switch Warning
                                                <FormGroup switch className="material-switch pull-right">
                                                    <Input id="someSwitchOptionWarning" name="someSwitchOption001" type="checkbox" />
                                                    <Label htmlFor="someSwitchOptionWarning"  className="label-warning"></Label>
                                                </FormGroup>
                                            </ListGroupItem>
                                            <ListGroupItem >
                                                Bootstrap Switch Danger
                                                <FormGroup switch className="material-switch pull-right">
                                                    <Input id="someSwitchOptionDanger" name="someSwitchOption001" type="checkbox" />
                                                    <Label htmlFor="someSwitchOptionDanger"  className="label-danger"></Label>
                                                </FormGroup>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- End Row--> */}
                        <Row>
                            <Col lg="12"xl="6"md="12"sm="12">
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h4">Vertical Form</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Form>
                                            <div>
                                                <div  className="mb-3">
                                                    <Label htmlFor="exampleInputEmail1" className="form-label">Email address</Label>
                                                    <Input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                                                </div>
                                                <div  className="mb-3">
                                                    <Label htmlFor="exampleInputPassword1" className="form-label">Password</Label>
                                                    <Input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                                </div>
                                                <Label className="custom-control custom-checkbox">
                                                        <Input type="checkbox"  className="custom-control-input" name="example-checkbox2" defaultValue="option2"/>
                                                        <span className="custom-control-label">Check me Out</span>
                                                    </Label>
                                            </div>
                                            <Button color="" type="submit" className="btn btn-primary mt-4 mb-0">Submit</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="12"xl="6"md="12"sm="12">
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h4">Horizontal Form</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Form  className="form-horizontal">
                                            <Row className="mb-3">
                                                <Label htmlFor="inputName"  className="col-md-3 form-label">User Name</Label>
                                                <Col md="9">
                                                    <Input type="text"  className="form-control" id="inputName" placeholder="Name"/>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Label htmlFor="inputEmail3"  className="col-md-3 form-label">Email</Label>
                                                <Col md="9">
                                                    <Input type="email"  className="form-control" id="inputEmail3" placeholder="Email"/>
                                                </Col>
                                            </Row>
                                            <Row className="mb-3">
                                                <Label htmlFor="inputPassword3"  className="col-md-3 form-label">Password</Label>
                                                <Col md="9">
                                                    <Input type="password"  className="form-control" id="inputPassword3" placeholder="Password"/>
                                                </Col>
                                            </Row>
                                            <Row  className="mb-0 row justify-content-end">
                                                <Col md="9">
                                                    <Label  className="custom-control custom-checkbox">
                                                            <Input type="checkbox"  className="custom-control-input" name="example-checkbox2" defaultValue="option2"/>
                                                            <span  className="custom-control-label">Check me Out</span>
                                                        </Label>
                                                </Col>
                                            </Row>
                                            <Row  className="mb-0 mt-4 row justify-content-end">
                                                <Col md="9">
                                                    <Button color="" type="submit"  className="btn btn-primary me-1">Sign in</Button>
                                                    <Button color="" type="submit"  className="btn btn-secondary me-1">Cancel</Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- End Row -->/ */}

                        <Row>
                            <Col md="12" xl="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Shipping Details</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Row className="form-row">
                                            <Col md="6" className="mb-0">
                                                <div  className="mb-3">
                                                    <Input type="text"  className="form-control" id="name1" placeholder="First Name"/>
                                                </div>
                                            </Col>
                                            <Col md="6" className="mb-0">
                                                <div  className="mb-3">
                                                    <Input type="text"  className="form-control" id="name2" placeholder="Last Name"/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div  className="mb-3 ">
                                            <Input type="email"  className="form-control" id="inputEmail5" placeholder="Email Address"/>
                                        </div>
                                        <div  className="mb-3 ">
                                            <Input type="text"  className="form-control" id="address" placeholder="AddressLine1"/>
                                        </div>
                                        <Row className="form-row">
                                            <Col md="6" className="mb-0">
                                                <div  className="mb-3">
                                                    <Input type="text"  className="form-control" id="country" placeholder="Country"/>
                                                </div>
                                            </Col>
                                            <Col md="6" className="mb-0">
                                                <div  className="mb-3">
                                                    <Input type="text"  className="form-control" id="region" placeholder="Country/Region"/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="form-row">
                                            <Col md="6" className="mb-0">
                                                <div  className="mb-3">
                                                    <Input type="text"  className="form-control" id="city" placeholder="City"/>
                                                </div>
                                            </Col>
                                            <Col md="6" className="mb-0">
                                                <div  className="mb-3">
                                                    <Input type="number"  className="form-control" id="postal" placeholder="Zip/Postal"/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div  className="form-footer mt-2">
                                            <Link to="#"  className="btn btn-primary">Confirm  Details</Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="12" xl="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">CheckOut</CardTitle>
                                        <div  className="card-options">
                                            <div  className="btn-group">
                                                <UncontrolledDropdown >
                                                <DropdownToggle tag="a" color="" type="button"  className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Visa<span  className="caret"></span>
                                                    </DropdownToggle>
                                                <DropdownMenu className="dropdown-menu">
                                                    <DropdownItem href="#">Visa</DropdownItem>
                                                    <DropdownItem href="#">Rupay</DropdownItem>
                                                    <DropdownItem href="#">Mastercard</DropdownItem>
                                                    <DropdownItem href="#">PayPal</DropdownItem>
                                                </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <Form>
                                            <div  className="mb-3">
                                                <div  className="mb-3">
                                                    <Label  className="form-label">Card Holder Name</Label>
                                                    <Input type="text"  className="form-control" id="name11" placeholder="First Name"/>
                                                </div>
                                            </div>
                                        </Form>
                                        <Row className="form-row">
                                            <Col md="9" className="mb-0">
                                                <div className="mb-3">
                                                    <Label  className="form-label">Credit card Number</Label>
                                                    <Input type="number"  className="form-control" id="number" placeholder="number"/>
                                                </div>
                                            </Col>
                                            <Col md="3" className="mb-0">
                                                <div  className="mb-3">
                                                    <Label  className="form-label">CVV Number</Label>
                                                    <Input type="number"  className="form-control" id="region1" placeholder="675"/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div  className="mb-3 m-0">
                                            <Label  className="form-label">Expiration Date</Label>
                                            <Row>
                                                <Col className="col-6">
                                                <Select
                    defaultValue={monthsOption}
                    onChange={setMonthsOption}
                    options={Monthsoptions}
                    placeholder="Months"
                    classNamePrefix="Search"
                  />

                                                    
                                                </Col>
                                                <Col className="col-6">
                                                <Select
                    defaultValue={yearOption}
                    onChange={setYearOption}
                    options={Yearoptions}
                    placeholder="Year"
                    classNamePrefix="Search"
                  />
                                                    
                                                </Col>
                                            </Row>
                                        </div>
                                        <div  className="mt-4 mb-0 text-dark">
                                            Your Credit card information is encrypted
                                        </div>
                                        <div  className="form-footer mt-2">
                                            <Link to="#"  className="btn btn-primary">Make Payment</Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl="6"lg="12"md="12">
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Billing Information</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col sm="6"md="6">
                                                <div  className="mb-3">
                                                    <Label  className="form-label">First Name <span  className="text-red">*</span></Label>
                                                    <Input type="text"  className="form-control" placeholder="First name"/>
                                                </div>
                                            </Col>
                                            <Col sm="6"md="6">
                                                <div  className="mb-3">
                                                    <Label  className="form-label">Last Name <span  className="text-red">*</span></Label>
                                                    <Input type="text"  className="form-control" placeholder="Last name"/>
                                                </div>
                                            </Col>
                                            <Col md="12">
                                                <div  className="mb-3">
                                                    <Label  className="form-label">Company Name <span  className="text-red">*</span></Label>
                                                    <Input type="text"  className="form-control" placeholder="Company name"/>
                                                </div>
                                            </Col>
                                            <Col md="12">
                                                <div  className="mb-3">
                                                    <Label  className="form-label">Email address <span  className="text-red">*</span></Label>
                                                    <Input type="email"  className="form-control" placeholder="Email"/>
                                                </div>
                                            </Col>
                                            <Col md="12">
                                                <div  className="mb-3">
                                                    <Label  className="form-label">Country <span  className="text-red">*</span></Label>
                                                    <Select
                    defaultValue={countryOption}
                    onChange={setCountryOption}
                    options={Countryoptions}
                    placeholder="Country"
                    classNamePrefix="Search"
                  />
                                                   
                                                </div>
                                            </Col>
                                            <Col md="12">
                                                <div  className="mb-3">
                                                    <Label  className="form-label">Address <span  className="text-red">*</span></Label>
                                                    <Input type="text"  className="form-control" placeholder="Home Address"/>
                                                </div>
                                            </Col>
                                            <Col sm="6"md="6">
                                                <div  className="mb-3">
                                                    <Label  className="form-label">City <span  className="text-red">*</span></Label>
                                                    <Input type="text"  className="form-control" placeholder="City"/>
                                                </div>
                                            </Col>
                                            <Col sm="6"md="6">
                                                <div  className="mb-3">
                                                    <Label  className="form-label">Postal Code <span  className="text-red">*</span></Label>
                                                    <Input type="number"  className="form-control" placeholder="ZIP Code"/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="6"lg="12"md="12">
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Payment Information</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div  className="card-pay">
                                            <Nav className="tabs-menu nav">
                                                <NavItem><NavLink href="#tab20"className={classnames({ active: Tab1 === "tab20", })} onClick={() => { style1("tab20"); }} data-bs-toggle="tab"><i  className="fa fa-credit-card"></i> Credit Card</NavLink></NavItem>
                                                <NavItem><NavLink href="#tab21"className={classnames({ active: Tab1 === "tab21", })} onClick={() => { style1("tab21"); }} data-bs-toggle="tab"><i  className="fa fa-paypal"></i>  Paypal</NavLink></NavItem>
                                                <NavItem><NavLink href="#tab22"className={classnames({ active: Tab1 === "tab22", })} onClick={() => { style1("tab22"); }} data-bs-toggle="tab"><i  className="fa fa-university"></i>  Bank Transfer</NavLink></NavItem>
                                            </Nav>
                                            <div  className="panel-body tabs-menu-body">
                                            <TabContent className="tab-content"activeTab={Tab1} >
                                                <TabPane  className="tab-pane" tabId="tab20">
                                                    <div  className="bg-danger-transparent-2 text-danger px-4 py-2 br-3 mb-4" role="alert">Please Enter Valid Details</div>
                                                    <div  className="mb-3">
                                                        <Label  className="form-label">Card Holder Name</Label>
                                                        <Input type="text"  className="form-control" placeholder="First Name"/>
                                                    </div>
                                                    <div  className="mb-3">
                                                        <Label  className="form-label">Card number</Label>
                                                        <div  className="input-group">
                                                            <Input type="text"  className="form-control" placeholder="Search for..."/>
                                                            <Button color="" className="btn btn-secondary box-shadow-0" type="button"><i  className="fa fa-cc-visa"></i> &nbsp; <i  className="fa fa-cc-amex"></i> &nbsp;
                                                                <i  className="fa fa-cc-mastercard"></i>
                                                            </Button>

                                                        </div>
                                                    </div>
                                                    <Row>
                                                        <Col sm="8">
                                                            <div  className="mb-3">
                                                                <Label  className="form-label">Expiration</Label>
                                                                <div  className="input-group">
                                                                    <Input type="number"  className="form-control" placeholder="MM" name="Month"/>
                                                                    <Input type="number"  className="form-control" placeholder="YY" name="Year"/>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col sm="4">
                                                            <div  className="mb-3">
                                                                <Label  className="form-label">CVV <i  className="fa fa-question-circle"></i></Label>
                                                                <Input type="number"  className="form-control" required />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Link to="#"  className="btn btn-primary">Confirm</Link>
                                                </TabPane>
                                                <TabPane  className="tab-pane" tabId="tab21">
                                                    <p>Paypal is easiest way to pay online</p>
                                                    <p><Link to="#"  className="btn btn-primary"><i  className="fa fa-paypal"></i> Log in my Paypal</Link></p>
                                                    <p  className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                                </TabPane>
                                                <TabPane  className="tab-pane" tabId="tab22">
                                                    <p>Bank account details</p>
                                                    <dl  className="card-text">
                                                        <dt>BANK: </dt>
                                                        <dd> THE UNION BANK 0456</dd>
                                                    </dl>
                                                    <dl  className="card-text">
                                                        <dt>Account number: </dt>
                                                        <dd> 67542897653214</dd>
                                                    </dl>
                                                    <dl  className="card-text">
                                                        <dt>IBAN: </dt>
                                                        <dd>543218769</dd>
                                                    </dl>
                                                    <p  className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                                </TabPane>
                                            </TabContent>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
  </div>
);
    }

FormElements.propTypes = {};

FormElements.defaultProps = {};

export default FormElements;
