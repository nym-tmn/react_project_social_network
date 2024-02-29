import { ConnectedProps, connect } from 'react-redux';

import MyProjectsItems from './My_projects_items';
import { AppStateType } from '../../../../../../redux/redux_store';
import { MyProjectsDataType } from '../../../../../../types/types';
import { getMyProjectsData } from '../../../../../../redux/profile_page_selectors';

type mapStateToPropsType = {
	myProjectsData: Array<MyProjectsDataType>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		myProjectsData: getMyProjectsData(state),
	};
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export interface MyProjectsItemsPropsType extends PropsFromRedux { }

export default connector(MyProjectsItems);
