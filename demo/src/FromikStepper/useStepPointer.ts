import { useReducer } from "react";
import { CurrentStepAction, CurrentStepActionKind } from "./types";

// Our reducer function that uses a switch statement to handle our actions
function stepPointerReducer(state: number, action: CurrentStepAction) {
  const { type, payload } = action;
  switch (type) {
    case CurrentStepActionKind.INIT:
      return 0;
    case CurrentStepActionKind.NEXT:
      return Math.min(payload!.stepsCount, state + 1);
    case CurrentStepActionKind.PREV:
      return Math.max(0, state - 1);
    default:
      return state;
  }
}

type HookReturn = (
  stepsCount: number
) => [number, () => void, () => void, () => void];

const useStepPointer: HookReturn = (stepsCount) => {
  const [stepPointer, dispatch] = useReducer(stepPointerReducer, -1);
  const increment = () =>
    dispatch({
      type: CurrentStepActionKind.NEXT,
      payload: { stepsCount },
    });
  const decrement = () =>
    dispatch({
      type: CurrentStepActionKind.PREV,
    });
  const init = () =>
    dispatch({
      type: CurrentStepActionKind.INIT,
    });
  return [stepPointer, init, increment, decrement];
};

export default useStepPointer;
