import React, {useEffect, useState, FC} from "react";
import Chat from "./Chat";
import {chatApi} from "../../api/chat-api";
import {starChatting} from "../../Redux/reducers/chatReducer";
import {useDispatch} from "react-redux";
import {IAllMessages} from "../../Interfaces";

const ChatContainer:FC = () => {
    const [nickName, setNickName] = useState<string>("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(starChatting())
    }, [])

    const pushMessage = (message: string) => {
        const itemMessages: IAllMessages = {
            author: nickName,
            message: message
        }

        chatApi.sendMessage(itemMessages)
    }

    return <Chat pushMessage={pushMessage} setNickName={setNickName} nickName={nickName} />
}

export default ChatContainer;