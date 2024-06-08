import React, { useState } from 'react';
import './PersonalData.css'; // Remember to create the CSS file for styling
import {FormGroup} from '../util/formgroup';

const PersonalData = ({ personalData, setPersonalData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tempPersonal, setTempPersonal] = useState({})

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempPersonal(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPersonalData(tempPersonal)
        console.log('temp data =', tempPersonal)
        console.log(personalData,'is the pers data')
        setIsOpen(false)
    };

    return (
        <div className="collapsible-form">
            <button className="toggle-btn" onClick={toggleForm}>
                {isOpen ? 'Close' : 'Fill Personal Details'}
            </button>
            {isOpen && (
                <form className='form-layout' onSubmit={handleSubmit}>
                    <div className='form-inputs'>
                        <FormGroup id='name' name='name' label='Name:' inputType='text' required={true} value={tempPersonal.name} onChange={handleChange}/>
                        <FormGroup id='mobile' name='mobile' label='Mobile:' inputType='tel' required={true} value={tempPersonal.mobile} onChange={handleChange}/>
                        <FormGroup id='email' name='email' label='email:' inputType='email' required={true} value={tempPersonal.email} onChange={handleChange}/>
                        <FormGroup id='location' name='location' label='Location:' inputType='text' required={true} value={tempPersonal.location} onChange={handleChange}/>
                        <FormGroup id='portfolio' name='portfolio' label='Portfolio link:' inputType='text' value={tempPersonal.portfolio} onChange={handleChange}/>
                        <FormGroup id='github' name='github' label='Github:' inputType='text' value={tempPersonal.github} onChange={handleChange}/>
                        <FormGroup id='linkedin' name='linkedin' label='Linkedin:' inputType='text' value={tempPersonal.linkedin} onChange={handleChange}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default PersonalData;
