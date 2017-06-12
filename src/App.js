import React, { Component } from 'react';
import Nav from './modules/nav/nav';
import Cards from './modules/cards/card';
import 'react-skeleton-css/styles/normalize.3.0.2.css';
import 'react-skeleton-css/styles/skeleton.2.0.4.css';

class App extends Component {
    render() {

        return (
            <div>
                <Nav/>
                <Cards/>
            </div>
        )

    }
}

export default App;
