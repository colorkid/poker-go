import React, {useEffect, useState} from "react";
import Chat from "./Chat";
import {chatApi} from "../../api/chat-api";
import {starChatting} from "../../Redux/reducers/chatReducer";
import {useDispatch} from "react-redux";

const ChatContainer = () => {
    const [nickName, setNickName] = useState<string>("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(starChatting())
        return () => chatApi.closeConnection()
    }, [])

    const pushMessage = (message: string) => {
        const itemMessages = {
            author: nickName,
            message: message
        }

        chatApi.sendMessage(itemMessages)
    }

    return <Chat pushMessage={pushMessage} setNickName={setNickName} nickName={nickName} />
}

export default ChatContainer;