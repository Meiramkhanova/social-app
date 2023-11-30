	import React from "react";
	import s from './Dialog.module.css';   
	import { NavLink } from "react-router-dom";
	import DialogItem from './DialogItem/DialogItem';
	import Message from './Message/Message'


	const Dialogs = () =>{

		let dialogs = [
		{
			id:1, 
			name:'Igor'
		},
		{
			id:2, 
			name:'Puchok'
		},
		{
			id:3, 
			name:'Josephina'
		},
		{
			id:4, 
			name:'Rose'
		},
		{
			id:5, 
			name:'Adina'
		},
		{
			id:6, 
			name:'Samat'
		},
		];

		let messages = [
		{
			id:1, 
			message:'Hi!'
		},
		{
			id:2, 
			message:'How are you'
		},
		{
			id:3, 
			message:'Fine'
		},
		{
			id:4, 
			message:'Fine'
		},
		{
			id:5, 
			message:'Narutooo'
		},
		{
			id:6, 
			message:'Cool!'
		},
		];

		let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

		let messageElements = messages.map(m => <Message message={m.message}/>);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messageElements}
			</div>
		</div>
	)
}

export default Dialogs
