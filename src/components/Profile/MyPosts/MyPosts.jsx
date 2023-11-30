import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) =>{


	let postsElement = props.posts.map(p => <Post message={p.message} message2={p.message2} likesAmount={p.likesAmount} />)

	return(
			<div className={s.postsBlock}>
				<h3>MyPosts</h3>
				<div >
					<div>
						<textarea name="" id="" cols="40" rows="8"></textarea>
					</div>
					<div>
						<button>Add Post</button>
					</div>
				</div>
				<div className={s.posts}>
					{postsElement}
				</div>
			</div>
	)
}

export default MyPosts;