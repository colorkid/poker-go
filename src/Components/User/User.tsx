import React, {FC, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {IUser} from "./UserContainer";
import {TextField} from "@material-ui/core";
import {ApiWebsocket} from "../../api/websocketApi";
import Player from "../Player";
import {useSelector} from "react-redux";
import {getVotedUsersSelector} from "../../selectors/userSelectors";

const useStyles = makeStyles({
    inputName: {
        minWidth: 70,
        maxWidth: 125,
        marginTop: 12
    }
});

const User: FC<IUser> = ({name, setName}) => {
    const votedUsers: string[] = useSelector(getVotedUsersSelector);
    const [login, setLogin] = useState('');
    const styles = useStyles();

    const onChangeMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    const onBlurHandler = () => {
        setName(login)
    }

    const onDoubleClickHandler = () => {
        if (name.length) {
            ApiWebsocket.removeUser({name: name})
        }
        setLogin(name)
        setName('')
    }

    return <>
        {name
            ? <Player name={name} onDoubleClickHandler={onDoubleClickHandler}  isVoted={votedUsers.includes(name)}/>
            : <TextField
                className={styles.inputName}
                label="Your name"
                variant="standard"
                value={login}
                onChange={onChangeMessageHandler}
                onBlur={onBlurHandler}
                autoFocus
            />
        }
    </>
}

export default User;