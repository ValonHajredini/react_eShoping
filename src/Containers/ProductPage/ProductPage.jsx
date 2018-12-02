import React,  { Component } from 'react';
import './ProductPage.css';
import Search from "../../Components/Search/Search";
import StarRate from "../../Components/UI/StarRate/StarRate";
import Price from "../../Components/UI/Price/Price";
import ImagePreview from "../../Components/UI/ImagePreview/ImagePreview";

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
                            <p className="price-tag">Price: <Price price={'427,82 - 708,58'} type={'old'}/></p>
                            <p className="price-tag">Discount Price: <Price price={'427,82 - 708,58'} type={'normal'} size={16 }/></p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default ProductPage;
