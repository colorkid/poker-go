import React, {FC, useEffect, useRef} from "react";
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
    const boardRef = useRef<HTMLDivElement>(null);
    const styles = useStyles();

    useEffect(() => {
        if (boardRef.current) {
            boardRef.current.scrollTop = boardRef.current.scrollHeight;
        }
    }, [allMessages])

    return <div className={styles.root} ref={boardRef}>
        {allMessages && allMessages.map((item) => (
            <Message name={item.name} text={item.txt} />
        ))}
    </div>
}

export default MessagesBoard;