import { AnyAction } from "redux";

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

// Function type overload

export function creatAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function creatAction<T extends string>(
  type: T,
  //Function type overload need to always have the same number of parameters. In this case payload is not necessary but have to be written so in this case is type void
  payload: void
): Action<T>;

export function creatAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

// export const creatAction = (type, payload) => ({ type, payload });
