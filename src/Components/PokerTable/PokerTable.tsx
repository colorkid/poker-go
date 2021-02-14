import React, {FC} from "react";
import User from "../User/UserContainer";
import Colleagues from "../Colleagues/ColleaguesContainer";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: "center",
        position: 'relative',
        height: 425,
    },
    table: {
        position: 'absolute',
        width: 'calc(100% + 80px)',
        height: 150,
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.11)',
        borderRadius: 25,
        marginLeft: -40
    }
});

const PokerTable:FC = () => {
    const styles = useStyles();

    return <div className={styles.container}>
        <div className={styles.table}/>
        <User />
        <Colleagues />
    </div>
}

export default PokerTable;