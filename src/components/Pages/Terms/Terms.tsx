import React from 'react';
import { Button, Card, CardBody,CardTitle, CardHeader, Col, Row } from 'reactstrap';
import { PageHeaders } from '../../../Shared/Prism/Prism';

const Terms = () => (
  <div>
      <PageHeaders
      title="Terms and Conditions"
      home="Home"
      name="Pages"
      fonticonsname="Terms and Conditions"
    />
                        <Row className="row">
                            <Col md="12">
                                <Card className="overflow-hidden">
                                    <CardHeader>
                                        <CardTitle tag="h4">Welcome to Dashtic</CardTitle>
                                    </CardHeader>
                                    <CardBody>

                                        <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
                                            truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="12">
                                <Card className="overflow-hidden">
                                    <CardHeader>
                                        <CardTitle tag="h4">Using Our Services</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
                                            truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="12">
                                <Card className="overflow-hidden">
                                    <CardHeader>
                                        <CardTitle tag="h4">Privacy policy</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
                                            truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="12">
                                <Card className="overflow-hidden">
                                    <CardHeader>
                                        <CardTitle tag="h4">Copyright</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
                                            truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="12">
                                <Card className="overflow-hidden">
                                    <CardHeader>
                                        <CardTitle tag="h4">Terms and Conditions</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
                                            truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences</p>
                                        <ul className="list-style3">
                                            <li>ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores </li>
                                            <li>quas molestias excepturi sint occaecati cupiditate non provident</li>
                                            <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque</li>
                                            <li>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates</li>
                                            <li>epudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus</li>
                                            <li>ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</li>
                                        </ul>
                                    </CardBody>
                                </Card>
                                <Card className="overflow-hidden">
                                    <CardHeader>
                                        <CardTitle tag="h4">Was this information is Helpful?</CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="terms">
                                            <Button color="" className="me-1 btn btn-primary text-white px-6">Yes</Button>
                                            <Button color="" className="me-1 btn btn-secondary text-white px-6">No</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
  </div>
);

Terms.propTypes = {};

Terms.defaultProps = {};

export default Terms;
