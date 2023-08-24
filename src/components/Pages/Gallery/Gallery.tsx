import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import { LightGallery } from "./data";

const Gallery = () => {
  return (
    <div>
      <PageHeaders
        title="Gallery"
        home="Home"
        name="Pages"
        fonticonsname="Gallery"
      />
      <Card className="demo-gallery ">
        <CardHeader>
          <h3 className="card-title">Light Gallery</h3>
        </CardHeader>
        <CardBody>
          <LightGallery />
        </CardBody>
      </Card>
    </div>
  );
};
Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
