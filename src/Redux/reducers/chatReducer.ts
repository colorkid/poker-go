import {IChatState, IAllMessages, IAddMessageAction} from "../../Interfaces";
import {GET_MESSAGE} from "../../Constants/ChatConstants";
import {chatApi} from "../../api/chat-api";
import {getMessage} from "../actions/chatActions";

const initialState: IChatState = {
    allMessages: []
}

export const chatReducer = (state: IChatState = initialState, action: IAddMessageAction): IChatState => {
    switch (action.type) {
        case GET_MESSAGE:
            return {
                allMessages: [...state.allMessages, action.payload]
            }
        default:
            return state
    }
}

export const starChatting = () => async (dispatch: (arg: { type: string; payload: IAllMessages; }) => void) => {
    chatApi.onSubscribe((data: IAllMessages) => dispatch(getMessage(data)))
}