import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import {ThemeProvider} from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import {Provider} from 'react-redux';
import store from '../src/Redux/reducers/rootReducer';

ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
                <App />
            </Provider>,
        </ThemeProvider>
    </StyledEngineProvider>,
    document.querySelector('#root'),
);