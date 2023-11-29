import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () =>{
	return (
			<div>
					<div>
						<img src='https://thumbs.dreamstime.com/b/fond-d-arbre-de-l-espace-57524764.jpg'/>
					</div>
					<div className={s.descriptionBlock}>
						ava + desc
					</div>
			</div>
	)
}

export default ProfileInfo;