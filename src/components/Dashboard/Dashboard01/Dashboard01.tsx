import React, { useState } from "react";
import { PageHeader } from "../../../Shared/Prism/Prism";
import {useTable,useSortBy,useGlobalFilter,usePagination} from "react-table";
import {COLUMNS,DATATABLE,GlobalFilter,ApexChart1,Topproduct, ApexChart3,ApexChart4,RecentCustomers, ApexChart5,usercountry,userdata, columnData, datatable} from "./data"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Progress,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonGroup,
  Table,Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import award from "../../../assets/images/photos/award.png";
import SimpleBar from "simplebar-react";
import { WorldMap } from "../../Apps/Maps/SimpleMaps/data";



const Dashboard01 = () => {

  const tableInstance: any = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;


  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <div>
      <PageHeader title="Sales Dashboard" date="Select Date" />

      <Row>
        <Col xl={9} md={12} lg={12}>
          <Row>
            <Col md={12} lg={4} xl={4}>
              <Card>
                <CardBody>
                  <svg
                    className="card-custom-icon text-success icon-dropshadow-success"
                    x="1008"
                    y="1248"
                    viewBox="0 0 24 24"
                    height="100%"
                    width="100%"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path
                      opacity=".0"
                      d="M3.31,11 L5.51,19.01 L18.5,19 L20.7,11 L3.31,11 Z M12,17 C10.9,17 10,16.1 10,15 C10,13.9 10.9,13 12,13 C13.1,13 14,13.9 14,15 C14,16.1 13.1,17 12,17 Z"
                    ></path>
                    <path d="M22,9 L17.21,9 L12.83,2.44 C12.64,2.16 12.32,2.02 12,2.02 C11.68,2.02 11.36,2.16 11.17,2.45 L6.79,9 L2,9 C1.45,9 1,9.45 1,10 C1,10.09 1.01,10.18 1.04,10.27 L3.58,19.54 C3.81,20.38 4.58,21 5.5,21 L18.5,21 C19.42,21 20.19,20.38 20.43,19.54 L22.97,10.27 L23,10 C23,9.45 22.55,9 22,9 Z M12,4.8 L14.8,9 L9.2,9 L12,4.8 Z M18.5,19 L5.51,19.01 L3.31,11 L20.7,11 L18.5,19 Z M12,13 C10.9,13 10,13.9 10,15 C10,16.1 10.9,17 12,17 C13.1,17 14,16.1 14,15 C14,13.9 13.1,13 12,13 Z"></path>
                  </svg>
                  <p className=" mb-1 ">All Orders</p>
                  <h2 className="mb-1 font-weight-bold">3257</h2>
                  <span className="mb-1 text-muted">
                    <span className="text-danger">
                      <i className="fa fa-caret-down  me-1"></i> 43.2
                    </span>{" "}
                    than last month
                  </span>
                  <div className="mt-3 ">
                    <Progress
                      className=""
                      style={{
                        height: "8px",
                      }}
                      color=" bg-success"
                      animated
                      value="78"
                    ></Progress>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={12} lg={4} xl={4}>
              <Card>
                <CardBody>
                  <svg
                    className="card-custom-icon text-secondary icon-dropshadow-secondary"
                    x="1008"
                    y="1248"
                    viewBox="0 0 24 24"
                    height="100%"
                    width="100%"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path
                      opacity=".0"
                      d="M12.07,6.01 C8.2,6.01 5.07,9.14 5.07,13.01 C5.07,16.88 8.2,20.01 12.07,20.01 C15.94,20.01 19.07,16.88 19.07,13.01 C19.07,9.14 15.94,6.01 12.07,6.01 Z M13.07,14.01 L11.07,14.01 L11.07,8.01 L13.07,8.01 L13.07,14.01 Z"
                    ></path>
                    <path d="M9.07,1.01 L15.07,1.01 L15.07,3.01 L9.07,3.01 L9.07,1.01 Z M11.07,8.01 L13.07,8.01 L13.07,14.01 L11.07,14.01 L11.07,8.01 Z M19.1,7.39 L20.52,5.97 C20.09,5.46 19.62,4.98 19.11,4.56 L17.69,5.98 C16.14,4.74 14.19,4 12.07,4 C7.1,4 3.07,8.03 3.07,13 C3.07,17.97 7.09,22 12.07,22 C17.05,22 21.07,17.97 21.07,13 C21.07,10.89 20.33,8.93 19.1,7.39 Z M12.07,20.01 C8.2,20.01 5.07,16.88 5.07,13.01 C5.07,9.14 8.2,6.01 12.07,6.01 C15.94,6.01 19.07,9.14 19.07,13.01 C19.07,16.88 15.94,20.01 12.07,20.01 Z"></path>
                  </svg>
                  <p className=" mb-1 ">Pending Orders</p>
                  <h2 className="mb-1 font-weight-bold">1658</h2>
                  <span className="mb-1 text-muted">
                    <span className="text-success">
                      <i className="fa fa-caret-up  me-1"></i> 19.8
                    </span>{" "}
                    than last month
                  </span>
                  <div className="mt-3">
                    <Progress
                      className=""
                      animated
                      color=" bg-secondary"
                      value="58"
                      style={{ height: "8px" }}
                    ></Progress>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={12} lg={4} xl={4}>
              <Card>
                <CardBody>
                  <svg
                    className="card-custom-icon text-primary icon-dropshadow-primary"
                    x="1008"
                    y="1248"
                    viewBox="0 0 24 24"
                    height="100%"
                    width="100%"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                  >
                    <path d="M17.65,6.35 C16.2,4.9 14.21,4 12,4 C7.58,4 4.01,7.58 4.01,12 C4.01,16.42 7.58,20 12,20 C15.73,20 18.84,17.45 19.73,14 L17.65,14 C16.83,16.33 14.61,18 12,18 C8.69,18 6,15.31 6,12 C6,8.69 8.69,6 12,6 C13.66,6 15.14,6.69 16.22,7.78 L13,11 L20,11 L20,4 L17.65,6.35 Z"></path>
                  </svg>
                  <p className=" mb-1 ">Refund Request</p>
                  <h2 className="mb-1 font-weight-bold">168</h2>
                  <span className="mb-1 text-muted">
                    <span className="text-success">
                      <i className="fa fa-caret-up  me-1"></i> 0.8%
                    </span>{" "}
                    than last month
                  </span>
                  <div className="mt-3">
                    <Progress
                      className=""
                      color=" bg-primary"
                      animated
                      value="58"
                      style={{ height: "8px" }}
                    ></Progress>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={12} md={12} xl={12}>
              <Card className="overflow-hidden">
                <Row>
                  <Col xl={8} md={12} lg={7} className=" pb-5">
                    <CardHeader className="card-header pb-50  border-0">
                      <h4 className="card-title">Country Base Profit</h4>
                    </CardHeader>
                    <div id="vmap" className="vmap-width overflow-hidden">
                        {" "}
                        <WorldMap />
                    </div>
                  </Col>
                  <Col xl={4} md={12} lg={5} className="pt-3 country-profit">
                    <SimpleBar style={{ height: 350 }}>
                      <div className="countryscroll">
                        <Table className="table countrytable">
                          <tbody>
                          {usercountry.map((list, index) => (
                            <tr key={index}>
                              <td className={list.className}>
                                <i className={list.icon}></i>
                              </td>
                              <td>{list.country}</td>
                              <td className="text-end">
                                <span className="font-weight-bold">
                                 {list.price}
                                </span>
                              </td>
                            </tr>
                          ))}
                          </tbody>
                        </Table>
                      </div>
                    </SimpleBar>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={6} md={12} xl={3}>
          
          <Card>
            <div className="d-block mt-4 card-header border-0 text-center">
              <h2 className="text-center">
                Congratulations <b>John!</b>
              </h2>
            </div>
            <CardBody>
              <Row className="text-center">
                <Col md={12}>
                  <img src={award} alt="img" className="sales-img" />
                  <h2 className="mb-0 mt-5 fs-40 counter font-weight-bold">
                    $1000k
                  </h2>
                  <span className="text-muted">
                    <span className="text-green me-1">
                      <i className="fe fe-arrow-up ms-1"></i>0.82%
                    </span>{" "}
                    since last year
                  </span>
                  <p className="mt-5 mb-2 text-muted fs-18">
                    You have done 99.9% target sales reached today. Keep going to reach your target.{" "}
                  </p>
                  <small className="mt-1 text-muted">
                    Today 20 minutes ago
                  </small>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        <Col xl={12} lg={6}>
          <Row>
            <Col lg={12} md={12} xl={4}>
              <Card>
                <CardBody>
                  <Row>
                    <Col>
                      <p className="mb-1">Today Revenue</p>
                      <h2 className="mb-0 font-weight-bold">$897k</h2>
                    </Col>
                    <Col className="col-auto">
                      <ApexChart3/>
                     
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg={12} md={12} xl={4}>
              <Card>
                <CardBody>
                  <Row>
                    <Col>
                      <p className="mb-1">Unique Visitors</p>
                      <h2 className="mb-0 font-weight-bold">5,896</h2>
                    </Col>
                    <Col className="col-auto">
                    <ApexChart4/>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg={12} md={12} xl={4}>
              <Card>
                <CardBody>
                  <Row>
                    <Col className="col">
                      <p className="mb-1">Expenses</p>
                      <h2 className="mb-0 font-weight-bold">$1,678</h2>
                    </Col>
                    <Col className="col col-auto">
                    <ApexChart5/>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* <!--Row--> */}
      <Row className="row-deck">
        <Col xxl={4} xl={5} lg={12}>
          <Card className="overflow-hidden">
            <CardHeader>
              <h3 className="card-title">Top Products</h3>
            </CardHeader>
            <CardBody>
              <SimpleBar style={{ height: "400px" }}>
                <div className="scrollbar h-400" id="scrollbar">
                {Topproduct.map((list, index) => (
                  <div className="d-flex mb-5" key={index}>
                    <Link to="#" className="me-4">
                      <img
                        className="w-8 h-8 rounded shadow"
                        src={list.pic}
                        alt="media1"
                      />
                    </Link>
                    <div className="mt-3">
                      <h5 className="mb-1 font-weight-semibold">
                      {list.toptext}
                      </h5>
                      <small className="text-muted">{list.time}</small>
                    </div>
                  </div>
                ))}
                </div>
              </SimpleBar>
            </CardBody>
          </Card>
        </Col>

        <Col lg={12} xl={7} xxl={8}>
          <Card className="card-block">
            <CardHeader className="card-header d-sm-flex d-block">
              <h3 className="card-title">Earning Revenue</h3>
              <div className="ms-auto mt-4 mt-sm-0">
                <Link className="btn btn-white me-1" to="#">
                  Week
                </Link>
                <Link className="btn btn-primary me-1" to="#">
                  Month
                </Link>
                <Link className="btn btn-white me-1" to="#">
                  Year
                </Link>
                <ButtonGroup>
                  <UncontrolledDropdown className="btn-group ms-3 mb-0">
                    <DropdownToggle
                    tag="a"
                      color=""
                      className="option-dots"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-v"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu p-0">
                      <DropdownItem className="dropdown-item" href="#">
                        <i className="fa fa-download me-2"></i> Download
                      </DropdownItem>
                      <DropdownItem className="dropdown-item" href="#">
                        <i className="fa fa-cog me-2"></i> Settings
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </ButtonGroup>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-container chart-dropshadow-primary">
              <ApexChart1/>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xl={8} xxl={8} lg={12}>
          <Card className="overflow-hidden">
            <CardHeader>
              <h3 className="card-title">New Transactions</h3>
              <div className="card-options ">
                <UncontrolledDropdown className="btn-group ms-3 mb-0">
                  <DropdownToggle
                  tag="a"
                    color=""
                    className="option-dots"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu">
                    <DropdownItem className="dropdown-item" href="#">
                      Today
                    </DropdownItem>
                    <DropdownItem className="dropdown-item" href="#">
                      Last Week
                    </DropdownItem>
                    <DropdownItem className="dropdown-item" href="#">
                      Last Month
                    </DropdownItem>
                    <DropdownItem className="dropdown-item" href="#">
                      Last Year
                    </DropdownItem>
                    <div className="dropdown-divider"></div>
                    <DropdownItem className="dropdown-item" href="#">
                      <i className="fa fa-cog me-2"></i> Settings
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </CardHeader>
            <CardBody>
              <SimpleBar style={{ height: "400px" }}>
                <div className="h-400 scrollbar2" id="scrollbar2">
                  <div className="table-responsive">
                    <Table className="table transaction-table card-table mb-0 text-nowrap">
                      <thead>
                        <tr className="bold">
                          <th className="border-bottom-0 w-200 d-block">
                            Product
                          </th>
                          <th className="border-bottom-0">Transactions</th>
                          <th className="border-bottom-0">Date &Time </th>
                          <th className="border-bottom-0">Amount</th>
                          <th className="border-bottom-0">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                      {userdata.map((list, index) => (
                        <tr key={index}>
                          <td className="font-weight-bold">
                            <img
                              className="w-7 h-7 rounded shadow me-3"
                              src={list.photo}
                              alt="media1"
                            />
                            {list.title}
                          </td>
                          <td>{list.num}</td>
                          <td>{list.date}</td>
                          <td className="font-weight-bold">{list.price}</td>
                          <td>
                            <span className={list.classname}>
                              {list.badge}
                            </span>
                          </td>
                        </tr>
                      ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </SimpleBar>
            </CardBody>
          </Card>
        </Col>
        <Col lg={12} xl={4} xxl={4}>
          <Card>
            <CardHeader>
              <h3 className="card-title">Recent Customers</h3>
              <div className="card-options ">
                <UncontrolledDropdown className="btn-group ms-3 mb-0">
                  <DropdownToggle
                  tag="a"
                    color=""
                    className="option-dots"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu">
                    <DropdownItem className="dropdown-item" href="#">
                      Last Week
                    </DropdownItem>
                    <DropdownItem className="dropdown-item" href="#">
                      Last Month
                    </DropdownItem>
                    <DropdownItem className="dropdown-item" href="#">
                      Yearly
                    </DropdownItem>
                    <div className="dropdown-divider"></div>
                    <DropdownItem className="dropdown-item" href="#">
                      <i className="fa fa-cog me-2"></i> Settings
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </CardHeader>
            <CardBody>
              <SimpleBar style={{ height: "400px" }}>
                <div className="h-400 scrollbar3" id="scrollbar3">
                  <div className="table-responsive">
                    <Table className="table transaction-table card-table mb-0">
                      <tbody>
                      {RecentCustomers.map((list, index) => (
                        <tr key={index} >
                          <td className="d-flex">
                            <img
                              className="w-7 h-7 rounded shadow me-3"
                              src={list.img}
                              alt="media1"
                            />
                            <div className="mt-2">
                              <h6 className="mb-1 font-weight-semibold">
                               {list.name}
                              </h6>
                              <small className="text-muted">
                               {list.text}
                              </small>
                            </div>
                          </td>
                        </tr>
                      ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </SimpleBar>
            </CardBody>
          </Card>
        </Col>
        <Col md={12} lg={12} xl={12}>
          <Card>
            <CardHeader>
              <h3 className="card-title">Best Sellers</h3>
              <div className="card-options">
                <UncontrolledDropdown className="btn-group mb-0">
                  <DropdownToggle
                  tag="a"
                 
                    color=""
                    className="btn btn-white dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fe fe-plus"></i> Add New Order
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu">
                    <DropdownItem className="dropdown-item" href="#">
                      <i className="fa fa-plus me-2"></i>Add new Order
                    </DropdownItem>
                    <DropdownItem className="dropdown-item" href="#">
                      <i className="fa fa-eye me-2"></i>View all new tab
                    </DropdownItem>
                    <DropdownItem className="dropdown-item" href="#">
                      <i className="fa fa-edit me-2"></i>Edit Page
                    </DropdownItem>
                    <div className="dropdown-divider"></div>
                    <DropdownItem className="dropdown-item" href="#">
                      <i className="fa fa-cog me-2"></i> Settings
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </CardHeader>
            <CardBody>
              <div className="table-responsive">
              <>
      <div className="d-flex">
        <select
          className=" mb-4 selectpage border me-1 br-5"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <Table
        {...getTableProps()}
        className="table table-bordered text-nowrap mb-0"
      >
        <thead>
          {headerGroups.map((headerGroup:any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column:any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={column.className}
                >
                  <span className="tabletitle">{column.render("Header")}</span>
                  <span className="">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-angle-down"></i>
                      ) : (
                        <i className="fa fa-angle-up"></i>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row:any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell:any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="d-block d-sm-flex mt-4 ">
        <div className="">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </div>
        <div className="ms-sm-auto maintable">
          <Button
            color=""
            className="me-1"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {" Previous "}
          </Button>
         
          <Button
            color=""
            className="me-1 active"
            onClick={() => {
              previousPage();
            }}
          >
            {" 1 "}
          </Button>
          <Button
            color=""
            className="me-1"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {" Next "}
          </Button>
        </div>
      </div>
    </>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* <!--End row--> */}
    </div>
  );
};
Dashboard01.propTypes = {};

Dashboard01.defaultProps = {};

export default Dashboard01;
