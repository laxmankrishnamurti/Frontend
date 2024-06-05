import { Link } from "react-router-dom";
import HeroImage from "../../images/heroImage.png";
import Products from "./Products"

function Home() {
    return (
        <>
            <div className="flex items-center" style={{ height: 560 }}>
                <div className="w-1/2 pl-16">
                    <h2 className="text-5xl mb-8 font-serif">Are you hungry?</h2>
                    <Link><a className="bg-orange-500 text-white py-3 px-4 rounded-md text-xl border-2 
                    border-orange-500 hover:bg-white hover:border-2 hover:border-orange-500 hover:text-black transition-all duration-300 ease-in-out cursor-pointer">Orger Now</a></Link>
                </div>
                <div className="w-1/2 mt-16">
                    <img className="pr-16" src={HeroImage} alt="hero-image" />
                </div>
            </div>
            <div>
                <Products />
            </div>
        </>
    )
}

export default Home