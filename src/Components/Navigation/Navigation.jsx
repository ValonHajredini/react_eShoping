import React from 'react';
import Logo from '../UI/Logo/logo';
import NavItem from "../UI/NavItem/NavItem";
import './Navigation.css';
const Navigation = () => {
    return (
        <div className="Navihation_container">
            <div className="container">
                <div className="nav">
                    <div className="nav_flex_container">
                        <div className="nav_item">
                            <Logo />
                        </div>
                        <div className="nav_item">
                            <NavItem
                                name={'Account'}
                                iconName={'user'}
                                link={'#'}
                            />
                            <NavItem
                                name={'Wishlist'}
                                iconName={'star'}
                                link={'#'}
                            />
                            <NavItem
                                name={'Checkout'}
                                iconName={'money'}
                                link={'#'}
                            />
                            <NavItem
                                name={'Cart'}
                                iconName={'shopping-cart'}
                                link={'#'}
                            />
                            <NavItem
                                name={'Login'}
                                iconName={'lock'}
                                link={'#'}
                            />


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navigation;