import React,{ useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Pagination, PaginationItem, PaginationLink, Row } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import { AddToCart } from '../../../../Redux/Action/Action';
import { PODUCTDATA, productDatastate } from './data';
import Select from 'react-select';
import { PageHeaderstyle } from '../../../../Shared/Prism/Prism';

const Products = ({ AddToCart }: any) =>{ 
    const Occasionoptions = [
        { value: 'Party Wear', label: 'Party Wear' },
        { value: 'Casual Wear', label: 'Casual Wear' },
        { value: 'Wedding', label: 'Wedding' },
        { value: 'Festive', label: 'Festive' },
      ];
      
      const [occasionOption, setOccasionOption] = useState(null);
       const Typeoptions = [
        { value: 'Western wear', label: 'Western wear' },
        { value: 'Foot wear', label: 'Foot wear' },
        { value: 'Top wear', label: 'Top wear' },
        { value: 'Bootom wear', label: 'Bootom wear' },
        { value: 'Beauty Groming', label: 'Beauty Groming' },
        { value: 'Accessories', label: 'Accessories' },
      ];
      
      const [typeOption, setTypeOption] = useState(null);
      
    const [allData, setAllData] = useState<productDatastate[]>(PODUCTDATA)

	let allElement2: productDatastate[] = [];

	let myfunction = (InputData: string): void => {
		let allElement
		for (allElement of PODUCTDATA) {
			if (allElement.title[0] == " ") {
				allElement.title = allElement.title.trim()
			}
			if (allElement.title.toLowerCase().includes(InputData.toLowerCase())) {
				if (allElement.title.toLowerCase().startsWith(InputData.toLowerCase())) {
					allElement2.push(allElement);
				}
			}

		}
		setAllData(allElement2);
	};
    return(
  <div>
       <PageHeaderstyle title="Products"home="Home"Pages="Pages"elements="E-commerce"name="Products"/>
 
                        <Row>
                            <Col xl="3">
                                <Card>
                                    <CardBody>
                                        <Row className="row-sm">
                                            <Col sm="12">
                                                <div className="input-group">
                                                    <Input type="text"onChange={(ele) => { myfunction(ele.target.value) }} className="form-control" placeholder="Search ..."/>
                                                    <Button color="" className="btn btn-primary" type="button">Search</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Categories & Filters</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="custom-controls-stacked">
                                            <Label className="custom-control custom-checkbox">
                                                <Input type="checkbox" className="custom-control-input" name="example-checkbox1" value="option1" defaultChecked/>
                                                <span className="custom-control-label">Men</span>
                                            </Label>
                                            <Label className="custom-control custom-checkbox">
                                                <Input type="checkbox" className="custom-control-input" name="example-checkbox2" value="option2"/>
                                                <span className="custom-control-label">Women</span>
                                            </Label>
                                            <Label className="custom-control custom-checkbox">
                                                <Input type="checkbox" className="custom-control-input" name="example-checkbox2" value="option2"/>
                                                <span className="custom-control-label">Kids</span>
                                            </Label>
                                            <Label className="custom-control custom-checkbox">
                                                <Input type="checkbox" className="custom-control-input" name="example-checkbox2" value="option2"/>
                                                <span className="custom-control-label">Others</span>
                                            </Label>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Category</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <FormGroup className="form-group">
                                            <Label className="form-label tx-medium">Occasion</Label>
                                            <Select
                    defaultValue={occasionOption}
                    onChange={()=>setOccasionOption}
                    options={Occasionoptions}
                    placeholder="--Select--"
                    classNamePrefix="Search"
                  />
                                           
                                        </FormGroup>
                                        <FormGroup className="form-group mb-0">
                                            <Label className="form-label tx-medium">Type</Label>
                                            <Select
                    defaultValue={typeOption}
                    onChange={()=>setTypeOption}
                    options={Typeoptions}
                    placeholder="--Select--"
                    classNamePrefix="Search"
                  />
                                        </FormGroup>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Color</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="d-flex">
                                            <div className="">
                                                <Label className="colorinput">
                                                    <Input name="color" type="checkbox" value="azure" className="colorinput-input" defaultChecked/>
                                                    <span className="colorinput-color bg-primary me-1"></span>
                                                </Label>
                                            </div>
                                            <div className="">
                                                <Label className="colorinput">
                                                    <Input name="color" type="checkbox" value="indigo" className="colorinput-input"/>
                                                    <span className="colorinput-color bg-indigo me-1"></span>
                                                </Label>
                                            </div>
                                            <div className="">
                                                <Label className="colorinput">
                                                    <Input name="color" type="checkbox" value="teal" className="colorinput-input"/>
                                                    <span className="colorinput-color bg-teal me-1"></span>
                                                </Label>
                                            </div>
                                            <div className="">
                                                <Label className="colorinput">
                                                    <Input name="color" type="checkbox" value="pink" className="colorinput-input"/>
                                                    <span className="colorinput-color bg-pink me-1"></span>
                                                </Label>
                                            </div>
                                            <div className="">
                                                <Label className="colorinput">
                                                    <Input name="color" type="checkbox" value="red" className="colorinput-input"/>
                                                    <span className="colorinput-color bg-danger me-1"></span>
                                                </Label>
                                            </div>
                                            <div className="">
                                                <Label className="colorinput">
                                                    <Input name="color" type="checkbox" value="orange" className="colorinput-input"/>
                                                    <span className="colorinput-color bg-orange me-1"></span>
                                                </Label>
                                            </div>
                                            <div className="">
                                                <Label className="colorinput">
                                                    <Input name="color" type="checkbox" value="yellow" className="colorinput-input"/>
                                                    <span className="colorinput-color bg-warning"></span>
                                                </Label>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle tag="h3">Price</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <FormGroup className="form-group mb-0">
                                            <Label className="custom-control custom-radio">
                                                <Input type="radio" className="custom-control-input" name="example-radios" value="option1" defaultChecked/>
                                                <span className="custom-control-label">Under $25</span>
                                            </Label>
                                            <Label className="custom-control custom-radio">
                                                <Input type="radio" className="custom-control-input" name="example-radios" value="option2"/>
                                                <span className="custom-control-label">$25 to $50</span>
                                            </Label>
                                            <Label className="custom-control custom-radio">
                                                <Input type="radio" className="custom-control-input" name="example-radios" value="option2"/>
                                                <span className="custom-control-label">$50 to $100</span>
                                                    </Label>
                                            <Label className="custom-control custom-radio">
                                                <Input type="radio" className="custom-control-input" name="example-radios" value="option2"/>
                                                <span className="custom-control-label">Other (specify)</span>
                                            </Label>
                                        </FormGroup>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl="9">
                                <Row>
                                {allData.map((list) => (
                                    <Col xl="4"lg="6"sm="6" key={Math.random()}>
                                        <Card className="item-card">
                                            <CardBody className="pb-0">
                                                <div className="text-center">
                                                    <img src={list.pic} alt="img" className="img-fluid w-100 product-img"/>
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
                                            <div className="text-center border-top p-4">
                                                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails/${list.id}`} className="btn btn-light btn-svgs mt-1 mb-1 me-2"><svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z" opacity=".3"/><path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z"/></svg> View More</Link>
                                                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/shoppingcart`} onClick={() => { AddToCart(list.id) }}className="btn btn-primary btn-svgs mt-1 mb-1"><svg  className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 11l2.76-5H6.16l2.37 5z" opacity=".3"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg> Add to cart</Link>
                                            </div>
                                        </Card>
                                    </Col>
                                ))}
                                    
                                </Row>
                                <div className="d-flex justify-content-end">
                                    <Pagination className="pagination ">
                                        <PaginationItem className="page-item page-prev"disabled>
                                            <PaginationLink className="page-link" href="#" tabIndex={-1}>Prev</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className="page-item" active><PaginationLink className="page-link" href="#">1</PaginationLink></PaginationItem>
                                        <PaginationItem className="page-item"><PaginationLink className="page-link" href="#">2</PaginationLink></PaginationItem>
                                        <PaginationItem className="page-item"><PaginationLink className="page-link" href="#">3</PaginationLink></PaginationItem>
                                        <PaginationItem className="page-item"><PaginationLink className="page-link" href="#">4</PaginationLink></PaginationItem>
                                        <PaginationItem className="page-item page-next">
                                            <PaginationLink className="page-link" href="#">Next</PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </div>
                            </Col>
                        </Row>
  </div>
);
 }
Products.propTypes = {};

Products.defaultProps = {};

const mapStateToProps = (state: Object[]) => ({
	local_varaiable: state
})

export default connect(mapStateToProps, { AddToCart })(Products);
