import React, { Component } from 'react';
import MainPage from '../../Containers/MainPage/MainPage';
import Wrapper from '../../HOC/Wrapper/Wrapper';
// Components
import ContactHeader from '../../Components/UI/ContactHeader/ContactHeader';
class MainLayout extends Component {

    render() {
        return(
            <Wrapper>
               <header>
                   <ContactHeader />
               </header>
                <hr/>
                <MainPage />
            </Wrapper>


        )
    }
}
export default MainLayout;