import React from 'react'

function Contact(props) {

    const contactData = props.data.contact

    return (
        <div className='text-white'>
            <h1 className='text-2xl mt-4 inline-block font-bold'>Contact</h1>
            <hr />
            <ul>
                <li className='mt-4'>
                    <h2 className='font-bold'>Phone</h2>
                    <span className='text-sm'>{contactData.phone}</span>
                </li>
                <li className='mt-4'>
                    <h2 className='font-bold'>Email</h2>
                    <span className='text-sm'>{contactData.email}</span>
                </li>
                <li className='mt-4'>
                    <h2 className='font-bold'>Address</h2>
                    <span className='text-sm'>{contactData.address}</span>
                </li>
            </ul>
        </div>
    )
}

export default Contact