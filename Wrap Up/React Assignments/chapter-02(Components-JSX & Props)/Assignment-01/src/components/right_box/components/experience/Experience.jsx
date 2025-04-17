import React from 'react'

function Experience(props) {

    const experienceData = props.data.experience;

    return (
        <div>
            <h1 className='text-2xl font-bold text-gray-700'>Experience</h1>
            <hr className='border-black' />

            {/* Frist experience */}
            <div>
                <ul className='mt-4'>
                    <li className='text-gray-600'>{experienceData.first.year}</li>
                    <li className='mb-2 text-gray-500'><span>{experienceData.first.company_name}</span> / <span>{experienceData.first.company_location}</span></li>
                    <li className='text-gray-600'><b>{experienceData.first.job_title}</b></li>
                    <li className='text-sm text-gray-500'><p>{experienceData.first.work}</p></li>
                </ul>
            </div>

            {/* Second Experience */}

            <div>
                <ul className='mt-12'>
                    <li className='text-gray-600'>{experienceData.second.year}</li>
                    <li className='mb-2 text-gray-500'><span>{experienceData.second.company_name}</span> / <span>{experienceData.second.company_location}</span></li>
                    <li className='text-gray-600'><b>{experienceData.second.job_title}</b></li>
                    <li className='text-sm text-gray-500'><p>{experienceData.second.work}</p></li>
                </ul>
            </div>

            {/* Third Experience */}

            <div>
                <ul className='mt-12'>
                    <li className='text-gray-600'>{experienceData.third.year}</li>
                    <li className='mb-2 text-gray-500'><span>{experienceData.third.company_name}</span> / <span>{experienceData.third.company_location}</span></li>
                    <li className='text-gray-600'><b>{experienceData.third.job_title}</b></li>
                    <li className='text-sm text-gray-500'><p>{experienceData.third.work}</p></li>
                </ul>
            </div>

        </div>
    )
}

export default Experience