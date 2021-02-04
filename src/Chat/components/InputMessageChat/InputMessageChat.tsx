import React, {FC, useState} from "react";
import {TextField, Grid, Button, Input} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
    },
    textField: {
        marginTop: 16,
        marginBottom: 8
    },
    nickname: {
        display: "flex",
        alignItems: "flex-end",
        width: "100%",
        marginTop: 16,
    },
    nicknameField: {
        marginRight: 8,
    }
});

interface IInputMessageChat {
    pushMessage: (message: string) => void;
    setNickName: Function,
    nickName: string
}

const InputMessageChat: FC<IInputMessageChat> = ({pushMessage, setNickName, nickName}) => {
    const [nick, setNick] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const styles = useStyles();

    const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const onClickSendHandler = () => {
        pushMessage(message);
        setMessage('')
    }

    const onChangeNickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNick(e.target.value)
    }

    const onClickSaveNickHandler = () => {
        setNickName(nick);
    }

    return <div className={styles.root}>
        {!nickName.length && <div className={styles.nickname}>
            <TextField
                variant="standard"
                label="Write Nickname"
                className={styles.nicknameField}
                onChange={onChangeNickHandler}
            />
            <Button
                variant="outlined"
                color="secondary"
                onClick={onClickSaveNickHandler}
                disabled={(nick.length === 0)}>
                Save
            </Button>
        </div>}
        <TextField
            fullWidth
            multiline
            rows={2}
            className={styles.textField}
            onChange={onChangeMessageHandler}
            value={message}
        />
        <Button
            variant="contained"
            color="primary"
            disabled={(nickName.length === 0)}
            onClick={onClickSendHandler}>
            Send
        </Button>
    </div>
}

export default InputMessageChat;