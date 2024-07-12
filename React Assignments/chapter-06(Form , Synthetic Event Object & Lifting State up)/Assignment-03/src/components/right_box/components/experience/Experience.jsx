import React from 'react'

function Experience({ data }) {

    const experienceData = data.experience;

    return (
        <div>
            <h1 className='text-2xl font-bold text-gray-700'>Experience</h1>
            <hr className='border-black' />

            {/* Frist experience */}

            {experienceData.map((data, index) => (
                <div key={`experience-div-${index}`} >
                    <ul className='mt-4'>
                        <li className='text-gray-600'>{data.year}</li>
                        <li className='mb-2 text-gray-500'><span>{data.company_name}</span> / <span>{data.company_location}</span></li>
                        <li className='text-gray-600'><b>{data.job_title}</b></li>
                        <li className='text-sm text-gray-500'><p>{data.work}</p></li>
                    </ul>
                </div>
            ))
            }

        </div >
    )
}

export default Experience