import React from 'react';
import logo from '../cards/assets/gifs/smallsquid.gif';
import './nav.css';

function Nav() {
    const logoStyle = {
        height: '10rem',
        width: '10rem'
    };

    return(
        <div className={'row'}>
            <div className={`imgContainer`}>
                <img src={logo} style={logoStyle}/>
            </div>
        </div>
    )
}

export default (Nav);