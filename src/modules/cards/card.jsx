import React from 'react';
import gifList from './assets';

class Card extends React.Component {

    render () {
        let cards = [];
        for (let i = 0; i < gifList.length; i++) {
            cards[i] = (
                <div className={'row'} key={i}>
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