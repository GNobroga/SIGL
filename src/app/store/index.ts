import { createAction, createReducer, on } from "@ngrx/store";

export interface AppState {
  showMenu: boolean;
}

export const toggleMenu = createAction('[Menu] Toggle');

const initialState: AppState = {
  showMenu: false,
};

export default createReducer(
  initialState,
  on(toggleMenu, state => ({...state, showMenu: !state.showMenu })),
);
