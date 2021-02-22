import React, {FC, useEffect, useState} from "react";
import User from "./User";
import {ApiWebsocket} from "../../api/websocketApi";
import {IGetName, IScores} from "../../Redux/reducers/UserReducer";
import {useDispatch, useSelector} from "react-redux";
import {setUserNameA} from "../../Redux/actions/userActions";
import {getScoresSelector, getUserNameSelector, getVotedUsersSelector} from "../../selectors/userSelectors";
import {getSubscribedState} from "../../selectors/boardSelecors";
import {Skeleton} from "@material-ui/core";

export interface IUser {
    setName: Function,
    name: string,
    votedUsers?: string[],
    scores?: IScores[],
}

const UserContainer: FC = () => {
    const userName: string = useSelector(getUserNameSelector);
    const votedUsers: string[] = useSelector(getVotedUsersSelector);
    const scores: IScores[] = useSelector(getScoresSelector);
    const subscribedState: boolean = useSelector(getSubscribedState);
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setName(userName)
    }, [userName])

    useEffect(() => {
        if (name.length) {
            sendUserName();
            subscribeOnSendLeaveMessage();
        }
    }, [name])

    const sendUserName = () => {
        const userNameToSend: IGetName = {
            name
        }
        dispatch(setUserNameA(userNameToSend))
        ApiWebsocket.sendUserName({name: name})
    }

    const subscribeOnSendLeaveMessage = () => {
        window.addEventListener("beforeunload", (e) => {
            e.preventDefault();
            return ApiWebsocket.removeUser({name: name})
        });
    }

    return <>{subscribedState
        ? <User name={name} setName={setName} votedUsers={votedUsers} scores={scores} />
        : <Skeleton width={125} height={48} />
    }</>
}

export default UserContainer;