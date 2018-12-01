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
                    <p>{props.name}</p>
                </div>
                <div className="item-price-container">
                    <p className={'item-price'}><span className={'price'}>€ {props.price}</span> / piece</p>
                </div>
                <div className="item-shipment-method">
                    {/*<p>{props.shipment}</p>*/}
                    <p><span> {props.shippment.text}</span> <span className={'shipping-price'}>{props.shippment.shipping_price}</span></p>
                </div>
                <div className="item-feedback">
                    <p>
                        <StarRate stars={props.rating.stars}/>
                        <span> ({props.rating.count}) | Orders ({props.orderNuymber})</span></p>
                </div>

            </div>
          </div>
      </div>
  );
};
export default Item;