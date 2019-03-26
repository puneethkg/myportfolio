import { createAction } from 'redux-actions';

export const getMenuItems = createAction<string[]>("GET_MENU_ITEMS");