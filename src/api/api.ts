import axios from 'axios';
import {
	PhotosType, UserAuthDataType, UserProfileType, UsersDataType,
} from '../types/types';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	// withCredentials: true,
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
		return instance.get<ResponseTypeUserAPI>(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},

	follow(userId: number) {
		return instance.post<ResponseTypeUserAPI>(`follow/${userId}`)
			.then(response => response.data);
	},

	unfollow(userId: number) {
		return instance.delete<ResponseTypeUserAPI>(`follow/${userId}`)
			.then(response => response.data);
	},
};

type ResponseTypeAuthUser = {
	data: UserAuthDataType
	resultCode: number
}

type ResponseTypeUserPhoto = {
	photos: PhotosType
}

export const authAPI = {
	authUser() {
		return instance.get<ResponseTypeAuthUser>('auth/me')
			.then(response => response.data);
	},

	getUserPhoto(userId: number | null) {
		return instance.get<ResponseTypeUserPhoto>(`profile/${userId}`)
			.then(response => response.data.photos.small);
	},
};

type ResponseTypeUserProfile = UserProfileType
type ResponseTypeUserStatus = string

export const profileAPI = {
	getUserProfile(userId: string | undefined) {
		return instance.get<ResponseTypeUserProfile>(`profile/${userId}`)
			.then(response => response.data);
	},

	getUserStatus(userId: string | undefined) {
		return instance.get<ResponseTypeUserStatus>(`profile/status/${userId}`)
			.then(response => response.data);
	},
};
