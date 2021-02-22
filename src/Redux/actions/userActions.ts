import {IGetName, IUserVoted} from "../reducers/UserReducer";
import {SET_NAME, PUSH_USER_NAME, REMOVE_USER, VOTED_USER, SHOW_CARD, SET_NUMBER} from "../../Constants/userConstants";

export const setUserNameA = (data: IGetName) => ({
    type: SET_NAME,
    payload: data
});

export const pushUserNameA = (data: IGetName) => ({
    type: PUSH_USER_NAME,
    payload: data
});

export const removeUser = (data: IGetName) => ({
    type: REMOVE_USER,
    payload: data
});

export const votedUser = (data: IUserVoted) => ({
    type: VOTED_USER,
    payload: data
});

export const showCard = (data: any) => ({
    type: SHOW_CARD,
    payload: data
});

export const setNumberA = (data: string) => ({
    type: SET_NUMBER,
    payload: data
});