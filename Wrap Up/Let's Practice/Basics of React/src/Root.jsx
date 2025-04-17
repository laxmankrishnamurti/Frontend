import React from 'react'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'


function Root() {
    return (
        <div>
            <Header />
            <div className='text-center mt-4'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root