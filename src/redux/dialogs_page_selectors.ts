import { InitialStateType } from './dialogs_page_reducer';
import { AppStateType } from './redux_store';

export const getDialogsPage = (state: AppStateType): InitialStateType => {
	return state.dialogsPage;
};
