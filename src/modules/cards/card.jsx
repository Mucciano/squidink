import React from 'react';
import gifList from './assets';
import './card.css'

class Card extends React.Component {

    render () {
        let cards = [];
        for (let i = 0; i < gifList.length; i++) {
            cards[i] = (
                <div className={'row gif'} key={i}>
                    <img src={gifList[i]} className={'eight columns'} alt=""/>
                </div>
            )
        }
        return (
            <div>
                <div className={'ten columns offset-by-two'}>
                    {cards}
                </div>
            </div>

        )
    }
}

export default (Card);