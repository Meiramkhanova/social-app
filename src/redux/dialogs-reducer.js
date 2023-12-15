const update_new_message_body = 'update_new_message_body'
const send_message = 'send_message'

let initialState = {
	messages:
		[
			{
				id: 1,
				message: 'Hi!'
			},
			{
				id: 2,
				message: 'How are you'
			},
			{
				id: 3,
				message: 'Fine'
			},
			{
				id: 4,
				message: 'Fine'
			},
			{
				id: 5,
				message: 'Narutooo'
			},
			{
				id: 6,
				message: 'Cool!'
			},
		],

	dialogs:
		[
			{
				id: 1,
				name: 'Igor'
			},
			{
				id: 2,
				name: 'Puchok'
			},
			{
				id: 3,
				name: 'Josephina'
			},
			{
				id: 4,
				name: 'Rose'
			},
			{
				id: 5,
				name: 'Adina'
			},
			{
				id: 6,
				name: 'Samat'
			},
		],
	newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case update_new_message_body:
			return {
				...state,
				newMessageBody : action.body
			}
		case send_message:
			let body = state.newMessageBody;
			 return {
				...state,
				newMessageBody: '',
				messages: [...state.messages,{ id: 6, message: body }]
			}
		default:
			return state;
	}
}

export const sendMessageCreator = () => (
	{ type: send_message }
)

export const updateNewMessageBodyCreator = (body) =>
({type: update_new_message_body,body})

export default dialogsReducer;