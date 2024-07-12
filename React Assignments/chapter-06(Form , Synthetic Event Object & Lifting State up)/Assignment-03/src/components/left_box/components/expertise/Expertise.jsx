import React from 'react'

function Expertise(props) {

    const expertiseData = props.data.expertise;

    return (
        <div className='text-white'>
            <h1 className='text-2xl mt-4 inline-block font-bold'>Expertise</h1>
            <hr />
            <ul className='text-sm mt-4'>
                {expertiseData.map((data) => (
                    <li key={data}>{data}</li>
                ))}
            </ul>
        </div>
    )
}

export default Expertise