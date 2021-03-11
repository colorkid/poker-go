import React, {FC, useEffect, useState} from "react";
import Cards from "./Cards";
import {useDispatch, useSelector} from "react-redux";
import {getUserNameSelector, getEstimationSelector} from "../../selectors/userSelectors";
import {ApiWebsocket} from "../../api/websocketApi";
import {reVoteA, setNumberA} from "../../Redux/actions/userActions";

export interface IVote {
    name: string,
}

const CardsContainer: FC = () => {
    const userName: string = useSelector(getUserNameSelector)
    const estimationR: string = useSelector(getEstimationSelector)

    const [estimationLocal, setEstimationLocal] = useState<string>(estimationR)
    const dispatch = useDispatch();

    const reVote = (data: IVote) => {
        dispatch(reVoteA(data))
    }

    const setOwnEstimation = (estimation: string) => {
        dispatch(setNumberA(estimation))
    }

    useEffect(() => {
        if (estimationR === '') {
            setEstimationLocal('');
        }
    }, [estimationR])

    useEffect(() => {
        if (userName.length && Number.isInteger(estimationLocal)) {
            const data: IVote = {
                name: userName,
            }

            reVote(data);
            setOwnEstimation(estimationLocal);

            ApiWebsocket.vote(data)
        }
    }, [estimationLocal])

    return <Cards setEstimation={setEstimationLocal} estimation={estimationLocal} />
}

export default CardsContainer;