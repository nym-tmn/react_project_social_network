import { connect } from 'react-redux';

import MyProjectsItems from './My_projects_items';
import { AppStateType } from '../../../../../redux/redux-store';
import { MyProjectsDataType } from '../../../../../../types/types';

type mapStateToPropsType = {
	myProjectsData: Array<MyProjectsDataType>
}

export type MyProjectsItemsPropsType = mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

	return {
		myProjectsData: state.profilePage.myProjectsData,
	};
};

const MyProjectsItemsContiner = connect(mapStateToProps)(MyProjectsItems);

export default MyProjectsItemsContiner;
