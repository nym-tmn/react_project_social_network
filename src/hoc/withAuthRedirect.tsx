import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../redux/redux-store';

type MapStateToPropsType = {
	isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => {
	return ({
		isAuth: state.auth.isAuth,
	});
};

// type DispatchPropsType = {}

export function withAuthRedirect<WCProps extends {isAuth: boolean}>(WrappedComponent: React.ComponentType<WCProps>) {
	const redirectComponent: React.FC<MapStateToPropsType /* & DispatchPropsType */> = (props) => {
		const { isAuth, ...restProps } = props;
		if (!isAuth) return <Navigate to='/sign_in' />;
		return <WrappedComponent { ...restProps as WCProps } />;
	};
	const ConnectedAuthRedirectComponent = connect<MapStateToPropsType, {}, WCProps, AppStateType>(mapStateToPropsForRedirect, {})(redirectComponent);
	return ConnectedAuthRedirectComponent;
}
