import React, {FC} from "react";
import InputMessageChat from "./components/InputMessageChat";
import MessagesBoard from "./components/MessagesBoard";
import {Paper, Box} from '@material-ui/core';
import {IAllMessages} from "./ChatContainer";

interface IChat {
    pushMessage: (message: string) => void;
    setNickName: Function,
    nickName: string,
    allMessages: Array<IAllMessages>
}

const Chat: FC<IChat> = ({pushMessage, setNickName, nickName, allMessages}) => {
    return <Paper>
        <Box p={2}>
            <MessagesBoard allMessages={allMessages}/>
            <InputMessageChat pushMessage={pushMessage} setNickName={setNickName} nickName={nickName}/>
        </Box>
    </Paper>
}

export default Chat;