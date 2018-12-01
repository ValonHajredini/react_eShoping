import React, { Component } from 'react';
import MainPage from '../../Containers/MainPage/MainPage';
import Wrapper from '../../HOC/Wrapper/Wrapper';

// Router Wrapper
import { BrowserRouter }  from 'react-router-dom'
// Components
import ContactHeader from '../../Components/UI/ContactHeader/ContactHeader';
import Navigation from '../../Components/Navigation/Navigation';
// import Carousel from '../../Components/UI/Carousel/Carousel';
import Search from "../../Components/Search/Search";
import Routes from "../../Routes/Routes";
class MainLayout extends Component {

    render() {
        return(
            <Wrapper>
               <ContactHeader />
               <Navigation />
               <Routes />
            </Wrapper>
        )
    }
}
export default MainLayout;