import React from 'react';
import  FontAwesome from 'react-fontawesome';
import './Navlink.css';
const NavItem = (props) => {

    return (
        <a href={props.link} className={'Navlink_class_style'}>
            <FontAwesome
                className='super-crazy-colors'
                name={props.iconName}
            /> <span>{props.name}</span>
        </a>
    );
};
export default NavItem;