import { connect } from 'react-redux';
import { AppHeader } from './AppHeader';
import { State } from '../../store';
import { getMenuItems } from '../../store/Action';

export default (connect(
    //Map state to props
    ({menuItems}:State) => ({menuItems}),
    //Map dispatch to props
    (dispatch) => ({
        getMenuItems: (payload: Array<string>) => {
            dispatch(getMenuItems(payload));
        }
    })
)(AppHeader as any) as any);
