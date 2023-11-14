import React, { useEffect } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import SignIn from './Sign_in';
import { UserAuthDataType } from '../../../types/types';
import { authUserThunkCreator } from '../../../redux/auth_reducer';
import { AppStateType } from '../../../redux/redux-store';

type MapStateToPropsType = {
	data: UserAuthDataType
}

const SignInContainer: React.FC<SignInContainerPropsType> = ({
	authUser,
	data,
}) => {

	useEffect(() => {

		authUser();

	}, [authUser]);

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
	authUser: authUserThunkCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
interface SignInContainerPropsType extends PropsFromRedux { }

export default connector(SignInContainer);
