import React, { useState } from 'react';
import Swal from "sweetalert2";
import { Button, Input, Card, CardBody, CardHeader, Col, Row, Label } from "reactstrap"
import user1 from "../../../assets/images/brand/favicon.png"
import { PageHeaders } from '../../../Shared/Prism/Prism';
const Sweetalerts = () => {

  const [title, settitle] = useState("Congratulations!")
  const [message, setmessage] = useState("New Notification from Dashtic.")

  function Primaryalert() {
    Swal.fire({
      title: "Congratulations!",
      icon: "success",
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#4454c3",
      text: "Your message has been succesfully sent",
    });
  }
  function Warningalert() {
    Swal.fire({
      title: "Some Risk File Is Founded",
      icon: "warning",
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: "Stay on the page",
      confirmButtonText: "Exit",
      cancelButtonColor: "#6259ca",
      text: "Some Virus file is detected your system going to be in Risk",
    });
  }
  //Dangeralert
  function Dangeralert(){
    Swal.fire({
      title: "Something Went Wrong",
      icon: "error",
      allowOutsideClick: false,
      confirmButtonText: "Exit",
      showCancelButton: true,
      cancelButtonText: "Stay on the page",
      cancelButtonColor: "#6259ca",
      text: "Please fix the issue the issue file not loaded & items not found",
    });
  }
  //Infoalert
  function Infoalert() {
    Swal.fire({
      title: "Notification Alert",
      icon: "info",
      allowOutsideClick: false,
      confirmButtonText: "Exit",
      cancelButtonText: "Stay on the page",
      showCancelButton: true,
      cancelButtonColor: "#6259ca",
      text: "your getting some notification from mail please check it",
    });
  }
  function Warningalertbutton() {
    Swal.fire({
      title: title,
      allowOutsideClick: false,
      text: "Your message(close after 2seconds)",
      showConfirmButton: false,
      timer: 2000,
    });
  }
  function Basic() {
    Swal.fire({
      text: message,
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#4454c3",
    });
  }
  function Title() {
    Swal.fire({
      title: title,
      allowOutsideClick: false,
      confirmButtonText: "ok",
      cancelButtonColor: "#4454c3",
      text: message,
    });
  }
  function Infoalertimg() {
    Swal.fire({
      title: title,
      text: message,
      imageUrl: user1,
      imageWidth: 80,
      imageHeight: 80,
      imageAlt: "Custom image",
    });
  }
  const Ajax = () => {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(``)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  }
  const Timer = () => {
    let timerInterval: string | number | NodeJS.Timeout | undefined;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      // didOpen: () => {
      //   Swal.showLoading();
      //   const b = Swal.getHtmlContainer().querySelector("b");
      //   timerInterval = setInterval(() => {
      //     b.textContent = Swal.getTimerLeft();
      //   }, 100);
      // },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        alert("I was closed by the timer");
      }
    });
  };
  return (
    <div>
      <PageHeaders
        title="Sweet Alert"
        home="Home"
        name="Apps"
        fonticonsname="Sweet Alert"
      />
      <Row className='sweetalerts'>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <h3 className="card-title">Sample Sweet Alerts</h3>
            </CardHeader>
            <CardBody className="">
              <Button color="" onClick={Primaryalert} className="btn-success mt-2 me-1" id='click'>success alert</Button>
              <Button color="" onClick={Warningalert} className="btn-warning mt-2 me-1" id='click1'>Warning alert</Button>
              <Button color="" onClick={Dangeralert} className="btn-danger mt-2 me-1" id='click2'>Danger alert</Button>
              <Button color="" onClick={Infoalert} className="btn-info mt-2 me-1" id='click3'>Info alert</Button>
            </CardBody>
          </Card>
          <Card >
            <CardHeader>
              <h3 className="card-title">Forms Sweet-alert</h3>
            </CardHeader>
            <CardBody className="">
              <div className="mb-3">
                <Label>Title</Label>
                <Input type='text' className="form-control" onChange={(ele) => { settitle(ele.target.value) }} placeholder='Title text' id='title' />
              </div>
              <div className="mb-3">
                <Label>Message</Label>
                <Input type='text' className="form-control" onChange={(ele) => { setmessage(ele.target.value) }} placeholder='Your message' id='message' />
              </div>
              <Button color="" onClick={Basic} className="btn-primary mt-2" id='but1'>Simple alert</Button>&nbsp;
              <Button color="" onClick={Title} className="btn-secondary mt-2" id='but2'>Alert with title </Button> &nbsp;
              <Button color="" onClick={Infoalertimg} className="btn-info mt-2" id='but3'>Alert with image</Button> &nbsp;
              <Button color="" onClick={Warningalertbutton} className="btn-warning mt-2" id='but4'>With timer</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row -->

                        <!-- Row --> */}
      <Row className='sweetalerts'>
        <Col sm={12} >
          <Card >
            <CardHeader >
              <h3 className="card-title">Prompt and confirm box Demo</h3>
            </CardHeader>
            <CardBody className="">
              <Button onClick={Timer} color="" className="btn-secondary me-1" id='prompt'>Timer</Button>
              <Button onClick={Ajax} color="" className="btn-primary me-1" id='confirm'>AJAX ALERT</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
Sweetalerts.propTypes = {};

Sweetalerts.defaultProps = {};

export default Sweetalerts;
