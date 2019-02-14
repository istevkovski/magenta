import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';

const App = () => {
    return (
        <div>
            <Home />
            <footer>2019 copyright © Ivan Stevkovski</footer>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));