import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Skeleton} from "@material-ui/core";

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
    },
    buttonDisabled: {
        pointerEvents: 'none',
        opacity: 0.5
    },
    skeleton: {
        transform: 'none',
        marginTop: 16,
    }
});

interface IOpenCard {
    sayShowCards: () => void,
    disabledButton: boolean,
    subscribedState: boolean,
}


const OpenCard: FC<IOpenCard> = ({sayShowCards, disabledButton, subscribedState}) => {
    const styles = useStyles();

    const onClickHandler = () => {
        sayShowCards();
    }

    return <>
        {subscribedState
            ? <div
                className={`${styles.button} ${disabledButton ? styles.buttonDisabled : ''}`}
                onClick={onClickHandler}
            >
                Show cards
            </div>
            : <Skeleton width={116} height={40} className={styles.skeleton} />
        }
    </>
}

export default OpenCard;
