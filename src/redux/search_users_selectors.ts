// For example how to use lilbrary reselector
// import { createSelector } from 'reselect';
import { UsersDataType } from '../types/types';
import { AppStateType } from './redux_store';

export const getUsersData = (state: AppStateType): Array<UsersDataType> => {
	return state.searchUsersPage.usersData;
};

// For example how to use lilbrary reselector
// export const getUsersDataReselector = createSelector(getUsersData, (usersData) => {
// 	return usersData.filter(u => true);
// });

export const getPageSize = (state: AppStateType): number => {
	return state.searchUsersPage.pageSize;
};
export const getTotalItemsCount = (state: AppStateType): number => {
	return state.searchUsersPage.totalItemsCount;
};
export const getCurrentPage = (state: AppStateType): number => {
	return state.searchUsersPage.currentPage;
};

export const getPortionSize = (state: AppStateType): number => {
	return state.searchUsersPage.portionSize;
};

export const getIsFetching = (state: AppStateType): boolean => {
	return state.searchUsersPage.isFetching;
};
export const getFollowingInProgress = (state: AppStateType): Array<number> => {
	return state.searchUsersPage.followingInProgress;
};
