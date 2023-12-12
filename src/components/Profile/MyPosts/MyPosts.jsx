import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) =>{

	let postsElement = props.posts.map(p => <Post message={p.message} likesAmount={p.likesAmount} />)

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () =>{
		let text = newPostElement.current.value;
		props.updateNewPostText(text);

		// let action = { type: 'update-new-post-text', newText: text };
		// let action = updateNewPostTextActionCreator(text);

		// props.dispatch(action);
	}

	return(
		<div className={s.postsBlock}>
				<h3 className={s.heading}>MyPosts</h3>
				<div >
					<div>
						<textarea onChange={onPostChange} 
											ref={newPostElement} 
											value={props.newPostText} />
					</div>
					<div>
						<button className={s.button} onClick={onAddPost}>Add Post</button>
					</div>
				</div>
				<div className={s.posts}>
					{postsElement}
				</div>
			</div>
	)
}

export default MyPosts;