import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import GlobalContextProvider from "./context/global";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <GlobalContextProvider>
            <App/>
        </GlobalContextProvider>
    </BrowserRouter>
);


