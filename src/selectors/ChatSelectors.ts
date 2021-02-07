// import {createSelector} from "reselect";
import {IChatMessagesState} from "../Interfaces";

export const getAllMessages = (state: IChatMessagesState) => state.chat.allMessages