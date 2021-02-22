import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PokerBoard from "./Components/PokerBoard";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {subscribe} from "./Redux/thunkSubscribers";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
});

const App = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(subscribe())
    }, [])

    return (
        <div className={styles.root}>
            <PokerBoard />
        </div>
    );
}

export default App;