import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () =>{
	return (
		<div className={s.profile}>
			<div>
				<img className={s.image_size} src="https://i0.wp.com/madeofstill.com/wp-content/uploads/2022/04/signs-of-anointed-person.jpg?fit=1000%2C667&ssl=1" alt=''/>
			</div>
			<div className={s.descriptionBlock}>
				<h4 className={s.heading}>Description</h4>
			</div>
			</div>
	)
}

export default ProfileInfo;