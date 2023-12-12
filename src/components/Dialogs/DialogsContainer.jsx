import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage;

	let onsendMessageClick = () => {
		props.store.dispatch(sendMessageCreator())
	}

	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body))
	}

	return (
		<Dialogs dialogsPage={state} sendMessage={onsendMessageClick} updateNewMessageBody={onNewMessageChange} />
	)
}

export default DialogsContainer
