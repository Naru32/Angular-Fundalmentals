// step 1: create an action

import { createAction } from "@ngrx/store";

export const inc = createAction('[counter] increment')
export const dec = createAction('[counter] decrement')