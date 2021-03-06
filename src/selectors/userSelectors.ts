import {IUserReducer} from "../Redux/reducers/UserReducer";

export const getUserNameSelector = (state: IUserReducer) => state.user.name
export const getUsers = (state: IUserReducer) => state.user.colleagues.filter(item => item.length > 0)
export const getVotedUsersSelector = (state: IUserReducer) => state.user.votedColleagues
export const getScoresSelector = (state: IUserReducer) => state.user.scores
export const getEstimationSelector = (state: IUserReducer) => state.user.number