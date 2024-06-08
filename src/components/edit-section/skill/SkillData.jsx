import React, { useState } from 'react';
import '../personal/PersonalData.css'
import { FormEntry,FormGroup } from '../util/formgroup';
import { v4 } from 'uuid';

const SkillData = ({ skillData, setSkillData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempSkill, setTempSkill] = useState({});

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempSkill({
            ...tempSkill,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { ...tempSkill, id: v4() };
        const updatedList = [...skillData, newEntry];
        setSkillData(updatedList);
        setTempSkill({});
    };

    const handleEdit =(id)=> {
        const editEntry = skillData.find(entry => entry.id === id)
        setTempSkill(editEntry)
        handleDelete(id)
    }

    const handleDelete =(id)=> {
      const filteredList =  skillData.filter(entry => entry.id !== id)
      setSkillData(filteredList);
    }

    return (
        <div className="collapsible-form">
            <button className="toggle-btn" onClick={toggleForm}>
                {isOpen ? 'Close' : 'Fill Skill Details'}
            </button>
            {isOpen && (
                <div>
                <form className='form-layout' onSubmit={handleSubmit}>
                    <div className='form-inputs'>
                        <FormGroup id='skill' name='skill' label='Skill:' inputType='text' value={tempSkill.skill || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='skillDetail' name='skillDetail' label='Skill Details:' inputType='text' value={tempSkill.skillDetail || ''} onChange={handleChange} required={true}/>
                    </div>
                    <button type="submit">Add</button>
                </form>
                {skillData.map((skillEntry) => {
                    return (
                        <FormEntry key={skillEntry.id} entryName={skillEntry.skill} handleDelete={()=>handleDelete(skillEntry.id)} handleEdit={()=>handleEdit(skillEntry.id)}/>
                    )
                })}
                </div>
            )}
        </div>
    );
};

export default SkillData;
