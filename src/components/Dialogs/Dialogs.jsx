	import React from "react";
	import s from './Dialog.module.css';   
	import DialogItem from './DialogItem/DialogItem';
	import Message from './Message/Message'


	const Dialogs = (props) =>{

		let newPost = React.createRef();

		let click = () =>{
			let text = newPost.current.value;

			alert(text + "Yes")
		}

		let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

		let messageElements = props.state.messages.map(m => <Message message={m.message}/>);

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messageElements}
			</div>
			<div>	
				<textarea ref={newPost}></textarea>
			</div>
			<div>
				<button onClick={click}>Send</button>
			</div>
		</div>
	)
}

export default Dialogs
