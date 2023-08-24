import React from "react";
import photo2 from "../../../assets/images/photos/2.jpg";
import photo20 from "../../../assets/images/photos/20.jpg";
import photo1 from "../../../assets/images/photos/1.jpg";
import photo5 from "../../../assets/images/photos/5.jpg";
import photo6 from "../../../assets/images/photos/6.jpg";
import photo8 from "../../../assets/images/photos/8.jpg";
import photo10 from "../../../assets/images/photos/10.jpg";
import photo11 from "../../../assets/images/photos/11.jpg";
import photo12 from "../../../assets/images/photos/12.jpg";
import photo13 from "../../../assets/images/photos/13.jpg";
import photo14 from "../../../assets/images/photos/14.jpg";
import photo15 from "../../../assets/images/photos/15.jpg";
import user16 from "../../../assets/images/users/16.jpg";
import user10 from "../../../assets/images/users/10.jpg";

import { PageHeaders } from "../../../Shared/Prism/Prism";
import { Card,Button,CardHeader,CardTitle, CardBody, CardFooter, Col, Row, CardImg } from "reactstrap";
import { BuiltCard, BuiltCard2,Employeecard,Employeecard2 } from "./data";
import { Link } from "react-router-dom";

const CardImages = () => {

  return (

  <div>
    <PageHeaders
      title="Cards-Image"
      home="Home"
      name="Elements"
      fonticonsname="Cards-Image"
    />
    <Row>
      <Col md={6} lg={4}>
        <Card className="overflow-hidden">
        <CardImg
      alt=""
      src={photo2}
      className="img-height"
    />
          {/* <img src= alt="image" className="img-height" /> */}
          <CardBody>
            <h5 className="card-title mb-3">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button color="" className="btn btn-primary">
              Read More
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col md={6} lg={4}>
        <Card className="overflow-hidden">
          <CardBody>
            <h5 className="card-title mb-3">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button color="" className="btn btn-primary">
              Read More
            </Button>
          </CardBody>
          <CardImg
      alt=""
      src={photo1}
      className="img-height"
    />
        </Card>
      </Col>
      <Col md={6} lg={4}>
        <Card className="overflow-hidden">
          <CardImg
      alt=""
      src={photo5}
      className="img-height"
    />
          <CardBody>
            <h5 className="card-title mb-3">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </CardBody>
          <CardFooter>card footer</CardFooter>
        </Card>
      </Col>
      <Col md={6} lg={4}>
        <Card>
          <CardHeader>
            <CardTitle>card header</CardTitle>
          </CardHeader>
          <CardImg
      alt=""
      src={photo6}
      className="img-height"
    />
          <CardBody>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </CardBody>
        </Card>
      </Col>
      <Col md={6} lg={4}>
        <Card className="overflow-hidden">
          <CardImg
      alt=""
      src={photo10}
      className="img-height"
    />

          <CardBody>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </CardBody>
          <CardFooter>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
      </Col>
      <Col md={6} lg={4}>
        <Card className="overflow-hidden">
          <CardImg
      alt=""
      src={photo8}
      className="img-height"
    />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </CardBody>
        </Card>
      </Col>
      <Col md={12}xl={6}>
        <Card className="card-blog-overlay1">
          <CardBody className="text-white">
            <h3 className="card-title text-white">card-with image</h3>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </CardBody>
          <CardFooter className="text-white z-index-9">
            This is Basic card footer
          </CardFooter>
        </Card>
      </Col>
      <Col md={12}xl={6}>
        <Card className="card-blog-overlay2">
          <CardBody className="text-white">
            <h3 className="card-title text-white">card-with image</h3>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </CardBody>
          <CardFooter className="text-white z-index-9">
            This is Basic card footer
          </CardFooter>
        </Card>
      </Col>
      <Col md={12}xl={6}>
      <BuiltCard />
      </Col>
      <Col md={12}xl={6}>
        <BuiltCard2 />
      </Col>
      <Col md={12}xl={6}>
        <Card className="card-aside">
          <CardBody className="-flex flex-column">
            <h4>
    Link to <a href="#">Play Music</a>
            </h4>
            <div className="text-muted">
              Some quick example text to build on the card title and make up the
              bulk of the card's
            </div>
            <div className="d-flex align-items-center pt-5 mt-auto text-center ">
              <div className="text-muted">
                <Link to="#" className="icon d-none d-md-inline-block ms-3">
                  <i className="fa fa-step-backward"></i>
                </Link>
                <Link to="#" className="icon d-none d-md-inline-block ms-3">
                  <i className="fa fa-play "></i>
                </Link>
                <Link to="#" className="icon d-none d-md-inline-block ms-3">
                  <i className="fa fa-step-forward"></i>
                </Link>
              </div>
            </div>
          </CardBody>
          <Link
            to="#"
            className="card-aside-column br-tr-7 br-br-7 w-50"
            style={{backgroundImage: `url(${photo2})`}}
          ></Link>
        </Card>
      </Col>
      <Col md={12}xl={6}>
        <Card className="card-aside bg-primary">
          <CardBody className="-flex flex-column">
            <h4>
              <Link to="#" className="text-white">
                Play Music
              </Link>
            </h4>
            <div className="text-white">
              Some quick example text to build on the card title and make up the
              bulk of the card's{" "}
            </div>
            <div className="d-flex align-items-center pt-5 mt-auto text-center ">
              <div className="text-muted">
                <Link to="#" className="icon d-none d-md-inline-block ms-3">
                  <i className="fa fa-step-backward text-white"></i>
                </Link>
                <Link to="#" className="icon d-none d-md-inline-block ms-3">
                  <i className="fa fa-play text-white "></i>
                </Link>
                <Link to="#" className="icon d-none d-md-inline-block ms-3">
                  <i className="fa fa-step-forward text-white"></i>
                </Link>
              </div>
            </div>
          </CardBody>
          <Link
            to="#"
            className="card-aside-column br-tr-7 br-br-7 w-50"
            style={{backgroundImage: `url(${photo20})`}}
          ></Link>
        </Card>
      </Col>
      <Col md={12}lg={6}>
      <Employeecard/>
      </Col>
      <Col md={12}lg={6}>
      <Employeecard2/>
      </Col>
    </Row>
    {/* <!-- End Row--> */}

    <Card>
      <CardHeader>
        <h3 className="card-title ">Card Group</h3>
      </CardHeader>
      <div className="card-group p-5">
        <Card className="shadow-none border border-lg-end-0 overflow-hidden">
          <CardImg src={photo10} alt="image" />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </CardBody>
        </Card>
        <Card className="shadow-none border border-lg-end-0 overflow-hidden">
          <CardImg src={photo11} alt="image" />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </CardBody>
        </Card>
        <Card className="shadow-none border overflow-hidden">
          <CardImg src={photo12} alt="image" className="img-height1" />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </CardBody>
        </Card>
      </div>
    </Card>
    <Card>
      <CardHeader>
        <h3 className="card-title ">Card Group Footers</h3>
      </CardHeader>
      <div className="card-group p-5">
        <Card className=" overflow-hidden shadow-none border border-lg-end-0">
          <CardImg src={photo13} alt="image" />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </CardBody>
          <CardFooter>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
        <Card className=" overflow-hidden shadow-none border border-lg-end-0">
          <CardImg src={photo14} alt="image" />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
          </CardBody>
          <CardFooter>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
        <Card className="overflow-hidden shadow-none border">
          <CardImg src={photo15} alt="image" />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </CardBody>
          <CardFooter>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardFooter>
        </Card>
      </div>
    </Card>
  </div>
)
  };

CardImages.propTypes = {};

CardImages.defaultProps = {};

export default CardImages;
