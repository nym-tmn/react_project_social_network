
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../redux/dialogs_page_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
};

let mapDispatchToProps = (dispatch /* store.dispatch.bind(store) */) => {
	return {
		sendMessage: () => {
			dispatch(sendMessageActionCreator());
		},
		updateNewMessageText: (messageText) => {
			dispatch(updateNewMessageTextActionCreator(messageText));
		}
	}
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;