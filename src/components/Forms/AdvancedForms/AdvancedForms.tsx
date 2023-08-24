import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  Button,
  Col,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
import DatePicker from "react-multi-date-picker";
import Dropzone from "react-dropzone";
import IntlTelInput from "react-intl-tel-input";
import { createStyles, makeStyles } from "@material-ui/core";
import Select from "react-select";
import {Beastoptions,Basicoptions,Usersoptions,Monolithmethod,Classicmethod,Nanomethod,Selectbox,Selectbox1,TransferList1,BasicMutipleSelect,DisabledMutipleSelect,Singleselectdis,Singleselect1,MultipleGroupOption,MutipleSelect,MultipleItems,SelectAll,SelectFilter,CustomisedSelector,SlectBox,Disabled,Multiple,MultipleSelect1,MultipleSelect2,SearchSelect1,SearchSelect2,SearchSelect3,SearchSelect4,
} from "./data";
import { DropzoneArea, DropzoneAreaBase } from "material-ui-dropzone";
import {TimeValidationTimePicker,TimePickerscroll, DynamicTimePicker} from "./data";
import { PageHeaders } from "../../../Shared/Prism/Prism";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


const AdvancedForms = () => {
  const [filespond, setfilespond] = useState<any>([]);
  
  const [files, setFiles] = useState<any>([]);
  const [dates, setDates] = useState<any>();
  const handleAdd = (newFiles:any) => {
    newFiles = newFiles.filter(
      (file:any) => !files.find((f:any) => f.data === file.data)
    );
    setFiles([...files, ...newFiles]);
  };

  const handleDelete = (deleted:any) => {
    setFiles(files.filter((f:any) => f !== deleted));
  };

  //select

  const [beastOption, setBeastOption] = useState<any>(null);
  const [basicOption, setBasicOption] = useState<any>(null);
  const [usersOption, setUsersOption] = useState<any>(null);

  //select
  //MUIdropzonebadge
  const useStyles = makeStyles((theme) =>
    createStyles({
      previewChip: {
        minWidth: 160,
        maxWidth: 210,
      },
    })
  );
  const classes = useStyles();
  //MUIdropzonebadge

  let handleAcceptedFiles=(file:any)=>{
    alert(file);
  }
  
  return (
    <div>
      
      <PageHeaders
      title="Advanced Foms"
      home="Home"
      name="Forms"
      fonticonsname="Advanced Foms"
    />
      <Row>
        <Col lg="12" md="12">
          <Form method="post" className="card">
            <CardHeader>
              <CardTitle tag="h3">File Upload</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xl="4" sm="12">
                  <Dropzone
                    onDrop={(acceptedFiles) => {
                      handleAcceptedFiles(acceptedFiles);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div className="dropzone dz-clickable mb-2">
                        <div
                          className="dz-message needsclick"
                          {...getRootProps()}
                        >
                          <div className="mb-2 mt-5 dropzoneicon ">
                            <i className="mdi mdi-apple-mobileme"></i>
                          </div>
                          <p style={{ color: "#9393b5" }}>
                            Drop files here or click to upload.
                          </p>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                </Col>
                <Col xl="4" sm="12" className="mb-2">
                  <DropzoneAreaBase
                    fileObjects={files}
                    onAdd={handleAdd}
                    onDelete={handleDelete}
                  />
                </Col>
                <Col xl="4" sm="12">
                  <Dropzone
                    disabled
                    onDrop={(acceptedFiles) => {
                      handleAcceptedFiles(acceptedFiles);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div className="dropzone dz-clickable mb-2">
                        <div
                          className="dz-message needsclick"
                          {...getRootProps()}
                        >
                          <div className="mb-2 mt-5 dropzoneicon ">
                            <i className="mdi mdi-apple-mobileme"></i>
                          </div>
                          <p style={{ color: "#9393b5" }}>
                          <del> Drop files here or click to upload.</del>
                          </p>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                </Col>
              </Row>

                    <FilePond className='mt-3 mb-5' 
                    allowMultiple={true} 
                    maxFiles={10} 
                    // server="/api" 
                    files={filespond} 
                    onupdatefiles={setfilespond}
                    allowReorder={true}
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                     />

              <div className="mb-0">
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
            </CardBody>
          </Form>

          <Form method="post" className="card">
            <CardHeader>
              <CardTitle tag="h3">Select2 elements</CardTitle>
            </CardHeader>
            <CardBody>
              <div className="mb-3 ">
                <Label className="form-label">Beast</Label>
                <Select
                  defaultValue={beastOption}
                  onChange={setBeastOption}
                  isSearchable={false}
                  options={Beastoptions}
                  placeholder="Choose one"
                  classNamePrefix="Search"
                />
              </div>
              <div className="mb-3">
                <Label className="form-label">Loading Select2</Label>
                <Select
                  defaultValue={basicOption}
                  onChange={setBasicOption}
                  isSearchable={false}
                  isLoading={true}
                  options={Basicoptions}
                  placeholder="Arizona"
                  classNamePrefix="Search"
                />
              </div>
              <div className="mb-3">
                <Label className="form-label"> Select2 with search box</Label>
                <Select
                  defaultValue={basicOption}
                  onChange={setBasicOption}
                  options={Basicoptions}
                  placeholder="Arizona"
                  isSearchable={true}
                  classNamePrefix="Search"
                />
              </div>
              <div className="mb-0">
                <Label className="form-label">Users list</Label>
                <Select
                  defaultValue={usersOption}
                  onChange={setUsersOption}
                  options={Usersoptions}
                  placeholder="Firefox"
                  isSearchable={true}
                  isMulti
                  classNamePrefix="Search"
                />
              </div>
            </CardBody>
          </Form>
        </Col>
        <Col lg="6">
          <Card>
            <CardHeader>
              <CardTitle tag="h3">Time Picker</CardTitle>
            </CardHeader>
            <CardBody>
              <Label>Default Time Picker:</Label>
              <div className="wd-150 mg-b-30 default-time-picker">
                <div className="input-group">
                  <div className="input-group-text">
                    <div className="">
                      <svg
                        className="svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                        width="18"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.25 12.15L11 13V7h1.5v5.25l4.5 2.67-.75 1.23z"
                          opacity=".3"
                        />
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                    </div>
                    {/* <!-- input-group-text --> */}
                  </div>
                  {/* <!-- input-group-text --> */}
                  <TimeValidationTimePicker />
                </div>
              </div>
              {/* <!-- wd-150 --> */}
              <Label className="mt-4">
                Set the scroll position to local time if no value selected:
              </Label>
              <div className="wd-150 mg-b-30">
                <div className="input-group">
                  <div className="input-group-text">
                    <div className="">
                      <svg
                        className="svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                        width="18"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.25 12.15L11 13V7h1.5v5.25l4.5 2.67-.75 1.23z"
                          opacity=".3"
                        />
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                    </div>
                    {/* <!-- input-group-text --> */}
                  </div>
                  {/* <!-- input-group-text --> */}
                  <TimePickerscroll />
                </div>
              </div>
              {/* <!-- wd-150 --> */}
              <Label className="mt-4 ">
                Dynamically set the time using a Javascript Date object:
              </Label>
              <div className="d-flex">
                <div className="input-group wd-150">
                  <div className="input-group-text">
                    <div className="">
                      <svg
                        className="svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                        width="18"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.25 12.15L11 13V7h1.5v5.25l4.5 2.67-.75 1.23z"
                          opacity=".3"
                        />
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                    </div>
                    {/* <!-- input-group-text --> */}
                  </div>
                  {/* <!-- input-group-text --> */}
                  <DynamicTimePicker />
                </div>
                {/* <!-- input-group --> */}
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardHeader>
              <CardTitle tag="h3">Color Picker</CardTitle>
            </CardHeader>
            <CardBody>
              <p className=" mb-1">
                Same way you select color in Adobe Photoshop.
              </p>
              <div className="pickr-container2">
                <Nanomethod />
              </div>
              {/* <Input id="colorpicker" type="text"/> */}
              <p className="mt-3  mb-1">
                You can allow alpha transparency selection.
              </p>
              <div className="pickr-container">
                <Classicmethod />
              </div>
              {/* <Input id="showAlpha" type="text"/> */}
              <p className="mt-4 mb-1">
                Show pallete only. If you'd like, spectrum can show the palettes
                you specify, and nothing else.
              </p>
              <div className="pickr-container1">
                <Monolithmethod />
              </div>
              {/* <Input id="showPaletteOnly" type="text"/> */}
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardHeader>
              <CardTitle>Default Date picker</CardTitle>
            </CardHeader>
            <CardBody>
              <p className="mg-b-20 mg-sm-b-40">
                The datepicker is tied to a standard form input field. Click on
                the input to open an interactive calendar in a small overlay. If
                a date is chosen, feedback is shown as the input's value.
              </p>
              <div className="wd-200 mg-b-30">
                <div className="input-group">
                  <div className="input-group-text">
                    <div className="">
                      <svg
                        className="svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                        width="18"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z" />
                        <path d="M4 5.01h16V8H4z" opacity=".3" />
                      </svg>
                    </div>
                  </div>
                  <DatePicker
                    className="form-control"
                    placeholder="Date Range"
                    value={dates}
                    onChange={setDates}
                    multiple
                    numberOfMonths={1}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardHeader>
              <CardTitle>Multiple Months </CardTitle>
            </CardHeader>
            <CardBody>
              <p className="mg-b-20 mg-sm-b-40">
                The datepicker is tied to a standard form input field. Click on
                the input to open an interactive calendar in a small overlay. If
                a date is chosen, feedback is shown as the input's value.
              </p>
              <div className="wd-200 mg-b-30">
                <div className="input-group">
                  <div className="input-group-text">
                    <div className="">
                      <svg
                        className="svg-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        height="18"
                        viewBox="0 0 24 24"
                        width="18"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z" />
                        <path d="M4 5.01h16V8H4z" opacity=".3" />
                      </svg>
                    </div>
                  </div>
                  <DatePicker
                    className="form-control"
                    placeholder="MM/DD/YYYY"
                    numberOfMonths={2}
                    plugins={[]}
                  />
                  
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle>Multiple Select Styles</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="6">
                  <div className="mb-3">
                    <Label className="form-label">Basic MutipleSelect</Label>
                    <BasicMutipleSelect />
                  </div>
                  <div className="mb-3">
                    <Label className="form-label">Disabled MutipleSelect</Label>
                    <DisabledMutipleSelect />
                  </div>
                  <div className="mb-3">
                    <Label className="form-label">
                      Single Group Disabled MutipleSelect
                    </Label>
                    <Singleselectdis />
                  </div>
                  <div className="mb-3">
                    <Label className="form-label">
                      Multiple Items With Group-Option
                    </Label>

                    <MultipleGroupOption />
                  </div>
                  <div className="mb-3">
                    <Label className="form-label">Single Row</Label>

                    <Singleselect1 />
                  </div>
                </Col>
                <Col lg="6">
                  <div className="mb-3">
                    <Label className="form-label">MutipleSelect</Label>

                    <MutipleSelect />
                  </div>

                  <div className="mb-3">
                    <Label className="form-label">Multiple Items</Label>

                    <MultipleItems />
                  </div>
                  <div className="mb-3">
                    <Label className="form-label">Single Select</Label>

                    <SelectAll />
                  </div>
                  <div className="mb-3">
                    <Label className="form-label">Search Select Filter</Label>

                    <SelectFilter />
                  </div>
                  <div className="mb-0">
                    <Label className="form-label">Custom Style</Label>

                    <CustomisedSelector />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card className="">
            <CardHeader>
              <CardTitle>Select All Styles</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="6" md="12">
                  <Row className="mb-3 row">
                    <Label className="col-md-12 form-label">
                      Single Select:
                    </Label>
                    <Col md="12">
                        <SlectBox />
                    </Col>
                  </Row>
                  <Row className="mb-3 row">
                    <Label className="col-md-12 form-label">
                      Disabled Select:
                    </Label>
                    <Col md="12">
                        <Disabled />
                    </Col>
                  </Row>
                 
                </Col>
                <Col lg="6" md="12">
                  <Row className="mb-3">
                    <Label className="col-md-12 form-label">
                      Multiple Select:
                    </Label>
                    <Col md="12">
                    <Multiple />
                      
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Label className="col-md-12 form-label">
                      Disabled Select:
                    </Label>
                    <Col md="12">
                    <Disabled />
                    </Col>
                  </Row>
                </Col>
                <Col lg="6" md="12">
                  <Row className="mb-3">
                    <Label className="col-md-12 form-label">
                      Multiple Select-1:
                    </Label>
                    <Col md="12">
                    <MultipleSelect1 />
                    </Col>
                  </Row>
                  <div className="mb-3 row ">
                    <Label className="col-md-12 form-label">
                      Multiple Select-2:
                    </Label>
                    <Col md="12">
                    <MultipleSelect2 />
                    </Col>
                  </div>
                  <Row className="mb-3">
                    <Label className="col-md-12 form-label">
                      Search Select-1:
                    </Label>
                    <Col md="12">
                       <SearchSelect1 />
                      
                    </Col>
                  </Row>
                </Col>
                <Col lg="6" md="12">
                  <Row className="mb-3">
                    <Label className="col-md-12 form-label">
                      Search Select-2:
                    </Label>
                    <Col md="12">
                    <SearchSelect2 />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Label className="col-md-12 form-label">
                      Search Select-3:
                    </Label>
                    <Col md="12">
                    <SearchSelect3 />
                      
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Label className="col-md-12 form-label">
                      Search Select-4:
                    </Label>
                    <Col md="12">
                    <SearchSelect4 />
                      
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Dual List Box</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="12">
                  <Card className="shadow-none border">
                    <CardBody>
                      <div className="transfer data-transfer1">
                        <TransferList1 />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Select Box</CardTitle>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xl="6" md="12">
                  <FormGroup className="mb-5 mb-lg-0">
                    
                    <Selectbox1 />
                  </FormGroup>
                </Col>
                <Col xl="6" md="12">
                  <FormGroup>
                    <Selectbox />
                    
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row-->

                        <!-- Row --> */}
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle>Country selector</CardTitle>
            </CardHeader>
            <CardBody>
              <Form className="d-flex">
                <IntlTelInput
                  inputClassName="form-control "
                />
                <Button color="" type="submit" className="btn btn-primary ms-1">
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
AdvancedForms.propTypes = {};

AdvancedForms.defaultProps = {};

export default AdvancedForms;
