
import React from 'react';
import Title from './Dialogs_title/Dialogs_title';
import Messages from './Messages/Messages';
import DialogItem from './Dialog_item/Dialog_item';

import classes from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={classes.dialogs}>
			<Title title='Messages' />
			<Messages />
			<div className={classes.dialogItem}>
				<DialogItem name='Robert_lastName' id='1' avatar={require('./../images/dialog_avatar.png')} />
				<DialogItem name='Sophia_lastName' id='2' avatar={require('./../images/dialog_avatar.png')} />
				<DialogItem name='Alex_lastName' id='3' avatar={require('./../images/dialog_avatar.png')} />
				<DialogItem name='Andrew_lastName' id='4' avatar={require('./../images/dialog_avatar.png')} />
				<DialogItem name='John_lastName' id='5' avatar={require('./../images/dialog_avatar.png')} />
				<DialogItem name='Mary_lastName' id='6' avatar={require('./../images/dialog_avatar.png')} />
			</div>
		</div>
	);
}

export default Dialogs;