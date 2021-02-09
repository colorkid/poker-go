import {IBoardState, INameStory, IGetNameStoryAction, ISubscribedAction, ISubscribed} from "../../Interfaces";
import {GET_NAME_STORY, SET_SUBSCRIBE_STATE} from "../../Constants/boardConstants";
import {taskNameApi} from "../../api/task-name-api";
import {getNameStory, setSubscribedState} from "../actions/boardActions";

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

export const subscribe = () => async (dispatch: (arg: { type: string; payload: any; }) => void) => {
    taskNameApi.onSubscribe((data: INameStory) => dispatch(getNameStory(data)), () => dispatch(setSubscribedState()))
}