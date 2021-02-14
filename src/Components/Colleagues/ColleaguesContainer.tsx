import React, {FC, useEffect} from "react";
import Colleagues from "./Colleagues";
import {useSelector} from "react-redux";
import {IUserReducer} from "../../Redux/reducers/UserReducer";
import {getUserNameSelector} from "../User/UserContainer";

// DEPT перенести в отдельный файл селекторов
export const getUsers = (state: IUserReducer) => state.user.colleagues.filter(item => item.length > 0)

const ColleaguesContainer: FC = () => {
    const colleaguesNames: any = useSelector(getUsers);
    const userName: string = useSelector(getUserNameSelector)

    useEffect(() => {
        console.log(colleaguesNames)
    })

    return <>
        {colleaguesNames.map((item: string) => {
            return userName !== item && <Colleagues name={item} key={item} />
        })}
    </>
}

export default ColleaguesContainer;