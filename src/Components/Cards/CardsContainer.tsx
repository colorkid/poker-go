import React, {FC, useEffect, useState} from "react";
import Cards from "./Cards";
import {useDispatch, useSelector} from "react-redux";
import {getUserNameSelector} from "../../selectors/userSelectors";
import {ApiWebsocket} from "../../api/websocketApi";
import {reVoteA, setNumberA} from "../../Redux/actions/userActions";

export interface IVote {
    name: string,
}

const CardsContainer: FC = () => {
    const userName: string = useSelector(getUserNameSelector)
    const [estimation, setEstimation] = useState<string>('')
    const dispatch = useDispatch();

    const reVote = (data: IVote) => {
        dispatch(reVoteA(data))
    }

    const setOwnEstimation = (estimation: string) => {
        dispatch(setNumberA(estimation))
    }

    useEffect(() => {
        if (userName.length) {
            const data: IVote = {
                name: userName,
            }

            reVote(data);
            setOwnEstimation(estimation);

            ApiWebsocket.vote(data)
        }
    }, [estimation])

    return <Cards setEstimation={setEstimation} estimation={estimation} />
}

export default CardsContainer;