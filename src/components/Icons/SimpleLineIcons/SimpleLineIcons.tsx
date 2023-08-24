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

const SimpleLineIcons = () => (
  <div>
    <PageHeaders
      title="Simpleline Icons"
      home="Home"
      name="Icons"
      fonticonsname="Simpleline Icons"
    />
    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Simpleline Icons</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="12" sm="12" className=" mb-4">
                <p className="mb-2">
                  Simply beautiful open source icons. For more info{" "}
                  <a href="https://simplelineicons.github.io/" target="_blank" className="text-primary">
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="si si-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col lg="12" sm="12">
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item" id="si-user">
                      <i
                        className="si si-user"
                        data-bs-toggle="tooltip"
                        title="si-user"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-user">
                      si-user
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-people">
                      <i
                        className="si si-people"
                        data-bs-toggle="tooltip"
                        title="si-people"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-people">
                      si-people
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-user-female">
                      <i
                        className="si si-user-female"
                        data-bs-toggle="tooltip"
                        title="si-user-female"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-user-female"
                    >
                      si-user-female
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-user-follow">
                      <i
                        className="si si-user-follow"
                        data-bs-toggle="tooltip"
                        title="si-user-follow"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-user-follow"
                    >
                      si-user-follow
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-user-following">
                      <i
                        className="si si-user-following"
                        data-bs-toggle="tooltip"
                        title="si-user-following"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-user-following"
                    >
                      si-user-following
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-user-unfollow">
                      <i
                        className="si si-user-unfollow"
                        data-bs-toggle="tooltip"
                        title="si-user-unfollow"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-user-unfollow"
                    >
                      si-user-unfollow
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-login">
                      <i
                        className="si si-login"
                        data-bs-toggle="tooltip"
                        title="si-login"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-login">
                      si-login
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-logout">
                      <i
                        className="si si-logout"
                        data-bs-toggle="tooltip"
                        title="si-logout"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-logout">
                      si-logout
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-emotsmile">
                      <i
                        className="si si-emotsmile"
                        data-bs-toggle="tooltip"
                        title="si-emotsmile"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-emotsmile">
                      si-emotsmile
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-phone">
                      <i
                        className="si si-phone"
                        data-bs-toggle="tooltip"
                        title="si-phone"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-phone">
                      si-phone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-call-end">
                      <i
                        className="si si-call-end"
                        data-bs-toggle="tooltip"
                        title="si-call-end"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-call-end">
                      si-call-end
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-call-in">
                      <i
                        className="si si-call-in"
                        data-bs-toggle="tooltip"
                        title="si-call-in"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-call-in">
                      si-call-in
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-call-out">
                      <i
                        className="si si-call-out"
                        data-bs-toggle="tooltip"
                        title="si-call-out"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-call-out">
                      si-call-out
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-map">
                      <i
                        className="si si-map"
                        data-bs-toggle="tooltip"
                        title="si-map"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-map">
                      si-map
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-location-pin">
                      <i
                        className="si si-location-pin"
                        data-bs-toggle="tooltip"
                        title="si-location-pin"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-location-pin"
                    >
                      si-location-pin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-direction">
                      <i
                        className="si si-direction"
                        data-bs-toggle="tooltip"
                        title="si-direction"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-direction">
                      si-direction
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-directions">
                      <i
                        className="si si-directions"
                        data-bs-toggle="tooltip"
                        title="si-directions"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-directions">
                      si-directions
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-compass">
                      <i
                        className="si si-compass"
                        data-bs-toggle="tooltip"
                        title="si-compass"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-compass">
                      si-compass
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-layers">
                      <i
                        className="si si-layers"
                        data-bs-toggle="tooltip"
                        title="si-layers"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-layers">
                      si-layers
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-menu">
                      <i
                        className="si si-menu"
                        data-bs-toggle="tooltip"
                        title="si-menu"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-menu">
                      si-menu
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-list">
                      <i
                        className="si si-list"
                        data-bs-toggle="tooltip"
                        title="si-list"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-list">
                      si-list
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-options-vertical">
                      <i
                        className="si si-options-vertical"
                        data-bs-toggle="tooltip"
                        title="si-options-vertical"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-options-vertical"
                    >
                      si-options-vertical
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-options">
                      <i
                        className="si si-options"
                        data-bs-toggle="tooltip"
                        title="si-options"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-options">
                      si-options
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-arrow-down">
                      <i
                        className="si si-arrow-down"
                        data-bs-toggle="tooltip"
                        title="si-arrow-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-arrow-down">
                      si-arrow-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-arrow-left">
                      <i
                        className="si si-arrow-left"
                        data-bs-toggle="tooltip"
                        title="si-arrow-left"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-arrow-left">
                      si-arrow-left
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-arrow-right">
                      <i
                        className="si si-arrow-right"
                        data-bs-toggle="tooltip"
                        title="si-arrow-right"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-arrow-right"
                    >
                      si-arrow-right
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-arrow-up">
                      <i
                        className="si si-arrow-up"
                        data-bs-toggle="tooltip"
                        title="si-arrow-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-arrow-up">
                      si-arrow-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-arrow-up-circle">
                      <i
                        className="si si-arrow-up-circle"
                        data-bs-toggle="tooltip"
                        title="si-arrow-up-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-arrow-up-circle"
                    >
                      si-arrow-up-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-arrow-left-circle">
                      <i
                        className="si si-arrow-left-circle"
                        data-bs-toggle="tooltip"
                        title="si-arrow-left-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-arrow-left-circle"
                    >
                      si-arrow-left-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-arrow-right-circle">
                      <i
                        className="si si-arrow-right-circle"
                        data-bs-toggle="tooltip"
                        title="si-arrow-right-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-arrow-right-circle"
                    >
                      si-arrow-right-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-arrow-down-circle">
                      <i
                        className="si si-arrow-down-circle"
                        data-bs-toggle="tooltip"
                        title="si-arrow-down-circle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-arrow-down-circle"
                    >
                      si-arrow-down-circle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-check">
                      <i
                        className="si si-check"
                        data-bs-toggle="tooltip"
                        title="si-check"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-check">
                      si-check
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-clock">
                      <i
                        className="si si-clock"
                        data-bs-toggle="tooltip"
                        title="si-clock"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-clock">
                      si-clock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-plus">
                      <i
                        className="si si-plus"
                        data-bs-toggle="tooltip"
                        title="si-plus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-plus">
                      si-plus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-minus">
                      <i
                        className="si si-minus"
                        data-bs-toggle="tooltip"
                        title="si-minus"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-minus">
                      si-minus
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-close">
                      <i
                        className="si si-close"
                        data-bs-toggle="tooltip"
                        title="si-close"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-close">
                      si-close
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-event">
                      <i
                        className="si si-event"
                        data-bs-toggle="tooltip"
                        title="si-event"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-event">
                      si-event
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-exclamation">
                      <i
                        className="si si-exclamation"
                        data-bs-toggle="tooltip"
                        title="si-exclamation"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-exclamation"
                    >
                      si-exclamation
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-organization">
                      <i
                        className="si si-organization"
                        data-bs-toggle="tooltip"
                        title="si-organization"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-organization"
                    >
                      si-organization
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-trophy">
                      <i
                        className="si si-trophy"
                        data-bs-toggle="tooltip"
                        title="si-trophy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-trophy">
                      si-trophy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-screen-smartphone">
                      <i
                        className="si si-screen-smartphone"
                        data-bs-toggle="tooltip"
                        title="si-screen-smartphone"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-screen-smartphone"
                    >
                      si-screen-smartphone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-screen-desktop">
                      <i
                        className="si si-screen-desktop"
                        data-bs-toggle="tooltip"
                        title="si-screen-desktop"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-screen-desktop"
                    >
                      si-screen-desktop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-plane">
                      <i
                        className="si si-plane"
                        data-bs-toggle="tooltip"
                        title="si-plane"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-plane">
                      si-plane
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-notebook">
                      <i
                        className="si si-notebook"
                        data-bs-toggle="tooltip"
                        title="si-notebook"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-notebook">
                      si-notebook
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-mustache">
                      <i
                        className="si si-mustache"
                        data-bs-toggle="tooltip"
                        title="si-mustache"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-mustache">
                      si-mustache
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-mouse">
                      <i
                        className="si si-mouse"
                        data-bs-toggle="tooltip"
                        title="si-mouse"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-mouse">
                      si-mouse
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-magnet">
                      <i
                        className="si si-magnet"
                        data-bs-toggle="tooltip"
                        title="si-magnet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-magnet">
                      si-magnet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-energy">
                      <i
                        className="si si-energy"
                        data-bs-toggle="tooltip"
                        title="si-energy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-energy">
                      si-energy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-disc">
                      <i
                        className="si si-disc"
                        data-bs-toggle="tooltip"
                        title="si-disc"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-disc">
                      si-disc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-cursor">
                      <i
                        className="si si-cursor"
                        data-bs-toggle="tooltip"
                        title="si-cursor"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-cursor">
                      si-cursor
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-cursor-move">
                      <i
                        className="si si-cursor-move"
                        data-bs-toggle="tooltip"
                        title="si-cursor-move"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-cursor-move"
                    >
                      si-cursor-move
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-crop">
                      <i
                        className="si si-crop"
                        data-bs-toggle="tooltip"
                        title="si-crop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-crop">
                      si-crop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-chemistry">
                      <i
                        className="si si-chemistry"
                        data-bs-toggle="tooltip"
                        title="si-chemistry"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-chemistry">
                      si-chemistry
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-speedometer">
                      <i
                        className="si si-speedometer"
                        data-bs-toggle="tooltip"
                        title="si-speedometer"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-speedometer"
                    >
                      si-speedometer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-shield">
                      <i
                        className="si si-shield"
                        data-bs-toggle="tooltip"
                        title="si-shield"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-shield">
                      si-shield
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-screen-tablet">
                      <i
                        className="si si-screen-tablet"
                        data-bs-toggle="tooltip"
                        title="si-screen-tablet"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-screen-tablet"
                    >
                      si-screen-tablet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-magic-wand">
                      <i
                        className="si si-magic-wand"
                        data-bs-toggle="tooltip"
                        title="si-magic-wand"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-magic-wand">
                      si-magic-wand
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-hourglass">
                      <i
                        className="si si-hourglass"
                        data-bs-toggle="tooltip"
                        title="si-hourglass"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-hourglass">
                      si-hourglass
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-graduation">
                      <i
                        className="si si-graduation"
                        data-bs-toggle="tooltip"
                        title="si-graduation"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-graduation">
                      si-graduation
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-ghost">
                      <i
                        className="si si-ghost"
                        data-bs-toggle="tooltip"
                        title="si-ghost"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-ghost">
                      si-ghost
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-game-controller">
                      <i
                        className="si si-game-controller"
                        data-bs-toggle="tooltip"
                        title="si-game-controller"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-game-controller"
                    >
                      si-game-controller
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-fire">
                      <i
                        className="si si-fire"
                        data-bs-toggle="tooltip"
                        title="si-fire"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-fire">
                      si-fire
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-eyeglass">
                      <i
                        className="si si-eyeglass"
                        data-bs-toggle="tooltip"
                        title="si-eyeglass"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-eyeglass">
                      si-eyeglass
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-envelope-open">
                      <i
                        className="si si-envelope-open"
                        data-bs-toggle="tooltip"
                        title="si-envelope-open"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-envelope-open"
                    >
                      si-envelope-open
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-envelope-letter">
                      <i
                        className="si si-envelope-letter"
                        data-bs-toggle="tooltip"
                        title="si-envelope-letter"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-envelope-letter"
                    >
                      si-envelope-letter
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-bell">
                      <i
                        className="si si-bell"
                        data-bs-toggle="tooltip"
                        title="si-bell"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-bell">
                      si-bell
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-badge">
                      <i
                        className="si si-badge"
                        data-bs-toggle="tooltip"
                        title="si-badge"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-badge">
                      si-badge
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-anchor">
                      <i
                        className="si si-anchor"
                        data-bs-toggle="tooltip"
                        title="si-anchor"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-anchor">
                      si-anchor
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-wallet">
                      <i
                        className="si si-wallet"
                        data-bs-toggle="tooltip"
                        title="si-wallet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-wallet">
                      si-wallet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-vector">
                      <i
                        className="si si-vector"
                        data-bs-toggle="tooltip"
                        title="si-vector"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-vector">
                      si-vector
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-speech">
                      <i
                        className="si si-speech"
                        data-bs-toggle="tooltip"
                        title="si-speech"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-speech">
                      si-speech
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-puzzle">
                      <i
                        className="si si-puzzle"
                        data-bs-toggle="tooltip"
                        title="si-puzzle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-puzzle">
                      si-puzzle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-printer">
                      <i
                        className="si si-printer"
                        data-bs-toggle="tooltip"
                        title="si-printer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-printer">
                      si-printer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-present">
                      <i
                        className="si si-present"
                        data-bs-toggle="tooltip"
                        title="si-present"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-present">
                      si-present
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-playlist">
                      <i
                        className="si si-playlist"
                        data-bs-toggle="tooltip"
                        title="si-playlist"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-playlist">
                      si-playlist
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-pin">
                      <i
                        className="si si-pin"
                        data-bs-toggle="tooltip"
                        title="si-pin"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-pin">
                      si-pin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-picture">
                      <i
                        className="si si-picture"
                        data-bs-toggle="tooltip"
                        title="si-picture"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-picture">
                      si-picture
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-handbag">
                      <i
                        className="si si-handbag"
                        data-bs-toggle="tooltip"
                        title="si-handbag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-handbag">
                      si-handbag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-globe-alt">
                      <i
                        className="si si-globe-alt"
                        data-bs-toggle="tooltip"
                        title="si-globe-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-globe-alt">
                      si-globe-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-globe">
                      <i
                        className="si si-globe"
                        data-bs-toggle="tooltip"
                        title="si-globe"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-globe">
                      si-globe
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-folder-alt">
                      <i
                        className="si si-folder-alt"
                        data-bs-toggle="tooltip"
                        title="si-folder-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-folder-alt">
                      si-folder-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-folder">
                      <i
                        className="si si-folder"
                        data-bs-toggle="tooltip"
                        title="si-folder"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-folder">
                      si-folder
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-film">
                      <i
                        className="si si-film"
                        data-bs-toggle="tooltip"
                        title="si-film"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-film">
                      si-film
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-feed">
                      <i
                        className="si si-feed"
                        data-bs-toggle="tooltip"
                        title="si-feed"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-feed">
                      si-feed
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-drop">
                      <i
                        className="si si-drop"
                        data-bs-toggle="tooltip"
                        title="si-drop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-drop">
                      si-drop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-drawer">
                      <i
                        className="si si-drawer"
                        data-bs-toggle="tooltip"
                        title="si-drawer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-drawer">
                      si-drawer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-docs">
                      <i
                        className="si si-docs"
                        data-bs-toggle="tooltip"
                        title="si-docs"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-docs">
                      si-docs
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-doc">
                      <i
                        className="si si-doc"
                        data-bs-toggle="tooltip"
                        title="si-doc"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-doc">
                      si-doc
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-diamond">
                      <i
                        className="si si-diamond"
                        data-bs-toggle="tooltip"
                        title="si-diamond"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-diamond">
                      si-diamond
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-cup">
                      <i
                        className="si si-cup"
                        data-bs-toggle="tooltip"
                        title="si-cup"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-cup">
                      si-cup
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-calculator">
                      <i
                        className="si si-calculator"
                        data-bs-toggle="tooltip"
                        title="si-calculator"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-calculator">
                      si-calculator
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-bubbles">
                      <i
                        className="si si-bubbles"
                        data-bs-toggle="tooltip"
                        title="si-bubbles"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-bubbles">
                      si-bubbles
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-briefcase">
                      <i
                        className="si si-briefcase"
                        data-bs-toggle="tooltip"
                        title="si-briefcase"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-briefcase">
                      si-briefcase
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-book-open">
                      <i
                        className="si si-book-open"
                        data-bs-toggle="tooltip"
                        title="si-book-open"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-book-open">
                      si-book-open
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-basket-loaded">
                      <i
                        className="si si-basket-loaded"
                        data-bs-toggle="tooltip"
                        title="si-basket-loaded"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-basket-loaded"
                    >
                      si-basket-loaded
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-basket">
                      <i
                        className="si si-basket"
                        data-bs-toggle="tooltip"
                        title="si-basket"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-basket">
                      si-basket
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-bag">
                      <i
                        className="si si-bag"
                        data-bs-toggle="tooltip"
                        title="si-bag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-bag">
                      si-bag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-action-undo">
                      <i
                        className="si si-action-undo"
                        data-bs-toggle="tooltip"
                        title="si-action-undo"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-action-undo"
                    >
                      si-action-undo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-action-redo">
                      <i
                        className="si si-action-redo"
                        data-bs-toggle="tooltip"
                        title="si-action-redo"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-action-redo"
                    >
                      si-action-redo
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-wrench">
                      <i
                        className="si si-wrench"
                        data-bs-toggle="tooltip"
                        title="si-wrench"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-wrench">
                      si-wrench
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-umbrella">
                      <i
                        className="si si-umbrella"
                        data-bs-toggle="tooltip"
                        title="si-umbrella"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-umbrella">
                      si-umbrella
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-trash">
                      <i
                        className="si si-trash"
                        data-bs-toggle="tooltip"
                        title="si-trash"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-trash">
                      si-trash
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-tag">
                      <i
                        className="si si-tag"
                        data-bs-toggle="tooltip"
                        title="si-tag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-tag">
                      si-tag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-support">
                      <i
                        className="si si-support"
                        data-bs-toggle="tooltip"
                        title="si-support"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-support">
                      si-support
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-frame">
                      <i
                        className="si si-frame"
                        data-bs-toggle="tooltip"
                        title="si-frame"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-frame">
                      si-frame
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-size-fullscreen">
                      <i
                        className="si si-size-fullscreen"
                        data-bs-toggle="tooltip"
                        title="si-size-fullscreen"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-size-fullscreen"
                    >
                      si-size-fullscreen
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-size-actual">
                      <i
                        className="si si-size-actual"
                        data-bs-toggle="tooltip"
                        title="si-size-actual"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-size-actual"
                    >
                      si-size-actual
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-shuffle">
                      <i
                        className="si si-shuffle"
                        data-bs-toggle="tooltip"
                        title="si-shuffle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-shuffle">
                      si-shuffle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-share-alt">
                      <i
                        className="si si-share-alt"
                        data-bs-toggle="tooltip"
                        title="si-share-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-share-alt">
                      si-share-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-share">
                      <i
                        className="si si-share"
                        data-bs-toggle="tooltip"
                        title="si-share"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-share">
                      si-share
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-rocket">
                      <i
                        className="si si-rocket"
                        data-bs-toggle="tooltip"
                        title="si-rocket"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-rocket">
                      si-rocket
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-question">
                      <i
                        className="si si-question"
                        data-bs-toggle="tooltip"
                        title="si-question"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-question">
                      si-question
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-pie-chart">
                      <i
                        className="si si-pie-chart"
                        data-bs-toggle="tooltip"
                        title="si-pie-chart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-pie-chart">
                      si-pie-chart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-pencil">
                      <i
                        className="si si-pencil"
                        data-bs-toggle="tooltip"
                        title="si-pencil"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-pencil">
                      si-pencil
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-note">
                      <i
                        className="si si-note"
                        data-bs-toggle="tooltip"
                        title="si-note"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-note">
                      si-note
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-loop">
                      <i
                        className="si si-loop"
                        data-bs-toggle="tooltip"
                        title="si-loop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-loop">
                      si-loop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-home">
                      <i
                        className="si si-home"
                        data-bs-toggle="tooltip"
                        title="si-home"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-home">
                      si-home
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-grid">
                      <i
                        className="si si-grid"
                        data-bs-toggle="tooltip"
                        title="si-grid"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-grid">
                      si-grid
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-graph">
                      <i
                        className="si si-graph"
                        data-bs-toggle="tooltip"
                        title="si-graph"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-graph">
                      si-graph
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-microphone">
                      <i
                        className="si si-microphone"
                        data-bs-toggle="tooltip"
                        title="si-microphone"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-microphone">
                      si-microphone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-music-tone-alt">
                      <i
                        className="si si-music-tone-alt"
                        data-bs-toggle="tooltip"
                        title="si-music-tone-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-music-tone-alt"
                    >
                      si-music-tone-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-music-tone">
                      <i
                        className="si si-music-tone"
                        data-bs-toggle="tooltip"
                        title="si-music-tone"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-music-tone">
                      si-music-tone
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-earphones-alt">
                      <i
                        className="si si-earphones-alt"
                        data-bs-toggle="tooltip"
                        title="si-earphones-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-earphones-alt"
                    >
                      si-earphones-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-earphones">
                      <i
                        className="si si-earphones"
                        data-bs-toggle="tooltip"
                        title="si-earphones"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-earphones">
                      si-earphones
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-equalizer">
                      <i
                        className="si si-equalizer"
                        data-bs-toggle="tooltip"
                        title="si-equalizer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-equalizer">
                      si-equalizer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-like">
                      <i
                        className="si si-like"
                        data-bs-toggle="tooltip"
                        title="si-like"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-like">
                      si-like
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-dislike">
                      <i
                        className="si si-dislike"
                        data-bs-toggle="tooltip"
                        title="si-dislike"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-dislike">
                      si-dislike
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-control-start">
                      <i
                        className="si si-control-start"
                        data-bs-toggle="tooltip"
                        title="si-control-start"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-control-start"
                    >
                      si-control-start
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-control-rewind">
                      <i
                        className="si si-control-rewind"
                        data-bs-toggle="tooltip"
                        title="si-control-rewind"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-control-rewind"
                    >
                      si-control-rewind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-control-play">
                      <i
                        className="si si-control-play"
                        data-bs-toggle="tooltip"
                        title="si-control-play"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-control-play"
                    >
                      si-control-play
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-control-pause">
                      <i
                        className="si si-control-pause"
                        data-bs-toggle="tooltip"
                        title="si-control-pause"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-control-pause"
                    >
                      si-control-pause
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-control-forward">
                      <i
                        className="si si-control-forward"
                        data-bs-toggle="tooltip"
                        title="si-control-forward"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-control-forward"
                    >
                      si-control-forward
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-control-end">
                      <i
                        className="si si-control-end"
                        data-bs-toggle="tooltip"
                        title="si-control-end"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-control-end"
                    >
                      si-control-end
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-volume-1">
                      <i
                        className="si si-volume-1"
                        data-bs-toggle="tooltip"
                        title="si-volume-1"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-volume-1">
                      si-volume-1
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-volume-2">
                      <i
                        className="si si-volume-2"
                        data-bs-toggle="tooltip"
                        title="si-volume-2"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-volume-2">
                      si-volume-2
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-volume-off">
                      <i
                        className="si si-volume-off"
                        data-bs-toggle="tooltip"
                        title="si-volume-off"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-volume-off">
                      si-volume-off
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-calendar">
                      <i
                        className="si si-calendar"
                        data-bs-toggle="tooltip"
                        title="si-calendar"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-calendar">
                      si-calendar
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-bulb">
                      <i
                        className="si si-bulb"
                        data-bs-toggle="tooltip"
                        title="si-bulb"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-bulb">
                      si-bulb
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-chart">
                      <i
                        className="si si-chart"
                        data-bs-toggle="tooltip"
                        title="si-chart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-chart">
                      si-chart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-ban">
                      <i
                        className="si si-ban"
                        data-bs-toggle="tooltip"
                        title="si-ban"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-ban">
                      si-ban
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-bubble">
                      <i
                        className="si si-bubble"
                        data-bs-toggle="tooltip"
                        title="si-bubble"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-bubble">
                      si-bubble
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-camrecorder">
                      <i
                        className="si si-camrecorder"
                        data-bs-toggle="tooltip"
                        title="si-camrecorder"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-camrecorder"
                    >
                      si-camrecorder
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-camera">
                      <i
                        className="si si-camera"
                        data-bs-toggle="tooltip"
                        title="si-camera"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-camera">
                      si-camera
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-cloud-download">
                      <i
                        className="si si-cloud-download"
                        data-bs-toggle="tooltip"
                        title="si-cloud-download"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-cloud-download"
                    >
                      si-cloud-download
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-cloud-upload">
                      <i
                        className="si si-cloud-upload"
                        data-bs-toggle="tooltip"
                        title="si-cloud-upload"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-cloud-upload"
                    >
                      si-cloud-upload
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-envelope">
                      <i
                        className="si si-envelope"
                        data-bs-toggle="tooltip"
                        title="si-envelope"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-envelope">
                      si-envelope
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-eye">
                      <i
                        className="si si-eye"
                        data-bs-toggle="tooltip"
                        title="si-eye"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-eye">
                      si-eye
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-flag">
                      <i
                        className="si si-flag"
                        data-bs-toggle="tooltip"
                        title="si-flag"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-flag">
                      si-flag
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-heart">
                      <i
                        className="si si-heart"
                        data-bs-toggle="tooltip"
                        title="si-heart"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-heart">
                      si-heart
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-info">
                      <i
                        className="si si-info"
                        data-bs-toggle="tooltip"
                        title="si-info"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-info">
                      si-info
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-key">
                      <i
                        className="si si-key"
                        data-bs-toggle="tooltip"
                        title="si-key"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-key">
                      si-key
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-link">
                      <i
                        className="si si-link"
                        data-bs-toggle="tooltip"
                        title="si-link"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-link">
                      si-link
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-lock">
                      <i
                        className="si si-lock"
                        data-bs-toggle="tooltip"
                        title="si-lock"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-lock">
                      si-lock
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-lock-open">
                      <i
                        className="si si-lock-open"
                        data-bs-toggle="tooltip"
                        title="si-lock-open"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-lock-open">
                      si-lock-open
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-magnifier">
                      <i
                        className="si si-magnifier"
                        data-bs-toggle="tooltip"
                        title="si-magnifier"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-magnifier">
                      si-magnifier
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-magnifier-add">
                      <i
                        className="si si-magnifier-add"
                        data-bs-toggle="tooltip"
                        title="si-magnifier-add"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-magnifier-add"
                    >
                      si-magnifier-add
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-magnifier-remove">
                      <i
                        className="si si-magnifier-remove"
                        data-bs-toggle="tooltip"
                        title="si-magnifier-remove"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-magnifier-remove"
                    >
                      si-magnifier-remove
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-paper-clip">
                      <i
                        className="si si-paper-clip"
                        data-bs-toggle="tooltip"
                        title="si-paper-clip"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-paper-clip">
                      si-paper-clip
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-paper-plane">
                      <i
                        className="si si-paper-plane"
                        data-bs-toggle="tooltip"
                        title="si-paper-plane"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-paper-plane"
                    >
                      si-paper-plane
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-power">
                      <i
                        className="si si-power"
                        data-bs-toggle="tooltip"
                        title="si-power"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-power">
                      si-power
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-refresh">
                      <i
                        className="si si-refresh"
                        data-bs-toggle="tooltip"
                        title="si-refresh"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-refresh">
                      si-refresh
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-reload">
                      <i
                        className="si si-reload"
                        data-bs-toggle="tooltip"
                        title="si-reload"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-reload">
                      si-reload
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-settings">
                      <i
                        className="si si-settings"
                        data-bs-toggle="tooltip"
                        title="si-settings"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-settings">
                      si-settings
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-star">
                      <i
                        className="si si-star"
                        data-bs-toggle="tooltip"
                        title="si-star"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-star">
                      si-star
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-symbol-female">
                      <i
                        className="si si-symbol-female"
                        data-bs-toggle="tooltip"
                        title="si-symbol-female"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-symbol-female"
                    >
                      si-symbol-female
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-symbol-male">
                      <i
                        className="si si-symbol-male"
                        data-bs-toggle="tooltip"
                        title="si-symbol-male"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-symbol-male"
                    >
                      si-symbol-male
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-target">
                      <i
                        className="si si-target"
                        data-bs-toggle="tooltip"
                        title="si-target"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-target">
                      si-target
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-credit-card">
                      <i
                        className="si si-credit-card"
                        data-bs-toggle="tooltip"
                        title="si-credit-card"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-credit-card"
                    >
                      si-credit-card
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-paypal">
                      <i
                        className="si si-paypal"
                        data-bs-toggle="tooltip"
                        title="si-paypal"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="si-paypal">
                      si-paypal
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-tumblr">
                      <i
                        className="si si-social-tumblr"
                        data-bs-toggle="tooltip"
                        title="si-social-tumblr"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-tumblr"
                    >
                      si-social-tumblr
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-twitter">
                      <i
                        className="si si-social-twitter"
                        data-bs-toggle="tooltip"
                        title="si-social-twitter"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-twitter"
                    >
                      si-social-twitter
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-facebook">
                      <i
                        className="si si-social-facebook"
                        data-bs-toggle="tooltip"
                        title="si-social-facebook"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-facebook"
                    >
                      si-social-facebook
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-instagram">
                      <i
                        className="si si-social-instagram"
                        data-bs-toggle="tooltip"
                        title="si-social-instagram"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-instagram"
                    >
                      si-social-instagram
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-linkedin">
                      <i
                        className="si si-social-linkedin"
                        data-bs-toggle="tooltip"
                        title="si-social-linkedin"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-linkedin"
                    >
                      si-social-linkedin
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-pinterest">
                      <i
                        className="si si-social-pinterest"
                        data-bs-toggle="tooltip"
                        title="si-social-pinterest"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-pinterest"
                    >
                      si-social-pinterest
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-github">
                      <i
                        className="si si-social-github"
                        data-bs-toggle="tooltip"
                        title="si-social-github"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-github"
                    >
                      si-social-github
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-google">
                      <i
                        className="si si-social-google"
                        data-bs-toggle="tooltip"
                        title="si-social-google"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-google"
                    >
                      si-social-google
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-reddit">
                      <i
                        className="si si-social-reddit"
                        data-bs-toggle="tooltip"
                        title="si-social-reddit"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-reddit"
                    >
                      si-social-reddit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-skype">
                      <i
                        className="si si-social-skype"
                        data-bs-toggle="tooltip"
                        title="si-social-skype"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-skype"
                    >
                      si-social-skype
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-dribbble">
                      <i
                        className="si si-social-dribbble"
                        data-bs-toggle="tooltip"
                        title="si-social-dribbble"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-dribbble"
                    >
                      si-social-dribbble
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-behance">
                      <i
                        className="si si-social-behance"
                        data-bs-toggle="tooltip"
                        title="si-social-behance"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-behance"
                    >
                      si-social-behance
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-foursqare">
                      <i
                        className="si si-social-foursqare"
                        data-bs-toggle="tooltip"
                        title="si-social-foursqare"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-foursqare"
                    >
                      si-social-foursqare
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-soundcloud">
                      <i
                        className="si si-social-soundcloud"
                        data-bs-toggle="tooltip"
                        title="si-social-soundcloud"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-soundcloud"
                    >
                      si-social-soundcloud
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-spotify">
                      <i
                        className="si si-social-spotify"
                        data-bs-toggle="tooltip"
                        title="si-social-spotify"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-spotify"
                    >
                      si-social-spotify
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-stumbleupon">
                      <i
                        className="si si-social-stumbleupon"
                        data-bs-toggle="tooltip"
                        title="si-social-stumbleupon"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-stumbleupon"
                    >
                      si-social-stumbleupon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-youtube">
                      <i
                        className="si si-social-youtube"
                        data-bs-toggle="tooltip"
                        title="si-social-youtube"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-youtube"
                    >
                      si-social-youtube
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-dropbox">
                      <i
                        className="si si-social-dropbox"
                        data-bs-toggle="tooltip"
                        title="si-social-dropbox"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-dropbox"
                    >
                      si-social-dropbox
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-vkontakte">
                      <i
                        className="si si-social-vkontakte"
                        data-bs-toggle="tooltip"
                        title="si-social-vkontakte"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-vkontakte"
                    >
                      si-social-vkontakte
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="si-social-steam">
                      <i
                        className="si si-social-steam"
                        data-bs-toggle="tooltip"
                        title="si-social-steam"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="si-social-steam"
                    >
                      si-social-steam
                    </UncontrolledTooltip>
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

SimpleLineIcons.propTypes = {};

SimpleLineIcons.defaultProps = {};

export default SimpleLineIcons;
