import './ResumeSection.css'
import Resume from './resume/Resume'
import { forwardRef } from 'react'

const ResumeSection = forwardRef(({ personalData, educationData, skillData, projectData, certificationData, experienceData }, ref) => {
    return (
        <div className='resumesection'>
            <Resume
                ref={ref} 
                personalData={personalData} 
                educationData={educationData}
                skillData={skillData}
                experienceData={experienceData}
                projectData={projectData}
                certificationData={certificationData} 
            />
        </div>
    );
});

export default ResumeSection;
