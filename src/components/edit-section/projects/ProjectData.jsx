import React, { useState } from 'react';
import '../personal/PersonalData.css'
import { FormEntry,FormGroup } from '../util/formgroup';
import { v4 } from 'uuid';

const ProjectData = ({ projectData, setProjectData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempProject, setTempProject] = useState({});

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempProject({
            ...tempProject,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { ...tempProject, id: v4() };
        const updatedList = [...projectData, newEntry];
        setProjectData(updatedList);
        setTempProject({});
    };

    const handleEdit =(id)=> {
        const editEntry = projectData.find(entry => entry.id === id)
        setTempProject(editEntry)
        handleDelete(id)
    }

    const handleDelete =(id)=> {
      const filteredList =  projectData.filter(entry => entry.id !== id)
      setProjectData(filteredList);
    }

    return (
        <div className="collapsible-form">
            <button className="toggle-btn" onClick={toggleForm}>
                {isOpen ? 'Close' : 'Fill Project Details'}
            </button>
            {isOpen && (
                <div>
                <form className='form-layout' onSubmit={handleSubmit}>
                    <div className='form-inputs'>
                        <FormGroup id='project' name='project' label='Projects:' inputType='text' value={tempProject.project || ''} onChange={handleChange} required={true}/>
                        <FormGroup id='projectDetail' name='projectDetail' label='Project Details:' inputType='text' value={tempProject.projectDetail || ''} onChange={handleChange} big={true} required={true}/>
                    </div>
                    <button type="submit">Add</button>
                </form>
                {projectData.map((entry) => {
                    return (
                        <FormEntry key={entry.id} entryName={entry.project} handleDelete={()=>handleDelete(entry.id)} handleEdit={()=>handleEdit(entry.id)}/>
                    )
                })}
                </div>
            )}
        </div>
    );
};

export default ProjectData;
