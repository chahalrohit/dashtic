import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import { PageHeaders } from "../../../../Shared/Prism/Prism";
import USAMap from "react-usa-map"; //Usa MAp Plugin
import {Basicmarkers, Custommarkers, MapAnnotation, Europemap, Shapeworldmap, WorldMap } from "./data"
const SimpleMaps = () =>{ 
	
  let mapHandler = (event: any ) => {
	  alert(event.target.dataset.name);
	};

	let statesCustomConfig = () => {
		return {

			"AL": {
				fill: '#d6d6da'
			},
			"AK": {
				fill: '#d6d6da'
			},
			"AS": {
				fill: '#d6d6da'
			},
			"AZ": {
				fill: '#d6d6da'
			},
			"AR": {
				fill: '#d6d6da'
			},
			"CA": {
				fill: '#d6d6da'
			},
			"CO": {
				fill: '#d6d6da'
			},
			"CT": {
				fill: '#d6d6da'
			},
			"DE": {
				fill: '#d6d6da'
			},
			"DC": {
				fill: '#d6d6da'
			},
			"FL": {
				fill: '#d6d6da'
			},
			"FM": {
				fill: '#d6d6da'
			},
			"GA": {
				fill: '#d6d6da'
			},
			"GU": {
				fill: '#d6d6da'
			},
			"HI": {
				fill: '#d6d6da'
			},
			"ID": {
				fill: '#d6d6da'
			},
			"IL": {
				fill: '#d6d6da'
			},
			"IN": {
				fill: '#d6d6da'
			},
			"IA": {
				fill: '#d6d6da'
			},
			"KS": {
				fill: '#d6d6da'
			},
			"KY": {
				fill: '#d6d6da'
			},
			"LA": {
				fill: '#d6d6da'
			},
			"ME": {
				fill: '#d6d6da'
			},
			"MH": {
				fill: '#d6d6da'
			},
			"MD": {
				fill: '#d6d6da'
			},
			"MA": {
				fill: '#d6d6da'
			},
			"MI": {
				fill: '#d6d6da'
			},
			"MN": {
				fill: '#d6d6da'
			},
			"MS": {
				fill: '#d6d6da'
			},
			"MO": {
				fill: '#d6d6da'
			},
			"MT": {
				fill: '#d6d6da'
			},
			"NE": {
				fill: '#d6d6da'
			},
			"NV": {
				fill: '#d6d6da'
			},
			"NH": {
				fill: '#d6d6da'
			},
			"NJ": {
				fill: '#d6d6da'
			},
			"NM": {
				fill: '#d6d6da'
			},
			"NY": {
				fill: '#d6d6da'
			},
			"NC": {
				fill: '#d6d6da'
			},
			"ND": {
				fill: '#d6d6da'
			},
			"MP": {
				fill: '#d6d6da'
			},
			"OH": {
				fill: '#d6d6da'
			},
			"OK": {
				fill: '#d6d6da'
			},
			"OR": {
				fill: '#d6d6da'
			},
			"PW": {
				fill: '#d6d6da'
			},
			"PA": {
				fill: '#d6d6da'
			},
			"PR": {
				fill: '#d6d6da'
			},
			"RI": {
				fill: '#d6d6da'
			},
			"SC": {
				fill: '#d6d6da'
			},
			"SD": {
				fill: '#d6d6da'
			},
			"TN": {
				fill: '#d6d6da'
			},
			"TX": {
				fill: '#d6d6da'
			},
			"UM": {
				fill: '#d6d6da'
			},
			"UT": {
				fill: '#d6d6da'
			},
			"VT": {
				fill: '#d6d6da'
			},
			"VA": {
				fill: '#d6d6da'
			},
			"VI": {
				fill: '#d6d6da'
			},
			"WA": {
				fill: '#d6d6da'
			},
			"WV": {
				fill: '#d6d6da'
			},
			"WI": {
				fill: '#d6d6da'
			},
			"WY": {
				fill: '#d6d6da'
			},
		};
	};

  return(
  <div>
    <PageHeaders
      title="Simple Maps"
      home="Home"
      name="Maps"
      fonticonsname="Simple Maps"
    />
    {/* <!--End Page header--> */}

    {/* <!-- Row --> */}
    <Row>
      <Col lg="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">World Map</CardTitle>
          </CardHeader>
          
          <CardBody>
            <div
              id="vmap2"
              className="stateh"
              style={{ height: "300px" }}
            >
              <WorldMap />
            </div>
          </CardBody>
        </Card>
      </Col>
      {/* <!-- end col --> */}
    </Row>
    {/* <!-- End row --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col lg="6">
        <Card className="m-b-20">
          <CardHeader>
            <CardTitle tag="h3">USA Map </CardTitle>
          </CardHeader>
          <CardBody>
            <div
              className="us-state-map"
              style={{ height: "300px" }}
            >
          <USAMap onClick={()=>mapHandler} customize={statesCustomConfig()} onChange={()=>mapHandler}/>
                
            </div>
          </CardBody>
        </Card>
      </Col>
      {/* <!-- end col --> */}

      <Col lg="6">
        <Card className="m-b-20">
          <CardHeader>
            <CardTitle tag="h3">Graticule Map</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="vmap3"
              className="stateh"
              style={{ height: "300px" }}
            ><Shapeworldmap /></div>
          </CardBody>
        </Card>
      </Col>
      {/* <!-- end col --> */}

      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Canada Map</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="vmap4"
              className="stateh"
              style={{ height: "300px" }}
            ><MapAnnotation /></div>
          </CardBody>
        </Card>
      </Col>
      {/* <!-- end col --> */}
      <Col lg="6">
        <Card className="m-b-20">
          <CardHeader>
            <CardTitle tag="h3">Basic Markers Map</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="vmap5"
              className="stateh"
              style={{ height: "300px" }}
            ><Basicmarkers /> </div>
          </CardBody>
        </Card>
      </Col>
      {/* <!-- end col --> */}

      <Col lg="6">
        <Card className="m-b-20">
          <CardHeader>
            <CardTitle tag="h3">Europe Map</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="vmap6"
              className="stateh"
              style={{ height: "300px" }}
            >
            <Europemap />
            </div>
          </CardBody>
        </Card>
      </Col>
      {/* <!-- end col --> */}

      <Col lg="6">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Custom Markers Map</CardTitle>
          </CardHeader>
          <CardBody>
            <div
              id="vmap7"
              className="stateh"
              style={{ height: "300px" }}
            ><Custommarkers /></div>
          </CardBody>
        </Card>
      </Col>
      {/* <!-- end col --> */}
    </Row>
  </div>
);
}

SimpleMaps.propTypes = {};

SimpleMaps.defaultProps = {};

export default SimpleMaps;
