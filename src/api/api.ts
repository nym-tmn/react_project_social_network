import axios/* , { AxiosPromise } */ from 'axios';
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

type ResponseTypeGetUsers = {
	items: Array<UsersDataType>
	totalCount: number
	error: null | string
	// resultCode: number
}

export type ResponseTypeFollowUnwollow = {
	resultCode: number
}

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get<ResponseTypeGetUsers>(`users?page=${currentPage}&count=${pageSize}`);
	},

	follow(userId: number) {
		return instance.post<ResponseTypeFollowUnwollow>(`follow/${userId}`);
	},

	unfollow(userId: number) {
		return instance.delete<ResponseTypeFollowUnwollow>(`follow/${userId}`)/*  as AxiosPromise<ResponseTypeFollowUnwollow> */;
	},
};

type ResponseTypeAuthUser = {
	data: UserAuthDataType
	resultCode: number
}

type ResponseTypeLoginUser = {
	resultCode: number
	messages: Array<string>
}

type ResponseTypeLogoutUser = {
	resultCode: number
}

type ResponseTypeCaptchaUrl = {
	url: string
}

export const authAPI = {
	authUser() {
		return instance.get<ResponseTypeAuthUser>('auth/me');
	},

	loginUser(email: string, password: string, rememberMe: boolean, captcha: string) {
		return instance.post<ResponseTypeLoginUser>(
			'auth/login',
			{
				email,
				password,
				rememberMe,
				captcha,
			},
		);
	},

	logoutUser() {
		return instance.post<ResponseTypeLogoutUser>('auth/logout');
	},

	getCaptchaUrl() {
		return instance.get<ResponseTypeCaptchaUrl>('security/get-captcha-url');
	},
};

type ResponseTypeUserProfile = UserProfileType
type ResponseTypeUserStatus = string
type ResponseTypeUpdateUserStatus = {
	resultCode: number
}

type ResponseTypeUserPhoto = {
	photos: PhotosType
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

	getUserPhoto(userId: number | null) {
		return instance.get<ResponseTypeUserPhoto>(`profile/${userId}`);
	},
};
