const add_post = 'add-post';
const update_new_post_text = 'update-new-post-text';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case add_post:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesAmount: 1
			};
			state.posts.push(newPost);
			state.newPostText = '';
			return state
		case update_new_post_text:
			state.newPostText = action.newText;
			return state;
		default:
			return state
	}
}

export const addPostActionCreator = () => ({type: add_post})

export const updateNewPostTextActionCreator = (text) => ({ type: update_new_post_text, newText: text })

export default profileReducer;