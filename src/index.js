import { blue, grey, orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import FallBackScreen from 'pages/FallBackScreen';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'redux/store';
import App from './App';
import './index.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
            light: blue[400],
            dark: blue[700],
            contrastText: '#fff'
        },
        secondary: {
            main: orange[600],
            light: orange[500],
            dark: orange[700],
            contrastText: '#fff'
        },
        text: {
            primary: grey[900]
        }
    },
    typography: {
        fontFamily: 'Nunito',
        button: {
            textTransform: 'initial'
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<FallBackScreen/>}>
            {/* <ThemeProvider theme={theme}> */}
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        transitionDuration={{ appear: 300, exit: 100 }}
                    >
                        <App />
                    </SnackbarProvider>
                </PersistGate>
            </Provider>
            {/* </ThemeProvider> */}
        </Suspense>
    </React.StrictMode>
    ,
    document.getElementById('root')
);