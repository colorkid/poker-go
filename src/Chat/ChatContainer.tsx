import React, {useState} from "react";
import Chat from "./Chat";

export interface IAllMessages {
    name: string;
    txt: string,
}

const ChatContainer = () => {
    const [allMessages, setAllMessages] = useState<Array<IAllMessages>>([]);
    const [nickName, setNickName] = useState<string>("")

    const pushMessage = (message: string) => {
        const itemMessages = {
            name: nickName,
            txt: message
        }
        setAllMessages([...allMessages, itemMessages]);
    }

    return <Chat pushMessage={pushMessage} setNickName={setNickName} nickName={nickName} allMessages={allMessages}/>
}

export default ChatContainer;