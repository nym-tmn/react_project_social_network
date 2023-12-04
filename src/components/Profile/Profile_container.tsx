import React, { useEffect } from 'react';
import { compose } from 'redux';
import { ConnectedProps, connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Profile from './Profile';
import { AppStateType } from '../../redux/redux_store';
import { UserProfileType } from '../../types/types';
import { getUserProfileThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator } from '../../redux/profile_page_reducer';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';

type MapStateToPropsType = {
	profile: UserProfileType | null
	isFetching: boolean
	statusText: null | string
}

const ProfileContainer: React.FC<ProfileContainerPropsType> = ({
	getUserProfile,
	getUserStatus,
	updateUserStatus,
	isFetching,
	profile,
	statusText,
}) => {

	let { userId } = useParams();

	if (!userId) userId = '28215';

	useEffect(() => {

		getUserProfile(userId);
		getUserStatus(userId);

	}, [getUserProfile, getUserStatus, userId]);

	return (
		<div>
			<Profile
				profile={profile}
				isFetching={isFetching}
				statusText={statusText}
				updateUserStatus={updateUserStatus}
			/>
		</div>
	);
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return ({
		profile: state.profilePage.profileData,
		isFetching: state.profilePage.isFetching,
		statusText: state.profilePage.statusText,
	});
};

const connector = connect(mapStateToProps, {
	getUserProfile: getUserProfileThunkCreator,
	getUserStatus: getUserStatusThunkCreator,
	updateUserStatus: updateUserStatusThunkCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
interface ProfileContainerPropsType extends PropsFromRedux { }

export default compose(
	// withAuthRedirect,
	connector,
)(ProfileContainer);
