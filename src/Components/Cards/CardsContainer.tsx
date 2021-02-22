import React, {FC, useEffect, useState} from "react";
import Cards from "./Cards";
import {useDispatch, useSelector} from "react-redux";
import {getUserNameSelector} from "../../selectors/userSelectors";
import {ApiWebsocket} from "../../api/websocketApi";
import {setNumberA} from "../../Redux/actions/userActions";

export interface IVote {
    name: string,
}

const CardsContainer: FC = () => {
    const userName: string = useSelector(getUserNameSelector)
    const [number, setNumber] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        if (userName.length) {
            const data: IVote = {
                name: userName,
            }

            dispatch(setNumberA(number))
            ApiWebsocket.vote(data)
        }
    }, [number])

    return <Cards setNumber={setNumber} />
}

export default CardsContainer;