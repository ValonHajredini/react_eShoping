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
                        <Item img={item_1}
                              name={'TZT 5v 12v 1 2 4 6 8 channel relay module with optocoupler. Relay'}
                              slug={'item_slug_for_url'}
                              price={'5.70 - 3.6'}
                              orderNuymber={194}
                              shippment={{text: 'Free Shipping', shipping_price: ''}}
                              rating={{count: '3', stars: 3}}
                        />
                        <Item
                            name={'TZT 5v 12v 1 2 4 6 8 channel relay module with optocoupler. Relay'}
                            slug={'item_slug_for_url'}
                            img={item_2}
                            price={'15.30'}
                            orderNuymber={1256}
                            shippment={{text: 'Shipping:', 'shipping_price': '€ 1.70'}}
                            rating={{count: '4', stars: 1}}
                        />
                        <Item
                            name={'TZT 5v 12v 1 2 4 6 8 channel relay module with optocoupler. Relay'}
                            slug={'item_slug_for_url'}
                            img={item_3}
                            price={'10 - 15'}
                            orderNuymber={17}
                            shippment={{text: 'Shipping:', 'shipping_price': '€ 1.70'}}
                            rating={{count: '78', stars: 3}}
                        />
                        <Item
                            name={'TZT 5v 12v 1 2 4 6 8 channel relay module with optocoupler. Relay'}
                            slug={'item_slug_for_url'}
                            img={item_4}
                            price={'5.70 - 3.6'}
                            orderNuymber={0}
                            shippment={{text: 'Shipping:', 'shipping_price': '€ 1.70'}}
                            rating={{count: '11', stars: 4}}
                        />
                        <Item
                            name={'TZT 5v 12v 1 2 4 6 8 channel relay module with optocoupler. Relay'}
                            slug={'item_slug_for_url'}
                            img={item_5}
                            price={'5.70 - 3.6'}
                            orderNuymber={2245}
                            shippment={{text: 'Free Shipping', 'shipping_price': ' '}}
                            rating={{count: '996', stars: 0}}
                        />
                        <Item
                            name={'TZT 5v 12v 1 2 4 6 8 channel relay module with optocoupler. Relay'}
                            slug={'item_slug_for_url'}
                            img={item_6}
                            price={'5.70 - 3.6'}
                            orderNuymber={23}
                            shippment={{text: 'Shipping:', 'shipping_price': '€ 1.70'}}
                            rating={{count: '15', stars: 5}}
                        />
                        <Item
                            name={'TZT  module with optocoupler. Relay'}
                            slug={'item_slug_for_url'}
                            img={item_7}
                            price={'5.70 - 3.6'}
                            orderNuymber={30}
                            shippment={{text: 'Shipping:', 'shipping_price': '€ 1.70'}}
                            rating={{count: '2245', stars: 4}}
                        />
                        <Item
                            name={'TZT 5v 12v optocoupler. Relay'}
                            slug={'item_slug_for_url'}
                            img={item_8}
                            price={'5.70 - 3.6'}
                            orderNuymber={100}
                            shippment={{text: 'Shipping:', 'shipping_price': '€ 1.70'}}
                            rating={{count: '7', stars: 3}}
                        />
                        <Item
                            name={'channel relay module with optocoupler. Relay'}
                            slug={'item_slug_for_url'}
                            img={item_9}
                            price={'5.70 - 3.6'}
                            orderNuymber={201}
                            shippment={{text: 'Shipping:', 'shipping_price': '€ 1.70'}}
                            rating={{count: '112', stars: 2}}
                        />
                        <Item
                            name={'TZT 5v 12v 1 2 4 6 8 channel relay module with'}
                            slug={'item_slug_for_url'}
                            img={item_10}
                            price={'5.70 - 3.6'}
                            orderNuymber={17}
                            shippment={{text: 'Free Shipping', 'shipping_price': ''}}
                            rating={{count: '7365', stars: 1}}
                        />
                    </div>

                </div>
            </div>
        );
    }
}
export default Items;