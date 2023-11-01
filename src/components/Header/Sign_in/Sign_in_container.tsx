import React, { useEffect } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import axios from 'axios';

import SignIn from './Sign_in';
import { UserAuthDataType } from '../../../types/types';
import { actions } from '../../redux/auth_reducer';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
	data: UserAuthDataType
}

type ResponseType = {
	data: UserAuthDataType
	resultCode: number
}

const SignInContainer: React.FC<SignInContainerPropsType> = ({
	setAuthUserData,
	setUserAvatar,
	data,
}) => {

	useEffect(() => {

		axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/auth/me', {
			withCredentials: true,
		})
			.then((responseOne) => {
				if (responseOne.data.resultCode === 0) {
					setAuthUserData(responseOne.data.data);
					axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${responseOne.data.data.id}`)
						.then((responseTwo) => {
							setUserAvatar(responseTwo.data.photos.small);
						});
				}
			});
	}, [setAuthUserData, setUserAvatar]);

	return (
		<SignIn { ...data } />
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
