import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <>
            <header>
                <div>
                    <span>Logo</span>
                </div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <button className='bg-red-500 p-4 text-white font-bold'>Register</button>
                </div>
            </header>
        </>
    )
}

export default Header