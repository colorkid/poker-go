import {IAllMessages} from "../../Interfaces";
import {GET_MESSAGE} from "../../Constants/ChatConstants";

export const getMessage = (data: IAllMessages)  => ({
    type: GET_MESSAGE,
    payload: data
});