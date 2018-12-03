import React,  { Component } from 'react';
import './SearchResult.css';
import Search from "../../Components/Search/Search";
import Items from "../Items/Items";
import CategItems from '../../Components/Categories/Categories';
class SearchResult extends Component {

    render() {
        return (
            <div className="container">
                <Search />
                <div className={'two-parts-container'}>
                    <div className="left-container">
                        <CategItems />
                    </div>
                    <div className="right-main-container">
                        <Items />

                    </div>
                </div>
            </div>
        )
    }
}
export default SearchResult;
