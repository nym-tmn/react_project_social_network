import { MessagesDataType, DialogItemDataType } from '../types/types';
import dialogsReducer, { actions } from './dialogs_page_reducer';

const state = {
	messagesToMeData: [
		{ id: 1, messageText: 'Yo!' },
		{ id: 2, messageText: 'I am fine!' },
		{ id: 3, messageText: 'I am going for a walk. Are you with me? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi maxime adipisci incidunt cumque ratione corporis recusandae, iure nihil quasi optio nobis autem maiores atque reiciendis. Debitis ut, voluptate neque dolor laborum est distinctio assumenda eum, quaerat nesciunt repellendus expedita provident culpa vero veniam repellat. Magnam quo vitae reiciendis dignissimos.' },
	] as Array<MessagesDataType>,
	messagesFromMeData: [
		{ id: 1, messageText: 'Yo!' },
		{ id: 2, messageText: 'I am fine!' },
		{ id: 3, messageText: 'I am going for a walk. Are you with me? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi maxime adipisci incidunt cumque ratione corporis recusandae, iure nihil quasi optio nobis autem maiores atque reiciendis. Debitis ut, voluptate neque dolor laborum est distinctio assumenda eum, quaerat nesciunt repellendus expedita provident culpa vero veniam repellat. Magnam quo vitae reiciendis dignissimos.' },
	] as Array<MessagesDataType>,
	dialogItemData: [
		{ id: 1, name: 'Robert_lastName', avatar: require('../components/images/dialog_avatar.png') },
		{ id: 2, name: 'Sophia_lastName', avatar: require('../components/images/dialog_avatar.png') },
		{ id: 3, name: 'Alex_lastName', avatar: require('../components/images/dialog_avatar.png') },
		{ id: 4, name: 'Andrew_lastName', avatar: require('../components/images/dialog_avatar.png') },
		{ id: 5, name: 'John_lastName', avatar: require('../components/images/dialog_avatar.png') },
		{ id: 6, name: 'Mary_lastName', avatar: require('../components/images/dialog_avatar.png') },
	] as Array<DialogItemDataType>,
};

test('length of messagesFromMeData should be incremented', () => {
	const action = actions.sendMessageActionCreator('some message');
	const newState = dialogsReducer(state, action);
	expect(newState.messagesFromMeData.length).toBe(4);
});

test('message of messagesFromMeData should be correct', () => {
	const action = actions.sendMessageActionCreator('some message');
	const newState = dialogsReducer(state, action);
	expect(newState.messagesFromMeData[3].messageText).toBe('some message');
});
