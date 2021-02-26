import React from "react";
import { connect } from "react-redux";
// import StoreContext from "../../StoreContext";

import {
  updateNewMessageTextCreator,
  sendMessageCreator,
} from "./../../redux/MessagesReducer";
import Dialogs from "./Dialogs";

// function DialogsContainer() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().messagesPage;

//         let handleSendMessage = () => {
//           store.dispatch(sendMessageCreator());
//         };

//         let handleNewMessageChange = (text) => {
//           store.dispatch(updateNewMessageTextCreator(text));
//         };
//         return (
//           <Dialogs
//             updateNewMessageText={handleNewMessageChange}
//             sendMessage={handleSendMessage}
//             messagesPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }


let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
