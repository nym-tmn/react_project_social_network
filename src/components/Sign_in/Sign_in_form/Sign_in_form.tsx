import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { SignInPropsType } from '../Sign_in_container';

import classes from './Sign_in_form.module.css';

type LoginFormDataType = {
	email: string
	password: string
	rememberMe: boolean
	captcha: string
}

const SignInForm: React.FC<SignInPropsType> = (props) => {

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		formState,
	} = useForm<LoginFormDataType>({
		mode: 'onBlur',
	});

	const onLoginUser: SubmitHandler<LoginFormDataType> = async (loginFormData: LoginFormDataType) => {
		await props.loginUser(loginFormData.email, loginFormData.password, loginFormData.rememberMe, loginFormData.captcha);
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
				{props.errorMessage && <div className={classes.errorMessage}>{props.errorMessage}</div>}
				{props.captchaUrl && <div className={classes.captchaGrid}>
					<img className={classes.captchaImg} src={props.captchaUrl || ''} alt="captcha_url" />
					<input className={classes.widthInput__short}
						{...register('captcha', {
							required: 'This field is required',
							maxLength: {
								value: 13,
								message: 'Max length is 13 symbols',
							},
						})}
						placeholder="Enter captcha"
					/>
					{errors.captcha?.message && <div className={classes.error}>{errors.captcha?.message}</div>}
				</div>}
				<div className={classes.buttonSignIn}>
					<button className={classes.stylesButton} type='submit' disabled={formState.isSubmitting}>Sign In</button>
				</div>
			</div>
		</form>
	);
};

export default SignInForm;
