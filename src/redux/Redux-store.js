import {combineReducers, createStore} from "redux";

import ProfileReduser from "./ProfileReducer";
import MessagesReduser from "./MessagesReducer";
import SideBarReduser from "./SideBarReducer";
import UsersReducer from "./UsersReducer";


let redusers = combineReducers({
    profilePage: ProfileReduser,
    messagesPage: MessagesReduser,
    sideBar: SideBarReduser,
    usersPage: UsersReducer
});



let store = createStore(redusers);

window.store = store;


export default store;