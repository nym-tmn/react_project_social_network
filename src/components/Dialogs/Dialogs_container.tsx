import { ConnectedProps, connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../redux/redux-store';

import Dialogs from './Dialogs';
import {
	ActionsTypes,
	InitialStateType,
	sendMessageActionCreator,
	updateNewMessageTextActionCreator,
} from '../redux/dialogs_page_reducer';

type MapStateToPropsType = {
	dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
	sendMessage: () => void
	updateNewMessageText: (messageText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return {
		dialogsPage: state.dialogsPage,
	};
};

const mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>): MapDispatchToPropsType => {

	return {
		sendMessage: () => {
			dispatch(sendMessageActionCreator());
		},
		updateNewMessageText: (messageText: string) => {
			dispatch(updateNewMessageTextActionCreator(messageText));
		},
	};
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export interface DialogsPropsType extends PropsFromRedux {}

export default connector(Dialogs);
