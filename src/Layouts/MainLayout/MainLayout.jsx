import React, { Component } from 'react';
import MainPage from '../../Containers/MainPage/MainPage';
import Wrapper from '../../HOC/Wrapper/Wrapper';
// Components
import ContactHeader from '../../Components/UI/ContactHeader/ContactHeader';
import Navigation from '../../Components/Navigation/Navigation';
import Carousel from '../../Components/UI/Carousel/Carousel';
import Search from "../../Components/Search/Search";
class MainLayout extends Component {

    render() {
        return(
            <Wrapper>
               <header>
                   <ContactHeader />
                   <Navigation />
                   <Search />
                   <Carousel />
               </header>
                <MainPage />
            </Wrapper>


        )
    }
}
export default MainLayout;