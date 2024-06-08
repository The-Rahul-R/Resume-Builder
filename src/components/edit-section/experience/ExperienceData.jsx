import React, { useState} from 'react';
import '../personal/PersonalData.css'
import { FormEntry,FormGroup } from '../util/formgroup';
import { v4 } from 'uuid';

const ExperienceData = ({ experienceData, setExperienceData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempExperience, setTempExperience] = useState({});

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempExperience({
            ...tempExperience,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let workDetailsArray
        if (Array.isArray(tempExperience.workDetails)) {
            workDetailsArray = tempExperience.workDetails;
        } else if (tempExperience.workDetails) {
            workDetailsArray = tempExperience.workDetails.split('\n');
        }
        const newEntry = { ...tempExperience, workDetails: workDetailsArray, id: v4() };
        const updatedList = [...experienceData, newEntry];
        setExperienceData(updatedList);
        setTempExperience({});
    };

    const handleEdit =(id)=> {
        const editEntry = experienceData.find(entry => entry.id === id)
        setTempExperience(editEntry)
        handleDelete(id)
    }

    const handleDelete =(id)=> {
      const filteredList =  experienceData.filter(entry => entry.id !== id)
      setExperienceData(filteredList);
    }

    return (
        <div className="collapsible-form">
            <button className="toggle-btn" onClick={toggleForm}>
                {isOpen ? 'Close' : 'Fill Experience Details'}
            </button>
            {isOpen && (
                <div>
                <form className='form-layout' onSubmit={handleSubmit}>
                    <div className='form-inputs'>
                        <FormGroup id='company' name='company' label='Company:' inputType='text' value={tempExperience.company || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='location' name='location' label='Location:' inputType='text' value={tempExperience.location || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='role' name='role' label='Role:' inputType='text' value={tempExperience.role || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='start' name='start' label='Start Date:' inputType='text' value={tempExperience.start || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='end' name='end' label='End Date:' inputType='text' value={tempExperience.end || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='workDetails' name='workDetails' label='Work Details (Enter in a new line for a new bullet point):' inputType='text' value={tempExperience.workDetails || ''} onChange={handleChange} big={true} required={true}/>
                    </div>
                    <button type="submit">Add</button>
                </form>
                {experienceData.map((entry) => {
                    return (
                        <FormEntry key={entry.id} entryName={entry.company} handleDelete={()=>handleDelete(entry.id)} handleEdit={()=>handleEdit(entry.id)}/>
                    )
                })}
                </div>
            )}
        </div>
    );
};

export default ExperienceData;
