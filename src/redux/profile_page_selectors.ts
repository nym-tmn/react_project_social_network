import {
	FollowDataType,
	MyProjectsDataType,
	PostsDataType,
	ProjectsDemoDataType,
	UserProfileType,
} from '../types/types';
import { AppStateType } from './redux_store';

export const getProfile = (state: AppStateType): UserProfileType | null => {
	return state.profilePage.profileData;
};

export const getAuthorizedUserId = (state: AppStateType): number | null => {
	return state.auth.id;
};

export const getIsFetching = (state: AppStateType): boolean => {
	return state.profilePage.isFetching;
};

export const getStatusText = (state: AppStateType): string | null => {
	return state.profilePage.statusText;
};

export const getErrorMessage = (state: AppStateType): string | null => {
	return state.profilePage.errorMessage;
};

export const getPostsData = (state: AppStateType): Array<PostsDataType> => {
	return state.profilePage.postsData;
};

export const getSmallPhoto = (state: AppStateType): string | undefined => {
	return state.profilePage.profileData?.photos?.small;
};

export const getUserName = (state: AppStateType): string | undefined => {
	return state.profilePage.profileData?.fullName;
};

export const getMyProjectsData = (state: AppStateType): Array<MyProjectsDataType> => {
	return state.profilePage.myProjectsData;
};

export const getProjectsDemoData = (state: AppStateType): Array<ProjectsDemoDataType> => {
	return state.profilePage.projectsDemoData;
};

export const getFollowersData = (state: AppStateType): Array<FollowDataType> => {
	return state.profilePage.followersData;
};

export const getFollowingsData = (state: AppStateType): Array<FollowDataType> => {
	return state.profilePage.followingsData;
};
