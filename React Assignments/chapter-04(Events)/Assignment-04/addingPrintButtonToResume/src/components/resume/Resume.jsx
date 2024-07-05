import React from 'react'
import { LeftBox, RightBox } from '../index'

function Resume({ data, id }) {
    console.log(id)

    function handlePrint(e) {
        const resumeElement = document.getElementById(id)
        const otherResumes = document.querySelectorAll(`.resume-container:not(#${id})`)

        //Hide other resumes 
        otherResumes.forEach((resume) => {
            resume.style.display = 'none';
        })

        window.print();

        otherResumes.forEach((resume) => {
            resume.style.display = '';
        })

    }

    return (
        <>
            <div id={id} className='resume-container'>
                <div className='w-full flex p-4 rounded-md bg-slate-200'>
                    <LeftBox data={data} />
                    <RightBox data={data} />
                </div>
                <button onClick={handlePrint} className='w-full bg-green-500 p-2 rounded-full text-white hover:shadow-black hover:shadow-md transition-all duration-100 ease-in-out text-2xl mt-4'>Print</button>
            </div>
        </>
    )
}

export default Resume