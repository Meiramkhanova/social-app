import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';



const MyPosts = (props) =>{

	let postsElement = props.posts.map(p => <Post message={p.message} message2={p.message2} likesAmount={p.likesAmount} />)

	let newPostElement = React.createRef();

	let addPost = () =>{
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () =>{
		let text = newPostElement.current.value;

		// let action = { type: 'update-new-post-text', newText: text };
		let action = updateNewPostTextActionCreator(text);

		props.dispatch(action);
	}

	return(
			<div className={s.postsBlock}>
				<h3>MyPosts</h3>
				<div >
					<div>
						<textarea onChange={onPostChange} 
											ref={newPostElement} 
											value={props.newPostText} />
					</div>
					<div>
						<button className={s.button} onClick={addPost}>Add Post</button>
					</div>
				</div>
				<div className={s.posts}>
					{postsElement}
				</div>
			</div>
	)
}

export default MyPosts;