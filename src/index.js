import { blue, grey, orange } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContextProvider } from 'context/AuthContext';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
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
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1280,
            bigScreen: 1536
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <AuthContextProvider>
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
            </AuthContextProvider>
        </ThemeProvider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);