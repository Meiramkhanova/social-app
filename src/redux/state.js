const add_post = 'add-post';
const update_new_post_text = 'update-new-post-text';

const update_new_message_body = 'update_new_message_body'
const send_message = 'send_message'

let store = {
	_state: {
		profilePage: {
			posts:
				[
					{
						id: 1,
						message: 'Dattebae',
						message2: 'Ramen',
						likesAmount: 155,
					},
					{
						id: 2,
						message: 'I wanna be Hokage!',
						likesAmount: 555,
					},
					{
						id: 3,
						message: 'My name is Narutooo!',
						likesAmount: 5555,
					},
				],
			newPostText: 'printsmth'
		},
		dialogsPage: {
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
		},
		siteBar: {
			friends:
				[
					{
						id: 1,
						name: 'Andrew'
					},
					{
						id: 2,
						name: 'Sasha'
					},
					{
						id: 3,
						name: 'Sveta'
					},
				]
		}
	},
	_callSubscriber() {
		console.log("State changed")
	},
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer;  // наблюдатель
	},
	dispatch(action) { //type : "add-post"
		if (action.type === add_post) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesAmount: 1
			};

			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === update_new_post_text) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
		else if (action.type === update_new_message_body) {
			this._state.dialogsPage.newMessageBody = action.body;

			this._callSubscriber(this._state)
		}
		else if(action.type === send_message){
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messages.push({id:6, message:body});
			this._callSubscriber(this._state);
		}
	}
}

export const addPostActionCreator = () => ({type: add_post})

export const updateNewPostTextActionCreator = (text) => ({ type: update_new_post_text, newText: text })


export const sendMessageCreator = () => (
	{ type: send_message }
)

export const updateNewMessageBodyCreator = (body) => ({
	type: update_new_message_body,
	body: body
}
)
export default store;

window.store = store;


