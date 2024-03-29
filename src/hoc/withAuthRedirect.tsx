import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../redux/redux_store';
import { getIsAuth } from '../redux/auth_selectors';

type MapStateToPropsType = {
	isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => {
	return ({
		isAuth: getIsAuth(state),
	});
};

export function withAuthRedirect<WCProps extends { isAuth: boolean }>(WrappedComponent: React.ComponentType<WCProps>) {
	const redirectComponent: React.FC<MapStateToPropsType> = (props) => {
		const { isAuth, ...restProps } = props;
		if (!isAuth) return <Navigate to='/sign_in' />;
		return <WrappedComponent {...restProps as WCProps} />;
	};
	const ConnectedAuthRedirectComponent = connect<MapStateToPropsType, {}, WCProps, AppStateType>(mapStateToPropsForRedirect, {})(redirectComponent);
	return ConnectedAuthRedirectComponent;
}
