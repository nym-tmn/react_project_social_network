
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
	messagesToMeData: [
		{ id: 1, messageText: 'Yo!' },
		{ id: 2, messageText: 'I am fine!' },
		{ id: 3, messageText: 'I am going for a walk. Are you with me? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi maxime adipisci incidunt cumque ratione corporis recusandae, iure nihil quasi optio nobis autem maiores atque reiciendis. Debitis ut, voluptate neque dolor laborum est distinctio assumenda eum, quaerat nesciunt repellendus expedita provident culpa vero veniam repellat. Magnam quo vitae reiciendis dignissimos.' },
	],
	messagesFromMeData: [
		{ id: 1, messageText: 'Yo!' },
		{ id: 2, messageText: 'I am fine!' },
		{ id: 3, messageText: 'I am going for a walk. Are you with me? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi maxime adipisci incidunt cumque ratione corporis recusandae, iure nihil quasi optio nobis autem maiores atque reiciendis. Debitis ut, voluptate neque dolor laborum est distinctio assumenda eum, quaerat nesciunt repellendus expedita provident culpa vero veniam repellat. Magnam quo vitae reiciendis dignissimos.' },
	],
	newMessageFromMe: 'new message',
	dialogItemData: [
		{ id: 1, name: 'Robert_lastName', avatar: require('./../images/dialog_avatar.png') },
		{ id: 2, name: 'Sophia_lastName', avatar: require('./../images/dialog_avatar.png') },
		{ id: 3, name: 'Alex_lastName', avatar: require('./../images/dialog_avatar.png') },
		{ id: 4, name: 'Andrew_lastName', avatar: require('./../images/dialog_avatar.png') },
		{ id: 5, name: 'John_lastName', avatar: require('./../images/dialog_avatar.png') },
		{ id: 6, name: 'Mary_lastName', avatar: require('./../images/dialog_avatar.png') },
	],
};

const dialogsReducer = (state = initialState, action) => {

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