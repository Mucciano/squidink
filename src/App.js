import React, { Component } from 'react';
import Nav from './modules/nav/nav';
import Cards from './modules/cards/card';
import './App.css';

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
