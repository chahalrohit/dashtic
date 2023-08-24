import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';
import { PageHeaders } from '../../../Shared/Prism/Prism';
import { LineChart, AreaChart, StackedBarChart, HoriStackedBarChart, Solid, Transparency, Gradient, HoriBarChart, HoriGroupedChart, DoughnutChart, PieChart } from './data';


const ChartjsCharts = () => (
  <div>
    <PageHeaders
      title="Chartjs Chart"
      home="Home"
      name="Charts"
      fonticonsname="Chartjs Chart"
    />

                        <Row>
                            <Col sm="12"md="6"xl="4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Bar Chart</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className='chart-js1'>
                                           
                                            <Solid/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm="12"md="6"xl="4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Transparency </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className='chart-js1'>
                                            
                                            <Transparency/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm="12"md="6"xl="4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Multicolored Bar Chart</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className='chart-js1'>
                                            
                                            <Gradient/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* <!-- / Row --> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col sm="12"md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Horizontal Bar Chart</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="chartjs-wrapper-demo">
                                            
                                            <HoriBarChart />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* <!-- col-6 --> */}
                            <Col sm="12"md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Horizontal Bar Chart Style2</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="chartjs-wrapper-demo">
                                          
                                            <HoriGroupedChart />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* <!-- col-6 --> */}
                        </Row>
                        {/* <!-- /Row --> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col sm="12"md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Vertical Stacked Bar Chart</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="chartjs-wrapper-demo">
                                          
                                            <StackedBarChart />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* <!-- col-6 --> */}
                            <Col sm="12"md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Horizontal Stacked Bar Chart</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="chartjs-wrapper-demo">
                                            
                                            <HoriStackedBarChart/>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* <!-- col-6 --> */}
                        </Row>
                        {/* <!-- /Row --> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col sm="12"md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Line Chart</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="chartjs-wrapper-demo">
                                            
                                            <LineChart />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* <!-- col-6 --> */}
                            <Col sm="12"md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Area Chart</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="chartjs-wrapper-demo">
                                            
                                            <AreaChart />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* <!-- col-6 --> */}
                        </Row>
                        {/* <!-- /Row --> */}

                        {/* <!-- Row --> */}
                        <Row>
                            <Col sm="12"md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Donut Chart</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="chartjs-wrapper-demo Chart">
                                            
                                            <DoughnutChart />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* <!-- col-6 --> */}
                            <Col sm="12"md="6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Pie Chart</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="chartjs-wrapper-demo Chart">
                                            <PieChart />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* <!-- col-6 --> */}
                        </Row> 
  </div>
);

ChartjsCharts.propTypes = {};

ChartjsCharts.defaultProps = {};

export default ChartjsCharts;
