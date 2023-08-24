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

const IonicIcons = () => (
  <div>
    <PageHeaders
      title="Ionic Icons"
      home="Home"
      name="Icons"
      fonticonsname="Ionic Icons"
    />
    <Row>
      <Col md={12}>
        <Card>
          <CardHeader >
            <CardTitle tag="h3">Ionic Icons</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="12" sm="12">
                <p className="mb-2">
                  Simply beautiful open source icons. For more info{" "}
                  <a href="https://ionicons.com" target="_blank" className="text-primary">
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="ion ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col sm="12" lg="12">
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item" id="ion-ionic">
                      <i
                        className="ion-ionic"
                        data-bs-toggle="tooltip"
                        title="ion-ionic"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-ionic">
                      ion-ionic
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-up-a">
                      <i
                        className="ion-arrow-up-a"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-up-a"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-up-a"
                    >
                      ion-arrow-up-a
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-right-a">
                      <i
                        className="ion-arrow-right-a"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-right-a"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-right-a"
                    >
                      ion-arrow-right-a
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-down-a">
                      <i
                        className="ion-arrow-down-a"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-down-a"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-down-a"
                    >
                      ion-arrow-down-a
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-left-a">
                      <i
                        className="ion-arrow-left-a"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-left-a"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-left-a"
                    >
                      ion-arrow-left-a
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-up-b">
                      <i
                        className="ion-arrow-up-b"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-up-b"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-up-b"
                    >
                      ion-arrow-up-b
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-right-b">
                      <i
                        className="ion-arrow-right-b"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-right-b"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-right-b"
                    >
                      ion-arrow-right-b
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-down-b">
                      <i
                        className="ion-arrow-down-b"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-down-b"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-down-b"
                    >
                      ion-arrow-down-b
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-left-b">
                      <i
                        className="ion-arrow-left-b"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-left-b"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-left-b"
                    >
                      ion-arrow-left-b
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-up-c">
                      <i
                        className="ion-arrow-up-c"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-up-c"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-up-c"
                    >
                      ion-arrow-up-c
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-right-c">
                      <i
                        className="ion-arrow-right-c"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-right-c"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-right-c"
                    >
                      ion-arrow-right-c
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-down-c">
                      <i
                        className="ion-arrow-down-c"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-down-c"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-down-c"
                    >
                      ion-arrow-down-c
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-left-c">
                      <i
                        className="ion-arrow-left-c"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-left-c"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-left-c"
                    >
                      ion-arrow-left-c
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-return-right">
                      <i
                        className="ion-arrow-return-right"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-return-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-return-right"
                    >
                      ion-arrow-return-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-return-left">
                      <i
                        className="ion-arrow-return-left"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-return-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-return-left"
                    >
                      ion-arrow-return-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-swap">
                      <i
                        className="ion-arrow-swap"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-swap"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-swap"
                    >
                      ion-arrow-swap
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-shrink">
                      <i
                        className="ion-arrow-shrink"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-shrink"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-shrink"
                    >
                      ion-arrow-shrink
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-expand">
                      <i
                        className="ion-arrow-expand"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-expand"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-expand"
                    >
                      ion-arrow-expand
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-move">
                      <i
                        className="ion-arrow-move"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-move"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-move"
                    >
                      ion-arrow-move
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-arrow-resize">
                      <i
                        className="ion-arrow-resize"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-resize"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-resize"
                    >
                      ion-arrow-resize
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-chevron-up">
                      <i
                        className="ion-chevron-up"
                        data-bs-toggle="tooltip"
                        title="ion-chevron-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-chevron-up"
                    >
                      ion-chevron-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-chevron-right">
                      <i
                        className="ion-chevron-right"
                        data-bs-toggle="tooltip"
                        title="ion-chevron-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-chevron-right"
                    >
                      ion-chevron-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-chevron-down">
                      <i
                        className="ion-chevron-down"
                        data-bs-toggle="tooltip"
                        title="ion-chevron-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-chevron-down"
                    >
                      ion-chevron-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-chevron-left">
                      <i
                        className="ion-chevron-left"
                        data-bs-toggle="tooltip"
                        title="ion-chevron-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-chevron-left"
                    >
                      ion-chevron-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-navicon-round">
                      <i
                        className="ion-navicon-round"
                        data-bs-toggle="tooltip"
                        title="ion-navicon-round"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-navicon-round"
                    >
                      ion-navicon-round
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-navicon">
                      <i
                        className="ion-navicon"
                        data-bs-toggle="tooltip"
                        title="ion-navicon"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-navicon">
                      ion-navicon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-drag">
                      <i
                        className="ion-drag"
                        data-bs-toggle="tooltip"
                        title="ion-drag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-drag">
                      ion-drag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-log-in">
                      <i
                        className="ion-log-in"
                        data-bs-toggle="tooltip"
                        title="ion-log-in"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-log-in">
                      ion-log-in
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-log-out">
                      <i
                        className="ion-log-out"
                        data-bs-toggle="tooltip"
                        title="ion-log-out"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-log-out">
                      ion-log-out
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-checkmark-round">
                      <i
                        className="ion-checkmark-round"
                        data-bs-toggle="tooltip"
                        title="ion-checkmark-round"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-checkmark-round"
                    >
                      ion-checkmark-round
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-checkmark">
                      <i
                        className="ion-checkmark"
                        data-bs-toggle="tooltip"
                        title="ion-checkmark"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-checkmark">
                      ion-checkmark
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-checkmark-circled">
                      <i
                        className="ion-checkmark-circled"
                        data-bs-toggle="tooltip"
                        title="ion-checkmark-circled"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-checkmark-circled"
                    >
                      ion-checkmark-circled
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-close-round">
                      <i
                        className="ion-close-round"
                        data-bs-toggle="tooltip"
                        title="ion-close-round"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-close-round"
                    >
                      ion-close-round
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-close">
                      <i
                        className="ion-close"
                        data-bs-toggle="tooltip"
                        title="ion-close"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-close">
                      ion-close
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-close-circled">
                      <i
                        className="ion-close-circled"
                        data-bs-toggle="tooltip"
                        title="ion-close-circled"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-close-circled"
                    >
                      ion-close-circled
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-plus-round">
                      <i
                        className="ion-plus-round"
                        data-bs-toggle="tooltip"
                        title="ion-plus-round"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-plus-round"
                    >
                      ion-plus-round
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-plus">
                      <i
                        className="ion-plus"
                        data-bs-toggle="tooltip"
                        title="ion-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-plus">
                      ion-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-plus-circled">
                      <i
                        className="ion-plus-circled"
                        data-bs-toggle="tooltip"
                        title="ion-plus-circled"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-plus-circled"
                    >
                      ion-plus-circled
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-minus-round">
                      <i
                        className="ion-minus-round"
                        data-bs-toggle="tooltip"
                        title="ion-minus-round"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-minus-round"
                    >
                      ion-minus-round
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-minus">
                      <i
                        className="ion-minus"
                        data-bs-toggle="tooltip"
                        title="ion-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-minus">
                      ion-minus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-minus-circled">
                      <i
                        className="ion-minus-circled"
                        data-bs-toggle="tooltip"
                        title="ion-minus-circled"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-minus-circled"
                    >
                      ion-minus-circled
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-information">
                      <i
                        className="ion-information"
                        data-bs-toggle="tooltip"
                        title="ion-information"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-information"
                    >
                      ion-information
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-information-circled"
                    >
                      <i
                        className="ion-information-circled"
                        data-bs-toggle="tooltip"
                        title="ion-information-circled"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-information-circled"
                    >
                      ion-information-circled
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-help">
                      <i
                        className="ion-help"
                        data-bs-toggle="tooltip"
                        title="ion-help"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-help">
                      ion-help
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-help-circled">
                      <i
                        className="ion-help-circled"
                        data-bs-toggle="tooltip"
                        title="ion-help-circled"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-help-circled"
                    >
                      ion-help-circled
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-help-buoy">
                      <i
                        className="ion-help-buoy"
                        data-bs-toggle="tooltip"
                        title="ion-help-buoy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-help-buoy">
                      ion-help-buoy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-asterisk">
                      <i
                        className="ion-asterisk"
                        data-bs-toggle="tooltip"
                        title="ion-asterisk"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-asterisk">
                      ion-asterisk
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-alert">
                      <i
                        className="ion-alert"
                        data-bs-toggle="tooltip"
                        title="ion-alert"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-alert">
                      ion-alert
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-alert-circled">
                      <i
                        className="ion-alert-circled"
                        data-bs-toggle="tooltip"
                        title="ion-alert-circled"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-alert-circled"
                    >
                      ion-alert-circled
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-refresh">
                      <i
                        className="ion-refresh"
                        data-bs-toggle="tooltip"
                        title="ion-refresh"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-refresh">
                      ion-refresh
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-loop">
                      <i
                        className="ion-loop"
                        data-bs-toggle="tooltip"
                        title="ion-loop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-loop">
                      ion-loop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-shuffle">
                      <i
                        className="ion-shuffle"
                        data-bs-toggle="tooltip"
                        title="ion-shuffle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-shuffle">
                      ion-shuffle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-home">
                      <i
                        className="ion-home"
                        data-bs-toggle="tooltip"
                        title="ion-home"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-home">
                      ion-home
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-search">
                      <i
                        className="ion-search"
                        data-bs-toggle="tooltip"
                        title="ion-search"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-search">
                      ion-search
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-flag">
                      <i
                        className="ion-flag"
                        data-bs-toggle="tooltip"
                        title="ion-flag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-flag">
                      ion-flag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-star">
                      <i
                        className="ion-star"
                        data-bs-toggle="tooltip"
                        title="ion-star"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-star">
                      ion-star
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-heart">
                      <i
                        className="ion-heart"
                        data-bs-toggle="tooltip"
                        title="ion-heart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-heart">
                      ion-heart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-heart-broken">
                      <i
                        className="ion-heart-broken"
                        data-bs-toggle="tooltip"
                        title="ion-heart-broken"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-heart-broken"
                    >
                      ion-heart-broken
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-gear-a">
                      <i
                        className="ion-gear-a"
                        data-bs-toggle="tooltip"
                        title="ion-gear-a"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-gear-a">
                      ion-gear-a
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-gear-b">
                      <i
                        className="ion-gear-b"
                        data-bs-toggle="tooltip"
                        title="ion-gear-b"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-gear-b">
                      ion-gear-b
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-toggle-filled">
                      <i
                        className="ion-toggle-filled"
                        data-bs-toggle="tooltip"
                        title="ion-toggle-filled"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-toggle-filled"
                    >
                      ion-toggle-filled
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-toggle">
                      <i
                        className="ion-toggle"
                        data-bs-toggle="tooltip"
                        title="ion-toggle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-toggle">
                      ion-toggle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-settings">
                      <i
                        className="ion-settings"
                        data-bs-toggle="tooltip"
                        title="ion-settings"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-settings">
                      ion-settings
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-wrench">
                      <i
                        className="ion-wrench"
                        data-bs-toggle="tooltip"
                        title="ion-wrench"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-wrench">
                      ion-wrench
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-folder">
                      <i
                        className="ion-folder"
                        data-bs-toggle="tooltip"
                        title="ion-folder"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-folder">
                      ion-folder
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-hammer">
                      <i
                        className="ion-hammer"
                        data-bs-toggle="tooltip"
                        title="ion-hammer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-hammer">
                      ion-hammer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-edit">
                      <i
                        className="ion-edit"
                        data-bs-toggle="tooltip"
                        title="ion-edit"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-edit">
                      ion-edit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-trash-a">
                      <i
                        className="ion-trash-a"
                        data-bs-toggle="tooltip"
                        title="ion-trash-a"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-trash-a">
                      ion-trash-a
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-trash-b">
                      <i
                        className="ion-trash-b"
                        data-bs-toggle="tooltip"
                        title="ion-trash-b"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-trash-b">
                      ion-trash-b
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-document">
                      <i
                        className="ion-document"
                        data-bs-toggle="tooltip"
                        title="ion-document"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-document">
                      ion-document
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-document-text">
                      <i
                        className="ion-document-text"
                        data-bs-toggle="tooltip"
                        title="ion-document-text"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-document-text"
                    >
                      ion-document-text
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-clipboard">
                      <i
                        className="ion-clipboard"
                        data-bs-toggle="tooltip"
                        title="ion-clipboard"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-clipboard">
                      ion-clipboard
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-scissors">
                      <i
                        className="ion-scissors"
                        data-bs-toggle="tooltip"
                        title="ion-scissors"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-scissors">
                      ion-scissors
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-funnel">
                      <i
                        className="ion-funnel"
                        data-bs-toggle="tooltip"
                        title="ion-funnel"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-funnel">
                      ion-funnel
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-bookmark">
                      <i
                        className="ion-bookmark"
                        data-bs-toggle="tooltip"
                        title="ion-bookmark"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-bookmark">
                      ion-bookmark
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-email">
                      <i
                        className="ion-email"
                        data-bs-toggle="tooltip"
                        title="ion-email"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-email">
                      ion-email
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-folder">
                      <i
                        className="ion-folder"
                        data-bs-toggle="tooltip"
                        title="ion-folder"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-folder">
                      ion-folder
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-filing">
                      <i
                        className="ion-filing"
                        data-bs-toggle="tooltip"
                        title="ion-filing"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-filing">
                      ion-filing
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-archive">
                      <i
                        className="ion-archive"
                        data-bs-toggle="tooltip"
                        title="ion-archive"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-archive">
                      ion-archive
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-reply">
                      <i
                        className="ion-reply"
                        data-bs-toggle="tooltip"
                        title="ion-reply"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-reply">
                      ion-reply
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-reply-all">
                      <i
                        className="ion-reply-all"
                        data-bs-toggle="tooltip"
                        title="ion-reply-all"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-reply-all">
                      ion-reply-all
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-forward">
                      <i
                        className="ion-forward"
                        data-bs-toggle="tooltip"
                        title="ion-forward"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-forward">
                      ion-forward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-share">
                      <i
                        className="ion-share"
                        data-bs-toggle="tooltip"
                        title="ion-share"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-share">
                      ion-share
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-paper-airplane">
                      <i
                        className="ion-paper-airplane"
                        data-bs-toggle="tooltip"
                        title="ion-paper-airplane"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-paper-airplane"
                    >
                      ion-paper-airplane
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-link">
                      <i
                        className="ion-link"
                        data-bs-toggle="tooltip"
                        title="ion-link"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-link">
                      ion-link
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-paperclip">
                      <i
                        className="ion-paperclip"
                        data-bs-toggle="tooltip"
                        title="ion-paperclip"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-paperclip">
                      ion-paperclip
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-compose">
                      <i
                        className="ion-compose"
                        data-bs-toggle="tooltip"
                        title="ion-compose"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-compose">
                      ion-compose
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-briefcase">
                      <i
                        className="ion-briefcase"
                        data-bs-toggle="tooltip"
                        title="ion-briefcase"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-briefcase">
                      ion-briefcase
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-medkit">
                      <i
                        className="ion-medkit"
                        data-bs-toggle="tooltip"
                        title="ion-medkit"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-medkit">
                      ion-medkit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-at">
                      <i
                        className="ion-at"
                        data-bs-toggle="tooltip"
                        title="ion-at"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-at">
                      ion-at
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-pound">
                      <i
                        className="ion-pound"
                        data-bs-toggle="tooltip"
                        title="ion-pound"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-pound">
                      ion-pound
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-quote">
                      <i
                        className="ion-quote"
                        data-bs-toggle="tooltip"
                        title="ion-quote"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-quote">
                      ion-quote
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-cloud">
                      <i
                        className="ion-cloud"
                        data-bs-toggle="tooltip"
                        title="ion-cloud"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-cloud">
                      ion-cloud
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-upload">
                      <i
                        className="ion-upload"
                        data-bs-toggle="tooltip"
                        title="ion-upload"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-upload">
                      ion-upload
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-more">
                      <i
                        className="ion-more"
                        data-bs-toggle="tooltip"
                        title="ion-more"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-more">
                      ion-more
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-grid">
                      <i
                        className="ion-grid"
                        data-bs-toggle="tooltip"
                        title="ion-grid"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-grid">
                      ion-grid
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-calendar">
                      <i
                        className="ion-calendar"
                        data-bs-toggle="tooltip"
                        title="ion-calendar"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-calendar">
                      ion-calendar
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-clock">
                      <i
                        className="ion-clock"
                        data-bs-toggle="tooltip"
                        title="ion-clock"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-clock">
                      ion-clock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-compass">
                      <i
                        className="ion-compass"
                        data-bs-toggle="tooltip"
                        title="ion-compass"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-compass">
                      ion-compass
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-pinpoint">
                      <i
                        className="ion-pinpoint"
                        data-bs-toggle="tooltip"
                        title="ion-pinpoint"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-pinpoint">
                      ion-pinpoint
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-pin">
                      <i
                        className="ion-pin"
                        data-bs-toggle="tooltip"
                        title="ion-pin"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-pin">
                      ion-pin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-navigate">
                      <i
                        className="ion-navigate"
                        data-bs-toggle="tooltip"
                        title="ion-navigate"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-navigate">
                      ion-navigate
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-location">
                      <i
                        className="ion-location"
                        data-bs-toggle="tooltip"
                        title="ion-location"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-location">
                      ion-location
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-map">
                      <i
                        className="ion-map"
                        data-bs-toggle="tooltip"
                        title="ion-map"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-map">
                      ion-map
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-model-s">
                      <i
                        className="ion-model-s"
                        data-bs-toggle="tooltip"
                        title="ion-model-s"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-model-s">
                      ion-model-s
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-locked">
                      <i
                        className="ion-locked"
                        data-bs-toggle="tooltip"
                        title="ion-locked"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-locked">
                      ion-locked
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-unlocked">
                      <i
                        className="ion-unlocked"
                        data-bs-toggle="tooltip"
                        title="ion-unlocked"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-unlocked">
                      ion-unlocked
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-key">
                      <i
                        className="ion-key"
                        data-bs-toggle="tooltip"
                        title="ion-key"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-key">
                      ion-key
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-arrow-graph-up-right"
                    >
                      <i
                        className="ion-arrow-graph-up-right"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-graph-up-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-graph-up-right"
                    >
                      ion-arrow-graph-up-right
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-arrow-graph-down-right"
                    >
                      <i
                        className="ion-arrow-graph-down-right"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-graph-down-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-graph-down-right"
                    >
                      ion-arrow-graph-down-right
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-arrow-graph-down-left"
                    >
                      <i
                        className="ion-arrow-graph-down-left"
                        data-bs-toggle="tooltip"
                        title="ion-arrow-graph-down-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-arrow-graph-down-left"
                    >
                      ion-arrow-graph-down-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-stats-bars">
                      <i
                        className="ion-stats-bars"
                        data-bs-toggle="tooltip"
                        title="ion-stats-bars"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-stats-bars"
                    >
                      ion-stats-bars
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-connection-bars">
                      <i
                        className="ion-connection-bars"
                        data-bs-toggle="tooltip"
                        title="ion-connection-bars"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-connection-bars"
                    >
                      ion-connection-bars
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-pie-graph">
                      <i
                        className="ion-pie-graph"
                        data-bs-toggle="tooltip"
                        title="ion-pie-graph"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-pie-graph">
                      ion-pie-graph
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-chatbubble">
                      <i
                        className="ion-chatbubble"
                        data-bs-toggle="tooltip"
                        title="ion-chatbubble"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-chatbubble"
                    >
                      ion-chatbubble
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-chatbubble-working">
                      <i
                        className="ion-chatbubble-working"
                        data-bs-toggle="tooltip"
                        title="ion-chatbubble-working"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-chatbubble-working"
                    >
                      ion-chatbubble-working
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-chatbubbles">
                      <i
                        className="ion-chatbubbles"
                        data-bs-toggle="tooltip"
                        title="ion-chatbubbles"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-chatbubbles"
                    >
                      ion-chatbubbles
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-chatbox">
                      <i
                        className="ion-chatbox"
                        data-bs-toggle="tooltip"
                        title="ion-chatbox"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-chatbox">
                      ion-chatbox
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-chatbox-working">
                      <i
                        className="ion-chatbox-working"
                        data-bs-toggle="tooltip"
                        title="ion-chatbox-working"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-chatbox-working"
                    >
                      ion-chatbox-working
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-chatboxes">
                      <i
                        className="ion-chatboxes"
                        data-bs-toggle="tooltip"
                        title="ion-chatboxes"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-chatboxes">
                      ion-chatboxes
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-person">
                      <i
                        className="ion-person"
                        data-bs-toggle="tooltip"
                        title="ion-person"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-person">
                      ion-person
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-person-add">
                      <i
                        className="ion-person-add"
                        data-bs-toggle="tooltip"
                        title="ion-person-add"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-person-add"
                    >
                      ion-person-add
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-person-stalker">
                      <i
                        className="ion-person-stalker"
                        data-bs-toggle="tooltip"
                        title="ion-person-stalker"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-person-stalker"
                    >
                      ion-person-stalker
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-woman">
                      <i
                        className="ion-woman"
                        data-bs-toggle="tooltip"
                        title="ion-woman"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-woman">
                      ion-woman
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-man">
                      <i
                        className="ion-man"
                        data-bs-toggle="tooltip"
                        title="ion-man"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-man">
                      ion-man
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-female">
                      <i
                        className="ion-female"
                        data-bs-toggle="tooltip"
                        title="ion-female"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-female">
                      ion-female
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-male">
                      <i
                        className="ion-male"
                        data-bs-toggle="tooltip"
                        title="ion-male"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-male">
                      ion-male
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-fork">
                      <i
                        className="ion-fork"
                        data-bs-toggle="tooltip"
                        title="ion-fork"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-fork">
                      ion-fork
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-knife">
                      <i
                        className="ion-knife"
                        data-bs-toggle="tooltip"
                        title="ion-knife"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-knife">
                      ion-knife
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-spoon">
                      <i
                        className="ion-spoon"
                        data-bs-toggle="tooltip"
                        title="ion-spoon"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-spoon">
                      ion-spoon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-beer">
                      <i
                        className="ion-beer"
                        data-bs-toggle="tooltip"
                        title="ion-beer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-beer">
                      ion-beer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-wineglass">
                      <i
                        className="ion-wineglass"
                        data-bs-toggle="tooltip"
                        title="ion-wineglass"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-wineglass">
                      ion-wineglass
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-coffee">
                      <i
                        className="ion-coffee"
                        data-bs-toggle="tooltip"
                        title="ion-coffee"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-coffee">
                      ion-coffee
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-icecream">
                      <i
                        className="ion-icecream"
                        data-bs-toggle="tooltip"
                        title="ion-icecream"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-icecream">
                      ion-icecream
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-pizza">
                      <i
                        className="ion-pizza"
                        data-bs-toggle="tooltip"
                        title="ion-pizza"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-pizza">
                      ion-pizza
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-power">
                      <i
                        className="ion-power"
                        data-bs-toggle="tooltip"
                        title="ion-power"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-power">
                      ion-power
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-mouse">
                      <i
                        className="ion-mouse"
                        data-bs-toggle="tooltip"
                        title="ion-mouse"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-mouse">
                      ion-mouse
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-battery-full">
                      <i
                        className="ion-battery-full"
                        data-bs-toggle="tooltip"
                        title="ion-battery-full"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-battery-full"
                    >
                      ion-battery-full
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-battery-half">
                      <i
                        className="ion-battery-half"
                        data-bs-toggle="tooltip"
                        title="ion-battery-half"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-battery-half"
                    >
                      ion-battery-half
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-battery-low">
                      <i
                        className="ion-battery-low"
                        data-bs-toggle="tooltip"
                        title="ion-battery-low"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-battery-low"
                    >
                      ion-battery-low
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-battery-empty">
                      <i
                        className="ion-battery-empty"
                        data-bs-toggle="tooltip"
                        title="ion-battery-empty"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-battery-empty"
                    >
                      ion-battery-empty
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-battery-charging">
                      <i
                        className="ion-battery-charging"
                        data-bs-toggle="tooltip"
                        title="ion-battery-charging"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-battery-charging"
                    >
                      ion-battery-charging
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-bluetooth">
                      <i
                        className="ion-bluetooth"
                        data-bs-toggle="tooltip"
                        title="ion-bluetooth"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-bluetooth">
                      ion-bluetooth
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-calculator">
                      <i
                        className="ion-calculator"
                        data-bs-toggle="tooltip"
                        title="ion-calculator"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-calculator"
                    >
                      ion-calculator
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-camera">
                      <i
                        className="ion-camera"
                        data-bs-toggle="tooltip"
                        title="ion-camera"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-camera">
                      ion-camera
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-eye">
                      <i
                        className="ion-eye"
                        data-bs-toggle="tooltip"
                        title="ion-eye"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-eye">
                      ion-eye
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-eye-disabled">
                      <i
                        className="ion-eye-disabled"
                        data-bs-toggle="tooltip"
                        title="ion-eye-disabled"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-eye-disabled"
                    >
                      ion-eye-disabled
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-flash">
                      <i
                        className="ion-flash"
                        data-bs-toggle="tooltip"
                        title="ion-flash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-flash">
                      ion-flash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-flash-off">
                      <i
                        className="ion-flash-off"
                        data-bs-toggle="tooltip"
                        title="ion-flash-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-flash-off">
                      ion-flash-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-qr-scanner">
                      <i
                        className="ion-qr-scanner"
                        data-bs-toggle="tooltip"
                        title="ion-qr-scanner"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-qr-scanner"
                    >
                      ion-qr-scanner
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-image">
                      <i
                        className="ion-image"
                        data-bs-toggle="tooltip"
                        title="ion-image"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-image">
                      ion-image
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-images">
                      <i
                        className="ion-images"
                        data-bs-toggle="tooltip"
                        title="ion-images"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-images">
                      ion-images
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-contrast">
                      <i
                        className="ion-contrast"
                        data-bs-toggle="tooltip"
                        title="ion-contrast"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-contrast">
                      ion-contrast
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-wand">
                      <i
                        className="ion-wand"
                        data-bs-toggle="tooltip"
                        title="ion-wand"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-wand">
                      ion-wand
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-aperture">
                      <i
                        className="ion-aperture"
                        data-bs-toggle="tooltip"
                        title="ion-aperture"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-aperture">
                      ion-aperture
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-monitor">
                      <i
                        className="ion-monitor"
                        data-bs-toggle="tooltip"
                        title="ion-monitor"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-monitor">
                      ion-monitor
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-laptop">
                      <i
                        className="ion-laptop"
                        data-bs-toggle="tooltip"
                        title="ion-laptop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-laptop">
                      ion-laptop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ipad">
                      <i
                        className="ion-ipad"
                        data-bs-toggle="tooltip"
                        title="ion-ipad"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-ipad">
                      ion-ipad
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-iphone">
                      <i
                        className="ion-iphone"
                        data-bs-toggle="tooltip"
                        title="ion-iphone"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-iphone">
                      ion-iphone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ipod">
                      <i
                        className="ion-ipod"
                        data-bs-toggle="tooltip"
                        title="ion-ipod"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-ipod">
                      ion-ipod
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-printer">
                      <i
                        className="ion-printer"
                        data-bs-toggle="tooltip"
                        title="ion-printer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-printer">
                      ion-printer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-usb">
                      <i
                        className="ion-usb"
                        data-bs-toggle="tooltip"
                        title="ion-usb"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-usb">
                      ion-usb
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-outlet">
                      <i
                        className="ion-outlet"
                        data-bs-toggle="tooltip"
                        title="ion-outlet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-outlet">
                      ion-outlet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-bug">
                      <i
                        className="ion-bug"
                        data-bs-toggle="tooltip"
                        title="ion-bug"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-bug">
                      ion-bug
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-code">
                      <i
                        className="ion-code"
                        data-bs-toggle="tooltip"
                        title="ion-code"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-code">
                      ion-code
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-code-working">
                      <i
                        className="ion-code-working"
                        data-bs-toggle="tooltip"
                        title="ion-code-working"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-code-working"
                    >
                      ion-code-working
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-code-download">
                      <i
                        className="ion-code-download"
                        data-bs-toggle="tooltip"
                        title="ion-code-download"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-code-download"
                    >
                      ion-code-download
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-fork-repo">
                      <i
                        className="ion-fork-repo"
                        data-bs-toggle="tooltip"
                        title="ion-fork-repo"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-fork-repo">
                      ion-fork-repo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-network">
                      <i
                        className="ion-network"
                        data-bs-toggle="tooltip"
                        title="ion-network"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-network">
                      ion-network
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-pull-request">
                      <i
                        className="ion-pull-request"
                        data-bs-toggle="tooltip"
                        title="ion-pull-request"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-pull-request"
                    >
                      ion-pull-request
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-merge">
                      <i
                        className="ion-merge"
                        data-bs-toggle="tooltip"
                        title="ion-merge"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-merge">
                      ion-merge
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-game-controller-a">
                      <i
                        className="ion-game-controller-a"
                        data-bs-toggle="tooltip"
                        title="ion-game-controller-a"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-game-controller-a"
                    >
                      ion-game-controller-a
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-game-controller-b">
                      <i
                        className="ion-game-controller-b"
                        data-bs-toggle="tooltip"
                        title="ion-game-controller-b"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-game-controller-b"
                    >
                      ion-game-controller-b
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-xbox">
                      <i
                        className="ion-xbox"
                        data-bs-toggle="tooltip"
                        title="ion-xbox"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-xbox">
                      ion-xbox
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-playstation">
                      <i
                        className="ion-playstation"
                        data-bs-toggle="tooltip"
                        title="ion-playstation"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-playstation"
                    >
                      ion-playstation
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-steam">
                      <i
                        className="ion-steam"
                        data-bs-toggle="tooltip"
                        title="ion-steam"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-steam">
                      ion-steam
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-closed-captioning">
                      <i
                        className="ion-closed-captioning"
                        data-bs-toggle="tooltip"
                        title="ion-closed-captioning"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-closed-captioning"
                    >
                      ion-closed-captioning
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-videocamera">
                      <i
                        className="ion-videocamera"
                        data-bs-toggle="tooltip"
                        title="ion-videocamera"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-videocamera"
                    >
                      ion-videocamera
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-film-marker">
                      <i
                        className="ion-film-marker"
                        data-bs-toggle="tooltip"
                        title="ion-film-marker"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-film-marker"
                    >
                      ion-film-marker
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-disc">
                      <i
                        className="ion-disc"
                        data-bs-toggle="tooltip"
                        title="ion-disc"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-disc">
                      ion-disc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-headphone">
                      <i
                        className="ion-headphone"
                        data-bs-toggle="tooltip"
                        title="ion-headphone"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-headphone">
                      ion-headphone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-music-note">
                      <i
                        className="ion-music-note"
                        data-bs-toggle="tooltip"
                        title="ion-music-note"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-music-note"
                    >
                      ion-music-note
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-radio-waves">
                      <i
                        className="ion-radio-waves"
                        data-bs-toggle="tooltip"
                        title="ion-radio-waves"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-radio-waves"
                    >
                      ion-radio-waves
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-speakerphone">
                      <i
                        className="ion-speakerphone"
                        data-bs-toggle="tooltip"
                        title="ion-speakerphone"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-speakerphone"
                    >
                      ion-speakerphone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-mic-a">
                      <i
                        className="ion-mic-a"
                        data-bs-toggle="tooltip"
                        title="ion-mic-a"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-mic-a">
                      ion-mic-a
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-mic-b">
                      <i
                        className="ion-mic-b"
                        data-bs-toggle="tooltip"
                        title="ion-mic-b"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-mic-b">
                      ion-mic-b
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-mic-c">
                      <i
                        className="ion-mic-c"
                        data-bs-toggle="tooltip"
                        title="ion-mic-c"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-mic-c">
                      ion-mic-c
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-volume-high">
                      <i
                        className="ion-volume-high"
                        data-bs-toggle="tooltip"
                        title="ion-volume-high"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-volume-high"
                    >
                      ion-volume-high
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-volume-medium">
                      <i
                        className="ion-volume-medium"
                        data-bs-toggle="tooltip"
                        title="ion-volume-medium"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-volume-medium"
                    >
                      ion-volume-medium
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-volume-low">
                      <i
                        className="ion-volume-low"
                        data-bs-toggle="tooltip"
                        title="ion-volume-low"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-volume-low"
                    >
                      ion-volume-low
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-volume-mute">
                      <i
                        className="ion-volume-mute"
                        data-bs-toggle="tooltip"
                        title="ion-volume-mute"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-volume-mute"
                    >
                      ion-volume-mute
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-levels">
                      <i
                        className="ion-levels"
                        data-bs-toggle="tooltip"
                        title="ion-levels"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-levels">
                      ion-levels
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-play">
                      <i
                        className="ion-play"
                        data-bs-toggle="tooltip"
                        title="ion-play"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-play">
                      ion-play
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-pause">
                      <i
                        className="ion-pause"
                        data-bs-toggle="tooltip"
                        title="ion-pause"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-pause">
                      ion-pause
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-stop">
                      <i
                        className="ion-stop"
                        data-bs-toggle="tooltip"
                        title="ion-stop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-stop">
                      ion-stop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-record">
                      <i
                        className="ion-record"
                        data-bs-toggle="tooltip"
                        title="ion-record"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-record">
                      ion-record
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-skip-forward">
                      <i
                        className="ion-skip-forward"
                        data-bs-toggle="tooltip"
                        title="ion-skip-forward"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-skip-forward"
                    >
                      ion-skip-forward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-skip-backward">
                      <i
                        className="ion-skip-backward"
                        data-bs-toggle="tooltip"
                        title="ion-skip-backward"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-skip-backward"
                    >
                      ion-skip-backward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-eject">
                      <i
                        className="ion-eject"
                        data-bs-toggle="tooltip"
                        title="ion-eject"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-eject">
                      ion-eject
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-bag">
                      <i
                        className="ion-bag"
                        data-bs-toggle="tooltip"
                        title="ion-bag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-bag">
                      ion-bag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-card">
                      <i
                        className="ion-card"
                        data-bs-toggle="tooltip"
                        title="ion-card"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-card">
                      ion-card
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-cash">
                      <i
                        className="ion-cash"
                        data-bs-toggle="tooltip"
                        title="ion-cash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-cash">
                      ion-cash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-pricetag">
                      <i
                        className="ion-pricetag"
                        data-bs-toggle="tooltip"
                        title="ion-pricetag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-pricetag">
                      ion-pricetag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-pricetags">
                      <i
                        className="ion-pricetags"
                        data-bs-toggle="tooltip"
                        title="ion-pricetags"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-pricetags">
                      ion-pricetags
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-thumbsup">
                      <i
                        className="ion-thumbsup"
                        data-bs-toggle="tooltip"
                        title="ion-thumbsup"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-thumbsup">
                      ion-thumbsup
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-thumbsdown">
                      <i
                        className="ion-thumbsdown"
                        data-bs-toggle="tooltip"
                        title="ion-thumbsdown"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-thumbsdown"
                    >
                      ion-thumbsdown
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-happy">
                      <i
                        className="ion-happy"
                        data-bs-toggle="tooltip"
                        title="ion-happy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-happy">
                      ion-happy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-sad">
                      <i
                        className="ion-sad"
                        data-bs-toggle="tooltip"
                        title="ion-sad"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-sad">
                      ion-sad
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-trophy">
                      <i
                        className="ion-trophy"
                        data-bs-toggle="tooltip"
                        title="ion-trophy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-trophy">
                      ion-trophy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-podium">
                      <i
                        className="ion-podium"
                        data-bs-toggle="tooltip"
                        title="ion-podium"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-podium">
                      ion-podium
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ribbon-a">
                      <i
                        className="ion-ribbon-a"
                        data-bs-toggle="tooltip"
                        title="ion-ribbon-a"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-ribbon-a">
                      ion-ribbon-a
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ribbon-b">
                      <i
                        className="ion-ribbon-b"
                        data-bs-toggle="tooltip"
                        title="ion-ribbon-b"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-ribbon-b">
                      ion-ribbon-b
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-university">
                      <i
                        className="ion-university"
                        data-bs-toggle="tooltip"
                        title="ion-university"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-university"
                    >
                      ion-university
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-magnet">
                      <i
                        className="ion-magnet"
                        data-bs-toggle="tooltip"
                        title="ion-magnet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-magnet">
                      ion-magnet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-beaker">
                      <i
                        className="ion-beaker"
                        data-bs-toggle="tooltip"
                        title="ion-beaker"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-beaker">
                      ion-beaker
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-flask">
                      <i
                        className="ion-flask"
                        data-bs-toggle="tooltip"
                        title="ion-flask"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-flask">
                      ion-flask
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-egg">
                      <i
                        className="ion-egg"
                        data-bs-toggle="tooltip"
                        title="ion-egg"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-egg">
                      ion-egg
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-earth">
                      <i
                        className="ion-earth"
                        data-bs-toggle="tooltip"
                        title="ion-earth"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-earth">
                      ion-earth
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-planet">
                      <i
                        className="ion-planet"
                        data-bs-toggle="tooltip"
                        title="ion-planet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-planet">
                      ion-planet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-lightbulb">
                      <i
                        className="ion-lightbulb"
                        data-bs-toggle="tooltip"
                        title="ion-lightbulb"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-lightbulb">
                      ion-lightbulb
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-cube">
                      <i
                        className="ion-cube"
                        data-bs-toggle="tooltip"
                        title="ion-cube"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-cube">
                      ion-cube
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-leaf">
                      <i
                        className="ion-leaf"
                        data-bs-toggle="tooltip"
                        title="ion-leaf"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-leaf">
                      ion-leaf
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-waterdrop">
                      <i
                        className="ion-waterdrop"
                        data-bs-toggle="tooltip"
                        title="ion-waterdrop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-waterdrop">
                      ion-waterdrop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-flame">
                      <i
                        className="ion-flame"
                        data-bs-toggle="tooltip"
                        title="ion-flame"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-flame">
                      ion-flame
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-fireball">
                      <i
                        className="ion-fireball"
                        data-bs-toggle="tooltip"
                        title="ion-fireball"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-fireball">
                      ion-fireball
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-bonfire">
                      <i
                        className="ion-bonfire"
                        data-bs-toggle="tooltip"
                        title="ion-bonfire"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-bonfire">
                      ion-bonfire
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-umbrella">
                      <i
                        className="ion-umbrella"
                        data-bs-toggle="tooltip"
                        title="ion-umbrella"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-umbrella">
                      ion-umbrella
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-nuclear">
                      <i
                        className="ion-nuclear"
                        data-bs-toggle="tooltip"
                        title="ion-nuclear"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-nuclear">
                      ion-nuclear
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-no-smoking">
                      <i
                        className="ion-no-smoking"
                        data-bs-toggle="tooltip"
                        title="ion-no-smoking"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-no-smoking"
                    >
                      ion-no-smoking
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-thermometer">
                      <i
                        className="ion-thermometer"
                        data-bs-toggle="tooltip"
                        title="ion-thermometer"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-thermometer"
                    >
                      ion-thermometer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-speedometer">
                      <i
                        className="ion-speedometer"
                        data-bs-toggle="tooltip"
                        title="ion-speedometer"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-speedometer"
                    >
                      ion-speedometer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-plane">
                      <i
                        className="ion-plane"
                        data-bs-toggle="tooltip"
                        title="ion-plane"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-plane">
                      ion-plane
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-jet">
                      <i
                        className="ion-jet"
                        data-bs-toggle="tooltip"
                        title="ion-jet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-jet">
                      ion-jet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-load-a">
                      <i
                        className="ion-load-a"
                        data-bs-toggle="tooltip"
                        title="ion-load-a"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-load-a">
                      ion-load-a
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-load-b">
                      <i
                        className="ion-load-b"
                        data-bs-toggle="tooltip"
                        title="ion-load-b"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-load-b">
                      ion-load-b
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-load-c">
                      <i
                        className="ion-load-c"
                        data-bs-toggle="tooltip"
                        title="ion-load-c"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-load-c">
                      ion-load-c
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-load-d">
                      <i
                        className="ion-load-d"
                        data-bs-toggle="tooltip"
                        title="ion-load-d"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-load-d">
                      ion-load-d
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-ionic-outline">
                      <i
                        className="ion-ios7-ionic-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-ionic-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-ionic-outline"
                    >
                      ion-ios7-ionic-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-arrow-back">
                      <i
                        className="ion-ios7-arrow-back"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-arrow-back"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-arrow-back"
                    >
                      ion-ios7-arrow-back
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-arrow-forward">
                      <i
                        className="ion-ios7-arrow-forward"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-arrow-forward"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-arrow-forward"
                    >
                      ion-ios7-arrow-forward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-arrow-up">
                      <i
                        className="ion-ios7-arrow-up"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-arrow-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-arrow-up"
                    >
                      ion-ios7-arrow-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-arrow-right">
                      <i
                        className="ion-ios7-arrow-right"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-arrow-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-arrow-right"
                    >
                      ion-ios7-arrow-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-arrow-down">
                      <i
                        className="ion-ios7-arrow-down"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-arrow-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-arrow-down"
                    >
                      ion-ios7-arrow-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-arrow-left">
                      <i
                        className="ion-ios7-arrow-left"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-arrow-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-arrow-left"
                    >
                      ion-ios7-arrow-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-arrow-thin-up">
                      <i
                        className="ion-ios7-arrow-thin-up"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-arrow-thin-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-arrow-thin-up"
                    >
                      ion-ios7-arrow-thin-up
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-arrow-thin-right"
                    >
                      <i
                        className="ion-ios7-arrow-thin-right"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-arrow-thin-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-arrow-thin-right"
                    >
                      ion-ios7-arrow-thin-right
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-arrow-thin-down"
                    >
                      <i
                        className="ion-ios7-arrow-thin-down"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-arrow-thin-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-arrow-thin-down"
                    >
                      ion-ios7-arrow-thin-down
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-arrow-thin-left"
                    >
                      <i
                        className="ion-ios7-arrow-thin-left"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-arrow-thin-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-arrow-thin-left"
                    >
                      ion-ios7-arrow-thin-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-circle-filled">
                      <i
                        className="ion-ios7-circle-filled"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-circle-filled"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-circle-filled"
                    >
                      ion-ios7-circle-filled
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-circle-outline"
                    >
                      <i
                        className="ion-ios7-circle-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-circle-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-circle-outline"
                    >
                      ion-ios7-circle-outline
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-checkmark-empty"
                    >
                      <i
                        className="ion-ios7-checkmark-empty"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-checkmark-empty"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-checkmark-empty"
                    >
                      ion-ios7-checkmark-empty
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-checkmark-outline"
                    >
                      <i
                        className="ion-ios7-checkmark-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-checkmark-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-checkmark-outline"
                    >
                      ion-ios7-checkmark-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-checkmark">
                      <i
                        className="ion-ios7-checkmark"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-checkmark"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-checkmark"
                    >
                      ion-ios7-checkmark
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-plus-empty">
                      <i
                        className="ion-ios7-plus-empty"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-plus-empty"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-plus-empty"
                    >
                      ion-ios7-plus-empty
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-plus-outline">
                      <i
                        className="ion-ios7-plus-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-plus-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-plus-outline"
                    >
                      ion-ios7-plus-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-plus">
                      <i
                        className="ion-ios7-plus"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-ios7-plus">
                      ion-ios7-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-close-empty">
                      <i
                        className="ion-ios7-close-empty"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-close-empty"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-close-empty"
                    >
                      ion-ios7-close-empty
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-close-outline">
                      <i
                        className="ion-ios7-close-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-close-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-close-outline"
                    >
                      ion-ios7-close-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-close">
                      <i
                        className="ion-ios7-close"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-close"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-close"
                    >
                      ion-ios7-close
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-minus-empty">
                      <i
                        className="ion-ios7-minus-empty"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-minus-empty"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-minus-empty"
                    >
                      ion-ios7-minus-empty
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-minus-outline">
                      <i
                        className="ion-ios7-minus-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-minus-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-minus-outline"
                    >
                      ion-ios7-minus-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-minus">
                      <i
                        className="ion-ios7-minus"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-minus"
                    >
                      ion-ios7-minus
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-information-empty"
                    >
                      <i
                        className="ion-ios7-information-empty"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-information-empty"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-information-empty"
                    >
                      ion-ios7-information-empty
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-information-outline"
                    >
                      <i
                        className="ion-ios7-information-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-information-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-information-outline"
                    >
                      ion-ios7-information-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-information">
                      <i
                        className="ion-ios7-information"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-information"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-information"
                    >
                      ion-ios7-information
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-help-empty">
                      <i
                        className="ion-ios7-help-empty"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-help-empty"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-help-empty"
                    >
                      ion-ios7-help-empty
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-help-outline">
                      <i
                        className="ion-ios7-help-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-help-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-help-outline"
                    >
                      ion-ios7-help-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-help">
                      <i
                        className="ion-ios7-help"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-help"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-ios7-help">
                      ion-ios7-help
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-search">
                      <i
                        className="ion-ios7-search"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-search"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-search"
                    >
                      ion-ios7-search
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-search-strong">
                      <i
                        className="ion-ios7-search-strong"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-search-strong"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-search-strong"
                    >
                      ion-ios7-search-strong
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-star">
                      <i
                        className="ion-ios7-star"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-star"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-ios7-star">
                      ion-ios7-star
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-star-half">
                      <i
                        className="ion-ios7-star-half"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-star-half"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-star-half"
                    >
                      ion-ios7-star-half
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-star-outline">
                      <i
                        className="ion-ios7-star-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-star-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-star-outline"
                    >
                      ion-ios7-star-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-heart">
                      <i
                        className="ion-ios7-heart"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-heart"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-heart"
                    >
                      ion-ios7-heart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-heart-outline">
                      <i
                        className="ion-ios7-heart-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-heart-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-heart-outline"
                    >
                      ion-ios7-heart-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-more">
                      <i
                        className="ion-ios7-more"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-more"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-ios7-more">
                      ion-ios7-more
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-more-outline">
                      <i
                        className="ion-ios7-more-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-more-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-more-outline"
                    >
                      ion-ios7-more-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-home">
                      <i
                        className="ion-ios7-home"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-home"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-ios7-home">
                      ion-ios7-home
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-home-outline">
                      <i
                        className="ion-ios7-home-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-home-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-home-outline"
                    >
                      ion-ios7-home-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-cloud">
                      <i
                        className="ion-ios7-cloud"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-cloud"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-cloud"
                    >
                      ion-ios7-cloud
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-cloud-outline">
                      <i
                        className="ion-ios7-cloud-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-cloud-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-cloud-outline"
                    >
                      ion-ios7-cloud-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-cloud-upload">
                      <i
                        className="ion-ios7-cloud-upload"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-cloud-upload"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-cloud-upload"
                    >
                      ion-ios7-cloud-upload
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-cloud-upload-outline"
                    >
                      <i
                        className="ion-ios7-cloud-upload-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-cloud-upload-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-cloud-upload-outline"
                    >
                      ion-ios7-cloud-upload-outline
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-cloud-download"
                    >
                      <i
                        className="ion-ios7-cloud-download"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-cloud-download"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-cloud-download"
                    >
                      ion-ios7-cloud-download
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-cloud-download-outline"
                    >
                      <i
                        className="ion-ios7-cloud-download-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-cloud-download-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-cloud-download-outline"
                    >
                      ion-ios7-cloud-download-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-upload">
                      <i
                        className="ion-ios7-upload"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-upload"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-upload"
                    >
                      ion-ios7-upload
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-upload-outline"
                    >
                      <i
                        className="ion-ios7-upload-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-upload-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-upload-outline"
                    >
                      ion-ios7-upload-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-download">
                      <i
                        className="ion-ios7-download"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-download"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-download"
                    >
                      ion-ios7-download
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-refresh">
                      <i
                        className="ion-ios7-refresh"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-refresh"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-refresh"
                    >
                      ion-ios7-refresh
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-refresh-outline"
                    >
                      <i
                        className="ion-ios7-refresh-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-refresh-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-refresh-outline"
                    >
                      ion-ios7-refresh-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-refresh-empty">
                      <i
                        className="ion-ios7-refresh-empty"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-refresh-empty"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-refresh-empty"
                    >
                      ion-ios7-refresh-empty
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-reload">
                      <i
                        className="ion-ios7-reload"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-reload"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-reload"
                    >
                      ion-ios7-reload
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-loop-strong">
                      <i
                        className="ion-ios7-loop-strong"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-loop-strong"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-loop-strong"
                    >
                      ion-ios7-loop-strong
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-loop">
                      <i
                        className="ion-ios7-loop"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-loop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ion-ios7-loop">
                      ion-ios7-loop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ion-ios7-bookmarks">
                      <i
                        className="ion-ios7-bookmarks"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-bookmarks"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-bookmarks"
                    >
                      ion-ios7-bookmarks
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="ion-ios7-bookmarks-outline"
                    >
                      <i
                        className="ion-ios7-bookmarks-outline"
                        data-bs-toggle="tooltip"
                        title="ion-ios7-bookmarks-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ion-ios7-bookmarks-outline"
                    >
                      ion-ios7-bookmarks-outline
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

IonicIcons.propTypes = {};

IonicIcons.defaultProps = {};

export default IonicIcons;
