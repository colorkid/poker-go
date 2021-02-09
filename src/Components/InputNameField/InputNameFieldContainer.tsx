import React, {FC} from "react";
import InputNameField from "./InputNameField";
import {taskNameApi} from "../../api/task-name-api";
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

        taskNameApi.sendMessage(nameStory)
    }

    return <InputNameField setNameStory={setNameStory} nameStory={nameStory} subscribedState={subscribedState} />
}

export default InputNameFieldContainer;