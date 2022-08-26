import { FormikConfig, FormikValues } from "formik";
import { Dispatch, RefObject, SetStateAction } from "react";
import { OptionalObjectSchema } from "yup/lib/object";

export interface StepperState {
  steps: RefObject<HTMLDivElement>[];
  setSteps: Dispatch<SetStateAction<RefObject<HTMLDivElement>[]>>;
  setProgressItems: Dispatch<SetStateAction<RefObject<HTMLDivElement>[]>>;
  stepsCount: number;
  currentStep: number;
  handleNext: () => void;
  handlePrev: () => void;
  currentSchema: OptionalObjectSchema<any>;
  isLastStep: boolean;
  isFirstStep: boolean;
}

export interface FormikStepperProps extends FormikConfig<FormikValues> {
  validationSchemas: OptionalObjectSchema<any>[];
}

export enum CurrentStepActionKind {
  NEXT = "NEXT",
  PREV = "PREV",
  INIT = "INIT",
}

export interface CurrentStepAction {
  type: CurrentStepActionKind;
  payload?: {
    stepsCount: number;
  };
}

export type StepPointerHook = (
  stepsCount: number
) => [number, () => void, () => void, () => void];
