import React, {FC} from "react";
import {useSelector} from "react-redux";
import {getScoresSelector, getUserNameSelector, getUsers, getVotedUsersSelector} from "../../selectors/userSelectors";
import Player from "../Player";
import {IScores} from "../../Redux/reducers/UserReducer";

const Colleagues: FC = () => {
    const colleaguesNames: string[] = useSelector(getUsers);
    const userName: string = useSelector(getUserNameSelector);
    const votedUsers: string[] = useSelector(getVotedUsersSelector);
    const scores: IScores[] = useSelector(getScoresSelector);

    return <>
        {colleaguesNames.map((name: string) => {
            return userName !== name && <Player
                name={name}
                key={name}
                isVoted={votedUsers.includes(name)}
                number={scores?.find(item => item.name === name)?.score}
            />
        })}
    </>
}

export default Colleagues;