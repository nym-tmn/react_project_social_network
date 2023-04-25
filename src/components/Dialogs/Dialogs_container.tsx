import { connect } from 'react-redux';

import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../redux/dialogs_page_reducer';
import { AppDispatch, RootState } from '../redux/redux-store';

const mapStateToProps = (state: RootState) => {

	return {
		dialogsPage: state.dialogsPage,
	};
};

const mapDispatchToProps = (dispatch: AppDispatch) => {

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
