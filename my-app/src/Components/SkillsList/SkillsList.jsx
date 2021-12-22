import React from 'react';
import classes from "./SkillsList.module.css"

import SkillDiv from "./SkillDiv/SkillDiv"

const SkillsList = ({removeSkill, skills, ...props}) => {
    return (
        <div className={classes.SkillList}>
            {skills.map(
            (skillItem, index) =>
                <SkillDiv key={skillItem.id} removeSkill={removeSkill} skill={skillItem}/>
            )}
        </div>
    );
};

export default SkillsList;