import { Field, Form, FormikHelpers, FormikValues } from "formik";
import {
  FormikStepper,
  Step,
  StepperButton,
  StepperProgressItem,
} from "./FormikStepper";
import * as Yup from "yup";

export type JobApplication = {
  fullName: string;
  birth: string;
  country: string;
  city: string;
  phone: string;
  email: string;
  resume: string;
};

const validationSchemas = [
  Yup.object({
    fullName: Yup.string().required().label("Full Name"),
    birth: Yup.string().required().label("Date of Birth"),
    country: Yup.string().required().label("Country"),
    city: Yup.string().required().label("City"),
  }),
  Yup.object({
    phone: Yup.string().required().label("Phone Number"),
    email: Yup.string().required().label("Email Address"),
  }),
  Yup.object({
    resume: Yup.string().required().label("Resume"),
  }),
];

const inits: JobApplication = {
  fullName: "",
  birth: "",
  country: "",
  city: "",
  phone: "",
  email: "",
  resume: "",
};

function App() {
  const handleSubmit = (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    console.log("submit");
  };
  return (
    <div className="App">
      <FormikStepper
        initialValues={inits}
        onSubmit={handleSubmit}
        validationSchemas={validationSchemas}
      >
        <Form>
          <div className="stepper-progress">
            <StepperProgressItem>
              <span className="index">1</span>
              <span>Personal Info</span>
            </StepperProgressItem>
            <StepperProgressItem>
              <span className="index">2</span>
              <span>Contact Info</span>
            </StepperProgressItem>
            <StepperProgressItem>
              <span className="index">3</span>
              <span> Resume</span>
            </StepperProgressItem>
          </div>
          <div className="steps">
            <Step>
              <Field name="fullName" type="text" placeholder="Full Name" />
              <Field name="birth" type="text" placeholder="Date of Birth" />
              <Field name="country" type="text" placeholder="Country" />
              <Field name="city" type="text" placeholder="City" />
            </Step>
            <Step>
              <Field name="phone" type="text" placeholder="Phone Number" />
              <Field name="email" type="email" placeholder="Email Address" />
            </Step>
            <Step>
              <Field name="resume" type="text" placeholder="Resume" />
            </Step>
            <div className="buttons">
              <StepperButton.Prev>Back</StepperButton.Prev>
              <StepperButton.Next>Next</StepperButton.Next>
            </div>
          </div>
        </Form>
      </FormikStepper>
    </div>
  );
}

export default App;
