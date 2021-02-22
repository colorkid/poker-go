import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        borderRadius: 4,
        backgroundColor: "#4791db",
        color: "#fff",
        cursor: "pointer",
        marginTop: 16
    }
});



const OpenCard: FC = () => {
    const styles = useStyles();

    return <div className={styles.button}>Show cards</div>
}

export default OpenCard;
