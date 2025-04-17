import React from 'react'

function List({ styleType, data, dataInfo }) {
    return (
        <div className='ml-8'>
            <ul>
                <h1 className='text-2xl font-bold my-4'>{dataInfo} with styleType - {styleType}</h1>
                {data.map((list) => (
                    <li className={`list-${styleType} my-4`}>{list}</li>
                ))}
            </ul>
        </div>
    )
}

export default List