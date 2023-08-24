import React,{useState,useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Input, Row, Table, UncontrolledTooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { AddToCart, ProductReduxData } from "../../../../Redux/Action/Action"
import { cartData, CartDataItem } from './data';
import { PageHeaderstyle } from '../../../../Shared/Prism/Prism';

interface Props {
    cartData: CartDataItem[];
  }


const ShoppingCart = ({ local_varaiable }:any) =>{ 
    const [FiltercartData, setCartData] = useState<CartDataItem[]>([])

	useEffect(() => {

		if (local_varaiable == undefined) {

			setCartData(cartData)
		}
		else if (local_varaiable.length == 0) {

			setCartData(cartData)
		}
		else {

			setCartData(local_varaiable)
		}
	}, [local_varaiable])

    let handleRemove = (idx:CartDataItem[])=>{
        let i :any = FiltercartData.filter((ele:any)=>ele.title != idx )
        setCartData(i)
    }
    return(
  <div>
     <PageHeaderstyle title="Shopping Cart"home="Home"Pages="Pages"elements="E-commerce"name="Shopping Cart"/>

                        <Row>
                            <Col lg="12"md="12"sm="12" className="bootstrap snippets">
                                {/* <!-- Cart --> */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Shopping Cart</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="table-responsive ">
                                            <Table className="table table-bordered text-nowrap border-top">
                                                <thead className="">
                                                    <tr>
                                                        <th>Product Name</th>
                                                        <th>Quantity</th>
                                                        <th>Unit Price</th>
                                                        <th>Sub Total</th>  
                                                        <th className="w-5"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {FiltercartData.map((idx:any) => (
                                                    <tr key={Math.random()}>
                                                        <td>
                                                            <div className="d-flex w-200">
                                                                <div>
                                                                    <img src={idx.pic} alt="img" title="" className="w-7 h-7 br-5"/>
                                                                </div>
                                                                <h6 className="mb-0 mt-4 font-weight-bold ms-4">{idx.title}</h6>
                                                            </div>
                                                        </td>
                                                        <td><Link to="#">{idx.items}</Link></td>
                                                        <td className="price">{idx.price}</td>
                                                        <td>{idx.price}</td>
                                                        <td className="text-center">
                                                            <Link onClick={()=>{handleRemove(idx.title)}} to="#" className="remove_cart" data-bs-toggle="tooltip" data-bs-placement="top" id="delete" data-bs-original-title="Remove">
                                                                <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 9h8v10H8z" opacity=".3"/><path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"/></svg>
                                                            </Link>
                                                            <UncontrolledTooltip placement='top'
                                                            target="delete" >Remove</UncontrolledTooltip>
                                                        </td>
                                                    </tr>
                                                ))}
                                                    
                                                    <tr>
                                                        <td colSpan={3}>Total</td>
                                                        <td className="total h4 mb-0 font-weight-bold" colSpan={2}>$45,795.16</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className="float-start mt-2">
                                            <div className="input-group">
                                                <Input type="text" className="form-control" placeholder="Apply Coupon"/>
                                                <span className="btn-group">
                                                        <Button color="" className="btn btn-primary" type="button">Apply</Button>
                                                    </span>
                                            </div>
                                        </div>
                                        <div className=" float-end">
                                            <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-info mt-2 me-1"><i className="fe fe-arrow-left"></i> Continue Shopping</Link>
                                            <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart`} className="btn btn-primary mt-2 me-1">Update Cart</Link>
                                            <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/checkout`} className="btn btn-secondary mt-2">Checkout <i className="fe fe-arrow-right"></i></Link>
                                        </div>
                                    </CardBody>
                                </Card>
                                {/* <!-- End Cart --> */}
                            </Col>
                        </Row>
  </div>
);
 }
ShoppingCart.propTypes = {};

ShoppingCart.defaultProps = {};

const mapStateToProps = (state: Object[]) => ({
	local_varaiable: state
})
export default connect(mapStateToProps, { AddToCart, ProductReduxData })(ShoppingCart);
