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
}

export const userAPI = {
	getUsers1(currentPage: number, pageSize: number) {
		return instance.get<ResponseTypeUserAPI>(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},

getUsers2(pageNumber: number, pageSize: number) {
	return instance.get<ResponseTypeUserAPI>(`users?page=${pageNumber}&count=${pageSize}`)
			.then(response => response.data);
	},
};

type ResponseTypeFollowUser = {
	resultCode: number
}

export const followAPI = {
	followUser(userId: number) {
		return instance.post<ResponseTypeFollowUser>(`follow/${userId}`)
			.then(response => response.data);
	},

	unfollowUser(userId: number) {
		return instance.delete<ResponseTypeFollowUser>(`follow/${userId}`)
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

export const profileAPI = {
	getUser(userId: string | undefined) {
		return instance.get<ResponseTypeUserProfile>(`profile/${userId}`)
			.then(response => response.data);
	},
};