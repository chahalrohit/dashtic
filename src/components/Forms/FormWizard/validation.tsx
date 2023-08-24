import React, { useState } from "react";
import { Col, Form, FormGroup, InputGroup, Input,Row, Button, Label, FormText } from "reactstrap";
import validator from "validator";

function Name({ nextStep, handleFormData, values }:any) {
    const [error, setError] = useState(false);
    const submitFormData = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (
            validator.isEmpty(values.firstName) ||
            validator.isEmpty(values.lastName)
        ) {
            setError(true);
        } else {
            nextStep();
        }
    };

    return (
        <div >
            <Form onSubmit={submitFormData} className="row">
                <p className='mg-b-20'>Try the keyboard navigation by clicking arrow left or right!</p>

                <FormGroup className="col-md-5 col-lg-4">

                    <Label>First Name</Label>
                    <Input
                        style={{ border: error ? "2px solid red" : "" }}
                        name="firstName"
                        defaultValue={values.firstName}
                        type="text"
                        placeholder="First Name"
                        onChange={handleFormData("firstName")}
                        
                    />
                    {error ? (
                        <span style={{ color: 'red' }}>
                            This value is required
                        </span>
                    ) : (
                        ""
                    )}
                </FormGroup>
                <FormGroup className="col-md-5 col-lg-4">
                    <Label>Last Name</Label>
                    <Input
                        style={{ border: error ? "2px solid red" : "" }}
                        name="lastName"
                        defaultValue={values.lastName}
                        type="text"
                        placeholder="Last Name"
                        onChange={handleFormData("lastName")}
                        
                    />
                    {error ? (
                        <span style={{ color: 'red' }}>
                            This value is required
                        </span>
                    ) : (
                        ""
                    )}
                </FormGroup>
                <div className="">
                    <Button color="" type="submit" className="btn mt-3 btn-primary d-flex ms-auto ">
                        Continue
                    </Button>
                </div>
            </Form>
        </div>
    );
}
function StepTwo({ nextStep, handleFormData, prevStep, values }:any) {

    const [error, setError] = useState(false);

  const submitFormData = (e:any) => {
    e.preventDefault();

    if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
    return (
        <div>
            <Form onSubmit={submitFormData}>
            <FormGroup className="mb-3 form-group">
          <Label>Age</Label>
          <Input
            style={{ border: error ? "2px solid red" : "" }}
            type="number"
            defaultValue={values.age}
            placeholder="Age"
            name="number"
            onChange={handleFormData("age")}
            
          />
          {error ? (
            <FormText style={{ color: "red" }}>
              This is a required field
            </FormText>
          ) : (
            ""
          )}
        </FormGroup>
        <FormGroup className="mb-3 form-group">
          <Label>Email</Label>
          <Input
            style={{ border: error ? "2px solid red" : "" }}
            name="email"
            type="email"
            defaultValue={values.email}
            placeholder="email"
            onChange={handleFormData("email")}
            required
          />
          {error ? (
            <FormText style={{ color: "red" }}>
              This is a required field
            </FormText>
          ) : (
            ""
          )}
        </FormGroup>
                <div>
                    <Button color="" className="float-start btn btn-primary" onClick={prevStep}>
                        Previous
                    </Button>

                    <Button color="" className="float-end btn btn-primary" type="submit" onClick={nextStep}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};
function Final({ nextStep, handleFormData, prevStep, values }:any) {
    const [error, setError] = useState(false);

    const submitFormData = (e:any) => {
        e.preventDefault();

        if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
            setError(true);
        } else {
            nextStep();
        }
    };
    return (
        <div>
            <section>
                <FormGroup className="" onSubmit={submitFormData}>
                    <Label className="mb-2">CardHolder Name</Label>
                    <Input className="mb-3"
                        style={{ border: error ? "2px solid red" : "" }}
                        type="text"
                        placeholder="First Name"
                        
                    />
                </FormGroup>
                <FormGroup className="">
                    <Label className="mb-2">Card number</Label>
                    <InputGroup className="mb-3">
                        <Input
                            type="number"
                            className="form-control"
                            placeholder="Search for..."
                            
                        />
                        <span className="input-group-append">
                            <Button color="info" className="" type="button">
                                <i className="fa fa-cc-visa"></i> &nbsp;{" "}
                                <i className="fa fa-cc-amex"></i> &nbsp;
                                <i className="fa fa-cc-mastercard"></i>
                            </Button>
                        </span>
                    </InputGroup>
                </FormGroup>
                <Row>
                    <Col sm={8}>
                        <FormGroup className="mb-sm-0">
                            <Label className="mb-2">Expiration</Label>
                            <InputGroup className="mb-3">
                                <Input
                                    type="number"
                                    className=""
                                    placeholder="MM"
                                    name="expiremonth"
                                    
                                />
                                <Input
                                    type="number"
                                    className=""
                                    placeholder="YY"
                                    name="expireyear"
                                    
                                />
                            </InputGroup>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup className="mb-0">
                            <Label className="mb-2">
                                CVV <i className="fa fa-question-circle"></i>
                            </Label>
                            <Input type="number" className="" required />
                        </FormGroup>
                    </Col>
                </Row>
            </section>
            <div>
                <Button color=""
                    className="float-start btn btn-primary mt-2"
                    onClick={prevStep}
                >
                    Previous
                </Button>

                <Button
                color=""
                    className="float-end btn btn-primary mt-2"
                    disabled
                    type="submit"
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};
export function WizardForm() {
    const [step, setstep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })
    const nextStep = () => {
        setstep(step + 1);
    };
    const prevStep = () => {
        setstep(step - 1);
    };
    const handleInputData = (input:any) => (e:any) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [input]: value
        }));
    }
    switch (step) {
        case 1:
            return (
                <div className="custom-margin">
                    <Name nextStep={nextStep} handleFormData={handleInputData} values={formData} />
                </div>
            );
        default:
            return (
                <div className="custom-margin">
                    <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
                </div>
            );
        case 3:
            return (
                <div className="">
                    <div className="custom-margin">
                        <Final values={formData} />
                    </div>
                </div>
            );
    }
}