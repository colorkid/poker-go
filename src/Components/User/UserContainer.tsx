import React, {FC, useEffect, useState} from "react";
import User from "./User";
import {ApiWebsocket} from "../../api/websocketApi";
import {IGetName, IUserReducer} from "../../Redux/reducers/UserReducer";
import {useDispatch, useSelector} from "react-redux";
import {setUserName} from "../../Redux/actions/userActions";

export interface IUser {
    setName: Function,
    name: string,
}

// DEPT перенести в отдельный файл селекторов
export const getUserNameSelector = (state: IUserReducer) => state.user.name

const UserContainer: FC = () => {
    const userName: string = useSelector(getUserNameSelector)

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
            dispatch(setUserName(userNameToSend))
            ApiWebsocket.sendUserName({name: name})
        }
    }, [name])

    useEffect(() => {
        if (name.length) {
            return () => ApiWebsocket.removeUser({name: name})
        }
    }, [])

    return <User name={name} setName={setName} />
}

export default UserContainer;