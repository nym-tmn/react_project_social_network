import { connect } from 'react-redux';

import Dialogs from './Dialogs';
import { InitialStateType, sendMessageActionCreator, updateNewMessageTextActionCreator } from '../redux/dialogs_page_reducer';
import { AppDispatch, AppStateType } from '../redux/redux-store';

type MapStateToPropsType = {
	dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
	sendMessage: () => void
	updateNewMessageText: (messageText: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return {
		dialogsPage: state.dialogsPage,
	};
};

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {

	return {
		sendMessage: () => {
			dispatch(sendMessageActionCreator());
		},
		updateNewMessageText: (messageText: string) => {
			dispatch(updateNewMessageTextActionCreator(messageText));
		},
	};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
