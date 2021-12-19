import React from 'react';
import classes from "./Photo.module.css"

const Photo = (props) => {
    return (
        <img className={classes.img} src={props.src} height={props.height} width={props.width}/>
    );
};

export default Photo;