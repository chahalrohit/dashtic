import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data, menudata } from "../../../../Shared/datas/userlist/data";
import {Row,Col,Card,CardBody,Input,} from "reactstrap";
import { Modaluser } from "../../../../Shared/Prism/Prism";
import { PageHeaderstyle } from './../../../../Shared/Prism/Prism';
const UserList02 = () => {

    const [allData , setAllData] = useState<menudata[]>(data)

    let allElement2: menudata[] = [];

    let myfunction = (InputData: string): void => {
      
      let allElement
      for (allElement of data) {
          if(allElement.name[0] == " "){
              allElement.name = allElement.name.trim()
          }
           if (allElement.name.toLowerCase().includes(InputData.toLowerCase())) {
              if (allElement.name.toLowerCase().startsWith(InputData.toLowerCase())) {
                  allElement2.push(allElement);
              }
          }
      }
      setAllData(allElement2);
    };
 
  return (
    <div>
         <PageHeaderstyle title="User List"home="Home"Pages="Apps"elements="User List"name="User List 02"/>
     
      <Row className="flex-lg-nowrap">
        <Col className="col-12">
          <Row className="flex-lg-nowrap">
            <Col className="col-12 mb-3">
              <Card className="e-panel ">
                <CardBody>
                  <Row>
                    <Col className="mb-4">
                     <Modaluser/>
                    </Col>
                    <Col className="col-auto mb-4">
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
                      <Col xl={6} key={index}>
                        <div className="d-sm-flex align-items-center border p-3 mb-3 br-7">
                          <img
                            className="avatar avatar-lg brround d-block cover-image"
                            src={list.photo}
                          />

                          <div className="wrapper ms-sm-3  mt-4 mt-sm-0">
                            <p className="mb-0 mt-1 text-dark font-weight-semibold">
                              {list.name}
                            </p>
                            <small className="text-muted">{list.work}</small>
                          </div>
                          <div className="float-sm-end ms-auto mt-4 mt-sm-0">
                            <Link to="#" className="btn btn-white btn-sm me-1">
                              Message
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-primary btn-sm"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
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
};

UserList02.propTypes = {};

UserList02.defaultProps = {};

export default UserList02;
