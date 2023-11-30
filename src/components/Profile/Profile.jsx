import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () =>{

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
	return (
			<div>
					<ProfileInfo/>
					<MyPosts posts={posts}/>
				</div>
	)
}

export default Profile;