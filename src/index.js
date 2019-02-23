import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import "./sass/main.scss";

import Home from './components/Home';
import About from './components/About';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));