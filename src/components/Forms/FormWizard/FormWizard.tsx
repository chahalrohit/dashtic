import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Row, } from 'reactstrap';
import { PageHeaders } from '../../../Shared/Prism/Prism';
import { WizardForm } from './validation';
import { VerticalOrientationWizard } from './Vertical';


const FormWizard = () => (
    <div>
        <PageHeaders
            title="Form-wizard"
            home="Home"
            name="Forms"
            fonticonsname="Form-wizard"
        />

        <Row>
            <Col md="12">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Basic Wizard With Validation
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                        <WizardForm />
                    </CardBody>
                </Card>
            </Col>
        </Row>
        {/* <!--/Row--> */}

        {/* <!--Row--> */}
        <Row>
            <Col md="12">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Vertical Orientation Wizard
                        </CardTitle>
                    </CardHeader>
                    <CardBody className='formvertical'>
                        <VerticalOrientationWizard />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
);

FormWizard.propTypes = {};

FormWizard.defaultProps = {};

export default FormWizard;
