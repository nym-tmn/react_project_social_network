import React from 'react';
import { Form } from 'react-final-form';

import SignInForm from './Sign_in_form/Sign_in_form';

const SignIn: React.FC = () => {

	const onSubmit = (formData: any) => {
		console.log(formData);
	};

	return (
		<div>
			<h1>LOGIN</h1>
			<Form onSubmit={onSubmit}
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
							form={form}
							submitting={submitting}
							pristine={pristine}
						/>
					)} />
		</div>
	);
};

export default SignIn;
