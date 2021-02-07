import React, {FC} from "react";
import InputMessageChat from "./components/InputMessageChat";
import MessagesBoardContainer from "./components/MessagesBoard";
import {Paper, Box} from '@material-ui/core';
import { IChat } from "../../Interfaces";

const Chat: FC<IChat> = ({pushMessage, setNickName, nickName}) => {
    return <Paper>
        <Box p={2}>
            <MessagesBoardContainer />
            <InputMessageChat pushMessage={pushMessage} setNickName={setNickName} nickName={nickName}/>
        </Box>
    </Paper>
}

export default Chat;