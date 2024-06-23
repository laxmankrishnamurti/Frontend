import React, { useEffect } from 'react'
import { Link, NavLink, useInRouterContext } from 'react-router-dom'
import { Profile } from '../index'

function Header() {

    return (
        <>
            <header className='flex justify-evenly items-center bg-pink-400 text-white h-16'>
                <div>
                    <span>Logo</span>
                </div>
                <div>
                    <ul>
                        <li className='inline mr-8'>
                            <Link to="/">
                                <NavLink to="/" className={({ isActive }) => `${isActive ? "text-black" : "text-white"} hover:text-black duration-200 transition-all ease-in-out `}>Home</NavLink>
                            </Link>
                        </li>
                        <li className='inline mr-8'>
                            <Link to="/about">
                                <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-black" : "text-white"} hover:text-black duration-200 transition-all ease-in-out `}>About</NavLink>
                            </Link>
                        </li>
                        <li className='inline mr-8'>
                            <Link to="/login">
                                <NavLink to="/login" className={({ isActive }) => `${isActive ? "text-black" : "text-white"} hover:text-black duration-200 transition-all ease-in-out `}>Login</NavLink>
                            </Link>
                        </li>
                        <li className='inline mr-8'>
                            <Link to="/contact">
                                <NavLink to="contact" className={({ isActive }) => `${isActive ? "text-black" : "text-white"} hover:text-black duration-200 transition-all ease-in-out `}>Contact</NavLink>
                            </Link>
                        </li>
                        <li className='inline mr-8'>
                            <Link to="/profile">
                                <NavLink to="/profile" className={({ isActive }) => `${isActive ? "text-black" : "text-white"} hover:text-black duration-200 transition-all ease-in-out `}>Profile</NavLink>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className='bg-white text-black px-6 py-2 rounded-md'>Register</button>
                </div>
            </header >
        </>
    )
}

export default Header