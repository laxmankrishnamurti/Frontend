import React from 'react'
import { Profile, Experience } from './components/index'

function RightBox({ data }) {
    return (
        <div className='px-8 pt-8 pb-4'>
            <div>
                <Profile key="profile" data={data} />
            </div>
            <div>
                <Experience key="experience" data={data} />
            </div>
        </div>
    )
}

export default RightBox