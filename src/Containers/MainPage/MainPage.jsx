import React, { Component } from 'react';
import './MainPage.css';
import Wrapper from "../../HOC/Wrapper/Wrapper";
import Carousel from '../../Components/UI/Carousel/Carousel';
import Search from '../../Components/Search/Search';
import Categories from '../../Components/Categories/Categories';
import Items from "../Items/Items";
class MainPage extends Component {

    render() {
        return(
            <Wrapper>
                <Search />
                <Carousel />
                <div className={'container'}>
                    <div className={'two-parts-container'}>
                        <div className="left-container">
                            <Categories />
                        </div>
                        <div className="right-main-container">
                            <Items />

                        </div>
                    </div>
                </div>
            </Wrapper>

        )
    }
}
export default MainPage;