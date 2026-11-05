import { createReducer, on } from "@ngrx/store";
import { dec, inc } from "./counter.action";

const count = 0;

// step 2: create reducer

export const counterReducer = createReducer(count,
    on(inc,(state)=> state + 1),
    on(dec,(state)=> state - 1)
)

export interface Appstore {
    count : number
}