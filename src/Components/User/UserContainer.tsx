import React, {FC, useEffect, useState} from "react";
import User from "./User";
import {ApiWebsocket} from "../../api/websocketApi";
import {IGetName, IScores} from "../../Redux/reducers/UserReducer";
import {useDispatch, useSelector} from "react-redux";
import {setUserNameA} from "../../Redux/actions/userActions";
import {getScoresSelector, getUserNameSelector, getVotedUsersSelector} from "../../selectors/userSelectors";

export interface IUser {
    setName: Function,
    name: string,
    votedUsers?: string[],
    scores?: IScores[],
}

const UserContainer: FC = () => {
    const userName: string = useSelector(getUserNameSelector)
    const votedUsers: string[] = useSelector(getVotedUsersSelector);
    const scores: IScores[] = useSelector(getScoresSelector);
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        setName(userName)
    }, [userName])

    useEffect(() => {
        if (name.length) {
            const userNameToSend: IGetName = {
                name
            }
            dispatch(setUserNameA(userNameToSend))
            ApiWebsocket.sendUserName({name: name})
        }
    }, [name])

    useEffect(() => {
        if (name.length) {
            return () => ApiWebsocket.removeUser({name: name})
        }
    }, [])

    return <User name={name} setName={setName} votedUsers={votedUsers} scores={scores} />
}

export default UserContainer;