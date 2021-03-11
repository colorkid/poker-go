import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {newGameA} from "../../Redux/actions/userActions";

const useStyles = makeStyles({
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: '8px 16px',
        borderRadius: 4,
        backgroundColor: "#e57373",
        color: "#fff",
        cursor: "pointer",
        marginTop: 16,
        transition: '0.2s',

        '&:hover': {
            backgroundColor: '#f44336'
        },

        '&:active': {
            backgroundColor: '#d32f2f'
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

interface IClearEstimations {
    clearEstimations: () => void,
}

const ClearEstimations: FC<IClearEstimations> = ({clearEstimations}) => {
    const styles = useStyles();

    const onClickHandler = () => {
        clearEstimations();
    }

    return <div className={styles.button} onClick={onClickHandler}>Re-vote1</div>
}

export default ClearEstimations;
