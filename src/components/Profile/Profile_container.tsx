import React, { useEffect } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Profile from './Profile';
import { AppStateType } from '../redux/redux-store';
import { UserProfileType } from '../../types/types';
import { actions } from '../redux/profile_page_reducer';

type MapStateToPropsType = {
	profile: UserProfileType | null
	isFetching: boolean
}

type ResponseType = UserProfileType

const ProfileContainer: React.FC<ProfileContainerPropsType> = ({
	setUserProfile,
	toggleIsFetching,
	isFetching,
	profile,
}) => {

	let { userId } = useParams();

	if (!userId) userId = '28215';

	useEffect(() => {
		toggleIsFetching(true);
		axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then((response) => {
				toggleIsFetching(false);
				setUserProfile(response.data);
			});
	}, [setUserProfile, userId, toggleIsFetching]);

	return (
		<div>
			<Profile
				{...profile}
				isFetching={isFetching}
			/>
		</div>
	);
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return ({
		profile: state.profilePage.profileData,
		isFetching: state.profilePage.isFetching,
	});
};

const connector = connect(mapStateToProps, {
	setUserProfile: actions.setUserProfileActionCreator,
	toggleIsFetching: actions.toggleIsFetchingActionCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
interface ProfileContainerPropsType extends PropsFromRedux { }

export default connector(ProfileContainer);
