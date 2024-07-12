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



            {/* Second Experience */}

            {/* <div>
                <ul className='mt-12'>
                    <li className='text-gray-600'>{experienceData.second.year}</li>
                    <li className='mb-2 text-gray-500'><span>{experienceData.second.company_name}</span> / <span>{experienceData.second.company_location}</span></li>
                    <li className='text-gray-600'><b>{experienceData.second.job_title}</b></li>
                    <li className='text-sm text-gray-500'><p>{experienceData.second.work}</p></li>
                </ul>
            </div> */}

            {/* Third Experience */}

            {/* <div>
                <ul className='mt-12'>
                    <li className='text-gray-600'>{experienceData.third.year}</li>
                    <li className='mb-2 text-gray-500'><span>{experienceData.third.company_name}</span> / <span>{experienceData.third.company_location}</span></li>
                    <li className='text-gray-600'><b>{experienceData.third.job_title}</b></li>
                    <li className='text-sm text-gray-500'><p>{experienceData.third.work}</p></li>
                </ul>
            </div> */}

        </div >
    )
}

export default Experience