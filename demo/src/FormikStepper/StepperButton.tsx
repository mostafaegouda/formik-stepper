import { ButtonHTMLAttributes, FC, ReactNode, useContext } from "react";
import { StepperContext } from "./FormikStepper";
import { StepperState } from "./types";

type Props = { children?: ReactNode };
const Next: FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  type,
  onClick,
  ...btnProps
}) => {
  const stepperState: StepperState | null = useContext(StepperContext);
  return (
    <button
      className={"stepper-next-btn " + className}
      type="submit"
      data-btn-submit={stepperState?.isLastStep}
      {...btnProps}
    >
      {stepperState?.isLastStep ? "Submit" : children}
    </button>
  );
};
const Prev: FC<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  type,
  onClick,
  ...btnProps
}) => {
  const stepperState: StepperState | null = useContext(StepperContext);
  if (!stepperState?.isFirstStep) {
    return (
      <button
        className={"stepper-next-btn " + className}
        type="button"
        onClick={stepperState?.incrementCurrentStep}
        {...btnProps}
      >
        {children}
      </button>
    );
  } else return null;
};

export const StepperButton = {
  Next,
  Prev,
};
