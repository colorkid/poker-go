import {
    SET_NAME,
    PUSH_USER_NAME,
    REMOVE_USER,
    VOTED_USER,
    SET_NUMBER,
    SHOW_CARD,
    RE_VOTE
} from "../../Constants/userConstants";

export interface IUserReducer {
    user: IUserState,
}

export interface IUserVoted extends IGetName {
}

export interface IGetName {
    name: string
}

export interface IScores {
    name: string,
    score: number
}

export interface IUserState {
    name: string,
    colleagues: string[],
    votedColleagues: string[],
    number: number | null,
    scores: IScores[],
}

const initialState: IUserState = {
    name: '',
    colleagues: [],
    votedColleagues: [],
    number: null,
    scores: []
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
        case VOTED_USER: {
            return pushVotedUser(state, action.payload.name)
        }
        case SET_NUMBER:
            return {
                ...state,
                number: action.payload,
            }
        case SHOW_CARD:
            return {
                ...state,
                votedColleagues: [],
                number: null,
                scores: pushScores(state.scores, action.payload)
            }
        case RE_VOTE:
            return {
                ...state,
                scores: state.scores.filter(item => item.name !== action.payload.name)
            }
        default:
            return state
    }
}

const pushScores = (scores: IScores[], score: any) => {
    const croppedArr = scores.filter(item => item.name !== score.name);
    return [...croppedArr, score]
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
            scores: state.scores.filter((item: any) => item.name !== name),
            votedColleagues: [...state.votedColleagues, name],
        } : state
}