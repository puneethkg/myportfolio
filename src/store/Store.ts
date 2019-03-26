import { createStore, combineReducers, applyMiddleware } from 'redux';
import { handleActions } from 'redux-actions';
import thunk from 'redux-thunk';

import * as actions from './Action'; 

export default createStore (
    combineReducers<State>({
        menuItems: handleActions<string[]>({
            [actions.getMenuItems.toString()]: (state, action) => {
                return action.payload
            }
        },["Home","About Me"])
    }),
    applyMiddleware(thunk)
);

export interface State {
    menuItems: Array<string>;
}