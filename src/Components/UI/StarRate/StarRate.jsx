import React from 'react';
import './StarRate.css';
const StarRate = (props) => {

    return (
        <span className={'star-fedback'}>
            <i className={'fa fa-star full'}></i>
            <i className={'fa fa-star full'}></i>
            <i className={'fa fa-star full'}></i>
            <i className={'fa fa-star empty'}></i>
            <i className={'fa fa-star empty'}></i>
        </span>
    );
};
export default StarRate;