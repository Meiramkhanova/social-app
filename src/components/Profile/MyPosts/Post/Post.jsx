import React from 'react';
import classes from './Post.module.css';

const Post = (props) =>{
	return(
		<div className={classes.item}>
			<img src="https://i0.wp.com/madeofstill.com/wp-content/uploads/2022/04/signs-of-anointed-person.jpg?fit=1000%2C667&ssl=1" alt="" />
			{props.message} {props.message2}
			<div>
				<span >Like {props.likesAmount}</span>
			</div>
		</div>
	)
}

export default Post;