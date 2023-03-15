import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { DialogContextProvider } from "./contexts/DialogContext";

import AppMaterialTheme from "./styles/AppMaterialTheme";
import ViewTemplate from "./views/ViewTemplate";

import "./styles/tailwind.css";
import './styles/app.css';

import "@fontsource/lato";
import "@fontsource/roboto";
import '@fontsource/cantora-one';

import { store } from "./redux/store";



const app = (
    <React.StrictMode>
        {/* Redux Store */}
        <Provider store={store}>
        {/* Material UI Theme Context */}
        <ThemeProvider theme={AppMaterialTheme}>
        {/* Notistack Snackbar Provider */}
        <SnackbarProvider maxSnack={5} anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
        {/* Dialog Component */}
        <DialogContextProvider>
        {/* React Router DOM */}
        <BrowserRouter>
            <ViewTemplate />
        </BrowserRouter>
        </DialogContextProvider>
        </SnackbarProvider>
        </ThemeProvider>
        </Provider>
    </React.StrictMode>
);



ReactDOM
    .createRoot( document.getElementById("root") as HTMLElement)
    .render(app);
