import React from 'react'
import Resume from '/resume.png'
import { Contact, Education, Expertise } from './components/index'
import { useState } from 'react'

function LeftBox({ data }) {

    return (
        <div className='bg-slate-600 p-8'>
            <div className='w-44 mx-auto'>
                <img src={Resume} alt='profile_image' className='w-full' />
            </div>
            <div className='mt-8'>
                <Contact key="contact" data={data} />
            </div>
            <div>
                <Education key="education" data={data} />
            </div>
            <div>
                {data.expertise.length > 0 && <Expertise key="expertise" data={data} />}
            </div>
        </div>
    )
}

export default LeftBox