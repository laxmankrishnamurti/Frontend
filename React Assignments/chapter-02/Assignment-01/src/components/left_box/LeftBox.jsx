import React from 'react'
import Resume from '/resume.png'
import { Contact, Education, Expertise } from './components/index'
import resumeData from '../../data/resumeData.json'

function LeftBox() {

    return (
        <div className='bg-slate-600 p-8'>
            <div className='w-44 mx-auto'>
                <img src={Resume} alt='profile_image' className='w-full' />
            </div>
            <div className='mt-8'>
                <Contact data={resumeData} />
            </div>
            <div>
                <Education data={resumeData} />
            </div>
            <div>
                <Expertise data={resumeData} />
            </div>
        </div>
    )
}

export default LeftBox