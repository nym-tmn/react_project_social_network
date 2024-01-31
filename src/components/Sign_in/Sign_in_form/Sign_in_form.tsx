import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { SignInPropsType } from '../Sign_in_container';

import classes from './Sign_in_form.module.css';

type LoginFormDataType = {
	email: string
	password: string
	rememberMe: boolean
}

const SignInForm: React.FC<SignInPropsType> = (props) => {

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginFormDataType>({
		mode: 'onTouched',
	});

	const onLoginUser: SubmitHandler<LoginFormDataType> = (loginFormData: LoginFormDataType) => {

		props.loginUser(loginFormData.email, loginFormData.password, loginFormData.rememberMe);
		reset();
	};

	return (
		<form
			className={classes.signInFormContainer}
			onSubmit={handleSubmit(onLoginUser)}>
			<div className={classes.signInFormItems}>
				<label className={classes.label}>Email</label>
				<input className={classes.widthInput}
					{...(register('email', {
						required: 'This field is required',
						maxLength: {
							value: 40,
							message: 'Max length is 40 symbols',
						},
					}))} />
				{errors.email?.message && <div className={classes.error}>{errors.email?.message}</div>}
				<label className={classes.label}>Password</label>
				<input className={classes.widthInput}
					{...(register('password', {
						required: 'This field is required',
						maxLength: {
							value: 40,
							message: 'Max length is 40 symbols',
						},
					}))}
					type={'password'}
				/>
				{errors.password?.message && <div className={classes.error}>{errors.password?.message}</div>}
				<div className={classes.rememberMe}>
					<label>Remember me</label>
					<input
						type="checkbox"
						{...register('rememberMe')}
					/>
				</div>
				<div className={classes.errorMessage}>{props.errrorMessage}</div>
				<div className={classes.buttonSignIn}>
					<button className={classes.stylesButton}>Sign In</button>
				</div>
			</div>
		</form>
	);
};

export default SignInForm;
