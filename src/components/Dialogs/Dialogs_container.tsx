import { ConnectedProps, connect } from 'react-redux';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux_store';

import Dialogs from './Dialogs';
import { InitialStateType, actions } from '../../redux/dialogs_page_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getDialogsPage } from '../../redux/dialogs_page_selectors';

type MapStateToPropsType = {
	dialogsPage: InitialStateType
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return {
		dialogsPage: getDialogsPage(state),
	};
};

const connector = connect(mapStateToProps, {
	sendMessage: actions.sendMessageActionCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
export interface DialogsPropsType extends PropsFromRedux { }

export default compose(
	withAuthRedirect,
	connector,
)(Dialogs);
