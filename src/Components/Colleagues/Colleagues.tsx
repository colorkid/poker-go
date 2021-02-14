import React, {FC} from "react";
import Player from "../Player";

export interface IColleague {
    name: string,
}

const Colleagues:FC<IColleague> = ({name}) => {
    return <Player name={name} />
}

export default Colleagues;