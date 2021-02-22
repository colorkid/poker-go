import {IGetName, IUserVoted} from "../reducers/UserReducer";
import {
    SET_NAME,
    PUSH_USER_NAME,
    REMOVE_USER,
    VOTED_USER,
    SHOW_CARD,
    SET_NUMBER,
    RE_VOTE,
    NEW_GAME,
} from "../../Constants/userConstants";

export const setUserNameA = (data: IGetName) => ({
    type: SET_NAME,
    payload: data
});

export const pushUserNameA = (data: IGetName) => ({
    type: PUSH_USER_NAME,
    payload: data
});

export const removeUserA = (data: IGetName) => ({
    type: REMOVE_USER,
    payload: data
});

export const votedUserA = (data: IUserVoted) => ({
    type: VOTED_USER,
    payload: data
});

export const showCardA = (data: any) => ({
    type: SHOW_CARD,
    payload: data
});

export const setNumberA = (data: string | null) => ({
    type: SET_NUMBER,
    payload: data
});

export const reVoteA = (data: IUserVoted) => ({
    type: RE_VOTE,
    payload: data
});

export const newGameA = () => ({
    type: NEW_GAME,
});