import { connect } from 'react-redux';

import MyProjectsItems from './My_projects_items';

const mapStateToProps = (state) => {

	return {
		myProjectsData: state.profilePage.myProjectsData,
	};
};

const MyProjectsItemsContiner = connect(mapStateToProps)(MyProjectsItems);

export default MyProjectsItemsContiner;
