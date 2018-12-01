import React from 'react';
import  FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import './Navlink.css';
const NavItem = (props) => {

    return (
        <Link to={{
            pathname: props.link,
            hash: '#Valon-Hajredini',
            search: '?user=11524754875645231',
        }}
              className={'Navlink_class_style'}
        >
            <FontAwesome
                className='super-crazy-colors'
                name={props.iconName}
            /> <span>{props.name}</span>
        </Link>
    );
};
export default NavItem;