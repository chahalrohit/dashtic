import React from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Polyline,
  Rectangle,
  Popup,
  Circle,
  Polygon,
} from "react-leaflet";
import { Card, CardBody, CardHeader,CardTitle, Col, Row } from "reactstrap";
import {PageHeaders} from "../../../../Shared/Prism/Prism" 

const LeafletMaps = () => {
  const fillBlueOptions = { fillColor: "blue" };
  const blackOptions = { color: "black" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };
  const position:any= [51.505, -0.09];
  //Popups
  const polyline:any = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  const multiPolyline:any = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ];

  const polygon:any = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];

  const multiPolygon:any = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ];

  const rectangle:any = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  //Circle
  const redOptions:any = { color: "red" };
  const center:any = [51.505, -0.09];

  return (
    <div>
      
      <PageHeaders
      title="leaflet Maps"
      home="Home"
      name="Maps"
      fonticonsname="leaflet Maps"
    />
      <Row className="row-sm">
        <Col lg="12">
          <Card className="mg-b-20" id="map">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
            </CardHeader>
            <CardBody>
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                className="ht-300"
                id="leaflet1"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
            </CardBody>
          </Card>
        </Col>
        <Col lg="12">
          <Card className="mg-b-20" id="map2">
            <CardHeader>
              <CardTitle>With Popup</CardTitle>
            </CardHeader>
            <CardBody>
              <MapContainer
                center={center}
                zoom={13}
                scrollWheelZoom={false}
                className="ht-300 ht-sm-300 ht-md-400 mb-0"
                id="leaflet3"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle
                  center={center}
                  pathOptions={fillBlueOptions}
                  radius={200}
                />
                <CircleMarker
                  center={[51.51, -0.12]}
                  pathOptions={redOptions}
                  radius={20}
                >
                  <Popup>Popup in CircleMarker</Popup>
                </CircleMarker>
                <Polyline pathOptions={limeOptions} positions={polyline} />
                <Polyline pathOptions={limeOptions} positions={multiPolyline} />
                <Polygon pathOptions={purpleOptions} positions={polygon} />
                <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
                <Rectangle bounds={rectangle} pathOptions={blackOptions} />
              </MapContainer>
            </CardBody>
          </Card>
        </Col>
        <Col lg="12">
          <div className="card" id="map1">
            <CardHeader>
              <CardTitle>Map With Circle</CardTitle>
            </CardHeader>
            <CardBody>
              <MapContainer
                center={center}
                zoom={13}
                scrollWheelZoom={false}
                className="ht-300"
                id="leaflet2"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <CircleMarker
                  center={[51.51, -0.12]}
                  pathOptions={redOptions}
                  radius={20}
                >
                  <Popup>Popup in CircleMarker</Popup>
                </CircleMarker>
              </MapContainer>
            </CardBody>
          </div>
        </Col>
      </Row>
    </div>
  );
};
LeafletMaps.propTypes = {};

LeafletMaps.defaultProps = {};

export default LeafletMaps;
