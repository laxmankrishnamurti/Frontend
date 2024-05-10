import HeroImage from "../../images/heroImage.png"

function Home() {
    return (
        <>
            <div className="flex items-center" style={{ height: 580 }}>
                <div className="w-1/2 pl-16">
                    <h2 className="text-5xl mb-8 font-serif">Are you hungry?</h2>
                    <button className="bg-orange-500 text-white py-3 px-6 rounded-md text-xl border-2 
                    border-orange-500 hover:bg-white hover:text-white hover:border-2 hover:border-orange-500 hover:text-black transition-all duration-300 ease-in-out">Orger Now</button>
                </div>
                <div className="w-1/2 mt-16">
                    <img src={HeroImage} alt="hero-image" />
                </div>
            </div>
        </>
    )
}

export default Home