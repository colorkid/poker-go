import * as React from 'react';
import Container from '@material-ui/core/Container';

import {makeStyles} from '@material-ui/core/styles';
import Chat from "./Components/Chat";
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    root: {},
});

const App = () => {
    const styles = useStyles();

    return (
        <Container maxWidth="sm" className={styles.root}>
            <Box p={2}>
                <Chat />
            </Box>
        </Container>
    );
}

export default App;