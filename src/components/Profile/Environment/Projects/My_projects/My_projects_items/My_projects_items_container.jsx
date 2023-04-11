import MyProjectsItems from './My_projects_items';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
	
	return {
		myProjectsData: state.profilePage.myProjectsData
	}
};

const MyProjectsItemsContiner = connect(mapStateToProps)(MyProjectsItems);

export default MyProjectsItemsContiner;