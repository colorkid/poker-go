import {ApiWebsocket} from "../api/websocketApi";
import {INameStory} from "../Interfaces";
import {getNameStory, setSubscribedState} from "./actions/boardActions";
import {pushUserName, removeUser, votedUser} from "./actions/userActions";

export const subscribe = () => async (dispatch: (arg: { type: string; payload: any; }) => void, getState: any) => {
    ApiWebsocket.onSubscribe(
        getState,
        (data: INameStory) => dispatch(getNameStory(data)),
        () => dispatch(setSubscribedState()),
        (data: any) => dispatch(pushUserName(data)),
        (data: any) => dispatch(removeUser(data)),
        (data: any) => dispatch(votedUser(data))
    )
}