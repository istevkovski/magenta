import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import "./sass/main.scss";
import * as serviceWorker from "./serviceWorker";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <footer>2019 copyright © Ivan Stevkovski</footer>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
serviceWorker.register();