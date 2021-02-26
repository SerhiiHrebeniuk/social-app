import React from "react";
import style from "./Dialogs.module.css";

import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

function Dialogs(props) {
  
  let state = props.messagesPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messageElements = state.messages.map((text) => (
    <Message message={text.message} key={text.id} />
  ));

  let newMessageText = state.newMessageText;

  let handleSendMessage = () => {
    props.sendMessage();
  };

  let handleNewMessageChange = (event) => {
    let text = event.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.items}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageText}
              onChange={handleNewMessageChange}
              placeholder="Type Your Message"
            ></textarea>
          </div>
          <div>
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
