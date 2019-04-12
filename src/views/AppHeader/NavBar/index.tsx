import { connect } from 'react-redux';

import { NavBar } from './NavBar';
import { State } from '../../../store';
import { getTopNavLinks } from '../../../store/Action';
import { NavigationType } from '../../../models';

export default (connect(
    //Map state to props
    ({topNavLinks}:State) => ({topNavLinks}),
    //Map dispatch to props
    (dispatch) => ({
        getTopNavLinks: (payload: Array<NavigationType>) => {
            dispatch(getTopNavLinks(payload));
        }
    })
)(NavBar as any) as any);
