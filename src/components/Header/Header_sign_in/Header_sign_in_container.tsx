import React, { useEffect } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import HeaderSignIn from './Header_sign_in';
import { UserAuthDataType } from '../../../types/types';
import { authUserThunkCreator } from '../../../redux/auth_reducer';
import { AppStateType } from '../../../redux/redux_store';

type MapStateToPropsType = {
	data: UserAuthDataType
}

const HeaderSignInContainer: React.FC<SignInContainerPropsType> = ({
	authUser,
	data,
}) => {

	useEffect(() => {

		authUser();

	}, [authUser]);

	return (
		<HeaderSignIn {...data} />
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

export default connector(HeaderSignInContainer);
