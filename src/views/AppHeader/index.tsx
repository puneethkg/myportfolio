import { connect } from 'react-redux';

import AppHeader from './AppHeader';
import { State } from '../../store';
import { getTopNavLinks } from '../../store/Action';
import { NavigationType } from '../../models';

export default (connect(
    //Map state to props
    ({topNavLinks}:State) => ({topNavLinks}),
    //Map dispatch to props
    (dispatch) => ({
        getTopNavLinks: (payload: Array<NavigationType>) => {
            dispatch(getTopNavLinks(payload));
        }
    })
)(AppHeader as any) as any);