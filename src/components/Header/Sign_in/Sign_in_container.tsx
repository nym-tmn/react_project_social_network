import React, { useEffect } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import SignIn from './Sign_in';
import { UserAuthDataType } from '../../../types/types';
import { actions } from '../../../redux/auth_reducer';
import { AppStateType } from '../../../redux/redux-store';
import { authAPI } from '../../../api/api';

type MapStateToPropsType = {
	data: UserAuthDataType
}

const SignInContainer: React.FC<SignInContainerPropsType> = ({
	setAuthUserData,
	setUserAvatar,
	data,
}) => {

	useEffect(() => {
			authAPI.authUser().then((authData) => {
				if (authData.resultCode === 0) {
					setAuthUserData(authData.data);
					authAPI.getUserPhoto(authData.data.id).then((userPhoto) => {
						setUserAvatar(userPhoto);
						});
				}
			});
	}, [setAuthUserData, setUserAvatar]);

	return (
		<SignIn {...data} />
	);
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return ({
		data: state.auth,
	});
};

const connector = connect(mapStateToProps, {
	setAuthUserData: actions.setAuthUserDataActionCreator,
	setUserAvatar: actions.setUserAvatarActionCreatorActionCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
interface SignInContainerPropsType extends PropsFromRedux { }

export default connector(SignInContainer);
