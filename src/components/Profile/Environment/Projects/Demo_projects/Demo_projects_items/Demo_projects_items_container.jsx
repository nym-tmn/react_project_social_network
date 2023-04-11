
import DemoProjectsItems from './Demo_projects_items';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
	
	return {
		projectsDemoData: state.profilePage.projectsDemoData
	}
};

const DemoProjectsItemsContiner = connect(mapStateToProps)(DemoProjectsItems);

export default DemoProjectsItemsContiner;