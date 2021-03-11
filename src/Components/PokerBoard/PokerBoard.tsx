import React, {FC} from "react";
import {makeStyles} from "@material-ui/core/styles";
import InputNameFieldContainer from "../InputNameField";
import PokerTable from "../PokerTable";
import Cards from "../Cards";
import OpenCard from "../OpenCardButton";
import ClearEstimations from "../ClearEstimations";

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
        height: 'calc(100vh - 375px)',
        padding: 16
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
    },
    buttons: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: "column",
    }
});

const PokerBoard:FC = () => {
    const styles = useStyles();

    return <div className={styles.board}>
        <header className={styles.header}>
            <InputNameFieldContainer />
            <div className={styles.buttons}>
                <OpenCard />
                <ClearEstimations />
            </div>
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