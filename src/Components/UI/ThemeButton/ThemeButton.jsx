import React from 'react'
import './ThemeButton.scss';
const Themebutton = (props) => {

    return (
        <p className={'btn ThemeButton'} style={{fontSize: props.size+ 'px'}}>{props.text}</p>
    )
};
export default Themebutton;