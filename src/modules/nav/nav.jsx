import React from 'react';

function Nav() {
    const title = {
        fontSize: 65
    };

    return(
        <div className={'row'}>
            <h1 className={`six columns offset-by-three`} style={title}>Squid Ink</h1>
        </div>
    )
}

export default (Nav);