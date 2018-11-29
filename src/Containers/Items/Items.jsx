import React, { Component } from 'react';
import './Items.css';
import Item from "../../Components/UI/Item/Item";
import item_1 from '../../assets/img/items/item_1.jpg'
import item_2 from '../../assets/img/items/item_2.jpg'
import item_3 from '../../assets/img/items/item_3.jpg'
import item_4 from '../../assets/img/items/item_4.jpg'
import item_5 from '../../assets/img/items/item_5.jpg'
import item_6 from '../../assets/img/items/item_6.jpg'
import item_7 from '../../assets/img/items/item_7.jpg'
import item_8 from '../../assets/img/items/item_8.jpg'
import item_9 from '../../assets/img/items/item_9.jpg'
import item_10 from '../../assets/img/items/item_10.jpg'
class Items extends Component{
    render () {
        return (
            <div className={'items-container'}>
                <div className="items-title-heading">
                    <div className={'items-title lines'}> </div>
                    <div className={'items-title title'}>FEATURES ITEMS</div>
                    <div className={'items-title lines'}> </div>
                </div>
                <div className={'items-flex-container'}>
                    <div className="row">
                        <Item img={item_1} price={'5.70 - 3.6'}/>
                        <Item img={item_2} price={'5.70 - 3.6'}/>
                        <Item img={item_3} price={'5.70 - 3.6'}/>
                        <Item img={item_4} price={'5.70 - 3.6'}/>
                        <Item img={item_5} price={'5.70 - 3.6'}/>
                        <Item img={item_6} price={'5.70 - 3.6'}/>
                        <Item img={item_7} price={'5.70 - 3.6'}/>
                        <Item img={item_8} price={'5.70 - 3.6'}/>
                        <Item img={item_9} price={'5.70 - 3.6'}/>
                        <Item img={item_10} price={'5.70 - 3.6'}/>
                    </div>

                </div>
            </div>
        );
    }
}
export default Items;