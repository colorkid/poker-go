import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: '8px 16px',
        borderRadius: 4,
        backgroundColor: "#4791db",
        color: "#fff",
        cursor: "pointer",
        marginTop: 16,
        transition: '0.2s',

        '&:hover': {
            backgroundColor: '#1976d2'
        },

        '&:active': {
            backgroundColor: '#115293'
        }
    }
});

interface IOpenCard {
    sayShowCards: () => void
}


const OpenCard: FC<IOpenCard> = ({sayShowCards}) => {

    const styles = useStyles();

    const onClickHandler = () => {
        sayShowCards();
    }

    return <div className={styles.button} onClick={onClickHandler}>Show cards</div>
}

export default OpenCard;
