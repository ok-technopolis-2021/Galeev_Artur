import React from 'react';
import classes from "./LeftPart.module.css"

import face from "../../Assests/img/face.jpg"
import gitImg from "../../Assests/img/git-logo.png"
import tgImg from "../../Assests/img/tg-logo.png"
import vkImg from "../../Assests/img/vk-logo.png"


import Photo from "../UI/Photo/Photo"
import SocialNetworks from "../SocialNetworks/SocialNetworks"
import MyButton from "../UI/MyButton/MyButton"

const LeftPart = () => {
    const networks = [
        {id: 1, src: gitImg, href: "https://github.com/coradead"},
        {id: 2, src: tgImg, href: "https://tg.com/coradead"},
        {id: 3, src: vkImg, href: "https://vk.com/coradead"},
    ]
    return (
        <div className={classes.LeftPart}>
            <Photo className={classes.LeftPart_Photo} src={face} height="180px" width="180px"/>
            <div className={classes.LeftPart_FIO}>Alex Smith</div>
            <div className={classes.LeftPart_Speciality}>Web Designer</div>
            <SocialNetworks className={classes.LeftPart_Networks} networks={networks}/>
            <div className={classes.LeftPart_MyButton}>
                <MyButton>Download</MyButton>
            </div>
        </div>
    );
};

export default LeftPart;