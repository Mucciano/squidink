import React, { Component } from 'react';
import Nav from './modules/nav/nav';
import Cards from './modules/cards/card';
import style from 'react-skeleton-css/styles/skeleton.2.0.4.css';
import 'react-skeleton-css/styles/normalize.3.0.2.css';

class App extends Component {
    render() {

        return (
            <div className={style.container}>
              <Cards/>
            </div>
        )

    }
}

export default App;
