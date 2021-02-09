import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import InputNameFieldContainer from "../InputNameField";

const useStyles = makeStyles({
    board: {
        height: '100%',
        padding: 16
    },
    header: {
        display: 'flex',
        justifyContent: 'center'
    },
    middle: {

    },
    footer: {

    }
});

const PokerBoard:FC = () => {
    const styles = useStyles();

    return <div className={styles.board}>
        <header className={styles.header}>
            <InputNameFieldContainer />
        </header>
        <div className={styles.middle}>middle</div>
        <footer className={styles.footer}>footer</footer>
    </div>
}

export default PokerBoard;