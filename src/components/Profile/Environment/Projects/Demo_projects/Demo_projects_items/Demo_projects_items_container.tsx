import { ConnectedProps, connect } from 'react-redux';

import DemoProjectsItems from './Demo_projects_items';
import { AppStateType } from '../../../../../../redux/redux_store';
import { ProjectsDemoDataType } from '../../../../../../types/types';
import { getProjectsDemoData } from '../../../../../../redux/profile_page_selectors';

type mapStateToPropsType = {
	projectsDemoData: Array<ProjectsDemoDataType>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		projectsDemoData: getProjectsDemoData(state),
	};
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export interface DemoProjectsItemsPropsType extends PropsFromRedux { }

export default connector(DemoProjectsItems);
