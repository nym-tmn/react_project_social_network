import { connect } from 'react-redux';

import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../redux/dialogs_page_reducer';

const mapStateToProps = (state) => {

	return {
		dialogsPage: state.dialogsPage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageActionCreator());
		},
		updateNewMessageText: (messageText) => {
			dispatch(updateNewMessageTextActionCreator(messageText));
		},
	};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
