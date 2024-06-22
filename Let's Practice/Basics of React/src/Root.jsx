import React from 'react'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'


function Root() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root