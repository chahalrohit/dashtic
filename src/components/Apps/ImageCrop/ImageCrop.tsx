import React,{useState,useCallback} from "react";
import Cropper from 'react-easy-crop'
import {
  Card,
  CardBody,
  Button,
  Label,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import pic from "../../../assets/images/photos/23.jpg"
import { PageHeaders } from "../../../Shared/Prism/Prism";

const ImageCrop = () => {
 const [crop, setCrop] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);

  return (
    <div>
       <PageHeaders
      title="Image Crop"
      home="Home"
      name="Apps"
      fonticonsname="Image Crop"
    />

      <Row className="mt-5" id="app">
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle>Image Crop</CardTitle>
            </CardHeader>
            <CardBody className="p-0">
              <Row className="no-gutters">
                <Col lg="5" xl="6" className="border-end">
                  <div className="px-7 py-5">
                    <Cropper
                    
          image={pic}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
        />
                    <div
                      aria-hidden="true"
                      className="modal fade"
                      id="cropmeModal"
                      role="dialog"
                      tabIndex={-1}
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Cropme result</h5>
                            <Button
                              color=""
                              aria-label="Close"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              type="button"
                            >
                              <span aria-hidden="true">&times;</span>
                            </Button>
                          </div>
                          <div className="modal-body text-center">
                            <img alt="cropme" id="cropme-result" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      className="modal fade"
                      id="cropmePosition"
                      role="dialog"
                      tabIndex={-1}
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">
                              Cropme Position output
                            </h5>
                            <Button
                              color=""
                              aria-label="Close"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              type="button"
                            >
                              <span aria-hidden="true">&times;</span>
                            </Button>
                          </div>
                          <div className="modal-body">
                            <pre>{/* <code>{{ position }}</code> */}</pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="7" xl="6">
                  <div className="options px-5 pt-5  border-bottom pb-3">
                    <Row>
                      <Col md="6" className=" mb-4">
                        <div className="title font-weight-semibold text-uppercase mb-3">
                          Viewport Type
                        </div>
                        <select className="form-control  select2">
                          <option value="square">square (default)</option>
                          <option value="circle">circle</option>
                        </select>
                      </Col>
                      <Col md="6" className=" mb-4">
                        <div className="title font-weight-semibold text-uppercase mb-3">
                          transform origin center
                        </div>
                        <select className="form-control select2">
                          <option value="image">image</option>
                          <option value="viewport">viewport (default)</option>
                        </select>
                      </Col>
                    </Row>
                  </div>
                  <div className="options px-5 pt-5  border-bottom pb-3">
                    <div className="title font-weight-semibold text-uppercase mb-3">
                      Border
                    </div>
                    <Row>
                      <Col md="4" className="mb-4">
                        <Label className="text-capitalize">enable</Label>
                        <select className="form-control select2">
                          <option>true (default)</option>
                          <option>false</option>
                        </select>
                      </Col>
                      <Col md="4" className="mb-4">
                        <Label className="text-capitalize">width</Label>
                        <select className="form-control  select2">
                          <option value="2">2 (default)</option>
                          <option value="5">5</option>
                          <option value="10">10</option>
                        </select>
                      </Col>
                      <Col md="4" className="mb-4">
                        <Label className="text-capitalize">color</Label>
                        <select className="form-control  select2">
                          <option value="#fff">white (default)</option>
                          <option value="#f00">red</option>
                          <option value="#00f">bleu</option>
                        </select>
                      </Col>
                    </Row>
                  </div>
                  <div className="options px-5 pt-5  border-bottom pb-3">
                    <div className="title font-weight-semibold text-uppercase mb-3">
                      Zoom
                    </div>
                    <Row>
                      <Col md="4" className="mb-4">
                        <Label className="text-capitalize">enable</Label>
                        <select className="form-control select2">
                          <option>true (default)</option>
                          <option>false</option>
                        </select>
                      </Col>
                      <Col md="4" className="mb-4">
                        <Label className="text-capitalize">mouseWheel</Label>
                        <select className="form-control  select2">
                          <option>true (default)</option>
                          <option>false</option>
                        </select>
                      </Col>
                      <Col md="4" className="mb-4">
                        <Label className="text-capitalize">slider</Label>
                        <select className="form-control  select2">
                          <option>true</option>
                          <option>false (default)</option>
                        </select>
                      </Col>
                    </Row>
                  </div>
                  <div className="options px-5 pt-5  border-bottom pb-3">
                    <div className="title font-weight-semibold text-uppercase mb-3">
                      Rotation
                    </div>
                    <Row>
                      <Col md="4" className="mb-4">
                        <Label className="text-capitalize">enable</Label>
                        <select className="form-control  select2">
                          <option>true (default)</option>
                          <option>false</option>
                        </select>
                      </Col>
                      <Col md="4" className="mb-4">
                        <Label className="text-capitalize">slider</Label>
                        <select className="form-control select2">
                          <option>true</option>
                          <option>false (default)</option>
                        </select>
                      </Col>
                      <Col md="4" className="mb-4">
                        <Label className="text-capitalize">Position</Label>
                        <select className="form-control select2">
                          <option value="left">left</option>
                          <option value="right">right (default)</option>
                        </select>
                      </Col>
                    </Row>
                  </div>
                  <div className="p-5 btn-list">
                    <Button color="" className="btn btn-danger">
                      Reset
                    </Button>
                    <Button color="" className="btn btn-success float-end">
                      Crop me
                    </Button>
                    <Button color="" className="btn btn-primary float-end me-3">
                      Get position
                    </Button>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="12"></Col>
      </Row>
    </div>
  );
};

ImageCrop.propTypes = {};

ImageCrop.defaultProps = {};

export default ImageCrop;
