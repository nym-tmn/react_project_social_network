import React, { useEffect } from 'react';
import { compose } from 'redux';
import { ConnectedProps, connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Profile from './Profile';
import { AppStateType } from '../../redux/redux_store';
import { UserProfileType } from '../../types/types';
import {
	getUserProfileThunkCreator,
	getUserStatusThunkCreator,
	saveUserPhotoThunkCreator,
	updateUserStatusThunkCreator,
} from '../../redux/profile_page_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
	getProfile,
	getAuthorizedUserId,
	getStatusText,
	getIsFetching,
	getErrorMessage,
} from '../../redux/profile_page_selectors';

type MapStateToPropsType = {
	profile: UserProfileType | null
	isFetching: boolean
	statusText: null | string
	authorizedUserId: number | null
	errorMessage: null | string,
}

const ProfileContainer: React.FC<ProfileContainerPropsType> = ({
	getUserProfile,
	getUserStatus,
	updateUserStatus,
	isFetching,
	profile,
	statusText,
	authorizedUserId,
	saveUserPhoto,
	errorMessage,
}) => {

	let { userId } = useParams();

	if (!userId) userId = authorizedUserId?.toString();

	useEffect(() => {

		getUserProfile(userId);
		getUserStatus(userId);

	}, [getUserProfile, getUserStatus, userId]);

	return (
		<Profile
			profile={profile}
			isOwner={useParams()}
			isFetching={isFetching}
			statusText={statusText}
			updateUserStatus={updateUserStatus}
			saveUserPhoto={saveUserPhoto}
			errorMessage={errorMessage}
		/>
	);
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return ({
		profile: getProfile(state),
		authorizedUserId: getAuthorizedUserId(state),
		isFetching: getIsFetching(state),
		statusText: getStatusText(state),
		errorMessage: getErrorMessage(state),
	});
};

const connector = connect(mapStateToProps, {
	getUserProfile: getUserProfileThunkCreator,
	getUserStatus: getUserStatusThunkCreator,
	updateUserStatus: updateUserStatusThunkCreator,
	saveUserPhoto: saveUserPhotoThunkCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
interface ProfileContainerPropsType extends PropsFromRedux { }

export default compose(
	withAuthRedirect,
	connector,
)(ProfileContainer);
