import { createReducer, on } from "@ngrx/store"
import { decrement, increment, reset, double } from "./counter.action"

export interface CounterState {
    count: number
}

export const initialCounterState: CounterState = {
    count: 0
}

export const counterReducer = createReducer(
    initialCounterState,
    on(increment, (state) => ({ ...state, count: state.count + 1 })),
    on(double, (state) => ({ ...state, count: state.count + 2 })),
    on(decrement, (state) => ({ ...state, count: state.count - 1 })),
    on(reset, (state) => ({ ...state, count: 0 }))
);