import {GET_MESSAGE} from "../Constants/ChatConstants";
import {GET_NAME_STORY, SET_SUBSCRIBE_STATE} from "../Constants/boardConstants";

export interface IAllMessages {
    author: string
    message: string
}

export interface INameStory {
    title: string
}

export interface ISubscribed {
    subscribed: boolean
}

export interface ISubscribedState {
    board: ISubscribed
}

export interface IChatMessagesState {
    chat: IChatState
}

export interface IBoardTitleState {
    board: INameStory
}

export interface IChat {
    pushMessage: (message: string) => void
    setNickName: Function
    nickName: string
}

export interface INameField {
    setNameStory: (message: string) => void,
    nameStory: string,
    subscribedState: boolean
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

export interface IGetNameStoryAction {
    type: typeof GET_NAME_STORY
    payload: INameStory
}

export interface ISubscribedAction {
    type: typeof SET_SUBSCRIBE_STATE
    payload: ISubscribed
}

export interface IChatState {
    allMessages: IAllMessages[]
}

export interface IBoardState {
    title: string,
    subscribed: boolean,
}

export interface IApiWebSocket {
    onSubscribe: (getMessage: (arg: any) => void, setSubscribedState: () => void) => void,
    sendMessage: (data: any) => void,
}

export interface IApiChat {
    onSubscribe: (getMessage: (arg: any) => void) => void,
    sendMessage: (data: any) => void,
}
