import React, {FC} from "react";
import OpenCard from "./OpenCardButton";
import {ApiWebsocket} from "../../api/websocketApi";
import {useSelector} from "react-redux";
import {getUserNameSelector, getUsers, getVotedUsersSelector} from "../../selectors/userSelectors";
import {getSubscribedState} from "../../selectors/boardSelecors";

const OpenCardContainer: FC = () => {
    const userName: string = useSelector(getUserNameSelector)
    const votedUsers: string[] = useSelector(getVotedUsersSelector);
    const colleaguesNames: string[] = useSelector(getUsers);
    const subscribedState: boolean = useSelector(getSubscribedState)

    const disabledButton = !colleaguesNames.length || votedUsers.length < colleaguesNames.length;

    const sayShowCards = () => {
        const data = {
            name: userName
        }

        ApiWebsocket.openCards(data)
    }

    return <OpenCard sayShowCards={sayShowCards} disabledButton={disabledButton} subscribedState={subscribedState} />
}

export default OpenCardContainer;
