const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";


let initialState = {
    messages: [
        { id: "1", message: "Hi"},
        { id: "2", message: "Hello"},
        { id: "3", message: "Yo"},
        { id: "4", message: "Hi"},
        { id: "5", message: "Helloe"},
        { id: "6", message: "Yo"}
    ],
    dialogs: [
        { id: "1", name: "John Wick"},
        { id: "2", name: "Robert L"},
        { id: "3", name: "Angelina Golie"},
        { id: "4", name: "Megan Fox"},
        { id: "5", name: "Margot Robbie"},
        { id: "6", name: "Sergio A"}
    ],
    newMessageText: "",
};


const messagesReducer = (state = initialState, action) => {

    // let stateCopy;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            // stateCopy = 
            return {
                ...state,
                newMessageText: action.text
            };
            // stateCopy.newMessageText = action.text;
            // return stateCopy;
        case SEND_MESSAGE: 

        let messageText = state.newMessageText;
        // stateCopy = 
        return {
            ...state,
            newMessageText: " ",
            messages: [...state.messages, { id: "6", message: messageText }]
        };
            // let stateCopy = {...state};
            // let messageText = stateCopy.newMessageText;
            // stateCopy.newMessageText = " ";
            // stateCopy.messages.push({ id: "6", message: messageText })
            // return stateCopy;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
  
export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text});

export default messagesReducer;