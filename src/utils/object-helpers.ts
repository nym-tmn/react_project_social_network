import { UsersDataType } from '../types/types';

export const updateObjectInArray = (items: Array<UsersDataType>, objPropName: keyof UsersDataType, itemId: number, newObjProp: {followed: boolean}) => {
	return items.map((user: UsersDataType) => {
		if (user[objPropName] === itemId) {
			return { ...user, ...newObjProp };
		}
		return user;
	});
};
