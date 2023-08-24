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

const FontAwesome = () => (
  <div>
    <PageHeaders
      title="Font Awesome Icons"
      home="Home"
      name="Icons"
      fonticonsname="Font Awesome Icons"
    />
    {/* <!--End Page header--> */}

    {/* <!-- Row--> */}
    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Font Awesome</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="12" sm="12" className=" mb-4">
                <p className="mb-2">
                  Powered by Font Awesome set. For more info{" "}
                  <a href="http://fontawesome.io" target="_blank" className="text-primary">
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="fa fa-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col lg="12" sm="12">
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item" id="fa-500px">
                      <i
                        className="fa fa-500px"
                        data-bs-toggle="tooltip"
                        title="fa fa-500px"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-500px">
                      fa fa-500px
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-address-book">
                      <i
                        className="fa fa-address-book"
                        data-bs-toggle="tooltip"
                        title="fa fa-address-book"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-address-book"
                    >
                      fa fa-address-book
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-address-book-o">
                      <i
                        className="fa fa-address-book-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-address-book-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-address-book-o"
                    >
                      fa fa-address-book-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-address-card">
                      <i
                        className="fa fa-address-card"
                        data-bs-toggle="tooltip"
                        title="fa fa-address-card"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-address-card"
                    >
                      fa fa-address-card
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-address-card-o">
                      <i
                        className="fa fa-address-card-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-address-card-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-address-card-o"
                    >
                      fa fa-address-card-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-adjust">
                      <i
                        className="fa fa-adjust"
                        data-bs-toggle="tooltip"
                        title="fa fa-adjust"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-adjust">
                      fa fa-adjust
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-adn">
                      <i
                        className="fa fa-adn"
                        data-bs-toggle="tooltip"
                        title="fa fa-adn"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-adn">
                      fa fa-adn
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-align-center">
                      <i
                        className="fa fa-align-center"
                        data-bs-toggle="tooltip"
                        title="fa fa-align-center"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-align-center"
                    >
                      fa fa-align-center
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-align-justify">
                      <i
                        className="fa fa-align-justify"
                        data-bs-toggle="tooltip"
                        title="fa fa-align-justify"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-align-justify"
                    >
                      fa fa-align-justify
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-align-left">
                      <i
                        className="fa fa-align-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-align-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-align-left">
                      fa fa-align-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-align-right">
                      <i
                        className="fa fa-align-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-align-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-align-right"
                    >
                      fa fa-align-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-amazon">
                      <i
                        className="fa fa-amazon"
                        data-bs-toggle="tooltip"
                        title="fa fa-amazon"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-amazon">
                      fa fa-amazon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-ambulance">
                      <i
                        className="fa fa-ambulance"
                        data-bs-toggle="tooltip"
                        title="fa fa-ambulance"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-ambulance">
                      fa fa-ambulance
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-american-sign-langu">
                      <i
                        className="fa fa-american-sign-language-interpreting"
                        data-bs-toggle="tooltip"
                        title="fa fa-american-sign-language-interpreting"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-american-sign-langu"
                    >
                      fa fa-american-sign-language-interpreting
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-anchor">
                      <i
                        className="fa fa-anchor"
                        data-bs-toggle="tooltip"
                        title="fa fa-anchor"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-anchor">
                      fa fa-anchor
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-android">
                      <i
                        className="fa fa-android"
                        data-bs-toggle="tooltip"
                        title="fa fa-android"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-android">
                      fa fa-android
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-angellist">
                      <i
                        className="fa fa-angellist"
                        data-bs-toggle="tooltip"
                        title="fa fa-angellist"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-angellist">
                      fa fa-angellist
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-angle-double-down">
                      <i
                        className="fa fa-angle-double-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-angle-double-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-angle-double-down"
                    >
                      fa fa-angle-double-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-angle-double-left">
                      <i
                        className="fa fa-angle-double-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-angle-double-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-angle-double-left"
                    >
                      fa fa-angle-double-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-angle-double-right">
                      <i
                        className="fa fa-angle-double-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-angle-double-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-angle-double-right"
                    >
                      fa fa-angle-double-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-angle-double-up">
                      <i
                        className="fa fa-angle-double-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-angle-double-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-angle-double-up"
                    >
                      fa fa-angle-double-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-angle-down">
                      <i
                        className="fa fa-angle-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-angle-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-angle-down">
                      fa fa-angle-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-angle-left">
                      <i
                        className="fa fa-angle-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-angle-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-angle-left">
                      fa fa-angle-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-angle-right">
                      <i
                        className="fa fa-angle-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-angle-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-angle-right"
                    >
                      fa fa-angle-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-angle-up">
                      <i
                        className="fa fa-angle-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-angle-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-angle-up">
                      fa fa-angle-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-apple">
                      <i
                        className="fa fa-apple"
                        data-bs-toggle="tooltip"
                        title="fa fa-apple"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-apple">
                      fa fa-apple
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-archive">
                      <i
                        className="fa fa-archive"
                        data-bs-toggle="tooltip"
                        title="fa fa-archive"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-archive">
                      fa fa-archive
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-area-chart">
                      <i
                        className="fa fa-area-chart"
                        data-bs-toggle="tooltip"
                        title="fa fa-area-chart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-area-chart">
                      fa fa-area-chart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrow-circle-down">
                      <i
                        className="fa fa-arrow-circle-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrow-circle-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-arrow-circle-down"
                    >
                      fa fa-arrow-circle-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrow-circle-left">
                      <i
                        className="fa fa-arrow-circle-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrow-circle-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-arrow-circle-left"
                    >
                      fa fa-arrow-circle-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrow-circle-o-down">
                      <i
                        className="fa fa-arrow-circle-o-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrow-circle-o-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-arrow-circle-o-down"
                    >
                      fa fa-arrow-circle-o-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrow-circle-o-left">
                      <i
                        className="fa fa-arrow-circle-o-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrow-circle-o-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-arrow-circle-o-left"
                    >
                      fa fa-arrow-circle-o-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrow-circle-o-righ">
                      <i
                        className="fa fa-arrow-circle-o-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrow-circle-o-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-arrow-circle-o-righ"
                    >
                      fa fa-arrow-circle-o-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrow-circle-o-up">
                      <i
                        className="fa fa-arrow-circle-o-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrow-circle-o-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-arrow-circle-o-up"
                    >
                      fa fa-arrow-circle-o-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrow-circle-right">
                      <i
                        className="fa fa-arrow-circle-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrow-circle-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-arrow-circle-right"
                    >
                      fa fa-arrow-circle-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrow-circle-up">
                      <i
                        className="fa fa-arrow-circle-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrow-circle-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-arrow-circle-up"
                    >
                      fa fa-arrow-circle-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrow-down">
                      <i
                        className="fa fa-arrow-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrow-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-arrow-down">
                      fa fa-arrow-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrow-left">
                      <i
                        className="fa fa-arrow-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrow-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-arrow-left">
                      fa fa-arrow-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrow-right">
                      <i
                        className="fa fa-arrow-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrow-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-arrow-right"
                    >
                      fa fa-arrow-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrow-up">
                      <i
                        className="fa fa-arrow-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrow-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-arrow-up">
                      fa fa-arrow-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrows">
                      <i
                        className="fa fa-arrows"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrows"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-arrows">
                      fa fa-arrows
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrows-alt">
                      <i
                        className="fa fa-arrows-alt"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrows-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-arrows-alt">
                      fa fa-arrows-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrows-h">
                      <i
                        className="fa fa-arrows-h"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrows-h"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-arrows-h">
                      fa fa-arrows-h
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-arrows-v">
                      <i
                        className="fa fa-arrows-v"
                        data-bs-toggle="tooltip"
                        title="fa fa-arrows-v"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-arrows-v">
                      fa fa-arrows-v
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-asl-interpreting">
                      <i
                        className="fa fa-asl-interpreting"
                        data-bs-toggle="tooltip"
                        title="fa fa-asl-interpreting"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-asl-interpreting"
                    >
                      fa fa-asl-interpreting
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-assistive-listening">
                      <i
                        className="fa fa-assistive-listening-systems"
                        data-bs-toggle="tooltip"
                        title="fa fa-assistive-listening-systems"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-assistive-listening"
                    >
                      fa fa-assistive-listening-systems
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-asterisk">
                      <i
                        className="fa fa-asterisk"
                        data-bs-toggle="tooltip"
                        title="fa fa-asterisk"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-asterisk">
                      fa fa-asterisk
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-at">
                      <i
                        className="fa fa-at"
                        data-bs-toggle="tooltip"
                        title="fa fa-at"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-at">
                      fa fa-at
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-audio-description">
                      <i
                        className="fa fa-audio-description"
                        data-bs-toggle="tooltip"
                        title="fa fa-audio-description"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-audio-description"
                    >
                      fa fa-audio-description
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-automobile">
                      <i
                        className="fa fa-automobile"
                        data-bs-toggle="tooltip"
                        title="fa fa-automobile"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-automobile">
                      fa fa-automobile
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-backward">
                      <i
                        className="fa fa-backward"
                        data-bs-toggle="tooltip"
                        title="fa fa-backward"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-backward">
                      fa fa-backward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-balance-scale">
                      <i
                        className="fa fa-balance-scale"
                        data-bs-toggle="tooltip"
                        title="fa fa-balance-scale"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-balance-scale"
                    >
                      fa fa-balance-scale
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-ban">
                      <i
                        className="fa fa-ban"
                        data-bs-toggle="tooltip"
                        title="fa fa-ban"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-ban">
                      fa fa-ban
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bandcamp">
                      <i
                        className="fa fa-bandcamp"
                        data-bs-toggle="tooltip"
                        title="fa fa-bandcamp"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bandcamp">
                      fa fa-bandcamp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bank">
                      <i
                        className="fa fa-bank"
                        data-bs-toggle="tooltip"
                        title="fa fa-bank"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bank">
                      fa fa-bank
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bar-chart">
                      <i
                        className="fa fa-bar-chart"
                        data-bs-toggle="tooltip"
                        title="fa fa-bar-chart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bar-chart">
                      fa fa-bar-chart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bar-chart-o">
                      <i
                        className="fa fa-bar-chart-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-bar-chart-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-bar-chart-o"
                    >
                      fa fa-bar-chart-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-barcode">
                      <i
                        className="fa fa-barcode"
                        data-bs-toggle="tooltip"
                        title="fa fa-barcode"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-barcode">
                      fa fa-barcode
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bars">
                      <i
                        className="fa fa-bars"
                        data-bs-toggle="tooltip"
                        title="fa fa-bars"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bars">
                      fa fa-bars
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bath">
                      <i
                        className="fa fa-bath"
                        data-bs-toggle="tooltip"
                        title="fa fa-bath"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bath">
                      fa fa-bath
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bathtub">
                      <i
                        className="fa fa-bathtub"
                        data-bs-toggle="tooltip"
                        title="fa fa-bathtub"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bathtub">
                      fa fa-bathtub
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-battery">
                      <i
                        className="fa fa-battery"
                        data-bs-toggle="tooltip"
                        title="fa fa-battery"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-battery">
                      fa fa-battery
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-battery-0">
                      <i
                        className="fa fa-battery-0"
                        data-bs-toggle="tooltip"
                        title="fa fa-battery-0"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-battery-0">
                      fa fa-battery-0
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-battery-1">
                      <i
                        className="fa fa-battery-1"
                        data-bs-toggle="tooltip"
                        title="fa fa-battery-1"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-battery-1">
                      fa fa-battery-1
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-battery-2">
                      <i
                        className="fa fa-battery-2"
                        data-bs-toggle="tooltip"
                        title="fa fa-battery-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-battery-2">
                      fa fa-battery-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-battery-3">
                      <i
                        className="fa fa-battery-3"
                        data-bs-toggle="tooltip"
                        title="fa fa-battery-3"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-battery-3">
                      fa fa-battery-3
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-battery-4">
                      <i
                        className="fa fa-battery-4"
                        data-bs-toggle="tooltip"
                        title="fa fa-battery-4"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-battery-4">
                      fa fa-battery-4
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-battery-empty">
                      <i
                        className="fa fa-battery-empty"
                        data-bs-toggle="tooltip"
                        title="fa fa-battery-empty"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-battery-empty"
                    >
                      fa fa-battery-empty
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-battery-full">
                      <i
                        className="fa fa-battery-full"
                        data-bs-toggle="tooltip"
                        title="fa fa-battery-full"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-battery-full"
                    >
                      fa fa-battery-full
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-battery-half">
                      <i
                        className="fa fa-battery-half"
                        data-bs-toggle="tooltip"
                        title="fa fa-battery-half"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-battery-half"
                    >
                      fa fa-battery-half
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-battery-quarter">
                      <i
                        className="fa fa-battery-quarter"
                        data-bs-toggle="tooltip"
                        title="fa fa-battery-quarter"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-battery-quarter"
                    >
                      fa fa-battery-quarter
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-battery-three-quart">
                      <i
                        className="fa fa-battery-three-quarters"
                        data-bs-toggle="tooltip"
                        title="fa fa-battery-three-quarters"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-battery-three-quart"
                    >
                      fa fa-battery-three-quarters
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bed">
                      <i
                        className="fa fa-bed"
                        data-bs-toggle="tooltip"
                        title="fa fa-bed"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bed">
                      fa fa-bed
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-beer">
                      <i
                        className="fa fa-beer"
                        data-bs-toggle="tooltip"
                        title="fa fa-beer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-beer">
                      fa fa-beer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-behance">
                      <i
                        className="fa fa-behance"
                        data-bs-toggle="tooltip"
                        title="fa fa-behance"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-behance">
                      fa fa-behance
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-behance-square">
                      <i
                        className="fa fa-behance-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-behance-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-behance-square"
                    >
                      fa fa-behance-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bell">
                      <i
                        className="fa fa-bell"
                        data-bs-toggle="tooltip"
                        title="fa fa-bell"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bell">
                      fa fa-bell
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bell-o">
                      <i
                        className="fa fa-bell-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-bell-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bell-o">
                      fa fa-bell-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bell-slash">
                      <i
                        className="fa fa-bell-slash"
                        data-bs-toggle="tooltip"
                        title="fa fa-bell-slash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bell-slash">
                      fa fa-bell-slash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bell-slash-o">
                      <i
                        className="fa fa-bell-slash-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-bell-slash-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-bell-slash-o"
                    >
                      fa fa-bell-slash-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bicycle">
                      <i
                        className="fa fa-bicycle"
                        data-bs-toggle="tooltip"
                        title="fa fa-bicycle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bicycle">
                      fa fa-bicycle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-binoculars">
                      <i
                        className="fa fa-binoculars"
                        data-bs-toggle="tooltip"
                        title="fa fa-binoculars"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-binoculars">
                      fa fa-binoculars
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-birthday-cake">
                      <i
                        className="fa fa-birthday-cake"
                        data-bs-toggle="tooltip"
                        title="fa fa-birthday-cake"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-birthday-cake"
                    >
                      fa fa-birthday-cake
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bitbucket">
                      <i
                        className="fa fa-bitbucket"
                        data-bs-toggle="tooltip"
                        title="fa fa-bitbucket"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bitbucket">
                      fa fa-bitbucket
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bitbucket-square">
                      <i
                        className="fa fa-bitbucket-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-bitbucket-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-bitbucket-square"
                    >
                      fa fa-bitbucket-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bitcoin">
                      <i
                        className="fa fa-bitcoin"
                        data-bs-toggle="tooltip"
                        title="fa fa-bitcoin"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bitcoin">
                      fa fa-bitcoin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-black-tie">
                      <i
                        className="fa fa-black-tie"
                        data-bs-toggle="tooltip"
                        title="fa fa-black-tie"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-black-tie">
                      fa fa-black-tie
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-blind">
                      <i
                        className="fa fa-blind"
                        data-bs-toggle="tooltip"
                        title="fa fa-blind"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-blind">
                      fa fa-blind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bluetooth">
                      <i
                        className="fa fa-bluetooth"
                        data-bs-toggle="tooltip"
                        title="fa fa-bluetooth"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bluetooth">
                      fa fa-bluetooth
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bluetooth-b">
                      <i
                        className="fa fa-bluetooth-b"
                        data-bs-toggle="tooltip"
                        title="fa fa-bluetooth-b"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-bluetooth-b"
                    >
                      fa fa-bluetooth-b
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bold">
                      <i
                        className="fa fa-bold"
                        data-bs-toggle="tooltip"
                        title="fa fa-bold"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bold">
                      fa fa-bold
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bolt">
                      <i
                        className="fa fa-bolt"
                        data-bs-toggle="tooltip"
                        title="fa fa-bolt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bolt">
                      fa fa-bolt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bomb">
                      <i
                        className="fa fa-bomb"
                        data-bs-toggle="tooltip"
                        title="fa fa-bomb"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bomb">
                      fa fa-bomb
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-book">
                      <i
                        className="fa fa-book"
                        data-bs-toggle="tooltip"
                        title="fa fa-book"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-book">
                      fa fa-book
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bookmark">
                      <i
                        className="fa fa-bookmark"
                        data-bs-toggle="tooltip"
                        title="fa fa-bookmark"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bookmark">
                      fa fa-bookmark
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bookmark-o">
                      <i
                        className="fa fa-bookmark-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-bookmark-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bookmark-o">
                      fa fa-bookmark-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-braille">
                      <i
                        className="fa fa-braille"
                        data-bs-toggle="tooltip"
                        title="fa fa-braille"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-braille">
                      fa fa-braille
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-briefcase">
                      <i
                        className="fa fa-briefcase"
                        data-bs-toggle="tooltip"
                        title="fa fa-briefcase"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-briefcase">
                      fa fa-briefcase
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-btc">
                      <i
                        className="fa fa-btc"
                        data-bs-toggle="tooltip"
                        title="fa fa-btc"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-btc">
                      fa fa-btc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bug">
                      <i
                        className="fa fa-bug"
                        data-bs-toggle="tooltip"
                        title="fa fa-bug"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bug">
                      fa fa-bug
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-building">
                      <i
                        className="fa fa-building"
                        data-bs-toggle="tooltip"
                        title="fa fa-building"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-building">
                      fa fa-building
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-building-o">
                      <i
                        className="fa fa-building-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-building-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-building-o">
                      fa fa-building-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bullhorn">
                      <i
                        className="fa fa-bullhorn"
                        data-bs-toggle="tooltip"
                        title="fa fa-bullhorn"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bullhorn">
                      fa fa-bullhorn
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bullseye">
                      <i
                        className="fa fa-bullseye"
                        data-bs-toggle="tooltip"
                        title="fa fa-bullseye"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bullseye">
                      fa fa-bullseye
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-bus">
                      <i
                        className="fa fa-bus"
                        data-bs-toggle="tooltip"
                        title="fa fa-bus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-bus">
                      fa fa-bus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-buysellads">
                      <i
                        className="fa fa-buysellads"
                        data-bs-toggle="tooltip"
                        title="fa fa-buysellads"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-buysellads">
                      fa fa-buysellads
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cab">
                      <i
                        className="fa fa-cab"
                        data-bs-toggle="tooltip"
                        title="fa fa-cab"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cab">
                      fa fa-cab
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-calculator">
                      <i
                        className="fa fa-calculator"
                        data-bs-toggle="tooltip"
                        title="fa fa-calculator"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-calculator">
                      fa fa-calculator
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-calendar">
                      <i
                        className="fa fa-calendar"
                        data-bs-toggle="tooltip"
                        title="fa fa-calendar"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-calendar">
                      fa fa-calendar
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-calendar-check-o">
                      <i
                        className="fa fa-calendar-check-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-calendar-check-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-calendar-check-o"
                    >
                      fa fa-calendar-check-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-calendar-minus-o">
                      <i
                        className="fa fa-calendar-minus-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-calendar-minus-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-calendar-minus-o"
                    >
                      fa fa-calendar-minus-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-calendar-o">
                      <i
                        className="fa fa-calendar-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-calendar-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-calendar-o">
                      fa fa-calendar-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-calendar-plus-o">
                      <i
                        className="fa fa-calendar-plus-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-calendar-plus-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-calendar-plus-o"
                    >
                      fa fa-calendar-plus-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-calendar-times-o">
                      <i
                        className="fa fa-calendar-times-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-calendar-times-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-calendar-times-o"
                    >
                      fa fa-calendar-times-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-camera">
                      <i
                        className="fa fa-camera"
                        data-bs-toggle="tooltip"
                        title="fa fa-camera"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-camera">
                      fa fa-camera
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-camera-retro">
                      <i
                        className="fa fa-camera-retro"
                        data-bs-toggle="tooltip"
                        title="fa fa-camera-retro"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-camera-retro"
                    >
                      fa fa-camera-retro
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-car">
                      <i
                        className="fa fa-car"
                        data-bs-toggle="tooltip"
                        title="fa fa-car"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-car">
                      fa fa-car
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-caret-down">
                      <i
                        className="fa fa-caret-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-caret-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-caret-down">
                      fa fa-caret-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-caret-left">
                      <i
                        className="fa fa-caret-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-caret-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-caret-left">
                      fa fa-caret-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-caret-right">
                      <i
                        className="fa fa-caret-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-caret-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-caret-right"
                    >
                      fa fa-caret-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-caret-square-o-down">
                      <i
                        className="fa fa-caret-square-o-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-caret-square-o-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-caret-square-o-down"
                    >
                      fa fa-caret-square-o-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-caret-square-o-left">
                      <i
                        className="fa fa-caret-square-o-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-caret-square-o-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-caret-square-o-left"
                    >
                      fa fa-caret-square-o-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-caret-square-o-righ">
                      <i
                        className="fa fa-caret-square-o-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-caret-square-o-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-caret-square-o-righ"
                    >
                      fa fa-caret-square-o-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-caret-square-o-up">
                      <i
                        className="fa fa-caret-square-o-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-caret-square-o-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-caret-square-o-up"
                    >
                      fa fa-caret-square-o-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-caret-up">
                      <i
                        className="fa fa-caret-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-caret-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-caret-up">
                      fa fa-caret-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cart-arrow-down">
                      <i
                        className="fa fa-cart-arrow-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-cart-arrow-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-cart-arrow-down"
                    >
                      fa fa-cart-arrow-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cart-plus">
                      <i
                        className="fa fa-cart-plus"
                        data-bs-toggle="tooltip"
                        title="fa fa-cart-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cart-plus">
                      fa fa-cart-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cc">
                      <i
                        className="fa fa-cc"
                        data-bs-toggle="tooltip"
                        title="fa fa-cc"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cc">
                      fa fa-cc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cc-amex">
                      <i
                        className="fa fa-cc-amex"
                        data-bs-toggle="tooltip"
                        title="fa fa-cc-amex"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cc-amex">
                      fa fa-cc-amex
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cc-diners-club">
                      <i
                        className="fa fa-cc-diners-club"
                        data-bs-toggle="tooltip"
                        title="fa fa-cc-diners-club"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-cc-diners-club"
                    >
                      fa fa-cc-diners-club
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cc-discover">
                      <i
                        className="fa fa-cc-discover"
                        data-bs-toggle="tooltip"
                        title="fa fa-cc-discover"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-cc-discover"
                    >
                      fa fa-cc-discover
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cc-jcb">
                      <i
                        className="fa fa-cc-jcb"
                        data-bs-toggle="tooltip"
                        title="fa fa-cc-jcb"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cc-jcb">
                      fa fa-cc-jcb
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cc-mastercard">
                      <i
                        className="fa fa-cc-mastercard"
                        data-bs-toggle="tooltip"
                        title="fa fa-cc-mastercard"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-cc-mastercard"
                    >
                      fa fa-cc-mastercard
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cc-paypal">
                      <i
                        className="fa fa-cc-paypal"
                        data-bs-toggle="tooltip"
                        title="fa fa-cc-paypal"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cc-paypal">
                      fa fa-cc-paypal
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cc-stripe">
                      <i
                        className="fa fa-cc-stripe"
                        data-bs-toggle="tooltip"
                        title="fa fa-cc-stripe"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cc-stripe">
                      fa fa-cc-stripe
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cc-visa">
                      <i
                        className="fa fa-cc-visa"
                        data-bs-toggle="tooltip"
                        title="fa fa-cc-visa"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cc-visa">
                      fa fa-cc-visa
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-certificate">
                      <i
                        className="fa fa-certificate"
                        data-bs-toggle="tooltip"
                        title="fa fa-certificate"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-certificate"
                    >
                      fa fa-certificate
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-chain">
                      <i
                        className="fa fa-chain"
                        data-bs-toggle="tooltip"
                        title="fa fa-chain"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-chain">
                      fa fa-chain
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-chain-broken">
                      <i
                        className="fa fa-chain-broken"
                        data-bs-toggle="tooltip"
                        title="fa fa-chain-broken"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-chain-broken"
                    >
                      fa fa-chain-broken
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-check">
                      <i
                        className="fa fa-check"
                        data-bs-toggle="tooltip"
                        title="fa fa-check"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-check">
                      fa fa-check
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-check-circle">
                      <i
                        className="fa fa-check-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-check-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-check-circle"
                    >
                      fa fa-check-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-check-circle-o">
                      <i
                        className="fa fa-check-circle-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-check-circle-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-check-circle-o"
                    >
                      fa fa-check-circle-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-check-square">
                      <i
                        className="fa fa-check-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-check-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-check-square"
                    >
                      fa fa-check-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-check-square-o">
                      <i
                        className="fa fa-check-square-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-check-square-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-check-square-o"
                    >
                      fa fa-check-square-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-chevron-circle-down">
                      <i
                        className="fa fa-chevron-circle-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-chevron-circle-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-chevron-circle-down"
                    >
                      fa fa-chevron-circle-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-chevron-circle-left">
                      <i
                        className="fa fa-chevron-circle-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-chevron-circle-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-chevron-circle-left"
                    >
                      fa fa-chevron-circle-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-chevron-circle-righ">
                      <i
                        className="fa fa-chevron-circle-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-chevron-circle-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-chevron-circle-righ"
                    >
                      fa fa-chevron-circle-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-chevron-circle-up">
                      <i
                        className="fa fa-chevron-circle-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-chevron-circle-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-chevron-circle-up"
                    >
                      fa fa-chevron-circle-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-chevron-down">
                      <i
                        className="fa fa-chevron-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-chevron-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-chevron-down"
                    >
                      fa fa-chevron-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-chevron-left">
                      <i
                        className="fa fa-chevron-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-chevron-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-chevron-left"
                    >
                      fa fa-chevron-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-chevron-right">
                      <i
                        className="fa fa-chevron-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-chevron-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-chevron-right"
                    >
                      fa fa-chevron-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-chevron-up">
                      <i
                        className="fa fa-chevron-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-chevron-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-chevron-up">
                      fa fa-chevron-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-child">
                      <i
                        className="fa fa-child"
                        data-bs-toggle="tooltip"
                        title="fa fa-child"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-child">
                      fa fa-child
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-chrome">
                      <i
                        className="fa fa-chrome"
                        data-bs-toggle="tooltip"
                        title="fa fa-chrome"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-chrome">
                      fa fa-chrome
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-circle">
                      <i
                        className="fa fa-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-circle">
                      fa fa-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-circle-o">
                      <i
                        className="fa fa-circle-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-circle-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-circle-o">
                      fa fa-circle-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-circle-o-notch">
                      <i
                        className="fa fa-circle-o-notch"
                        data-bs-toggle="tooltip"
                        title="fa fa-circle-o-notch"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-circle-o-notch"
                    >
                      fa fa-circle-o-notch
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-circle-thin">
                      <i
                        className="fa fa-circle-thin"
                        data-bs-toggle="tooltip"
                        title="fa fa-circle-thin"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-circle-thin"
                    >
                      fa fa-circle-thin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-clipboard">
                      <i
                        className="fa fa-clipboard"
                        data-bs-toggle="tooltip"
                        title="fa fa-clipboard"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-clipboard">
                      fa fa-clipboard
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-clock-o">
                      <i
                        className="fa fa-clock-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-clock-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-clock-o">
                      fa fa-clock-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-clone">
                      <i
                        className="fa fa-clone"
                        data-bs-toggle="tooltip"
                        title="fa fa-clone"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-clone">
                      fa fa-clone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-close">
                      <i
                        className="fa fa-close"
                        data-bs-toggle="tooltip"
                        title="fa fa-close"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-close">
                      fa fa-close
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cloud">
                      <i
                        className="fa fa-cloud"
                        data-bs-toggle="tooltip"
                        title="fa fa-cloud"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cloud">
                      fa fa-cloud
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cloud-download">
                      <i
                        className="fa fa-cloud-download"
                        data-bs-toggle="tooltip"
                        title="fa fa-cloud-download"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-cloud-download"
                    >
                      fa fa-cloud-download
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cloud-upload">
                      <i
                        className="fa fa-cloud-upload"
                        data-bs-toggle="tooltip"
                        title="fa fa-cloud-upload"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-cloud-upload"
                    >
                      fa fa-cloud-upload
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cny">
                      <i
                        className="fa fa-cny"
                        data-bs-toggle="tooltip"
                        title="fa fa-cny"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cny">
                      fa fa-cny
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-code">
                      <i
                        className="fa fa-code"
                        data-bs-toggle="tooltip"
                        title="fa fa-code"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-code">
                      fa fa-code
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-code-fork">
                      <i
                        className="fa fa-code-fork"
                        data-bs-toggle="tooltip"
                        title="fa fa-code-fork"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-code-fork">
                      fa fa-code-fork
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-codepen">
                      <i
                        className="fa fa-codepen"
                        data-bs-toggle="tooltip"
                        title="fa fa-codepen"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-codepen">
                      fa fa-codepen
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-codiepie">
                      <i
                        className="fa fa-codiepie"
                        data-bs-toggle="tooltip"
                        title="fa fa-codiepie"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-codiepie">
                      fa fa-codiepie
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-coffee">
                      <i
                        className="fa fa-coffee"
                        data-bs-toggle="tooltip"
                        title="fa fa-coffee"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-coffee">
                      fa fa-coffee
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cog">
                      <i
                        className="fa fa-cog"
                        data-bs-toggle="tooltip"
                        title="fa fa-cog"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cog">
                      fa fa-cog
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cogs">
                      <i
                        className="fa fa-cogs"
                        data-bs-toggle="tooltip"
                        title="fa fa-cogs"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cogs">
                      fa fa-cogs
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-columns">
                      <i
                        className="fa fa-columns"
                        data-bs-toggle="tooltip"
                        title="fa fa-columns"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-columns">
                      fa fa-columns
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-comment">
                      <i
                        className="fa fa-comment"
                        data-bs-toggle="tooltip"
                        title="fa fa-comment"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-comment">
                      fa fa-comment
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-comment-o">
                      <i
                        className="fa fa-comment-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-comment-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-comment-o">
                      fa fa-comment-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-commenting">
                      <i
                        className="fa fa-commenting"
                        data-bs-toggle="tooltip"
                        title="fa fa-commenting"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-commenting">
                      fa fa-commenting
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-commenting-o">
                      <i
                        className="fa fa-commenting-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-commenting-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-commenting-o"
                    >
                      fa fa-commenting-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-comments">
                      <i
                        className="fa fa-comments"
                        data-bs-toggle="tooltip"
                        title="fa fa-comments"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-comments">
                      fa fa-comments
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-comments-o">
                      <i
                        className="fa fa-comments-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-comments-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-comments-o">
                      fa fa-comments-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-compass">
                      <i
                        className="fa fa-compass"
                        data-bs-toggle="tooltip"
                        title="fa fa-compass"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-compass">
                      fa fa-compass
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-compress">
                      <i
                        className="fa fa-compress"
                        data-bs-toggle="tooltip"
                        title="fa fa-compress"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-compress">
                      fa fa-compress
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-connectdevelop">
                      <i
                        className="fa fa-connectdevelop"
                        data-bs-toggle="tooltip"
                        title="fa fa-connectdevelop"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-connectdevelop"
                    >
                      fa fa-connectdevelop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-contao">
                      <i
                        className="fa fa-contao"
                        data-bs-toggle="tooltip"
                        title="fa fa-contao"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-contao">
                      fa fa-contao
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-copy">
                      <i
                        className="fa fa-copy"
                        data-bs-toggle="tooltip"
                        title="fa fa-copy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-copy">
                      fa fa-copy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-copyright">
                      <i
                        className="fa fa-copyright"
                        data-bs-toggle="tooltip"
                        title="fa fa-copyright"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-copyright">
                      fa fa-copyright
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-creative-commons">
                      <i
                        className="fa fa-creative-commons"
                        data-bs-toggle="tooltip"
                        title="fa fa-creative-commons"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-creative-commons"
                    >
                      fa fa-creative-commons
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-credit-card">
                      <i
                        className="fa fa-credit-card"
                        data-bs-toggle="tooltip"
                        title="fa fa-credit-card"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-credit-card"
                    >
                      fa fa-credit-card
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-credit-card-alt">
                      <i
                        className="fa fa-credit-card-alt"
                        data-bs-toggle="tooltip"
                        title="fa fa-credit-card-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-credit-card-alt"
                    >
                      fa fa-credit-card-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-crop">
                      <i
                        className="fa fa-crop"
                        data-bs-toggle="tooltip"
                        title="fa fa-crop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-crop">
                      fa fa-crop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-crosshairs">
                      <i
                        className="fa fa-crosshairs"
                        data-bs-toggle="tooltip"
                        title="fa fa-crosshairs"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-crosshairs">
                      fa fa-crosshairs
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-css3">
                      <i
                        className="fa fa-css3"
                        data-bs-toggle="tooltip"
                        title="fa fa-css3"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-css3">
                      fa fa-css3
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cube">
                      <i
                        className="fa fa-cube"
                        data-bs-toggle="tooltip"
                        title="fa fa-cube"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cube">
                      fa fa-cube
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cubes">
                      <i
                        className="fa fa-cubes"
                        data-bs-toggle="tooltip"
                        title="fa fa-cubes"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cubes">
                      fa fa-cubes
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cut">
                      <i
                        className="fa fa-cut"
                        data-bs-toggle="tooltip"
                        title="fa fa-cut"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cut">
                      fa fa-cut
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-cutlery">
                      <i
                        className="fa fa-cutlery"
                        data-bs-toggle="tooltip"
                        title="fa fa-cutlery"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-cutlery">
                      fa fa-cutlery
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-dashboard">
                      <i
                        className="fa fa-dashboard"
                        data-bs-toggle="tooltip"
                        title="fa fa-dashboard"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-dashboard">
                      fa fa-dashboard
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-dashcube">
                      <i
                        className="fa fa-dashcube"
                        data-bs-toggle="tooltip"
                        title="fa fa-dashcube"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-dashcube">
                      fa fa-dashcube
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-database">
                      <i
                        className="fa fa-database"
                        data-bs-toggle="tooltip"
                        title="fa fa-database"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-database">
                      fa fa-database
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-deaf">
                      <i
                        className="fa fa-deaf"
                        data-bs-toggle="tooltip"
                        title="fa fa-deaf"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-deaf">
                      fa fa-deaf
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-deafness">
                      <i
                        className="fa fa-deafness"
                        data-bs-toggle="tooltip"
                        title="fa fa-deafness"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-deafness">
                      fa fa-deafness
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-dedent">
                      <i
                        className="fa fa-dedent"
                        data-bs-toggle="tooltip"
                        title="fa fa-dedent"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-dedent">
                      fa fa-dedent
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-delicious">
                      <i
                        className="fa fa-delicious"
                        data-bs-toggle="tooltip"
                        title="fa fa-delicious"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-delicious">
                      fa fa-delicious
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-desktop">
                      <i
                        className="fa fa-desktop"
                        data-bs-toggle="tooltip"
                        title="fa fa-desktop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-desktop">
                      fa fa-desktop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-deviantart">
                      <i
                        className="fa fa-deviantart"
                        data-bs-toggle="tooltip"
                        title="fa fa-deviantart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-deviantart">
                      fa fa-deviantart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-diamond">
                      <i
                        className="fa fa-diamond"
                        data-bs-toggle="tooltip"
                        title="fa fa-diamond"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-diamond">
                      fa fa-diamond
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-digg">
                      <i
                        className="fa fa-digg"
                        data-bs-toggle="tooltip"
                        title="fa fa-digg"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-digg">
                      fa fa-digg
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-dollar">
                      <i
                        className="fa fa-dollar"
                        data-bs-toggle="tooltip"
                        title="fa fa-dollar"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-dollar">
                      fa fa-dollar
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-dot-circle-o">
                      <i
                        className="fa fa-dot-circle-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-dot-circle-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-dot-circle-o"
                    >
                      fa fa-dot-circle-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-download">
                      <i
                        className="fa fa-download"
                        data-bs-toggle="tooltip"
                        title="fa fa-download"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-download">
                      fa fa-download
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-dribbble">
                      <i
                        className="fa fa-dribbble"
                        data-bs-toggle="tooltip"
                        title="fa fa-dribbble"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-dribbble">
                      fa fa-dribbble
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-drivers-license">
                      <i
                        className="fa fa-drivers-license"
                        data-bs-toggle="tooltip"
                        title="fa fa-drivers-license"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-drivers-license"
                    >
                      fa fa-drivers-license
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-drivers-license-o">
                      <i
                        className="fa fa-drivers-license-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-drivers-license-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-drivers-license-o"
                    >
                      fa fa-drivers-license-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-dropbox">
                      <i
                        className="fa fa-dropbox"
                        data-bs-toggle="tooltip"
                        title="fa fa-dropbox"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-dropbox">
                      fa fa-dropbox
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-drupal">
                      <i
                        className="fa fa-drupal"
                        data-bs-toggle="tooltip"
                        title="fa fa-drupal"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-drupal">
                      fa fa-drupal
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-edge">
                      <i
                        className="fa fa-edge"
                        data-bs-toggle="tooltip"
                        title="fa fa-edge"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-edge">
                      fa fa-edge
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-edit">
                      <i
                        className="fa fa-edit"
                        data-bs-toggle="tooltip"
                        title="fa fa-edit"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-edit">
                      fa fa-edit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-eercast">
                      <i
                        className="fa fa-eercast"
                        data-bs-toggle="tooltip"
                        title="fa fa-eercast"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-eercast">
                      fa fa-eercast
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-eject">
                      <i
                        className="fa fa-eject"
                        data-bs-toggle="tooltip"
                        title="fa fa-eject"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-eject">
                      fa fa-eject
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-ellipsis-h">
                      <i
                        className="fa fa-ellipsis-h"
                        data-bs-toggle="tooltip"
                        title="fa fa-ellipsis-h"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-ellipsis-h">
                      fa fa-ellipsis-h
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-ellipsis-v">
                      <i
                        className="fa fa-ellipsis-v"
                        data-bs-toggle="tooltip"
                        title="fa fa-ellipsis-v"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-ellipsis-v">
                      fa fa-ellipsis-v
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-empire">
                      <i
                        className="fa fa-empire"
                        data-bs-toggle="tooltip"
                        title="fa fa-empire"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-empire">
                      fa fa-empire
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-envelope">
                      <i
                        className="fa fa-envelope"
                        data-bs-toggle="tooltip"
                        title="fa fa-envelope"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-envelope">
                      fa fa-envelope
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-envelope-o">
                      <i
                        className="fa fa-envelope-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-envelope-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-envelope-o">
                      fa fa-envelope-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-envelope-open">
                      <i
                        className="fa fa-envelope-open"
                        data-bs-toggle="tooltip"
                        title="fa fa-envelope-open"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-envelope-open"
                    >
                      fa fa-envelope-open
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-envelope-open-o">
                      <i
                        className="fa fa-envelope-open-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-envelope-open-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-envelope-open-o"
                    >
                      fa fa-envelope-open-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-envelope-square">
                      <i
                        className="fa fa-envelope-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-envelope-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-envelope-square"
                    >
                      fa fa-envelope-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-envira">
                      <i
                        className="fa fa-envira"
                        data-bs-toggle="tooltip"
                        title="fa fa-envira"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-envira">
                      fa fa-envira
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-eraser">
                      <i
                        className="fa fa-eraser"
                        data-bs-toggle="tooltip"
                        title="fa fa-eraser"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-eraser">
                      fa fa-eraser
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-etsy">
                      <i
                        className="fa fa-etsy"
                        data-bs-toggle="tooltip"
                        title="fa fa-etsy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-etsy">
                      fa fa-etsy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-eur">
                      <i
                        className="fa fa-eur"
                        data-bs-toggle="tooltip"
                        title="fa fa-eur"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-eur">
                      fa fa-eur
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-euro">
                      <i
                        className="fa fa-euro"
                        data-bs-toggle="tooltip"
                        title="fa fa-euro"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-euro">
                      fa fa-euro
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-exchange">
                      <i
                        className="fa fa-exchange"
                        data-bs-toggle="tooltip"
                        title="fa fa-exchange"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-exchange">
                      fa fa-exchange
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-exclamation">
                      <i
                        className="fa fa-exclamation"
                        data-bs-toggle="tooltip"
                        title="fa fa-exclamation"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-exclamation"
                    >
                      fa fa-exclamation
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-exclamation-circle">
                      <i
                        className="fa fa-exclamation-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-exclamation-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-exclamation-circle"
                    >
                      fa fa-exclamation-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-exclamation-triangl">
                      <i
                        className="fa fa-exclamation-triangle"
                        data-bs-toggle="tooltip"
                        title="fa fa-exclamation-triangle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-exclamation-triangl"
                    >
                      fa fa-exclamation-triangle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-expand">
                      <i
                        className="fa fa-expand"
                        data-bs-toggle="tooltip"
                        title="fa fa-expand"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-expand">
                      fa fa-expand
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-expeditedssl">
                      <i
                        className="fa fa-expeditedssl"
                        data-bs-toggle="tooltip"
                        title="fa fa-expeditedssl"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-expeditedssl"
                    >
                      fa fa-expeditedssl
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-external-link">
                      <i
                        className="fa fa-external-link"
                        data-bs-toggle="tooltip"
                        title="fa fa-external-link"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-external-link"
                    >
                      fa fa-external-link
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-external-link-squar">
                      <i
                        className="fa fa-external-link-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-external-link-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-external-link-squar"
                    >
                      fa fa-external-link-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-eye">
                      <i
                        className="fa fa-eye"
                        data-bs-toggle="tooltip"
                        title="fa fa-eye"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-eye">
                      fa fa-eye
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-eye-slash">
                      <i
                        className="fa fa-eye-slash"
                        data-bs-toggle="tooltip"
                        title="fa fa-eye-slash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-eye-slash">
                      fa fa-eye-slash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-eyedropper">
                      <i
                        className="fa fa-eyedropper"
                        data-bs-toggle="tooltip"
                        title="fa fa-eyedropper"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-eyedropper">
                      fa fa-eyedropper
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-fa">
                      <i
                        className="fa fa-fa"
                        data-bs-toggle="tooltip"
                        title="fa fa-fa"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-fa">
                      fa fa-fa
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-facebook">
                      <i
                        className="fa fa-facebook"
                        data-bs-toggle="tooltip"
                        title="fa fa-facebook"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-facebook">
                      fa fa-facebook
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-facebook-f">
                      <i
                        className="fa fa-facebook-f"
                        data-bs-toggle="tooltip"
                        title="fa fa-facebook-f"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-facebook-f">
                      fa fa-facebook-f
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-facebook-official">
                      <i
                        className="fa fa-facebook-official"
                        data-bs-toggle="tooltip"
                        title="fa fa-facebook-official"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-facebook-official"
                    >
                      fa fa-facebook-official
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-facebook-square">
                      <i
                        className="fa fa-facebook-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-facebook-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-facebook-square"
                    >
                      fa fa-facebook-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-fast-backward">
                      <i
                        className="fa fa-fast-backward"
                        data-bs-toggle="tooltip"
                        title="fa fa-fast-backward"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-fast-backward"
                    >
                      fa fa-fast-backward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-fast-forward">
                      <i
                        className="fa fa-fast-forward"
                        data-bs-toggle="tooltip"
                        title="fa fa-fast-forward"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-fast-forward"
                    >
                      fa fa-fast-forward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-fax">
                      <i
                        className="fa fa-fax"
                        data-bs-toggle="tooltip"
                        title="fa fa-fax"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-fax">
                      fa fa-fax
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-feed">
                      <i
                        className="fa fa-feed"
                        data-bs-toggle="tooltip"
                        title="fa fa-feed"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-feed">
                      fa fa-feed
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-female">
                      <i
                        className="fa fa-female"
                        data-bs-toggle="tooltip"
                        title="fa fa-female"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-female">
                      fa fa-female
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-fighter-jet">
                      <i
                        className="fa fa-fighter-jet"
                        data-bs-toggle="tooltip"
                        title="fa fa-fighter-jet"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-fighter-jet"
                    >
                      fa fa-fighter-jet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file">
                      <i
                        className="fa fa-file"
                        data-bs-toggle="tooltip"
                        title="fa fa-file"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-file">
                      fa fa-file
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-archive-o">
                      <i
                        className="fa fa-file-archive-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-archive-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-archive-o"
                    >
                      fa fa-file-archive-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-audio-o">
                      <i
                        className="fa fa-file-audio-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-audio-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-audio-o"
                    >
                      fa fa-file-audio-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-code-o">
                      <i
                        className="fa fa-file-code-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-code-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-code-o"
                    >
                      fa fa-file-code-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-excel-o">
                      <i
                        className="fa fa-file-excel-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-excel-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-excel-o"
                    >
                      fa fa-file-excel-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-image-o">
                      <i
                        className="fa fa-file-image-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-image-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-image-o"
                    >
                      fa fa-file-image-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-movie-o">
                      <i
                        className="fa fa-file-movie-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-movie-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-movie-o"
                    >
                      fa fa-file-movie-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-o">
                      <i
                        className="fa fa-file-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-file-o">
                      fa fa-file-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-pdf-o">
                      <i
                        className="fa fa-file-pdf-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-pdf-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-file-pdf-o">
                      fa fa-file-pdf-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-photo-o">
                      <i
                        className="fa fa-file-photo-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-photo-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-photo-o"
                    >
                      fa fa-file-photo-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-picture-o">
                      <i
                        className="fa fa-file-picture-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-picture-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-picture-o"
                    >
                      fa fa-file-picture-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-powerpoint-o">
                      <i
                        className="fa fa-file-powerpoint-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-powerpoint-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-powerpoint-o"
                    >
                      fa fa-file-powerpoint-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-sound-o">
                      <i
                        className="fa fa-file-sound-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-sound-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-sound-o"
                    >
                      fa fa-file-sound-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-text">
                      <i
                        className="fa fa-file-text"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-text"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-file-text">
                      fa fa-file-text
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-text-o">
                      <i
                        className="fa fa-file-text-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-text-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-text-o"
                    >
                      fa fa-file-text-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-video-o">
                      <i
                        className="fa fa-file-video-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-video-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-video-o"
                    >
                      fa fa-file-video-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-word-o">
                      <i
                        className="fa fa-file-word-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-word-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-file-word-o"
                    >
                      fa fa-file-word-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-file-zip-o">
                      <i
                        className="fa fa-file-zip-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-file-zip-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-file-zip-o">
                      fa fa-file-zip-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-files-o">
                      <i
                        className="fa fa-files-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-files-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-files-o">
                      fa fa-files-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-film">
                      <i
                        className="fa fa-film"
                        data-bs-toggle="tooltip"
                        title="fa fa-film"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-film">
                      fa fa-film
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-filter">
                      <i
                        className="fa fa-filter"
                        data-bs-toggle="tooltip"
                        title="fa fa-filter"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-filter">
                      fa fa-filter
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-fire">
                      <i
                        className="fa fa-fire"
                        data-bs-toggle="tooltip"
                        title="fa fa-fire"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-fire">
                      fa fa-fire
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-fire-extinguisher">
                      <i
                        className="fa fa-fire-extinguisher"
                        data-bs-toggle="tooltip"
                        title="fa fa-fire-extinguisher"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-fire-extinguisher"
                    >
                      fa fa-fire-extinguisher
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-firefox">
                      <i
                        className="fa fa-firefox"
                        data-bs-toggle="tooltip"
                        title="fa fa-firefox"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-firefox">
                      fa fa-firefox
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-first-order">
                      <i
                        className="fa fa-first-order"
                        data-bs-toggle="tooltip"
                        title="fa fa-first-order"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-first-order"
                    >
                      fa fa-first-order
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-flag">
                      <i
                        className="fa fa-flag"
                        data-bs-toggle="tooltip"
                        title="fa fa-flag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-flag">
                      fa fa-flag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-flag-checkered">
                      <i
                        className="fa fa-flag-checkered"
                        data-bs-toggle="tooltip"
                        title="fa fa-flag-checkered"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-flag-checkered"
                    >
                      fa fa-flag-checkered
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-flag-o">
                      <i
                        className="fa fa-flag-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-flag-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-flag-o">
                      fa fa-flag-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-flash">
                      <i
                        className="fa fa-flash"
                        data-bs-toggle="tooltip"
                        title="fa fa-flash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-flash">
                      fa fa-flash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-flask">
                      <i
                        className="fa fa-flask"
                        data-bs-toggle="tooltip"
                        title="fa fa-flask"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-flask">
                      fa fa-flask
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-flickr">
                      <i
                        className="fa fa-flickr"
                        data-bs-toggle="tooltip"
                        title="fa fa-flickr"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-flickr">
                      fa fa-flickr
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-floppy-o">
                      <i
                        className="fa fa-floppy-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-floppy-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-floppy-o">
                      fa fa-floppy-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-folder">
                      <i
                        className="fa fa-folder"
                        data-bs-toggle="tooltip"
                        title="fa fa-folder"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-folder">
                      fa fa-folder
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-folder-o">
                      <i
                        className="fa fa-folder-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-folder-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-folder-o">
                      fa fa-folder-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-folder-open">
                      <i
                        className="fa fa-folder-open"
                        data-bs-toggle="tooltip"
                        title="fa fa-folder-open"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-folder-open"
                    >
                      fa fa-folder-open
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-folder-open-o">
                      <i
                        className="fa fa-folder-open-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-folder-open-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-folder-open-o"
                    >
                      fa fa-folder-open-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-font">
                      <i
                        className="fa fa-font"
                        data-bs-toggle="tooltip"
                        title="fa fa-font"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-font">
                      fa fa-font
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-font-awesome">
                      <i
                        className="fa fa-font-awesome"
                        data-bs-toggle="tooltip"
                        title="fa fa-font-awesome"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-font-awesome"
                    >
                      fa fa-font-awesome
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-fonticons">
                      <i
                        className="fa fa-fonticons"
                        data-bs-toggle="tooltip"
                        title="fa fa-fonticons"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-fonticons">
                      fa fa-fonticons
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-fort-awesome">
                      <i
                        className="fa fa-fort-awesome"
                        data-bs-toggle="tooltip"
                        title="fa fa-fort-awesome"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-fort-awesome"
                    >
                      fa fa-fort-awesome
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-forumbee">
                      <i
                        className="fa fa-forumbee"
                        data-bs-toggle="tooltip"
                        title="fa fa-forumbee"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-forumbee">
                      fa fa-forumbee
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-forward">
                      <i
                        className="fa fa-forward"
                        data-bs-toggle="tooltip"
                        title="fa fa-forward"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-forward">
                      fa fa-forward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-foursquare">
                      <i
                        className="fa fa-foursquare"
                        data-bs-toggle="tooltip"
                        title="fa fa-foursquare"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-foursquare">
                      fa fa-foursquare
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-free-code-camp">
                      <i
                        className="fa fa-free-code-camp"
                        data-bs-toggle="tooltip"
                        title="fa fa-free-code-camp"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-free-code-camp"
                    >
                      fa fa-free-code-camp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-frown-o">
                      <i
                        className="fa fa-frown-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-frown-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-frown-o">
                      fa fa-frown-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-futbol-o">
                      <i
                        className="fa fa-futbol-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-futbol-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-futbol-o">
                      fa fa-futbol-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-gamepad">
                      <i
                        className="fa fa-gamepad"
                        data-bs-toggle="tooltip"
                        title="fa fa-gamepad"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-gamepad">
                      fa fa-gamepad
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-gavel">
                      <i
                        className="fa fa-gavel"
                        data-bs-toggle="tooltip"
                        title="fa fa-gavel"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-gavel">
                      fa fa-gavel
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-gbp">
                      <i
                        className="fa fa-gbp"
                        data-bs-toggle="tooltip"
                        title="fa fa-gbp"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-gbp">
                      fa fa-gbp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-ge">
                      <i
                        className="fa fa-ge"
                        data-bs-toggle="tooltip"
                        title="fa fa-ge"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-ge">
                      fa fa-ge
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-gear">
                      <i
                        className="fa fa-gear"
                        data-bs-toggle="tooltip"
                        title="fa fa-gear"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-gear">
                      fa fa-gear
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-gears">
                      <i
                        className="fa fa-gears"
                        data-bs-toggle="tooltip"
                        title="fa fa-gears"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-gears">
                      fa fa-gears
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-genderless">
                      <i
                        className="fa fa-genderless"
                        data-bs-toggle="tooltip"
                        title="fa fa-genderless"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-genderless">
                      fa fa-genderless
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-get-pocket">
                      <i
                        className="fa fa-get-pocket"
                        data-bs-toggle="tooltip"
                        title="fa fa-get-pocket"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-get-pocket">
                      fa fa-get-pocket
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-gg">
                      <i
                        className="fa fa-gg"
                        data-bs-toggle="tooltip"
                        title="fa fa-gg"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-gg">
                      fa fa-gg
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-gg-circle">
                      <i
                        className="fa fa-gg-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-gg-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-gg-circle">
                      fa fa-gg-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-gift">
                      <i
                        className="fa fa-gift"
                        data-bs-toggle="tooltip"
                        title="fa fa-gift"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-gift">
                      fa fa-gift
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-git">
                      <i
                        className="fa fa-git"
                        data-bs-toggle="tooltip"
                        title="fa fa-git"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-git">
                      fa fa-git
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-git-square">
                      <i
                        className="fa fa-git-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-git-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-git-square">
                      fa fa-git-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-github">
                      <i
                        className="fa fa-github"
                        data-bs-toggle="tooltip"
                        title="fa fa-github"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-github">
                      fa fa-github
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-github-alt">
                      <i
                        className="fa fa-github-alt"
                        data-bs-toggle="tooltip"
                        title="fa fa-github-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-github-alt">
                      fa fa-github-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-github-square">
                      <i
                        className="fa fa-github-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-github-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-github-square"
                    >
                      fa fa-github-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-gitlab">
                      <i
                        className="fa fa-gitlab"
                        data-bs-toggle="tooltip"
                        title="fa fa-gitlab"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-gitlab">
                      fa fa-gitlab
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-gittip">
                      <i
                        className="fa fa-gittip"
                        data-bs-toggle="tooltip"
                        title="fa fa-gittip"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-gittip">
                      fa fa-gittip
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-glass">
                      <i
                        className="fa fa-glass"
                        data-bs-toggle="tooltip"
                        title="fa fa-glass"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-glass">
                      fa fa-glass
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-glide">
                      <i
                        className="fa fa-glide"
                        data-bs-toggle="tooltip"
                        title="fa fa-glide"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-glide">
                      fa fa-glide
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-glide-g">
                      <i
                        className="fa fa-glide-g"
                        data-bs-toggle="tooltip"
                        title="fa fa-glide-g"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-glide-g">
                      fa fa-glide-g
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-globe">
                      <i
                        className="fa fa-globe"
                        data-bs-toggle="tooltip"
                        title="fa fa-globe"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-globe">
                      fa fa-globe
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-google">
                      <i
                        className="fa fa-google"
                        data-bs-toggle="tooltip"
                        title="fa fa-google"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-google">
                      fa fa-google
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-google-plus">
                      <i
                        className="fa fa-google-plus"
                        data-bs-toggle="tooltip"
                        title="fa fa-google-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-google-plus"
                    >
                      fa fa-google-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-google-plus-circle">
                      <i
                        className="fa fa-google-plus-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-google-plus-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-google-plus-circle"
                    >
                      fa fa-google-plus-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-google-plus-officia">
                      <i
                        className="fa fa-google-plus-official"
                        data-bs-toggle="tooltip"
                        title="fa fa-google-plus-official"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-google-plus-officia"
                    >
                      fa fa-google-plus-official
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-google-plus-square">
                      <i
                        className="fa fa-google-plus-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-google-plus-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-google-plus-square"
                    >
                      fa fa-google-plus-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-google-wallet">
                      <i
                        className="fa fa-google-wallet"
                        data-bs-toggle="tooltip"
                        title="fa fa-google-wallet"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-google-wallet"
                    >
                      fa fa-google-wallet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-graduation-cap">
                      <i
                        className="fa fa-graduation-cap"
                        data-bs-toggle="tooltip"
                        title="fa fa-graduation-cap"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-graduation-cap"
                    >
                      fa fa-graduation-cap
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-gratipay">
                      <i
                        className="fa fa-gratipay"
                        data-bs-toggle="tooltip"
                        title="fa fa-gratipay"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-gratipay">
                      fa fa-gratipay
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-grav">
                      <i
                        className="fa fa-grav"
                        data-bs-toggle="tooltip"
                        title="fa fa-grav"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-grav">
                      fa fa-grav
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-group">
                      <i
                        className="fa fa-group"
                        data-bs-toggle="tooltip"
                        title="fa fa-group"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-group">
                      fa fa-group
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-h-square">
                      <i
                        className="fa fa-h-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-h-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-h-square">
                      fa fa-h-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hacker-news">
                      <i
                        className="fa fa-hacker-news"
                        data-bs-toggle="tooltip"
                        title="fa fa-hacker-news"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hacker-news"
                    >
                      fa fa-hacker-news
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-grab-o">
                      <i
                        className="fa fa-hand-grab-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-grab-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hand-grab-o"
                    >
                      fa fa-hand-grab-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-lizard-o">
                      <i
                        className="fa fa-hand-lizard-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-lizard-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hand-lizard-o"
                    >
                      fa fa-hand-lizard-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-o-down">
                      <i
                        className="fa fa-hand-o-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-o-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hand-o-down"
                    >
                      fa fa-hand-o-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-o-left">
                      <i
                        className="fa fa-hand-o-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-o-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hand-o-left"
                    >
                      fa fa-hand-o-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-o-right">
                      <i
                        className="fa fa-hand-o-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-o-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hand-o-right"
                    >
                      fa fa-hand-o-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-o-up">
                      <i
                        className="fa fa-hand-o-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-o-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-hand-o-up">
                      fa fa-hand-o-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-paper-o">
                      <i
                        className="fa fa-hand-paper-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-paper-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hand-paper-o"
                    >
                      fa fa-hand-paper-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-peace-o">
                      <i
                        className="fa fa-hand-peace-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-peace-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hand-peace-o"
                    >
                      fa fa-hand-peace-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-pointer-o">
                      <i
                        className="fa fa-hand-pointer-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-pointer-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hand-pointer-o"
                    >
                      fa fa-hand-pointer-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-rock-o">
                      <i
                        className="fa fa-hand-rock-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-rock-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hand-rock-o"
                    >
                      fa fa-hand-rock-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-scissors-o">
                      <i
                        className="fa fa-hand-scissors-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-scissors-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hand-scissors-o"
                    >
                      fa fa-hand-scissors-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-spock-o">
                      <i
                        className="fa fa-hand-spock-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-spock-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hand-spock-o"
                    >
                      fa fa-hand-spock-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hand-stop-o">
                      <i
                        className="fa fa-hand-stop-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-hand-stop-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hand-stop-o"
                    >
                      fa fa-hand-stop-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-handshake-o">
                      <i
                        className="fa fa-handshake-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-handshake-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-handshake-o"
                    >
                      fa fa-handshake-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hard-of-hearing">
                      <i
                        className="fa fa-hard-of-hearing"
                        data-bs-toggle="tooltip"
                        title="fa fa-hard-of-hearing"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hard-of-hearing"
                    >
                      fa fa-hard-of-hearing
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hashtag">
                      <i
                        className="fa fa-hashtag"
                        data-bs-toggle="tooltip"
                        title="fa fa-hashtag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-hashtag">
                      fa fa-hashtag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hdd-o">
                      <i
                        className="fa fa-hdd-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-hdd-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-hdd-o">
                      fa fa-hdd-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-header">
                      <i
                        className="fa fa-header"
                        data-bs-toggle="tooltip"
                        title="fa fa-header"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-header">
                      fa fa-header
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-headphones">
                      <i
                        className="fa fa-headphones"
                        data-bs-toggle="tooltip"
                        title="fa fa-headphones"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-headphones">
                      fa fa-headphones
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-heart">
                      <i
                        className="fa fa-heart"
                        data-bs-toggle="tooltip"
                        title="fa fa-heart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-heart">
                      fa fa-heart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-heart-o">
                      <i
                        className="fa fa-heart-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-heart-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-heart-o">
                      fa fa-heart-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-heartbeat">
                      <i
                        className="fa fa-heartbeat"
                        data-bs-toggle="tooltip"
                        title="fa fa-heartbeat"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-heartbeat">
                      fa fa-heartbeat
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-history">
                      <i
                        className="fa fa-history"
                        data-bs-toggle="tooltip"
                        title="fa fa-history"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-history">
                      fa fa-history
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-home">
                      <i
                        className="fa fa-home"
                        data-bs-toggle="tooltip"
                        title="fa fa-home"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-home">
                      fa fa-home
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hospital-o">
                      <i
                        className="fa fa-hospital-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-hospital-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-hospital-o">
                      fa fa-hospital-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hotel">
                      <i
                        className="fa fa-hotel"
                        data-bs-toggle="tooltip"
                        title="fa fa-hotel"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-hotel">
                      fa fa-hotel
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hourglass">
                      <i
                        className="fa fa-hourglass"
                        data-bs-toggle="tooltip"
                        title="fa fa-hourglass"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-hourglass">
                      fa fa-hourglass
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hourglass-1">
                      <i
                        className="fa fa-hourglass-1"
                        data-bs-toggle="tooltip"
                        title="fa fa-hourglass-1"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hourglass-1"
                    >
                      fa fa-hourglass-1
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hourglass-2">
                      <i
                        className="fa fa-hourglass-2"
                        data-bs-toggle="tooltip"
                        title="fa fa-hourglass-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hourglass-2"
                    >
                      fa fa-hourglass-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hourglass-3">
                      <i
                        className="fa fa-hourglass-3"
                        data-bs-toggle="tooltip"
                        title="fa fa-hourglass-3"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hourglass-3"
                    >
                      fa fa-hourglass-3
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hourglass-end">
                      <i
                        className="fa fa-hourglass-end"
                        data-bs-toggle="tooltip"
                        title="fa fa-hourglass-end"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hourglass-end"
                    >
                      fa fa-hourglass-end
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hourglass-half">
                      <i
                        className="fa fa-hourglass-half"
                        data-bs-toggle="tooltip"
                        title="fa fa-hourglass-half"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hourglass-half"
                    >
                      fa fa-hourglass-half
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hourglass-o">
                      <i
                        className="fa fa-hourglass-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-hourglass-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hourglass-o"
                    >
                      fa fa-hourglass-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-hourglass-start">
                      <i
                        className="fa fa-hourglass-start"
                        data-bs-toggle="tooltip"
                        title="fa fa-hourglass-start"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-hourglass-start"
                    >
                      fa fa-hourglass-start
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-houzz">
                      <i
                        className="fa fa-houzz"
                        data-bs-toggle="tooltip"
                        title="fa fa-houzz"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-houzz">
                      fa fa-houzz
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-html5">
                      <i
                        className="fa fa-html5"
                        data-bs-toggle="tooltip"
                        title="fa fa-html5"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-html5">
                      fa fa-html5
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-i-cursor">
                      <i
                        className="fa fa-i-cursor"
                        data-bs-toggle="tooltip"
                        title="fa fa-i-cursor"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-i-cursor">
                      fa fa-i-cursor
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-id-badge">
                      <i
                        className="fa fa-id-badge"
                        data-bs-toggle="tooltip"
                        title="fa fa-id-badge"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-id-badge">
                      fa fa-id-badge
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-id-card">
                      <i
                        className="fa fa-id-card"
                        data-bs-toggle="tooltip"
                        title="fa fa-id-card"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-id-card">
                      fa fa-id-card
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-id-card-o">
                      <i
                        className="fa fa-id-card-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-id-card-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-id-card-o">
                      fa fa-id-card-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-ils">
                      <i
                        className="fa fa-ils"
                        data-bs-toggle="tooltip"
                        title="fa fa-ils"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-ils">
                      fa fa-ils
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-image">
                      <i
                        className="fa fa-image"
                        data-bs-toggle="tooltip"
                        title="fa fa-image"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-image">
                      fa fa-image
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-imdb">
                      <i
                        className="fa fa-imdb"
                        data-bs-toggle="tooltip"
                        title="fa fa-imdb"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-imdb">
                      fa fa-imdb
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-inbox">
                      <i
                        className="fa fa-inbox"
                        data-bs-toggle="tooltip"
                        title="fa fa-inbox"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-inbox">
                      fa fa-inbox
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-indent">
                      <i
                        className="fa fa-indent"
                        data-bs-toggle="tooltip"
                        title="fa fa-indent"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-indent">
                      fa fa-indent
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-industry">
                      <i
                        className="fa fa-industry"
                        data-bs-toggle="tooltip"
                        title="fa fa-industry"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-industry">
                      fa fa-industry
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-info">
                      <i
                        className="fa fa-info"
                        data-bs-toggle="tooltip"
                        title="fa fa-info"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-info">
                      fa fa-info
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-info-circle">
                      <i
                        className="fa fa-info-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-info-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-info-circle"
                    >
                      fa fa-info-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-inr">
                      <i
                        className="fa fa-inr"
                        data-bs-toggle="tooltip"
                        title="fa fa-inr"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-inr">
                      fa fa-inr
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-instagram">
                      <i
                        className="fa fa-instagram"
                        data-bs-toggle="tooltip"
                        title="fa fa-instagram"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-instagram">
                      fa fa-instagram
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-institution">
                      <i
                        className="fa fa-institution"
                        data-bs-toggle="tooltip"
                        title="fa fa-institution"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-institution"
                    >
                      fa fa-institution
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-internet-explorer">
                      <i
                        className="fa fa-internet-explorer"
                        data-bs-toggle="tooltip"
                        title="fa fa-internet-explorer"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-internet-explorer"
                    >
                      fa fa-internet-explorer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-intersex">
                      <i
                        className="fa fa-intersex"
                        data-bs-toggle="tooltip"
                        title="fa fa-intersex"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-intersex">
                      fa fa-intersex
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-ioxhost">
                      <i
                        className="fa fa-ioxhost"
                        data-bs-toggle="tooltip"
                        title="fa fa-ioxhost"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-ioxhost">
                      fa fa-ioxhost
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-italic">
                      <i
                        className="fa fa-italic"
                        data-bs-toggle="tooltip"
                        title="fa fa-italic"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-italic">
                      fa fa-italic
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-joomla">
                      <i
                        className="fa fa-joomla"
                        data-bs-toggle="tooltip"
                        title="fa fa-joomla"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-joomla">
                      fa fa-joomla
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-jpy">
                      <i
                        className="fa fa-jpy"
                        data-bs-toggle="tooltip"
                        title="fa fa-jpy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-jpy">
                      fa fa-jpy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-jsfiddle">
                      <i
                        className="fa fa-jsfiddle"
                        data-bs-toggle="tooltip"
                        title="fa fa-jsfiddle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-jsfiddle">
                      fa fa-jsfiddle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-key">
                      <i
                        className="fa fa-key"
                        data-bs-toggle="tooltip"
                        title="fa fa-key"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-key">
                      fa fa-key
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-keyboard-o">
                      <i
                        className="fa fa-keyboard-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-keyboard-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-keyboard-o">
                      fa fa-keyboard-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-krw">
                      <i
                        className="fa fa-krw"
                        data-bs-toggle="tooltip"
                        title="fa fa-krw"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-krw">
                      fa fa-krw
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-language">
                      <i
                        className="fa fa-language"
                        data-bs-toggle="tooltip"
                        title="fa fa-language"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-language">
                      fa fa-language
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-laptop">
                      <i
                        className="fa fa-laptop"
                        data-bs-toggle="tooltip"
                        title="fa fa-laptop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-laptop">
                      fa fa-laptop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-lastfm">
                      <i
                        className="fa fa-lastfm"
                        data-bs-toggle="tooltip"
                        title="fa fa-lastfm"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-lastfm">
                      fa fa-lastfm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-lastfm-square">
                      <i
                        className="fa fa-lastfm-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-lastfm-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-lastfm-square"
                    >
                      fa fa-lastfm-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-leaf">
                      <i
                        className="fa fa-leaf"
                        data-bs-toggle="tooltip"
                        title="fa fa-leaf"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-leaf">
                      fa fa-leaf
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-leanpub">
                      <i
                        className="fa fa-leanpub"
                        data-bs-toggle="tooltip"
                        title="fa fa-leanpub"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-leanpub">
                      fa fa-leanpub
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-legal">
                      <i
                        className="fa fa-legal"
                        data-bs-toggle="tooltip"
                        title="fa fa-legal"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-legal">
                      fa fa-legal
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-lemon-o">
                      <i
                        className="fa fa-lemon-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-lemon-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-lemon-o">
                      fa fa-lemon-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-level-down">
                      <i
                        className="fa fa-level-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-level-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-level-down">
                      fa fa-level-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-level-up">
                      <i
                        className="fa fa-level-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-level-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-level-up">
                      fa fa-level-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-life-bouy">
                      <i
                        className="fa fa-life-bouy"
                        data-bs-toggle="tooltip"
                        title="fa fa-life-bouy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-life-bouy">
                      fa fa-life-bouy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-life-buoy">
                      <i
                        className="fa fa-life-buoy"
                        data-bs-toggle="tooltip"
                        title="fa fa-life-buoy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-life-buoy">
                      fa fa-life-buoy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-life-ring">
                      <i
                        className="fa fa-life-ring"
                        data-bs-toggle="tooltip"
                        title="fa fa-life-ring"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-life-ring">
                      fa fa-life-ring
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-life-saver">
                      <i
                        className="fa fa-life-saver"
                        data-bs-toggle="tooltip"
                        title="fa fa-life-saver"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-life-saver">
                      fa fa-life-saver
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-lightbulb-o">
                      <i
                        className="fa fa-lightbulb-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-lightbulb-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-lightbulb-o"
                    >
                      fa fa-lightbulb-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-line-chart">
                      <i
                        className="fa fa-line-chart"
                        data-bs-toggle="tooltip"
                        title="fa fa-line-chart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-line-chart">
                      fa fa-line-chart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-link">
                      <i
                        className="fa fa-link"
                        data-bs-toggle="tooltip"
                        title="fa fa-link"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-link">
                      fa fa-link
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-linkedin">
                      <i
                        className="fa fa-linkedin"
                        data-bs-toggle="tooltip"
                        title="fa fa-linkedin"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-linkedin">
                      fa fa-linkedin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-linkedin-square">
                      <i
                        className="fa fa-linkedin-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-linkedin-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-linkedin-square"
                    >
                      fa fa-linkedin-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-linode">
                      <i
                        className="fa fa-linode"
                        data-bs-toggle="tooltip"
                        title="fa fa-linode"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-linode">
                      fa fa-linode
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-linux">
                      <i
                        className="fa fa-linux"
                        data-bs-toggle="tooltip"
                        title="fa fa-linux"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-linux">
                      fa fa-linux
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-list">
                      <i
                        className="fa fa-list"
                        data-bs-toggle="tooltip"
                        title="fa fa-list"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-list">
                      fa fa-list
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-list-alt">
                      <i
                        className="fa fa-list-alt"
                        data-bs-toggle="tooltip"
                        title="fa fa-list-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-list-alt">
                      fa fa-list-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-list-ol">
                      <i
                        className="fa fa-list-ol"
                        data-bs-toggle="tooltip"
                        title="fa fa-list-ol"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-list-ol">
                      fa fa-list-ol
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-list-ul">
                      <i
                        className="fa fa-list-ul"
                        data-bs-toggle="tooltip"
                        title="fa fa-list-ul"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-list-ul">
                      fa fa-list-ul
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-location-arrow">
                      <i
                        className="fa fa-location-arrow"
                        data-bs-toggle="tooltip"
                        title="fa fa-location-arrow"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-location-arrow"
                    >
                      fa fa-location-arrow
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-lock">
                      <i
                        className="fa fa-lock"
                        data-bs-toggle="tooltip"
                        title="fa fa-lock"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-lock">
                      fa fa-lock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-long-arrow-down">
                      <i
                        className="fa fa-long-arrow-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-long-arrow-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-long-arrow-down"
                    >
                      fa fa-long-arrow-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-long-arrow-left">
                      <i
                        className="fa fa-long-arrow-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-long-arrow-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-long-arrow-left"
                    >
                      fa fa-long-arrow-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-long-arrow-right">
                      <i
                        className="fa fa-long-arrow-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-long-arrow-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-long-arrow-right"
                    >
                      fa fa-long-arrow-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-long-arrow-up">
                      <i
                        className="fa fa-long-arrow-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-long-arrow-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-long-arrow-up"
                    >
                      fa fa-long-arrow-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-low-vision">
                      <i
                        className="fa fa-low-vision"
                        data-bs-toggle="tooltip"
                        title="fa fa-low-vision"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-low-vision">
                      fa fa-low-vision
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-magic">
                      <i
                        className="fa fa-magic"
                        data-bs-toggle="tooltip"
                        title="fa fa-magic"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-magic">
                      fa fa-magic
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-magnet">
                      <i
                        className="fa fa-magnet"
                        data-bs-toggle="tooltip"
                        title="fa fa-magnet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-magnet">
                      fa fa-magnet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mail-forward">
                      <i
                        className="fa fa-mail-forward"
                        data-bs-toggle="tooltip"
                        title="fa fa-mail-forward"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-mail-forward"
                    >
                      fa fa-mail-forward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mail-reply">
                      <i
                        className="fa fa-mail-reply"
                        data-bs-toggle="tooltip"
                        title="fa fa-mail-reply"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-mail-reply">
                      fa fa-mail-reply
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mail-reply-all">
                      <i
                        className="fa fa-mail-reply-all"
                        data-bs-toggle="tooltip"
                        title="fa fa-mail-reply-all"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-mail-reply-all"
                    >
                      fa fa-mail-reply-all
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-male">
                      <i
                        className="fa fa-male"
                        data-bs-toggle="tooltip"
                        title="fa fa-male"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-male">
                      fa fa-male
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-map">
                      <i
                        className="fa fa-map"
                        data-bs-toggle="tooltip"
                        title="fa fa-map"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-map">
                      fa fa-map
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-map-marker">
                      <i
                        className="fa fa-map-marker"
                        data-bs-toggle="tooltip"
                        title="fa fa-map-marker"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-map-marker">
                      fa fa-map-marker
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-map-o">
                      <i
                        className="fa fa-map-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-map-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-map-o">
                      fa fa-map-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-map-pin">
                      <i
                        className="fa fa-map-pin"
                        data-bs-toggle="tooltip"
                        title="fa fa-map-pin"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-map-pin">
                      fa fa-map-pin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-map-signs">
                      <i
                        className="fa fa-map-signs"
                        data-bs-toggle="tooltip"
                        title="fa fa-map-signs"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-map-signs">
                      fa fa-map-signs
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mars">
                      <i
                        className="fa fa-mars"
                        data-bs-toggle="tooltip"
                        title="fa fa-mars"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-mars">
                      fa fa-mars
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mars-double">
                      <i
                        className="fa fa-mars-double"
                        data-bs-toggle="tooltip"
                        title="fa fa-mars-double"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-mars-double"
                    >
                      fa fa-mars-double
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mars-stroke">
                      <i
                        className="fa fa-mars-stroke"
                        data-bs-toggle="tooltip"
                        title="fa fa-mars-stroke"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-mars-stroke"
                    >
                      fa fa-mars-stroke
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mars-stroke-h">
                      <i
                        className="fa fa-mars-stroke-h"
                        data-bs-toggle="tooltip"
                        title="fa fa-mars-stroke-h"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-mars-stroke-h"
                    >
                      fa fa-mars-stroke-h
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mars-stroke-v">
                      <i
                        className="fa fa-mars-stroke-v"
                        data-bs-toggle="tooltip"
                        title="fa fa-mars-stroke-v"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-mars-stroke-v"
                    >
                      fa fa-mars-stroke-v
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-maxcdn">
                      <i
                        className="fa fa-maxcdn"
                        data-bs-toggle="tooltip"
                        title="fa fa-maxcdn"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-maxcdn">
                      fa fa-maxcdn
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-meanpath">
                      <i
                        className="fa fa-meanpath"
                        data-bs-toggle="tooltip"
                        title="fa fa-meanpath"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-meanpath">
                      fa fa-meanpath
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-medium">
                      <i
                        className="fa fa-medium"
                        data-bs-toggle="tooltip"
                        title="fa fa-medium"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-medium">
                      fa fa-medium
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-medkit">
                      <i
                        className="fa fa-medkit"
                        data-bs-toggle="tooltip"
                        title="fa fa-medkit"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-medkit">
                      fa fa-medkit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-meetup">
                      <i
                        className="fa fa-meetup"
                        data-bs-toggle="tooltip"
                        title="fa fa-meetup"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-meetup">
                      fa fa-meetup
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-meh-o">
                      <i
                        className="fa fa-meh-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-meh-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-meh-o">
                      fa fa-meh-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mercury">
                      <i
                        className="fa fa-mercury"
                        data-bs-toggle="tooltip"
                        title="fa fa-mercury"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-mercury">
                      fa fa-mercury
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-microchip">
                      <i
                        className="fa fa-microchip"
                        data-bs-toggle="tooltip"
                        title="fa fa-microchip"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-microchip">
                      fa fa-microchip
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-microphone">
                      <i
                        className="fa fa-microphone"
                        data-bs-toggle="tooltip"
                        title="fa fa-microphone"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-microphone">
                      fa fa-microphone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-microphone-slash">
                      <i
                        className="fa fa-microphone-slash"
                        data-bs-toggle="tooltip"
                        title="fa fa-microphone-slash"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-microphone-slash"
                    >
                      fa fa-microphone-slash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-minus">
                      <i
                        className="fa fa-minus"
                        data-bs-toggle="tooltip"
                        title="fa fa-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-minus">
                      fa fa-minus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-minus-circle">
                      <i
                        className="fa fa-minus-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-minus-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-minus-circle"
                    >
                      fa fa-minus-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-minus-square">
                      <i
                        className="fa fa-minus-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-minus-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-minus-square"
                    >
                      fa fa-minus-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-minus-square-o">
                      <i
                        className="fa fa-minus-square-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-minus-square-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-minus-square-o"
                    >
                      fa fa-minus-square-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mixcloud">
                      <i
                        className="fa fa-mixcloud"
                        data-bs-toggle="tooltip"
                        title="fa fa-mixcloud"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-mixcloud">
                      fa fa-mixcloud
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mobile">
                      <i
                        className="fa fa-mobile"
                        data-bs-toggle="tooltip"
                        title="fa fa-mobile"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-mobile">
                      fa fa-mobile
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mobile-phone">
                      <i
                        className="fa fa-mobile-phone"
                        data-bs-toggle="tooltip"
                        title="fa fa-mobile-phone"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-mobile-phone"
                    >
                      fa fa-mobile-phone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-modx">
                      <i
                        className="fa fa-modx"
                        data-bs-toggle="tooltip"
                        title="fa fa-modx"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-modx">
                      fa fa-modx
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-money">
                      <i
                        className="fa fa-money"
                        data-bs-toggle="tooltip"
                        title="fa fa-money"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-money">
                      fa fa-money
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-moon-o">
                      <i
                        className="fa fa-moon-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-moon-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-moon-o">
                      fa fa-moon-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mortar-board">
                      <i
                        className="fa fa-mortar-board"
                        data-bs-toggle="tooltip"
                        title="fa fa-mortar-board"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-mortar-board"
                    >
                      fa fa-mortar-board
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-motorcycle">
                      <i
                        className="fa fa-motorcycle"
                        data-bs-toggle="tooltip"
                        title="fa fa-motorcycle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-motorcycle">
                      fa fa-motorcycle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-mouse-pointer">
                      <i
                        className="fa fa-mouse-pointer"
                        data-bs-toggle="tooltip"
                        title="fa fa-mouse-pointer"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-mouse-pointer"
                    >
                      fa fa-mouse-pointer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-music">
                      <i
                        className="fa fa-music"
                        data-bs-toggle="tooltip"
                        title="fa fa-music"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-music">
                      fa fa-music
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-navicon">
                      <i
                        className="fa fa-navicon"
                        data-bs-toggle="tooltip"
                        title="fa fa-navicon"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-navicon">
                      fa fa-navicon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-neuter">
                      <i
                        className="fa fa-neuter"
                        data-bs-toggle="tooltip"
                        title="fa fa-neuter"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-neuter">
                      fa fa-neuter
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-newspaper-o">
                      <i
                        className="fa fa-newspaper-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-newspaper-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-newspaper-o"
                    >
                      fa fa-newspaper-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-object-group">
                      <i
                        className="fa fa-object-group"
                        data-bs-toggle="tooltip"
                        title="fa fa-object-group"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-object-group"
                    >
                      fa fa-object-group
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-object-ungroup">
                      <i
                        className="fa fa-object-ungroup"
                        data-bs-toggle="tooltip"
                        title="fa fa-object-ungroup"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-object-ungroup"
                    >
                      fa fa-object-ungroup
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-odnoklassniki">
                      <i
                        className="fa fa-odnoklassniki"
                        data-bs-toggle="tooltip"
                        title="fa fa-odnoklassniki"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-odnoklassniki"
                    >
                      fa fa-odnoklassniki
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-odnoklassniki-squar">
                      <i
                        className="fa fa-odnoklassniki-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-odnoklassniki-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-odnoklassniki-squar"
                    >
                      fa fa-odnoklassniki-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-opencart">
                      <i
                        className="fa fa-opencart"
                        data-bs-toggle="tooltip"
                        title="fa fa-opencart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-opencart">
                      fa fa-opencart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-openid">
                      <i
                        className="fa fa-openid"
                        data-bs-toggle="tooltip"
                        title="fa fa-openid"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-openid">
                      fa fa-openid
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-opera">
                      <i
                        className="fa fa-opera"
                        data-bs-toggle="tooltip"
                        title="fa fa-opera"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-opera">
                      fa fa-opera
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-optin-monster">
                      <i
                        className="fa fa-optin-monster"
                        data-bs-toggle="tooltip"
                        title="fa fa-optin-monster"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-optin-monster"
                    >
                      fa fa-optin-monster
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-outdent">
                      <i
                        className="fa fa-outdent"
                        data-bs-toggle="tooltip"
                        title="fa fa-outdent"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-outdent">
                      fa fa-outdent
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pagelines">
                      <i
                        className="fa fa-pagelines"
                        data-bs-toggle="tooltip"
                        title="fa fa-pagelines"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-pagelines">
                      fa fa-pagelines
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-paint-brush">
                      <i
                        className="fa fa-paint-brush"
                        data-bs-toggle="tooltip"
                        title="fa fa-paint-brush"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-paint-brush"
                    >
                      fa fa-paint-brush
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-paper-plane">
                      <i
                        className="fa fa-paper-plane"
                        data-bs-toggle="tooltip"
                        title="fa fa-paper-plane"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-paper-plane"
                    >
                      fa fa-paper-plane
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-paper-plane-o">
                      <i
                        className="fa fa-paper-plane-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-paper-plane-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-paper-plane-o"
                    >
                      fa fa-paper-plane-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-paperclip">
                      <i
                        className="fa fa-paperclip"
                        data-bs-toggle="tooltip"
                        title="fa fa-paperclip"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-paperclip">
                      fa fa-paperclip
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-paragraph">
                      <i
                        className="fa fa-paragraph"
                        data-bs-toggle="tooltip"
                        title="fa fa-paragraph"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-paragraph">
                      fa fa-paragraph
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-paste">
                      <i
                        className="fa fa-paste"
                        data-bs-toggle="tooltip"
                        title="fa fa-paste"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-paste">
                      fa fa-paste
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pause">
                      <i
                        className="fa fa-pause"
                        data-bs-toggle="tooltip"
                        title="fa fa-pause"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-pause">
                      fa fa-pause
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pause-circle">
                      <i
                        className="fa fa-pause-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-pause-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-pause-circle"
                    >
                      fa fa-pause-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pause-circle-o">
                      <i
                        className="fa fa-pause-circle-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-pause-circle-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-pause-circle-o"
                    >
                      fa fa-pause-circle-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-paw">
                      <i
                        className="fa fa-paw"
                        data-bs-toggle="tooltip"
                        title="fa fa-paw"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-paw">
                      fa fa-paw
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-paypal">
                      <i
                        className="fa fa-paypal"
                        data-bs-toggle="tooltip"
                        title="fa fa-paypal"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-paypal">
                      fa fa-paypal
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pencil">
                      <i
                        className="fa fa-pencil"
                        data-bs-toggle="tooltip"
                        title="fa fa-pencil"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-pencil">
                      fa fa-pencil
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pencil-square">
                      <i
                        className="fa fa-pencil-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-pencil-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-pencil-square"
                    >
                      fa fa-pencil-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pencil-square-o">
                      <i
                        className="fa fa-pencil-square-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-pencil-square-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-pencil-square-o"
                    >
                      fa fa-pencil-square-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-percent">
                      <i
                        className="fa fa-percent"
                        data-bs-toggle="tooltip"
                        title="fa fa-percent"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-percent">
                      fa fa-percent
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-phone">
                      <i
                        className="fa fa-phone"
                        data-bs-toggle="tooltip"
                        title="fa fa-phone"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-phone">
                      fa fa-phone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-phone-square">
                      <i
                        className="fa fa-phone-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-phone-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-phone-square"
                    >
                      fa fa-phone-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-photo">
                      <i
                        className="fa fa-photo"
                        data-bs-toggle="tooltip"
                        title="fa fa-photo"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-photo">
                      fa fa-photo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-picture-o">
                      <i
                        className="fa fa-picture-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-picture-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-picture-o">
                      fa fa-picture-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pie-chart">
                      <i
                        className="fa fa-pie-chart"
                        data-bs-toggle="tooltip"
                        title="fa fa-pie-chart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-pie-chart">
                      fa fa-pie-chart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pied-piper">
                      <i
                        className="fa fa-pied-piper"
                        data-bs-toggle="tooltip"
                        title="fa fa-pied-piper"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-pied-piper">
                      fa fa-pied-piper
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pied-piper-alt">
                      <i
                        className="fa fa-pied-piper-alt"
                        data-bs-toggle="tooltip"
                        title="fa fa-pied-piper-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-pied-piper-alt"
                    >
                      fa fa-pied-piper-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pied-piper-pp">
                      <i
                        className="fa fa-pied-piper-pp"
                        data-bs-toggle="tooltip"
                        title="fa fa-pied-piper-pp"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-pied-piper-pp"
                    >
                      fa fa-pied-piper-pp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pinterest">
                      <i
                        className="fa fa-pinterest"
                        data-bs-toggle="tooltip"
                        title="fa fa-pinterest"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-pinterest">
                      fa fa-pinterest
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pinterest-p">
                      <i
                        className="fa fa-pinterest-p"
                        data-bs-toggle="tooltip"
                        title="fa fa-pinterest-p"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-pinterest-p"
                    >
                      fa fa-pinterest-p
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-pinterest-square">
                      <i
                        className="fa fa-pinterest-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-pinterest-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-pinterest-square"
                    >
                      fa fa-pinterest-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-plane">
                      <i
                        className="fa fa-plane"
                        data-bs-toggle="tooltip"
                        title="fa fa-plane"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-plane">
                      fa fa-plane
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-play">
                      <i
                        className="fa fa-play"
                        data-bs-toggle="tooltip"
                        title="fa fa-play"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-play">
                      fa fa-play
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-play-circle">
                      <i
                        className="fa fa-play-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-play-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-play-circle"
                    >
                      fa fa-play-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-play-circle-o">
                      <i
                        className="fa fa-play-circle-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-play-circle-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-play-circle-o"
                    >
                      fa fa-play-circle-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-plug">
                      <i
                        className="fa fa-plug"
                        data-bs-toggle="tooltip"
                        title="fa fa-plug"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-plug">
                      fa fa-plug
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-plus">
                      <i
                        className="fa fa-plus"
                        data-bs-toggle="tooltip"
                        title="fa fa-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-plus">
                      fa fa-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-plus-circle">
                      <i
                        className="fa fa-plus-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-plus-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-plus-circle"
                    >
                      fa fa-plus-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-plus-square">
                      <i
                        className="fa fa-plus-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-plus-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-plus-square"
                    >
                      fa fa-plus-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-plus-square-o">
                      <i
                        className="fa fa-plus-square-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-plus-square-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-plus-square-o"
                    >
                      fa fa-plus-square-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-podcast">
                      <i
                        className="fa fa-podcast"
                        data-bs-toggle="tooltip"
                        title="fa fa-podcast"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-podcast">
                      fa fa-podcast
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-power-off">
                      <i
                        className="fa fa-power-off"
                        data-bs-toggle="tooltip"
                        title="fa fa-power-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-power-off">
                      fa fa-power-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-print">
                      <i
                        className="fa fa-print"
                        data-bs-toggle="tooltip"
                        title="fa fa-print"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-print">
                      fa fa-print
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-product-hunt">
                      <i
                        className="fa fa-product-hunt"
                        data-bs-toggle="tooltip"
                        title="fa fa-product-hunt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-product-hunt"
                    >
                      fa fa-product-hunt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-puzzle-piece">
                      <i
                        className="fa fa-puzzle-piece"
                        data-bs-toggle="tooltip"
                        title="fa fa-puzzle-piece"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-puzzle-piece"
                    >
                      fa fa-puzzle-piece
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-qq">
                      <i
                        className="fa fa-qq"
                        data-bs-toggle="tooltip"
                        title="fa fa-qq"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-qq">
                      fa fa-qq
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-qrcode">
                      <i
                        className="fa fa-qrcode"
                        data-bs-toggle="tooltip"
                        title="fa fa-qrcode"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-qrcode">
                      fa fa-qrcode
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-question">
                      <i
                        className="fa fa-question"
                        data-bs-toggle="tooltip"
                        title="fa fa-question"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-question">
                      fa fa-question
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-question-circle">
                      <i
                        className="fa fa-question-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-question-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-question-circle"
                    >
                      fa fa-question-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-question-circle-o">
                      <i
                        className="fa fa-question-circle-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-question-circle-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-question-circle-o"
                    >
                      fa fa-question-circle-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-quora">
                      <i
                        className="fa fa-quora"
                        data-bs-toggle="tooltip"
                        title="fa fa-quora"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-quora">
                      fa fa-quora
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-quote-left">
                      <i
                        className="fa fa-quote-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-quote-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-quote-left">
                      fa fa-quote-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-quote-right">
                      <i
                        className="fa fa-quote-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-quote-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-quote-right"
                    >
                      fa fa-quote-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-ra">
                      <i
                        className="fa fa-ra"
                        data-bs-toggle="tooltip"
                        title="fa fa-ra"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-ra">
                      fa fa-ra
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-random">
                      <i
                        className="fa fa-random"
                        data-bs-toggle="tooltip"
                        title="fa fa-random"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-random">
                      fa fa-random
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-ravelry">
                      <i
                        className="fa fa-ravelry"
                        data-bs-toggle="tooltip"
                        title="fa fa-ravelry"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-ravelry">
                      fa fa-ravelry
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-rebel">
                      <i
                        className="fa fa-rebel"
                        data-bs-toggle="tooltip"
                        title="fa fa-rebel"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-rebel">
                      fa fa-rebel
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-recycle">
                      <i
                        className="fa fa-recycle"
                        data-bs-toggle="tooltip"
                        title="fa fa-recycle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-recycle">
                      fa fa-recycle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-reddit">
                      <i
                        className="fa fa-reddit"
                        data-bs-toggle="tooltip"
                        title="fa fa-reddit"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-reddit">
                      fa fa-reddit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-reddit-alien">
                      <i
                        className="fa fa-reddit-alien"
                        data-bs-toggle="tooltip"
                        title="fa fa-reddit-alien"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-reddit-alien"
                    >
                      fa fa-reddit-alien
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-reddit-square">
                      <i
                        className="fa fa-reddit-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-reddit-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-reddit-square"
                    >
                      fa fa-reddit-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-refresh">
                      <i
                        className="fa fa-refresh"
                        data-bs-toggle="tooltip"
                        title="fa fa-refresh"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-refresh">
                      fa fa-refresh
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-registered">
                      <i
                        className="fa fa-registered"
                        data-bs-toggle="tooltip"
                        title="fa fa-registered"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-registered">
                      fa fa-registered
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-remove">
                      <i
                        className="fa fa-remove"
                        data-bs-toggle="tooltip"
                        title="fa fa-remove"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-remove">
                      fa fa-remove
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-renren">
                      <i
                        className="fa fa-renren"
                        data-bs-toggle="tooltip"
                        title="fa fa-renren"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-renren">
                      fa fa-renren
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-reorder">
                      <i
                        className="fa fa-reorder"
                        data-bs-toggle="tooltip"
                        title="fa fa-reorder"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-reorder">
                      fa fa-reorder
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-repeat">
                      <i
                        className="fa fa-repeat"
                        data-bs-toggle="tooltip"
                        title="fa fa-repeat"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-repeat">
                      fa fa-repeat
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-reply">
                      <i
                        className="fa fa-reply"
                        data-bs-toggle="tooltip"
                        title="fa fa-reply"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-reply">
                      fa fa-reply
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-reply-all">
                      <i
                        className="fa fa-reply-all"
                        data-bs-toggle="tooltip"
                        title="fa fa-reply-all"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-reply-all">
                      fa fa-reply-all
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-resistance">
                      <i
                        className="fa fa-resistance"
                        data-bs-toggle="tooltip"
                        title="fa fa-resistance"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-resistance">
                      fa fa-resistance
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-retweet">
                      <i
                        className="fa fa-retweet"
                        data-bs-toggle="tooltip"
                        title="fa fa-retweet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-retweet">
                      fa fa-retweet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-rmb">
                      <i
                        className="fa fa-rmb"
                        data-bs-toggle="tooltip"
                        title="fa fa-rmb"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-rmb">
                      fa fa-rmb
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-road">
                      <i
                        className="fa fa-road"
                        data-bs-toggle="tooltip"
                        title="fa fa-road"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-road">
                      fa fa-road
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-rocket">
                      <i
                        className="fa fa-rocket"
                        data-bs-toggle="tooltip"
                        title="fa fa-rocket"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-rocket">
                      fa fa-rocket
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-rotate-left">
                      <i
                        className="fa fa-rotate-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-rotate-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-rotate-left"
                    >
                      fa fa-rotate-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-rotate-right">
                      <i
                        className="fa fa-rotate-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-rotate-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-rotate-right"
                    >
                      fa fa-rotate-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-rouble">
                      <i
                        className="fa fa-rouble"
                        data-bs-toggle="tooltip"
                        title="fa fa-rouble"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-rouble">
                      fa fa-rouble
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-rss">
                      <i
                        className="fa fa-rss"
                        data-bs-toggle="tooltip"
                        title="fa fa-rss"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-rss">
                      fa fa-rss
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-rss-square">
                      <i
                        className="fa fa-rss-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-rss-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-rss-square">
                      fa fa-rss-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-rub">
                      <i
                        className="fa fa-rub"
                        data-bs-toggle="tooltip"
                        title="fa fa-rub"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-rub">
                      fa fa-rub
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-ruble">
                      <i
                        className="fa fa-ruble"
                        data-bs-toggle="tooltip"
                        title="fa fa-ruble"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-ruble">
                      fa fa-ruble
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-rupee">
                      <i
                        className="fa fa-rupee"
                        data-bs-toggle="tooltip"
                        title="fa fa-rupee"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-rupee">
                      fa fa-rupee
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-s15">
                      <i
                        className="fa fa-s15"
                        data-bs-toggle="tooltip"
                        title="fa fa-s15"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-s15">
                      fa fa-s15
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-safari">
                      <i
                        className="fa fa-safari"
                        data-bs-toggle="tooltip"
                        title="fa fa-safari"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-safari">
                      fa fa-safari
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-save">
                      <i
                        className="fa fa-save"
                        data-bs-toggle="tooltip"
                        title="fa fa-save"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-save">
                      fa fa-save
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-scissors">
                      <i
                        className="fa fa-scissors"
                        data-bs-toggle="tooltip"
                        title="fa fa-scissors"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-scissors">
                      fa fa-scissors
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-scribd">
                      <i
                        className="fa fa-scribd"
                        data-bs-toggle="tooltip"
                        title="fa fa-scribd"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-scribd">
                      fa fa-scribd
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-search">
                      <i
                        className="fa fa-search"
                        data-bs-toggle="tooltip"
                        title="fa fa-search"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-search">
                      fa fa-search
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-search-minus">
                      <i
                        className="fa fa-search-minus"
                        data-bs-toggle="tooltip"
                        title="fa fa-search-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-search-minus"
                    >
                      fa fa-search-minus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-search-plus">
                      <i
                        className="fa fa-search-plus"
                        data-bs-toggle="tooltip"
                        title="fa fa-search-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-search-plus"
                    >
                      fa fa-search-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sellsy">
                      <i
                        className="fa fa-sellsy"
                        data-bs-toggle="tooltip"
                        title="fa fa-sellsy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-sellsy">
                      fa fa-sellsy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-send">
                      <i
                        className="fa fa-send"
                        data-bs-toggle="tooltip"
                        title="fa fa-send"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-send">
                      fa fa-send
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-send-o">
                      <i
                        className="fa fa-send-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-send-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-send-o">
                      fa fa-send-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-server">
                      <i
                        className="fa fa-server"
                        data-bs-toggle="tooltip"
                        title="fa fa-server"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-server">
                      fa fa-server
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-share">
                      <i
                        className="fa fa-share"
                        data-bs-toggle="tooltip"
                        title="fa fa-share"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-share">
                      fa fa-share
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-share-alt">
                      <i
                        className="fa fa-share-alt"
                        data-bs-toggle="tooltip"
                        title="fa fa-share-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-share-alt">
                      fa fa-share-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-share-alt-square">
                      <i
                        className="fa fa-share-alt-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-share-alt-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-share-alt-square"
                    >
                      fa fa-share-alt-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-share-square">
                      <i
                        className="fa fa-share-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-share-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-share-square"
                    >
                      fa fa-share-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-share-square-o">
                      <i
                        className="fa fa-share-square-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-share-square-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-share-square-o"
                    >
                      fa fa-share-square-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-shekel">
                      <i
                        className="fa fa-shekel"
                        data-bs-toggle="tooltip"
                        title="fa fa-shekel"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-shekel">
                      fa fa-shekel
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sheqel">
                      <i
                        className="fa fa-sheqel"
                        data-bs-toggle="tooltip"
                        title="fa fa-sheqel"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-sheqel">
                      fa fa-sheqel
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-shield">
                      <i
                        className="fa fa-shield"
                        data-bs-toggle="tooltip"
                        title="fa fa-shield"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-shield">
                      fa fa-shield
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-ship">
                      <i
                        className="fa fa-ship"
                        data-bs-toggle="tooltip"
                        title="fa fa-ship"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-ship">
                      fa fa-ship
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-shirtsinbulk">
                      <i
                        className="fa fa-shirtsinbulk"
                        data-bs-toggle="tooltip"
                        title="fa fa-shirtsinbulk"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-shirtsinbulk"
                    >
                      fa fa-shirtsinbulk
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-shopping-bag">
                      <i
                        className="fa fa-shopping-bag"
                        data-bs-toggle="tooltip"
                        title="fa fa-shopping-bag"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-shopping-bag"
                    >
                      fa fa-shopping-bag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-shopping-basket">
                      <i
                        className="fa fa-shopping-basket"
                        data-bs-toggle="tooltip"
                        title="fa fa-shopping-basket"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-shopping-basket"
                    >
                      fa fa-shopping-basket
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-shopping-cart">
                      <i
                        className="fa fa-shopping-cart"
                        data-bs-toggle="tooltip"
                        title="fa fa-shopping-cart"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-shopping-cart"
                    >
                      fa fa-shopping-cart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-shower">
                      <i
                        className="fa fa-shower"
                        data-bs-toggle="tooltip"
                        title="fa fa-shower"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-shower">
                      fa fa-shower
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sign-in">
                      <i
                        className="fa fa-sign-in"
                        data-bs-toggle="tooltip"
                        title="fa fa-sign-in"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-sign-in">
                      fa fa-sign-in
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sign-language">
                      <i
                        className="fa fa-sign-language"
                        data-bs-toggle="tooltip"
                        title="fa fa-sign-language"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-sign-language"
                    >
                      fa fa-sign-language
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sign-out">
                      <i
                        className="fa fa-sign-out"
                        data-bs-toggle="tooltip"
                        title="fa fa-sign-out"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-sign-out">
                      fa fa-sign-out
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-signal">
                      <i
                        className="fa fa-signal"
                        data-bs-toggle="tooltip"
                        title="fa fa-signal"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-signal">
                      fa fa-signal
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-signing">
                      <i
                        className="fa fa-signing"
                        data-bs-toggle="tooltip"
                        title="fa fa-signing"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-signing">
                      fa fa-signing
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-simplybuilt">
                      <i
                        className="fa fa-simplybuilt"
                        data-bs-toggle="tooltip"
                        title="fa fa-simplybuilt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-simplybuilt"
                    >
                      fa fa-simplybuilt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sitemap">
                      <i
                        className="fa fa-sitemap"
                        data-bs-toggle="tooltip"
                        title="fa fa-sitemap"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-sitemap">
                      fa fa-sitemap
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-skyatlas">
                      <i
                        className="fa fa-skyatlas"
                        data-bs-toggle="tooltip"
                        title="fa fa-skyatlas"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-skyatlas">
                      fa fa-skyatlas
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-skype">
                      <i
                        className="fa fa-skype"
                        data-bs-toggle="tooltip"
                        title="fa fa-skype"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-skype">
                      fa fa-skype
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-slack">
                      <i
                        className="fa fa-slack"
                        data-bs-toggle="tooltip"
                        title="fa fa-slack"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-slack">
                      fa fa-slack
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sliders">
                      <i
                        className="fa fa-sliders"
                        data-bs-toggle="tooltip"
                        title="fa fa-sliders"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-sliders">
                      fa fa-sliders
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-slideshare">
                      <i
                        className="fa fa-slideshare"
                        data-bs-toggle="tooltip"
                        title="fa fa-slideshare"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-slideshare">
                      fa fa-slideshare
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-smile-o">
                      <i
                        className="fa fa-smile-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-smile-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-smile-o">
                      fa fa-smile-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-snapchat">
                      <i
                        className="fa fa-snapchat"
                        data-bs-toggle="tooltip"
                        title="fa fa-snapchat"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-snapchat">
                      fa fa-snapchat
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-snapchat-ghost">
                      <i
                        className="fa fa-snapchat-ghost"
                        data-bs-toggle="tooltip"
                        title="fa fa-snapchat-ghost"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-snapchat-ghost"
                    >
                      fa fa-snapchat-ghost
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-snapchat-square">
                      <i
                        className="fa fa-snapchat-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-snapchat-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-snapchat-square"
                    >
                      fa fa-snapchat-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-snowflake-o">
                      <i
                        className="fa fa-snowflake-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-snowflake-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-snowflake-o"
                    >
                      fa fa-snowflake-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-soccer-ball-o">
                      <i
                        className="fa fa-soccer-ball-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-soccer-ball-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-soccer-ball-o"
                    >
                      fa fa-soccer-ball-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sort">
                      <i
                        className="fa fa-sort"
                        data-bs-toggle="tooltip"
                        title="fa fa-sort"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-sort">
                      fa fa-sort
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sort-alpha-asc">
                      <i
                        className="fa fa-sort-alpha-asc"
                        data-bs-toggle="tooltip"
                        title="fa fa-sort-alpha-asc"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-sort-alpha-asc"
                    >
                      fa fa-sort-alpha-asc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sort-alpha-desc">
                      <i
                        className="fa fa-sort-alpha-desc"
                        data-bs-toggle="tooltip"
                        title="fa fa-sort-alpha-desc"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-sort-alpha-desc"
                    >
                      fa fa-sort-alpha-desc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sort-amount-asc">
                      <i
                        className="fa fa-sort-amount-asc"
                        data-bs-toggle="tooltip"
                        title="fa fa-sort-amount-asc"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-sort-amount-asc"
                    >
                      fa fa-sort-amount-asc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sort-amount-desc">
                      <i
                        className="fa fa-sort-amount-desc"
                        data-bs-toggle="tooltip"
                        title="fa fa-sort-amount-desc"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-sort-amount-desc"
                    >
                      fa fa-sort-amount-desc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sort-asc">
                      <i
                        className="fa fa-sort-asc"
                        data-bs-toggle="tooltip"
                        title="fa fa-sort-asc"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-sort-asc">
                      fa fa-sort-asc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sort-desc">
                      <i
                        className="fa fa-sort-desc"
                        data-bs-toggle="tooltip"
                        title="fa fa-sort-desc"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-sort-desc">
                      fa fa-sort-desc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sort-down">
                      <i
                        className="fa fa-sort-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-sort-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-sort-down">
                      fa fa-sort-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sort-numeric-asc">
                      <i
                        className="fa fa-sort-numeric-asc"
                        data-bs-toggle="tooltip"
                        title="fa fa-sort-numeric-asc"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-sort-numeric-asc"
                    >
                      fa fa-sort-numeric-asc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sort-numeric-desc">
                      <i
                        className="fa fa-sort-numeric-desc"
                        data-bs-toggle="tooltip"
                        title="fa fa-sort-numeric-desc"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-sort-numeric-desc"
                    >
                      fa fa-sort-numeric-desc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sort-up">
                      <i
                        className="fa fa-sort-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-sort-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-sort-up">
                      fa fa-sort-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-soundcloud">
                      <i
                        className="fa fa-soundcloud"
                        data-bs-toggle="tooltip"
                        title="fa fa-soundcloud"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-soundcloud">
                      fa fa-soundcloud
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-space-shuttle">
                      <i
                        className="fa fa-space-shuttle"
                        data-bs-toggle="tooltip"
                        title="fa fa-space-shuttle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-space-shuttle"
                    >
                      fa fa-space-shuttle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-spinner">
                      <i
                        className="fa fa-spinner"
                        data-bs-toggle="tooltip"
                        title="fa fa-spinner"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-spinner">
                      fa fa-spinner
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-spoon">
                      <i
                        className="fa fa-spoon"
                        data-bs-toggle="tooltip"
                        title="fa fa-spoon"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-spoon">
                      fa fa-spoon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-spotify">
                      <i
                        className="fa fa-spotify"
                        data-bs-toggle="tooltip"
                        title="fa fa-spotify"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-spotify">
                      fa fa-spotify
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-square">
                      <i
                        className="fa fa-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-square">
                      fa fa-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-square-o">
                      <i
                        className="fa fa-square-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-square-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-square-o">
                      fa fa-square-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-stack-exchange">
                      <i
                        className="fa fa-stack-exchange"
                        data-bs-toggle="tooltip"
                        title="fa fa-stack-exchange"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-stack-exchange"
                    >
                      fa fa-stack-exchange
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-stack-overflow">
                      <i
                        className="fa fa-stack-overflow"
                        data-bs-toggle="tooltip"
                        title="fa fa-stack-overflow"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-stack-overflow"
                    >
                      fa fa-stack-overflow
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-star">
                      <i
                        className="fa fa-star"
                        data-bs-toggle="tooltip"
                        title="fa fa-star"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-star">
                      fa fa-star
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-star-half">
                      <i
                        className="fa fa-star-half"
                        data-bs-toggle="tooltip"
                        title="fa fa-star-half"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-star-half">
                      fa fa-star-half
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-star-half-empty">
                      <i
                        className="fa fa-star-half-empty"
                        data-bs-toggle="tooltip"
                        title="fa fa-star-half-empty"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-star-half-empty"
                    >
                      fa fa-star-half-empty
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-star-half-full">
                      <i
                        className="fa fa-star-half-full"
                        data-bs-toggle="tooltip"
                        title="fa fa-star-half-full"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-star-half-full"
                    >
                      fa fa-star-half-full
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-star-half-o">
                      <i
                        className="fa fa-star-half-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-star-half-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-star-half-o"
                    >
                      fa fa-star-half-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-star-o">
                      <i
                        className="fa fa-star-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-star-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-star-o">
                      fa fa-star-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-steam">
                      <i
                        className="fa fa-steam"
                        data-bs-toggle="tooltip"
                        title="fa fa-steam"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-steam">
                      fa fa-steam
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-steam-square">
                      <i
                        className="fa fa-steam-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-steam-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-steam-square"
                    >
                      fa fa-steam-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-step-backward">
                      <i
                        className="fa fa-step-backward"
                        data-bs-toggle="tooltip"
                        title="fa fa-step-backward"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-step-backward"
                    >
                      fa fa-step-backward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-step-forward">
                      <i
                        className="fa fa-step-forward"
                        data-bs-toggle="tooltip"
                        title="fa fa-step-forward"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-step-forward"
                    >
                      fa fa-step-forward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-stethoscope">
                      <i
                        className="fa fa-stethoscope"
                        data-bs-toggle="tooltip"
                        title="fa fa-stethoscope"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-stethoscope"
                    >
                      fa fa-stethoscope
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sticky-note">
                      <i
                        className="fa fa-sticky-note"
                        data-bs-toggle="tooltip"
                        title="fa fa-sticky-note"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-sticky-note"
                    >
                      fa fa-sticky-note
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sticky-note-o">
                      <i
                        className="fa fa-sticky-note-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-sticky-note-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-sticky-note-o"
                    >
                      fa fa-sticky-note-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-stop">
                      <i
                        className="fa fa-stop"
                        data-bs-toggle="tooltip"
                        title="fa fa-stop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-stop">
                      fa fa-stop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-stop-circle">
                      <i
                        className="fa fa-stop-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-stop-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-stop-circle"
                    >
                      fa fa-stop-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-stop-circle-o">
                      <i
                        className="fa fa-stop-circle-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-stop-circle-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-stop-circle-o"
                    >
                      fa fa-stop-circle-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-street-view">
                      <i
                        className="fa fa-street-view"
                        data-bs-toggle="tooltip"
                        title="fa fa-street-view"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-street-view"
                    >
                      fa fa-street-view
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-strikethrough">
                      <i
                        className="fa fa-strikethrough"
                        data-bs-toggle="tooltip"
                        title="fa fa-strikethrough"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-strikethrough"
                    >
                      fa fa-strikethrough
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-stumbleupon">
                      <i
                        className="fa fa-stumbleupon"
                        data-bs-toggle="tooltip"
                        title="fa fa-stumbleupon"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-stumbleupon"
                    >
                      fa fa-stumbleupon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-stumbleupon-circle">
                      <i
                        className="fa fa-stumbleupon-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-stumbleupon-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-stumbleupon-circle"
                    >
                      fa fa-stumbleupon-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-subscript">
                      <i
                        className="fa fa-subscript"
                        data-bs-toggle="tooltip"
                        title="fa fa-subscript"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-subscript">
                      fa fa-subscript
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-subway">
                      <i
                        className="fa fa-subway"
                        data-bs-toggle="tooltip"
                        title="fa fa-subway"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-subway">
                      fa fa-subway
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-suitcase">
                      <i
                        className="fa fa-suitcase"
                        data-bs-toggle="tooltip"
                        title="fa fa-suitcase"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-suitcase">
                      fa fa-suitcase
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-sun-o">
                      <i
                        className="fa fa-sun-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-sun-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-sun-o">
                      fa fa-sun-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-superpowers">
                      <i
                        className="fa fa-superpowers"
                        data-bs-toggle="tooltip"
                        title="fa fa-superpowers"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-superpowers"
                    >
                      fa fa-superpowers
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-superscript">
                      <i
                        className="fa fa-superscript"
                        data-bs-toggle="tooltip"
                        title="fa fa-superscript"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-superscript"
                    >
                      fa fa-superscript
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-support">
                      <i
                        className="fa fa-support"
                        data-bs-toggle="tooltip"
                        title="fa fa-support"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-support">
                      fa fa-support
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-table">
                      <i
                        className="fa fa-table"
                        data-bs-toggle="tooltip"
                        title="fa fa-table"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-table">
                      fa fa-table
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tablet">
                      <i
                        className="fa fa-tablet"
                        data-bs-toggle="tooltip"
                        title="fa fa-tablet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-tablet">
                      fa fa-tablet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tachometer">
                      <i
                        className="fa fa-tachometer"
                        data-bs-toggle="tooltip"
                        title="fa fa-tachometer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-tachometer">
                      fa fa-tachometer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tag">
                      <i
                        className="fa fa-tag"
                        data-bs-toggle="tooltip"
                        title="fa fa-tag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-tag">
                      fa fa-tag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tags">
                      <i
                        className="fa fa-tags"
                        data-bs-toggle="tooltip"
                        title="fa fa-tags"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-tags">
                      fa fa-tags
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tasks">
                      <i
                        className="fa fa-tasks"
                        data-bs-toggle="tooltip"
                        title="fa fa-tasks"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-tasks">
                      fa fa-tasks
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-taxi">
                      <i
                        className="fa fa-taxi"
                        data-bs-toggle="tooltip"
                        title="fa fa-taxi"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-taxi">
                      fa fa-taxi
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-telegram">
                      <i
                        className="fa fa-telegram"
                        data-bs-toggle="tooltip"
                        title="fa fa-telegram"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-telegram">
                      fa fa-telegram
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-television">
                      <i
                        className="fa fa-television"
                        data-bs-toggle="tooltip"
                        title="fa fa-television"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-television">
                      fa fa-television
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tencent-weibo">
                      <i
                        className="fa fa-tencent-weibo"
                        data-bs-toggle="tooltip"
                        title="fa fa-tencent-weibo"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-tencent-weibo"
                    >
                      fa fa-tencent-weibo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-terminal">
                      <i
                        className="fa fa-terminal"
                        data-bs-toggle="tooltip"
                        title="fa fa-terminal"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-terminal">
                      fa fa-terminal
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-text-height">
                      <i
                        className="fa fa-text-height"
                        data-bs-toggle="tooltip"
                        title="fa fa-text-height"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-text-height"
                    >
                      fa fa-text-height
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-text-width">
                      <i
                        className="fa fa-text-width"
                        data-bs-toggle="tooltip"
                        title="fa fa-text-width"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-text-width">
                      fa fa-text-width
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-th">
                      <i
                        className="fa fa-th"
                        data-bs-toggle="tooltip"
                        title="fa fa-th"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-th">
                      fa fa-th
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-th-large">
                      <i
                        className="fa fa-th-large"
                        data-bs-toggle="tooltip"
                        title="fa fa-th-large"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-th-large">
                      fa fa-th-large
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-th-list">
                      <i
                        className="fa fa-th-list"
                        data-bs-toggle="tooltip"
                        title="fa fa-th-list"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-th-list">
                      fa fa-th-list
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-themeisle">
                      <i
                        className="fa fa-themeisle"
                        data-bs-toggle="tooltip"
                        title="fa fa-themeisle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-themeisle">
                      fa fa-themeisle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thermometer">
                      <i
                        className="fa fa-thermometer"
                        data-bs-toggle="tooltip"
                        title="fa fa-thermometer"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thermometer"
                    >
                      fa fa-thermometer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thermometer-0">
                      <i
                        className="fa fa-thermometer-0"
                        data-bs-toggle="tooltip"
                        title="fa fa-thermometer-0"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thermometer-0"
                    >
                      fa fa-thermometer-0
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thermometer-1">
                      <i
                        className="fa fa-thermometer-1"
                        data-bs-toggle="tooltip"
                        title="fa fa-thermometer-1"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thermometer-1"
                    >
                      fa fa-thermometer-1
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thermometer-2">
                      <i
                        className="fa fa-thermometer-2"
                        data-bs-toggle="tooltip"
                        title="fa fa-thermometer-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thermometer-2"
                    >
                      fa fa-thermometer-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thermometer-3">
                      <i
                        className="fa fa-thermometer-3"
                        data-bs-toggle="tooltip"
                        title="fa fa-thermometer-3"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thermometer-3"
                    >
                      fa fa-thermometer-3
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thermometer-4">
                      <i
                        className="fa fa-thermometer-4"
                        data-bs-toggle="tooltip"
                        title="fa fa-thermometer-4"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thermometer-4"
                    >
                      fa fa-thermometer-4
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thermometer-empty">
                      <i
                        className="fa fa-thermometer-empty"
                        data-bs-toggle="tooltip"
                        title="fa fa-thermometer-empty"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thermometer-empty"
                    >
                      fa fa-thermometer-empty
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thermometer-full">
                      <i
                        className="fa fa-thermometer-full"
                        data-bs-toggle="tooltip"
                        title="fa fa-thermometer-full"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thermometer-full"
                    >
                      fa fa-thermometer-full
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thermometer-half">
                      <i
                        className="fa fa-thermometer-half"
                        data-bs-toggle="tooltip"
                        title="fa fa-thermometer-half"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thermometer-half"
                    >
                      fa fa-thermometer-half
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thermometer-quarter">
                      <i
                        className="fa fa-thermometer-quarter"
                        data-bs-toggle="tooltip"
                        title="fa fa-thermometer-quarter"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thermometer-quarter"
                    >
                      fa fa-thermometer-quarter
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thermometer-three-q">
                      <i
                        className="fa fa-thermometer-three-quarters"
                        data-bs-toggle="tooltip"
                        title="fa fa-thermometer-three-quarters"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thermometer-three-q"
                    >
                      fa fa-thermometer-three-quarters
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thumb-tack">
                      <i
                        className="fa fa-thumb-tack"
                        data-bs-toggle="tooltip"
                        title="fa fa-thumb-tack"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-thumb-tack">
                      fa fa-thumb-tack
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thumbs-down">
                      <i
                        className="fa fa-thumbs-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-thumbs-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thumbs-down"
                    >
                      fa fa-thumbs-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thumbs-o-down">
                      <i
                        className="fa fa-thumbs-o-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-thumbs-o-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thumbs-o-down"
                    >
                      fa fa-thumbs-o-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thumbs-o-up">
                      <i
                        className="fa fa-thumbs-o-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-thumbs-o-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-thumbs-o-up"
                    >
                      fa fa-thumbs-o-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-thumbs-up">
                      <i
                        className="fa fa-thumbs-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-thumbs-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-thumbs-up">
                      fa fa-thumbs-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-ticket">
                      <i
                        className="fa fa-ticket"
                        data-bs-toggle="tooltip"
                        title="fa fa-ticket"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-ticket">
                      fa fa-ticket
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-times">
                      <i
                        className="fa fa-times"
                        data-bs-toggle="tooltip"
                        title="fa fa-times"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-times">
                      fa fa-times
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-times-circle">
                      <i
                        className="fa fa-times-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-times-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-times-circle"
                    >
                      fa fa-times-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-times-circle-o">
                      <i
                        className="fa fa-times-circle-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-times-circle-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-times-circle-o"
                    >
                      fa fa-times-circle-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-times-rectangle">
                      <i
                        className="fa fa-times-rectangle"
                        data-bs-toggle="tooltip"
                        title="fa fa-times-rectangle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-times-rectangle"
                    >
                      fa fa-times-rectangle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-times-rectangle-o">
                      <i
                        className="fa fa-times-rectangle-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-times-rectangle-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-times-rectangle-o"
                    >
                      fa fa-times-rectangle-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tint">
                      <i
                        className="fa fa-tint"
                        data-bs-toggle="tooltip"
                        title="fa fa-tint"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-tint">
                      fa fa-tint
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-toggle-down">
                      <i
                        className="fa fa-toggle-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-toggle-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-toggle-down"
                    >
                      fa fa-toggle-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-toggle-left">
                      <i
                        className="fa fa-toggle-left"
                        data-bs-toggle="tooltip"
                        title="fa fa-toggle-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-toggle-left"
                    >
                      fa fa-toggle-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-toggle-off">
                      <i
                        className="fa fa-toggle-off"
                        data-bs-toggle="tooltip"
                        title="fa fa-toggle-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-toggle-off">
                      fa fa-toggle-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-toggle-on">
                      <i
                        className="fa fa-toggle-on"
                        data-bs-toggle="tooltip"
                        title="fa fa-toggle-on"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-toggle-on">
                      fa fa-toggle-on
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-toggle-right">
                      <i
                        className="fa fa-toggle-right"
                        data-bs-toggle="tooltip"
                        title="fa fa-toggle-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-toggle-right"
                    >
                      fa fa-toggle-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-toggle-up">
                      <i
                        className="fa fa-toggle-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-toggle-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-toggle-up">
                      fa fa-toggle-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-trademark">
                      <i
                        className="fa fa-trademark"
                        data-bs-toggle="tooltip"
                        title="fa fa-trademark"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-trademark">
                      fa fa-trademark
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-train">
                      <i
                        className="fa fa-train"
                        data-bs-toggle="tooltip"
                        title="fa fa-train"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-train">
                      fa fa-train
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-transgender">
                      <i
                        className="fa fa-transgender"
                        data-bs-toggle="tooltip"
                        title="fa fa-transgender"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-transgender"
                    >
                      fa fa-transgender
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-transgender-alt">
                      <i
                        className="fa fa-transgender-alt"
                        data-bs-toggle="tooltip"
                        title="fa fa-transgender-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-transgender-alt"
                    >
                      fa fa-transgender-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-trash">
                      <i
                        className="fa fa-trash"
                        data-bs-toggle="tooltip"
                        title="fa fa-trash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-trash">
                      fa fa-trash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-trash-o">
                      <i
                        className="fa fa-trash-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-trash-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-trash-o">
                      fa fa-trash-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tree">
                      <i
                        className="fa fa-tree"
                        data-bs-toggle="tooltip"
                        title="fa fa-tree"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-tree">
                      fa fa-tree
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-trello">
                      <i
                        className="fa fa-trello"
                        data-bs-toggle="tooltip"
                        title="fa fa-trello"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-trello">
                      fa fa-trello
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tripadvisor">
                      <i
                        className="fa fa-tripadvisor"
                        data-bs-toggle="tooltip"
                        title="fa fa-tripadvisor"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-tripadvisor"
                    >
                      fa fa-tripadvisor
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-trophy">
                      <i
                        className="fa fa-trophy"
                        data-bs-toggle="tooltip"
                        title="fa fa-trophy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-trophy">
                      fa fa-trophy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-truck">
                      <i
                        className="fa fa-truck"
                        data-bs-toggle="tooltip"
                        title="fa fa-truck"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-truck">
                      fa fa-truck
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-try">
                      <i
                        className="fa fa-try"
                        data-bs-toggle="tooltip"
                        title="fa fa-try"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-try">
                      fa fa-try
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tty">
                      <i
                        className="fa fa-tty"
                        data-bs-toggle="tooltip"
                        title="fa fa-tty"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-tty">
                      fa fa-tty
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tumblr">
                      <i
                        className="fa fa-tumblr"
                        data-bs-toggle="tooltip"
                        title="fa fa-tumblr"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-tumblr">
                      fa fa-tumblr
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tumblr-square">
                      <i
                        className="fa fa-tumblr-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-tumblr-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-tumblr-square"
                    >
                      fa fa-tumblr-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-turkish-lira">
                      <i
                        className="fa fa-turkish-lira"
                        data-bs-toggle="tooltip"
                        title="fa fa-turkish-lira"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-turkish-lira"
                    >
                      fa fa-turkish-lira
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-tv">
                      <i
                        className="fa fa-tv"
                        data-bs-toggle="tooltip"
                        title="fa fa-tv"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-tv">
                      fa fa-tv
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-twitch">
                      <i
                        className="fa fa-twitch"
                        data-bs-toggle="tooltip"
                        title="fa fa-twitch"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-twitch">
                      fa fa-twitch
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-twitter">
                      <i
                        className="fa fa-twitter"
                        data-bs-toggle="tooltip"
                        title="fa fa-twitter"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-twitter">
                      fa fa-twitter
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-twitter-square">
                      <i
                        className="fa fa-twitter-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-twitter-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-twitter-square"
                    >
                      fa fa-twitter-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-umbrella">
                      <i
                        className="fa fa-umbrella"
                        data-bs-toggle="tooltip"
                        title="fa fa-umbrella"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-umbrella">
                      fa fa-umbrella
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-underline">
                      <i
                        className="fa fa-underline"
                        data-bs-toggle="tooltip"
                        title="fa fa-underline"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-underline">
                      fa fa-underline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-undo">
                      <i
                        className="fa fa-undo"
                        data-bs-toggle="tooltip"
                        title="fa fa-undo"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-undo">
                      fa fa-undo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-universal-access">
                      <i
                        className="fa fa-universal-access"
                        data-bs-toggle="tooltip"
                        title="fa fa-universal-access"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-universal-access"
                    >
                      fa fa-universal-access
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-university">
                      <i
                        className="fa fa-university"
                        data-bs-toggle="tooltip"
                        title="fa fa-university"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-university">
                      fa fa-university
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-unlink">
                      <i
                        className="fa fa-unlink"
                        data-bs-toggle="tooltip"
                        title="fa fa-unlink"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-unlink">
                      fa fa-unlink
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-unlock">
                      <i
                        className="fa fa-unlock"
                        data-bs-toggle="tooltip"
                        title="fa fa-unlock"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-unlock">
                      fa fa-unlock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-unlock-alt">
                      <i
                        className="fa fa-unlock-alt"
                        data-bs-toggle="tooltip"
                        title="fa fa-unlock-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-unlock-alt">
                      fa fa-unlock-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-unsorted">
                      <i
                        className="fa fa-unsorted"
                        data-bs-toggle="tooltip"
                        title="fa fa-unsorted"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-unsorted">
                      fa fa-unsorted
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-upload">
                      <i
                        className="fa fa-upload"
                        data-bs-toggle="tooltip"
                        title="fa fa-upload"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-upload">
                      fa fa-upload
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-usb">
                      <i
                        className="fa fa-usb"
                        data-bs-toggle="tooltip"
                        title="fa fa-usb"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-usb">
                      fa fa-usb
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-usd">
                      <i
                        className="fa fa-usd"
                        data-bs-toggle="tooltip"
                        title="fa fa-usd"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-usd">
                      fa fa-usd
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-user">
                      <i
                        className="fa fa-user"
                        data-bs-toggle="tooltip"
                        title="fa fa-user"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-user">
                      fa fa-user
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-user-circle">
                      <i
                        className="fa fa-user-circle"
                        data-bs-toggle="tooltip"
                        title="fa fa-user-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-user-circle"
                    >
                      fa fa-user-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-user-circle-o">
                      <i
                        className="fa fa-user-circle-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-user-circle-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-user-circle-o"
                    >
                      fa fa-user-circle-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-user-md">
                      <i
                        className="fa fa-user-md"
                        data-bs-toggle="tooltip"
                        title="fa fa-user-md"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-user-md">
                      fa fa-user-md
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-user-o">
                      <i
                        className="fa fa-user-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-user-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-user-o">
                      fa fa-user-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-user-plus">
                      <i
                        className="fa fa-user-plus"
                        data-bs-toggle="tooltip"
                        title="fa fa-user-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-user-plus">
                      fa fa-user-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-user-secret">
                      <i
                        className="fa fa-user-secret"
                        data-bs-toggle="tooltip"
                        title="fa fa-user-secret"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-user-secret"
                    >
                      fa fa-user-secret
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-user-times">
                      <i
                        className="fa fa-user-times"
                        data-bs-toggle="tooltip"
                        title="fa fa-user-times"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-user-times">
                      fa fa-user-times
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-users">
                      <i
                        className="fa fa-users"
                        data-bs-toggle="tooltip"
                        title="fa fa-users"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-users">
                      fa fa-users
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-vcard">
                      <i
                        className="fa fa-vcard"
                        data-bs-toggle="tooltip"
                        title="fa fa-vcard"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-vcard">
                      fa fa-vcard
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-vcard-o">
                      <i
                        className="fa fa-vcard-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-vcard-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-vcard-o">
                      fa fa-vcard-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-venus">
                      <i
                        className="fa fa-venus"
                        data-bs-toggle="tooltip"
                        title="fa fa-venus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-venus">
                      fa fa-venus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-venus-double">
                      <i
                        className="fa fa-venus-double"
                        data-bs-toggle="tooltip"
                        title="fa fa-venus-double"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-venus-double"
                    >
                      fa fa-venus-double
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-venus-mars">
                      <i
                        className="fa fa-venus-mars"
                        data-bs-toggle="tooltip"
                        title="fa fa-venus-mars"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-venus-mars">
                      fa fa-venus-mars
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-viacoin">
                      <i
                        className="fa fa-viacoin"
                        data-bs-toggle="tooltip"
                        title="fa fa-viacoin"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-viacoin">
                      fa fa-viacoin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-viadeo">
                      <i
                        className="fa fa-viadeo"
                        data-bs-toggle="tooltip"
                        title="fa fa-viadeo"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-viadeo">
                      fa fa-viadeo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-viadeo-square">
                      <i
                        className="fa fa-viadeo-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-viadeo-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-viadeo-square"
                    >
                      fa fa-viadeo-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-video-camera">
                      <i
                        className="fa fa-video-camera"
                        data-bs-toggle="tooltip"
                        title="fa fa-video-camera"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-video-camera"
                    >
                      fa fa-video-camera
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-vimeo">
                      <i
                        className="fa fa-vimeo"
                        data-bs-toggle="tooltip"
                        title="fa fa-vimeo"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-vimeo">
                      fa fa-vimeo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-vimeo-square">
                      <i
                        className="fa fa-vimeo-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-vimeo-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-vimeo-square"
                    >
                      fa fa-vimeo-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-vine">
                      <i
                        className="fa fa-vine"
                        data-bs-toggle="tooltip"
                        title="fa fa-vine"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-vine">
                      fa fa-vine
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-vk">
                      <i
                        className="fa fa-vk"
                        data-bs-toggle="tooltip"
                        title="fa fa-vk"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-vk">
                      fa fa-vk
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-volume-control-phon">
                      <i
                        className="fa fa-volume-control-phone"
                        data-bs-toggle="tooltip"
                        title="fa fa-volume-control-phone"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-volume-control-phon"
                    >
                      fa fa-volume-control-phone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-volume-down">
                      <i
                        className="fa fa-volume-down"
                        data-bs-toggle="tooltip"
                        title="fa fa-volume-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-volume-down"
                    >
                      fa fa-volume-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-volume-off">
                      <i
                        className="fa fa-volume-off"
                        data-bs-toggle="tooltip"
                        title="fa fa-volume-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-volume-off">
                      fa fa-volume-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-volume-up">
                      <i
                        className="fa fa-volume-up"
                        data-bs-toggle="tooltip"
                        title="fa fa-volume-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-volume-up">
                      fa fa-volume-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-warning">
                      <i
                        className="fa fa-warning"
                        data-bs-toggle="tooltip"
                        title="fa fa-warning"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-warning">
                      fa fa-warning
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-wechat">
                      <i
                        className="fa fa-wechat"
                        data-bs-toggle="tooltip"
                        title="fa fa-wechat"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-wechat">
                      fa fa-wechat
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-weibo">
                      <i
                        className="fa fa-weibo"
                        data-bs-toggle="tooltip"
                        title="fa fa-weibo"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-weibo">
                      fa fa-weibo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-weixin">
                      <i
                        className="fa fa-weixin"
                        data-bs-toggle="tooltip"
                        title="fa fa-weixin"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-weixin">
                      fa fa-weixin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-whatsapp">
                      <i
                        className="fa fa-whatsapp"
                        data-bs-toggle="tooltip"
                        title="fa fa-whatsapp"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-whatsapp">
                      fa fa-whatsapp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-wheelchair">
                      <i
                        className="fa fa-wheelchair"
                        data-bs-toggle="tooltip"
                        title="fa fa-wheelchair"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-wheelchair">
                      fa fa-wheelchair
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-wheelchair-alt">
                      <i
                        className="fa fa-wheelchair-alt"
                        data-bs-toggle="tooltip"
                        title="fa fa-wheelchair-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-wheelchair-alt"
                    >
                      fa fa-wheelchair-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-wifi">
                      <i
                        className="fa fa-wifi"
                        data-bs-toggle="tooltip"
                        title="fa fa-wifi"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-wifi">
                      fa fa-wifi
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-wikipedia-w">
                      <i
                        className="fa fa-wikipedia-w"
                        data-bs-toggle="tooltip"
                        title="fa fa-wikipedia-w"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-wikipedia-w"
                    >
                      fa fa-wikipedia-w
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-window-close">
                      <i
                        className="fa fa-window-close"
                        data-bs-toggle="tooltip"
                        title="fa fa-window-close"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-window-close"
                    >
                      fa fa-window-close
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-window-close-o">
                      <i
                        className="fa fa-window-close-o"
                        data-bs-toggle="tooltip"
                        title="fa fa-window-close-o"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-window-close-o"
                    >
                      fa fa-window-close-o
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-window-maximize">
                      <i
                        className="fa fa-window-maximize"
                        data-bs-toggle="tooltip"
                        title="fa fa-window-maximize"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-window-maximize"
                    >
                      fa fa-window-maximize
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-window-minimize">
                      <i
                        className="fa fa-window-minimize"
                        data-bs-toggle="tooltip"
                        title="fa fa-window-minimize"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-window-minimize"
                    >
                      fa fa-window-minimize
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-window-restore">
                      <i
                        className="fa fa-window-restore"
                        data-bs-toggle="tooltip"
                        title="fa fa-window-restore"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-window-restore"
                    >
                      fa fa-window-restore
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-windows">
                      <i
                        className="fa fa-windows"
                        data-bs-toggle="tooltip"
                        title="fa fa-windows"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-windows">
                      fa fa-windows
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-won">
                      <i
                        className="fa fa-won"
                        data-bs-toggle="tooltip"
                        title="fa fa-won"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-won">
                      fa fa-won
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-wordpress">
                      <i
                        className="fa fa-wordpress"
                        data-bs-toggle="tooltip"
                        title="fa fa-wordpress"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-wordpress">
                      fa fa-wordpress
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-wpbeginner">
                      <i
                        className="fa fa-wpbeginner"
                        data-bs-toggle="tooltip"
                        title="fa fa-wpbeginner"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-wpbeginner">
                      fa fa-wpbeginner
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-wpexplorer">
                      <i
                        className="fa fa-wpexplorer"
                        data-bs-toggle="tooltip"
                        title="fa fa-wpexplorer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-wpexplorer">
                      fa fa-wpexplorer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-wpforms">
                      <i
                        className="fa fa-wpforms"
                        data-bs-toggle="tooltip"
                        title="fa fa-wpforms"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-wpforms">
                      fa fa-wpforms
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-wrench">
                      <i
                        className="fa fa-wrench"
                        data-bs-toggle="tooltip"
                        title="fa fa-wrench"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-wrench">
                      fa fa-wrench
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-xing">
                      <i
                        className="fa fa-xing"
                        data-bs-toggle="tooltip"
                        title="fa fa-xing"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-xing">
                      fa fa-xing
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-xing-square">
                      <i
                        className="fa fa-xing-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-xing-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-xing-square"
                    >
                      fa fa-xing-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-y-combinator">
                      <i
                        className="fa fa-y-combinator"
                        data-bs-toggle="tooltip"
                        title="fa fa-y-combinator"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-y-combinator"
                    >
                      fa fa-y-combinator
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-y-combinator-square">
                      <i
                        className="fa fa-y-combinator-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-y-combinator-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-y-combinator-square"
                    >
                      fa fa-y-combinator-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-yahoo">
                      <i
                        className="fa fa-yahoo"
                        data-bs-toggle="tooltip"
                        title="fa fa-yahoo"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-yahoo">
                      fa fa-yahoo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-yc">
                      <i
                        className="fa fa-yc"
                        data-bs-toggle="tooltip"
                        title="fa fa-yc"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-yc">
                      fa fa-yc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-yc-square">
                      <i
                        className="fa fa-yc-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-yc-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-yc-square">
                      fa fa-yc-square
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-yelp">
                      <i
                        className="fa fa-yelp"
                        data-bs-toggle="tooltip"
                        title="fa fa-yelp"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-yelp">
                      fa fa-yelp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-yen">
                      <i
                        className="fa fa-yen"
                        data-bs-toggle="tooltip"
                        title="fa fa-yen"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-yen">
                      fa fa-yen
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-yoast">
                      <i
                        className="fa fa-yoast"
                        data-bs-toggle="tooltip"
                        title="fa fa-yoast"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-yoast">
                      fa fa-yoast
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-youtube">
                      <i
                        className="fa fa-youtube"
                        data-bs-toggle="tooltip"
                        title="fa fa-youtube"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="fa-youtube">
                      fa fa-youtube
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-youtube-play">
                      <i
                        className="fa fa-youtube-play"
                        data-bs-toggle="tooltip"
                        title="fa fa-youtube-play"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-youtube-play"
                    >
                      fa fa-youtube-play
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="fa-youtube-square">
                      <i
                        className="fa fa-youtube-square"
                        data-bs-toggle="tooltip"
                        title="fa fa-youtube-square"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="fa-youtube-square"
                    >
                      fa fa-youtube-square
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

FontAwesome.propTypes = {};

FontAwesome.defaultProps = {};

export default FontAwesome;
