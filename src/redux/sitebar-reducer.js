
let initialState = {
	friends:
		[
			{
				id: 1,
				name: 'Andrew'
			},
			{
				id: 2,
				name: 'Sasha'
			},
			{
				id: 3,
				name: 'Sveta'
			},
		]
};
const siteBarReducer = (state = initialState, action) =>
{
	return state;
}

export default siteBarReducer;