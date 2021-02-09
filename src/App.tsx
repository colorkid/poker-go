import * as React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
// import Chat from "./Components/Chat";
import {Box} from "@material-ui/core";
import PokerBoardContainer from "./Components/PokerBoard";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
});

const App = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <PokerBoardContainer />
        </div>
    );
}

export default App;