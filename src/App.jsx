import React, { useState,useRef } from 'react';
import EditSection from './components/edit-section/EditSection'
import ResumeSection from './components/resume-section/ResumeSection';
import './styles/App.css';
import { generateResumeData } from './components/edit-section/util/printResume';
import { dummyPersonalData,dummyEducationData,dummySkillData, dummyProjectData,
  dummyCertificationData, dummyExperienceData } from './dummyData';
import { useReactToPrint } from 'react-to-print';

const App = () => {
  const cvRenderRef = useRef(null);
  const [personalData, setPersonalData] = useState(dummyPersonalData);
  const [educationData, setEducationData] = useState(dummyEducationData);
  const [skillData, setSkillData] = useState(dummySkillData);
  const [projectData, setProjectData] = useState(dummyProjectData);
  const [certificationData, setCertificationData] = useState(dummyCertificationData);
  const [experienceData, setExperienceData] = useState(dummyExperienceData);
  const [load,setLoad] = useState(true)


  const handlePrint = useReactToPrint({
    content: () => cvRenderRef.current,
  });

  const clearData =()=>{
    setLoad(!load)
    setPersonalData({})
    setEducationData([])
    setCertificationData([])
    setSkillData([])
    setExperienceData([])
    setProjectData([])
  }
  const loadData =()=> {
    setPersonalData(dummyPersonalData)
    setEducationData(dummyEducationData)
    setCertificationData(dummyCertificationData)
    setSkillData(dummySkillData)
    setExperienceData(dummyExperienceData)
    setProjectData(dummyProjectData)
    setLoad(!load)
  }    
  return (
    <>
    <div className='header'>
      <button onClick={load? clearData:loadData}>{load?'Clear Data':'Load Sample'}</button>
      <p>RESUME BUILDER</p>
      <button onClick={handlePrint}>Download</button>
    </div>
    <div className='app-container'>
      <EditSection 
        personalData={personalData} 
        setPersonalData={setPersonalData} 
        educationData={educationData} 
        setEducationData={setEducationData}
        skillData={skillData}
        setSkillData={setSkillData}
        experienceData={experienceData}
        setExperienceData={setExperienceData}
        projectData={projectData}
        setProjectData={setProjectData}
        certificationData={certificationData} 
        setCertificationData={setCertificationData}
      />
      <ResumeSection ref={cvRenderRef}
        personalData={personalData} 
        educationData={educationData}
        skillData={skillData} 
        experienceData={experienceData}
        projectData={projectData}
        certificationData={certificationData}/>
    </div>
    </>
  );
};

export default App;
