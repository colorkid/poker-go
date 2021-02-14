import {IGetName} from "../reducers/UserReducer";
import {SET_NAME, PUSH_USER_NAME, REMOVE_USER} from "../../Constants/userConstants";

export const setUserName = (data: IGetName)  => ({
    type: SET_NAME,
    payload: data
});

export const pushUserName = (data: IGetName)  => ({
    type: PUSH_USER_NAME,
    payload: data
});

export const removeUser = (data: IGetName)  => ({
    type: REMOVE_USER,
    payload: data
});