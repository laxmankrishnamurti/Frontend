import React, { useState } from 'react'

function Table({ values, dispatch }) {

    const [name, setName] = useState(values.name)
    const [age, setAge] = useState(values.age)
    const [city, setCity] = useState(values.city)
    const [isEditable, setIsEditable] = useState(false)

    const updatedValues = {
        _id: values._id,
        name: name,
        age: age,
        city: city
    }

    function handleUpdateClick() {
        setIsEditable((prev) => !prev)
        dispatch({
            type: "UPDATE",
            payload: updatedValues
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    <tr>
                        <td>{values._id}</td>
                        <td>
                            <input
                                type='text'
                                readOnly={!isEditable}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='bg-gray-200 px-2 py-2 w-40 rounded-md'
                            />
                        </td>
                        <td> <input
                            type='text'
                            readOnly={!isEditable}
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className='bg-gray-200 px-2 py-2 w-40 rounded-md'

                        /></td>
                        <td> <input
                            type='text'
                            readOnly={!isEditable}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className='bg-gray-200 px-2 py-2 w-40 rounded-md'

                        /></td>
                        <td>
                            <button onClick={handleUpdateClick} className='bg-green-400 px-4 py-2 rounded-md cursor-pointer'>Update</button>
                        </td>
                        <td>
                            <button className='bg-red-400 px-4 py-2 rounded-md cursor-pointer'>Delete</button>
                        </td>
                    </tr>
                </thead>
            </table>
        </div >
    )
}

export default Table