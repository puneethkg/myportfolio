import { createAction } from 'redux-actions';

export const getDeviceList = createAction<string[]>("GET_DEVICE_LIST");