import React from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import SignInForm from './Sign_in_form/Sign_in_form';
import { loginUserThunkCreator } from '../../redux/auth_reducer';
import { AppStateType } from '../../redux/redux_store';
import SignInTitle from './Sign_in_title/Sign_in_title';

import classes from './Sign_in_container.module.css';

type MapStateToPropsType = {
	isAuth: boolean
	errrorMessage: string | null
}

const SignInContainer: React.FC<SignInPropsType> = ({
	loginUser,
	isAuth,
	errrorMessage,
}) => {

	if (isAuth) {
		return <Navigate to='/profile' />;
	}

	return (
		<div className={classes.signInContainer}>
			<SignInTitle />
			<SignInForm
				loginUser={loginUser}
				isAuth={isAuth}
				errrorMessage={errrorMessage}
			/>
		</div>
	);
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return ({
		isAuth: state.auth.isAuth,
		errrorMessage: state.auth.errorMessage,
	});
};

const connector = connect(mapStateToProps, {
	loginUser: loginUserThunkCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
export interface SignInPropsType extends PropsFromRedux { }

export default connector(SignInContainer);
