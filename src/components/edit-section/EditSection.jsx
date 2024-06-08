import './EditSection.css'
import EducationData from './education/EducationData'
import PersonalData from './personal/PersonalData'
import SkillData from './skill/SkillData'
import ProjectData from './projects/ProjectData'
import CertificationData from './certifications/CertificationData'
import ExperienceData from './experience/ExperienceData'

const EditSection =({personalData,setPersonalData,educationData,setEducationData,skillData,
    setSkillData,experienceData,setExperienceData,projectData,setProjectData,certificationData,setCertificationData})=> {
    return(
        <div className='editsection'>
            <PersonalData personalData={personalData} setPersonalData={setPersonalData}/>
            <EducationData educationData={educationData} setEducationData={setEducationData}/>
            <SkillData skillData={skillData} setSkillData={setSkillData} />
            <ExperienceData experienceData={experienceData} setExperienceData={setExperienceData}/>
            <ProjectData  projectData={projectData} setProjectData={setProjectData}/>
            <CertificationData certificationData={certificationData} setCertificationData={setCertificationData}/>
        </div>
    )
}

export default EditSection