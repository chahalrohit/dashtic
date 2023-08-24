import React, { useState } from "react";
import {Row,Col,Card,CardBody,CardFooter,Input,Progress,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";
import { Modaluser, PageHeaderstyle } from "../../../../Shared/Prism/Prism";
import { data } from "../../../../Shared/datas/userlist/data"


interface userList {
  photo: any;
  name: string;
  num: string;
  no: string;
  email: string;
  work: string;
}


const UserList04 = () => {
  const [allData, setAllData] = useState<userList[]>(data);

let allElement2: userList[] = [];

const myfunction = (InputData: string): void => {
  let allElement: userList;
  for (allElement of data) {
    if (allElement.name[0] === ' ') {
      allElement.name = allElement.name.trim();
    }
    if (allElement.name.toLowerCase().includes(InputData.toLowerCase())) {
      if (allElement.name.toLowerCase().startsWith(InputData.toLowerCase())) {
        allElement2.push(allElement);
      }
    }
  }
  setAllData(allElement2);
};
  
  return(
  <div>
    <PageHeaderstyle title="User List"home="Home"Pages="Apps"elements="User List"name="User List 04"/>
   
    <Row className="flex-lg-nowrap">
      <Col className="col-12">
        <Row className="flex-lg-nowrap">
          <Col className="col-12 mb-3">
            <Card className="e-panel ">
              <CardBody className="pb-2">
                <Row>
                  <Col className="col mb-4">
                    <Modaluser/>
                  </Col>
                  <Col className="col col-auto mb-4">
                    <div className="mb-3 w-100">
                      <div className="input-icon">
                        <span className="input-icon-addon">
                          <i className="fe fe-search"></i>
                        </span>
                        <Input
                          type="text"
                          className="form-control"
                          placeholder="Search User"
                          onChange={(ele) => { myfunction(ele.target.value) }}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                {allData.map((list, index) => (
                  <Col lg={6} xl={4}key={index}>
                    <Card className="border p-0 shadow-none">
                      <div className="d-flex align-items-center p-4">
                        <img
                          className="avatar avatar-lg brround d-block cover-image"
                          src={list.photo}
                        ></img>
                        <div className="wrapper ms-3">
                          <p className="mb-0 mt-1 text-dark font-weight-semibold">
                          {list.name}
                          </p>
                          <small className="text-muted">{list.work}</small>
                        </div>
                        <div className="float-end ms-auto">
                          <UncontrolledDropdown className="btn-group ms-3 mb-0">
                            <DropdownToggle tag="a"
                              color=""
                              className="option-dots"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="fa fa-ellipsis-v"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu">
                              <DropdownItem className="dropdown-item">
                                <i className="fe fe-edit me-2"></i> Edit
                              </DropdownItem>
                              <DropdownItem className="dropdown-item">
                                <i className="fe fe-trash me-2"></i> Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </div>
                      <CardBody className="pt-2">
                        <div className="d-flex mb-3">
                          <svg
                            className="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                              d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z"
                              opacity=".3"
                            />
                            <path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" />
                          </svg>
                          <div className="h6 mb-0 ms-3 mt-1">
                           {list.email}
                          </div>
                        </div>
                        <div className="d-flex">
                          <svg
                            className="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path
                              d="M15.2 18.21c1.21.41 2.48.67 3.8.76v-1.5c-.88-.07-1.75-.22-2.6-.45l-1.2 1.19zM6.54 5h-1.5c.09 1.32.35 2.59.75 3.79l1.2-1.21c-.24-.83-.39-1.7-.45-2.58zM14 8h5V5h-5z"
                              opacity=".3"
                            />
                            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.46 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51zM12 3v10l3-3h6V3h-9zm7 5h-5V5h5v3z" />
                          </svg>
                          <div className="h6 mb-0 ms-3 mt-1">+345 657 567</div>
                        </div>
                      </CardBody>
                      <CardFooter>
                        <Row className="mb-1">
                          <Col>Work Progress</Col>
                          <div className="col col-auto">
                            <h6 className="mb-0 ms-4 font-weight-bold">{list.num} </h6>
                          </div>
                        </Row>
                        <Progress
                          className="progress-sm mb-0 mt-1"
                          color="primary"
                          value={list.no}
                        />
                      </CardFooter>
                    </Card>
                  </Col>
                ))}
                  
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);
                }
UserList04.propTypes = {};

UserList04.defaultProps = {};

export default UserList04;
