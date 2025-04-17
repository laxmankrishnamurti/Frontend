import React from 'react'

function Contact({ data }) {

    const contactData = data.contact;

    return (
        <div className='text-white'>
            <h1 className='text-2xl mt-4 inline-block font-bold'>Contact</h1>
            <hr />
            <ul>
                {
                    contactData.map((data, index) => (
                        <li className='mt-4' key={index}>
                            {data.phone && (
                                <>
                                    <h2 className='font-bold'>Phone</h2>
                                    <span className='text-sm'>{data.phone}</span>
                                </>
                            )}
                            {data.email && (
                                <>
                                    <h2 className='font-bold'>Email</h2>
                                    <span className='text-sm'>{data.email}</span>
                                </>
                            )}
                            {data.address && (
                                <>
                                    <h2 className='font-bold'>Address</h2>
                                    <span className='text-sm'>{data.address}</span>
                                </>
                            )}
                        </li>
                    ))
                }
            </ul>

        </div >
    )
}

export default Contact