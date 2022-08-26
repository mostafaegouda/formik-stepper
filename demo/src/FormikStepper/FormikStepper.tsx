import { Formik } from "formik";
import { FC, RefObject, createContext, useEffect, useState } from "react";
import { FormikStepperProps, StepperState } from "./types";
import useStepPointer from "./useStepPointer";

export const StepperContext = createContext<StepperState | null>(null);

const FormikStepper: FC<FormikStepperProps> = ({
  validationSchemas,
  onSubmit,
  ...formikProps
}) => {
  const [steps, setSteps] = useState<RefObject<HTMLDivElement>[]>([]);
  const stepsCount = steps.length;
  const [progressItems, setProgressItems] = useState<
    RefObject<HTMLDivElement>[]
  >([]);
  const [
    currentStep,
    initCurrentStep,
    incrementCurrentStep,
    decrementCurrentStep,
  ] = useStepPointer(stepsCount);
  const currentSchema = validationSchemas[currentStep];

  const isLastStep = currentStep === stepsCount - 1;
  const isFirstStep = currentStep === 0;
  const handleNext = incrementCurrentStep;
  const handlePrev = decrementCurrentStep;

  // empty steps and progress items on unmount to prevent pushing the same ref multiple times
  useEffect(() => {
    return () => {
      setSteps([]);
      setProgressItems([]);
    };
  }, []);

  // everytime the refs lists change reinitialize the current step (not sure if there is a better way)
  useEffect(() => {
    initCurrentStep();
  }, [steps, progressItems]);

  // when current step changes, get the new step's schema and check whether we have reached last step or not
  useEffect(() => {
    if (steps[currentStep]) {
      steps.forEach(({ current: step }, i) => {
        step!.style.display = currentStep === i ? "" : "none";
      });
    }
    if (progressItems[currentStep]) {
      progressItems.forEach(({ current: item }, i) => {
        console.log(i === currentStep);
        if (i === currentStep) item!.dataset.status = "active";
        else if (i < currentStep) item!.dataset.status = "visited";
        else item!.dataset.status = "";
      });
    }
  }, [currentStep]);

  return (
    <StepperContext.Provider
      value={{
        steps,
        setSteps,
        setProgressItems,
        stepsCount,
        currentStep,
        handleNext,
        handlePrev,
        currentSchema,
        isLastStep,
        isFirstStep,
      }}
    >
      <Formik
        validationSchema={currentSchema}
        onSubmit={isLastStep ? onSubmit : handleNext}
        {...formikProps}
      />
    </StepperContext.Provider>
  );
};

export default FormikStepper;
