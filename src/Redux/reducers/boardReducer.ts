import {IBoardState, IGetNameStoryAction, ISubscribedAction} from "../../Interfaces";
import {GET_NAME_STORY, SET_SUBSCRIBE_STATE} from "../../Constants/boardConstants";

const initialState: IBoardState = {
    title: '',
    subscribed: false,
}

type ActionTypes = IGetNameStoryAction | ISubscribedAction;

export const boardReducer = (state: IBoardState = initialState, action: ActionTypes): IBoardState => {
    switch (action.type) {
        case GET_NAME_STORY:
            return {
                ...state,
                title: action.payload.title,
            }
        case SET_SUBSCRIBE_STATE:
            return {
                ...state,
                subscribed: !!action.payload,
            }
        default:
            return state
    }
}
