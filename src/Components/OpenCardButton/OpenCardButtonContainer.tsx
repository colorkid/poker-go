import React, {FC} from "react";
import OpenCard from "./OpenCardButton";
import {ApiWebsocket} from "../../api/websocketApi";
import {useSelector} from "react-redux";
import {getUserNameSelector} from "../../selectors/userSelectors";

const OpenCardContainer: FC = () => {
    const userName: string = useSelector(getUserNameSelector)

    const sayShowCards = () => {
        const data = {
            name: userName
        }

        ApiWebsocket.openCards(data)
    }

    return <OpenCard sayShowCards={sayShowCards}/>
}

export default OpenCardContainer;
