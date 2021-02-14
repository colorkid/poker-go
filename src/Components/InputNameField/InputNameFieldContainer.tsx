import React, {FC} from "react";
import InputNameField from "./InputNameField";
import {ApiWebsocket} from "../../api/websocketApi";
import {useSelector} from "react-redux";
import {getNameStory, getSubscribedState} from "../../selectors/boardSelecors";
import {INameStory} from "../../Interfaces";

const InputNameFieldContainer:FC = () => {
    const nameStory: string = useSelector(getNameStory)
    const subscribedState: boolean = useSelector(getSubscribedState)

    const setNameStory = (message: string) => {
        const nameStory: INameStory  = {
            title: message,
        }

        ApiWebsocket.sendTaskName(nameStory)
    }

    return <InputNameField setNameStory={setNameStory} nameStory={nameStory} subscribedState={subscribedState} />
}

export default InputNameFieldContainer;