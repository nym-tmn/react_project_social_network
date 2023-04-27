import { connect } from 'react-redux';

import DemoProjectsItems from './Demo_projects_items';
import { AppStateType } from '../../../../../redux/redux-store';
import { ProjectsDemoDataType } from '../../../../../../types/types';

type mapStateToPropsType = {
	projectsDemoData: Array<ProjectsDemoDataType>
}

export type DemoProjectsItemsPropsType = mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		projectsDemoData: state.profilePage.projectsDemoData,
	};
};

const DemoProjectsItemsContiner = connect(mapStateToProps)(DemoProjectsItems);

export default DemoProjectsItemsContiner;
