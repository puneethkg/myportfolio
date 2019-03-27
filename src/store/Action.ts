import { createAction } from 'redux-actions';

import * as ActionTypes from './../models/ActionTypes';
import  { NavigationType }  from './../models';

export const getTopNavLinks = createAction<NavigationType[]>(ActionTypes.GET_TOP_NAV_LINKS);