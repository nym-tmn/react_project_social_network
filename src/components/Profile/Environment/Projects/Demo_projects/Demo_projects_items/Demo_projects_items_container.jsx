import { connect } from 'react-redux';

import DemoProjectsItems from './Demo_projects_items';

const mapStateToProps = (state) => {

	return {
		projectsDemoData: state.profilePage.projectsDemoData,
	};
};

const DemoProjectsItemsContiner = connect(mapStateToProps)(DemoProjectsItems);

export default DemoProjectsItemsContiner;
