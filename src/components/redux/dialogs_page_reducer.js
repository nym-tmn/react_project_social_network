
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

	switch (action.type) {

		case 'SEND-MESSAGE':
			let newMessageFromMe = {
				id: 4,
				messageText: state.newMessageFromMe,
			};
			state.messagesFromMeData.push(newMessageFromMe);
			state.newMessageFromMe = '';
			return state;
		case 'UPDATE-NEW-MESSAGE-TEXT':
			state.newMessageFromMe = action.newMessageFromMe;
			return state;
		default:
			return state;

	}

};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (messageText) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageFromMe: messageText });

export default dialogsReducer;