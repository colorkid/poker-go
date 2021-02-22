import {ApiWebsocket} from "../api/websocketApi";
import {INameStory} from "../Interfaces";
import {getNameStory, setSubscribedState} from "./actions/boardActions";
import {pushUserNameA, removeUser, showCard, votedUserA} from "./actions/userActions";

export const subscribe = () => async (dispatch: (arg: { type: string; payload: any; }) => void, getState: any) => {
    ApiWebsocket.onSubscribe(
        getState,
        (data: INameStory) => dispatch(getNameStory(data)),
        () => dispatch(setSubscribedState()),
        (data: any) => dispatch(pushUserNameA(data)),
        (data: any) => dispatch(removeUser(data)),
        (data: any) => dispatch(votedUserA(data)),
        (data: any) => dispatch(showCard(data)),
    )
}