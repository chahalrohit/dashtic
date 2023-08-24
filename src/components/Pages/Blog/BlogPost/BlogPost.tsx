import React, { useState } from "react";
import { DropzoneArea} from "material-ui-dropzone";
import {
  Card,
  CardBody,
  CardFooter,
  FormGroup,
  Input,
  Col,
  Label,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Wrappers } from "../../../Forms/FormEdit/Wrapper";
import { createStyles, makeStyles } from "@material-ui/core";
import { PageHeaderstyle } from "./../../../../Shared/Prism/Prism";
const BlogPost = () => {
    const useStyles = makeStyles((theme) =>
    createStyles({
      previewChip: {
        minWidth: 160,
        maxWidth: 210,
      },
    })
  );
  const classes = useStyles();
  const Countryoptions = [
    { value: "Select", label: "Select" },
    { value: "IT", label: "IT" },
    { value: "Language", label: "Language" },
    { value: "Science", label: "Science" },
    { value: "Health", label: "Health" },
    { value: "Humanities", label: "Humanities" },
    { value: "Business", label: "Business" },
    { value: "Maths", label: "Maths" },
    { value: "Marketing", label: "Marketing" },
  ];
  const [countryOption, setCountryOption] = useState<any>(null);
  const Instructoroptions = [
    { value: "Select", label: "Select" },
    { value: "Pedro Cox", label: "Pedro Cox" },
    { value: "Glenda Long", label: "Glenda Long" },
    { value: "Joel Anderson", label: "Joel Anderson" },
    { value: "Blanche Henderson", label: "Blanche Henderson" },
  ];
  const [instructorOption, setInstructorOption] = useState<any>(null);

  return (
    <div>
      <PageHeaderstyle
        title="Blog Post"
        home="Home"
        Pages="Pages"
        elements="Blog"
        name="Blog Post"
      />

      <Row>
        <Col lg="12" md="12">
          <Card>
            <CardBody>
              <FormGroup>
                <Label className="form-label text-dark">Course Title</Label>
                <Input
                  type="text"
                  className="form-control"
                  defaultValue="Advanced Web Develpment"
                />
              </FormGroup>
              <FormGroup>
                <Label className="form-label text-dark">Category</Label>
                <Select
                  defaultValue={countryOption}
                  onChange={setCountryOption}
                  options={Countryoptions}
                  placeholder="IT"
                  classNamePrefix="Search"
                />
              </FormGroup>
              <FormGroup>
                <Label className="form-label text-dark">Instructor</Label>
                <Select
                  defaultValue={instructorOption}
                  onChange={setInstructorOption}
                  options={Instructoroptions}
                  placeholder="Pedro Cox"
                  classNamePrefix="Search"
                />
              </FormGroup>
              <FormGroup>
                <Label className="form-label text-dark">Type of mode</Label>
                <div className="d-md-flex ad-post-details">
                  <Label className="custom-control custom-radio me-3">
                    <Input
                      type="radio"
                      className="custom-control-input"
                      name="mode"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <span className="custom-control-label">Online</span>
                  </Label>
                  <Label className="custom-control custom-radio">
                    <Input
                      type="radio"
                      className="custom-control-input"
                      name="mode"
                      defaultValue="option1"
                    />
                    <span className="custom-control-label">Offline</span>
                  </Label>
                </div>
              </FormGroup>
              <FormGroup>
                <div className="ql-wrapper ql-wrapper-demo bg-light">
                  <Wrappers />
                </div>
              </FormGroup>
              <FormGroup>
                <Label className="form-label text-dark">Course Type</Label>
                <div className="d-md-flex ad-post-details">
                  <Label className="custom-control custom-radio me-3">
                    <Input
                      type="radio"
                      className="custom-control-input"
                      name="coursetype"
                      defaultValue="option2"
                      defaultChecked
                    />
                    <span className="custom-control-label">Free</span>
                  </Label>
                  <Label className="custom-control custom-radio">
                    <Input
                      type="radio"
                      className="custom-control-input"
                      name="coursetype"
                      defaultValue="option2"
                    />
                    <span className="custom-control-label">Paid</span>
                  </Label>
                </div>
              </FormGroup>
              <FormGroup className="mb-4 form-group">
                <div>
                <DropzoneArea
                  showPreviews={true}
                  showPreviewsInDropzone={false}
                  useChipsForPreview
                  previewGridProps={{
                    container: { spacing: 1, direction: "row" },
                  }}
                  previewChipProps={{ classes: { root: classes.previewChip } }}
                  previewText="Selected files"
                />
                </div>
              </FormGroup>
              <FormGroup>
                <Label className="form-label">Upload Video URL</Label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="https://videos.com"
                  defaultValue="https://www.youtube.com/embed/tMWkeBIohBs"
                />
              </FormGroup>
              <FormGroup className="control-group form-group  mb-0">
                <Label className="form-label text-dark">
                  Course Post Package
                </Label>
                <div className=" border p-3 br-5">
                  <div className="d-md-flex ad-post-details">
                    <Label className="custom-control custom-radio me-3">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="package"
                        defaultValue="option3"
                        defaultChecked
                      />
                      <span className="custom-control-label">30 Days Free</span>
                    </Label>
                    <Label className="custom-control custom-radio me-3">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="package"
                        defaultValue="option3"
                      />
                      <span className="custom-control-label">
                        60 days / <span className="font-weight-bold">$20</span>
                      </span>
                    </Label>
                    <Label className="custom-control custom-radio me-3">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="package"
                        defaultValue="option3"
                      />
                      <span className="custom-control-label">
                        6months /<span className="font-weight-bold">$50</span>
                      </span>
                    </Label>
                    <Label className="custom-control custom-radio">
                      <Input
                        type="radio"
                        className="custom-control-input"
                        name="package"
                        defaultValue="option3"
                      />
                      <span className="custom-control-label">
                        1 year / <span className="font-weight-bold">$80</span>
                      </span>
                    </Label>
                  </div>
                </div>
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Link to="#" className="btn btn-secondary">
                Save to Draft
              </Link>
              <Link to="#" className="btn btn-primary float-end">
                Publish Now
              </Link>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

BlogPost.propTypes = {};

BlogPost.defaultProps = {};

export default BlogPost;
