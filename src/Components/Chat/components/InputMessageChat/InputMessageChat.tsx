import React, {FC, useState} from "react";
import {TextField, Button} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {IInputMessageChat} from "../../../../Interfaces";

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

const InputMessageChat: FC<IInputMessageChat> = ({pushMessage, setNickName, nickName}) => {
    const [nick, setNick] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const styles = useStyles();

    const sentMessage = () => {
        if (message.length) {
            pushMessage(message)
            setMessage('')
        }
    }

    const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const onClickSendHandler = () => {
        sentMessage()
    }

    const onChangeNickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNick(e.target.value)
    }

    const onClickSaveNickHandler = () => {
        setNickName(nick);
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            sentMessage()
        }
    }

    return <div className={styles.root}>
        {!nickName.length && <div className={styles.nickname}>
            <TextField
                variant="standard"
                label="Write a nickname"
                className={styles.nicknameField}
                onChange={onChangeNickHandler}
            />
            <Button
                variant="outlined"
                color="primary"
                onClick={onClickSaveNickHandler}
                disabled={!nick.length}>
                Save
            </Button>
        </div>}
        <TextField
            fullWidth
            multiline
            rows={2}
            label="Write a message"
            className={styles.textField}
            onChange={onChangeMessageHandler}
            value={message}
            onKeyPress={handleKeyPress}
        />
        <Button
            variant="contained"
            color="primary"
            disabled={!nickName.length}
            onClick={onClickSendHandler}>
            Sent
        </Button>
    </div>
}

export default InputMessageChat;