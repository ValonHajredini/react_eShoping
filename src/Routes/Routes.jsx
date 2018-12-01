import React, { Component } from 'react'
import { Route } from 'react-router-dom';


import Account from '../Containers/Account/Account'
import Wrapper from "../HOC/Wrapper/Wrapper";
import MainPage from "../Containers/MainPage/MainPage";

class Routes extends Component {

    render() {
        return (
            <Wrapper>
                <Route path={'/account'} exact component={Account}/>
                <Route path={'/'} exact component={MainPage}/>
                {/*<Account />*/}
                {/*<MainPage />*/}
            </Wrapper>


        )
    }
}
export default Routes;