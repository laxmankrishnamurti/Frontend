import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// Note :- Outlet is nothing but the child element of the nested route. Whenever the route matches the element or the component will take place on the outlet element.

function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root 