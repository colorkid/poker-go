import {GET_MESSAGE} from "../Constants/ChatConstants";

export interface IAllMessages {
    author: string
    message: string
}

export interface IChatMessagesState {
    chat: IChatState
}

export interface IChat {
    pushMessage: (message: string) => void
    setNickName: Function
    nickName: string
}

export interface IInputMessageChat {
    pushMessage: (message: string) => void
    setNickName: Function
    nickName: string
}

export interface IAddMessageAction {
    type: typeof GET_MESSAGE
    payload: IAllMessages
}

export interface IChatState {
    allMessages: IAllMessages[]
}