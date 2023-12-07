import React, { SyntheticEvent } from 'react';
import { Field } from 'react-final-form';
import { FormApi } from 'final-form';

type SignInFormProps = {
	handleSubmit: (event?: Partial<Pick<SyntheticEvent<Element, Event>, 'preventDefault' | 'stopPropagation'>> | undefined) => Promise<any> | undefined;
	values: {
		login: string;
		password: string;
		rememberMe: boolean;
	}
	form: FormApi
	submitting: boolean
	pristine: boolean
};

const SignInForm: React.FC<SignInFormProps> = (props) => {

	return (
			<form onSubmit={props.handleSubmit}>
			<div>
				<label>Login</label>
				<Field component={'input'} name={'login'} placeholder='Login' />
				</div>
			<div>
				<label>Password</label>
				<Field component={'input'} name={'password'} placeholder='Password' />
				</div>
				<div>
				<Field component={'input'} name={'rememberMe'} type='checkbox' /> Remember me
				</div>
				<div>
				<button
					onClick={props.form.reset}
					disabled={props.submitting || props.pristine}
				>
					Sign In
				</button>
				</div>
			</form>
	);
};

export default SignInForm;
