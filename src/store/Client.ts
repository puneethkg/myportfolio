import store from './Store';
import menuItems from './../stub/MenuItems';
import { getMenuItems } from './Action';

export const getMenu = () => {
    console.log(menuItems);
    store.dispatch(getMenuItems(menuItems));
}