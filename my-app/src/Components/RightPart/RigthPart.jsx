import React from 'react';
import classes from "./RightPart.module.css"

import MyButton from "../UI/MyButton/MyButton"
import MyModal from "../UI/MyModal/MyModal"
import SkillList from "../SkillsList/SkillsList"
import MyInput from "../UI/MyInput/MyInput"
import SkillForm from "../SkillForm/SkillForm"

const RigthPart = () => {
    const [modal, setModal] = React.useState(false)
    const [skills, setSkills] = React.useState([
        {id: 1, name: "C++", level: "60"}
    ])

    const createSkill = (newSkill) => {
        setSkills([...skills, newSkill])
        setModal(false)
    }

    const removeSkill = (skill) => {
        setSkills(skills.filter(p => p.id !== skill.id))
    }

    return (
        <div className={classes.RightPart}>
            <MyButton onClick={() => setModal(true)}>Создать навык</MyButton>
            <SkillList skills={skills} removeSkill={removeSkill}/>
            <MyModal visible={modal} setVisible={setModal}>
                <SkillForm create={createSkill}/>
            </MyModal>
        </div>
    );
};

export default RigthPart;