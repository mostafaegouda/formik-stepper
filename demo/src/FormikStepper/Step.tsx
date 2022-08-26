import {
  FC,
  HTMLAttributes,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";
import { StepperContext } from "./FormikStepper";
import { StepperState } from "./types";

type Props = { children: ReactNode };
export const Step: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  style,
  ...divProps
}) => {
  const { setSteps }: StepperState = useContext(StepperContext)!;
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSteps((old: any) => [...old, stepRef]);
  }, [setSteps]);

  return (
    <div
      style={{ display: "none", ...style }}
      className={"step " + className}
      ref={stepRef}
      {...divProps}
    >
      {children}
    </div>
  );
};
