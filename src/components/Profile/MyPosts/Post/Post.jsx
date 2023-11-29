import React from 'react';
import classes from './Post.module.css';

const Post = (props) =>{
	return(
		<div className={classes.item}>
			<img src="https://www.giantbomb.com/a/uploads/scale_medium/3/33873/1700999-naruto.png" alt="" />
			{props.message} {props.message2}
			<div>
				<span >Like {props.likesAmount}</span>
			</div>
		</div>
	)
}

export default Post;