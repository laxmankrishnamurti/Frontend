import React from 'react'

function SearchList({ searchCountry }) {
    return (
        <div>
            <select className='px-8 py-2 bg-yellow-300 rounded-md'>
                {searchCountry.map((country) => {
                    return (
                        <option key={country} name={country} value={country}>{country}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default SearchList