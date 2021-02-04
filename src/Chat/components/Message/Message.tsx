import React, {FC, memo} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    message: {
        display: "flex",
    },
    name: {
        fontWeight: 500,
        paddingRight: 4
    },
});

interface IMessage {
    name?: string;
    text: string;
}

const Message: FC<IMessage> = ({name = 'George', text}) => {
    const styles = useStyles();

    return <div className={styles.message}>
        <div className={styles.name}>{`${name}:`}</div>
        <div>{text}</div>
    </div>
}

export default memo(Message);