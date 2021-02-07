import React, {FC} from "react";
import {useSelector} from "react-redux";
import {IAllMessages} from "../../../../Interfaces";
import MessagesBoard from "./MessagesBoard";
import {getAllMessages} from "../../../../selectors/ChatSelectors";

const MessagesBoardContainer: FC = () => {
    const allMessages: IAllMessages[] = useSelector(getAllMessages)

    return <MessagesBoard allMessages={allMessages}/>
}

export default MessagesBoardContainer;

