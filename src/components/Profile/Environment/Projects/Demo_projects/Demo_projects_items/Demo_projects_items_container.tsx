import { ConnectedProps, connect } from 'react-redux';

import DemoProjectsItems from './Demo_projects_items';
import { AppStateType } from '../../../../../redux/redux-store';
import { ProjectsDemoDataType } from '../../../../../../types/types';

type mapStateToPropsType = {
	projectsDemoData: Array<ProjectsDemoDataType>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		projectsDemoData: state.profilePage.projectsDemoData,
	};
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export interface DemoProjectsItemsPropsType extends PropsFromRedux { }

export default connector(DemoProjectsItems);
