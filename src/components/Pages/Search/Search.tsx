import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  CardHeader,
  Col,
  Input,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom"
import Select from 'react-select';
import { PageHeaders } from "../../../Shared/Prism/Prism";
const Search = () => {
  const Mensoptions = [
    { value: '--Select--', label: '--Select--' },
    { value: 'Foot wear', label: 'Foot wear' },
    { value: 'Top wear', label: 'Top wear' },
    { value: 'Bootom wear', label: 'Bootom wear' },
    { value: 'Mens Groming', label: 'Mens Groming' },
    { value: 'Accessories', label: 'Accessories' },
  ];
  const [mensOption, setMensOption] = useState<any>(null);
  const Womenoptions = [
    { value: '--Select--', label: '--Select--' },
    { value: 'Western wear', label: 'Western wear' },
    { value: 'Top wear', label: 'Top wear' },
    { value: 'Bootom wear', label: 'Bootom wear' },
    { value: 'Beuty Groming', label: 'Beuty Groming' },
    { value: 'Accessories', label: 'Accessories' },
    { value: 'jewellery', label: 'jewellery' },
  ];
  const [womenOption, setWomenOption] = useState<any>(null);
  const Booksoptions = [
    { value: '--Select--', label: '--Select--' },
    { value: 'Stationery', label: 'Stationery' },
    { value: 'Books', label: 'Books' },
    { value: 'Gaming', label: 'Gaming' },
    { value: 'Music', label: 'Music' },
    { value: 'Exercise & fitness', label: 'Exercise & fitness' },
  ];
  const [booksOption, setBooksOption] = useState<any>(null);
  const Kidsoptions = [
    { value: '--Select--', label: '--Select--' },
    { value: 'Boys clothing', label: 'Boys clothing' },
    { value: 'girls Clothing', label: 'girls Clothing' },
    { value: 'Toys', label: 'Toys' },
    { value: 'Baby Care', label: 'Baby Care' },
    { value: 'Kids footwear', label: 'Kids footwear' },
  ];
  const [kidsOption, setKidsOption] = useState<any>(null);
  const Electronicsoptions = [
    { value: '--Select--', label: '--Select--' },
    { value: 'Mobiles', label: 'Mobiles' },
    { value: 'Laptops', label: 'Laptops' },
    { value: 'Gaming & Accessories', label: 'Gaming & Accessories' },
    { value: 'Health care Appliances', label: 'Health care Appliances' },
  ];
  const [electronicsOption, setElectronicsOption] = useState<any>(null);


  interface SData {
    id: number
    ProductName: string
    badgeClassName?: string
    views: string
    discount: string
    price: string
  }

  const searchData = [
    { id: 1, ProductName: "Mens Jackets", badgeClassName: "", views: "987", discount: "50%", price: "$1,987" },
    { id: 2, ProductName: "Occational Special Edition", badgeClassName: "", views: "675", discount: "60%", price: "$2,679" },
    { id: 3, ProductName: "Sares", badgeClassName: "badge bg-primary badge-md", views: "765", discount: "25%", price: "$999" },
    { id: 4, ProductName: "Western Wear", badgeClassName: "", views: "678", discount: "30%", price: "$699" },
    { id: 5, ProductName: "Kids Dress", badgeClassName: "badge badge-default badge-md", views: "345", discount: "47%", price: "$399" },
    { id: 6, ProductName: "Kids Toys", badgeClassName: "", views: "876", discount: "26%", price: "$299" },
    { id: 7, ProductName: "Sony KD-49XE7005", badgeClassName: "badge bg-primary badge-md", views: "563", discount: "43%", price: "$22,269" },
    { id: 8, ProductName: "Huawei Mate Pro Dual SIM", badgeClassName: "", views: "671", discount: "20%", price: "$9,999" },
    { id: 9, ProductName: "Novel Books", badgeClassName: "badge badge-default badge-md", views: "354", discount: "14%", price: "$899" },
    { id: 10, ProductName: "Welcare Fitness", badgeClassName: "", views: "937", discount: "40%", price: "$3,987" },
    { id: 11, ProductName: "Red rose Gift", badgeClassName: "", views: "137", discount: "80%", price: "$987" },
    { id: 12, ProductName: "New Model Saree", badgeClassName: "", views: "157", discount: "30%", price: "$2,452" },
    { id: 13, ProductName: "Welcare Fitness", badgeClassName: "", views: "937", discount: "40%", price: "$3,987" },
    { id: 14, ProductName: "W-top", badgeClassName: "", views: "1452 ", discount: "40%", price: "$123" },
    { id: 15, ProductName: "Watch", badgeClassName: "", views: "637", discount: "10%", price: "$87" },
    { id: 16, ProductName: "College Bag", badgeClassName: "", views: "536", discount: "25%", price: "$1,251" },
  ]


//Search Function 

const [allData, setAllData] = useState<SData[]>(searchData);

let allElement2: SData[] = [];

const myfunction = (InputData: string): void => {
  let allElement: SData;
  for (allElement of allData) {
    if (allElement.ProductName[0] == " ") {
      allElement.ProductName = allElement.ProductName.trim();
    }
    if (allElement.ProductName.toLowerCase().includes(InputData.toLowerCase())) {
      if (allElement.ProductName.toLowerCase().startsWith(InputData.toLowerCase())) {
        allElement2.push(allElement);
      }
    }
  }
  setAllData(allElement2);
};

  return (
    <div>
      <PageHeaders
        title="Search"
        home="Home"
        name="Pages"
        fonticonsname="Search"
      />

      <Row>
        <Col xl="3">
          <Row>
            <Col md="12" lg="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3"> Categories</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label">Mens</Label>
                    <Select
                      defaultValue={mensOption}
                      onChange={setMensOption}
                      options={Mensoptions}
                      placeholder="--Select--"
                      classNamePrefix="Search"
                    />
                  </div>
                  <div className="mb-3">
                    <Label className="form-label">Women</Label>
                    <Select
                      defaultValue={womenOption}
                      onChange={setWomenOption}
                      options={Womenoptions}
                      placeholder="--Select--"
                      classNamePrefix="Search"
                    />

                  </div>
                  <div className="mb-3">
                    <Label className="form-label">Baby & Kids</Label>
                    <Select
                      defaultValue={kidsOption}
                      onChange={setKidsOption}
                      options={Kidsoptions}
                      placeholder="--Select--"
                      classNamePrefix="Search"
                    />

                  </div>
                  <div className="mb-3">
                    <Label className="form-label">Electronics</Label>
                    <Select
                      defaultValue={electronicsOption}
                      onChange={setElectronicsOption}
                      options={Electronicsoptions}
                      placeholder="--Select--"
                      classNamePrefix="Search"
                    />

                  </div>
                  <div className="mb-3">
                    <Label className="form-label">Sport,Books & More </Label>
                    <Select
                      defaultValue={booksOption}
                      onChange={setBooksOption}
                      options={Booksoptions}
                      placeholder="--Select--"
                      classNamePrefix="Search"
                    />

                  </div>
                  <Link className="btn btn-primary btn-block" to="#">
                    Search
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xl="9">
          <div className="input-group">
            <Input
              onChange={(ele) => { myfunction(ele.target.value) }}
              type="text"
              className="form-control br-tl-7 br-bl-7"
              placeholder="Search for...."
            />
            <div className="btn-group">
              <Button
                color=""
                type="button"
                className="btn btn-primary br-tr-7 br-br-7"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </Button>
            </div>
          </div>
          <Card className="mt-5 store">
            <div className="table-responsive">

              <Table className="table card-table table-vcenter text-nowrap">
                <tbody>
                  {allData.map((idx) => (
                    <tr key={Math.random()}>
                      <td>{idx.ProductName}{" "}
                        <span className={idx.badgeClassName}>New</span></td>
                      <td>
                        <Rating name="no-value" size="small" value={3} max={5} />
                      </td>
                      <td className="text-end text-muted d-none d-md-table-cell text-nowrap">
                        {idx.views} views
                      </td>
                      <td className="text-end text-muted d-none d-md-table-cell text-nowrap">
                        {idx.discount} off
                      </td>
                      <td className="text-end">
                        <strong>{idx.price}</strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="d-flex p-4 border-top">
              <Pagination className="pagination mb-0">
                <PaginationItem disabled className=" page-item">
                  <PaginationLink className="page-link">‹</PaginationLink>
                </PaginationItem>
                <PaginationItem active className=" page-item">
                  <PaginationLink className="page-link">1</PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link">2</PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link">3</PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link">4</PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link">5</PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link">›</PaginationLink>
                </PaginationItem>
                <PaginationItem className="page-item">
                  <PaginationLink className="page-link">»</PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
