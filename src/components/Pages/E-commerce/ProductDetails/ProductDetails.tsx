import React, { useEffect, useState } from "react";
import product7 from "../../../../assets/images/products/7.jpg";
import product1 from "../../../../assets/images/products/1.jpg";
import product9 from "../../../../assets/images/products/9.jpg";
import { Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Input, Label, Row, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { AddToCart } from "../../../../Redux/Action/Action"
import { PODUCTDATA } from "../Products/data";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { PageHeaderstyle } from './../../../../Shared/Prism/Prism';
import { productDatastate } from "../Products/data"

const ProductDetails = () => {
  let { id } = useParams();

  const [defaultData, setdefaultData] = useState<productDatastate>();

  useEffect(() => {
    if (id != undefined) {
      let data = PODUCTDATA.filter((ele) => {
        return ele.id == id;
      });
      setdefaultData(data[0]);
    } else {
      setdefaultData({
        id: Math.random(),
        pic: product1,
        discount: "$720",  
        item:"14",
        items:"1",
        price:"$538",
      subprice:"$538",
      title:"Flower Pot"
      });
    }
  }, [id]);

  return (
    <div>
      <PageHeaderstyle title="Products Details" home="Home" Pages="Pages" elements="E-commerce" name="Products Details" />

      <Row className="">
        <Col md="12" className=" wrapper wrapper-content">
          <Card className="ibox">
            <CardHeader>
              <CardTitle tag="h3">Items in your cart</CardTitle>
            </CardHeader>
            <CardBody>
              <Row className="row-sm">
                <Col xxl="4" lg="12" md="12">
                  <div className="p-3 border br-5">
                  <img className="mx-auto d-block br-5 h-auto w-100"
                    src={defaultData && defaultData.pic}
                    alt="image"
                  />
                  </div>
                </Col>
                <Col xxl="8" lg="12" md="12" className="mt-4 mt-xxl-0 mt-2 ">
                  <div className="ibox-content">
                    <Row className="">
                      <Col md="12" lg="12">
                        <div className="pb-5">
                          <h3>
                            <Link to="#" className="text-navy">
                              {defaultData && defaultData.title}
                            </Link>
                          </h3>
                          <div className="mb-3">
                            <Link to="#">
                              <i className="fa fa-star text-warning"></i>
                            </Link>
                            <Link to="#">
                              <i className="fa fa-star text-warning"></i>
                            </Link>
                            <Link to="#">
                              <i className="fa fa-star text-warning"></i>
                            </Link>
                            <Link to="#">
                              <i className="fa fa-star text-warning"></i>
                            </Link>
                            <Link to="#">
                              <i className="fa fa-star-o text-warning"></i>
                            </Link>
                            <span className="fs-16 ms-3">
                              3.5 <small>(45 Reviews)</small>
                            </span>
                          </div>
                          <div>
                            <h5>Description lists</h5>
                            <p>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas
                              molestias excepturi sint occaecati cupiditate non
                              provident, similique sunt in culpa qui officia
                              deserunt mollitia animi, id est laborum et dolorum
                              fuga.
                            </p>
                            <p>
                              On the other hand, we denounce with righteous
                              indignation and dislike men who are so beguiled and
                              demoralized by the charms of pleasure of the moment,
                              so blinded by desire, that they cannot foresee the
                              pain and trouble that are bound to ensue; and equal
                              blame belongs to those who fail in their duty
                              through weakness of will, which is the same as
                              saying through shrinking from toil and pain.
                            </p>
                            <p className="add-cls1 d-xxl-block">
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas non
                              fuga.
                            </p>
                          </div>
                          <h3 className="font-weight-bold">
                            {defaultData && defaultData.price}<del className="h5 font-weight-normal ms-2">{defaultData && defaultData.discount}</del>
                          </h3>
                          <div className="m-0">
                            <Label className="form-label fs-17">
                              Select Color:
                            </Label>
                            <div className="d-flex">
                              <Label className="colorinput me-2">
                                <Input
                                  name="color"
                                  type="radio"
                                  value="red"
                                  className="colorinput-input"
                                  defaultChecked
                                />
                                <span className="colorinput-color bg-red"></span>
                              </Label>
                              <Label className="colorinput me-2">
                                <Input
                                  name="color"
                                  type="radio"
                                  value="indigo"
                                  className="colorinput-input"
                                />
                                <span className="colorinput-color bg-indigo"></span>
                              </Label>
                              <Label className="colorinput me-2">
                                <Input
                                  name="color"
                                  type="radio"
                                  value="purple"
                                  className="colorinput-input"
                                />
                                <span className="colorinput-color bg-purple"></span>
                              </Label>
                              <Label className="colorinput me-2">
                                <Input
                                  name="color"
                                  type="radio"
                                  value="pink"
                                  className="colorinput-input"
                                />
                                <span className="colorinput-color bg-pink"></span>
                              </Label>
                            </div>
                          </div>
                          <div className="mt-4 add-cls">
                            <Label className="form-label fs-17">
                              Availability:
                            </Label>
                            <div className="d-flex text-success font-weight-semibold fs-16">
                              In-Stock
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <h5 className="mt-5 mb-4">Product Details</h5>
              <div className="table-responsive">
                <Table className="table table-striped table-bordered">
                  <tbody>
                    <tr>
                      <th scope="row">Model:</th>
                      <td>Model 2.3</td>
                    </tr>
                    <tr>
                      <th scope="row">color:</th>
                      <td>red</td>
                    </tr>
                    <tr>
                      <th scope="row">features</th>
                      <td>New Model ,High Sales</td>
                    </tr>
                    <tr>
                      <th scope="row">Advanced</th>
                      <td>Feel Comfortability </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
            <CardFooter className="ibox-content text-end">
              <div className="btn-list">
                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/checkout`} className="btn btn-light">
                  Buy Now
                </Link>
                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart`} className="btn btn-primary">
                  Add to cart
                </Link>
              </div>
            </CardFooter>
          </Card>
        </Col>
        <Col xl="4" md="6">
          <Card className="item-card">
            <CardBody className="pb-0">
              <div className="text-center">
                <img
                  src={product7}
                  alt="img"
                  className="img-fluid w-100 product-img"
                />
              </div>
              <CardBody className="px-0 ">
                <div className="cardtitle">
                  <div>
                    <Link to="#">
                      <i className="fa fa-star text-yellow fs-16"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star text-yellow fs-16"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star text-yellow fs-16"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star-half text-yellow fs-16"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star-o text-yellow fs-16"></i>
                    </Link>
                    <Link to="#"> (48)</Link>
                  </div>
                  <Link to="#" className="shop-title">Flower Pot</Link>
                </div>
                <div className="cardprice">
                  <span className="type--strikethrough">$750</span>
                  <span>$974</span>
                </div>
              </CardBody>
            </CardBody>
            <div className="text-center border-top p-4">
              <Link

                to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`}
                className="btn btn-light btn-svgs mt-1 mb-1 me-2"
              >
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z"
                    opacity=".3"
                  />
                  <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z" />
                </svg>{" "}
                View More
              </Link>
              <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart`} className="btn btn-primary btn-svgs mt-1 mb-1">
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.55 11l2.76-5H6.16l2.37 5z" opacity=".3" />
                  <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>{" "}
                Add to cart
              </Link>
            </div>
          </Card>
        </Col>
        <Col xl="4" md="6">
          <Card className="item-card">
            <CardBody className="pb-0">
              <div className="text-center">
                <img
                  src={product1}
                  alt="img"
                  className="img-fluid w-100 product-img"
                />
              </div>
              <CardBody className="px-0 ">
                <div className="cardtitle">
                  <div>
                    <Link to="#">
                      <i className="fa fa-star text-yellow fs-16"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star text-yellow fs-16"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star text-yellow fs-16"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star-half text-yellow fs-16"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star-o text-yellow fs-16"></i>
                    </Link>
                    <Link to="#"> (32)</Link>
                  </div>
                  <Link to="#" className="shop-title">Flower pot</Link>
                </div>
                <div className="cardprice">
                  <span className="type--strikethrough">$1,457</span>
                  <span>$986</span>
                </div>
              </CardBody>
            </CardBody>
            <div className="text-center border-top p-4">
              <Link
                to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`}
                className="btn btn-light btn-svgs mt-1 mb-1 me-2"
              >
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z"
                    opacity=".3"
                  />
                  <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z" />
                </svg>{" "}
                View More
              </Link>
              <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart`} className="btn btn-primary btn-svgs mt-1 mb-1">
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.55 11l2.76-5H6.16l2.37 5z" opacity=".3" />
                  <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>{" "}
                Add to cart
              </Link>
            </div>
          </Card>
        </Col>
        <Col xl="4" md="6">
          <Card className="item-card">
            <CardBody className="pb-0">
              <div className="text-center">
                <img
                  src={product9}
                  alt="img"
                  className="img-fluid w-100 product-img"
                />
              </div>
              <CardBody className="px-0 ">
                <div className="cardtitle">
                  <div>
                    <Link to="#">
                      <i className="fa fa-star text-yellow fs-16"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star text-yellow fs-16"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star text-yellow fs-16"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star-half text-yellow fs-16"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa fa-star-o text-yellow fs-16"></i>
                    </Link>
                    <Link to="#"> (64)</Link>
                  </div>
                  <Link to="#" className="shop-title">Bracelet</Link>
                </div>
                <div className="cardprice">
                  <span className="type--strikethrough">$18,967</span>
                  <span>$12,724</span>
                </div>
              </CardBody>
            </CardBody>
            <div className="text-center border-top p-4">
              <Link
                to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails`}
                className="btn btn-light btn-svgs mt-1 mb-1 me-2"
              >
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z"
                    opacity=".3"
                  />
                  <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z" />
                </svg>{" "}
                View More
              </Link>
              <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart`} className="btn btn-primary btn-svgs mt-1 mb-1">
                <svg
                  className="svg-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.55 11l2.76-5H6.16l2.37 5z" opacity=".3" />
                  <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>{" "}
                Add to cart
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

ProductDetails.propTypes = {};

ProductDetails.defaultProps = {};

export default ProductDetails;
