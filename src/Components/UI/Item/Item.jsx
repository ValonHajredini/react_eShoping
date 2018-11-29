import React from 'react';
import './Item.css';
import StarRate from "../StarRate/StarRate";

const Item = (props) => {
  return (
      <div className="col-md-3 col-sm-4 col-xs-12 sell-item-generated">
          <div className="sell-item">
            <div className="item-header">
                <img src={props.img} width={'100%'} alt=""/>
            </div>
            <div className="item-body">
                <div className="item-name">
                    <p>TZT 5v 12v 1 2 4 6 8 channel relay module with optocoupler. Relay </p>
                </div>
                <div className="item-price-container">
                    <p className={'item-price'}><span className={'price'}>€ {props.price}</span> / piece</p>
                </div>
                <div className="item-shipment-method">
                    <p>Free Shipping</p>
                </div>
                <div className="item-feedback">
                    <p>
                        <StarRate />
                        <span> (2108) | Orders (5875)</span></p>
                </div>

            </div>
          </div>
      </div>
  );
};
export default Item;