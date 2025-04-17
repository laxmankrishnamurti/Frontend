import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Contact({ data, updateContact }) {
    const [trackEditButton, setTrackEditButton] = useState(false)
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        setPhone(data.contact.phone);
        setEmail(data.contact.email);
        setAddress(data.contact.address);
    }, [])

    function handleEditClick() {
        if (trackEditButton) {
            updateContact(data.id, {
                phone: 9508981101,
                email: 'sonukumar@gmail.com'
            })
            setTrackEditButton(prev => !prev)
        } else {
            setTrackEditButton(true)
        }
    }


    return (
        <div className='text-white  relative'>
            <button
                onClick={handleEditClick}
                className={`${trackEditButton ? "text-gray-200" : null} absolute right-0 text-gray-500 hover:underline hover:text-white transition-all duration-200 ease-in-out`}
            >{trackEditButton ? "Save" : "Edit"}</button>
            <h1 className='text-2xl mt-4 inline-block font-bold'>Contact</h1>
            <hr />
            <ul>
                {/* { */}
                {/* contactData.map((data, index) => ( */}
                <div key={Date.now()}>
                    <li className='mt-4 mb-2'>
                        <h2 className='font-bold'>Phone</h2>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            readOnly={!trackEditButton}
                            className={`${trackEditButton ? "bg-slate-500 px-2 py-2 " : null} rounded-md text-sm bg-transparent border-none outline-none`}
                        />
                    </li>
                    <li className='mb-2'>
                        <h2 className='font-bold'>Email</h2>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            readOnly={!trackEditButton}
                            className={`${trackEditButton ? "bg-slate-500 px-2 py-2 " : null} rounded-md text-sm bg-transparent border-none outline-none`}
                        />
                    </li>
                    <li>
                        <h2 className='font-bold'>Address</h2>
                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            readOnly={!trackEditButton}
                            className={`${trackEditButton ? "bg-slate-500 px-2 py-2 " : null} rounded-md text-sm bg-transparent border-none outline-none`}
                        />
                    </li>
                </div>
                {/* )) */}
                {/* } */}
            </ul>

        </div >
    )
}

export default Contact