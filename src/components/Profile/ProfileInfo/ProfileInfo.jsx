import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () =>{
	return (
			<div>
					<div>
				<img className={s.image_size} src="https://i0.wp.com/madeofstill.com/wp-content/uploads/2022/04/signs-of-anointed-person.jpg?fit=1000%2C667&ssl=1" alt=''/>
					</div>
					<div className={s.descriptionBlock}>
						ava + desc
					</div>
			</div>
	)
}

export default ProfileInfo;