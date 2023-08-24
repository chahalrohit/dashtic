import React from "react"
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import user16 from "../../../assets/images/users/16.jpg";
import user10 from "../../../assets/images/users/10.jpg";
export const BuiltCard = () => {
  let [isFirstCollapsed, setisFirstCollapsed] = React.useState(true);
  let first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    } else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };
  const [show, setShow] = React.useState(true);
  return (
    <>
    {show ? (
    <Card className="card-blog-overlay ">
      <CardHeader className="z-index-10">
        <CardTitle tag="h3" className="card-title text-white">
          card-with image
        </CardTitle>
        <div className="card-options">
          <Link
            to="#"
            className="card-options-collapse me-2"
            data-bs-toggle="card-collapse"
            onClick={()=> first()}
          >
            <i className="fe fe-chevron-up text-white"></i>
          </Link>
          <Link
            to="#"
            className="card-options-remove"
            data-bs-toggle="card-remove"
            onClick={() => setShow(false)}
          >
            <i className="fe fe-x text-white"></i>
          </Link>
        </div>
      </CardHeader>
      {isFirstCollapsed ? (
      <CardBody className="text-white">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </CardBody>
       ) : null}
    </Card>
    ):null}
    </>
  );
};

export const BuiltCard2 = () => {
    let [isFirstCollapsed, setisFirstCollapsed] = React.useState(true);
    let first = () => {
      if (isFirstCollapsed === false) {
        setisFirstCollapsed(true);
      } else if (isFirstCollapsed === true) {
        setisFirstCollapsed(false);
      }
    };
    const [show, setShow] = React.useState(true);
    return (
      <>
      {show ? (
      <Card className="">
      <CardHeader className="">
        <CardTitle tag="h3" className="card-title ">card-with image</CardTitle>
        <div className="card-options">
          <Link
            to="#"
            onClick={()=> first()}
            className="card-options-collapse me-2"
            data-bs-toggle="card-collapse"
          >
            <i className="fe fe-chevron-up "></i>
          </Link>
          <Link
            to="#"
            onClick={() => setShow(false)}
            className="card-options-remove"
            data-bs-toggle="card-remove"
          >
            <i className="fe fe-x "></i>
          </Link>
        </div>
      </CardHeader>
      {isFirstCollapsed ? (
      <CardBody className="text-white card-blog-overlay1 h-9 w-100"></CardBody>
      ) : null}
      <CardBody className="-4">Duis aute irure dolor</CardBody>
    </Card>
      ):null}
      </>
    );
  };

export const Employeecard = () => {
    let [isFirstCollapsed, setisFirstCollapsed] = React.useState(true);
    let first = () => {
      if (isFirstCollapsed === false) {
        setisFirstCollapsed(true);
      } else if (isFirstCollapsed === true) {
        setisFirstCollapsed(false);
      }
    };
    const [show, setShow] = React.useState(true);
    return(
        <>
        {show ? (
        <Card className="">
          <CardHeader className="">
            <CardTitle tag="h3">Employee card</CardTitle>
            <div className="card-options">
              <Link
                to="#"
                onClick={()=> first()}
                className="card-options-collapse me-2"
                data-bs-toggle="card-collapse"
              >
                <i className="fe fe-chevron-up"></i>
              </Link>
              <Link
                to="#"
                onClick={() => setShow(false)}
                className="card-options-remove me-2"
                data-bs-toggle="card-remove"
              >
                <i className="fe fe-x "></i>
              </Link>
            </div>
          </CardHeader>
          {isFirstCollapsed ? (
          <CardBody className="text-center">
            <img src={user16} className="avatar avatar-xxl brround" alt="" />
            <h4 className="h4 mb-0 mt-3 font-weight-bold">James Thomas</h4>
            <p className="card-text text-muted">Web designer</p>
          </CardBody>
          ) : null }
        </Card>
        ) : null}
        </>
    )
}
export const Employeecard2 = () => {
    let [isFirstCollapsed, setisFirstCollapsed] = React.useState(true);
    let first = () => {
      if (isFirstCollapsed === false) {
        setisFirstCollapsed(true);
      } else if (isFirstCollapsed === true) {
        setisFirstCollapsed(false);
      }
    };
    const [show, setShow] = React.useState(true);
    return(
        <>
        {show ? (
        <Card className="">
          <CardHeader className="">
            <CardTitle tag="h3">Employee card</CardTitle>
            <div className="card-options">
              <Link
                to="#"
                onClick={()=> first()}
                className="card-options-collapse me-2"
                data-bs-toggle="card-collapse"
              >
                <i className="fe fe-chevron-up"></i>
              </Link>
              <Link
                to="#"
                onClick={() => setShow(false)}
                className="card-options-remove me-2"
                data-bs-toggle="card-remove"
              >
                <i className="fe fe-x "></i>
              </Link>
            </div>
          </CardHeader>
          {isFirstCollapsed ? (
          <CardBody className="text-center">
            <img src={user10} className="avatar avatar-xxl brround" alt="" />
            <h4 className="h4 mb-0 mt-3 font-weight-bold">Rebacca Thomas</h4>
            <p className="card-text text-muted">Web designer</p>
          </CardBody>
          ) : null }
        </Card>
        ) : null}
        </>
    )
}
