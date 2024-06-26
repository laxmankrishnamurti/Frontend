import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header() {
    // Safely access state.auth.status with optional chaining
    const authStatus = useSelector((state) => state.auth?.status)

    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'SignUp',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: !authStatus
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: !authStatus
        }
    ]

    return (

        <header className="py-3 shadow bg-gray-500">
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => (
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className='inline-block px-6 py-2 hover:bg-blue-100 duration-200 rounded-full'
                                    >{item.name}</button>
                                </li>
                            ) : null
                        ))}
                        {authStatus && (
                            <li><LogoutBtn /></li>
                        )}
                        {/* This is a special syntax in React it states that if authStatus is true then it will show the list-item. This not works same as "&&" operator s*/}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header