import React, { useState,useEffect } from 'react';
import '../personal/PersonalData.css'
import { FormEntry,FormGroup } from '../util/formgroup';
import { v4 } from 'uuid';

const EducationData = ({ educationData, setEducationData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempEducation, setTempEducation] = useState({});

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempEducation({
            ...tempEducation,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { ...tempEducation, id: v4() };
        const updatedList = [...educationData, newEntry];
        setEducationData(updatedList);
        setTempEducation({});
        console.log('edu data =',educationData)
    };

    const handleEdit =(id)=> {
        const editEntry = educationData.find(entry => entry.id === id)
        setTempEducation(editEntry)
        handleDelete(id)
    }

    const handleDelete =(id)=> {
      const filteredList =  educationData.filter(entry => entry.id !== id)
      setEducationData(filteredList);
    }

    return (
        <div className="collapsible-form">
            <button className="toggle-btn" onClick={toggleForm}>
                {isOpen ? 'Close' : 'Fill Education Details'}
            </button>
            {isOpen && (
                <div>
                <form className='form-layout' onSubmit={handleSubmit}>
                    <div className='form-inputs'>
                        <FormGroup id='university' name='university' label='University:' inputType='text' value={tempEducation.university || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='unilocation' name='location' label='Location:' inputType='text' value={tempEducation.location || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='program' name='degree' label='Degree/Program:' inputType='text' value={tempEducation.degree || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='GPA' name='GPA' label='GPA:' inputType='text' value={tempEducation.GPA || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='start' name='startDate' label='Start Date:' inputType='text' value={tempEducation.startDate || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='end' name='endDate' label='End Date:' inputType='text' value={tempEducation.endDate || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='courses' name='courses' label='Relevant courses:' inputType='text' value={tempEducation.courses || ''} onChange={handleChange} big={true} required={true}/>
                    </div>
                    <button type="submit">Add</button>
                </form>
                {educationData.map((eduEntry) => {
                    return (
                        <FormEntry key={eduEntry.id} entryName={eduEntry.university} handleDelete={()=>handleDelete(eduEntry.id)} handleEdit={()=>handleEdit(eduEntry.id)}/>
                    )
                })}
                </div>
            )}
        </div>
    );
};

export default EducationData;
