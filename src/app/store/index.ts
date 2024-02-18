import {  createReducer, on } from "@ngrx/store";
import { toggleMenu } from "./actions";

export interface State {
  menu: {
    showMenu: boolean;
  }
}

export interface AppState {
  global: State;
}

const initialState: State = {
  menu: {
    showMenu: true
  }
};

export const STATE_KEY = 'global';

export default createReducer(
  initialState,
  on(toggleMenu, state => ({...state, menu: { showMenu: !state.menu.showMenu }})),
);
