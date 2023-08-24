import React,{useEffect} from "react";
import { Card, CardTitle, CardBody, CardHeader } from "reactstrap";
import Swal from "sweetalert2";
import user16 from "../../../assets/images/brand/favicon.png"
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Pagesessiontimeout = () => {
    useEffect (() => { 
        Swal.fire({
            title: 'Session Timeout',
            text: 'Do you want to continue',
            imageUrl:user16,
            confirmButtonText:"Stay Logedin",
            timer: 2000,
           timerProgressBar: true,
          })
    }, [])
  return (
    <div>
<PageHeaders
      title="Session Time Out"
      home="Home"
      name="Apps"
      fonticonsname="Session TimeOut"
    />
      <Card>
        <CardHeader>
          <CardTitle>Session Time Out Demo</CardTitle>
        </CardHeader>
        <CardBody>
          <p className="mg-b-20">
            The Basic Collapse Accordion Styles of Dashtic template
          </p>
          <p className="mg-b-10">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences
          </p>
        </CardBody>
      </Card>
    </div>
  );
};
Pagesessiontimeout.propTypes = {};

Pagesessiontimeout.defaultProps = {};

export default Pagesessiontimeout;
