import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    message: {
        display: "flex",
    },
    name: {
        fontWeight: 500,
        paddingRight: 4
    },
    text: {}
});

interface IMessage {
    name?: string;
    text: string;
}

const Message: FC<IMessage> = ({name = 'George', text}) => {
    const styles = useStyles();

    return <div className={styles.message}>
        <div className={styles.name}>{`${name}:`}</div>
        <div className={styles.text}>{text}</div>
    </div>
}

export default Message;