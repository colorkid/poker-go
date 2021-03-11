import React, {FC} from "react";
import ClearEstimations from "./ClearEstimations";
import {useSelector} from "react-redux";
import {getUserNameSelector} from "../../selectors/userSelectors";
import {ApiWebsocket} from "../../api/websocketApi";

const ClearEstimationsContainer: FC = () => {
    const userName: string = useSelector(getUserNameSelector);

    const clearEstimations = () => {
        ApiWebsocket.clearEstimations({name: userName})
    };
    return <ClearEstimations clearEstimations={clearEstimations} />
}

export default ClearEstimationsContainer;
