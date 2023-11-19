import React, { useEffect } from 'react';
import { compose } from 'redux';
import { ConnectedProps, connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Profile from './Profile';
import { AppStateType } from '../../redux/redux-store';
import { UserProfileType } from '../../types/types';
import { getUserProfileThunkCreator } from '../../redux/profile_page_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

type MapStateToPropsType = {
	profile: UserProfileType | null
	isFetching: boolean
}

const ProfileContainer: React.FC<ProfileContainerPropsType> = ({
	getUserProfile,
	isFetching,
	profile,
}) => {

	let { userId } = useParams();

	if (!userId) userId = '28215';

	useEffect(() => {

		getUserProfile(userId);

	}, [getUserProfile, userId]);

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
	getUserProfile: getUserProfileThunkCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
interface ProfileContainerPropsType extends PropsFromRedux { }

export default compose(
	withAuthRedirect,
	connector,
)(ProfileContainer);
