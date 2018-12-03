import React from 'react'
import './Price.css';
const Price = (props) => {

    return (
        <span className={props.type + ' Price'} style={{fontSize: props.size}} >
            € {props.price} {props.peace &&'/ piece'}
        </span>
    )
};
export default Price;