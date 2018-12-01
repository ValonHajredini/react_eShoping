import React from 'react';
import './StarRate.css';
const StarRate = (props) => {
    let stars = ('');
console.log('stars:',props.stars);
    switch (props.stars) {
        case(1):
            stars = (
                <span>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                </span>
            );
            break;
        case(2):
            stars = (
                <span>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                </span>
            );
            break;
        case(3):
            stars = (
                <span>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                </span>
            );
            break;

        case(4):
            stars = (
                <span >
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                </span>
            );
            break;
        case(5):
            stars = (
                <span>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star full'}> </i>
                    <i className={'fa fa-star full'}> </i>
                </span>
            );
            break;

        default:
            stars = (
                <span>
                    <i className={'fa fa-star empty'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                    <i className={'fa fa-star empty'}> </i>
                </span>
            );
            break;
    }
    return (
        <span className={'star-fedback'}>
            {stars}
        </span>

    );
};
export default StarRate;