import React from 'react';

import classes from './Paginator.module.css';

type PaginatorPropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
}

const Paginator: React.FC<PaginatorPropsType> = (props) => {

	const countPages = Math.ceil(props.totalUsersCount / props.pageSize);

	const pages = [] as Array<number>;

	for (let i = 1; i <= countPages; i++) {
		pages.push(i);
	}

	return (
		<div className={classes.usersPages}>
			{pages.map((p) => {
				return (
					<div
						key={p}
						onClick={() => { props.onPageChanged(p); }}
						className={`${props.currentPage === p && classes.selected} ${classes.userPage}`}>
						{p}
					</div>
				);
			})}
		</div>
	);
};

export default Paginator;
