import { Link, NavLink } from 'react-router-dom'

function Header() {

    return (
        <>
            <header className='flex justify-evenly items-center bg-pink-400 text-white h-16'>
                <div>
                    <Link to='/'>
                        <span className='text-2xl font-bold'>Logo</span>
                    </Link>
                </div>
                <div>
                    <ul>
                        <li className='inline mr-8'>
                            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-black" : "text-white"} hover:text-black duration-200 transition-all ease-in-out `}>Home</NavLink>
                        </li>
                        <li className='inline mr-8'>
                            <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-black" : "text-white"} hover:text-black duration-200 transition-all ease-in-out `}>About</NavLink>
                        </li>
                        <li className='inline mr-8'>
                            <NavLink to="/login" className={({ isActive }) => `${isActive ? "text-black" : "text-white"} hover:text-black duration-200 transition-all ease-in-out `}>Login</NavLink>
                        </li>
                        <li className='inline mr-8'>
                            <NavLink to="contact" className={({ isActive }) => `${isActive ? "text-black" : "text-white"} hover:text-black duration-200 transition-all ease-in-out `}>Contact</NavLink>
                        </li>
                        <li className='inline mr-8'>
                            <NavLink to="/profile" className={({ isActive }) => `${isActive ? "text-black" : "text-white"} hover:text-black duration-200 transition-all ease-in-out `}>Profile</NavLink>
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