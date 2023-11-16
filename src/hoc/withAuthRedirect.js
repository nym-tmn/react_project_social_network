import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToPropsForRedirect = (state) => {
	return ({
		isAuth: state.auth.isAuth,
	});
};

export const withAuthRedirect = (Component) => {
	const redirectComponent = (props) => {
		if (!props.isAuth) return <Navigate to='/sign_in' />;
		return <Component {...props} />;
	};
	const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(redirectComponent);
	return ConnectedAuthRedirectComponent;
};
