import React, {FC} from "react";
import ClearEstimations from "./ClearEstimations";
import {useDispatch} from "react-redux";
import {newGameA} from "../../Redux/actions/userActions";

const ClearEstimationsContainer: FC = () => {
    const dispatch = useDispatch();

    const clearEstimations = () => {
        dispatch(newGameA())
    };
    return <ClearEstimations clearEstimations={clearEstimations} />
}

export default ClearEstimationsContainer;
