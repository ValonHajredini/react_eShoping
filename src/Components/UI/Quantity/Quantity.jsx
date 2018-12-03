import React from 'react';
import './Quantity.css';

const Quantity = (props) => {

    return (
        <div className="Quantity">
            <button className="quantity-buttons minimize-quantity"><i className="fa fa-minus"></i></button>
            <input type="number"  className="quantity-input" value={1}/>
            <button className="quantity-buttons maximize-quantity"><i className="fa fa-plus"></i></button>
        </div>
    );
};
export default Quantity;