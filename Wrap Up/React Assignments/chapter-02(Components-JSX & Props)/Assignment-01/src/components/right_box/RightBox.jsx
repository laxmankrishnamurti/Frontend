import React from 'react'
import resumeData from '../../data/resumeData.json'
import { Profile, Experience } from './components/index'

function RightBox() {
    return (
        <div className='px-8 pt-8 pb-4'>
            <div>
                <Profile data={resumeData} />
            </div>
            <div>
                <Experience data={resumeData} />
            </div>
        </div>
    )
}

export default RightBox