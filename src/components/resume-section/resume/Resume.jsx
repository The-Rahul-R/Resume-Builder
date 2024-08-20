import './Resume.css'
import { forwardRef } from 'react'

const Resume =forwardRef(({personalData,educationData,skillData,projectData,certificationData,experienceData},ref)=> {
    return (
        <div className='resume' ref={ref}>
            <PersonalDetails name={personalData.name} phone={personalData.mobile} email={personalData.email} location={personalData.location} portfolio={personalData.portfolio} github={personalData.github} linkedin={personalData.linkedin}/>
            <div className='subgroup'>
                <SubTitle title={'WORK EXPERIENCE'}/>
                {experienceData.map(data => {
                    return (
                        <Experience key={data.id} company={data.company} role={data.role} start={data.start}
                        end={data.end} workDetails={data.workDetails} />
                    )
                })}
            </div>
            <div className='subgroup'>
                <SubTitle title={'SKILLS'}/>
                {
                    skillData.map(data => {
                        return (
                            <SkillDetail key={data.id} skill={data.skill} skillDetail={data.skillDetail} />
                        )
                    })
                }
            </div>
            <div className='subgroup'>
                <SubTitle title={'NOTABLE PROJECTS'}/>
                {
                    projectData.map(data => {
                        return (
                            <Projects key={data.id} project={data.project} projectDetail={data.projectDetail} />
                        )
                    })
                }
            </div>
            <div className='subgroup'>
                <SubTitle title={'EDUCATION'}/>
                {
                    educationData.map(data => {
                        return (
                            <EducationDetails key={data.id} uniName={`${data.university}, ${data.location}`} gradStart={data.startDate} gradEnd={data.endDate} degree={data.degree} courses={data.courses} GPA={data.GPA}/>
                        )
                    })
                }
            </div>
            <div className='subgroup'>
                <SubTitle title={'HONORS & CERTIFICATIONS'}/>
                {
                    certificationData.map(data => {
                        return (
                            <Certifications key={data.id} certi={data.certi} />
                        )
                    })
                }                
            </div>
            
        </div>
    )
})

const SkillDetail =({skill,skillDetail})=> {
    return(
        <div className='entry'>
            <div className='skill-group'>
                <p id='skill'>{skill}</p>
                <p id='particulars'>{skillDetail}</p>
            </div>
        </div>
    )
}

const Certifications =({certi})=> {
    return (
        <div className='entry'>
            <ul style={{marginBottom:0}}>
                <li>{certi}</li>
            </ul>
        </div>
    )
}

const SubTitle =({title}) => {
    return (
        <div>
            <h3>{title}</h3>
            <div className='divider'></div>
        </div>
    )
}

const Projects =({project,projectDetail})=> {
    return(
        <div className='entry'>
            <ul>
                <li>
                   <b> {project} </b>: {projectDetail}
                </li>
            </ul>
        </div>
    )
}

const Experience =({company,role,start,end,workDetails})=> {
    return(
        <div className='entry'>
            <div className='uni-details'>
                <p><b>{company}</b></p>
                <p><i>{`${start}-${end}`}</i></p>
            </div>
            <p><i>{role}</i></p>
            <ul>
                {workDetails && workDetails.map(work => (<li>{work}</li>))}
            </ul>
        </div>
    )
}

const EducationDetails =({uniName,gradStart,gradEnd,degree,courses,GPA})=> {
    return(
        <div className='entry'>
            <div className='uni-details'>
                <p><b>{uniName}</b></p>
                <p><i>{`${gradStart}-${gradEnd}`}</i></p>
            </div>
            <div className='course-details'>
                <p><i>{degree}</i></p>
                <p>{`GPA: ${GPA}/10.0`}</p>
            </div>
            <p className='relevant-courses'>{ `Relevant Courses: ${courses}`}</p>
        </div>
    )
}

const PersonalDetails =({name,email,phone,location,portfolio,linkedin,github})=> {
    return (
        <div className='personal-info'>
        <h1>{name}</h1>
        <div className='details'>
            <ul>
                {email && <li>E-mail: <a>{email}</a></li>}
                {phone && <li>{`Phone: ${phone}`}</li>}
                {location && <li>{`Location: ${location}`}</li>}
                {portfolio && <li>Portfolio: <a href={portfolio}>{portfolio}</a></li>}
                {github && <li>Github: <a href={github}>{github}</a></li>}
                {linkedin && <li>LinkedIn: <a href={linkedin}>{linkedin}</a></li>}
            </ul>
        </div>
        </div>
    )
}

export default Resume