import React from 'react';
import style from './card.css';

import anime from './assets/gifs/anime.gif';
import barney from './assets/gifs/barney.gif';
import face from './assets/gifs/face.gif';
import mex from   './assets/gifs/mex.gif';
import two from  './assets/gifs/200w_d.gif';
import gun from  './assets/gifs/gun.gif';

const gifList = [
    anime,
    barney,
    face,
    mex,
    two,
    gun
];

class Card extends React.Component {

    render () {
        let cards = [];
        for (let i = 0; i < gifList.length; i++) {
            cards[i] = (
                <div className={style.card} key={i}>
                    <img src={gifList[i]} className={style.gif} alt=""/>
                </div>
            )
        }
        return (
            <div className={style.cardContainer}>
                {cards}
            </div>
        )
    }
}

export default (Card);