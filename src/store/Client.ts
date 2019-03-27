import store from './Store';
import { topNavigationItems } from './../data';
import { getTopNavLinks } from './Action';

export const getTopNavigationLinks = () => {
    console.log('Inside getTopNavigationLinks method.' );
    store.dispatch(getTopNavLinks(topNavigationItems));
}