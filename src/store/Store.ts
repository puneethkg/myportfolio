import { createStore, combineReducers, applyMiddleware } from 'redux';
import { handleActions } from 'redux-actions';
import thunk from 'redux-thunk';

import * as actions from './Action';
import { NavigationType } from './../models';

export default createStore (
    combineReducers<State>({
        topNavLinks: handleActions<NavigationType[]>({
            [actions.getTopNavLinks.toString()]: (state, action) => {
                return action.payload
            }
        },[])
    }),
    applyMiddleware(thunk)
);

export interface State {
    topNavLinks: Array<NavigationType>;
}