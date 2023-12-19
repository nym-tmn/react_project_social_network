import React from 'react';
import { Form } from 'react-final-form';
import { ConnectedProps, connect } from 'react-redux';

import SignInForm from './Sign_in_form/Sign_in_form';
import { loginUserThunkCreator } from '../../redux/auth_reducer';
import { AppStateType } from '../../redux/redux_store';

export type LoginFormDataType = {
	login: string
	password: string
	rememberMe: boolean
}

type MapStateToPropsType = {
	isAuth: boolean
}

const SignIn: React.FC<SignInPropsType> = ({
	loginUser,
	isAuth,
}) => {

	// loginUser(formData.login, formData.password, formData.rememberMe);

	const onSubmit = (loginFormData: LoginFormDataType) => {
		loginUser(loginFormData.login, loginFormData.password, loginFormData.rememberMe);
	};

	return (
		<div>
			<h1>LOGIN</h1>
			<Form
				onSubmit={onSubmit}
				render={({
					handleSubmit,
					values,
					form,
					submitting,
					pristine,
				}) => (
					<SignInForm
						handleSubmit={handleSubmit}
						values={values}
						// form={form}
						submitting={submitting}
						pristine={pristine}
					/>
				)} />
		</div>
	);
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return ({
		isAuth: state.auth.isAuth,
	});
};

const connector = connect(mapStateToProps, {
	loginUser: loginUserThunkCreator,
});
type PropsFromRedux = ConnectedProps<typeof connector>
interface SignInPropsType extends PropsFromRedux { }

export default connector(SignIn);

// export default SignIn;
