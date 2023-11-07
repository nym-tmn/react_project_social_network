import { ConnectedProps, connect } from 'react-redux';

import MyProjectsItems from './My_projects_items';
import { AppStateType } from '../../../../../../redux/redux-store';
import { MyProjectsDataType } from '../../../../../../types/types';

type mapStateToPropsType = {
	myProjectsData: Array<MyProjectsDataType>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		myProjectsData: state.profilePage.myProjectsData,
	};
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export interface MyProjectsItemsPropsType extends PropsFromRedux { }

export default connector(MyProjectsItems);
