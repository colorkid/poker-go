import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import InputNameFieldContainer from "../InputNameField";
import PokerTable from "../PokerTable";

const useStyles = makeStyles({
    board: {
        height: '100%',
        padding: 16
    },
    header: {
        display: 'flex',
    },
    middle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 137px)',
        padding: 16
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
        <div className={styles.middle}>
            <PokerTable />
        </div>
        <footer className={styles.footer}>footer</footer>
    </div>
}

export default PokerBoard;