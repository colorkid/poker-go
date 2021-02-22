import {SET_NAME, PUSH_USER_NAME, REMOVE_USER, VOTED_USER} from "../../Constants/userConstants";

export interface IUserReducer {
    user: IUserState,
}

export interface IUserVoted extends IGetName {}

export interface IGetName {
    name: string
}

export interface IUserState {
    name: string,
    colleagues: string[],
    votedColleagues: string[],
}

const initialState: IUserState = {
    name: '',
    colleagues: [],
    votedColleagues: [],
}

export const UserReducer = (state: IUserState = initialState, action: any): IUserState => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload.name,
            }
        case PUSH_USER_NAME:
            return pushUser(state, action.payload.name)
        case REMOVE_USER:
            return {
                ...state,
                colleagues: state.colleagues // state.colleagues.filter(colleagues => colleagues.length && colleagues !== action.payload.name)
            }
        case VOTED_USER:
            return pushVotedUser(state, action.payload.name)
        default:
            return state
    }
}

const pushUser = (state: any, name: string) => {
    return !state.colleagues.includes(name)
        ? {
            ...state,
            colleagues: [...state.colleagues, name],
        } : state
}

const pushVotedUser = (state: any, name: string) => {
    return !state.votedColleagues.includes(name)
        ? {
            ...state,
            votedColleagues: [...state.votedColleagues, name],
        } : state
}