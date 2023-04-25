import { connect } from 'react-redux';

import DemoProjectsItems from './Demo_projects_items';
import { RootState } from '../../../../../redux/redux-store';

const mapStateToProps = (state: RootState) => {

	return {
		projectsDemoData: state.profilePage.projectsDemoData,
	};
};

const DemoProjectsItemsContiner = connect(mapStateToProps)(DemoProjectsItems);

export default DemoProjectsItemsContiner;
