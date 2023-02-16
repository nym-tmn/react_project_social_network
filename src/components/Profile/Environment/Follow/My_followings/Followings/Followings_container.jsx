
import React from 'react';
import StoreContext from '../../../../../../Store_context';
import Followings from './Followings';

const FollowingsContainer = (/* props */) => {

	// let state = props.store.getState();

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();
					return (
						<Followings followings={state.profilePage.followingsData} />
					);
				}
			}
		</StoreContext.Consumer>

	);
};

export default FollowingsContainer;