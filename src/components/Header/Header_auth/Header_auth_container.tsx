import React, { useEffect } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import HeaderAuth from './Header_auth';
import { authUserThunkCreator, logoutUserThunkCreator } from '../../../redux/auth_reducer';
import { AppStateType } from '../../../redux/redux_store';

type MapStateToPropsType = {
	login: string | null,
	userAvatar: string | null,
	isAuth: boolean,
}

const HeaderAuthContainer: React.FC<AuthContainerPropsType> = ({
	authUser,
	logoutUser,
	login,
	userAvatar,
	isAuth,
}) => {

	useEffect(() => {

		authUser();

	}, [authUser]);

	return (
		<HeaderAuth
			login={login}
			userAvatar={userAvatar}
			isAuth={isAuth}
			logoutUser={logoutUser}
		/>
	);
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return ({
		login: state.auth.login,
		userAvatar: state.auth.userAvatar,
		isAuth: state.auth.isAuth,
	});
};

const connector = connect(mapStateToProps, {
	authUser: authUserThunkCreator,
	logoutUser: logoutUserThunkCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
interface AuthContainerPropsType extends PropsFromRedux { }

export default connector(HeaderAuthContainer);
