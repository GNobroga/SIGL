import { createReducer, on } from "@ngrx/store";
import { Menu } from "../models/menu.model";
import { toggle } from "../actions/menu.actions";

const initialState: Menu = {
  show: false,
}

export const menuFeatureKey = 'menu';

export const menuReducer = createReducer(
  initialState,
  on(toggle, (state) => ({ show: !state.show })),
);
