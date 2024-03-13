import appReducer, { actions } from './app_reducer';

const state = {
	initialized: false as boolean,
};

test('value of initialized should be changed to true', () => {
	const action = actions.initializedSuccessActionCreator();
	const newState = appReducer(state, action);
	expect(newState.initialized).toBe(true);
});
