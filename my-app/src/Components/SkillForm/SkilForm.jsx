import React from 'react';
import classes from "./SkillForm.component.css"

import MyButton from "../UI/MyButton/MyButton"
import MyInput from "../UI/MyInput/MyInput"

const SkilForm = ({create}) => {
    const [skill, setSkill] = React.useState({name: '', level: ''})

    const addNewSkill = (e) => {
        e.preventDefault()
        if (skill.level !== '' && skill.name !== '' && skill.level > 0 && skill.level <= 100) {
            const newSkill = {
                ...skill, id: Date.now()
            }
            create(newSkill)
            setSkill({name: '', level: ''})
        }
    }

    return (
        <form>
            <MyInput
                value={skill.name}
                onChange={e => setSkill({...skill, name: e.target.value})}
                type="text"
                placeholder="Название навыка"
            />
            <MyInput
                value={skill.level}
                onChange={e => setSkill({...skill, level: e.target.value})}
                type="number"
                placeholder="Описание навыка"
            />
            <MyButton onClick={addNewSkill}>Создать пост</MyButton>
        </form>
    );
};

export default SkilForm;