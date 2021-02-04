import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Message from "../Message";
import {IAllMessages} from "../../ChatContainer";

const useStyles = makeStyles({
    root: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.23)",
        borderRadius: 4,
        minHeight: 200,
        maxHeight: 200,
        padding: 16,
        overflowY: 'auto',
    },
});

interface IMessagesBoard {
    allMessages?: Array<IAllMessages>;
}

const MessagesBoard: FC<IMessagesBoard> = ({allMessages}) => {
    const styles = useStyles();

    return <div className={styles.root}>
        {allMessages && allMessages.map((item) => (
            <Message name={item.name} text={item.txt} />
        ))}
    </div>
}

export default MessagesBoard;