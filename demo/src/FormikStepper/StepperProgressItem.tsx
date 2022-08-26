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

type Props = { children?: ReactNode };
const StepperProgressItem: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...divProps
}) => {
  const { setProgressItems }: StepperState = useContext(StepperContext)!;
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setProgressItems((old: any) => [...old, itemRef]);
  }, [setProgressItems]);

  return (
    <div ref={itemRef} data-status="" {...divProps}>
      {children}
    </div>
  );
};
export default StepperProgressItem;
