import productImage from "../../images/productImage.png"

function Home() {
    return (
        <>
            <div>
                <div className="w-1/4 flex items-center flex-col justify-center rounded-md p-4 shadow-md">
                    <div className="flex w-full justify-center">
                        <img className="w-1/2" src={productImage} alt="pizzaImage" />
                    </div>
                    <div className="w-full flex justify-around mt-4">
                        <p className="bg-orange-400 p-2 rounded"><span>₹</span>500</p>
                        <p className="bg-orange-400 p-2 rounded">10<span>%</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home