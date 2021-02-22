import React, {FC, useCallback, useEffect, useState} from "react";
import Cards from "./Cards";
import {useSelector} from "react-redux";
import {getUserNameSelector} from "../../selectors/userSelectors";
import {ApiWebsocket} from "../../api/websocketApi";

export interface IVote {
    name: string,
    score: number | string
}

const CardsContainer: FC = () => {
    const userName: string = useSelector(getUserNameSelector)
    const [number, setNumber] = useState('')

    useEffect(() => {
        if (userName.length) {
            const data: IVote = {
                name: userName,
                score: number
            }

            ApiWebsocket.vote(data)
        }
    }, [number])

    return <Cards setNumber={setNumber} />
}

export default CardsContainer;