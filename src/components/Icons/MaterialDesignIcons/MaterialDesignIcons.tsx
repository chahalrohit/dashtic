import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const MaterialDesignIcons = () => (
  <div>
    <PageHeaders
      title="Material Design Icons"
      home="Home"
      name="Icons"
      fonticonsname="Material Design Icons"
    />
    <Row>
      <Col md={12}>
        <Card>
          <CardHeader>
            <h3 className="card-title">Material Design Icons</h3>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={12} sm={12} className=" mb-4">
                <p className="mb-2">
                  Simply beautiful open source icons. For more info{" "}
                  <a href="https://materialdesignicons.com" target="_blank" className="text-primary">
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="mdi mdi-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col sm={12} lg={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item" id="mdi-access-point">
                      <i
                        className="mdi mdi-access-point"
                        data-bs-toggle="tooltip"
                        title="mdi-access-point"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-access-point"
                    >
                      mdi-access-point
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-access-point-network"
                    >
                      <i
                        className="mdi mdi-access-point-network"
                        data-bs-toggle="tooltip"
                        title="mdi-access-point-network"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-access-point-network"
                    >
                      mdi-access-point-network
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account">
                      <i
                        className="mdi mdi-account"
                        data-bs-toggle="tooltip"
                        title="mdi-account"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-account">
                      mdi-account
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-alert">
                      <i
                        className="mdi mdi-account-alert"
                        data-bs-toggle="tooltip"
                        title="mdi-account-alert"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-alert"
                    >
                      mdi-account-alert
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-box">
                      <i
                        className="mdi mdi-account-box"
                        data-bs-toggle="tooltip"
                        title="mdi-account-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-box"
                    >
                      mdi-account-box
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-account-box-outline"
                    >
                      <i
                        className="mdi mdi-account-box-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-account-box-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-box-outline"
                    >
                      mdi-account-box-outline
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-account-card-details"
                    >
                      <i
                        className="mdi mdi-account-card-details"
                        data-bs-toggle="tooltip"
                        title="mdi-account-card-details"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-card-details"
                    >
                      mdi-account-card-details
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-check">
                      <i
                        className="mdi mdi-account-check"
                        data-bs-toggle="tooltip"
                        title="mdi-account-check"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-check"
                    >
                      mdi-account-check
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-circle">
                      <i
                        className="mdi mdi-account-circle"
                        data-bs-toggle="tooltip"
                        title="mdi-account-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-circle"
                    >
                      mdi-account-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-convert">
                      <i
                        className="mdi mdi-account-convert"
                        data-bs-toggle="tooltip"
                        title="mdi-account-convert"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-convert"
                    >
                      mdi-account-convert
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-edit">
                      <i
                        className="mdi mdi-account-edit"
                        data-bs-toggle="tooltip"
                        title="mdi-account-edit"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-edit"
                    >
                      mdi-account-edit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-key">
                      <i
                        className="mdi mdi-account-key"
                        data-bs-toggle="tooltip"
                        title="mdi-account-key"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-key"
                    >
                      mdi-account-key
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-location">
                      <i
                        className="mdi mdi-account-location"
                        data-bs-toggle="tooltip"
                        title="mdi-account-location"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-location"
                    >
                      mdi-account-location
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-minus">
                      <i
                        className="mdi mdi-account-minus"
                        data-bs-toggle="tooltip"
                        title="mdi-account-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-minus"
                    >
                      mdi-account-minus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-multiple">
                      <i
                        className="mdi mdi-account-multiple"
                        data-bs-toggle="tooltip"
                        title="mdi-account-multiple"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-multiple"
                    >
                      mdi-account-multiple
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-account-multiple-minus"
                    >
                      <i
                        className="mdi mdi-account-multiple-minus"
                        data-bs-toggle="tooltip"
                        title="mdi-account-multiple-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-multiple-minus"
                    >
                      mdi-account-multiple-minus
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-account-multiple-outline"
                    >
                      <i
                        className="mdi mdi-account-multiple-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-account-multiple-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-multiple-outline"
                    >
                      mdi-account-multiple-outline
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-account-multiple-plus"
                    >
                      <i
                        className="mdi mdi-account-multiple-plus"
                        data-bs-toggle="tooltip"
                        title="mdi-account-multiple-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-multiple-plus"
                    >
                      mdi-account-multiple-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-network">
                      <i
                        className="mdi mdi-account-network"
                        data-bs-toggle="tooltip"
                        title="mdi-account-network"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-network"
                    >
                      mdi-account-network
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-off">
                      <i
                        className="mdi mdi-account-off"
                        data-bs-toggle="tooltip"
                        title="mdi-account-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-off"
                    >
                      mdi-account-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-outline">
                      <i
                        className="mdi mdi-account-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-account-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-outline"
                    >
                      mdi-account-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-plus">
                      <i
                        className="mdi mdi-account-plus"
                        data-bs-toggle="tooltip"
                        title="mdi-account-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-plus"
                    >
                      mdi-account-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-remove">
                      <i
                        className="mdi mdi-account-remove"
                        data-bs-toggle="tooltip"
                        title="mdi-account-remove"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-remove"
                    >
                      mdi-account-remove
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-search">
                      <i
                        className="mdi mdi-account-search"
                        data-bs-toggle="tooltip"
                        title="mdi-account-search"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-search"
                    >
                      mdi-account-search
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-settings">
                      <i
                        className="mdi mdi-account-settings"
                        data-bs-toggle="tooltip"
                        title="mdi-account-settings"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-settings"
                    >
                      mdi-account-settings
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-account-settings-variant"
                    >
                      <i
                        className="mdi mdi-account-settings-variant"
                        data-bs-toggle="tooltip"
                        title="mdi-account-settings-variant"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-settings-variant"
                    >
                      mdi-account-settings-variant
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-star">
                      <i
                        className="mdi mdi-account-star"
                        data-bs-toggle="tooltip"
                        title="mdi-account-star"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-star"
                    >
                      mdi-account-star
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-account-switch">
                      <i
                        className="mdi mdi-account-switch"
                        data-bs-toggle="tooltip"
                        title="mdi-account-switch"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-account-switch"
                    >
                      mdi-account-switch
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-adjust">
                      <i
                        className="mdi mdi-adjust"
                        data-bs-toggle="tooltip"
                        title="mdi-adjust"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-adjust">
                      mdi-adjust
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-air-conditioner">
                      <i
                        className="mdi mdi-air-conditioner"
                        data-bs-toggle="tooltip"
                        title="mdi-air-conditioner"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-air-conditioner"
                    >
                      mdi-air-conditioner
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-airballoon">
                      <i
                        className="mdi mdi-airballoon"
                        data-bs-toggle="tooltip"
                        title="mdi-airballoon"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-airballoon"
                    >
                      mdi-airballoon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-airplane">
                      <i
                        className="mdi mdi-airplane"
                        data-bs-toggle="tooltip"
                        title="mdi-airplane"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-airplane">
                      mdi-airplane
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-airplane-landing">
                      <i
                        className="mdi mdi-airplane-landing"
                        data-bs-toggle="tooltip"
                        title="mdi-airplane-landing"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-airplane-landing"
                    >
                      mdi-airplane-landing
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-airplane-off">
                      <i
                        className="mdi mdi-airplane-off"
                        data-bs-toggle="tooltip"
                        title="mdi-airplane-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-airplane-off"
                    >
                      mdi-airplane-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-airplane-takeoff">
                      <i
                        className="mdi mdi-airplane-takeoff"
                        data-bs-toggle="tooltip"
                        title="mdi-airplane-takeoff"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-airplane-takeoff"
                    >
                      mdi-airplane-takeoff
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-airplay">
                      <i
                        className="mdi mdi-airplay"
                        data-bs-toggle="tooltip"
                        title="mdi-airplay"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-airplay">
                      mdi-airplay
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alarm">
                      <i
                        className="mdi mdi-alarm"
                        data-bs-toggle="tooltip"
                        title="mdi-alarm"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-alarm">
                      mdi-alarm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alarm-bell">
                      <i
                        className="mdi mdi-alarm-bell"
                        data-bs-toggle="tooltip"
                        title="mdi-alarm-bell"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alarm-bell"
                    >
                      mdi-alarm-bell
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alarm-check">
                      <i
                        className="mdi mdi-alarm-check"
                        data-bs-toggle="tooltip"
                        title="mdi-alarm-check"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alarm-check"
                    >
                      mdi-alarm-check
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alarm-light">
                      <i
                        className="mdi mdi-alarm-light"
                        data-bs-toggle="tooltip"
                        title="mdi-alarm-light"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alarm-light"
                    >
                      mdi-alarm-light
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alarm-multiple">
                      <i
                        className="mdi mdi-alarm-multiple"
                        data-bs-toggle="tooltip"
                        title="mdi-alarm-multiple"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alarm-multiple"
                    >
                      mdi-alarm-multiple
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alarm-off">
                      <i
                        className="mdi mdi-alarm-off"
                        data-bs-toggle="tooltip"
                        title="mdi-alarm-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-alarm-off">
                      mdi-alarm-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alarm-plus">
                      <i
                        className="mdi mdi-alarm-plus"
                        data-bs-toggle="tooltip"
                        title="mdi-alarm-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alarm-plus"
                    >
                      mdi-alarm-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alarm-snooze">
                      <i
                        className="mdi mdi-alarm-snooze"
                        data-bs-toggle="tooltip"
                        title="mdi-alarm-snooze"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alarm-snooze"
                    >
                      mdi-alarm-snooze
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-album">
                      <i
                        className="mdi mdi-album"
                        data-bs-toggle="tooltip"
                        title="mdi-album"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-album">
                      mdi-album
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alert">
                      <i
                        className="mdi mdi-alert"
                        data-bs-toggle="tooltip"
                        title="mdi-alert"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-alert">
                      mdi-alert
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alert-box">
                      <i
                        className="mdi mdi-alert-box"
                        data-bs-toggle="tooltip"
                        title="mdi-alert-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-alert-box">
                      mdi-alert-box
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alert-circle">
                      <i
                        className="mdi mdi-alert-circle"
                        data-bs-toggle="tooltip"
                        title="mdi-alert-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alert-circle"
                    >
                      mdi-alert-circle
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-alert-circle-outline"
                    >
                      <i
                        className="mdi mdi-alert-circle-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-alert-circle-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alert-circle-outline"
                    >
                      mdi-alert-circle-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alert-decagram">
                      <i
                        className="mdi mdi-alert-decagram"
                        data-bs-toggle="tooltip"
                        title="mdi-alert-decagram"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alert-decagram"
                    >
                      mdi-alert-decagram
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alert-octagon">
                      <i
                        className="mdi mdi-alert-octagon"
                        data-bs-toggle="tooltip"
                        title="mdi-alert-octagon"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alert-octagon"
                    >
                      mdi-alert-octagon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alert-octagram">
                      <i
                        className="mdi mdi-alert-octagram"
                        data-bs-toggle="tooltip"
                        title="mdi-alert-octagram"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alert-octagram"
                    >
                      mdi-alert-octagram
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alert-outline">
                      <i
                        className="mdi mdi-alert-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-alert-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alert-outline"
                    >
                      mdi-alert-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-all-inclusive">
                      <i
                        className="mdi mdi-all-inclusive"
                        data-bs-toggle="tooltip"
                        title="mdi-all-inclusive"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-all-inclusive"
                    >
                      mdi-all-inclusive
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alpha">
                      <i
                        className="mdi mdi-alpha"
                        data-bs-toggle="tooltip"
                        title="mdi-alpha"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-alpha">
                      mdi-alpha
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-alphabetical">
                      <i
                        className="mdi mdi-alphabetical"
                        data-bs-toggle="tooltip"
                        title="mdi-alphabetical"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-alphabetical"
                    >
                      mdi-alphabetical
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-altimeter">
                      <i
                        className="mdi mdi-altimeter"
                        data-bs-toggle="tooltip"
                        title="mdi-altimeter"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-altimeter">
                      mdi-altimeter
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-amazon">
                      <i
                        className="mdi mdi-amazon"
                        data-bs-toggle="tooltip"
                        title="mdi-amazon"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-amazon">
                      mdi-amazon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-amazon-clouddrive">
                      <i
                        className="mdi mdi-amazon-clouddrive"
                        data-bs-toggle="tooltip"
                        title="mdi-amazon-clouddrive"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-amazon-clouddrive"
                    >
                      mdi-amazon-clouddrive
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-ambulance">
                      <i
                        className="mdi mdi-ambulance"
                        data-bs-toggle="tooltip"
                        title="mdi-ambulance"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-ambulance">
                      mdi-ambulance
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-amplifier">
                      <i
                        className="mdi mdi-amplifier"
                        data-bs-toggle="tooltip"
                        title="mdi-amplifier"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-amplifier">
                      mdi-amplifier
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-anchor">
                      <i
                        className="mdi mdi-anchor"
                        data-bs-toggle="tooltip"
                        title="mdi-anchor"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-anchor">
                      mdi-anchor
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-android">
                      <i
                        className="mdi mdi-android"
                        data-bs-toggle="tooltip"
                        title="mdi-android"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-android">
                      mdi-android
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-android-debug-bridge"
                    >
                      <i
                        className="mdi mdi-android-debug-bridge"
                        data-bs-toggle="tooltip"
                        title="mdi-android-debug-bridge"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-android-debug-bridge"
                    >
                      mdi-android-debug-bridge
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-android-head">
                      <i
                        className="mdi mdi-android-head"
                        data-bs-toggle="tooltip"
                        title="mdi-android-head"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-android-head"
                    >
                      mdi-android-head
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-android-studio">
                      <i
                        className="mdi mdi-android-studio"
                        data-bs-toggle="tooltip"
                        title="mdi-android-studio"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-android-studio"
                    >
                      mdi-android-studio
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-angular">
                      <i
                        className="mdi mdi-angular"
                        data-bs-toggle="tooltip"
                        title="mdi-angular"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-angular">
                      mdi-angular
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-angularjs">
                      <i
                        className="mdi mdi-angularjs"
                        data-bs-toggle="tooltip"
                        title="mdi-angularjs"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-angularjs">
                      mdi-angularjs
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-animation">
                      <i
                        className="mdi mdi-animation"
                        data-bs-toggle="tooltip"
                        title="mdi-animation"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-animation">
                      mdi-animation
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-apple">
                      <i
                        className="mdi mdi-apple"
                        data-bs-toggle="tooltip"
                        title="mdi-apple"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-apple">
                      mdi-apple
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-apple-finder">
                      <i
                        className="mdi mdi-apple-finder"
                        data-bs-toggle="tooltip"
                        title="mdi-apple-finder"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-apple-finder"
                    >
                      mdi-apple-finder
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-apple-ios">
                      <i
                        className="mdi mdi-apple-ios"
                        data-bs-toggle="tooltip"
                        title="mdi-apple-ios"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-apple-ios">
                      mdi-apple-ios
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-apple-keyboard-caps"
                    >
                      <i
                        className="mdi mdi-apple-keyboard-caps"
                        data-bs-toggle="tooltip"
                        title="mdi-apple-keyboard-caps"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-apple-keyboard-caps"
                    >
                      mdi-apple-keyboard-caps
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-apple-keyboard-command"
                    >
                      <i
                        className="mdi mdi-apple-keyboard-command"
                        data-bs-toggle="tooltip"
                        title="mdi-apple-keyboard-command"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-apple-keyboard-command"
                    >
                      mdi-apple-keyboard-command
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-apple-keyboard-control"
                    >
                      <i
                        className="mdi mdi-apple-keyboard-control"
                        data-bs-toggle="tooltip"
                        title="mdi-apple-keyboard-control"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-apple-keyboard-control"
                    >
                      mdi-apple-keyboard-control
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-apple-keyboard-option"
                    >
                      <i
                        className="mdi mdi-apple-keyboard-option"
                        data-bs-toggle="tooltip"
                        title="mdi-apple-keyboard-option"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-apple-keyboard-option"
                    >
                      mdi-apple-keyboard-option
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-apple-keyboard-shift"
                    >
                      <i
                        className="mdi mdi-apple-keyboard-shift"
                        data-bs-toggle="tooltip"
                        title="mdi-apple-keyboard-shift"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-apple-keyboard-shift"
                    >
                      mdi-apple-keyboard-shift
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-apple-mobileme">
                      <i
                        className="mdi mdi-apple-mobileme"
                        data-bs-toggle="tooltip"
                        title="mdi-apple-mobileme"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-apple-mobileme"
                    >
                      mdi-apple-mobileme
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-apple-safari">
                      <i
                        className="mdi mdi-apple-safari"
                        data-bs-toggle="tooltip"
                        title="mdi-apple-safari"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-apple-safari"
                    >
                      mdi-apple-safari
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-application">
                      <i
                        className="mdi mdi-application"
                        data-bs-toggle="tooltip"
                        title="mdi-application"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-application"
                    >
                      mdi-application
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-approval">
                      <i
                        className="mdi mdi-approval"
                        data-bs-toggle="tooltip"
                        title="mdi-approval"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-approval">
                      mdi-approval
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-apps">
                      <i
                        className="mdi mdi-apps"
                        data-bs-toggle="tooltip"
                        title="mdi-apps"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-apps">
                      mdi-apps
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-archive">
                      <i
                        className="mdi mdi-archive"
                        data-bs-toggle="tooltip"
                        title="mdi-archive"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-archive">
                      mdi-archive
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrange-bring-forward"
                    >
                      <i
                        className="mdi mdi-arrange-bring-forward"
                        data-bs-toggle="tooltip"
                        title="mdi-arrange-bring-forward"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrange-bring-forward"
                    >
                      mdi-arrange-bring-forward
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrange-send-to-back"
                    >
                      <i
                        className="mdi mdi-arrange-send-to-back"
                        data-bs-toggle="tooltip"
                        title="mdi-arrange-send-to-back"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrange-send-to-back"
                    >
                      mdi-arrange-send-to-back
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrange-bring-to-front"
                    >
                      <i
                        className="mdi mdi-arrange-bring-to-front"
                        data-bs-toggle="tooltip"
                        title="mdi-arrange-bring-to-front"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrange-bring-to-front"
                    >
                      mdi-arrange-bring-to-front
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrange-send-backward"
                    >
                      <i
                        className="mdi mdi-arrange-send-backward"
                        data-bs-toggle="tooltip"
                        title="mdi-arrange-send-backward"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrange-send-backward"
                    >
                      mdi-arrange-send-backward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-all">
                      <i
                        className="mdi mdi-arrow-all"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-all"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-arrow-all">
                      mdi-arrow-all
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-bottom-left">
                      <i
                        className="mdi mdi-arrow-bottom-left"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-bottom-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-bottom-left"
                    >
                      mdi-arrow-bottom-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-bottom-right">
                      <i
                        className="mdi mdi-arrow-bottom-right"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-bottom-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-bottom-right"
                    >
                      mdi-arrow-bottom-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-collapse">
                      <i
                        className="mdi mdi-arrow-collapse"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-collapse"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-collapse"
                    >
                      mdi-arrow-collapse
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-collapse-all">
                      <i
                        className="mdi mdi-arrow-collapse-all"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-collapse-all"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-collapse-all"
                    >
                      mdi-arrow-collapse-all
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-collapse-down"
                    >
                      <i
                        className="mdi mdi-arrow-collapse-down"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-collapse-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-collapse-down"
                    >
                      mdi-arrow-collapse-down
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-collapse-left"
                    >
                      <i
                        className="mdi mdi-arrow-collapse-left"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-collapse-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-collapse-left"
                    >
                      mdi-arrow-collapse-left
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-collapse-right"
                    >
                      <i
                        className="mdi mdi-arrow-collapse-right"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-collapse-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-collapse-right"
                    >
                      mdi-arrow-collapse-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-collapse-up">
                      <i
                        className="mdi mdi-arrow-collapse-up"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-collapse-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-collapse-up"
                    >
                      mdi-arrow-collapse-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-down">
                      <i
                        className="mdi mdi-arrow-down"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-down"
                    >
                      mdi-arrow-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-down-bold">
                      <i
                        className="mdi mdi-arrow-down-bold"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-down-bold"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-down-bold"
                    >
                      mdi-arrow-down-bold
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-down-bold-box"
                    >
                      <i
                        className="mdi mdi-arrow-down-bold-box"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-down-bold-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-down-bold-box"
                    >
                      mdi-arrow-down-bold-box
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-down-bold-box-outline"
                    >
                      <i
                        className="mdi mdi-arrow-down-bold-box-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-down-bold-box-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-down-bold-box-outline"
                    >
                      mdi-arrow-down-bold-box-outline
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-down-bold-circle"
                    >
                      <i
                        className="mdi mdi-arrow-down-bold-circle"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-down-bold-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-down-bold-circle"
                    >
                      mdi-arrow-down-bold-circle
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-down-bold-circle"
                    >
                      <i
                        className="mdi mdi-arrow-down-bold-circle-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-down-bold-circle-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-down-bold-circle"
                    >
                      mdi-arrow-down-bold-circle-outline
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-down-bold-hexagon-outline"
                    >
                      <i
                        className="mdi mdi-arrow-down-bold-hexagon-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-down-bold-hexagon-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-down-bold-hexagon-outline"
                    >
                      mdi-arrow-down-bold-hexagon-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-down-box">
                      <i
                        className="mdi mdi-arrow-down-box"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-down-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-down-box"
                    >
                      mdi-arrow-down-box
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-down-drop-circle"
                    >
                      <i
                        className="mdi mdi-arrow-down-drop-circle"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-down-drop-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-down-drop-circle"
                    >
                      mdi-arrow-down-drop-circle
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-down-drop-circle"
                    >
                      <i
                        className="mdi mdi-arrow-down-drop-circle-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-down-drop-circle-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-down-drop-circle"
                    >
                      mdi-arrow-down-drop-circle-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-down-thick">
                      <i
                        className="mdi mdi-arrow-down-thick"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-down-thick"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-down-thick"
                    >
                      mdi-arrow-down-thick
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-expand">
                      <i
                        className="mdi mdi-arrow-expand"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-expand"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-expand"
                    >
                      mdi-arrow-expand
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-expand-all">
                      <i
                        className="mdi mdi-arrow-expand-all"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-expand-all"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-expand-all"
                    >
                      mdi-arrow-expand-all
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-expand-down">
                      <i
                        className="mdi mdi-arrow-expand-down"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-expand-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-expand-down"
                    >
                      mdi-arrow-expand-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-expand-left">
                      <i
                        className="mdi mdi-arrow-expand-left"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-expand-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-expand-left"
                    >
                      mdi-arrow-expand-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-expand-right">
                      <i
                        className="mdi mdi-arrow-expand-right"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-expand-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-expand-right"
                    >
                      mdi-arrow-expand-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-expand-up">
                      <i
                        className="mdi mdi-arrow-expand-up"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-expand-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-expand-up"
                    >
                      mdi-arrow-expand-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-left">
                      <i
                        className="mdi mdi-arrow-left"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-left"
                    >
                      mdi-arrow-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-left-bold">
                      <i
                        className="mdi mdi-arrow-left-bold"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-left-bold"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-left-bold"
                    >
                      mdi-arrow-left-bold
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-left-bold-box"
                    >
                      <i
                        className="mdi mdi-arrow-left-bold-box"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-left-bold-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-left-bold-box"
                    >
                      mdi-arrow-left-bold-box
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-left-bold-box-outline"
                    >
                      <i
                        className="mdi mdi-arrow-left-bold-box-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-left-bold-box-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-left-bold-box-outline"
                    >
                      mdi-arrow-left-bold-box-outline
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-left-bold-circle"
                    >
                      <i
                        className="mdi mdi-arrow-left-bold-circle"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-left-bold-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-left-bold-circle"
                    >
                      mdi-arrow-left-bold-circle
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-left-bold-circle-outline"
                    >
                      <i
                        className="mdi mdi-arrow-left-bold-circle-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-left-bold-circle-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-left-bold-circle-outline"
                    >
                      mdi-arrow-left-bold-circle-outline
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-left-bold-hexagon-outline"
                    >
                      <i
                        className="mdi mdi-arrow-left-bold-hexagon-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-left-bold-hexagon-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-left-bold-hexagon-outline"
                    >
                      mdi-arrow-left-bold-hexagon-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-left-box">
                      <i
                        className="mdi mdi-arrow-left-box"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-left-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-left-box"
                    >
                      mdi-arrow-left-box
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-left-drop-circle"
                    >
                      <i
                        className="mdi mdi-arrow-left-drop-circle"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-left-drop-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-left-drop-circle"
                    >
                      mdi-arrow-left-drop-circle
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-left-drop-circle-outline"
                    >
                      <i
                        className="mdi mdi-arrow-left-drop-circle-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-left-drop-circle-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-left-drop-circle-outline"
                    >
                      mdi-arrow-left-drop-circle-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-left-thick">
                      <i
                        className="mdi mdi-arrow-left-thick"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-left-thick"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-left-thick"
                    >
                      mdi-arrow-left-thick
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-right">
                      <i
                        className="mdi mdi-arrow-right"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-right"
                    >
                      mdi-arrow-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-right-bold">
                      <i
                        className="mdi mdi-arrow-right-bold"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-right-bold"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-right-bold"
                    >
                      mdi-arrow-right-bold
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-right-bold-box"
                    >
                      <i
                        className="mdi mdi-arrow-right-bold-box"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-right-bold-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-right-bold-box"
                    >
                      mdi-arrow-right-bold-box
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-right-bold-box-ooutline"
                    >
                      <i
                        className="mdi mdi-arrow-right-bold-box-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-right-bold-box-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-right-bold-box-ooutline"
                    >
                      mdi-arrow-right-bold-box-outline
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-right-bold-circle"
                    >
                      <i
                        className="mdi mdi-arrow-right-bold-circle"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-right-bold-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-right-bold-circle"
                    >
                      mdi-arrow-right-bold-circle
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-right-bold-circle-outline"
                    >
                      <i
                        className="mdi mdi-arrow-right-bold-circle-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-right-bold-circle-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-right-bold-circle-outline"
                    >
                      mdi-arrow-right-bold-circle-outline
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-right-bold-hexagon-outline"
                    >
                      <i
                        className="mdi mdi-arrow-right-bold-hexagon-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-right-bold-hexagon-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-right-bold-hexagon-outline"
                    >
                      mdi-arrow-right-bold-hexagon-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-right-box">
                      <i
                        className="mdi mdi-arrow-right-box"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-right-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-right-box"
                    >
                      mdi-arrow-right-box
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-right-drop-circle"
                    >
                      <i
                        className="mdi mdi-arrow-right-drop-circle"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-right-drop-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-right-drop-circle"
                    >
                      mdi-arrow-right-drop-circle
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-right-drop-circle-outline"
                    >
                      <i
                        className="mdi mdi-arrow-right-drop-circle-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-right-drop-circle-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-right-drop-circle-outline"
                    >
                      mdi-arrow-right-drop-circle-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-right-thick">
                      <i
                        className="mdi mdi-arrow-right-thick"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-right-thick"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-right-thick"
                    >
                      mdi-arrow-right-thick
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-top-left">
                      <i
                        className="mdi mdi-arrow-top-left"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-top-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-top-left"
                    >
                      mdi-arrow-top-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-top-right">
                      <i
                        className="mdi mdi-arrow-top-right"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-top-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-top-right"
                    >
                      mdi-arrow-top-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-up">
                      <i
                        className="mdi mdi-arrow-up"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-arrow-up">
                      mdi-arrow-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-up-bold">
                      <i
                        className="mdi mdi-arrow-up-bold"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-up-bold"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-up-bold"
                    >
                      mdi-arrow-up-bold
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-up-bold-box">
                      <i
                        className="mdi mdi-arrow-up-bold-box"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-up-bold-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-up-bold-box"
                    >
                      mdi-arrow-up-bold-box
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-up-bold-box-outline"
                    >
                      <i
                        className="mdi mdi-arrow-up-bold-box-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-up-bold-box-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-up-bold-box-outline"
                    >
                      mdi-arrow-up-bold-box-outline
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-up-bold-circle"
                    >
                      <i
                        className="mdi mdi-arrow-up-bold-circle"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-up-bold-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-up-bold-circle"
                    >
                      mdi-arrow-up-bold-circle
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-up-bold-circle-outline"
                    >
                      <i
                        className="mdi mdi-arrow-up-bold-circle-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-up-bold-circle-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-up-bold-circle-outline"
                    >
                      mdi-arrow-up-bold-circle-outline
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-up-bold-hexagon-outline"
                    >
                      <i
                        className="mdi mdi-arrow-up-bold-hexagon-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-up-bold-hexagon-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-up-bold-hexagon-outline"
                    >
                      mdi-arrow-up-bold-hexagon-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-up-box">
                      <i
                        className="mdi mdi-arrow-up-box"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-up-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-up-box"
                    >
                      mdi-arrow-up-box
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-up-drop-circle"
                    >
                      <i
                        className="mdi mdi-arrow-up-drop-circle"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-up-drop-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-up-drop-circle"
                    >
                      mdi-arrow-up-drop-circle
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-arrow-up-drop-circle-outline"
                    >
                      <i
                        className="mdi mdi-arrow-up-drop-circle-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-up-drop-circle-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-up-drop-circle-outline"
                    >
                      mdi-arrow-up-drop-circle-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-arrow-up-thick">
                      <i
                        className="mdi mdi-arrow-up-thick"
                        data-bs-toggle="tooltip"
                        title="mdi-arrow-up-thick"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-arrow-up-thick"
                    >
                      mdi-arrow-up-thick
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-assistant">
                      <i
                        className="mdi mdi-assistant"
                        data-bs-toggle="tooltip"
                        title="mdi-assistant"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-assistant">
                      mdi-assistant
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-asterisk">
                      <i
                        className="mdi mdi-asterisk"
                        data-bs-toggle="tooltip"
                        title="mdi-asterisk"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-asterisk">
                      mdi-asterisk
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-at">
                      <i
                        className="mdi mdi-at"
                        data-bs-toggle="tooltip"
                        title="mdi-at"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-at">
                      mdi-at
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-atom">
                      <i
                        className="mdi mdi-atom"
                        data-bs-toggle="tooltip"
                        title="mdi-atom"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-atom">
                      mdi-atom
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-attachment">
                      <i
                        className="mdi mdi-attachment"
                        data-bs-toggle="tooltip"
                        title="mdi-attachment"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-attachment"
                    >
                      mdi-attachment
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-audiobook">
                      <i
                        className="mdi mdi-audiobook"
                        data-bs-toggle="tooltip"
                        title="mdi-audiobook"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-audiobook">
                      mdi-audiobook
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-auto-fix">
                      <i
                        className="mdi mdi-auto-fix"
                        data-bs-toggle="tooltip"
                        title="mdi-auto-fix"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-auto-fix">
                      mdi-auto-fix
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-auto-upload">
                      <i
                        className="mdi mdi-auto-upload"
                        data-bs-toggle="tooltip"
                        title="mdi-auto-upload"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-auto-upload"
                    >
                      mdi-auto-upload
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-autorenew">
                      <i
                        className="mdi mdi-autorenew"
                        data-bs-toggle="tooltip"
                        title="mdi-autorenew"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-autorenew">
                      mdi-autorenew
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-av-timer">
                      <i
                        className="mdi mdi-av-timer"
                        data-bs-toggle="tooltip"
                        title="mdi-av-timer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-av-timer">
                      mdi-av-timer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-baby">
                      <i
                        className="mdi mdi-baby"
                        data-bs-toggle="tooltip"
                        title="mdi-baby"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-baby">
                      mdi-baby
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-baby-buggy">
                      <i
                        className="mdi mdi-baby-buggy"
                        data-bs-toggle="tooltip"
                        title="mdi-baby-buggy"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-baby-buggy"
                    >
                      mdi-baby-buggy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-backburger">
                      <i
                        className="mdi mdi-backburger"
                        data-bs-toggle="tooltip"
                        title="mdi-backburger"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-backburger"
                    >
                      mdi-backburger
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-backspace">
                      <i
                        className="mdi mdi-backspace"
                        data-bs-toggle="tooltip"
                        title="mdi-backspace"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-backspace">
                      mdi-backspace
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-backup-restore">
                      <i
                        className="mdi mdi-backup-restore"
                        data-bs-toggle="tooltip"
                        title="mdi-backup-restore"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-backup-restore"
                    >
                      mdi-backup-restore
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-bandcamp">
                      <i
                        className="mdi mdi-bandcamp"
                        data-bs-toggle="tooltip"
                        title="mdi-bandcamp"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-bandcamp">
                      mdi-bandcamp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-bank">
                      <i
                        className="mdi mdi-bank"
                        data-bs-toggle="tooltip"
                        title="mdi-bank"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-bank">
                      mdi-bank
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-barcode">
                      <i
                        className="mdi mdi-barcode"
                        data-bs-toggle="tooltip"
                        title="mdi-barcode"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-barcode">
                      mdi-barcode
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-barcode-scan">
                      <i
                        className="mdi mdi-barcode-scan"
                        data-bs-toggle="tooltip"
                        title="mdi-barcode-scan"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-barcode-scan"
                    >
                      mdi-barcode-scan
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-barley">
                      <i
                        className="mdi mdi-barley"
                        data-bs-toggle="tooltip"
                        title="mdi-barley"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-barley">
                      mdi-barley
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-barrel">
                      <i
                        className="mdi mdi-barrel"
                        data-bs-toggle="tooltip"
                        title="mdi-barrel"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-barrel">
                      mdi-barrel
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-basecamp">
                      <i
                        className="mdi mdi-basecamp"
                        data-bs-toggle="tooltip"
                        title="mdi-basecamp"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-basecamp">
                      mdi-basecamp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-basket">
                      <i
                        className="mdi mdi-basket"
                        data-bs-toggle="tooltip"
                        title="mdi-basket"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-basket">
                      mdi-basket
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-basket-fill">
                      <i
                        className="mdi mdi-basket-fill"
                        data-bs-toggle="tooltip"
                        title="mdi-basket-fill"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-basket-fill"
                    >
                      mdi-basket-fill
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-basket-unfill">
                      <i
                        className="mdi mdi-basket-unfill"
                        data-bs-toggle="tooltip"
                        title="mdi-basket-unfill"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-basket-unfill"
                    >
                      mdi-basket-unfill
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery">
                      <i
                        className="mdi mdi-battery"
                        data-bs-toggle="tooltip"
                        title="mdi-battery"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-battery">
                      mdi-battery
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-10">
                      <i
                        className="mdi mdi-battery-10"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-10"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-10"
                    >
                      mdi-battery-10
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-20">
                      <i
                        className="mdi mdi-battery-20"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-20"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-20"
                    >
                      mdi-battery-20
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-30">
                      <i
                        className="mdi mdi-battery-30"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-30"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-30"
                    >
                      mdi-battery-30
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-40">
                      <i
                        className="mdi mdi-battery-40"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-40"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-40"
                    >
                      mdi-battery-40
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-50">
                      <i
                        className="mdi mdi-battery-50"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-50"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-50"
                    >
                      mdi-battery-50
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-60">
                      <i
                        className="mdi mdi-battery-60"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-60"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-60"
                    >
                      mdi-battery-60
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-70">
                      <i
                        className="mdi mdi-battery-70"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-70"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-70"
                    >
                      mdi-battery-70
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-80">
                      <i
                        className="mdi mdi-battery-80"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-80"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-80"
                    >
                      mdi-battery-80
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-90">
                      <i
                        className="mdi mdi-battery-90"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-90"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-90"
                    >
                      mdi-battery-90
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-alert">
                      <i
                        className="mdi mdi-battery-alert"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-alert"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-alert"
                    >
                      mdi-battery-alert
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-charging">
                      <i
                        className="mdi mdi-battery-charging"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-charging"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-charging"
                    >
                      mdi-battery-charging
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-battery-charging-100"
                    >
                      <i
                        className="mdi mdi-battery-charging-100"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-charging-100"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-charging-100"
                    >
                      mdi-battery-charging-100
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-battery-charging-20"
                    >
                      <i
                        className="mdi mdi-battery-charging-20"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-charging-20"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-charging-20"
                    >
                      mdi-battery-charging-20
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-battery-charging-30"
                    >
                      <i
                        className="mdi mdi-battery-charging-30"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-charging-30"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-charging-30"
                    >
                      mdi-battery-charging-30
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-battery-charging-40"
                    >
                      <i
                        className="mdi mdi-battery-charging-40"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-charging-40"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-charging-40"
                    >
                      mdi-battery-charging-40
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-battery-charging-60"
                    >
                      <i
                        className="mdi mdi-battery-charging-60"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-charging-60"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-charging-60"
                    >
                      mdi-battery-charging-60
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-battery-charging-80"
                    >
                      <i
                        className="mdi mdi-battery-charging-80"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-charging-80"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-charging-80"
                    >
                      mdi-battery-charging-80
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="mdi-battery-charging-90"
                    >
                      <i
                        className="mdi mdi-battery-charging-90"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-charging-90"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-charging-90"
                    >
                      mdi-battery-charging-90
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-minus">
                      <i
                        className="mdi mdi-battery-minus"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-minus"
                    >
                      mdi-battery-minus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-negative">
                      <i
                        className="mdi mdi-battery-negative"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-negative"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-negative"
                    >
                      mdi-battery-negative
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-outline">
                      <i
                        className="mdi mdi-battery-outline"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-outline"
                    >
                      mdi-battery-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-plus">
                      <i
                        className="mdi mdi-battery-plus"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-plus"
                    >
                      mdi-battery-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-battery-unknown">
                      <i
                        className="mdi mdi-battery-unknown"
                        data-bs-toggle="tooltip"
                        title="mdi-battery-unknown"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-battery-unknown"
                    >
                      mdi-battery-unknown
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-beach">
                      <i
                        className="mdi mdi-beach"
                        data-bs-toggle="tooltip"
                        title="mdi-beach"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-beach">
                      mdi-beach
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-blank">
                      <i
                        className="mdi mdi-blank"
                        data-bs-toggle="tooltip"
                        title="mdi-blank"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-blank">
                      mdi-blank
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-zip-box">
                      <i
                        className="mdi mdi-zip-box"
                        data-bs-toggle="tooltip"
                        title="mdi-zip-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-zip-box">
                      mdi-zip-box
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-youtube-play">
                      <i
                        className="mdi mdi-youtube-play"
                        data-bs-toggle="tooltip"
                        title="mdi-youtube-play"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-youtube-play"
                    >
                      mdi-youtube-play
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-yin-yang">
                      <i
                        className="mdi mdi-yin-yang"
                        data-bs-toggle="tooltip"
                        title="mdi-yin-yang"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-yin-yang">
                      mdi-yin-yang
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-yelp">
                      <i
                        className="mdi mdi-yelp"
                        data-bs-toggle="tooltip"
                        title="mdi-yelp"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-yelp">
                      mdi-yelp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-yammer">
                      <i
                        className="mdi mdi-yammer"
                        data-bs-toggle="tooltip"
                        title="mdi-yammer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-yammer">
                      mdi-yammer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-xmpp">
                      <i
                        className="mdi mdi-xmpp"
                        data-bs-toggle="tooltip"
                        title="mdi-xmpp"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-xmpp">
                      mdi-xmpp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-xml">
                      <i
                        className="mdi mdi-xml"
                        data-bs-toggle="tooltip"
                        title="mdi-xml"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-xml">
                      mdi-xml
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-wrench">
                      <i
                        className="mdi mdi-wrench"
                        data-bs-toggle="tooltip"
                        title="mdi-wrench"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-wrench">
                      mdi-wrench
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-wrap">
                      <i
                        className="mdi mdi-wrap"
                        data-bs-toggle="tooltip"
                        title="mdi-wrap"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-wrap">
                      mdi-wrap
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-wunderlist">
                      <i
                        className="mdi mdi-wunderlist"
                        data-bs-toggle="tooltip"
                        title="mdi-wunderlist"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-wunderlist"
                    >
                      mdi-wunderlist
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-wrench">
                      <i
                        className="mdi mdi-wrench"
                        data-bs-toggle="tooltip"
                        title="mdi-wrench"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-wrench">
                      mdi-wrench
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-vpn">
                      <i
                        className="mdi mdi-vpn"
                        data-bs-toggle="tooltip"
                        title="mdi-vpn"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-vpn">
                      mdi-vpn
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-volume-off">
                      <i
                        className="mdi mdi-volume-off"
                        data-bs-toggle="tooltip"
                        title="mdi-volume-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-volume-off"
                    >
                      mdi-volume-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-volume-mute">
                      <i
                        className="mdi mdi-volume-mute"
                        data-bs-toggle="tooltip"
                        title="mdi-volume-mute"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-volume-mute"
                    >
                      mdi-volume-mute
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-vlc">
                      <i
                        className="mdi mdi-vlc"
                        data-bs-toggle="tooltip"
                        title="mdi-vlc"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-vlc">
                      mdi-vlc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-video">
                      <i
                        className="mdi mdi-video"
                        data-bs-toggle="tooltip"
                        title="mdi-video"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-video">
                      mdi-video
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-usb">
                      <i
                        className="mdi mdi-usb"
                        data-bs-toggle="tooltip"
                        title="mdi-usb"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-usb">
                      mdi-usb
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-upload-network">
                      <i
                        className="mdi mdi-upload-network"
                        data-bs-toggle="tooltip"
                        title="mdi-upload-network"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-upload-network"
                    >
                      mdi-upload-network
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-update">
                      <i
                        className="mdi mdi-update"
                        data-bs-toggle="tooltip"
                        title="mdi-update"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-update">
                      mdi-update
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-unity">
                      <i
                        className="mdi mdi-unity"
                        data-bs-toggle="tooltip"
                        title="mdi-unity"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-unity">
                      mdi-unity
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-undo">
                      <i
                        className="mdi mdi-undo"
                        data-bs-toggle="tooltip"
                        title="mdi-undo"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-undo">
                      mdi-undo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-ubuntu">
                      <i
                        className="mdi mdi-ubuntu"
                        data-bs-toggle="tooltip"
                        title="mdi-ubuntu"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-ubuntu">
                      mdi-ubuntu
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-tune">
                      <i
                        className="mdi mdi-tune"
                        data-bs-toggle="tooltip"
                        title="mdi-tune"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-tune">
                      mdi-tune
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-truck-trailer">
                      <i
                        className="mdi mdi-truck-trailer"
                        data-bs-toggle="tooltip"
                        title="mdi-truck-trailer"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="mdi-truck-trailer"
                    >
                      mdi-truck-trailer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-truck">
                      <i
                        className="mdi mdi-truck"
                        data-bs-toggle="tooltip"
                        title="mdi-truck"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-truck">
                      mdi-truck
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-svg">
                      <i
                        className="mdi mdi-svg"
                        data-bs-toggle="tooltip"
                        title="mdi-svg"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-svg">
                      mdi-svg
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mdi-subway">
                      <i
                        className="mdi mdi-subway"
                        data-bs-toggle="tooltip"
                        title="mdi-subway"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mdi-subway">
                      mdi-subway
                    </UncontrolledTooltip>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <div className="card-title">Material Design Icons</div>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg={12} sm={12} className=" mb-4">
                <p className="mb-2">
                  Simply beautiful open source icons. For more info{" "}
                  <a href="https://materialdesignicons.com/" target="_blank" className="text-primary">
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="zmdi zmdi-NAME"&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col sm={12} lg={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item" id="zmdi-group">
                      <i
                        className="zmdi zmdi-group"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-group"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-group">
                      zmdi zmdi-group
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-rss">
                      <i
                        className="zmdi zmdi-rss"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-rss"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-rss">
                      zmdi zmdi-rss
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-shape">
                      <i
                        className="zmdi zmdi-shape"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-shape"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-shape">
                      zmdi zmdi-shape
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-spinner">
                      <i
                        className="zmdi zmdi-spinner"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-spinner"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-spinner">
                      zmdi zmdi-spinner
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-ungroup">
                      <i
                        className="zmdi zmdi-ungroup"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-ungroup"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-ungroup">
                      zmdi zmdi-ungroup
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-500px">
                      <i
                        className="zmdi zmdi-500px"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-500px"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-500px">
                      zmdi zmdi-500px
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-8tracks">
                      <i
                        className="zmdi zmdi-8tracks"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-8tracks"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-8tracks">
                      zmdi zmdi-8tracks
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-amazon">
                      <i
                        className="zmdi zmdi-amazon"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-amazon"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-amazon">
                      zmdi zmdi-amazon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-blogger">
                      <i
                        className="zmdi zmdi-blogger"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-blogger"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-blogger">
                      zmdi zmdi-blogger
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-delicious">
                      <i
                        className="zmdi zmdi-delicious"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-delicious"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-delicious"
                    >
                      zmdi zmdi-delicious
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-disqus">
                      <i
                        className="zmdi zmdi-disqus"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-disqus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-disqus">
                      zmdi zmdi-disqus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-flattr">
                      <i
                        className="zmdi zmdi-flattr"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-flattr"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-flattr">
                      zmdi zmdi-flattr
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-flickr">
                      <i
                        className="zmdi zmdi-flickr"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-flickr"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-flickr">
                      zmdi zmdi-flickr
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-github-alt">
                      <i
                        className="zmdi zmdi-github-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-github-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-github-alt"
                    >
                      zmdi zmdi-github-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-google-old">
                      <i
                        className="zmdi zmdi-google-old"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-google-old"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-google-old"
                    >
                      zmdi zmdi-google-old
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-linkedin">
                      <i
                        className="zmdi zmdi-linkedin"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-linkedin"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-linkedin">
                      zmdi zmdi-linkedin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-odnoklassniki">
                      <i
                        className="zmdi zmdi-odnoklassniki"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-odnoklassniki"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-odnoklassniki"
                    >
                      zmdi zmdi-odnoklassniki
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-outlook">
                      <i
                        className="zmdi zmdi-outlook"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-outlook"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-outlook">
                      zmdi zmdi-outlook
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-paypal-alt">
                      <i
                        className="zmdi zmdi-paypal-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-paypal-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-paypal-alt"
                    >
                      zmdi zmdi-paypal-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-pinterest">
                      <i
                        className="zmdi zmdi-pinterest"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-pinterest"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-pinterest"
                    >
                      zmdi zmdi-pinterest
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-playstation">
                      <i
                        className="zmdi zmdi-playstation"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-playstation"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-playstation"
                    >
                      zmdi zmdi-playstation
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-reddit">
                      <i
                        className="zmdi zmdi-reddit"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-reddit"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-reddit">
                      zmdi zmdi-reddit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-skype">
                      <i
                        className="zmdi zmdi-skype"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-skype"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-skype">
                      zmdi zmdi-skype
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-slideshare">
                      <i
                        className="zmdi zmdi-slideshare"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-slideshare"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-slideshare"
                    >
                      zmdi zmdi-slideshare
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-soundcloud">
                      <i
                        className="zmdi zmdi-soundcloud"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-soundcloud"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-soundcloud"
                    >
                      zmdi zmdi-soundcloud
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-tumblr">
                      <i
                        className="zmdi zmdi-tumblr"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-tumblr"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-tumblr">
                      zmdi zmdi-tumblr
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-twitch">
                      <i
                        className="zmdi zmdi-twitch"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-twitch"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-twitch">
                      zmdi zmdi-twitch
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-vimeo">
                      <i
                        className="zmdi zmdi-vimeo"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-vimeo"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-vimeo">
                      zmdi zmdi-vimeo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-whatsapp">
                      <i
                        className="zmdi zmdi-whatsapp"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-whatsapp"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-whatsapp">
                      zmdi zmdi-whatsapp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-xbox">
                      <i
                        className="zmdi zmdi-xbox"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-xbox"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-xbox">
                      zmdi zmdi-xbox
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-yahoo">
                      <i
                        className="zmdi zmdi-yahoo"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-yahoo"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-yahoo">
                      zmdi zmdi-yahoo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-youtube-play">
                      <i
                        className="zmdi zmdi-youtube-play"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-youtube-play"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-youtube-play"
                    >
                      zmdi zmdi-youtube-play
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-youtube">
                      <i
                        className="zmdi zmdi-youtube"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-youtube"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-youtube">
                      zmdi zmdi-youtube
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-3d-rotation">
                      <i
                        className="zmdi zmdi-3d-rotation"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-3d-rotation"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-3d-rotation"
                    >
                      zmdi zmdi-3d-rotation
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-airplane-off">
                      <i
                        className="zmdi zmdi-airplane-off"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-airplane-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-airplane-off"
                    >
                      zmdi zmdi-airplane-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-airplane">
                      <i
                        className="zmdi zmdi-airplane"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-airplane"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-airplane">
                      zmdi zmdi-airplane
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-album">
                      <i
                        className="zmdi zmdi-album"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-album"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-album">
                      zmdi zmdi-album
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-archive">
                      <i
                        className="zmdi zmdi-archive"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-archive"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-archive">
                      zmdi zmdi-archive
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="zmdi-assignment-account"
                    >
                      <i
                        className="zmdi zmdi-assignment-account"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-assignment-account"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-assignment-account"
                    >
                      zmdi zmdi-assignment-account
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-assignment-alert">
                      <i
                        className="zmdi zmdi-assignment-alert"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-assignment-alert"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-assignment-alert"
                    >
                      zmdi zmdi-assignment-alert
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-assignment-check">
                      <i
                        className="zmdi zmdi-assignment-check"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-assignment-check"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-assignment-check"
                    >
                      zmdi zmdi-assignment-check
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-assignment-o">
                      <i
                        className="zmdi zmdi-assignment-o"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-assignment-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-assignment-o"
                    >
                      zmdi zmdi-assignment-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-assignment-return">
                      <i
                        className="zmdi zmdi-assignment-return"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-assignment-return"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-assignment-return"
                    >
                      zmdi zmdi-assignment-return
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="zmdi-assignment-returned"
                    >
                      <i
                        className="zmdi zmdi-assignment-returned"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-assignment-returned"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-assignment-returned"
                    >
                      zmdi zmdi-assignment-returned
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-assignment">
                      <i
                        className="zmdi zmdi-assignment"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-assignment"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-assignment"
                    >
                      zmdi zmdi-assignment
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-attachment-alt">
                      <i
                        className="zmdi zmdi-attachment-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-attachment-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-attachment-alt"
                    >
                      zmdi zmdi-attachment-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-attachment">
                      <i
                        className="zmdi zmdi-attachment"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-attachment"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-attachment"
                    >
                      zmdi zmdi-attachment
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-audio">
                      <i
                        className="zmdi zmdi-audio"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-audio"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-audio">
                      zmdi zmdi-audio
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-badge-check">
                      <i
                        className="zmdi zmdi-badge-check"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-badge-check"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-badge-check"
                    >
                      zmdi zmdi-badge-check
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-balance-wallet">
                      <i
                        className="zmdi zmdi-balance-wallet"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-balance-wallet"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-balance-wallet"
                    >
                      zmdi zmdi-balance-wallet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-balance">
                      <i
                        className="zmdi zmdi-balance"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-balance"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-balance">
                      zmdi zmdi-balance
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-battery-alert">
                      <i
                        className="zmdi zmdi-battery-alert"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-battery-alert"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-battery-alert"
                    >
                      zmdi zmdi-battery-alert
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-battery-flash">
                      <i
                        className="zmdi zmdi-battery-flash"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-battery-flash"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-battery-flash"
                    >
                      zmdi zmdi-battery-flash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-battery-unknown">
                      <i
                        className="zmdi zmdi-battery-unknown"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-battery-unknown"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-battery-unknown"
                    >
                      zmdi zmdi-battery-unknown
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-battery">
                      <i
                        className="zmdi zmdi-battery"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-battery"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-battery">
                      zmdi zmdi-battery
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-bike">
                      <i
                        className="zmdi zmdi-bike"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-bike"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-bike">
                      zmdi zmdi-bike
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-block-alt">
                      <i
                        className="zmdi zmdi-block-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-block-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-block-alt"
                    >
                      zmdi zmdi-block-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-block">
                      <i
                        className="zmdi zmdi-block"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-block"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-block">
                      zmdi zmdi-block
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-boat">
                      <i
                        className="zmdi zmdi-boat"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-boat"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-boat">
                      zmdi zmdi-boat
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-book-image">
                      <i
                        className="zmdi zmdi-book-image"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-book-image"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-book-image"
                    >
                      zmdi zmdi-book-image
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-book">
                      <i
                        className="zmdi zmdi-book"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-book"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-book">
                      zmdi zmdi-book
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-bookmark-outline">
                      <i
                        className="zmdi zmdi-bookmark-outline"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-bookmark-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-bookmark-outline"
                    >
                      zmdi zmdi-bookmark-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-bookmark">
                      <i
                        className="zmdi zmdi-bookmark"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-bookmark"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-bookmark">
                      zmdi zmdi-bookmark
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-brush">
                      <i
                        className="zmdi zmdi-brush"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-brush"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-brush">
                      zmdi zmdi-brush
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-bug">
                      <i
                        className="zmdi zmdi-bug"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-bug"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-bug">
                      zmdi zmdi-bug
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-bus">
                      <i
                        className="zmdi zmdi-bus"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-bus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-bus">
                      zmdi zmdi-bus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-cake">
                      <i
                        className="zmdi zmdi-cake"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-cake"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-cake">
                      zmdi zmdi-cake
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-car-taxi">
                      <i
                        className="zmdi zmdi-car-taxi"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-car-taxi"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-car-taxi">
                      zmdi zmdi-car-taxi
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-car-wash">
                      <i
                        className="zmdi zmdi-car-wash"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-car-wash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-car-wash">
                      zmdi zmdi-car-wash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-car">
                      <i
                        className="zmdi zmdi-car"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-car"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-car">
                      zmdi zmdi-car
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-card-giftcard">
                      <i
                        className="zmdi zmdi-card-giftcard"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-card-giftcard"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-card-giftcard"
                    >
                      zmdi zmdi-card-giftcard
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-card-membership">
                      <i
                        className="zmdi zmdi-card-membership"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-card-membership"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-card-membership"
                    >
                      zmdi zmdi-card-membership
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-card-travel">
                      <i
                        className="zmdi zmdi-card-travel"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-card-travel"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-card-travel"
                    >
                      zmdi zmdi-card-travel
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-card">
                      <i
                        className="zmdi zmdi-card"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-card"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-card">
                      zmdi zmdi-card
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-case-check">
                      <i
                        className="zmdi zmdi-case-check"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-case-check"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-case-check"
                    >
                      zmdi zmdi-case-check
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-case-download">
                      <i
                        className="zmdi zmdi-case-download"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-case-download"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-case-download"
                    >
                      zmdi zmdi-case-download
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-case-play">
                      <i
                        className="zmdi zmdi-case-play"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-case-play"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-case-play"
                    >
                      zmdi zmdi-case-play
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-case">
                      <i
                        className="zmdi zmdi-case"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-case"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-case">
                      zmdi zmdi-case
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-cast-connected">
                      <i
                        className="zmdi zmdi-cast-connected"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-cast-connected"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-cast-connected"
                    >
                      zmdi zmdi-cast-connected
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-cast">
                      <i
                        className="zmdi zmdi-cast"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-cast"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-cast">
                      zmdi zmdi-cast
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-chart-donut">
                      <i
                        className="zmdi zmdi-chart-donut"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-chart-donut"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-chart-donut"
                    >
                      zmdi zmdi-chart-donut
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-chart">
                      <i
                        className="zmdi zmdi-chart"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-chart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-chart">
                      zmdi zmdi-chart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-city-alt">
                      <i
                        className="zmdi zmdi-city-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-city-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-city-alt">
                      zmdi zmdi-city-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-city">
                      <i
                        className="zmdi zmdi-city"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-city"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-city">
                      zmdi zmdi-city
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-close-circle-o">
                      <i
                        className="zmdi zmdi-close-circle-o"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-close-circle-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-close-circle-o"
                    >
                      zmdi zmdi-close-circle-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-close-circle">
                      <i
                        className="zmdi zmdi-close-circle"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-close-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-close-circle"
                    >
                      zmdi zmdi-close-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-close">
                      <i
                        className="zmdi zmdi-close"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-close"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-close">
                      zmdi zmdi-close
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-cocktail">
                      <i
                        className="zmdi zmdi-cocktail"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-cocktail"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-cocktail">
                      zmdi zmdi-cocktail
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-code-setting">
                      <i
                        className="zmdi zmdi-code-setting"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-code-setting"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-code-setting"
                    >
                      zmdi zmdi-code-setting
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-code-smartphone">
                      <i
                        className="zmdi zmdi-code-smartphone"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-code-smartphone"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-code-smartphone"
                    >
                      zmdi zmdi-code-smartphone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-code">
                      <i
                        className="zmdi zmdi-code"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-code"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-code">
                      zmdi zmdi-code
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-coffee">
                      <i
                        className="zmdi zmdi-coffee"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-coffee"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-coffee">
                      zmdi zmdi-coffee
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="zmdi-collection-bookmark"
                    >
                      <i
                        className="zmdi zmdi-collection-bookmark"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-bookmark"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-bookmark"
                    >
                      zmdi zmdi-collection-bookmark
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="zmdi-collection-case-play"
                    >
                      <i
                        className="zmdi zmdi-collection-case-play"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-case-play"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-case-play"
                    >
                      zmdi zmdi-collection-case-play
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="zmdi-collection-folder-image"
                    >
                      <i
                        className="zmdi zmdi-collection-folder-image"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-folder-image"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-folder-image"
                    >
                      zmdi zmdi-collection-folder-image
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="zmdi-collection-image-o"
                    >
                      <i
                        className="zmdi zmdi-collection-image-o"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-image-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-image-o"
                    >
                      zmdi zmdi-collection-image-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-image">
                      <i
                        className="zmdi zmdi-collection-image"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-image"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-image"
                    >
                      zmdi zmdi-collection-image
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-item-1">
                      <i
                        className="zmdi zmdi-collection-item-1"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-item-1"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-item-1"
                    >
                      zmdi zmdi-collection-item-1
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-item-2">
                      <i
                        className="zmdi zmdi-collection-item-2"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-item-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-item-2"
                    >
                      zmdi zmdi-collection-item-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-item-3">
                      <i
                        className="zmdi zmdi-collection-item-3"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-item-3"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-item-3"
                    >
                      zmdi zmdi-collection-item-3
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-item-4">
                      <i
                        className="zmdi zmdi-collection-item-4"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-item-4"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-item-4"
                    >
                      zmdi zmdi-collection-item-4
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-item-5">
                      <i
                        className="zmdi zmdi-collection-item-5"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-item-5"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-item-5"
                    >
                      zmdi zmdi-collection-item-5
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-item-6">
                      <i
                        className="zmdi zmdi-collection-item-6"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-item-6"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-item-6"
                    >
                      zmdi zmdi-collection-item-6
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-item-7">
                      <i
                        className="zmdi zmdi-collection-item-7"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-item-7"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-item-7"
                    >
                      zmdi zmdi-collection-item-7
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-item-8">
                      <i
                        className="zmdi zmdi-collection-item-8"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-item-8"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-item-8"
                    >
                      zmdi zmdi-collection-item-8
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-item-9">
                      <i
                        className="zmdi zmdi-collection-item-9-plus"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-item-9"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-item-9"
                    >
                      zmdi zmdi-collection-item-9
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-unlocked">
                      <i
                        className="zmdi zmdi-collection-item-9"
                        data-bs-toggle="tooltip"
                        title="ion-unlocked"
                      ></i>
                    </li>
                    <li className="icons-list-item" id="zmdi-collection-item">
                      <i
                        className="zmdi zmdi-collection-item"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-item"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-item"
                    >
                      zmdi zmdi-collection-item
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-music">
                      <i
                        className="zmdi zmdi-collection-music"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-music"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-music"
                    >
                      zmdi zmdi-collection-music
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-pdf">
                      <i
                        className="zmdi zmdi-collection-pdf"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-pdf"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-pdf"
                    >
                      zmdi zmdi-collection-pdf
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-plus">
                      <i
                        className="zmdi zmdi-collection-plus"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-plus"
                    >
                      zmdi zmdi-collection-plus
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="zmdi-collection-speaker"
                    >
                      <i
                        className="zmdi zmdi-collection-speaker"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-speaker"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-speaker"
                    >
                      zmdi zmdi-collection-speaker
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-text">
                      <i
                        className="zmdi zmdi-collection-text"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-text"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-text"
                    >
                      zmdi zmdi-collection-text
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-collection-video">
                      <i
                        className="zmdi zmdi-collection-video"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-collection-video"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-collection-video"
                    >
                      zmdi zmdi-collection-video
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-compass">
                      <i
                        className="zmdi zmdi-compass"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-compass"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-compass">
                      zmdi zmdi-compass
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-cutlery">
                      <i
                        className="zmdi zmdi-cutlery"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-cutlery"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-cutlery">
                      zmdi zmdi-cutlery
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-delete">
                      <i
                        className="zmdi zmdi-delete"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-delete"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-delete">
                      zmdi zmdi-delete
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-dialpad">
                      <i
                        className="zmdi zmdi-dialpad"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-dialpad"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-dialpad">
                      zmdi zmdi-dialpad
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-dns">
                      <i
                        className="zmdi zmdi-dns"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-dns"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-dns">
                      zmdi zmdi-dns
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-drink">
                      <i
                        className="zmdi zmdi-drink"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-drink"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-drink">
                      zmdi zmdi-drink
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-edit">
                      <i
                        className="zmdi zmdi-edit"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-edit"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-edit">
                      zmdi zmdi-edit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-email-open">
                      <i
                        className="zmdi zmdi-email-open"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-email-open"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-email-open"
                    >
                      zmdi zmdi-email-open
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-email">
                      <i
                        className="zmdi zmdi-email"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-email"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-email">
                      zmdi zmdi-email
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-eye-off">
                      <i
                        className="zmdi zmdi-eye-off"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-eye-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-eye-off">
                      zmdi zmdi-eye-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-eye">
                      <i
                        className="zmdi zmdi-eye"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-eye"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-eye">
                      zmdi zmdi-eye
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-eyedropper">
                      <i
                        className="zmdi zmdi-eyedropper"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-eyedropper"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-eyedropper"
                    >
                      zmdi zmdi-eyedropper
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-favorite-outline">
                      <i
                        className="zmdi zmdi-favorite-outline"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-favorite-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-favorite-outline"
                    >
                      zmdi zmdi-favorite-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-favorite">
                      <i
                        className="zmdi zmdi-favorite"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-favorite"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-favorite">
                      zmdi zmdi-favorite
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-filter-list">
                      <i
                        className="zmdi zmdi-filter-list"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-filter-list"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-filter-list"
                    >
                      zmdi zmdi-filter-list
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-fire">
                      <i
                        className="zmdi zmdi-fire"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-fire"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-fire">
                      zmdi zmdi-fire
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-flag">
                      <i
                        className="zmdi zmdi-flag"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-flag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-flag">
                      zmdi zmdi-flag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-flare">
                      <i
                        className="zmdi zmdi-flare"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-flare"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-flare">
                      zmdi zmdi-flare
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-flash-auto">
                      <i
                        className="zmdi zmdi-flash-auto"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-flash-auto"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-flash-auto"
                    >
                      zmdi zmdi-flash-auto
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-flash-off">
                      <i
                        className="zmdi zmdi-flash-off"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-flash-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-flash-off"
                    >
                      zmdi zmdi-flash-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-flash">
                      <i
                        className="zmdi zmdi-flash"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-flash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-flash">
                      zmdi zmdi-flash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-flip">
                      <i
                        className="zmdi zmdi-flip"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-flip"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-flip">
                      zmdi zmdi-flip
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-flower-alt">
                      <i
                        className="zmdi zmdi-flower-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-flower-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-flower-alt"
                    >
                      zmdi zmdi-flower-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-flower">
                      <i
                        className="zmdi zmdi-flower"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-flower"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-flower">
                      zmdi zmdi-flower
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-font">
                      <i
                        className="zmdi zmdi-font"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-font"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-font">
                      zmdi zmdi-font
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-fullscreen-alt">
                      <i
                        className="zmdi zmdi-fullscreen-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-fullscreen-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-fullscreen-alt"
                    >
                      zmdi zmdi-fullscreen-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-fullscreen-exit">
                      <i
                        className="zmdi zmdi-fullscreen-exit"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-fullscreen-exit"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-fullscreen-exit"
                    >
                      zmdi zmdi-fullscreen-exit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-fullscreen">
                      <i
                        className="zmdi zmdi-fullscreen"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-fullscreen"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-fullscreen"
                    >
                      zmdi zmdi-fullscreen
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-functions">
                      <i
                        className="zmdi zmdi-functions"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-functions"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-functions"
                    >
                      zmdi zmdi-functions
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-gas-station">
                      <i
                        className="zmdi zmdi-gas-station"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-gas-station"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-gas-station"
                    >
                      zmdi zmdi-gas-station
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-gesture">
                      <i
                        className="zmdi zmdi-gesture"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-gesture"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-gesture">
                      zmdi zmdi-gesture
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-globe-alt">
                      <i
                        className="zmdi zmdi-globe-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-globe-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-globe-alt"
                    >
                      zmdi zmdi-globe-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-globe-lock">
                      <i
                        className="zmdi zmdi-globe-lock"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-globe-lock"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-globe-lock"
                    >
                      zmdi zmdi-globe-lock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-globe">
                      <i
                        className="zmdi zmdi-globe"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-globe"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-globe">
                      zmdi zmdi-globe
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-graduation-cap">
                      <i
                        className="zmdi zmdi-graduation-cap"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-graduation-cap"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-graduation-cap"
                    >
                      zmdi zmdi-graduation-cap
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-group">
                      <i
                        className="zmdi zmdi-group"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-group"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-group">
                      zmdi zmdi-group
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-home">
                      <i
                        className="zmdi zmdi-home"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-home"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-home">
                      zmdi zmdi-home
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-hospital-alt">
                      <i
                        className="zmdi zmdi-hospital-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-hospital-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-hospital-alt"
                    >
                      zmdi zmdi-hospital-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-hospital">
                      <i
                        className="zmdi zmdi-hospital"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-hospital"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-hospital">
                      zmdi zmdi-hospital
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-hotel">
                      <i
                        className="zmdi zmdi-hotel"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-hotel"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-hotel">
                      zmdi zmdi-hotel
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-hourglass-alt">
                      <i
                        className="zmdi zmdi-hourglass-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-hourglass-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-hourglass-alt"
                    >
                      zmdi zmdi-hourglass-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-hourglass-outline">
                      <i
                        className="zmdi zmdi-hourglass-outline"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-hourglass-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-hourglass-outline"
                    >
                      zmdi zmdi-hourglass-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-hourglass">
                      <i
                        className="zmdi zmdi-hourglass"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-hourglass"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-hourglass"
                    >
                      zmdi zmdi-hourglass
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-http">
                      <i
                        className="zmdi zmdi-http"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-http"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-http">
                      zmdi zmdi-http
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-image-alt">
                      <i
                        className="zmdi zmdi-image-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-image-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-image-alt"
                    >
                      zmdi zmdi-image-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-image-o">
                      <i
                        className="zmdi zmdi-image-o"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-image-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-image-o">
                      zmdi zmdi-image-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-image">
                      <i
                        className="zmdi zmdi-image"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-image"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-image">
                      zmdi zmdi-image
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-inbox">
                      <i
                        className="zmdi zmdi-inbox"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-inbox"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-inbox">
                      zmdi zmdi-inbox
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-invert-colors-off">
                      <i
                        className="zmdi zmdi-invert-colors-off"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-invert-colors-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-invert-colors-off"
                    >
                      zmdi zmdi-invert-colors-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-invert-colors">
                      <i
                        className="zmdi zmdi-invert-colors"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-invert-colors"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-invert-colors"
                    >
                      zmdi zmdi-invert-colors
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-key">
                      <i
                        className="zmdi zmdi-key"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-key"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-key">
                      zmdi zmdi-key
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-label-alt-outline">
                      <i
                        className="zmdi zmdi-label-alt-outline"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-label-alt-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-label-alt-outline"
                    >
                      zmdi zmdi-label-alt-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-label-alt">
                      <i
                        className="zmdi zmdi-label-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-label-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-label-alt"
                    >
                      zmdi zmdi-label-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-label-heart">
                      <i
                        className="zmdi zmdi-label-heart"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-label-heart"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-label-heart"
                    >
                      zmdi zmdi-label-heart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-label">
                      <i
                        className="zmdi zmdi-label"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-label"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-label">
                      zmdi zmdi-label
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-labels">
                      <i
                        className="zmdi zmdi-labels"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-labels"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-labels">
                      zmdi zmdi-labels
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-lamp">
                      <i
                        className="zmdi zmdi-lamp"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-lamp"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-lamp">
                      zmdi zmdi-lamp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-landscape">
                      <i
                        className="zmdi zmdi-landscape"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-landscape"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-landscape"
                    >
                      zmdi zmdi-landscape
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-layers-off">
                      <i
                        className="zmdi zmdi-layers-off"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-layers-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-layers-off"
                    >
                      zmdi zmdi-layers-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-layers">
                      <i
                        className="zmdi zmdi-layers"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-layers"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-layers">
                      zmdi zmdi-layers
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-library">
                      <i
                        className="zmdi zmdi-library"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-library"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-library">
                      zmdi zmdi-library
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-link">
                      <i
                        className="zmdi zmdi-link"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-link"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-link">
                      zmdi zmdi-link
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-lock-open">
                      <i
                        className="zmdi zmdi-lock-open"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-lock-open"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-lock-open"
                    >
                      zmdi zmdi-lock-open
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-lock-outline">
                      <i
                        className="zmdi zmdi-lock-outline"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-lock-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-lock-outline"
                    >
                      zmdi zmdi-lock-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-lock">
                      <i
                        className="zmdi zmdi-lock"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-lock"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-lock">
                      zmdi zmdi-lock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-mail-reply-all">
                      <i
                        className="zmdi zmdi-mail-reply-all"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-mail-reply-all"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-mail-reply-all"
                    >
                      zmdi zmdi-mail-reply-all
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-mail-reply">
                      <i
                        className="zmdi zmdi-mail-reply"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-mail-reply"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-mail-reply"
                    >
                      zmdi zmdi-mail-reply
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-mail-send">
                      <i
                        className="zmdi zmdi-mail-send"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-mail-send"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-mail-send"
                    >
                      zmdi zmdi-mail-send
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-mall">
                      <i
                        className="zmdi zmdi-mall"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-mall"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-mall">
                      zmdi zmdi-mall
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-map">
                      <i
                        className="zmdi zmdi-map"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-map"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-map">
                      zmdi zmdi-map
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-menu">
                      <i
                        className="zmdi zmdi-menu"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-menu"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-menu">
                      zmdi zmdi-menu
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-money-box">
                      <i
                        className="zmdi zmdi-money-box"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-money-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-money-box"
                    >
                      zmdi zmdi-money-box
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-money-off">
                      <i
                        className="zmdi zmdi-money-off"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-money-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-money-off"
                    >
                      zmdi zmdi-money-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-money">
                      <i
                        className="zmdi zmdi-money"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-money"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-money">
                      zmdi zmdi-money
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-more-vert">
                      <i
                        className="zmdi zmdi-more-vert"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-more-vert"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-more-vert"
                    >
                      zmdi zmdi-more-vert
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-more">
                      <i
                        className="zmdi zmdi-more"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-more"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-more">
                      zmdi zmdi-more
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-movie-alt">
                      <i
                        className="zmdi zmdi-movie-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-movie-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-movie-alt"
                    >
                      zmdi zmdi-movie-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-nature-people">
                      <i
                        className="zmdi zmdi-nature-people"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-nature-people"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-nature-people"
                    >
                      zmdi zmdi-nature-people
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-nature">
                      <i
                        className="zmdi zmdi-nature"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-nature"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-nature">
                      zmdi zmdi-nature
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-navigation">
                      <i
                        className="zmdi zmdi-navigation"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-navigation"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-navigation"
                    >
                      zmdi zmdi-navigation
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-open-in-browser">
                      <i
                        className="zmdi zmdi-open-in-browser"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-open-in-browser"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-open-in-browser"
                    >
                      zmdi zmdi-open-in-browser
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-open-in-new">
                      <i
                        className="zmdi zmdi-open-in-new"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-open-in-new"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-open-in-new"
                    >
                      zmdi zmdi-open-in-new
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-palette">
                      <i
                        className="zmdi zmdi-palette"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-palette"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-palette">
                      zmdi zmdi-palette
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-parking">
                      <i
                        className="zmdi zmdi-parking"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-parking"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-parking">
                      zmdi zmdi-parking
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-pin-account">
                      <i
                        className="zmdi zmdi-pin-account"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-pin-account"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-pin-account"
                    >
                      zmdi zmdi-pin-account
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-pin-assistant">
                      <i
                        className="zmdi zmdi-pin-assistant"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-pin-assistant"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-pin-assistant"
                    >
                      zmdi zmdi-pin-assistant
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-pin-drop">
                      <i
                        className="zmdi zmdi-pin-drop"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-pin-drop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-pin-drop">
                      zmdi zmdi-pin-drop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-pin-help">
                      <i
                        className="zmdi zmdi-pin-help"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-pin-help"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-pin-help">
                      zmdi zmdi-pin-help
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-pin-off">
                      <i
                        className="zmdi zmdi-pin-off"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-pin-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-pin-off">
                      zmdi zmdi-pin-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-pin">
                      <i
                        className="zmdi zmdi-pin"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-pin"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-pin">
                      zmdi zmdi-pin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-pizza">
                      <i
                        className="zmdi zmdi-pizza"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-pizza"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-pizza">
                      zmdi zmdi-pizza
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-plaster">
                      <i
                        className="zmdi zmdi-plaster"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-plaster"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-plaster">
                      zmdi zmdi-plaster
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-power-setting">
                      <i
                        className="zmdi zmdi-power-setting"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-power-setting"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-power-setting"
                    >
                      zmdi zmdi-power-setting
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-power">
                      <i
                        className="zmdi zmdi-power"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-power"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-power">
                      zmdi zmdi-power
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-print">
                      <i
                        className="zmdi zmdi-print"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-print"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-print">
                      zmdi zmdi-print
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-puzzle-piece">
                      <i
                        className="zmdi zmdi-puzzle-piece"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-puzzle-piece"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-puzzle-piece"
                    >
                      zmdi zmdi-puzzle-piece
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-quote">
                      <i
                        className="zmdi zmdi-quote"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-quote"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-quote">
                      zmdi zmdi-quote
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-railway">
                      <i
                        className="zmdi zmdi-railway"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-railway"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-railway">
                      zmdi zmdi-railway
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-receipt">
                      <i
                        className="zmdi zmdi-receipt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-receipt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zmdi-receipt">
                      zmdi zmdi-receipt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zmdi-refresh-alt">
                      <i
                        className="zmdi zmdi-refresh-alt"
                        data-bs-toggle="tooltip"
                        title="zmdi zmdi-refresh-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="zmdi-refresh-alt"
                    >
                      zmdi zmdi-refresh-alt
                    </UncontrolledTooltip>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
);

MaterialDesignIcons.propTypes = {};

MaterialDesignIcons.defaultProps = {};

export default MaterialDesignIcons;
