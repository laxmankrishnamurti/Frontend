import React from 'react'

function Education(props) {

    const educationData = props.data.education

    return (
        <div className='text-white'>
            <h1 className='text-2xl mt-4 inline-block font-bold'>Education</h1>
            <hr />
            <ul>
                <li className='mt-4'>
                    <span>{educationData.first.degree}</span>
                    <ul className='text-sm'>
                        <li>{educationData.first.year}</li>
                        <li>{educationData.first.school_name}</li>
                        <li>{educationData.first.status}</li>
                    </ul>
                </li>
                <li className='mt-4'>
                    <span>{educationData.second.degree}</span>
                    <ul className='text-sm'>
                        <li>{educationData.second.year}</li>
                        <li>{educationData.second.school_name}</li>
                        <li>{educationData.second.status}</li>
                    </ul>
                </li>
                <li className='mt-4'>
                    <span>{educationData.third.degree}</span>
                    <ul className='text-sm'>
                        <li>{educationData.third.year}</li>
                        <li>{educationData.third.school_name}</li>
                        <li>{educationData.third.status}</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Education