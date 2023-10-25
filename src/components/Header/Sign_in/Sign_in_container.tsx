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
	data,
}) => {

	useEffect(() => {

		axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/auth/me', {
			withCredentials: true,
		})
			.then((response) => {
				if (response.data.resultCode === 0) {
					setAuthUserData(response.data.data);
				}
			});
	}, [setAuthUserData]);

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
});
type PropsFromRedux = ConnectedProps<typeof connector>
interface SignInContainerPropsType extends PropsFromRedux { }

export default connector(SignInContainer);
