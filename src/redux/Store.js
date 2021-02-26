// import profileReducer from "./ProfileReducer";
// import sideBarReducer from "./SideBarReducer";
// import messagesReducer from "./MessagesReducer";

// let store = {
//     _state: {

//         profilePage: {
//             posts: [
//                 { id: "1", message: "Hi, how are you?", likesCount: 12 },
//                 { id: "2", message: "It`s my first post", likesCount: 10 },
//               ],
//               newPostText: "it React"
//         },
    
//         messagesPage: {
//             messages: [
//                 { id: "1", message: "Hi"},
//                 { id: "2", message: "Hello"},
//                 { id: "3", message: "Yo"},
//                 { id: "4", message: "Hi"},
//                 { id: "5", message: "Helloe"},
//                 { id: "6", message: "Yo"}
//             ],
//             dialogs: [
//                 { id: "1", name: "John Wick"},
//                 { id: "2", name: "Robert L"},
//                 { id: "3", name: "Angelina Golie"},
//                 { id: "4", name: "Megan Fox"},
//                 { id: "5", name: "Margot Robbie"},
//                 { id: "6", name: "Sergio A"}
//             ],
//             newMessageText: "",
//         },

//         sideBar: {},
//     },
    
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._rerenderEnrireTree = observer;
//     },

//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
//         this._state.sideBar = sideBarReducer(this._state.sideBar, action);

//         this._rerenderEnrireTree(this._state);
//     }
// };

// export default store;