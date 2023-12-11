import { combineReducers, createStore } from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import siteBarReducer from "./sitebar-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	siteBar:siteBarReducer,
})

let store = createStore(reducers);

export default store