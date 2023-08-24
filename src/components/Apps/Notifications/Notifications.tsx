import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
  Col,
  PopoverBody,
  PopoverHeader,
  Row,
  UncontrolledPopover,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Notifications = () => {
  const DefaultTostify = () => {
    toast.success(
      <p className="text-white tx-16 mb-0">
        Success: Well done Details Submitted Successfully
      </p>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: "colored",
      }
    );
  };

  const CenterToastify = () =>
    toast.error(
      <p className="text-white tx-16 mb-0">Oops! An Error Occurred</p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        theme: "colored",
      }
    );
  const LeftNotifier = () =>
    toast.warn(
      <p className="text-white tx-16 mb-0">Warning: Something Went Wrong</p>,
      {
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: "colored",
      }
    );

  const InfoTostifier = () =>
    toast.info(<p className="text-white tx-16 mb-0">Info: Some info here.</p>, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      autoClose: 2000,
      theme: "colored",
    });

  const DangerNotifier = () =>
    toast.error(
      <p className="text-white tx-16 mb-0">
        Error: This error will stay here until you click it.
      </p>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        theme: "colored",
      }
    );

  const WarningNotifier = () =>
    toast.warn(<p className="text-white tx-16 mb-0">Opacity is cool!</p>, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      autoClose: 2000,
      theme: "colored",
    });

  let togleTost = (type: string): void => {
    switch (type) {
      case "Primary":
        toast.success(
          <p className="text-white tx-16 mb-0">welcome To VALEX</p>,
          {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            autoClose: 2000,
            theme: "colored",
          }
        );
        break;
      case "Success":
        toast.success(
          <p className="text-white tx-16 mb-0">
            Success: Well done Details Submitted Successfully
          </p>,
          {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            autoClose: 2000,
            theme: "colored",
          }
        );
        break;
      case "Error":
        toast.error(
          <p className="text-white tx-16 mb-0">Oops! An Error Occurred</p>,
          {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: true,
            autoClose: 2000,
            theme: "colored",
          }
        );
        break;
      case "Warning":
        toast.warn(
          <p className="text-white tx-16 mb-0">
            Warning: Something Went Wrong
          </p>,
          {
            position: toast.POSITION.TOP_LEFT,
            hideProgressBar: true,
            autoClose: 2000,
            theme: "colored",
          }
        );
        break;
      case "Info":
        toast.info(
          <p className="text-white tx-16 mb-0">Info: Some info here.</p>,
          {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: true,
            autoClose: 2000,
            theme: "colored",
          }
        );
        break;
      case "FixedError":
        toast.error(
          <p className="text-white tx-16 mb-0">
            <h3>Error!</h3>please check Your details ...file is missing
          </p>,
          {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            autoClose: 2000,
            theme: "colored",
          }
        );
        break;
    }
  };

  return (
    <div>
      <PageHeaders
      title="Notifications"
      home="Home"
      name="Apps"
      fonticonsname="Notifications"
    />
     
      <Row className="notification-alert">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h3">Alerts Styles Notifications</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="btn-list">
                <Button
                  color=""
                  className="btn btn-primary"
                  onClick={() => DefaultTostify()}
                >
                  Default
                </Button>
                <Button
                  color=""
                  className="btn btn-secondary"
                  onClick={() => CenterToastify()}
                >
                  Center
                </Button>
                <Button
                  color=""
                  className="btn btn-warning"
                  onClick={() => LeftNotifier()}
                >
                  Left
                </Button>
                <Button
                  color=""
                  className="btn btn-info"
                  onClick={() => InfoTostifier()}
                >
                  Center Info
                </Button>
                <Button
                  color=""
                  className="btn btn-danger"
                  onClick={() => DangerNotifier()}
                >
                  Center Error
                </Button>
                <Button
                  color=""
                  className="btn btn-success"
                  onClick={() => WarningNotifier()}
                >
                  Center Warning
                </Button>
                <ToastContainer />
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle tag="h3">Side Alerts Notifications</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="btn-list">
                <Link
                  to="#"
                  className="btn btn-primary notice"
                  onClick={() => {
                    togleTost("Primary");
                  }}
                >
                  Primary
                </Link>
                <Link
                  to="#"
                  className="btn btn-warning warning"
                  onClick={() => LeftNotifier()}
                >
                  Warning
                </Link>
                <Link
                  to="#"
                  className="btn btn-danger error"
                  onClick={() => {
                    togleTost("Error");
                  }}
                >
                  Danger
                </Link>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle tag="h3">Alerts Popovers</CardTitle>
            </CardHeader>
            <CardBody>
              <Button
                color=""
                type="button"
                className="btn btn-success me-2 mb-1"
                id="success"
              >
                Show success
              </Button>
              <UncontrolledPopover placement="bottom" target="success">
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>
                  Well done! You successfully read this important alert
                  message..
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color=""
                type="button"
                className="btn btn-info me-2 mb-1"
                id="popoverinfo"
              >
                Show info
              </Button>
              <UncontrolledPopover placement="top" target="popoverinfo">
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>
                  Heads up! This alert needs your attention, but it's not super
                  important...
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color=""
                type="button"
                className="btn btn-warning me-2 mb-1"
                id="warning"
              >
                Show warning
              </Button>
              <UncontrolledPopover placement="bottom" target="warning">
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>
                  Warning! Best check yo self, you're not looking too good..
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color=""
                type="button"
                className="btn btn-secondary me-2 mb-1"
                id="secondary"
              >
                Show secondary
              </Button>
              <UncontrolledPopover placement="top" target="secondary">
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Error! Please Check u r emial id..</PopoverBody>
              </UncontrolledPopover>
              <Button
                color=""
                type="button"
                className="btn btn-danger me-2 mb-1"
                id="danger"
              >
                Show danger
              </Button>
              <UncontrolledPopover placement="bottom" target="danger">
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>
                  Oh snap! Change a few things up and try submitting again.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color=""
                type="button"
                className="btn btn-primary me-2 mb-1"
                id="primary"
              >
                Show primary
              </Button>
              <UncontrolledPopover placement="top" target="primary">
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>
                  Cool! This alert will close in 3 seconds. The data-delay
                  attribute is in milliseconds.
                </PopoverBody>
              </UncontrolledPopover>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

Notifications.propTypes = {};

Notifications.defaultProps = {};

export default Notifications;
