import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import InputNameFieldContainer from "../InputNameField";
import PokerTable from "../PokerTable";
import Cards from "../Cards";
import OpenCard from "../OpenCardButton";

const useStyles = makeStyles({
    board: {
        height: '100%',
        padding: 16
    },
    header: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    middle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 325px)',
        padding: 16
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
    }
});

const PokerBoard:FC = () => {
    const styles = useStyles();

    return <div className={styles.board}>
        <header className={styles.header}>
            <InputNameFieldContainer />
            <OpenCard />
        </header>
        <div className={styles.middle}>
            <PokerTable />
        </div>
        <footer className={styles.footer}>
            <Cards />
        </footer>
    </div>
}

export default PokerBoard;