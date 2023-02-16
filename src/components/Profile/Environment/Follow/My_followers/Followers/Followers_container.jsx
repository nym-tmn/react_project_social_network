
import React from 'react';
import StoreContext from '../../../../../../Store_context';
import Followers from './Followers';

const FollowersContainer = (/* props */) => {

	// let state = props.store.getState();

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();
					return (
						<Followers followers={state.profilePage.followersData} />
					);
				}
			}
		</StoreContext.Consumer>

	);
};

export default FollowersContainer;