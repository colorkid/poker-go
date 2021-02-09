import {INameStory} from "../../Interfaces";
import {GET_NAME_STORY, SET_SUBSCRIBE_STATE} from "../../Constants/boardConstants";

export const getNameStory = (data: INameStory)  => ({
    type: GET_NAME_STORY,
    payload: data
});

export const setSubscribedState = () => ({
    type: SET_SUBSCRIBE_STATE,
    payload: true
});