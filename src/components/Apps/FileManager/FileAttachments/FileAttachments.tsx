import React from "react";
import { PageHeaders } from "../../../../Shared/Prism/Prism";
import fileimg1 from "../../../../assets/images/photos/fileimage1.jpg";
import photo1 from "../../../../assets/images/photos/1.jpg";
import photo2 from "../../../../assets/images/photos/2.jpg";
import photo3 from "../../../../assets/images/photos/3.jpg";
import photo4 from "../../../../assets/images/photos/4.jpg";
import img1 from "../../../../assets/images/files/image.png";
import doc1 from "../../../../assets/images/files/doc.png";
import file2 from "../../../../assets/images/files/file2.png";
import file1 from "../../../../assets/images/files/file.png";
import { Link } from "react-router-dom";
import { Card,CardTitle, CardBody, CardHeader, Col, Row } from "reactstrap";

const FileAttachments = () => (
  <div>
    <PageHeaders
      title="File Attachments"
      home="Home"
      name="Apps"
      fonticonsname="File Attachments"
    />
    <Row>
      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Coloured Rounded File Attachment</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag tag-attachments rounded-pill bg-primary text-white mt-0">
                <span className="me-2">
                  <i className="mdi mdi-file-image"></i>
                </span>{" "}
                <span className="">Image01..._jpg </span>
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments  rounded-pill bg-info text-white">
                <span className="me-2">
                  <i className="mdi mdi-music"></i>
                </span>
                music-mp3{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill bg-danger text-white">
                <span className="me-2">
                  <i className="mdi mdi-file-video"></i>
                </span>
                video0014...-mp4{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill bg-success text-white">
                <span className="me-2">
                  <i className="mdi mdi-file-excel"></i>
                </span>{" "}
                Document.exl{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill bg-danger text-white">
                <span className="me-2">
                  <i className="mdi mdi-file-pdf"></i>
                </span>
                AMN0012.pdf{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments  rounded-pill bg-primary text-white">
                <span className="me-2">
                  <i className="mdi mdi-zip-box"></i>
                </span>{" "}
                design00123.zip{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill bg-info text-white">
                <span className="me-2">
                  <i className="mdi mdi-file-word"></i>
                </span>
                Document.doc{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill bg-warning text-white text-white">
                <span className="me-2">
                  <i className="mdi mdi-file-powerpoint "></i>
                </span>{" "}
                prsentation.ppt{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments  rounded-pill bg-pink text-white">
                <span className="me-2">
                  <i className="mdi mdi-volume-high"></i>
                </span>
                audio-mp4{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Outline Rounded File Attachment</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag tag-attachments rounded-pill  tag-outline-primary mt-0">
                <span className="me-2">
                  <i className="mdi mdi-file-image"></i>
                </span>{" "}
                Image01..._jpg{" "}
                <Link to="#" className="ms-4 text-primary">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill tag-outline-info">
                <span className="me-2">
                  <i className="mdi mdi-music"></i>
                </span>
                music-mp3{" "}
                <Link to="#" className="ms-4 text-info">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill  tag-outline-danger">
                <span className="me-2">
                  <i className="mdi mdi-file-video"></i>
                </span>
                video0014...-mp4{" "}
                <Link to="#" className="ms-4 text-danger">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill  tag-outline-success">
                <span className="me-2">
                  <i className="mdi mdi-file-excel"></i>
                </span>{" "}
                Document.exl{" "}
                <Link to="#" className="ms-4 text-success">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill  tag-outline-danger">
                <span className="me-2">
                  <i className="mdi mdi-file-pdf"></i>
                </span>
                AMN0012.pdf{" "}
                <Link to="#" className="ms-4 text-danger">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill   tag-outline-primary">
                <span className="me-2">
                  <i className="mdi mdi-zip-box"></i>
                </span>{" "}
                design00123.zip{" "}
                <Link to="#" className="ms-4 text-primary">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill   tag-outline-info">
                <span className="me-2">
                  <i className="mdi mdi-file-word"></i>
                </span>
                Document.doc{" "}
                <Link to="#" className="ms-4 text-info">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill   tag-outline-warning">
                <span className="me-2">
                  <i className="mdi mdi-file-powerpoint "></i>
                </span>{" "}
                prsentation.ppt{" "}
                <Link to="#" className="ms-4 text-warning">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments rounded-pill   tag-outline-pink">
                <span className="me-2">
                  <i className="mdi mdi-volume-high"></i>
                </span>
                audio-mp4{" "}
                <Link to="#" className="ms-4 text-pink">
                  <i className="fe fe-x"></i>
                </Link>
              </span>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Coloured Square File Attachment</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag tag-attachments  bg-primary text-white mt-0">
                <span className="me-2">
                  <i className="mdi mdi-file-image"></i>
                </span>{" "}
                Image01..._jpg{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments   bg-info text-white">
                <span className="me-2">
                  <i className="mdi mdi-music"></i>
                </span>
                music-mp3{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments  bg-danger text-white">
                <span className="me-2">
                  <i className="mdi mdi-file-video"></i>
                </span>
                video0014...-mp4{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments  bg-success text-white">
                <span className="me-2">
                  <i className="mdi mdi-file-excel"></i>
                </span>{" "}
                Document.exl{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments  bg-danger text-white">
                <span className="me-2">
                  <i className="mdi mdi-file-pdf"></i>
                </span>
                AMN0012.pdf{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments   bg-primary text-white">
                <span className="me-2">
                  <i className="mdi mdi-zip-box"></i>
                </span>{" "}
                design00123.zip{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments  bg-info text-white">
                <span className="me-2">
                  <i className="mdi mdi-file-word"></i>
                </span>
                Document.doc{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments  bg-warning text-white text-white">
                <span className="me-2">
                  <i className="mdi mdi-file-powerpoint "></i>
                </span>{" "}
                prsentation.ppt{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments   bg-pink text-white">
                <span className="me-2">
                  <i className="mdi mdi-volume-high"></i>
                </span>
                audio-mp4{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Rounded Square File Attachment</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag tag-attachments   tag-outline-primary mt-0">
                <span className="me-2">
                  <i className="mdi mdi-file-image"></i>
                </span>{" "}
                Image01..._jpg{" "}
                <Link to="#" className="ms-4 text-primary">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments  tag-outline-info">
                <span className="me-2">
                  <i className="mdi mdi-music"></i>
                </span>
                music-mp3{" "}
                <Link to="#" className="ms-4 text-info">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments   tag-outline-danger">
                <span className="me-2">
                  <i className="mdi mdi-file-video"></i>
                </span>
                video0014...-mp4{" "}
                <Link to="#" className="ms-4 text-danger">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments   tag-outline-success">
                <span className="me-2">
                  <i className="mdi mdi-file-excel"></i>
                </span>{" "}
                Document.exl{" "}
                <Link to="#" className="ms-4 text-success">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments   tag-outline-danger">
                <span className="me-2">
                  <i className="mdi mdi-file-pdf"></i>
                </span>
                AMN0012.pdf{" "}
                <Link to="#" className="ms-4 text-danger">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments    tag-outline-primary">
                <span className="me-2">
                  <i className="mdi mdi-zip-box"></i>
                </span>{" "}
                design00123.zip{" "}
                <Link to="#" className="ms-4 text-primary">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments    tag-outline-info">
                <span className="me-2">
                  <i className="mdi mdi-file-word"></i>
                </span>
                Document.doc{" "}
                <Link to="#" className="ms-4 text-info">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments    tag-outline-warning">
                <span className="me-2">
                  <i className="mdi mdi-file-powerpoint "></i>
                </span>{" "}
                prsentation.ppt{" "}
                <Link to="#" className="ms-4 text-warning">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments    tag-outline-pink">
                <span className="me-2">
                  <i className="mdi mdi-volume-high"></i>
                </span>
                audio-mp4{" "}
                <Link to="#" className="ms-4 text-pink">
                  <i className="fe fe-x"></i>
                </Link>
              </span>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Rounded File-Attachment Sizes</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag tag-attachments-sm rounded-pill bg-primary text-white mt-0">
                <span className="me-2">
                  <i className="mdi mdi-file-image tx-20"></i>
                </span>{" "}
                Image01..._jpg{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments  rounded-pill bg-info text-white">
                <span className="me-2">
                  <i className="mdi mdi-music tx-24"></i>
                </span>
                music-mp3{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments-lg rounded-pill bg-danger text-white">
                <span className="me-2">
                  <i className="mdi mdi-file-video tx-24"></i>
                </span>
                video0014...-mp4{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">
              Rounded Outline File-Attachment Sizes
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag tag-attachments-sm rounded-pill tag-outline-warning mt-0">
                <span className="me-2">
                  <i className="mdi mdi-file-image tx-20"></i>
                </span>{" "}
                Image01..._jpg{" "}
                <Link to="#" className="ms-4 text-warning">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments  rounded-pill tag-outline-success">
                <span className="me-2">
                  <i className="mdi mdi-music tx-24"></i>
                </span>
                music-mp3{" "}
                <Link to="#" className="ms-4 text-success">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments-lg rounded-pill tag-outline-pink">
                <span className="me-2">
                  <i className="mdi mdi-file-video tx-24"></i>
                </span>
                video0014...-mp4{" "}
                <Link to="#" className="ms-4 text-pink">
                  <i className="fe fe-x"></i>
                </Link>
              </span>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Square File-Attachment Sizes</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag tag-attachments-sm  bg-primary text-white mt-0">
                <span className="me-2">
                  <i className="mdi mdi-file-image tx-20"></i>
                </span>{" "}
                Image01..._jpg{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments   bg-info text-white">
                <span className="me-2">
                  <i className="mdi mdi-music tx-24"></i>
                </span>
                music-mp3{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments-lg  bg-danger text-white">
                <span className="me-2">
                  <i className="mdi mdi-file-video tx-24"></i>
                </span>
                video0014...-mp4{" "}
                <Link to="#" className="ms-4 text-white">
                  <i className="fe fe-x"></i>
                </Link>
              </span>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Square Outline File-Attachment Sizes</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="tags">
              <span className="tag tag-attachments-sm  tag-outline-warning mt-0">
                <span className="me-2">
                  <i className="mdi mdi-file-image tx-20"></i>
                </span>{" "}
                Image01..._jpg{" "}
                <Link to="#" className="ms-4 text-warning">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments   tag-outline-success">
                <span className="me-2">
                  <i className="mdi mdi-music tx-24"></i>
                </span>
                music-mp3{" "}
                <Link to="#" className="ms-4 text-success">
                  <i className="fe fe-x"></i>
                </Link>
              </span>

              <span className="tag tag-attachments-lg  tag-outline-pink">
                <span className="me-2">
                  <i className="mdi mdi-file-video tx-24"></i>
                </span>
                video0014...-mp4{" "}
                <Link to="#" className="ms-4 text-pink">
                  <i className="fe fe-x"></i>
                </Link>
              </span>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row -->

                        <!-- Row --> */}
    <Row>
      <Col xl="3"lg="6"sm="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Image-attachment</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="h-100  attached-file-grid6">
              <div className="pro-img-box attached-file-image">
                <Link to="#">
                  <img
                    className=" pic-1 pos-relative br-5 w-100"
                    src={photo1}
                    alt="attached-file-image"
                  />
                  <span className="image-pic">123image.jpg</span>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl="3"lg="6"sm="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Image-attachment</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="h-100  attached-file-grid6">
              <div className="pro-img-box attached-file-image">
                <Link to="#">
                  <img
                    className=" pic-1 pos-relative br-5 w-100"
                    src={photo2}
                    alt="attached-file-image"
                  />
                  <span className="image-pic">123image.jpg</span>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl="3"lg="6"sm="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Image-attachment</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="h-100  attached-file-grid6">
              <div className="pro-img-box attached-file-image">
                <Link to="#">
                  <img
                    className=" pic-1 pos-relative br-5 w-100"
                    src={photo3}
                    alt="attached-file-image"
                  />
                  <span className="image-pic">123image.jpg</span>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl="3"lg="6"sm="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Image-attachment</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="h-100  attached-file-grid6">
              <div className="pro-img-box attached-file-image">
                <Link to="#">
                  <img
                    className=" pic-1 pos-relative br-5 w-100"
                    src={photo4}
                    alt="attached-file-image"
                  />
                  <span className="image-pic">123image.jpg</span>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row -->

                        <!-- Row --> */}
    <Row>
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Image File_Attachment Small Size</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap pb-3">
              <div className="file-image-1">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={img1} className="br-5" alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Image01.jpg</span>
              </div>
              <div className="file-image-1">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={doc1} alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Word.doc</span>
              </div>
              <div className="file-image-1">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={file2} alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Excel.xls</span>
              </div>
              <div className="file-image-1">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={file1} alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Document.pdf</span>
              </div>
              <div className="file-image-1">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={fileimg1} className="br-5" alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Image02.jpg</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row -->

                        <!-- Row --> */}
    <Row>
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Image File_Attachment Medium Size</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap pb-3">
              <div className="file-image-1 file-image-md">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={img1} className="br-5" alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Image01.jpg</span>
              </div>
              <div className="file-image-1 file-image-md">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={doc1} alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Word.doc</span>
              </div>
              <div className="file-image-1 file-image-md">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={file2} alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Excel.xls</span>
              </div>
              <div className="file-image-1 file-image-md">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={file1} alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Document.pdf</span>
              </div>
              <div className="file-image-1 file-image-md">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={fileimg1} className="br-5" alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Image02.jpg</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row -->

                        <!-- Row --> */}
    <Row>
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Image File_Attachment Large Size</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="text-wrap pb-3">
              <div className="file-image-1 file-image-lg">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={img1} className="br-5" alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Image01.jpg</span>
              </div>
              <div className="file-image-1 file-image-lg">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={doc1} alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Word.doc</span>
              </div>
              <div className="file-image-1 file-image-lg">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={file2} alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Excel.xls</span>
              </div>
              <div className="file-image-1 file-image-lg">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={file1} alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Document.pdf</span>
              </div>
              <div className="file-image-1 file-image-lg">
                <div className="product-image">
                  <Link to={`${import.meta.env.BASE_URL}apps/filemanager/filedetails`}>
                    <img src={fileimg1} className="br-5" alt="" />
                  </Link>
                  <ul className="icons">
                    <li>
                      <Link to="#" className="bg-danger">
                        <i className="fe fe-trash"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-pink">
                        <i className="fe fe-download"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="bg-primary">
                        <i className="fe fe-eye"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <span className="file-name-1">Image02.jpg</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

FileAttachments.propTypes = {};

FileAttachments.defaultProps = {};

export default FileAttachments;
