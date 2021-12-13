import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { InitializedMainProvider, MainCtx } from "./models/MainInterface" ;

(() => {
    if (localStorage.getItem('authorized') === null)
        localStorage.setItem('authorized', JSON.stringify({
            authenticated: false,
            success: false,
            orchisToken: false
        }));
})();

const Main = () => {
    const context = React.useContext(MainCtx);
    context.update({
        env: "production",
        hostname: window.document.location.hostname
    });
    return  (
        <React.StrictMode>
            <Router>
                <InitializedMainProvider value={context}>
                    <App />
                </InitializedMainProvider>
            </Router>
        </React.StrictMode>
    );
};

const rootElement = document.getElementById('root')

ReactDOM.render(<Main/>,rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
