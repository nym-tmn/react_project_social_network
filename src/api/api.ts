import axios from 'axios';
import {
	PhotosType, UserAuthDataType, UserProfileType, UsersDataType,
} from '../types/types';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '18629bce-d19b-46b5-a65f-a7b4fe31f0f9',
	},
});

type ResponseTypeUserAPI = {
	items: Array<UsersDataType>
	totalCount: number
	error: null | string
	resultCode: number
}

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get<ResponseTypeUserAPI>(`users?page=${currentPage}&count=${pageSize}`);
	},

	follow(userId: number) {
		return instance.post<ResponseTypeUserAPI>(`follow/${userId}`);
	},

	unfollow(userId: number) {
		return instance.delete<ResponseTypeUserAPI>(`follow/${userId}`);
	},
};

type ResponseTypeAuthUser = {
	data: UserAuthDataType
	resultCode: number
}

type ResponseTypeLoginUser = {
	// data: UserAuthDataType
	resultCode: number
}

type ResponseTypeUserPhoto = {
	photos: PhotosType
}

export const authAPI = {
	authUser() {
		return instance.get<ResponseTypeAuthUser>('auth/me');
	},

	getUserPhoto(userId: number | null) {
		return instance.get<ResponseTypeUserPhoto>(`profile/${userId}`);
	},

	loginUser(email: string, password: string, rememberMe: boolean) {
		return instance.post<ResponseTypeLoginUser>('auth/login', { email, password, rememberMe });
	},

	logoutUser() {
		return instance.post<ResponseTypeLoginUser>('auth/logout');
			// .then(response => console.log(response.data));
	},
};

type ResponseTypeUserProfile = UserProfileType
type ResponseTypeUserStatus = string
type ResponseTypeUpdateUserStatus = {
	resultCode: number
}

export const profileAPI = {
	getUserProfile(userId: string | undefined) {
		return instance.get<ResponseTypeUserProfile>(`profile/${userId}`);
	},

	getUserStatus(userId: string | undefined) {
		return instance.get<ResponseTypeUserStatus>(`profile/status/${userId}`);
	},

	updateUserStatus(statusText: string | null) {
		return instance.put<ResponseTypeUpdateUserStatus>('profile/status', { status: statusText });
	},
};
