import React from 'react'

function Education({ data }) {

    const educationData = data.education

    return (
        <div className='text-white'>
            <h1 className='text-2xl mt-4 inline-block font-bold'>Education</h1>
            <hr />
            <ul>
                {
                    educationData.map((data, index) => (
                        <li className='mt-4' key={index}>
                            <span>{data.degree}</span>
                            <ul className='text-sm'>
                                <li>{data.year}</li>
                                <li>{data.school_name}</li>
                                <li>{data.status}</li>
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Education