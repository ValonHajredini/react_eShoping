import React from 'react';
import './ImagePreview.css';

const ImagePreview = (props) => {

    return (
        <div className="ImagePreview">
            <div className="image-holder">
                <img src="https://ae01.alicdn.com/kf/HTB1vni9l8yWBuNkSmFPq6xguVXaX/Unlocked-Original-Apple-iPhone-7-iPhone-7-Plus-Quad-core-Mobile-phone-12-0MP-camera-32G.jpg" alt=""/>
            </div>
            <div className="image-gallery-small">
                <div className="row">
                    <div className="col-md-12 image-thumbnail">
                        <img src="https://ae01.alicdn.com/kf/HTB1mAU5uoR1BeNjy0Fmq6z0wVXa5/Unlocked-Original-Apple-iPhone-7-iPhone-7-Plus-Quad-core-Mobile-phone-12-0MP-camera-32G.jpg" alt=""/>
                    </div>
                    <div className="col-md-12 image-thumbnail">
                        <img src="https://ae01.alicdn.com/kf/HTB1vni9l8yWBuNkSmFPq6xguVXaX/Unlocked-Original-Apple-iPhone-7-iPhone-7-Plus-Quad-core-Mobile-phone-12-0MP-camera-32G.jpg" alt=""/>
                    </div>
                    <div className="col-md-12 image-thumbnail">
                        <img src="https://ae01.alicdn.com/kf/HTB1sPEQukCWBuNjy0Faq6xUlXXa9/Unlocked-Original-Apple-iPhone-7-iPhone-7-Plus-Quad-core-Mobile-phone-12-0MP-camera-32G.jpg_640x640.jpg" alt=""/>
                    </div>
                    <div className="col-md-12 image-thumbnail">
                        <img src="https://ae01.alicdn.com/kf/HTB1dLNXuxGYBuNjy0Fnq6x5lpXat/Unlocked-Original-Apple-iPhone-7-iPhone-7-Plus-Quad-core-Mobile-phone-12-0MP-camera-32G.jpg" alt=""/>
                    </div>

                </div>
            </div>
        </div>
    )
};
export default ImagePreview;