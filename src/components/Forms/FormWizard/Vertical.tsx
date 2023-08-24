import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const steps = [
    {
      label: "Personal Information",
      description: (
        <span>
          <span className="control-group form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control required mb-3"
              placeholder="Name"
            />
          </span>
          <span className="control-group form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control required mb-3"
              placeholder="Email Address"
            />
          </span>
          <span className="control-group form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              className="form-control required mb-3"
              placeholder="Number"
            />
          </span>
          <span className="control-group form-group mb-0">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control required mb-3"
              placeholder="Address"
            />
          </span>
        </span>
      ),
    },
    {
      label: "Billing Information",
      description: (
        <span>
          <span className="table-responsive mg-t-20">
            <span className="table">
              <span>
                <span className="row valid border">
                  <span className="col-sm-6 text-dark boder-right">Cart Subtotal</span>
                  <span className="text-end col-sm-6 text-dark">$792.00</span>
                </span>
  
                <span className="row border border-bottom-0 border-top-0">
                  <span className="col-sm-6  boder-right">
                    <span className="text-dark ">Totals</span>
                  </span>
                  <span className="col-sm-6 text-end text-muted"> 
                    <span>$792.00</span>
                  </span>
                </span>
                <span className="row border">
                  <span className="col-sm-6  boder-right">
                    <span className="text-dark">Order Total</span>
                  </span>
                  
                    <span className="col-sm-6 price text-end text-dark mb-0">
                      $792.00
                   
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      ),
    },
    {
      label: "Payment Details ",
      description: (
        <span>
          <span className="form-group">
            <label className="form-label">Card Holder Name</label>
            <input
              type="text"
              className="form-control mb-3"
              id="name12"
              placeholder="First Name"
            />
          </span>
          <span className="form-group">
            <label className="form-label">Card number</label>
            <span className="input-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search for..."
              />
              <a className="btn btn-info mb-3">
                <i className="fa fa-cc-visa"></i> &nbsp;
                <i className="fa fa-cc-amex"></i> &nbsp;
                <i className="fa fa-cc-mastercard"></i>
              </a>
            </span>
          </span>
          <span className="row">
            <span className="col-sm-8">
              <span className="form-group mb-sm-0">
                <label className="form-label">Expiration</label>
                <span className="input-group">
                  <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="MM"
                    name="expiremonth"
                  />
                  <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="YY"
                    name="expireyear"
                  />
                </span>
              </span>
            </span>
            <span className="col-sm-4 ">
              <span className="form-group mb-0">
                <label className="form-label">
                  CVV <i className="fa fa-question-circle"></i>
                </label>
                <input type="number" className="form-control" required />
              </span>
            </span>
          </span>
        </span>
      ),
    },
  ];
  
  export function VerticalOrientationWizard() {
    const [activeStep, setActiveStep] = React.useState<any>(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep: number) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? <Typography variant="caption"></Typography> : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div className="vertical-button">
                    <Button className="me-2 mt-2 continue-btn" onClick={() => handleNext ()} >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      className="me-2 mt-2 back-btn "
                      disabled={index === 0}
                      onClick={() => handleBack ()}
                      
                    >
                      Back
                    </Button>&nbsp;&nbsp;
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button
              className="me-2 resets mt-2"
              onClick={handleReset}
              
            >
              Reset
            </Button>&nbsp;&nbsp;
          </Paper>
        )}
      </Box>
    );
  }