export type DialogItemDataType = {
	id: number
	name: string
	avatar: string
}

export type MessagesDataType = {
	id: number
	messageText: string
}

export type PostsDataType = {
	id: number
	postIconAvatar: string
	postUserName: string
	postText: string
	postImage: string
	likesCounter: string
}

export type FollowersDataType = {
	id: number
	iconFollower: string
	name: string
}

export type FollowingsDataType = {
	id: number
	iconFollowing: string
	name: string
}

export type MyProjectsDataType = {
	id: number
	iconMyProject: string
	nameMyProject: string
	linkMyProject: string
}

export type ProjectsDemoDataType = {
	id: number
	iconDemoProject: string
	nameDemoProject: string
}

export type PhotosType = {
	small: string
	large: string
}

export type UsersDataType = {
	name: null | string
	id: number
	uniqueUrlName: null | string
	photos: PhotosType
	status: null | string
	followed: boolean
}

export type SearchUsersPropsType = {
	totalUsersCount: number
	pageSize: number
	onPageChanged: (pageNumber: number) => void
	currentPage: number
	usersData: Array<UsersDataType>
	unfollow: (userId: number) => any
	follow: (userId: number) => any
	isFetching: boolean
	followingInProgress: Array<number>
}

export type ContactsType = {
	facebook: string
	website: string
	vk: string
	twitter: string
	instagram: string
	youtube: string
	github: string
	mainLink: string
}

export type UserProfileType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: ContactsType
	photos: PhotosType
	aboutMe: string
}

export type ProfilePropsType = {
	lookingForAJob?: boolean
	lookingForAJobDescription?: string
	fullName?: string
	contacts?: ContactsType
	photos?: PhotosType
	aboutMe?: string
	isFetching?: boolean
	userStatusText?: null | string,
}

export type UserAuthDataType = {
	id: number | null
	login: string | null
	email: string | null
	isFetching: boolean
	isAuth: boolean
	userAvatar: string | null
}
