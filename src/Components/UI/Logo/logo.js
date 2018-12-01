import React from 'react';
import logo from '../../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Logo =(props) => (
    <Link to="/" className="logo_link">
        <img src={logo} alt="logo"/>
    </Link>
);
export default Logo