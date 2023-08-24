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

const WeatherIcons = () => (
  <div>
    <PageHeaders
      title="Weather Icons"
      home="Home"
      name="Icons"
      fonticonsname="Weather Icons"
    />
    <Row>
      <Col md={12}>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Weather icons</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col lg="12" sm="12" className=" mb-4">
                <p className="mb-2">
                  Simply beautiful open source icons. For more info{" "}
                  <a
                    href="https://erikflowers.github.io/weather-icons/"
                    target="_blank" className="text-primary"
                  >
                    click here
                  </a>
                  .
                </p>
                <p>
                  <code>&lt;i className="wi wi-ICON_NAME"&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col sm="12" lg="12">
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item" id="wi-day-cloudy-high">
                      <i
                        className="wi wi-day-cloudy-high"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-cloudy-high"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-cloudy-high"
                    >
                      wi wi-day-cloudy-high
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-moonrise">
                      <i
                        className="wi wi-moonrise"
                        data-bs-toggle="tooltip"
                        title="wi wi-moonrise"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-moonrise">
                      wi wi-moonrise
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-na">
                      <i
                        className="wi wi-na"
                        data-bs-toggle="tooltip"
                        title="wi wi-na"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-na">
                      wi wi-na
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-volcano">
                      <i
                        className="wi wi-volcano"
                        data-bs-toggle="tooltip"
                        title="wi wi-volcano"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-volcano">
                      wi wi-volcano
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-light-wind">
                      <i
                        className="wi wi-day-light-wind"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-light-wind"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-light-wind"
                    >
                      wi wi-day-light-wind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-moonset">
                      <i
                        className="wi wi-moonset"
                        data-bs-toggle="tooltip"
                        title="wi wi-moonset"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-moonset">
                      wi wi-moonset
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-flood">
                      <i
                        className="wi wi-flood"
                        data-bs-toggle="tooltip"
                        title="wi wi-flood"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-flood">
                      wi wi-flood
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-train">
                      <i
                        className="wi wi-train"
                        data-bs-toggle="tooltip"
                        title="wi wi-train"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-train">
                      wi wi-train
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-sleet">
                      <i
                        className="wi wi-day-sleet"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-sleet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-day-sleet">
                      wi wi-day-sleet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-sleet">
                      <i
                        className="wi wi-night-sleet"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-sleet"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-sleet"
                    >
                      wi wi-night-sleet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-sandstorm">
                      <i
                        className="wi wi-sandstorm"
                        data-bs-toggle="tooltip"
                        title="wi wi-sandstorm"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-sandstorm">
                      wi wi-sandstorm
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-small-craft-advisory"
                    >
                      <i
                        className="wi wi-small-craft-advisory"
                        data-bs-toggle="tooltip"
                        title="wi wi-small-craft-advisory"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-small-craft-advisory"
                    >
                      wi wi-small-craft-advisory
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-haze">
                      <i
                        className="wi wi-day-haze"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-haze"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-day-haze">
                      wi wi-day-haze
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-alt-sleet">
                      <i
                        className="wi wi-night-alt-sleet"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-sleet"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-sleet"
                    >
                      wi wi-night-alt-sleet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-tsunami">
                      <i
                        className="wi wi-tsunami"
                        data-bs-toggle="tooltip"
                        title="wi wi-tsunami"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-tsunami">
                      wi wi-tsunami
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-gale-warning">
                      <i
                        className="wi wi-gale-warning"
                        data-bs-toggle="tooltip"
                        title="wi wi-gale-warning"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-gale-warning"
                    >
                      wi wi-gale-warning
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-cloudy-high">
                      <i
                        className="wi wi-night-cloudy-high"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-cloudy-high"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-cloudy-high"
                    >
                      wi wi-night-cloudy-high
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-raindrop">
                      <i
                        className="wi wi-raindrop"
                        data-bs-toggle="tooltip"
                        title="wi wi-raindrop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-raindrop">
                      wi wi-raindrop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-earthquake">
                      <i
                        className="wi wi-earthquake"
                        data-bs-toggle="tooltip"
                        title="wi wi-earthquake"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-earthquake">
                      wi wi-earthquake
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-storm-warning">
                      <i
                        className="wi wi-storm-warning"
                        data-bs-toggle="tooltip"
                        title="wi wi-storm-warning"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-storm-warning"
                    >
                      wi wi-storm-warning
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-night-alt-partly-cloudy"
                    >
                      <i
                        className="wi wi-night-alt-partly-cloudy"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-partly-cloudy"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-partly-cloudy"
                    >
                      wi wi-night-alt-partly-cloudy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-barometer">
                      <i
                        className="wi wi-barometer"
                        data-bs-toggle="tooltip"
                        title="wi wi-barometer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-barometer">
                      wi wi-barometer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-fire">
                      <i
                        className="wi wi-fire"
                        data-bs-toggle="tooltip"
                        title="wi wi-fire"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-fire">
                      wi wi-fire
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-hurricane-warning">
                      <i
                        className="wi wi-hurricane-warning"
                        data-bs-toggle="tooltip"
                        title="wi wi-hurricane-warning"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-hurricane-warning"
                    >
                      wi wi-hurricane-warning
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-sleet">
                      <i
                        className="wi wi-sleet"
                        data-bs-toggle="tooltip"
                        title="wi wi-sleet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-sleet">
                      wi wi-sleet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-humidity">
                      <i
                        className="wi wi-humidity"
                        data-bs-toggle="tooltip"
                        title="wi wi-humidity"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-humidity">
                      wi wi-humidity
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-sunny">
                      <i
                        className="wi wi-day-sunny"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-sunny"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-day-sunny">
                      wi wi-day-sunny
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-cloudy">
                      <i
                        className="wi wi-day-cloudy"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-cloudy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-day-cloudy">
                      wi wi-day-cloudy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-cloudy-gusts">
                      <i
                        className="wi wi-day-cloudy-gusts"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-cloudy-gusts"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-cloudy-gusts"
                    >
                      wi wi-day-cloudy-gusts
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-cloudy-windy">
                      <i
                        className="wi wi-day-cloudy-windy"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-cloudy-windy"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-cloudy-windy"
                    >
                      wi wi-day-cloudy-windy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-fog">
                      <i
                        className="wi wi-day-fog"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-fog"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-day-fog">
                      wi wi-day-fog
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-hail">
                      <i
                        className="wi wi-day-hail"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-hail"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-day-hail">
                      wi wi-day-hail
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-haze">
                      <i
                        className="wi wi-day-haze"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-haze"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-day-haze">
                      wi wi-day-haze
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-lightning">
                      <i
                        className="wi wi-day-lightning"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-lightning"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-lightning"
                    >
                      wi wi-day-lightning
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-rain">
                      <i
                        className="wi wi-day-rain"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-rain"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-day-rain">
                      wi wi-day-rain
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-rain-mix">
                      <i
                        className="wi wi-day-rain-mix"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-rain-mix"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-rain-mix"
                    >
                      wi wi-day-rain-mix
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-rain-wind">
                      <i
                        className="wi wi-day-rain-wind"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-rain-wind"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-rain-wind"
                    >
                      wi wi-day-rain-wind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-showers">
                      <i
                        className="wi wi-day-showers"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-showers"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-showers"
                    >
                      wi wi-day-showers
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-sleet">
                      <i
                        className="wi wi-day-sleet"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-sleet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-day-sleet">
                      wi wi-day-sleet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-sleet-storm">
                      <i
                        className="wi wi-day-sleet-storm"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-sleet-storm"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-sleet-storm"
                    >
                      wi wi-day-sleet-storm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-snow">
                      <i
                        className="wi wi-day-snow"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-snow"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-day-snow">
                      wi wi-day-snow
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-day-snow-thunderstorm"
                    >
                      <i
                        className="wi wi-day-snow-thunderstorm"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-snow-thunderstorm"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-snow-thunderstorm"
                    >
                      wi wi-day-snow-thunderstorm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-snow-wind">
                      <i
                        className="wi wi-day-snow-wind"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-snow-wind"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-snow-wind"
                    >
                      wi wi-day-snow-wind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-sprinkle">
                      <i
                        className="wi wi-day-sprinkle"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-sprinkle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-sprinkle"
                    >
                      wi wi-day-sprinkle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-storm-showers">
                      <i
                        className="wi wi-day-storm-showers"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-storm-showers"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-storm-showers"
                    >
                      wi wi-day-storm-showers
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-sunny-overcast">
                      <i
                        className="wi wi-day-sunny-overcast"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-sunny-overcast"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-sunny-overcast"
                    >
                      wi wi-day-sunny-overcast
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-thunderstorm">
                      <i
                        className="wi wi-day-thunderstorm"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-thunderstorm"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-thunderstorm"
                    >
                      wi wi-day-thunderstorm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-windy">
                      <i
                        className="wi wi-day-windy"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-windy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-day-windy">
                      wi wi-day-windy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-solar-eclipse">
                      <i
                        className="wi wi-solar-eclipse"
                        data-bs-toggle="tooltip"
                        title="wi wi-solar-eclipse"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-solar-eclipse"
                    >
                      wi wi-solar-eclipse
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-hot">
                      <i
                        className="wi wi-hot"
                        data-bs-toggle="tooltip"
                        title="wi wi-hot"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-hot">
                      wi wi-hot
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-cloudy-high">
                      <i
                        className="wi wi-day-cloudy-high"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-cloudy-high"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-cloudy-high"
                    >
                      wi wi-day-cloudy-high
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-day-light-wind">
                      <i
                        className="wi wi-day-light-wind"
                        data-bs-toggle="tooltip"
                        title="wi wi-day-light-wind"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-day-light-wind"
                    >
                      wi wi-day-light-wind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-clear">
                      <i
                        className="wi wi-night-clear"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-clear"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-clear"
                    >
                      wi wi-night-clear
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-alt-cloudy">
                      <i
                        className="wi wi-night-alt-cloudy"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-cloudy"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-cloudy"
                    >
                      wi wi-night-alt-cloudy
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-night-alt-cloudy-gusts"
                    >
                      <i
                        className="wi wi-night-alt-cloudy-gusts"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-cloudy-gusts"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-cloudy-gusts"
                    >
                      wi wi-night-alt-cloudy-gusts
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-night-alt-cloudy-windy"
                    >
                      <i
                        className="wi wi-night-alt-cloudy-windy"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-cloudy-windy"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-cloudy-windy"
                    >
                      wi wi-night-alt-cloudy-windy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-alt-hail">
                      <i
                        className="wi wi-night-alt-hail"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-hail"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-hail"
                    >
                      wi wi-night-alt-hail
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-alt-lightning">
                      <i
                        className="wi wi-night-alt-lightning"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-lightning"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-lightning"
                    >
                      wi wi-night-alt-lightning
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-alt-rain">
                      <i
                        className="wi wi-night-alt-rain"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-rain"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-rain"
                    >
                      wi wi-night-alt-rain
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-alt-rain-mix">
                      <i
                        className="wi wi-night-alt-rain-mix"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-rain-mix"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-rain-mix"
                    >
                      wi wi-night-alt-rain-mix
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-alt-rain-wind">
                      <i
                        className="wi wi-night-alt-rain-wind"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-rain-wind"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-rain-wind"
                    >
                      wi wi-night-alt-rain-wind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-alt-showers">
                      <i
                        className="wi wi-night-alt-showers"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-showers"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-showers"
                    >
                      wi wi-night-alt-showers
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-alt-sleet">
                      <i
                        className="wi wi-night-alt-sleet"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-sleet"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-sleet"
                    >
                      wi wi-night-alt-sleet
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-night-alt-sleet-storm"
                    >
                      <i
                        className="wi wi-night-alt-sleet-storm"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-sleet-storm"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-sleet-storm"
                    >
                      wi wi-night-alt-sleet-storm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-alt-snow">
                      <i
                        className="wi wi-night-alt-snow"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-snow"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-snow"
                    >
                      wi wi-night-alt-snow
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-night-alt-snow-thunderstorm"
                    >
                      <i
                        className="wi wi-night-alt-snow-thunderstorm"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-snow-thunderstorm"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-snow-thunderstorm"
                    >
                      wi wi-night-alt-snow-thunderstorm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-alt-snow-wind">
                      <i
                        className="wi wi-night-alt-snow-wind"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-snow-wind"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-snow-wind"
                    >
                      wi wi-night-alt-snow-wind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-alt-sprinkle">
                      <i
                        className="wi wi-night-alt-sprinkle"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-sprinkle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-sprinkle"
                    >
                      wi wi-night-alt-sprinkle
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-night-alt-storm-showers"
                    >
                      <i
                        className="wi wi-night-alt-storm-showers"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-storm-showers"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-storm-showers"
                    >
                      wi wi-night-alt-storm-showers
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-night-alt-thunderstorm"
                    >
                      <i
                        className="wi wi-night-alt-thunderstorm"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-thunderstorm"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-thunderstorm"
                    >
                      wi wi-night-alt-thunderstorm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-cloudy">
                      <i
                        className="wi wi-night-cloudy"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-cloudy"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-cloudy"
                    >
                      wi wi-night-cloudy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-cloudy-gusts">
                      <i
                        className="wi wi-night-cloudy-gusts"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-cloudy-gusts"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-cloudy-gusts"
                    >
                      wi wi-night-cloudy-gusts
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-cloudy-windy">
                      <i
                        className="wi wi-night-cloudy-windy"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-cloudy-windy"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-cloudy-windy"
                    >
                      wi wi-night-cloudy-windy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-fog">
                      <i
                        className="wi wi-night-fog"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-fog"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-night-fog">
                      wi wi-night-fog
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-hail">
                      <i
                        className="wi wi-night-hail"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-hail"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-night-hail">
                      wi wi-night-hail
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-lightning">
                      <i
                        className="wi wi-night-lightning"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-lightning"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-lightning"
                    >
                      wi wi-night-lightning
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-partly-cloudy">
                      <i
                        className="wi wi-night-partly-cloudy"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-partly-cloudy"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-partly-cloudy"
                    >
                      wi wi-night-partly-cloudy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-rain">
                      <i
                        className="wi wi-night-rain"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-rain"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-night-rain">
                      wi wi-night-rain
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-rain-mix">
                      <i
                        className="wi wi-night-rain-mix"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-rain-mix"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-rain-mix"
                    >
                      wi wi-night-rain-mix
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-rain-wind">
                      <i
                        className="wi wi-night-rain-wind"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-rain-wind"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-rain-wind"
                    >
                      wi wi-night-rain-wind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-showers">
                      <i
                        className="wi wi-night-showers"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-showers"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-showers"
                    >
                      wi wi-night-showers
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-sleet">
                      <i
                        className="wi wi-night-sleet"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-sleet"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-sleet"
                    >
                      wi wi-night-sleet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-sleet-storm">
                      <i
                        className="wi wi-night-sleet-storm"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-sleet-storm"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-sleet-storm"
                    >
                      wi wi-night-sleet-storm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-snow">
                      <i
                        className="wi wi-night-snow"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-snow"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-night-snow">
                      wi wi-night-snow
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-night-snow-thunderstorm"
                    >
                      <i
                        className="wi wi-night-snow-thunderstorm"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-snow-thunderstorm"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-snow-thunderstorm"
                    >
                      wi wi-night-snow-thunderstorm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-snow-wind">
                      <i
                        className="wi wi-night-snow-wind"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-snow-wind"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-snow-wind"
                    >
                      wi wi-night-snow-wind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-sprinkle">
                      <i
                        className="wi wi-night-sprinkle"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-sprinkle"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-sprinkle"
                    >
                      wi wi-night-sprinkle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-storm-showers">
                      <i
                        className="wi wi-night-storm-showers"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-storm-showers"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-storm-showers"
                    >
                      wi wi-night-storm-showers
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-thunderstorm">
                      <i
                        className="wi wi-night-thunderstorm"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-thunderstorm"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-thunderstorm"
                    >
                      wi wi-night-thunderstorm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-lunar-eclipse">
                      <i
                        className="wi wi-lunar-eclipse"
                        data-bs-toggle="tooltip"
                        title="wi wi-lunar-eclipse"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-lunar-eclipse"
                    >
                      wi wi-lunar-eclipse
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-stars">
                      <i
                        className="wi wi-stars"
                        data-bs-toggle="tooltip"
                        title="wi wi-stars"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-stars">
                      wi wi-stars
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-storm-showers">
                      <i
                        className="wi wi-storm-showers"
                        data-bs-toggle="tooltip"
                        title="wi wi-storm-showers"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-storm-showers"
                    >
                      wi wi-storm-showers
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-night-alt-cloudy-high"
                    >
                      <i
                        className="wi wi-night-alt-cloudy-high"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-cloudy-high"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-cloudy-high"
                    >
                      wi wi-night-alt-cloudy-high
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-night-cloudy-high">
                      <i
                        className="wi wi-night-cloudy-high"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-cloudy-high"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-cloudy-high"
                    >
                      wi wi-night-cloudy-high
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-night-alt-partly-cloudy"
                    >
                      <i
                        className="wi wi-night-alt-partly-cloudy"
                        data-bs-toggle="tooltip"
                        title="wi wi-night-alt-partly-cloudy"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-night-alt-partly-cloudy"
                    >
                      wi wi-night-alt-partly-cloudy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-cloud">
                      <i
                        className="wi wi-cloud"
                        data-bs-toggle="tooltip"
                        title="wi wi-cloud"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-cloud">
                      wi wi-cloud
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-cloudy">
                      <i
                        className="wi wi-cloudy"
                        data-bs-toggle="tooltip"
                        title="wi wi-cloudy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-cloudy">
                      wi wi-cloudy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-cloudy-gusts">
                      <i
                        className="wi wi-cloudy-gusts"
                        data-bs-toggle="tooltip"
                        title="wi wi-cloudy-gusts"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-cloudy-gusts"
                    >
                      wi wi-cloudy-gusts
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-cloudy-windy">
                      <i
                        className="wi wi-cloudy-windy"
                        data-bs-toggle="tooltip"
                        title="wi wi-cloudy-windy"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-cloudy-windy"
                    >
                      wi wi-cloudy-windy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-fog">
                      <i
                        className="wi wi-fog"
                        data-bs-toggle="tooltip"
                        title="wi wi-fog"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-fog">
                      wi wi-fog
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-hail">
                      <i
                        className="wi wi-hail"
                        data-bs-toggle="tooltip"
                        title="wi wi-hail"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-hail">
                      wi wi-hail
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-rain">
                      <i
                        className="wi wi-rain"
                        data-bs-toggle="tooltip"
                        title="wi wi-rain"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-rain">
                      wi wi-rain
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-rain-mix">
                      <i
                        className="wi wi-rain-mix"
                        data-bs-toggle="tooltip"
                        title="wi wi-rain-mix"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-rain-mix">
                      wi wi-rain-mix
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-rain-wind">
                      <i
                        className="wi wi-rain-wind"
                        data-bs-toggle="tooltip"
                        title="wi wi-rain-wind"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-rain-wind">
                      wi wi-rain-wind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-showers">
                      <i
                        className="wi wi-showers"
                        data-bs-toggle="tooltip"
                        title="wi wi-showers"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-showers">
                      wi wi-showers
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-sleet">
                      <i
                        className="wi wi-sleet"
                        data-bs-toggle="tooltip"
                        title="wi wi-sleet"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-sleet">
                      wi wi-sleet
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-snow">
                      <i
                        className="wi wi-snow"
                        data-bs-toggle="tooltip"
                        title="wi wi-snow"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-snow">
                      wi wi-snow
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-sprinkle">
                      <i
                        className="wi wi-sprinkle"
                        data-bs-toggle="tooltip"
                        title="wi wi-sprinkle"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-sprinkle">
                      wi wi-sprinkle
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-storm-showers">
                      <i
                        className="wi wi-storm-showers"
                        data-bs-toggle="tooltip"
                        title="wi wi-storm-showers"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-storm-showers"
                    >
                      wi wi-storm-showers
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-thunderstorm">
                      <i
                        className="wi wi-thunderstorm"
                        data-bs-toggle="tooltip"
                        title="wi wi-thunderstorm"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-thunderstorm"
                    >
                      wi wi-thunderstorm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-snow-wind">
                      <i
                        className="wi wi-snow-wind"
                        data-bs-toggle="tooltip"
                        title="wi wi-snow-wind"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-snow-wind">
                      wi wi-snow-wind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-snow">
                      <i
                        className="wi wi-snow"
                        data-bs-toggle="tooltip"
                        title="wi wi-snow"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-snow">
                      wi wi-snow
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-smog">
                      <i
                        className="wi wi-smog"
                        data-bs-toggle="tooltip"
                        title="wi wi-smog"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-smog">
                      wi wi-smog
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-smoke">
                      <i
                        className="wi wi-smoke"
                        data-bs-toggle="tooltip"
                        title="wi wi-smoke"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-smoke">
                      wi wi-smoke
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-lightning">
                      <i
                        className="wi wi-lightning"
                        data-bs-toggle="tooltip"
                        title="wi wi-lightning"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-lightning">
                      wi wi-lightning
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-raindrops">
                      <i
                        className="wi wi-raindrops"
                        data-bs-toggle="tooltip"
                        title="wi wi-raindrops"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-raindrops">
                      wi wi-raindrops
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-raindrop">
                      <i
                        className="wi wi-raindrop"
                        data-bs-toggle="tooltip"
                        title="wi wi-raindrop"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-raindrop">
                      wi wi-raindrop
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-snowflake-cold">
                      <i
                        className="wi wi-snowflake-cold"
                        data-bs-toggle="tooltip"
                        title="wi wi-snowflake-cold"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-snowflake-cold"
                    >
                      wi wi-snowflake-cold
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-windy">
                      <i
                        className="wi wi-windy"
                        data-bs-toggle="tooltip"
                        title="wi wi-windy"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-windy">
                      wi wi-windy
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-strong-wind">
                      <i
                        className="wi wi-strong-wind"
                        data-bs-toggle="tooltip"
                        title="wi wi-strong-wind"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-strong-wind"
                    >
                      wi wi-strong-wind
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-sandstorm">
                      <i
                        className="wi wi-sandstorm"
                        data-bs-toggle="tooltip"
                        title="wi wi-sandstorm"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-sandstorm">
                      wi wi-sandstorm
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-earthquake">
                      <i
                        className="wi wi-earthquake"
                        data-bs-toggle="tooltip"
                        title="wi wi-earthquake"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-earthquake">
                      wi wi-earthquake
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-fire">
                      <i
                        className="wi wi-fire"
                        data-bs-toggle="tooltip"
                        title="wi wi-fire"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-fire">
                      wi wi-fire
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-flood">
                      <i
                        className="wi wi-flood"
                        data-bs-toggle="tooltip"
                        title="wi wi-flood"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-flood">
                      wi wi-flood
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-meteor">
                      <i
                        className="wi wi-meteor"
                        data-bs-toggle="tooltip"
                        title="wi wi-meteor"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-meteor">
                      wi wi-meteor
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-tsunami">
                      <i
                        className="wi wi-tsunami"
                        data-bs-toggle="tooltip"
                        title="wi wi-tsunami"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-tsunami">
                      wi wi-tsunami
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-volcano">
                      <i
                        className="wi wi-volcano"
                        data-bs-toggle="tooltip"
                        title="wi wi-volcano"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-volcano">
                      wi wi-volcano
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-hurricane">
                      <i
                        className="wi wi-hurricane"
                        data-bs-toggle="tooltip"
                        title="wi wi-hurricane"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-hurricane">
                      wi wi-hurricane
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-tornado">
                      <i
                        className="wi wi-tornado"
                        data-bs-toggle="tooltip"
                        title="wi wi-tornado"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-tornado">
                      wi wi-tornado
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-small-craft-advisory"
                    >
                      <i
                        className="wi wi-small-craft-advisory"
                        data-bs-toggle="tooltip"
                        title="wi wi-small-craft-advisory"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-small-craft-advisory"
                    >
                      wi wi-small-craft-advisory
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-gale-warning">
                      <i
                        className="wi wi-gale-warning"
                        data-bs-toggle="tooltip"
                        title="wi wi-gale-warning"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-gale-warning"
                    >
                      wi wi-gale-warning
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-storm-warning">
                      <i
                        className="wi wi-storm-warning"
                        data-bs-toggle="tooltip"
                        title="wi wi-storm-warning"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-storm-warning"
                    >
                      wi wi-storm-warning
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-hurricane-warning">
                      <i
                        className="wi wi-hurricane-warning"
                        data-bs-toggle="tooltip"
                        title="wi wi-hurricane-warning"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-hurricane-warning"
                    >
                      wi wi-hurricane-warning
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-wind-direction">
                      <i
                        className="wi wi-wind-direction"
                        data-bs-toggle="tooltip"
                        title="wi wi-wind-direction"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-wind-direction"
                    >
                      wi wi-wind-direction
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-alien">
                      <i
                        className="wi wi-alien"
                        data-bs-toggle="tooltip"
                        title="wi wi-alien"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-alien">
                      wi wi-alien
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-celsius">
                      <i
                        className="wi wi-celsius"
                        data-bs-toggle="tooltip"
                        title="wi wi-celsius"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-celsius">
                      wi wi-celsius
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-fahrenheit">
                      <i
                        className="wi wi-fahrenheit"
                        data-bs-toggle="tooltip"
                        title="wi wi-fahrenheit"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-fahrenheit">
                      wi wi-fahrenheit
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-degrees">
                      <i
                        className="wi wi-degrees"
                        data-bs-toggle="tooltip"
                        title="wi wi-degrees"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-degrees">
                      wi wi-degrees
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-thermometer">
                      <i
                        className="wi wi-thermometer"
                        data-bs-toggle="tooltip"
                        title="wi wi-thermometer"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-thermometer"
                    >
                      wi wi-thermometer
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-thermometer-exterior"
                    >
                      <i
                        className="wi wi-thermometer-exterior"
                        data-bs-toggle="tooltip"
                        title="wi wi-thermometer-exterior"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-thermometer-exterior"
                    >
                      wi wi-thermometer-exterior
                    </UncontrolledTooltip>
                    <li
                      className="icons-list-item"
                      id="wi-thermometer-internal"
                    >
                      <i
                        className="wi wi-thermometer-internal"
                        data-bs-toggle="tooltip"
                        title="wi wi-thermometer-internal"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-thermometer-internal"
                    >
                      wi wi-thermometer-internal
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-cloud-down">
                      <i
                        className="wi wi-cloud-down"
                        data-bs-toggle="tooltip"
                        title="wi wi-cloud-down"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-cloud-down">
                      wi wi-cloud-down
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-cloud-up">
                      <i
                        className="wi wi-cloud-up"
                        data-bs-toggle="tooltip"
                        title="wi wi-cloud-up"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-cloud-up">
                      wi wi-cloud-up
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-cloud-refresh">
                      <i
                        className="wi wi-cloud-refresh"
                        data-bs-toggle="tooltip"
                        title="wi wi-cloud-refresh"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-cloud-refresh"
                    >
                      wi wi-cloud-refresh
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-horizon">
                      <i
                        className="wi wi-horizon"
                        data-bs-toggle="tooltip"
                        title="wi wi-horizon"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-horizon">
                      wi wi-horizon
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-horizon-alt">
                      <i
                        className="wi wi-horizon-alt"
                        data-bs-toggle="tooltip"
                        title="wi wi-horizon-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-horizon-alt"
                    >
                      wi wi-horizon-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-sunrise">
                      <i
                        className="wi wi-sunrise"
                        data-bs-toggle="tooltip"
                        title="wi wi-sunrise"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-sunrise">
                      wi wi-sunrise
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-sunset">
                      <i
                        className="wi wi-sunset"
                        data-bs-toggle="tooltip"
                        title="wi wi-sunset"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-sunset">
                      wi wi-sunset
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-moonrise">
                      <i
                        className="wi wi-moonrise"
                        data-bs-toggle="tooltip"
                        title="wi wi-moonrise"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-moonrise">
                      wi wi-moonrise
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-moonset">
                      <i
                        className="wi wi-moonset"
                        data-bs-toggle="tooltip"
                        title="wi wi-moonset"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-moonset">
                      wi wi-moonset
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="typcn-rss-outline">
                      <i
                        className="wi wi-refresh"
                        data-bs-toggle="tooltip"
                        title="typcn typcn-rss-outline"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="typcn-rss-outline"
                    >
                      typcn typcn-rss-outline
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-refresh-alt">
                      <i
                        className="wi wi-refresh-alt"
                        data-bs-toggle="tooltip"
                        title="wi wi-refresh-alt"
                      ></i>
                    </li>
                    <UncontrolledTooltip
                      placement="top"
                      target="wi-refresh-alt"
                    >
                      wi wi-refresh-alt
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-umbrella">
                      <i
                        className="wi wi-umbrella"
                        data-bs-toggle="tooltip"
                        title="wi wi-umbrella"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-umbrella">
                      wi wi-umbrella
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-barometer">
                      <i
                        className="wi wi-barometer"
                        data-bs-toggle="tooltip"
                        title="wi wi-barometer"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-barometer">
                      wi wi-barometer
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-humidity">
                      <i
                        className="wi wi-humidity"
                        data-bs-toggle="tooltip"
                        title="wi wi-humidity"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-humidity">
                      wi wi-humidity
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-na">
                      <i
                        className="wi wi-na"
                        data-bs-toggle="tooltip"
                        title="wi wi-na"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-na">
                      wi wi-na
                    </UncontrolledTooltip>
                    <li className="icons-list-item" id="wi-train">
                      <i
                        className="wi wi-train"
                        data-bs-toggle="tooltip"
                        title="wi wi-train"
                      ></i>
                    </li>
                    <UncontrolledTooltip placement="top" target="wi-train">
                      wi wi-train
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

WeatherIcons.propTypes = {};

WeatherIcons.defaultProps = {};

export default WeatherIcons;
