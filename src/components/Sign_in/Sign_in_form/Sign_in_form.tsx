import React from 'react';
import { useForm } from 'react-hook-form';

import { SignInPropsType } from '../Sign_in_container';

import classes from './Sign_in_form.module.css';

type LoginFormDataType = {
	login: string
	password: string
	rememberMe: boolean
}

const SignInForm: React.FC<Pick<SignInPropsType, 'loginUser'>> = (props) => {

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginFormDataType>({
		mode: 'onTouched',
	});

	const onLiginUser = (loginFormData: LoginFormDataType) => {

		props.loginUser(loginFormData.login, loginFormData.password, loginFormData.rememberMe);
		reset();
	};

	return (
		<form
			className={classes.signInFormContainer}
			onSubmit={handleSubmit(onLiginUser)}>
			<div className={classes.signInFormItems}>
					<label className={classes.label}>Login</label>
					<input {...(register('login', {
						required: 'This field is required',
						maxLength: {
							value: 40,
							message: 'Max length is 40 symbols',
						},
					}))} />
					{errors.login?.message && <div className={classes.error}>{errors.login?.message}</div>}
					<label className={classes.label}>Password</label>
					<input {...(register('password', {
						required: 'This field is required',
						maxLength: {
							value: 40,
							message: 'Max length is 40 symbols',
						},
					}))} />
					{errors.password?.message && <div className={classes.error}>{errors.password?.message}</div>}
				<div className={classes.rememberMe}>
					<label>Remember me</label>
					<input
						type="checkbox"
						{...register('rememberMe')}
					/>
				</div>
				<div className={classes.buttonSignIn}>
					<button className={classes.stylesButton}>Sign In</button>
				</div>
			</div>
		</form>
	);
};

export default SignInForm;
