import {ApiWebsocket} from "../api/websocketApi";
import {INameStory} from "../Interfaces";
import {getNameStory, setSubscribedState} from "./actions/boardActions";
import {newGameA, pushUserNameA, removeUserA, showCardA, votedUserA} from "./actions/userActions";

export const subscribe = () => async (dispatch: (arg: { type: string; payload?: any; }) => void, getState: any) => {
    ApiWebsocket.onSubscribe(
        getState,
        (data: INameStory) => dispatch(getNameStory(data)),
        () => dispatch(setSubscribedState()),
        (data: any) => dispatch(pushUserNameA(data)),
        (data: any) => dispatch(removeUserA(data)),
        (data: any) => dispatch(votedUserA(data)),
        (data: any) => dispatch(showCardA(data)),
        () => dispatch(newGameA()),
    )
}