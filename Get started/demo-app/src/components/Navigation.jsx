import { Link } from "react-router-dom";

function Navigation() {
    return (
        <>
            <div className="flex justify-between item-center p-4 bg-orange-400">
                <div>
                    <Link to={'/'}><h1 className="ml-12 text-3xl " style={{ color: '#31393c' }}>Pizza Hunt</h1></Link>
                </div>
                <div className="flex items-center">
                    <Link className="pr-16 hover:text-white transition-all duration-300 ease-in-out" to={'/'}>Home</Link>
                    <Link className="pr-16 hover:text-white transition-all duration-300 ease-in-out" to={'/products'}>Products</Link>
                    <Link className="pr-16 hover:text-white transition-all duration-300 ease-in-out" to={'/cart'}>Cart</Link>
                </div>
            </div>
        </>
    )
}

export default Navigation