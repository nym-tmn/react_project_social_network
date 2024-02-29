import React from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import SignInForm from './Sign_in_form/Sign_in_form';
import { loginUserThunkCreator } from '../../redux/auth_reducer';
import { AppStateType } from '../../redux/redux_store';
import SignInTitle from './Sign_in_title/Sign_in_title';

import classes from './Sign_in_container.module.css';
import { getIsAuth, getErrorMessage, getCaptchaUrl } from '../../redux/auth_selectors';

type MapStateToPropsType = {
	isAuth: boolean
	errorMessage: string | null
	captchaUrl: string | null
}

const SignInContainer: React.FC<SignInPropsType> = ({
	loginUser,
	isAuth,
	errorMessage,
	captchaUrl,
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
				errorMessage={errorMessage}
				captchaUrl={captchaUrl}
			/>
		</div>
	);
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return ({
		isAuth: getIsAuth(state),
		errorMessage: getErrorMessage(state),
		captchaUrl: getCaptchaUrl(state),
	});
};

const connector = connect(mapStateToProps, {
	loginUser: loginUserThunkCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
export interface SignInPropsType extends PropsFromRedux { }

export default connector(SignInContainer);
