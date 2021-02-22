import React, {FC, useEffect} from "react";
import {useSelector} from "react-redux";
import {getUserNameSelector, getUsers, getVotedUsersSelector} from "../../selectors/userSelectors";
import Player from "../Player";

const Colleagues: FC = () => {
    const colleaguesNames: string[] = useSelector(getUsers);
    const userName: string = useSelector(getUserNameSelector);
    const votedUsers: string[] = useSelector(getVotedUsersSelector);

    useEffect(() => {
        console.log(votedUsers) // votedUsers
    })

    return <>
        {colleaguesNames.map((item: string) => {
            return userName !== item && <Player name={item} key={item} isVoted={votedUsers.includes(item)}/>
        })}
    </>
}

export default Colleagues;