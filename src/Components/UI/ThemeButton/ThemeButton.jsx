import React from 'react'
import './ThemeButton.css';
const Themebutton = (props) => {

    return (
        <p
            className="btn ThemeButton"
            style={{fontSize: props.size+ 'px', background: props.bgColor }}
         ><i className={"fa " + props.icon}></i> {props.text}</p>
    )
};
export default Themebutton;