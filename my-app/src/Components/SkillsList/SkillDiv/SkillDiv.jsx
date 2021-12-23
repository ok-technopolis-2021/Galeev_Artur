import React from 'react';
import classes from "./SkillDiv.module.css"

import IcnButton from "../../UI/IcnButton/IcnButton"

const SkillDiv = (props) => {
    return (
        <div className={classes.Skill}>
            <div className={classes.Skill_left}>
                <div className={classes.Skill_left_name}>{props.skill.name}</div>
                <div className={classes.Skill_left_progress}>
                    <div className={classes.Skill_left_progress_bar} style={{width: props.skill.level + "%"}}/>
                </div>
            </div>
            <div className={classes.Skill_right}>
                <IcnButton src="https://freesvg.org/img/1403106653.png"
                           height="40px"
                           onClick={() => props.removeSkill(props.skill)}
                />
            </div>
        </div>
    );
};

export default SkillDiv;