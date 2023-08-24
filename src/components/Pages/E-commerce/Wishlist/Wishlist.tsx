import React, { useState } from 'react';
import { Card, CardBody, CardFooter, CardTitle, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { AddToCart, ProductReduxData } from "../../../../Redux/Action/Action"
import { PODUCTDATA } from '../Products/data';
import { connect } from 'react-redux';
import { PageHeaderstyle } from '../../../../Shared/Prism/Prism';
const Wishlist = ({ AddToCart }:any) => {
    
    const [show, setshow] = useState(PODUCTDATA);

    function handleRemove(id: string | Number): void {
        const RemoveData = show.filter((idx) => idx.id !== id);
        setshow(RemoveData);
    }
    return (
        <div>
            <PageHeaderstyle title="Wishlist" home="Home" Pages="Pages" elements="E-commerce" name="Wishlist" />


            <Row>
                {show.map((list) => (
                    <Col xl="3" lg="6" sm="6" className="alert mb-0 py-0" key={Math.random()}>
                        <Card className="item-card">
                            <CardBody className="pb-0">
                                <div className="text-center">
                                    <img src={list.pic} alt="img" className="img-fluid w-100 product-img" />
                                </div>
                                <CardBody className="px-0 ">
                                    <div className="cardtitle">
                                        <div>
                                            <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                                            <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                                            <Link to="#"><i className="fa fa-star text-yellow fs-16"></i></Link>
                                            <Link to="#"><i className="fa fa-star-half-o text-yellow fs-16"></i></Link>
                                            <Link to="#"><i className="fa fa-star-o text-yellow fs-16"></i></Link>
                                            <Link to="#"> ({list.item})</Link>
                                        </div>
                                        <Link to="#" className="shop-title">{list.title}</Link>
                                    </div>
                                    <div className="cardprice">
                                        <span className="type--strikethrough">{list.discount}</span>
                                        <span>{list.price}</span>
                                    </div>
                                </CardBody>
                            </CardBody>
                            <CardFooter className="text-center">
                                <div className="btn-list">
                                    <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart`} onClick={() => { AddToCart(list.id) }} className="btn btn-primary btn-svgs">
                                        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 11l2.76-5H6.16l2.37 5z" opacity=".3" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                        <span>Add to cart</span>
                                    </Link>
                                    <Link to="#" onClick={() => { handleRemove(list.id) }} className="btn btn-light btn-svgs" data-bs-dismiss="alert" aria-label="Close">
                                        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
                                        <span>Remove</span>
                                    </Link>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                ))}

            </Row>
        </div>
    );
}

Wishlist.propTypes = {};

Wishlist.defaultProps = {};
const mapStateToProps = (state: Object[]) => ({
    local_varaiable: state
})

export default connect(mapStateToProps, { AddToCart, ProductReduxData })(Wishlist);
