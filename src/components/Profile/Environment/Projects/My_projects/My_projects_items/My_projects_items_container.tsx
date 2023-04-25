import { connect } from 'react-redux';

import MyProjectsItems from './My_projects_items';
import { RootState } from '../../../../../redux/redux-store';

const mapStateToProps = (state: RootState) => {

	return {
		myProjectsData: state.profilePage.myProjectsData,
	};
};

const MyProjectsItemsContiner = connect(mapStateToProps)(MyProjectsItems);

export default MyProjectsItemsContiner;
