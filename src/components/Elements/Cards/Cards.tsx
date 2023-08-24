import React, { useState } from 'react';
import { Card, CardBody, CardText, Form, Input, Label, CardFooter, CardHeader, CardLink, CardTitle, Col, Row, Button, ListGroup, ListGroupItem, Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody, Collapse } from 'reactstrap';
import photo10 from "../../../assets/images/photos/10.jpg";
import { PageHeaders } from '../../../Shared/Prism/Prism';
import { Link } from 'react-router-dom';
import { Alertdata, data, Builtdata, Backgrounddata, loaderdata } from './data';


const Cards = () => {

    //FullScreen modal with collapse button function
    const [remove, Setremove] = useState(true);
    const values = [
        true,
    ];

    const [modal, setModal] = useState(false);


    const [modaltoggle, setmodaltoggle] = useState(true);


    const toggle = () => setModal(!modal);

    let [isFirstCollapseds, setisFirstCollapseds] = useState(true);
    let firsts = () => {
        if (isFirstCollapseds === false) {
            setisFirstCollapseds(true);
        } else if (isFirstCollapseds === true) {
            setisFirstCollapseds(false);
        }
    };


    //Initial collapse button

    const [initialshow, setInitialshow] = useState(true);
    let [isinitialCollapse, setisinitialCollapse] = useState(false);
    let initialClose = () => {
        if (isinitialCollapse === false) {
            setisinitialCollapse(true);
        } else if (isinitialCollapse === true) {
            setisinitialCollapse(false);
        }
    };


    //Card Function

    let [isFirstCollapsed1, setisFirstCollapsed1] = useState(true);
    let [isFirstCollapsed2, setisFirstCollapsed2] = useState(true);
    let [isFirstCollapsed3, setisFirstCollapsed3] = useState(true);
    let [isFirstCollapsed4, setisFirstCollapsed4] = useState(true);
    let [isFirstCollapsed5, setisFirstCollapsed5] = useState(true);


    let first1 = () => {
        if (isFirstCollapsed1 === false) {
            setisFirstCollapsed1(true);
        } else if (isFirstCollapsed1 === true) {
            setisFirstCollapsed1(false);
        }
      }

      let first2 = () => {
        if (isFirstCollapsed2 === false) {
            setisFirstCollapsed2(true);
        } else if (isFirstCollapsed2 === true) {
            setisFirstCollapsed2(false);
        }
      }
    
      let first3 = () => {
        if (isFirstCollapsed3 === false) {
            setisFirstCollapsed3(true);
        } else if (isFirstCollapsed3 === true) {
            setisFirstCollapsed3(false);
        }
      }

      let first4 = () => {
        if (isFirstCollapsed4 === false) {
            setisFirstCollapsed4(true);
        } else if (isFirstCollapsed4 === true) {
            setisFirstCollapsed4(false);
        }
      }

      let first5 = () => {
        if (isFirstCollapsed5 === false) {
            setisFirstCollapsed5(true);
        } else if (isFirstCollapsed5 === true) {
            setisFirstCollapsed5(false);
        }
      }


    const [linkalert1, setlinkalert1] = useState(data);
    const [linkalert2, setlinkalert2] = useState(Backgrounddata);
    const [linkalert3, setlinkalert3] = useState(Alertdata);
    const [linkalert4, setlinkalert4] = useState(loaderdata);
    const [linkalert6, setlinkalert6] = useState(Builtdata);


    const handleRemove6 = (id: string): void => {
        const newList = linkalert6.filter((list) => list.id !== id);
        setlinkalert6(newList);
      }

      let handleRemove1 = (id: string): void => {
        const newList = linkalert1.filter((list) => list.id !== id);
        setlinkalert1(newList);
      }

      let handleRemove2 = (id: string): void => {
        const newList = linkalert2.filter((list) => list.id !== id);
        setlinkalert2(newList);
      }

      let handleRemove3 = (id: string): void => {
        const newList = linkalert3.filter((list) => list.id !== id);
        setlinkalert3(newList);
      }
      let handleRemove4 = (id: string): void => {
        const newList = linkalert4.filter((list) => list.id !== id);
        setlinkalert4(newList);
      }

    return (
        <div>

            <PageHeaders
                title="Cards"
                home="Home"
                name="Elements"
                fonticonsname="Cards"
            />
            <Row>
                <Col md='12' lg='4'>
                    <Card>
                        <CardBody>
                            This is some text within a card body.
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText><CardLink href="#">Card link</CardLink> <CardLink href="#">Another link</CardLink>
                        </CardBody>
                    </Card>
                    <Card>
                        <ListGroup className="list-group list-group-flush">
                            <ListGroupItem className="list-group-item">Cras justo odio</ListGroupItem>
                            <ListGroupItem className="list-group-item">Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem className="list-group-item">Vestibulum at eros</ListGroupItem>
                            <ListGroupItem className="list-group-item">Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem className="list-group-item">Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md='12' lg='4'>
                    <Card className="overflow-hidden">
                        <img alt="image" src={photo10} />
                        <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                        <ListGroup className="list-group list-group-flush">
                            <ListGroupItem className="list-group-item">Cras justo odio</ListGroupItem>
                            <ListGroupItem className="list-group-item">Dapibus ac facilisis in</ListGroupItem>
                        </ListGroup>
                        <CardBody>
                            <CardLink href="#">Card link</CardLink> <CardLink href="#">Another link</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='12' lg='4'>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Featured
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">Special title treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText><a className="btn btn-primary" href="#">Go somewhere</a>
                        </CardBody>
                    </Card>
                    <Card className="text-center">
                        <CardHeader>
                            <CardTitle>
                                Featured
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">Special title treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText><a className="btn btn-primary" href="#">Go somewhere</a>
                        </CardBody>
                        <CardFooter className="text-muted">
                            2 days ago
                        </CardFooter>
                    </Card>
                </Col>
                <Col md='12' lg='4'>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Featured
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">Special title treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText><a className="btn btn-primary" href="#">Go somewhere</a>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='12' lg='4'>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Quote
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <blockquote className="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='12' lg='4'>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Card title</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText><a className="btn btn-primary" href="#">Button</a>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='12' lg='4'>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Special title treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText><a className="btn btn-primary" href="#">Go somewhere</a>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='12' lg='4'>
                    <Card className="text-center">
                        <CardBody>
                            <CardTitle tag="h5">Special title treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText><a className="btn btn-primary" href="#">Go somewhere</a>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='12' lg='4'>
                    <Card className="text-end">
                        <CardBody>
                            <CardTitle tag="h5">Special title treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText><a className="btn btn-primary" href="#">Go somewhere</a>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='12' lg='6'>
                    <Card className="text-center">
                        <CardHeader>
                            <Nav pills className="nav nav-pills card-header-pills my-2">
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link " active aria-current="page" href="#">Active</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" href="#">Link</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink aria-disabled="true" className="nav-link" disabled href="#" tabIndex={-1}>Disabled</NavLink>
                                </NavItem>
                            </Nav>
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">Special title treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText><a className="btn btn-primary" href="#">Go somewhere</a>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='12' lg='6'>
                    <Card>
                        <CardBody>
                            <Nav pills className="nav nav-pills card-header-pills mt-0 mb-6">
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link active d-block" href="#">Active</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link d-block" href="#">Link</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink aria-disabled="true" className="nav-link disabled d-block" href="#" tabIndex={-1}>Disabled</NavLink>
                                </NavItem>
                            </Nav>
                            <CardTitle tag="h5">Special title treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText><a className="btn btn-primary" href="#">Go somewhere</a>
                        </CardBody>
                    </Card>
                </Col>
                {linkalert1.map((list, index) => (
                    <Col md="12" lg="6" key={index}>
                        <Card>
                            <CardHeader className={list.classheader}>
                                <CardTitle tag="h3" className={list.titleclass}>
                                    {list.name}
                                </CardTitle>
                                <div className="card-options">
                                    <Button
                                        color=""
                                        className="card-options-collapse"
                                        data-bs-toggle="card-collapse"
                                        onClick={() => {
                                            first1();
                                        }}
                                    >
                                        <i className={list.icon}></i>
                                    </Button>
                                    <Button
                                        color=""
                                        className="card-options-remove"
                                        data-bs-toggle="card-remove"
                                        onClick={() => handleRemove1(list.id)}
                                    >
                                        <i className={list.remove}></i>
                                    </Button>
                                </div>
                            </CardHeader>
                            {isFirstCollapsed1 ? (
                                <>
                                    <CardBody>{list.text}</CardBody>
                                    <CardFooter className={list.classfooter}>
                                        {list.footer}
                                    </CardFooter>
                                </>
                            ) : null}
                        </Card>
                    </Col>
                ))}

            </Row>
            {/* <!--End Row--> */}

            {/* <!-- Row--> */}
            <Row>
                {linkalert2.map((list, index) => (
                    <Col md="12" lg="6" key={index}>
                        <Card className={list.class}>
                            <CardHeader className="border-transparent">
                                <CardTitle tag="h3">{list.header}</CardTitle>
                                <div className="card-options">
                                    <Button
                                        color=""
                                        className="card-options-collapse"
                                        data-bs-toggle="card-collapse"
                                        onClick={() => {
                                            first2();
                                        }}
                                    >
                                        <i className={list.icon}></i>
                                    </Button>
                                    <Button
                                        color=""
                                        className="card-options-remove"
                                        data-bs-toggle="card-remove"
                                        onClick={() => handleRemove2(list.id)}
                                    >
                                        <i className={list.remove}></i>
                                    </Button>
                                </div>
                            </CardHeader>
                            {isFirstCollapsed2 ? <CardBody>{list.text}</CardBody> : null}
                        </Card>
                    </Col>
                ))}

                <Col md='12' lg='6'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h3">Panel with custom buttons</CardTitle>
                            <div className="card-options">
                                <Button color="" className="btn btn-primary btn-sm">Action 1</Button>
                                <Button color="" className="btn btn-secondary btn-sm ms-2">Action 2</Button>
                            </div>
                        </CardHeader>
                        <CardBody>
                            No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful actual teachings of the great explorer
                        </CardBody>
                    </Card>
                </Col>
                <Col md='12' lg='6'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h3">Card with search form</CardTitle>
                            <div className="card-options">
                                <Form>
                                    <div className="input-group">
                                        <Input type="text" className="form-control form-control-sm" placeholder="Search something..." name="s" />
                                    </div>
                                </Form>
                            </div>
                        </CardHeader>
                        <CardBody>
                            No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful actual teachings of the great explorer
                        </CardBody>
                    </Card>
                </Col>
                {linkalert3.map((list, index) => (
                    <Col md="12" lg="6" key={index}>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h3">Card with alert</CardTitle>
                                <div className="card-options">
                                    <Button
                                        color=""
                                        className="card-options-collapse"
                                        data-bs-toggle="card-collapse"
                                        onClick={() => {
                                            first3();
                                        }}
                                    >
                                        <i className="fe fe-chevron-up"></i>
                                    </Button>
                                    <Button
                                        color=""
                                        className="card-options-remove"
                                        data-bs-toggle="card-remove"
                                        onClick={() => handleRemove3(list.id)}
                                    >
                                        <i className="fe fe-x"></i>
                                    </Button>
                                </div>
                            </CardHeader>
                            {isFirstCollapsed3 ? (
                                <>
                                    <div className={list.class}>{list.text}</div>
                                    <CardBody>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum
                                    </CardBody>
                                </>
                            ) : null}
                        </Card>
                    </Col>
                ))}
                {linkalert4.map((list, index) => (
                    <Col md="12" lg="6" key={index}>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h3">Card with loader</CardTitle>
                                <div className="card-options">
                                    <Button
                                        color=""
                                        className="card-options-collapse"
                                        onClick={() => {
                                            first4();
                                        }}
                                        data-bs-toggle="card-collapse"
                                    >
                                        <i className="fe fe-chevron-up"></i>
                                    </Button>
                                    <Button
                                        color=""
                                        className="card-options-remove"
                                        onClick={() => handleRemove4(list.id)}
                                        data-bs-toggle="card-remove"
                                    >
                                        <i className="fe fe-x"></i>
                                    </Button>
                                </div>
                            </CardHeader>
                            {isFirstCollapsed4 ? (
                                <CardBody>
                                    <div className="dimmer active">
                                        <div className={list.loaders}>
                                            <div className={list.text}></div>
                                            <div className={list.text2}></div>
                                        </div>
                                    </div>
                                </CardBody>
                            ) : null}
                        </Card>
                    </Col>
                ))}

            </Row>
            {/* <!--End Row--> */}

            {/* <!-- Row--> */}
            <Row>
                <Col md='6' lg='4'>
                    <>
                        {remove ? (
                            <Card className="custom-card">
                                <CardHeader className="d-flex custom-card-header border-bottom-0 ">
                                    <h5 className="card-title">Basic Card</h5>
                                    <div className="card-options">
                                        <Link
                                            to="#"
                                            className="card-options-collapse me-2"
                                            data-bs-toggle="card-collapse"
                                            onClick={() => {
                                                firsts();
                                            }}
                                        >
                                            <i className="fe fe-chevron-up"></i>
                                        </Link>
                                        {values.map((v, idx) => (
                                            <Link
                                                key={idx}
                                                to="#"
                                                className="card-options-fullscreen me-2"
                                                data-bs-toggle="card-fullscreen"
                                                onClick={toggle}
                                            >
                                                <i className="fe fe-maximize"></i>

                                            </Link>
                                        ))}
                                        <Link
                                            to="#"
                                            className="card-options-remove"
                                            data-bs-toggle="card-remove"
                                            onClick={() => Setremove(false)}
                                        >
                                            <i className="fe fe-x"></i>
                                        </Link>
                                    </div>
                                </CardHeader>
                                {isFirstCollapseds ? (
                                    <>
                                        <CardBody>
                                            Et harum quidem rerum facilis est et expedita distinctio. Nam
                                            libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                            impedit quo minus id quod maxime placeat facere
                                        </CardBody>
                                    </>
                                ) : null}
                            </Card>
                        ) : null}
                        <Modal isOpen={modal} toggle={toggle} fullscreen size="lg">
                            <ModalHeader toggle={toggle}>Modal</ModalHeader>
                            <ModalBody>Modal body content</ModalBody>
                        </Modal>
                    </>
                </Col>
                <Col md='6' lg='4'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h3">Card with switch</CardTitle>
                            <div className="card-options">
                                <Label className="form-switch m-0">
                                    <Input type="checkbox" value="1" className="form-switch-input" defaultChecked  onClick={()=>{setmodaltoggle(!modaltoggle)}}/>
                                    <span className="form-switch-indicator"></span>
                                </Label>
                            </div>
                        </CardHeader>
                         {modaltoggle && (
                            <CardBody>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </CardBody>
                        )
                        }
                    
                    </Card>
                </Col>
                <Col md='6' lg='4'>
                    {initialshow ? (
                        <Card>
                            <CardHeader>
                                <CardTitle>Initial collapsed card</CardTitle>
                                <div className="card-options">
                                    <Link to='#' className="card-options-collapse me-5" onClick={() => { initialClose(); }}><i className='fe fe-chevron-down'></i></Link>
                                    <Link to='#' onClick={() => setInitialshow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                                </div>
                            </CardHeader>
                            {isinitialCollapse ? (
                                <CardBody>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </CardBody>
                            ) : null}
                        </Card>
                    ) : null}
                </Col>

                {linkalert6.map((list, index) => (
                    <Col md='6' lg='4' key={index}>
                        <Card>
                            <div className={list.status}></div>
                            <CardHeader>
                                <CardTitle tag="h3">{list.name}</CardTitle>
                                <div className="card-options">
                                    <Button color="" onClick={() => first5()} className="card-options-collapse" data-bs-toggle="card-collapse"><i className="fe fe-chevron-up"></i></Button>
                                    <Button onClick={() => handleRemove6(list.id)} color="" className="card-options-remove" data-bs-toggle="card-remove"><i className="fe fe-x"></i></Button>
                                </div>
                            </CardHeader>
                            {isFirstCollapsed5 ? (
                                <CardBody>
                                    {list.text}
                                </CardBody>
                            ) : null}
                        </Card>
                    </Col>
                ))}

            </Row>
        </div>
    );
}

Cards.propTypes = {};

Cards.defaultProps = {};

export default Cards;
