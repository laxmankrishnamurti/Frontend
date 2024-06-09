import { Link, NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="w-full h-16 shadow shadow-black flex justify-evenly items-center">
                <div>
                    <Link to='/'>
                        <h1 className="text-2xl font-bold">Your <span className="text-red-600 font-bold">Logo</span></h1>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "text-red-400" : "text-black"} ml-8 hover:text-red-500 transition-all duration-100 ease-in`}>Home</NavLink>
                    </Link>
                    <Link className="ml-8 hover:text-red-500 transition-all duration-100 ease-in" to="/about">
                        <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-red-400" : "text-black"} ml-8 hover:text-red-500 transition-all duration-100 ease-in`}>About</NavLink>
                    </Link>
                    <Link className="ml-8 hover:text-red-500 transition-all duration-100 ease-in" to="/profile">
                        <NavLink to="/profile" className={({ isActive }) => `${isActive ? "text-red-400" : "text-black"} ml-8 hover:text-red-500 transition-all duration-100 ease-in`}>Profile</NavLink>
                    </Link>
                    <Link className="ml-8 hover:text-red-500 transition-all duration-100 ease-in" to="/profile">
                        <NavLink to="/user/laxman" className={({ isActive }) => `${isActive ? "text-red-400" : "text-black"} ml-8 hover:text-red-500 transition-all duration-100 ease-in`}>User</NavLink>
                    </Link>
                </div>
                <div>
                    <Link to="#">Log in</Link>
                    <Link className="px-8 py-3 bg-red-500 ml-4 rounded-lg" to="#">Register</Link>
                </div>
            </div>
        </>
    )
}

export default Header