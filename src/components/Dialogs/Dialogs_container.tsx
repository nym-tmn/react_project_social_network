import { ConnectedProps, connect } from 'react-redux';
import { AppStateType } from '../redux/redux-store';

import Dialogs from './Dialogs';
import {	InitialStateType, actions } from '../redux/dialogs_page_reducer';

type MapStateToPropsType = {
	dialogsPage: InitialStateType
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return {
		dialogsPage: state.dialogsPage,
	};
};

const connector = connect(mapStateToProps, {
	sendMessage: actions.sendMessageActionCreator,
	updateNewMessageText: actions.updateNewMessageTextActionCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
export interface DialogsPropsType extends PropsFromRedux {}

export default connector(Dialogs);