const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
	users:
		[
			{ id: 1, followed:true, fullName: 'Adina', status: 'I am looking for a job right now', location : {city:'Ayagoz', country:'Kazakhstan'} },
			{ id: 2, followed:false, fullName: 'Alina', status: 'Learning Java', location : {city:'Almaty', country:'Kazakhstan'} },
			{ id: 3,followed:false, fullName: 'Marinette', status: 'Nice weekends!', location : {city:'Paris', country:'France'} },
			{ id: 4,followed:true, fullName: 'Andrew', status: 'I am free too help with VideoDesign', location : {city:'Moscow', country:'Russia'} },
		],
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed:true}
					}
					return u
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed:false}
					}
					return u
				})
			}
		default:
			return state
	}
}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId})

export default profileReducer;