import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () =>{

	let posts = [
		{
			id:1,
			message: 'Dattebae',
			message2 : 'Ramen',
			likesAmount: 155,
		},
		{
			id:2,
			message: 'I wanna be Hokage!',
			likesAmount: 555,
		},
		{
			id:3,
			message: 'My name is Narutooo!',
			likesAmount: 5555,
		},
	]

	let postsElement = posts.map(p => <Post message={p.message} message2={p.message2} likesAmount={p.likesAmount} />)

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