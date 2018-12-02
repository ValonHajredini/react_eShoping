import React, { Component } from 'react'
import { Route } from 'react-router-dom';


import Account from '../Containers/Account/Account'
import Wrapper from "../HOC/Wrapper/Wrapper";
import MainPage from "../Containers/MainPage/MainPage";
import LoginRegister from "../Containers/LoginRegister/LoginRegister";
import Cart from "../Containers/Cart/Cart";
import Checkout from "../Containers/Checkout/Checkout";
import Wishlist from "../Containers/Wishlist/Wishlist";
import SearchResult from "../Containers/SearchResult/SearchResult";
import ProductPage from "../Containers/ProductPage/ProductPage";

class Routes extends Component {

    render() {
        return (
            <Wrapper>
                <Route path={'/account'} exact component={Account}/>
                <Route path={'/loginOrRegister'} exact component={LoginRegister}/>
                <Route path={'/cart'} exact component={Cart}/>
                <Route path={'/checkout'} exact component={Checkout}/>
                <Route path={'/wishlist'} exact component={Wishlist}/>
                <Route path={'/search'} exact component={SearchResult}/>
                <Route path={'/product'} exact component={ProductPage}/>
                <Route path={'/'} exact component={MainPage}/>
            </Wrapper>


        )
    }
}
export default Routes;