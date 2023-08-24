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

const ThemifyIcons = () => (
  <div>
    <PageHeaders
      title="Themify Icons"
      home="Home"
      name="Icons"
      fonticonsname="Themify Icons"
    />
    <Row>
      <Col md={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Themify Icons</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="12" sm="12" className="mb-4">
                <p className="mb-2">
                  Simply beautiful open source icons. For more info{" "}
                  <a href="https://themify.me/themify-icons" target="_blank" className="text-primary">
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="ti-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col sm={12} lg={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item" id="ti-arrow-up">
                      <i
                        className="ti-arrow-up"
                        data-bs-toggle="tooltip"
                        title="ti-arrow-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-arrow-up">
                      ti-arrow-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-arrow-right">
                      <i
                        className="ti-arrow-right"
                        data-bs-toggle="tooltip"
                        title="ti-arrow-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-arrow-right"
                    >
                      ti-arrow-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-arrow-left">
                      <i
                        className="ti-arrow-left"
                        data-bs-toggle="tooltip"
                        title="ti-arrow-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-arrow-left">
                      ti-arrow-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-arrow-down">
                      <i
                        className="ti-arrow-down"
                        data-bs-toggle="tooltip"
                        title="ti-arrow-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-arrow-down">
                      ti-arrow-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-arrows-vertical">
                      <i
                        className="ti-arrows-vertical"
                        data-bs-toggle="tooltip"
                        title="ti-arrows-vertical"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-arrows-vertical"
                    >
                      ti-arrows-vertical
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-arrows-horizontal">
                      <i
                        className="ti-arrows-horizontal"
                        data-bs-toggle="tooltip"
                        title="ti-arrows-horizontal"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-arrows-horizontal"
                    >
                      ti-arrows-horizontal
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-angle-up">
                      <i
                        className="ti-angle-up"
                        data-bs-toggle="tooltip"
                        title="ti-angle-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-angle-up">
                      ti-angle-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-angle-right">
                      <i
                        className="ti-angle-right"
                        data-bs-toggle="tooltip"
                        title="ti-angle-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-angle-right"
                    >
                      ti-angle-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-angle-left">
                      <i
                        className="ti-angle-left"
                        data-bs-toggle="tooltip"
                        title="ti-angle-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-angle-left">
                      ti-angle-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-angle-down">
                      <i
                        className="ti-angle-down"
                        data-bs-toggle="tooltip"
                        title="ti-angle-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-angle-down">
                      ti-angle-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-angle-double-up">
                      <i
                        className="ti-angle-double-up"
                        data-bs-toggle="tooltip"
                        title="ti-angle-double-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-angle-double-up"
                    >
                      ti-angle-double-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-angle-double-right">
                      <i
                        className="ti-angle-double-right"
                        data-bs-toggle="tooltip"
                        title="ti-angle-double-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-angle-double-right"
                    >
                      ti-angle-double-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-angle-double-left">
                      <i
                        className="ti-angle-double-left"
                        data-bs-toggle="tooltip"
                        title="ti-angle-double-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-angle-double-left"
                    >
                      ti-angle-double-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-angle-double-down">
                      <i
                        className="ti-angle-double-down"
                        data-bs-toggle="tooltip"
                        title="ti-angle-double-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-angle-double-down"
                    >
                      ti-angle-double-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-move">
                      <i
                        className="ti-move"
                        data-bs-toggle="tooltip"
                        title="ti-move"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-move">
                      ti-move
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-fullscreen">
                      <i
                        className="ti-fullscreen"
                        data-bs-toggle="tooltip"
                        title="ti-fullscreen"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-fullscreen">
                      ti-fullscreen
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-arrow-top-right">
                      <i
                        className="ti-arrow-top-right"
                        data-bs-toggle="tooltip"
                        title="ti-arrow-top-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-arrow-top-right"
                    >
                      ti-arrow-top-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-arrow-top-left">
                      <i
                        className="ti-arrow-top-left"
                        data-bs-toggle="tooltip"
                        title="ti-arrow-top-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-arrow-top-left"
                    >
                      ti-arrow-top-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-arrow-circle-up">
                      <i
                        className="ti-arrow-circle-up"
                        data-bs-toggle="tooltip"
                        title="ti-arrow-circle-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-arrow-circle-up"
                    >
                      ti-arrow-circle-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-arrow-circle-right">
                      <i
                        className="ti-arrow-circle-right"
                        data-bs-toggle="tooltip"
                        title="ti-arrow-circle-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-arrow-circle-right"
                    >
                      ti-arrow-circle-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-arrow-circle-left">
                      <i
                        className="ti-arrow-circle-left"
                        data-bs-toggle="tooltip"
                        title="ti-arrow-circle-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-arrow-circle-left"
                    >
                      ti-arrow-circle-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-arrow-circle-down">
                      <i
                        className="ti-arrow-circle-down"
                        data-bs-toggle="tooltip"
                        title="ti-arrow-circle-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-arrow-circle-down"
                    >
                      ti-arrow-circle-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-arrows-corner">
                      <i
                        className="ti-arrows-corner"
                        data-bs-toggle="tooltip"
                        title="ti-arrows-corner"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-arrows-corner"
                    >
                      ti-arrows-corner
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-split-v">
                      <i
                        className="ti-split-v"
                        data-bs-toggle="tooltip"
                        title="ti-split-v"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-split-v">
                      ti-split-v
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-split-v-alt">
                      <i
                        className="ti-split-v-alt"
                        data-bs-toggle="tooltip"
                        title="ti-split-v-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-split-v-alt"
                    >
                      ti-split-v-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-split-h">
                      <i
                        className="ti-split-h"
                        data-bs-toggle="tooltip"
                        title="ti-split-h"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-split-h">
                      ti-split-h
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-hand-point-up">
                      <i
                        className="ti-hand-point-up"
                        data-bs-toggle="tooltip"
                        title="ti-hand-point-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-hand-point-up"
                    >
                      ti-hand-point-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-hand-point-right">
                      <i
                        className="ti-hand-point-right"
                        data-bs-toggle="tooltip"
                        title="ti-hand-point-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-hand-point-right"
                    >
                      ti-hand-point-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-hand-point-left">
                      <i
                        className="ti-hand-point-left"
                        data-bs-toggle="tooltip"
                        title="ti-hand-point-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-hand-point-left"
                    >
                      ti-hand-point-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-hand-point-down">
                      <i
                        className="ti-hand-point-down"
                        data-bs-toggle="tooltip"
                        title="ti-hand-point-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-hand-point-down"
                    >
                      ti-hand-point-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-back-right">
                      <i
                        className="ti-back-right"
                        data-bs-toggle="tooltip"
                        title="ti-back-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-back-right">
                      ti-back-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-back-left">
                      <i
                        className="ti-back-left"
                        data-bs-toggle="tooltip"
                        title="ti-back-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-back-left">
                      ti-back-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-exchange-vertical">
                      <i
                        className="ti-exchange-vertical"
                        data-bs-toggle="tooltip"
                        title="ti-exchange-vertical"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-exchange-vertical"
                    >
                      ti-exchange-vertical
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-wand">
                      <i
                        className="ti-wand"
                        data-bs-toggle="tooltip"
                        title="ti-wand"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-wand">
                      ti-wand
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-save">
                      <i
                        className="ti-save"
                        data-bs-toggle="tooltip"
                        title="ti-save"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-save">
                      ti-save
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-save-alt">
                      <i
                        className="ti-save-alt"
                        data-bs-toggle="tooltip"
                        title="ti-save-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-save-alt">
                      ti-save-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-direction">
                      <i
                        className="ti-direction"
                        data-bs-toggle="tooltip"
                        title="ti-direction"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-direction">
                      ti-direction
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-direction-alt">
                      <i
                        className="ti-direction-alt"
                        data-bs-toggle="tooltip"
                        title="ti-direction-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-direction-alt"
                    >
                      ti-direction-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-user">
                      <i
                        className="ti-user"
                        data-bs-toggle="tooltip"
                        title="ti-user"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-user">
                      ti-user
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-link">
                      <i
                        className="ti-link"
                        data-bs-toggle="tooltip"
                        title="ti-link"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-link">
                      ti-link
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-unlink">
                      <i
                        className="ti-unlink"
                        data-bs-toggle="tooltip"
                        title="ti-unlink"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-unlink">
                      ti-unlink
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-trash">
                      <i
                        className="ti-trash"
                        data-bs-toggle="tooltip"
                        title="ti-trash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-trash">
                      ti-trash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-target">
                      <i
                        className="ti-target"
                        data-bs-toggle="tooltip"
                        title="ti-target"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-target">
                      ti-target
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-tag">
                      <i
                        className="ti-tag"
                        data-bs-toggle="tooltip"
                        title="ti-tag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-tag">
                      ti-tag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-desktop">
                      <i
                        className="ti-desktop"
                        data-bs-toggle="tooltip"
                        title="ti-desktop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-desktop">
                      ti-desktop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-tablet">
                      <i
                        className="ti-tablet"
                        data-bs-toggle="tooltip"
                        title="ti-tablet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-tablet">
                      ti-tablet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-mobile">
                      <i
                        className="ti-mobile"
                        data-bs-toggle="tooltip"
                        title="ti-mobile"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-mobile">
                      ti-mobile
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-email">
                      <i
                        className="ti-email"
                        data-bs-toggle="tooltip"
                        title="ti-email"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-email">
                      ti-email
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-star">
                      <i
                        className="ti-star"
                        data-bs-toggle="tooltip"
                        title="ti-star"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-star">
                      ti-star
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-spray">
                      <i
                        className="ti-spray"
                        data-bs-toggle="tooltip"
                        title="ti-spray"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-spray">
                      ti-spray
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-signal">
                      <i
                        className="ti-signal"
                        data-bs-toggle="tooltip"
                        title="ti-signal"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-signal">
                      ti-signal
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-shopping-cart">
                      <i
                        className="ti-shopping-cart"
                        data-bs-toggle="tooltip"
                        title="ti-shopping-cart"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-shopping-cart"
                    >
                      ti-shopping-cart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-shopping-cart-full">
                      <i
                        className="ti-shopping-cart-full"
                        data-bs-toggle="tooltip"
                        title="ti-shopping-cart-full"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-shopping-cart-full"
                    >
                      ti-shopping-cart-full
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-settings">
                      <i
                        className="ti-settings"
                        data-bs-toggle="tooltip"
                        title="ti-settings"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-settings">
                      ti-settings
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-search">
                      <i
                        className="ti-search"
                        data-bs-toggle="tooltip"
                        title="ti-search"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-search">
                      ti-search
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-zoom-in">
                      <i
                        className="ti-zoom-in"
                        data-bs-toggle="tooltip"
                        title="ti-zoom-in"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-zoom-in">
                      ti-zoom-in
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-zoom-out">
                      <i
                        className="ti-zoom-out"
                        data-bs-toggle="tooltip"
                        title="ti-zoom-out"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-zoom-out">
                      ti-zoom-out
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-cut">
                      <i
                        className="ti-cut"
                        data-bs-toggle="tooltip"
                        title="ti-cut"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-cut">
                      ti-cut
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-ruler">
                      <i
                        className="ti-ruler"
                        data-bs-toggle="tooltip"
                        title="ti-ruler"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-ruler">
                      ti-ruler
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-ruler-alt-2">
                      <i
                        className="ti-ruler-alt-2"
                        data-bs-toggle="tooltip"
                        title="ti-ruler-alt-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-ruler-alt-2"
                    >
                      ti-ruler-alt-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-ruler-pencil">
                      <i
                        className="ti-ruler-pencil"
                        data-bs-toggle="tooltip"
                        title="ti-ruler-pencil"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-ruler-pencil"
                    >
                      ti-ruler-pencil
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-ruler-alt">
                      <i
                        className="ti-ruler-alt"
                        data-bs-toggle="tooltip"
                        title="ti-ruler-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-ruler-alt">
                      ti-ruler-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-bookmark">
                      <i
                        className="ti-bookmark"
                        data-bs-toggle="tooltip"
                        title="ti-bookmark"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-bookmark">
                      ti-bookmark
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-bookmark-alt">
                      <i
                        className="ti-bookmark-alt"
                        data-bs-toggle="tooltip"
                        title="ti-bookmark-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-bookmark-alt"
                    >
                      ti-bookmark-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-reload">
                      <i
                        className="ti-reload"
                        data-bs-toggle="tooltip"
                        title="ti-reload"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-reload">
                      ti-reload
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-plus">
                      <i
                        className="ti-plus"
                        data-bs-toggle="tooltip"
                        title="ti-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-plus">
                      ti-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-minus">
                      <i
                        className="ti-minus"
                        data-bs-toggle="tooltip"
                        title="ti-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-minus">
                      ti-minus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-close">
                      <i
                        className="ti-close"
                        data-bs-toggle="tooltip"
                        title="ti-close"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-close">
                      ti-close
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-pin">
                      <i
                        className="ti-pin"
                        data-bs-toggle="tooltip"
                        title="ti-pin"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-pin">
                      ti-pin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-pencil">
                      <i
                        className="ti-pencil"
                        data-bs-toggle="tooltip"
                        title="ti-pencil"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-pencil">
                      ti-pencil
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-pencil-alt">
                      <i
                        className="ti-pencil-alt"
                        data-bs-toggle="tooltip"
                        title="ti-pencil-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-pencil-alt">
                      ti-pencil-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-paint-roller">
                      <i
                        className="ti-paint-roller"
                        data-bs-toggle="tooltip"
                        title="ti-paint-roller"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-paint-roller"
                    >
                      ti-paint-roller
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-paint-bucket">
                      <i
                        className="ti-paint-bucket"
                        data-bs-toggle="tooltip"
                        title="ti-paint-bucket"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-paint-bucket"
                    >
                      ti-paint-bucket
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-na">
                      <i
                        className="ti-na"
                        data-bs-toggle="tooltip"
                        title="ti-na"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-na">
                      ti-na
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-medall">
                      <i
                        className="ti-medall"
                        data-bs-toggle="tooltip"
                        title="ti-medall"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-medall">
                      ti-medall
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-medall-alt">
                      <i
                        className="ti-medall-alt"
                        data-bs-toggle="tooltip"
                        title="ti-medall-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-medall-alt">
                      ti-medall-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-marker">
                      <i
                        className="ti-marker"
                        data-bs-toggle="tooltip"
                        title="ti-marker"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-marker">
                      ti-marker
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-marker-alt">
                      <i
                        className="ti-marker-alt"
                        data-bs-toggle="tooltip"
                        title="ti-marker-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-marker-alt">
                      ti-marker-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-lock">
                      <i
                        className="ti-lock"
                        data-bs-toggle="tooltip"
                        title="ti-lock"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-lock">
                      ti-lock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-unlock">
                      <i
                        className="ti-unlock"
                        data-bs-toggle="tooltip"
                        title="ti-unlock"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-unlock">
                      ti-unlock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-location-arrow">
                      <i
                        className="ti-location-arrow"
                        data-bs-toggle="tooltip"
                        title="ti-location-arrow"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-location-arrow"
                    >
                      ti-location-arrow
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-layout">
                      <i
                        className="ti-layout"
                        data-bs-toggle="tooltip"
                        title="ti-layout"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-layout">
                      ti-layout
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-layers">
                      <i
                        className="ti-layers"
                        data-bs-toggle="tooltip"
                        title="ti-layers"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-layers">
                      ti-layers
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-layers-alt">
                      <i
                        className="ti-layers-alt"
                        data-bs-toggle="tooltip"
                        title="ti-layers-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-layers-alt">
                      ti-layers-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-key">
                      <i
                        className="ti-key"
                        data-bs-toggle="tooltip"
                        title="ti-key"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-key">
                      ti-key
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-image">
                      <i
                        className="ti-image"
                        data-bs-toggle="tooltip"
                        title="ti-image"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-image">
                      ti-image
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-heart">
                      <i
                        className="ti-heart"
                        data-bs-toggle="tooltip"
                        title="ti-heart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-heart">
                      ti-heart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-heart-broken">
                      <i
                        className="ti-heart-broken"
                        data-bs-toggle="tooltip"
                        title="ti-heart-broken"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-heart-broken"
                    >
                      ti-heart-broken
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-hand-stop">
                      <i
                        className="ti-hand-stop"
                        data-bs-toggle="tooltip"
                        title="ti-hand-stop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-hand-stop">
                      ti-hand-stop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-hand-open">
                      <i
                        className="ti-hand-open"
                        data-bs-toggle="tooltip"
                        title="ti-hand-open"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-hand-open">
                      ti-hand-open
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-hand-drag">
                      <i
                        className="ti-hand-drag"
                        data-bs-toggle="tooltip"
                        title="ti-hand-drag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-hand-drag">
                      ti-hand-drag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-flag">
                      <i
                        className="ti-flag"
                        data-bs-toggle="tooltip"
                        title="ti-flag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-flag">
                      ti-flag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-flag-alt">
                      <i
                        className="ti-flag-alt"
                        data-bs-toggle="tooltip"
                        title="ti-flag-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-flag-alt">
                      ti-flag-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-flag-alt-2">
                      <i
                        className="ti-flag-alt-2"
                        data-bs-toggle="tooltip"
                        title="ti-flag-alt-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-flag-alt-2">
                      ti-flag-alt-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-eye">
                      <i
                        className="ti-eye"
                        data-bs-toggle="tooltip"
                        title="ti-eye"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-eye">
                      ti-eye
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-import">
                      <i
                        className="ti-import"
                        data-bs-toggle="tooltip"
                        title="ti-import"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-import">
                      ti-import
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-export">
                      <i
                        className="ti-export"
                        data-bs-toggle="tooltip"
                        title="ti-export"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-export">
                      ti-export
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-cup">
                      <i
                        className="ti-cup"
                        data-bs-toggle="tooltip"
                        title="ti-cup"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-cup">
                      ti-cup
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-crown">
                      <i
                        className="ti-crown"
                        data-bs-toggle="tooltip"
                        title="ti-crown"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-crown">
                      ti-crown
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-comments">
                      <i
                        className="ti-comments"
                        data-bs-toggle="tooltip"
                        title="ti-comments"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-comments">
                      ti-comments
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-comment">
                      <i
                        className="ti-comment"
                        data-bs-toggle="tooltip"
                        title="ti-comment"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-comment">
                      ti-comment
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-comment-alt">
                      <i
                        className="ti-comment-alt"
                        data-bs-toggle="tooltip"
                        title="ti-comment-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-comment-alt"
                    >
                      ti-comment-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-thought">
                      <i
                        className="ti-thought"
                        data-bs-toggle="tooltip"
                        title="ti-thought"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-thought">
                      ti-thought
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-clip">
                      <i
                        className="ti-clip"
                        data-bs-toggle="tooltip"
                        title="ti-clip"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-clip">
                      ti-clip
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-check">
                      <i
                        className="ti-check"
                        data-bs-toggle="tooltip"
                        title="ti-check"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-check">
                      ti-check
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-check-box">
                      <i
                        className="ti-check-box"
                        data-bs-toggle="tooltip"
                        title="ti-check-box"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-check-box">
                      ti-check-box
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-camera">
                      <i
                        className="ti-camera"
                        data-bs-toggle="tooltip"
                        title="ti-camera"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-camera">
                      ti-camera
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-announcement">
                      <i
                        className="ti-announcement"
                        data-bs-toggle="tooltip"
                        title="ti-announcement"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-announcement"
                    >
                      ti-announcement
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-brush">
                      <i
                        className="ti-brush"
                        data-bs-toggle="tooltip"
                        title="ti-brush"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-brush">
                      ti-brush
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-brush-alt">
                      <i
                        className="ti-brush-alt"
                        data-bs-toggle="tooltip"
                        title="ti-brush-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-brush-alt">
                      ti-brush-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-palette">
                      <i
                        className="ti-palette"
                        data-bs-toggle="tooltip"
                        title="ti-palette"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-palette">
                      ti-palette
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-briefcase">
                      <i
                        className="ti-briefcase"
                        data-bs-toggle="tooltip"
                        title="ti-briefcase"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-briefcase">
                      ti-briefcase
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-bolt">
                      <i
                        className="ti-bolt"
                        data-bs-toggle="tooltip"
                        title="ti-bolt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-bolt">
                      ti-bolt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-bolt-alt">
                      <i
                        className="ti-bolt-alt"
                        data-bs-toggle="tooltip"
                        title="ti-bolt-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-bolt-alt">
                      ti-bolt-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-blackboard">
                      <i
                        className="ti-blackboard"
                        data-bs-toggle="tooltip"
                        title="ti-blackboard"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-blackboard">
                      ti-blackboard
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-bag">
                      <i
                        className="ti-bag"
                        data-bs-toggle="tooltip"
                        title="ti-bag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-bag">
                      ti-bag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-world">
                      <i
                        className="ti-world"
                        data-bs-toggle="tooltip"
                        title="ti-world"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-world">
                      ti-world
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-wheelchair">
                      <i
                        className="ti-wheelchair"
                        data-bs-toggle="tooltip"
                        title="ti-wheelchair"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-wheelchair">
                      ti-wheelchair
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-car">
                      <i
                        className="ti-car"
                        data-bs-toggle="tooltip"
                        title="ti-car"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-car">
                      ti-car
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-truck">
                      <i
                        className="ti-truck"
                        data-bs-toggle="tooltip"
                        title="ti-truck"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-truck">
                      ti-truck
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-timer">
                      <i
                        className="ti-timer"
                        data-bs-toggle="tooltip"
                        title="ti-timer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-timer">
                      ti-timer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-ticket">
                      <i
                        className="ti-ticket"
                        data-bs-toggle="tooltip"
                        title="ti-ticket"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-ticket">
                      ti-ticket
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-thumb-up">
                      <i
                        className="ti-thumb-up"
                        data-bs-toggle="tooltip"
                        title="ti-thumb-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-thumb-up">
                      ti-thumb-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-thumb-down">
                      <i
                        className="ti-thumb-down"
                        data-bs-toggle="tooltip"
                        title="ti-thumb-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-thumb-down">
                      ti-thumb-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-stats-up">
                      <i
                        className="ti-stats-up"
                        data-bs-toggle="tooltip"
                        title="ti-stats-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-stats-up">
                      ti-stats-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-stats-down">
                      <i
                        className="ti-stats-down"
                        data-bs-toggle="tooltip"
                        title="ti-stats-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-stats-down">
                      ti-stats-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-shine">
                      <i
                        className="ti-shine"
                        data-bs-toggle="tooltip"
                        title="ti-shine"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-shine">
                      ti-shine
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-shift-right">
                      <i
                        className="ti-shift-right"
                        data-bs-toggle="tooltip"
                        title="ti-shift-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-shift-right"
                    >
                      ti-shift-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-shift-left">
                      <i
                        className="ti-shift-left"
                        data-bs-toggle="tooltip"
                        title="ti-shift-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-shift-left">
                      ti-shift-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-shift-right-alt">
                      <i
                        className="ti-shift-right-alt"
                        data-bs-toggle="tooltip"
                        title="ti-shift-right-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-shift-right-alt"
                    >
                      ti-shift-right-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-shift-left-alt">
                      <i
                        className="ti-shift-left-alt"
                        data-bs-toggle="tooltip"
                        title="ti-shift-left-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-shift-left-alt"
                    >
                      ti-shift-left-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-shield">
                      <i
                        className="ti-shield"
                        data-bs-toggle="tooltip"
                        title="ti-shield"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-shield">
                      ti-shield
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-notepad">
                      <i
                        className="ti-notepad"
                        data-bs-toggle="tooltip"
                        title="ti-notepad"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-notepad">
                      ti-notepad
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-server">
                      <i
                        className="ti-server"
                        data-bs-toggle="tooltip"
                        title="ti-server"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-server">
                      ti-server
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-pulse">
                      <i
                        className="ti-pulse"
                        data-bs-toggle="tooltip"
                        title="ti-pulse"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-pulse">
                      ti-pulse
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-printer">
                      <i
                        className="ti-printer"
                        data-bs-toggle="tooltip"
                        title="ti-printer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-printer">
                      ti-printer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-power-off">
                      <i
                        className="ti-power-off"
                        data-bs-toggle="tooltip"
                        title="ti-power-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-power-off">
                      ti-power-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-plug">
                      <i
                        className="ti-plug"
                        data-bs-toggle="tooltip"
                        title="ti-plug"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-plug">
                      ti-plug
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-pie-chart">
                      <i
                        className="ti-pie-chart"
                        data-bs-toggle="tooltip"
                        title="ti-pie-chart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-pie-chart">
                      ti-pie-chart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-panel">
                      <i
                        className="ti-panel"
                        data-bs-toggle="tooltip"
                        title="ti-panel"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-panel">
                      ti-panel
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-package">
                      <i
                        className="ti-package"
                        data-bs-toggle="tooltip"
                        title="ti-package"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-package">
                      ti-package
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-music">
                      <i
                        className="ti-music"
                        data-bs-toggle="tooltip"
                        title="ti-music"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-music">
                      ti-music
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-music-alt">
                      <i
                        className="ti-music-alt"
                        data-bs-toggle="tooltip"
                        title="ti-music-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-music-alt">
                      ti-music-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-mouse">
                      <i
                        className="ti-mouse"
                        data-bs-toggle="tooltip"
                        title="ti-mouse"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-mouse">
                      ti-mouse
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-mouse-alt">
                      <i
                        className="ti-mouse-alt"
                        data-bs-toggle="tooltip"
                        title="ti-mouse-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-mouse-alt">
                      ti-mouse-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-money">
                      <i
                        className="ti-money"
                        data-bs-toggle="tooltip"
                        title="ti-money"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-money">
                      ti-money
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-microphone">
                      <i
                        className="ti-microphone"
                        data-bs-toggle="tooltip"
                        title="ti-microphone"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-microphone">
                      ti-microphone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-menu">
                      <i
                        className="ti-menu"
                        data-bs-toggle="tooltip"
                        title="ti-menu"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-menu">
                      ti-menu
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-menu-alt">
                      <i
                        className="ti-menu-alt"
                        data-bs-toggle="tooltip"
                        title="ti-menu-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-menu-alt">
                      ti-menu-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-map">
                      <i
                        className="ti-map"
                        data-bs-toggle="tooltip"
                        title="ti-map"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-map">
                      ti-map
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-map-alt">
                      <i
                        className="ti-map-alt"
                        data-bs-toggle="tooltip"
                        title="ti-map-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-map-alt">
                      ti-map-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-location-pin">
                      <i
                        className="ti-location-pin"
                        data-bs-toggle="tooltip"
                        title="ti-location-pin"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-location-pin"
                    >
                      ti-location-pin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-light-bulb">
                      <i
                        className="ti-light-bulb"
                        data-bs-toggle="tooltip"
                        title="ti-light-bulb"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-light-bulb">
                      ti-light-bulb
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-info">
                      <i
                        className="ti-info"
                        data-bs-toggle="tooltip"
                        title="ti-info"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-info">
                      ti-info
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-infinite">
                      <i
                        className="ti-infinite"
                        data-bs-toggle="tooltip"
                        title="ti-infinite"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-infinite">
                      ti-infinite
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-id-badge">
                      <i
                        className="ti-id-badge"
                        data-bs-toggle="tooltip"
                        title="ti-id-badge"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-id-badge">
                      ti-id-badge
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-hummer">
                      <i
                        className="ti-hummer"
                        data-bs-toggle="tooltip"
                        title="ti-hummer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-hummer">
                      ti-hummer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-home">
                      <i
                        className="ti-home"
                        data-bs-toggle="tooltip"
                        title="ti-home"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-home">
                      ti-home
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-help">
                      <i
                        className="ti-help"
                        data-bs-toggle="tooltip"
                        title="ti-help"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-help">
                      ti-help
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-headphone">
                      <i
                        className="ti-headphone"
                        data-bs-toggle="tooltip"
                        title="ti-headphone"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-headphone">
                      ti-headphone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-harddrives">
                      <i
                        className="ti-harddrives"
                        data-bs-toggle="tooltip"
                        title="ti-harddrives"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-harddrives">
                      ti-harddrives
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-harddrive">
                      <i
                        className="ti-harddrive"
                        data-bs-toggle="tooltip"
                        title="ti-harddrive"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-harddrive">
                      ti-harddrive
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-gift">
                      <i
                        className="ti-gift"
                        data-bs-toggle="tooltip"
                        title="ti-gift"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-gift">
                      ti-gift
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-game">
                      <i
                        className="ti-game"
                        data-bs-toggle="tooltip"
                        title="ti-game"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-game">
                      ti-game
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-filter">
                      <i
                        className="ti-filter"
                        data-bs-toggle="tooltip"
                        title="ti-filter"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-filter">
                      ti-filter
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-files">
                      <i
                        className="ti-files"
                        data-bs-toggle="tooltip"
                        title="ti-files"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-files">
                      ti-files
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-file">
                      <i
                        className="ti-file"
                        data-bs-toggle="tooltip"
                        title="ti-file"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-file">
                      ti-file
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-zip">
                      <i
                        className="ti-zip"
                        data-bs-toggle="tooltip"
                        title="ti-zip"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-zip">
                      ti-zip
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-folder">
                      <i
                        className="ti-folder"
                        data-bs-toggle="tooltip"
                        title="ti-folder"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-folder">
                      ti-folder
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-envelope">
                      <i
                        className="ti-envelope"
                        data-bs-toggle="tooltip"
                        title="ti-envelope"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-envelope">
                      ti-envelope
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-dashboard">
                      <i
                        className="ti-dashboard"
                        data-bs-toggle="tooltip"
                        title="ti-dashboard"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-dashboard">
                      ti-dashboard
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-cloud">
                      <i
                        className="ti-cloud"
                        data-bs-toggle="tooltip"
                        title="ti-cloud"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-cloud">
                      ti-cloud
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-cloud-up">
                      <i
                        className="ti-cloud-up"
                        data-bs-toggle="tooltip"
                        title="ti-cloud-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-cloud-up">
                      ti-cloud-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-cloud-down">
                      <i
                        className="ti-cloud-down"
                        data-bs-toggle="tooltip"
                        title="ti-cloud-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-cloud-down">
                      ti-cloud-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-clipboard">
                      <i
                        className="ti-clipboard"
                        data-bs-toggle="tooltip"
                        title="ti-clipboard"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-clipboard">
                      ti-clipboard
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-calendar">
                      <i
                        className="ti-calendar"
                        data-bs-toggle="tooltip"
                        title="ti-calendar"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-calendar">
                      ti-calendar
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-book">
                      <i
                        className="ti-book"
                        data-bs-toggle="tooltip"
                        title="ti-book"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-book">
                      ti-book
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-bell">
                      <i
                        className="ti-bell"
                        data-bs-toggle="tooltip"
                        title="ti-bell"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-bell">
                      ti-bell
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-basketball">
                      <i
                        className="ti-basketball"
                        data-bs-toggle="tooltip"
                        title="ti-basketball"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-basketball">
                      ti-basketball
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-bar-chart">
                      <i
                        className="ti-bar-chart"
                        data-bs-toggle="tooltip"
                        title="ti-bar-chart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-bar-chart">
                      ti-bar-chart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-bar-chart-alt">
                      <i
                        className="ti-bar-chart-alt"
                        data-bs-toggle="tooltip"
                        title="ti-bar-chart-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-bar-chart-alt"
                    >
                      ti-bar-chart-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-archive">
                      <i
                        className="ti-archive"
                        data-bs-toggle="tooltip"
                        title="ti-archive"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-archive">
                      ti-archive
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-anchor">
                      <i
                        className="ti-anchor"
                        data-bs-toggle="tooltip"
                        title="ti-anchor"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-anchor">
                      ti-anchor
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-alert">
                      <i
                        className="ti-alert"
                        data-bs-toggle="tooltip"
                        title="ti-alert"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-alert">
                      ti-alert
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-alarm-clock">
                      <i
                        className="ti-alarm-clock"
                        data-bs-toggle="tooltip"
                        title="ti-alarm-clock"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-alarm-clock"
                    >
                      ti-alarm-clock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-agenda">
                      <i
                        className="ti-agenda"
                        data-bs-toggle="tooltip"
                        title="ti-agenda"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-agenda">
                      ti-agenda
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-write">
                      <i
                        className="ti-write"
                        data-bs-toggle="tooltip"
                        title="ti-write"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-write">
                      ti-write
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-wallet">
                      <i
                        className="ti-wallet"
                        data-bs-toggle="tooltip"
                        title="ti-wallet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-wallet">
                      ti-wallet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-video-clapper">
                      <i
                        className="ti-video-clapper"
                        data-bs-toggle="tooltip"
                        title="ti-video-clapper"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-video-clapper"
                    >
                      ti-video-clapper
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-video-camera">
                      <i
                        className="ti-video-camera"
                        data-bs-toggle="tooltip"
                        title="ti-video-camera"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-video-camera"
                    >
                      ti-video-camera
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-vector">
                      <i
                        className="ti-vector"
                        data-bs-toggle="tooltip"
                        title="ti-vector"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-vector">
                      ti-vector
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-support">
                      <i
                        className="ti-support"
                        data-bs-toggle="tooltip"
                        title="ti-support"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-support">
                      ti-support
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-stamp">
                      <i
                        className="ti-stamp"
                        data-bs-toggle="tooltip"
                        title="ti-stamp"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-stamp">
                      ti-stamp
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-slice">
                      <i
                        className="ti-slice"
                        data-bs-toggle="tooltip"
                        title="ti-slice"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-slice">
                      ti-slice
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-shortcode">
                      <i
                        className="ti-shortcode"
                        data-bs-toggle="tooltip"
                        title="ti-shortcode"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-shortcode">
                      ti-shortcode
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-receipt">
                      <i
                        className="ti-receipt"
                        data-bs-toggle="tooltip"
                        title="ti-receipt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-receipt">
                      ti-receipt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-pin2">
                      <i
                        className="ti-pin2"
                        data-bs-toggle="tooltip"
                        title="ti-pin2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-pin2">
                      ti-pin2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-pin-alt">
                      <i
                        className="ti-pin-alt"
                        data-bs-toggle="tooltip"
                        title="ti-pin-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-pin-alt">
                      ti-pin-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-pencil-alt2">
                      <i
                        className="ti-pencil-alt2"
                        data-bs-toggle="tooltip"
                        title="ti-pencil-alt2"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-pencil-alt2"
                    >
                      ti-pencil-alt2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-eraser">
                      <i
                        className="ti-eraser"
                        data-bs-toggle="tooltip"
                        title="ti-eraser"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-eraser">
                      ti-eraser
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-more">
                      <i
                        className="ti-more"
                        data-bs-toggle="tooltip"
                        title="ti-more"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-more">
                      ti-more
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-more-alt">
                      <i
                        className="ti-more-alt"
                        data-bs-toggle="tooltip"
                        title="ti-more-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-more-alt">
                      ti-more-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-microphone-alt">
                      <i
                        className="ti-microphone-alt"
                        data-bs-toggle="tooltip"
                        title="ti-microphone-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-microphone-alt"
                    >
                      ti-microphone-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-magnet">
                      <i
                        className="ti-magnet"
                        data-bs-toggle="tooltip"
                        title="ti-magnet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-magnet">
                      ti-magnet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-line-double">
                      <i
                        className="ti-line-double"
                        data-bs-toggle="tooltip"
                        title="ti-line-double"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-line-double"
                    >
                      ti-line-double
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-line-dotted">
                      <i
                        className="ti-line-dotted"
                        data-bs-toggle="tooltip"
                        title="ti-line-dotted"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-line-dotted"
                    >
                      ti-line-dotted
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-line-dashed">
                      <i
                        className="ti-line-dashed"
                        data-bs-toggle="tooltip"
                        title="ti-line-dashed"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-line-dashed"
                    >
                      ti-line-dashed
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-ink-pen">
                      <i
                        className="ti-ink-pen"
                        data-bs-toggle="tooltip"
                        title="ti-ink-pen"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-ink-pen">
                      ti-ink-pen
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-info-alt">
                      <i
                        className="ti-info-alt"
                        data-bs-toggle="tooltip"
                        title="ti-info-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-info-alt">
                      ti-info-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-help-alt">
                      <i
                        className="ti-help-alt"
                        data-bs-toggle="tooltip"
                        title="ti-help-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-help-alt">
                      ti-help-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-headphone-alt">
                      <i
                        className="ti-headphone-alt"
                        data-bs-toggle="tooltip"
                        title="ti-headphone-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-headphone-alt"
                    >
                      ti-headphone-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-gallery">
                      <i
                        className="ti-gallery"
                        data-bs-toggle="tooltip"
                        title="ti-gallery"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-gallery">
                      ti-gallery
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-face-smile">
                      <i
                        className="ti-face-smile"
                        data-bs-toggle="tooltip"
                        title="ti-face-smile"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-face-smile">
                      ti-face-smile
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-face-sad">
                      <i
                        className="ti-face-sad"
                        data-bs-toggle="tooltip"
                        title="ti-face-sad"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-face-sad">
                      ti-face-sad
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-credit-card">
                      <i
                        className="ti-credit-card"
                        data-bs-toggle="tooltip"
                        title="ti-credit-card"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-credit-card"
                    >
                      ti-credit-card
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-comments-smiley">
                      <i
                        className="ti-comments-smiley"
                        data-bs-toggle="tooltip"
                        title="ti-comments-smiley"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="ti-comments-smiley"
                    >
                      ti-comments-smiley
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-time">
                      <i
                        className="ti-time"
                        data-bs-toggle="tooltip"
                        title="ti-time"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-time">
                      ti-time
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-share">
                      <i
                        className="ti-share"
                        data-bs-toggle="tooltip"
                        title="ti-share"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-share">
                      ti-share
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-share-alt">
                      <i
                        className="ti-share-alt"
                        data-bs-toggle="tooltip"
                        title="ti-share-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-share-alt">
                      ti-share-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-rocket">
                      <i
                        className="ti-rocket"
                        data-bs-toggle="tooltip"
                        title="ti-rocket"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-rocket">
                      ti-rocket
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-new-window">
                      <i
                        className="ti-new-window"
                        data-bs-toggle="tooltip"
                        title="ti-new-window"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-new-window">
                      ti-new-window
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-rss">
                      <i
                        className="ti-rss"
                        data-bs-toggle="tooltip"
                        title="ti-rss"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-rss">
                      ti-rss
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="ti-rss-alt">
                      <i
                        className="ti-rss-alt"
                        data-bs-toggle="tooltip"
                        title="ti-rss-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="ti-rss-alt">
                      ti-rss-alt
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

ThemifyIcons.propTypes = {};

ThemifyIcons.defaultProps = {};

export default ThemifyIcons;
