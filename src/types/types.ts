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
	small: string | null
	large: string | null
}

export type UsersDataType = {
	name: string | null
	id: number
	uniqueUrlName: string | null
	photos: PhotosType
	status: string | null
	followed: boolean
}

export type SearchUsersPropsType = {
	totalUsersCount: number
	pageSize: number
	onPageChanged: (numberPage: number) => void
	currentPage: number
	usersData: Array<UsersDataType>
	unfollow: (userId: number) => void
	follow: (userId: number) => void
	isFetching: boolean
}
