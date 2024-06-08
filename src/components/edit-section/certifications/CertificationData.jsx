import React, { useState } from 'react';
import '../personal/PersonalData.css'
import { FormEntry,FormGroup } from '../util/formgroup';
import { v4 } from 'uuid';

const CertificationData = ({ certificationData, setCertificationData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempCertification, setTempCertification] = useState({});

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempCertification({
            ...tempCertification,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { ...tempCertification, id: v4() };
        const updatedList = [...certificationData, newEntry];
        setCertificationData(updatedList);
        setTempCertification({});
    };

    const handleEdit =(id)=> {
        const editEntry = certificationData.find(entry => entry.id === id)
        setTempCertification(editEntry)
        handleDelete(id)
    }

    const handleDelete =(id)=> {
      const filteredList =  certificationData.filter(entry => entry.id !== id)
      setCertificationData(filteredList);
    }

    return (
        <div className="collapsible-form">
            <button className="toggle-btn" onClick={toggleForm}>
                {isOpen ? 'Close' : 'Fill Certification/Honors Details'}
            </button>
            {isOpen && (
                <div>
                <form className='form-layout' onSubmit={handleSubmit}>
                    <div className='form-inputs'>
                        <FormGroup id='certification' required={true} name='certi' label='Honors/Certifications:' inputType='text' value={tempCertification.certi || ''} onChange={handleChange}/>
                    </div>
                    <button type="submit">Add</button>
                </form>
                {certificationData.map((entry) => {
                    return (
                        <FormEntry key={entry.id} entryName={entry.certi} handleDelete={()=>handleDelete(entry.id)} handleEdit={()=>handleEdit(entry.id)}/>
                    )
                })}
                </div>
            )}
        </div>
    );
};

export default CertificationData;
