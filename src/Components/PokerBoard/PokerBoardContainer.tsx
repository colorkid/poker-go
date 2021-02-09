import React, {FC, useEffect} from "react";
import PokerBoard from "./PokerBoard";
import {subscribe} from "../../Redux/reducers/boardReducer";
import {useDispatch} from "react-redux";

const PokerBoardContainer:FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(subscribe())
    }, [])

    return <PokerBoard />
}

export default PokerBoardContainer;