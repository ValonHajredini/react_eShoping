import React,  { Component } from 'react';
import './ProductPage.css';
import Search from "../../Components/Search/Search";
import StarRate from "../../Components/UI/StarRate/StarRate";
import Price from "../../Components/UI/Price/Price";
import ImagePreview from "../../Components/UI/ImagePreview/ImagePreview";
import Quantity from "../../Components/UI/Quantity/Quantity";
import Themebutton from "../../Components/UI/ThemeButton/ThemeButton";

class ProductPage extends Component {

    render() {
        return (
            <div className="container">
                <Search />
                <div className="row">
                    <div className="col-md-7 col-sm-6 col-xs-12 ">

                        <div className="set-light-border">
                            <ImagePreview />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6 col-xs-12">
                        <div className="set-light-border product-content">
                            <h4 className="product-name">
                                Unlocked Original Apple iPhone 7 / iPhone 7 Plus
                                Quad-core Mobile phone 12.0MP camera 32G/128G/256G Rom
                                IOS Fingerprint phone
                            </h4>
                            <StarRate stars={4} /> 4.2 <span>(1124 votes)</span> | <span>18 orders</span>
                            <hr/>
                            <p className="price-tag">Price: <Price price={'427,82 - 708,58'} type={'old'} peace/></p>
                            <p className="price-tag">Discount Price: <Price price={'427,82 - 708,58'} type={'normal'} size={16 } peace/></p>
                            <div className="row">
                                <div className="col-6">
                                    <Quantity />
                                </div>
                                <div className="col-6">
                                    <span>Total: <Price price={428} type={'normal'} peace={false}/></span>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12">
                                    <span >Shipping: <Price price={12.30} type={'normal'} peace={false}/> 2 - 5 Business days</span>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-12">
                                    <Themebutton text={"Bye now"} icon={'fa-credit-card'} size={14} />
                                    <Themebutton text={"Add to Card"} icon={'fa-shopping-cart'} size={14} bgColor={'#e37e12'} />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
export default ProductPage;
