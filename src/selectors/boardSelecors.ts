// import {createSelector} from "reselect";
import {IBoardTitleState, ISubscribedState} from "../Interfaces";

export const getNameStory = (state: IBoardTitleState) => state.board.title
export const getSubscribedState = (state: ISubscribedState) => state.board.subscribed
