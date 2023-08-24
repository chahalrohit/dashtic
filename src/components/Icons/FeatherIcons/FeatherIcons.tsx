import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  Row,
  UncontrolledTooltip,
  CardTitle,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const FeatherIcons = () => (
  <div>
    <PageHeaders
      title="Feather Icons"
      home="Home"
      name="Icons"
      fonticonsname="Feather Icons"
    />
    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Feather Icons</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="12" sm="12" className=" mb-4">
                <p className="mb-2">
                  Simply beautiful open source icons. For more info{" "}
                  <a
                    href="https://feathericons.com"
                    className="text-primary"
                    target="_blank"
                  >
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="fe fe-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col clg="12" sm="12">
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item" id="activity">
                      <i
                        className="fe fe-activity"
                        data-bs-toggle="tooltip"
                        title="fe fe-activity"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="activity">
                      fe fe-activity
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="airplay">
                      <i
                        className="fe fe-airplay"
                        data-bs-toggle="tooltip"
                        title="fe fe-airplay"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="airplay">
                      fe fe-airplay
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="alert-circle">
                      <i
                        className="fe fe-alert-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-alert-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="alert-circle">
                      fe fe-alert-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="alert-octagon">
                      <i
                        className="fe fe-alert-octagon"
                        data-bs-toggle="tooltip"
                        title="fe fe-alert-octagon"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="alert-octagon">
                      fe fe-alert-octagon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="alert-triangle">
                      <i
                        className="fe fe-alert-triangle"
                        data-bs-toggle="tooltip"
                        title="fe fe-alert-triangle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="alert-triangle"
                    >
                      fe fe-alert-triangle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="align-center">
                      <i
                        className="fe fe-align-center"
                        data-bs-toggle="tooltip"
                        title="fe fe-align-center"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="align-center">
                      fe fe-align-center
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="align-justify">
                      <i
                        className="fe fe-align-justify"
                        data-bs-toggle="tooltip"
                        title="fe fe-align-justify"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="align-justify">
                      fe fe-align-justify
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="align-left">
                      <i
                        className="fe fe-align-left"
                        data-bs-toggle="tooltip"
                        title="fe fe-align-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="align-left">
                      fe fe-align-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="align-right">
                      <i
                        className="fe fe-align-right"
                        data-bs-toggle="tooltip"
                        title="fe fe-align-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="align-right">
                      fe fe-align-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="anchor">
                      <i
                        className="fe fe-anchor"
                        data-bs-toggle="tooltip"
                        title="fe fe-anchor"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="anchor">
                      fe fe-anchor
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="aperture">
                      <i
                        className="fe fe-aperture"
                        data-bs-toggle="tooltip"
                        title="fe fe-aperture"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="aperture">
                      fe fe-aperture
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="arrow-down">
                      <i
                        className="fe fe-arrow-down"
                        data-bs-toggle="tooltip"
                        title="fe fe-arrow-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="arrow-down">
                      fe fe-arrow-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="arrow-down-circle">
                      <i
                        className="fe fe-arrow-down-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-arrow-down-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="arrow-down-circle"
                    >
                      fe fe-arrow-down-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="arrow-down-left">
                      <i
                        className="fe fe-arrow-down-left"
                        data-bs-toggle="tooltip"
                        title="fe fe-arrow-down-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="arrow-down-left"
                    >
                      fe fe-arrow-down-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="arrow-down-right">
                      <i
                        className="fe fe-arrow-down-right"
                        data-bs-toggle="tooltip"
                        title="fe fe-arrow-down-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="arrow-down-right"
                    >
                      fe fe-arrow-down-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="arrow-left">
                      <i
                        className="fe fe-arrow-left"
                        data-bs-toggle="tooltip"
                        title="fe fe-arrow-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="arrow-left">
                      fe fe-arrow-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="arrow-left-circle">
                      <i
                        className="fe fe-arrow-left-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-arrow-left-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="arrow-left-circle"
                    >
                      fe fe-arrow-left-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="arrow-right">
                      <i
                        className="fe fe-arrow-right"
                        data-bs-toggle="tooltip"
                        title="fe fe-arrow-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="arrow-right">
                      fe fe-arrow-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="arrow-right-circle">
                      <i
                        className="fe fe-arrow-right-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-arrow-right-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="arrow-right-circle"
                    >
                      fe fe-arrow-right-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="arrow-up">
                      <i
                        className="fe fe-arrow-up"
                        data-bs-toggle="tooltip"
                        title="fe fe-arrow-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="arrow-up">
                      fe fe-arrow-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="arrow-up-circle">
                      <i
                        className="fe fe-arrow-up-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-arrow-up-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="arrow-up-circle"
                    >
                      fe fe-arrow-up-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="arrow-up-left">
                      <i
                        className="fe fe-arrow-up-left"
                        data-bs-toggle="tooltip"
                        title="fe fe-arrow-up-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="arrow-up-left">
                      fe fe-arrow-up-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="arrow-up-right">
                      <i
                        className="fe fe-arrow-up-right"
                        data-bs-toggle="tooltip"
                        title="fe fe-arrow-up-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="arrow-up-right"
                    >
                      fe fe-arrow-up-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="at-sign">
                      <i
                        className="fe fe-at-sign"
                        data-bs-toggle="tooltip"
                        title="fe fe-at-sign"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="at-sign">
                      fe fe-at-sign
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="award">
                      <i
                        className="fe fe-award"
                        data-bs-toggle="tooltip"
                        title="fe fe-award"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="award">
                      fe fe-award
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="bars-chart">
                      <i
                        className="fe fe-bar-chart"
                        data-bs-toggle="tooltip"
                        title="fe fe-bar-chart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="bars-chart">
                      fe fe-bar-chart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="bar-chart-2">
                      <i
                        className="fe fe-bar-chart-2"
                        data-bs-toggle="tooltip"
                        title="fe fe-bar-chart-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="bar-chart-2">
                      fe fe-bar-chart-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="battery">
                      <i
                        className="fe fe-battery"
                        data-bs-toggle="tooltip"
                        title="fe fe-battery"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="battery">
                      fe fe-battery
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="battery-charging">
                      <i
                        className="fe fe-battery-charging"
                        data-bs-toggle="tooltip"
                        title="fe fe-battery-charging"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="battery-charging"
                    >
                      fe fe-battery-charging
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="bell">
                      <i
                        className="fe fe-bell"
                        data-bs-toggle="tooltip"
                        title="fe fe-bell"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="bell">
                      fe fe-bell
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="bell-off">
                      <i
                        className="fe fe-bell-off"
                        data-bs-toggle="tooltip"
                        title="fe fe-bell-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="bell-off">
                      fe fe-bell-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="bluetooth">
                      <i
                        className="fe fe-bluetooth"
                        data-bs-toggle="tooltip"
                        title="fe fe-bluetooth"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="bluetooth">
                      fe fe-bluetooth
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="bold">
                      <i
                        className="fe fe-bold"
                        data-bs-toggle="tooltip"
                        title="fe fe-bold"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="bold">
                      fe fe-bold
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="book">
                      <i
                        className="fe fe-book"
                        data-bs-toggle="tooltip"
                        title="fe fe-book"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="book">
                      fe fe-book
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="book-open">
                      <i
                        className="fe fe-book-open"
                        data-bs-toggle="tooltip"
                        title="fe fe-book-open"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="book-open">
                      fe fe-book-open
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="bookmark">
                      <i
                        className="fe fe-bookmark"
                        data-bs-toggle="tooltip"
                        title="fe fe-bookmark"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="bookmark">
                      fe fe-bookmark
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="box">
                      <i
                        className="fe fe-box"
                        data-bs-toggle="tooltip"
                        title="fe fe-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="box">
                      fe fe-box
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="briefcase">
                      <i
                        className="fe fe-briefcase"
                        data-bs-toggle="tooltip"
                        title="fe fe-briefcase"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="briefcase">
                      fe fe-briefcase
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="calendar">
                      <i
                        className="fe fe-calendar"
                        data-bs-toggle="tooltip"
                        title="fe fe-calendar"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="calendar">
                      fe fe-calendar
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="camera">
                      <i
                        className="fe fe-camera"
                        data-bs-toggle="tooltip"
                        title="fe fe-camera"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="camera">
                      fe fe-camera
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="camera-off">
                      <i
                        className="fe fe-camera-off"
                        data-bs-toggle="tooltip"
                        title="fe fe-camera-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="camera-off">
                      fe fe-camera-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="cast">
                      <i
                        className="fe fe-cast"
                        data-bs-toggle="tooltip"
                        title="fe fe-cast"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="cast">
                      fe fe-cast
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="check">
                      <i
                        className="fe fe-check"
                        data-bs-toggle="tooltip"
                        title="fe fe-check"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="check">
                      fe fe-check
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="check-circle">
                      <i
                        className="fe fe-check-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-check-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="check-circle">
                      fe fe-check-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="check-square">
                      <i
                        className="fe fe-check-square"
                        data-bs-toggle="tooltip"
                        title="fe fe-check-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="check-square">
                      fe fe-check-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="chevron-down">
                      <i
                        className="fe fe-chevron-down"
                        data-bs-toggle="tooltip"
                        title="fe fe-chevron-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="chevron-down">
                      fe fe-chevron-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="chevron-left">
                      <i
                        className="fe fe-chevron-left"
                        data-bs-toggle="tooltip"
                        title="fe fe-chevron-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="chevron-left">
                      fe fe-chevron-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="chevron-right">
                      <i
                        className="fe fe-chevron-right"
                        data-bs-toggle="tooltip"
                        title="fe fe-chevron-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="chevron-right">
                      fe fe-chevron-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="chevron-up">
                      <i
                        className="fe fe-chevron-up"
                        data-bs-toggle="tooltip"
                        title="fe fe-chevron-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="chevron-up">
                      fe fe-chevron-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="chevrons-down">
                      <i
                        className="fe fe-chevrons-down"
                        data-bs-toggle="tooltip"
                        title="fe fe-chevrons-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="chevrons-down">
                      fe fe-chevrons-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="chevrons-left">
                      <i
                        className="fe fe-chevrons-left"
                        data-bs-toggle="tooltip"
                        title="fe fe-chevrons-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="chevrons-left">
                      fe fe-chevrons-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="chevrons-right">
                      <i
                        className="fe fe-chevrons-right"
                        data-bs-toggle="tooltip"
                        title="fe fe-chevrons-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="chevrons-right"
                    >
                      fe fe-chevrons-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="chevrons-up">
                      <i
                        className="fe fe-chevrons-up"
                        data-bs-toggle="tooltip"
                        title="fe fe-chevrons-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="chevrons-up">
                      fe fe-chevrons-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="chrome">
                      <i
                        className="fe fe-chrome"
                        data-bs-toggle="tooltip"
                        title="fe fe-chrome"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="chrome">
                      fe fe-chrome
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="circle">
                      <i
                        className="fe fe-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="circle">
                      fe fe-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="clipboard">
                      <i
                        className="fe fe-clipboard"
                        data-bs-toggle="tooltip"
                        title="fe fe-clipboard"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="clipboard">
                      fe fe-clipboard
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="clock">
                      <i
                        className="fe fe-clock"
                        data-bs-toggle="tooltip"
                        title="fe fe-clock"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="clock">
                      fe fe-clock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="cloud">
                      <i
                        className="fe fe-cloud"
                        data-bs-toggle="tooltip"
                        title="fe fe-cloud"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="cloud">
                      fe fe-cloud
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="cloud-drizzle">
                      <i
                        className="fe fe-cloud-drizzle"
                        data-bs-toggle="tooltip"
                        title="fe fe-cloud-drizzle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="cloud-drizzle">
                      fe fe-cloud-drizzle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="cloud-lightning">
                      <i
                        className="fe fe-cloud-lightning"
                        data-bs-toggle="tooltip"
                        title="fe fe-cloud-lightning"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="cloud-lightning"
                    >
                      fe fe-cloud-lightning
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="cloud-off">
                      <i
                        className="fe fe-cloud-off"
                        data-bs-toggle="tooltip"
                        title="fe fe-cloud-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="cloud-off">
                      fe fe-cloud-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="cloud-rain">
                      <i
                        className="fe fe-cloud-rain"
                        data-bs-toggle="tooltip"
                        title="fe fe-cloud-rain"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="cloud-rain">
                      fe fe-cloud-rain
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="cloud-snow">
                      <i
                        className="fe fe-cloud-snow"
                        data-bs-toggle="tooltip"
                        title="fe fe-cloud-snow"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="cloud-snow">
                      fe fe-cloud-snow
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="code">
                      <i
                        className="fe fe-code"
                        data-bs-toggle="tooltip"
                        title="fe fe-code"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="code">
                      fe fe-code
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="codepen">
                      <i
                        className="fe fe-codepen"
                        data-bs-toggle="tooltip"
                        title="fe fe-codepen"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="codepen">
                      fe fe-codepen
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="command">
                      <i
                        className="fe fe-command"
                        data-bs-toggle="tooltip"
                        title="fe fe-command"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="command">
                      fe fe-command
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="compass">
                      <i
                        className="fe fe-compass"
                        data-bs-toggle="tooltip"
                        title="fe fe-compass"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="compass">
                      fe fe-compass
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="copys">
                      <i
                        className="fe fe-copy"
                        data-bs-toggle="tooltip"
                        title="fe fe-copy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="copys">
                      fe fe-copy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="corner-down-left">
                      <i
                        className="fe fe-corner-down-left"
                        data-bs-toggle="tooltip"
                        title="fe fe-corner-down-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="corner-down-left"
                    >
                      fe fe-corner-down-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="corner-down-right">
                      <i
                        className="fe fe-corner-down-right"
                        data-bs-toggle="tooltip"
                        title="fe fe-corner-down-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="corner-down-right"
                    >
                      fe fe-corner-down-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="corner-left-down">
                      <i
                        className="fe fe-corner-left-down"
                        data-bs-toggle="tooltip"
                        title="fe fe-corner-left-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="corner-left-down"
                    >
                      fe fe-corner-left-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="corner-left-up">
                      <i
                        className="fe fe-corner-left-up"
                        data-bs-toggle="tooltip"
                        title="fe fe-corner-left-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="corner-left-up"
                    >
                      fe fe-corner-left-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="corner-right-down">
                      <i
                        className="fe fe-corner-right-down"
                        data-bs-toggle="tooltip"
                        title="fe fe-corner-right-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="corner-right-down"
                    >
                      fe fe-corner-right-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="corner-right-up">
                      <i
                        className="fe fe-corner-right-up"
                        data-bs-toggle="tooltip"
                        title="fe fe-corner-right-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="corner-right-up"
                    >
                      fe fe-corner-right-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="corner-up-left">
                      <i
                        className="fe fe-corner-up-left"
                        data-bs-toggle="tooltip"
                        title="fe fe-corner-up-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="corner-up-left"
                    >
                      fe fe-corner-up-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="corner-up-right">
                      <i
                        className="fe fe-corner-up-right"
                        data-bs-toggle="tooltip"
                        title="fe fe-corner-up-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="corner-up-right"
                    >
                      fe fe-corner-up-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="cpu">
                      <i
                        className="fe fe-cpu"
                        data-bs-toggle="tooltip"
                        title="fe fe-cpu"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="cpu">
                      fe fe-cpu
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="credit-card">
                      <i
                        className="fe fe-credit-card"
                        data-bs-toggle="tooltip"
                        title="fe fe-credit-card"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="credit-card">
                      fe fe-credit-card
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="crop">
                      <i
                        className="fe fe-crop"
                        data-bs-toggle="tooltip"
                        title="fe fe-crop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="crop">
                      fe fe-crop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="crosshair">
                      <i
                        className="fe fe-crosshair"
                        data-bs-toggle="tooltip"
                        title="fe fe-crosshair"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="crosshair">
                      fe fe-crosshair
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="database">
                      <i
                        className="fe fe-database"
                        data-bs-toggle="tooltip"
                        title="fe fe-database"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="database">
                      fe fe-database
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="delete">
                      <i
                        className="fe fe-delete"
                        data-bs-toggle="tooltip"
                        title="fe fe-delete"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="delete">
                      fe fe-delete
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="disc">
                      <i
                        className="fe fe-disc"
                        data-bs-toggle="tooltip"
                        title="fe fe-disc"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="disc">
                      fe fe-disc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="dollar-sign">
                      <i
                        className="fe fe-dollar-sign"
                        data-bs-toggle="tooltip"
                        title="fe fe-dollar-sign"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="dollar-sign">
                      fe fe-dollar-sign
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="download">
                      <i
                        className="fe fe-download"
                        data-bs-toggle="tooltip"
                        title="fe fe-download"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="download">
                      fe fe-download
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="download-cloud">
                      <i
                        className="fe fe-download-cloud"
                        data-bs-toggle="tooltip"
                        title="fe fe-download-cloud"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="download-cloud"
                    >
                      fe fe-download-cloud
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="droplet">
                      <i
                        className="fe fe-droplet"
                        data-bs-toggle="tooltip"
                        title="fe fe-droplet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="droplet">
                      fe fe-droplet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="edit">
                      <i
                        className="fe fe-edit"
                        data-bs-toggle="tooltip"
                        title="fe fe-edit"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="edit">
                      fe fe-edit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="edit-2">
                      <i
                        className="fe fe-edit-2"
                        data-bs-toggle="tooltip"
                        title="fe fe-edit-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="edit-2">
                      fe fe-edit-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="edit-3">
                      <i
                        className="fe fe-edit-3"
                        data-bs-toggle="tooltip"
                        title="fe fe-edit-3"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="edit-3">
                      fe fe-edit-3
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="external-link">
                      <i
                        className="fe fe-external-link"
                        data-bs-toggle="tooltip"
                        title="fe fe-external-link"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="external-link">
                      fe fe-external-link
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="eye">
                      <i
                        className="fe fe-eye"
                        data-bs-toggle="tooltip"
                        title="fe fe-eye"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="eye">
                      fe fe-eye
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="eye-off">
                      <i
                        className="fe fe-eye-off"
                        data-bs-toggle="tooltip"
                        title="fe fe-eye-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="eye-off">
                      fe fe-eye-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="facebook">
                      <i
                        className="fe fe-facebook"
                        data-bs-toggle="tooltip"
                        title="fe fe-facebook"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="facebook">
                      fe fe-facebook
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fast-forward">
                      <i
                        className="fe fe-fast-forward"
                        data-bs-toggle="tooltip"
                        title="fe fe-fast-forward"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fast-forward">
                      fe fe-fast-forward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="feather">
                      <i
                        className="fe fe-feather"
                        data-bs-toggle="tooltip"
                        title="fe fe-feather"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="feather">
                      fe fe-feather
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="file">
                      <i
                        className="fe fe-file"
                        data-bs-toggle="tooltip"
                        title="fe fe-file"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="file">
                      fe fe-file
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="file-minus">
                      <i
                        className="fe fe-file-minus"
                        data-bs-toggle="tooltip"
                        title="fe fe-file-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="file-minus">
                      fe fe-file-minus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="file-plus">
                      <i
                        className="fe fe-file-plus"
                        data-bs-toggle="tooltip"
                        title="fe fe-file-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="file-plus">
                      fe fe-file-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="file-text">
                      <i
                        className="fe fe-file-text"
                        data-bs-toggle="tooltip"
                        title="fe fe-file-text"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="file-text">
                      fe fe-file-text
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="film">
                      <i
                        className="fe fe-film"
                        data-bs-toggle="tooltip"
                        title="fe fe-film"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="film">
                      fe fe-film
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="filter">
                      <i
                        className="fe fe-filter"
                        data-bs-toggle="tooltip"
                        title="fe fe-filter"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="filter">
                      fe fe-filter
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="flag">
                      <i
                        className="fe fe-flag"
                        data-bs-toggle="tooltip"
                        title="fe fe-flag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="flag">
                      fe fe-flag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="folder">
                      <i
                        className="fe fe-folder"
                        data-bs-toggle="tooltip"
                        title="fe fe-folder"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="folder">
                      fe fe-folder
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="folder-minus">
                      <i
                        className="fe fe-folder-minus"
                        data-bs-toggle="tooltip"
                        title="fe fe-folder-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="folder-minus">
                      fe fe-folder-minus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="folder-plus">
                      <i
                        className="fe fe-folder-plus"
                        data-bs-toggle="tooltip"
                        title="fe fe-folder-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="folder-plus">
                      fe fe-folder-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="git-branch">
                      <i
                        className="fe fe-git-branch"
                        data-bs-toggle="tooltip"
                        title="fe fe-git-branch"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="git-branch">
                      fe fe-git-branch
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="git-commit">
                      <i
                        className="fe fe-git-commit"
                        data-bs-toggle="tooltip"
                        title="fe fe-git-commit"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="git-commit">
                      fe fe-git-commit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="git-merge">
                      <i
                        className="fe fe-git-merge"
                        data-bs-toggle="tooltip"
                        title="fe fe-git-merge"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="git-merge">
                      fe fe-git-merge
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="git-pull-request">
                      <i
                        className="fe fe-git-pull-request"
                        data-bs-toggle="tooltip"
                        title="fe fe-git-pull-request"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="git-pull-request"
                    >
                      fe fe-git-pull-request
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="github">
                      <i
                        className="fe fe-github"
                        data-bs-toggle="tooltip"
                        title="fe fe-github"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="github">
                      fe fe-github
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="gitlab">
                      <i
                        className="fe fe-gitlab"
                        data-bs-toggle="tooltip"
                        title="fe fe-gitlab"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="gitlab">
                      fe fe-gitlab
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="globe">
                      <i
                        className="fe fe-globe"
                        data-bs-toggle="tooltip"
                        title="fe fe-globe"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="globe">
                      fe fe-globe
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="grid">
                      <i
                        className="fe fe-grid"
                        data-bs-toggle="tooltip"
                        title="fe fe-grid"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="grid">
                      fe fe-grid
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="hard-drive">
                      <i
                        className="fe fe-hard-drive"
                        data-bs-toggle="tooltip"
                        title="fe fe-hard-drive"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="hard-drive">
                      fe fe-hard-drive
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="hash">
                      <i
                        className="fe fe-hash"
                        data-bs-toggle="tooltip"
                        title="fe fe-hash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="hash">
                      fe fe-hash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="headphones">
                      <i
                        className="fe fe-headphones"
                        data-bs-toggle="tooltip"
                        title="fe fe-headphones"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="headphones">
                      fe fe-headphones
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="heart">
                      <i
                        className="fe fe-heart"
                        data-bs-toggle="tooltip"
                        title="fe fe-heart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="heart">
                      fe fe-heart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="help-circle">
                      <i
                        className="fe fe-help-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-help-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="help-circle">
                      fe fe-help-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="home">
                      <i
                        className="fe fe-home"
                        data-bs-toggle="tooltip"
                        title="fe fe-home"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="home">
                      fe fe-home
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="image">
                      <i
                        className="fe fe-image"
                        data-bs-toggle="tooltip"
                        title="fe fe-image"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="image">
                      fe fe-image
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="inbox">
                      <i
                        className="fe fe-inbox"
                        data-bs-toggle="tooltip"
                        title="fe fe-inbox"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="inbox">
                      fe fe-inbox
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="info">
                      <i
                        className="fe fe-info"
                        data-bs-toggle="tooltip"
                        title="fe fe-info"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="info">
                      fe fe-info
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="instagram">
                      <i
                        className="fe fe-instagram"
                        data-bs-toggle="tooltip"
                        title="fe fe-instagram"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="instagram">
                      fe fe-instagram
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="italic">
                      <i
                        className="fe fe-italic"
                        data-bs-toggle="tooltip"
                        title="fe fe-italic"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="italic">
                      fe fe-italic
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="layers">
                      <i
                        className="fe fe-layers"
                        data-bs-toggle="tooltip"
                        title="fe fe-layers"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="layers">
                      fe fe-layers
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="layout">
                      <i
                        className="fe fe-layout"
                        data-bs-toggle="tooltip"
                        title="fe fe-layout"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="layout">
                      fe fe-layout
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="life-buoy">
                      <i
                        className="fe fe-life-buoy"
                        data-bs-toggle="tooltip"
                        title="fe fe-life-buoy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="life-buoy">
                      fe fe-life-buoy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="link-1">
                      <i
                        className="fe fe-link"
                        data-bs-toggle="tooltip"
                        title="fe fe-link"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="link-1">
                      fe fe-link
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="link-2">
                      <i
                        className="fe fe-link-2"
                        data-bs-toggle="tooltip"
                        title="fe fe-link-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="link-2">
                      fe fe-link-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="linkedin">
                      <i
                        className="fe fe-linkedin"
                        data-bs-toggle="tooltip"
                        title="fe fe-linkedin"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="linkedin">
                      fe fe-linkedin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="list">
                      <i
                        className="fe fe-list"
                        data-bs-toggle="tooltip"
                        title="fe fe-list"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="list">
                      fe fe-list
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="loader">
                      <i
                        className="fe fe-loader"
                        data-bs-toggle="tooltip"
                        title="fe fe-loader"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="loader">
                      fe fe-loader
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="lock">
                      <i
                        className="fe fe-lock"
                        data-bs-toggle="tooltip"
                        title="fe fe-lock"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="lock">
                      fe fe-lock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="log-in">
                      <i
                        className="fe fe-log-in"
                        data-bs-toggle="tooltip"
                        title="fe fe-log-in"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="log-in">
                      fe fe-log-in
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="log-out">
                      <i
                        className="fe fe-log-out"
                        data-bs-toggle="tooltip"
                        title="fe fe-log-out"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="log-out">
                      fe fe-log-out
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mail">
                      <i
                        className="fe fe-mail"
                        data-bs-toggle="tooltip"
                        title="fe fe-mail"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mail">
                      fe fe-mail
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="map">
                      <i
                        className="fe fe-map"
                        data-bs-toggle="tooltip"
                        title="fe fe-map"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="map">
                      fe fe-map
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="map-pin">
                      <i
                        className="fe fe-map-pin"
                        data-bs-toggle="tooltip"
                        title="fe fe-map-pin"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="map-pin">
                      fe fe-map-pin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="maximize">
                      <i
                        className="fe fe-maximize"
                        data-bs-toggle="tooltip"
                        title="fe fe-maximize"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="maximize">
                      fe fe-maximize
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="maximize-2">
                      <i
                        className="fe fe-maximize-2"
                        data-bs-toggle="tooltip"
                        title="fe fe-maximize-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="maximize-2">
                      fe fe-maximize-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="menu">
                      <i
                        className="fe fe-menu"
                        data-bs-toggle="tooltip"
                        title="fe fe-menu"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="menu">
                      fe fe-menu
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="message-circle">
                      <i
                        className="fe fe-message-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-message-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="message-circle"
                    >
                      fe fe-message-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="message-square">
                      <i
                        className="fe fe-message-square"
                        data-bs-toggle="tooltip"
                        title="fe fe-message-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="message-square"
                    >
                      fe fe-message-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mic">
                      <i
                        className="fe fe-mic"
                        data-bs-toggle="tooltip"
                        title="fe fe-mic"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mic">
                      fe fe-mic
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="mic-off">
                      <i
                        className="fe fe-mic-off"
                        data-bs-toggle="tooltip"
                        title="fe fe-mic-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="mic-off">
                      fe fe-mic-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="minimize">
                      <i
                        className="fe fe-minimize"
                        data-bs-toggle="tooltip"
                        title="fe fe-minimize"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="minimize">
                      fe fe-minimize
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="minimize-2">
                      <i
                        className="fe fe-minimize-2"
                        data-bs-toggle="tooltip"
                        title="fe fe-minimize-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="minimize-2">
                      fe fe-minimize-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="minus">
                      <i
                        className="fe fe-minus"
                        data-bs-toggle="tooltip"
                        title="fe fe-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="minus">
                      fe fe-minus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="minus-circle">
                      <i
                        className="fe fe-minus-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-minus-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="minus-circle">
                      fe fe-minus-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="minus-square">
                      <i
                        className="fe fe-minus-square"
                        data-bs-toggle="tooltip"
                        title="fe fe-minus-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="minus-square">
                      fe fe-minus-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="monitor">
                      <i
                        className="fe fe-monitor"
                        data-bs-toggle="tooltip"
                        title="fe fe-monitor"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="monitor">
                      fe fe-monitor
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="moon">
                      <i
                        className="fe fe-moon"
                        data-bs-toggle="tooltip"
                        title="fe fe-moon"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="moon">
                      fe fe-moon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="more-horizontal">
                      <i
                        className="fe fe-more-horizontal"
                        data-bs-toggle="tooltip"
                        title="fe fe-more-horizontal"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="more-horizontal"
                    >
                      fe fe-more-horizontal
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="more-vertical">
                      <i
                        className="fe fe-more-vertical"
                        data-bs-toggle="tooltip"
                        title="fe fe-more-vertical"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="more-vertical">
                      fe fe-more-vertical
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="move">
                      <i
                        className="fe fe-move"
                        data-bs-toggle="tooltip"
                        title="fe fe-move"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="move">
                      fe fe-move
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="music">
                      <i
                        className="fe fe-music"
                        data-bs-toggle="tooltip"
                        title="fe fe-music"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="music">
                      fe fe-music
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="navigation">
                      <i
                        className="fe fe-navigation"
                        data-bs-toggle="tooltip"
                        title="fe fe-navigation"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="navigation">
                      fe fe-navigation
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="navigation-2">
                      <i
                        className="fe fe-navigation-2"
                        data-bs-toggle="tooltip"
                        title="fe fe-navigation-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="navigation-2">
                      fe fe-navigation-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="octagon">
                      <i
                        className="fe fe-octagon"
                        data-bs-toggle="tooltip"
                        title="fe fe-octagon"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="octagon">
                      fe fe-octagon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="package">
                      <i
                        className="fe fe-package"
                        data-bs-toggle="tooltip"
                        title="fe fe-package"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="package">
                      fe fe-package
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="paperclip">
                      <i
                        className="fe fe-paperclip"
                        data-bs-toggle="tooltip"
                        title="fe fe-paperclip"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="paperclip">
                      fe fe-paperclip
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="pause">
                      <i
                        className="fe fe-pause"
                        data-bs-toggle="tooltip"
                        title="fe fe-pause"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="pause">
                      fe fe-pause
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="pause-circle">
                      <i
                        className="fe fe-pause-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-pause-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="pause-circle">
                      fe fe-pause-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="percent">
                      <i
                        className="fe fe-percent"
                        data-bs-toggle="tooltip"
                        title="fe fe-percent"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="percent">
                      fe fe-percent
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="phone">
                      <i
                        className="fe fe-phone"
                        data-bs-toggle="tooltip"
                        title="fe fe-phone"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="phone">
                      fe fe-phone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="phone-call">
                      <i
                        className="fe fe-phone-call"
                        data-bs-toggle="tooltip"
                        title="fe fe-phone-call"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="phone-call">
                      fe fe-phone-call
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="phone-forwarded">
                      <i
                        className="fe fe-phone-forwarded"
                        data-bs-toggle="tooltip"
                        title="fe fe-phone-forwarded"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="phone-forwarded"
                    >
                      fe fe-phone-forwarded
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="phone-incoming">
                      <i
                        className="fe fe-phone-incoming"
                        data-bs-toggle="tooltip"
                        title="fe fe-phone-incoming"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="phone-incoming"
                    >
                      fe fe-phone-incoming
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="phone-missed">
                      <i
                        className="fe fe-phone-missed"
                        data-bs-toggle="tooltip"
                        title="fe fe-phone-missed"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="phone-missed">
                      fe fe-phone-missed
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="phone-off">
                      <i
                        className="fe fe-phone-off"
                        data-bs-toggle="tooltip"
                        title="fe fe-phone-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="phone-off">
                      fe fe-phone-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="phone-outgoing">
                      <i
                        className="fe fe-phone-outgoing"
                        data-bs-toggle="tooltip"
                        title="fe fe-phone-outgoing"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="phone-outgoing"
                    >
                      fe fe-phone-outgoing
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="pies-chart">
                      <i
                        className="fe fe-pie-chart"
                        data-bs-toggle="tooltip"
                        title="fe fe-pie-chart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="pies-chart">
                      fe fe-pie-chart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="play">
                      <i
                        className="fe fe-play"
                        data-bs-toggle="tooltip"
                        title="fe fe-play"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="play">
                      fe fe-play
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="play-circle">
                      <i
                        className="fe fe-play-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-play-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="play-circle">
                      fe fe-play-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="plus">
                      <i
                        className="fe fe-plus"
                        data-bs-toggle="tooltip"
                        title="fe fe-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="plus">
                      fe fe-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="plus-circle">
                      <i
                        className="fe fe-plus-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-plus-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="plus-circle">
                      fe fe-plus-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="plus-square">
                      <i
                        className="fe fe-plus-square"
                        data-bs-toggle="tooltip"
                        title="fe fe-plus-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="plus-square">
                      fe fe-plus-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="pocket">
                      <i
                        className="fe fe-pocket"
                        data-bs-toggle="tooltip"
                        title="fe fe-pocket"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="pocket">
                      fe fe-pocket
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="power">
                      <i
                        className="fe fe-power"
                        data-bs-toggle="tooltip"
                        title="fe fe-power"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="power">
                      fe fe-power
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="printer">
                      <i
                        className="fe fe-printer"
                        data-bs-toggle="tooltip"
                        title="fe fe-printer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="printer">
                      fe fe-printer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="radio">
                      <i
                        className="fe fe-radio"
                        data-bs-toggle="tooltip"
                        title="fe fe-radio"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="radio">
                      fe fe-radio
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="refresh-ccw">
                      <i
                        className="fe fe-refresh-ccw"
                        data-bs-toggle="tooltip"
                        title="fe fe-refresh-ccw"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="refresh-ccw">
                      fe fe-refresh-ccw
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="refresh-cw">
                      <i
                        className="fe fe-refresh-cw"
                        data-bs-toggle="tooltip"
                        title="fe fe-refresh-cw"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="refresh-cw">
                      fe fe-refresh-cw
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="repeat">
                      <i
                        className="fe fe-repeat"
                        data-bs-toggle="tooltip"
                        title="fe fe-repeat"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="repeat">
                      fe fe-repeat
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="rewind">
                      <i
                        className="fe fe-rewind"
                        data-bs-toggle="tooltip"
                        title="fe fe-rewind"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="rewind">
                      fe fe-rewind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="rotate-ccw">
                      <i
                        className="fe fe-rotate-ccw"
                        data-bs-toggle="tooltip"
                        title="fe fe-rotate-ccw"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="rotate-ccw">
                      fe fe-rotate-ccw
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="rotate-cw">
                      <i
                        className="fe fe-rotate-cw"
                        data-bs-toggle="tooltip"
                        title="fe fe-rotate-cw"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="rotate-cw">
                      fe fe-rotate-cw
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="rss">
                      <i
                        className="fe fe-rss"
                        data-bs-toggle="tooltip"
                        title="fe fe-rss"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="rss">
                      fe fe-rss
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="save">
                      <i
                        className="fe fe-save"
                        data-bs-toggle="tooltip"
                        title="fe fe-save"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="save">
                      fe fe-save
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="scissors">
                      <i
                        className="fe fe-scissors"
                        data-bs-toggle="tooltip"
                        title="fe fe-scissors"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="scissors">
                      fe fe-scissors
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="search">
                      <i
                        className="fe fe-search"
                        data-bs-toggle="tooltip"
                        title="fe fe-search"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="search">
                      fe fe-search
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="send">
                      <i
                        className="fe fe-send"
                        data-bs-toggle="tooltip"
                        title="fe fe-send"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="send">
                      fe fe-send
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="server">
                      <i
                        className="fe fe-server"
                        data-bs-toggle="tooltip"
                        title="fe fe-server"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="server">
                      fe fe-server
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="settings">
                      <i
                        className="fe fe-settings"
                        data-bs-toggle="tooltip"
                        title="fe fe-settings"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="settings">
                      fe fe-settings
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="share">
                      <i
                        className="fe fe-share"
                        data-bs-toggle="tooltip"
                        title="fe fe-share"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="share">
                      fe fe-share
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="share-2">
                      <i
                        className="fe fe-share-2"
                        data-bs-toggle="tooltip"
                        title="fe fe-share-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="share-2">
                      fe fe-share-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="shield">
                      <i
                        className="fe fe-shield"
                        data-bs-toggle="tooltip"
                        title="fe fe-shield"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="shield">
                      fe fe-shield
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="shield-off">
                      <i
                        className="fe fe-shield-off"
                        data-bs-toggle="tooltip"
                        title="fe fe-shield-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="shield-off">
                      fe fe-shield-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="shopping-bag">
                      <i
                        className="fe fe-shopping-bag"
                        data-bs-toggle="tooltip"
                        title="fe fe-shopping-bag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="shopping-bag">
                      fe fe-shopping-bag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="shopping-cart">
                      <i
                        className="fe fe-shopping-cart"
                        data-bs-toggle="tooltip"
                        title="fe fe-shopping-cart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="shopping-cart">
                      fe fe-shopping-cart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="shuffle">
                      <i
                        className="fe fe-shuffle"
                        data-bs-toggle="tooltip"
                        title="fe fe-shuffle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="shuffle">
                      fe fe-shuffle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="sidebar">
                      <i
                        className="fe fe-sidebar"
                        data-bs-toggle="tooltip"
                        title="fe fe-sidebar"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="sidebar">
                      fe fe-sidebar
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="skip-back">
                      <i
                        className="fe fe-skip-back"
                        data-bs-toggle="tooltip"
                        title="fe fe-skip-back"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="skip-back">
                      fe fe-skip-back
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="skip-forward">
                      <i
                        className="fe fe-skip-forward"
                        data-bs-toggle="tooltip"
                        title="fe fe-skip-forward"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="skip-forward">
                      fe fe-skip-forward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="slack">
                      <i
                        className="fe fe-slack"
                        data-bs-toggle="tooltip"
                        title="fe fe-slack"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="slack">
                      fe fe-slack
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="slash">
                      <i
                        className="fe fe-slash"
                        data-bs-toggle="tooltip"
                        title="fe fe-slash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="slash">
                      fe fe-slash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="sliders">
                      <i
                        className="fe fe-sliders"
                        data-bs-toggle="tooltip"
                        title="fe fe-sliders"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="sliders">
                      fe fe-sliders
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="smartphone">
                      <i
                        className="fe fe-smartphone"
                        data-bs-toggle="tooltip"
                        title="fe fe-smartphone"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="smartphone">
                      fe fe-smartphone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="speaker">
                      <i
                        className="fe fe-speaker"
                        data-bs-toggle="tooltip"
                        title="fe fe-speaker"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="speaker">
                      fe fe-speaker
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="square">
                      <i
                        className="fe fe-square"
                        data-bs-toggle="tooltip"
                        title="fe fe-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="square">
                      fe fe-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="star">
                      <i
                        className="fe fe-star"
                        data-bs-toggle="tooltip"
                        title="fe fe-star"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="star">
                      fe fe-star
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="stop-circle">
                      <i
                        className="fe fe-stop-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-stop-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="stop-circle">
                      fe fe-stop-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="sun">
                      <i
                        className="fe fe-sun"
                        data-bs-toggle="tooltip"
                        title="fe fe-sun"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="sun">
                      fe fe-sun
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="sunrise">
                      <i
                        className="fe fe-sunrise"
                        data-bs-toggle="tooltip"
                        title="fe fe-sunrise"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="sunrise">
                      fe fe-sunrise
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="sunset">
                      <i
                        className="fe fe-sunset"
                        data-bs-toggle="tooltip"
                        title="fe fe-sunset"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="sunset">
                      fe fe-sunset
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="tablet">
                      <i
                        className="fe fe-tablet"
                        data-bs-toggle="tooltip"
                        title="fe fe-tablet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="tablet">
                      fe fe-tablet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="tag">
                      <i
                        className="fe fe-tag"
                        data-bs-toggle="tooltip"
                        title="fe fe-tag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="tag">
                      fe fe-tag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="target">
                      <i
                        className="fe fe-target"
                        data-bs-toggle="tooltip"
                        title="fe fe-target"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="target">
                      fe fe-target
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="terminal">
                      <i
                        className="fe fe-terminal"
                        data-bs-toggle="tooltip"
                        title="fe fe-terminal"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="terminal">
                      fe fe-terminal
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="thermometer">
                      <i
                        className="fe fe-thermometer"
                        data-bs-toggle="tooltip"
                        title="fe fe-thermometer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="thermometer">
                      fe fe-thermometer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="thumbs-down">
                      <i
                        className="fe fe-thumbs-down"
                        data-bs-toggle="tooltip"
                        title="fe fe-thumbs-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="thumbs-down">
                      fe fe-thumbs-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="thumbs-up">
                      <i
                        className="fe fe-thumbs-up"
                        data-bs-toggle="tooltip"
                        title="fe fe-thumbs-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="thumbs-up">
                      fe fe-thumbs-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="toggle-left">
                      <i
                        className="fe fe-toggle-left"
                        data-bs-toggle="tooltip"
                        title="fe fe-toggle-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="toggle-left">
                      fe fe-toggle-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="toggle-right">
                      <i
                        className="fe fe-toggle-right"
                        data-bs-toggle="tooltip"
                        title="fe fe-toggle-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="toggle-right">
                      fe fe-toggle-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="trash">
                      <i
                        className="fe fe-trash"
                        data-bs-toggle="tooltip"
                        title="fe fe-trash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="trash">
                      fe fe-trash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="trash-2">
                      <i
                        className="fe fe-trash-2"
                        data-bs-toggle="tooltip"
                        title="fe fe-trash-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="trash-2">
                      fe fe-trash-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="trending-down">
                      <i
                        className="fe fe-trending-down"
                        data-bs-toggle="tooltip"
                        title="fe fe-trending-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="trending-down">
                      fe fe-trending-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="trending-up">
                      <i
                        className="fe fe-trending-up"
                        data-bs-toggle="tooltip"
                        title="fe fe-trending-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="trending-up">
                      fe fe-trending-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="triangle">
                      <i
                        className="fe fe-triangle"
                        data-bs-toggle="tooltip"
                        title="fe fe-triangle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="triangle">
                      fe fe-triangle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="truck">
                      <i
                        className="fe fe-truck"
                        data-bs-toggle="tooltip"
                        title="fe fe-truck"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="truck">
                      fe fe-truck
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="tv">
                      <i
                        className="fe fe-tv"
                        data-bs-toggle="tooltip"
                        title="fe fe-tv"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="tv">
                      fe fe-tv
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="twitter">
                      <i
                        className="fe fe-twitter"
                        data-bs-toggle="tooltip"
                        title="fe fe-twitter"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="twitter">
                      fe fe-twitter
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="type">
                      <i
                        className="fe fe-type"
                        data-bs-toggle="tooltip"
                        title="fe fe-type"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="type">
                      fe fe-type
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="umbrella">
                      <i
                        className="fe fe-umbrella"
                        data-bs-toggle="tooltip"
                        title="fe fe-umbrella"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="umbrella">
                      fe fe-umbrella
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="underline">
                      <i
                        className="fe fe-underline"
                        data-bs-toggle="tooltip"
                        title="fe fe-underline"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="underline">
                      fe fe-underline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="unlock">
                      <i
                        className="fe fe-unlock"
                        data-bs-toggle="tooltip"
                        title="fe fe-unlock"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="unlock">
                      fe fe-unlock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="upload">
                      <i
                        className="fe fe-upload"
                        data-bs-toggle="tooltip"
                        title="fe fe-upload"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="upload">
                      fe fe-upload
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="upload-cloud">
                      <i
                        className="fe fe-upload-cloud"
                        data-bs-toggle="tooltip"
                        title="fe fe-upload-cloud"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="upload-cloud">
                      fe fe-upload-cloud
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="user">
                      <i
                        className="fe fe-user"
                        data-bs-toggle="tooltip"
                        title="fe fe-user"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="user">
                      fe fe-user
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="user-check">
                      <i
                        className="fe fe-user-check"
                        data-bs-toggle="tooltip"
                        title="fe fe-user-check"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="user-check">
                      fe fe-user-check
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="user-minus">
                      <i
                        className="fe fe-user-minus"
                        data-bs-toggle="tooltip"
                        title="fe fe-user-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="user-minus">
                      fe fe-user-minus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="user-plus">
                      <i
                        className="fe fe-user-plus"
                        data-bs-toggle="tooltip"
                        title="fe fe-user-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="user-plus">
                      fe fe-user-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="user-x">
                      <i
                        className="fe fe-user-x"
                        data-bs-toggle="tooltip"
                        title="fe fe-user-x"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="user-x">
                      fe fe-user-x
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="users">
                      <i
                        className="fe fe-users"
                        data-bs-toggle="tooltip"
                        title="fe fe-users"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="users">
                      fe fe-users
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="video">
                      <i
                        className="fe fe-video"
                        data-bs-toggle="tooltip"
                        title="fe fe-video"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="video">
                      fe fe-video
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="video-off">
                      <i
                        className="fe fe-video-off"
                        data-bs-toggle="tooltip"
                        title="fe fe-video-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="video-off">
                      fe fe-video-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="voicemail">
                      <i
                        className="fe fe-voicemail"
                        data-bs-toggle="tooltip"
                        title="fe fe-voicemail"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="voicemail">
                      fe fe-voicemail
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="volume">
                      <i
                        className="fe fe-volume"
                        data-bs-toggle="tooltip"
                        title="fe fe-volume"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="volume">
                      fe fe-volume
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="volume-1">
                      <i
                        className="fe fe-volume-1"
                        data-bs-toggle="tooltip"
                        title="fe fe-volume-1"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="volume-1">
                      fe fe-volume-1
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="volume-2">
                      <i
                        className="fe fe-volume-2"
                        data-bs-toggle="tooltip"
                        title="fe fe-volume-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="volume-2">
                      fe fe-volume-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="volume-x">
                      <i
                        className="fe fe-volume-x"
                        data-bs-toggle="tooltip"
                        title="fe fe-volume-x"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="volume-x">
                      fe fe-volume-x
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="watch">
                      <i
                        className="fe fe-watch"
                        data-bs-toggle="tooltip"
                        title="fe fe-watch"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="watch">
                      fe fe-watch
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wifi">
                      <i
                        className="fe fe-wifi"
                        data-bs-toggle="tooltip"
                        title="fe fe-wifi"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wifi">
                      fe fe-wifi
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wifi-off">
                      <i
                        className="fe fe-wifi-off"
                        data-bs-toggle="tooltip"
                        title="fe fe-wifi-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wifi-off">
                      fe fe-wifi-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wind">
                      <i
                        className="fe fe-wind"
                        data-bs-toggle="tooltip"
                        title="fe fe-wind"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wind">
                      fe fe-wind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="x">
                      <i
                        className="fe fe-x"
                        data-bs-toggle="tooltip"
                        title="fe fe-x"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="x">
                      fe fe-x
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="x-circle">
                      <i
                        className="fe fe-x-circle"
                        data-bs-toggle="tooltip"
                        title="fe fe-x-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="x-circle">
                      fe fe-x-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="x-square">
                      <i
                        className="fe fe-x-square"
                        data-bs-toggle="tooltip"
                        title="fe fe-x-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="x-square">
                      fe fe-x-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zap">
                      <i
                        className="fe fe-zap"
                        data-bs-toggle="tooltip"
                        title="fe fe-zap"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zap">
                      fe fe-zap
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zap-off">
                      <i
                        className="fe fe-zap-off"
                        data-bs-toggle="tooltip"
                        title="fe fe-zap-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zap-off">
                      fe fe-zap-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zoom-in">
                      <i
                        className="fe fe-zoom-in"
                        data-bs-toggle="tooltip"
                        title="fe fe-zoom-in"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zoom-in">
                      fe fe-zoom-in
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="zoom-out">
                      <i
                        className="fe fe-zoom-out"
                        data-bs-toggle="tooltip"
                        title="fe fe-zoom-out"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="zoom-out">
                      fe fe-zoom-out
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

FeatherIcons.propTypes = {};

FeatherIcons.defaultProps = {};

export default FeatherIcons;
