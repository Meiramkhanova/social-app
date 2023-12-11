import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import siteBarReducer from "./sitebar-reducer";



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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.siteBar = siteBarReducer(this._state.siteBar, action);

		this._callSubscriber(this._state);
	}
}


export default store;

window.store = store;


