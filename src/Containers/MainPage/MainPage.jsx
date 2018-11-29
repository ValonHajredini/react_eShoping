import React, { Component } from 'react';
import './MainPage.css';
import Categories from '../../Components/Categories/Categories';
import Items from "../Items/Items";
class MainPage extends Component {

    render() {
        return(
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
        )
    }
}
export default MainPage;