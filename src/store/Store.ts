import { createStore, combineReducers, applyMiddleware } from 'redux';
import { handleActions } from 'redux-actions';
import thunk from 'redux-thunk';

import * as actions from './Action'; 

export default createStore (
    combineReducers<State>({
        deviceList: handleActions<string[]>({
            [actions.getDeviceList.toString()]: (state, action) => {
                return action.payload
            }
        },[])
    }),
    applyMiddleware(thunk)
);

export interface State {
    deviceList: string[];
}