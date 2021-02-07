import React, {FC, memo} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {IAllMessages} from "../../../../Interfaces";

const useStyles = makeStyles({
    message: {
        display: "flex",
    },
    name: {
        fontWeight: 500,
        paddingRight: 4
    },
});

const Message: FC<IAllMessages> = ({author = 'George', message}) => {
    const styles = useStyles();

    return <div className={styles.message}>
        <div className={styles.name}>{`${author}:`}</div>
        <div>{message}</div>
    </div>
}

export default memo(Message);