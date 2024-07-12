import React from 'react'
import { LeftBox, RightBox } from '../index'

function Resume({ data }) {
    return (
        <div className='w-full flex p-4 rounded-md bg-slate-200'>
            <LeftBox data={data} />
            <RightBox data={data} />
        </div>
    )
}

export default Resume