import React from 'react';
import classes from "./SocialNetworks.module.css"
import IcnButton from "../UI/IcnButton/IcnButton"

const SocialNetworks = (props) => {
    return (
        <div className={classes.SocialNetworks}>
            {props.networks.map(
                (network) =>
                    <IcnButton
                        key={network.id}
                        src={network.src}
                        href={network.href}
                        height={"24px"}
                    />
            )}
        </div>
    );
};

export default SocialNetworks;