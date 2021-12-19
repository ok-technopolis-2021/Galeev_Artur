import React from 'react';
import classes from "./IcnButton.module.css"

const IcnButton = ({onClick, href, src, height}) => {
    if (href) {
        return (
            <a href={href}>
                <img className={classes.img} src={src} height={height}/>
            </a>
        );
    } else {
        return (
            <img className={classes.img} src={src} height={height} onClick={onClick}/>
        );
    }
};

export default IcnButton;