import React, { useState } from 'react';

import rightArrowIcon from '../../../assets/images/right_arrow_icon.png';
import leftArrowIcon from '../../../assets/images/left_arrow_icon.png';

import classes from './Paginator.module.css';

type PaginatorPropsType = {
	totalItemsCount: number
	pageSize: number
	currentPage: number
	portionSize: number
	onPageChanged: (pageNumber: number) => void
}

const Paginator: React.FC<PaginatorPropsType> = (props) => {

	const countPages = Math.ceil(props.totalItemsCount / props.pageSize);

	const pages = [] as Array<number>;

	for (let i = 1; i <= countPages; i++) {
		pages.push(i);
	}

	const portionCount = Math.ceil(countPages / props.portionSize);
	const [portionNumber, setPortionNumber] = useState(1);
	const leftPortionPageNumber = ((portionNumber * props.portionSize) - props.portionSize + 1);
	const rightPortionPageNumber = portionNumber * props.portionSize;

	return (
		<div className={classes.usersPages}>
			{portionNumber > 1 && <div className={classes.userPage} onClick={() => { setPortionNumber(portionNumber - 1); }}>
				<img src={leftArrowIcon} alt="leftArrowIcon" />
			</div>}
			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map((p) => {
					return (
						<div
							key={p}
							onClick={() => { props.onPageChanged(p); }}
							className={`${props.currentPage === p && classes.selected} ${classes.userPage}`}>
							{p}
						</div>
					);
				})}
			{portionNumber < portionCount && <div className={classes.userPage} onClick={() => { setPortionNumber(portionNumber + 1); }}>
				<img src={rightArrowIcon} alt="rightArrowIcon" />
			</div>}
		</div>
	);
};

export default Paginator;
