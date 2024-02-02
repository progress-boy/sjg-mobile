import React from 'react';
import './App.css';
import {useRoutes} from "react-router-dom";
import routesConfig from "./components/routers/Router";
// import Home from "./components/views/Home";

function App() {
    const Views = () => useRoutes(routesConfig)

    return (
        <div className="App">
            <header className="App-header">
                <Views/>
            </header>
        </div>
    );
}

export default App;
