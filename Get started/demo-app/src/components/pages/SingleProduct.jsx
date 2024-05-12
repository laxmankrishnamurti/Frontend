import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productImage from "../../images/productImage.png"

function SingleProduct() {

    const [product, setProduct] = useState([])
    const params = useParams();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        fetch(`http://localhost:3001/products/${params.id}`)
            .then((response) => {
                return response.json()
            })
            .then((singleProductData) => {
                setProduct(singleProductData)
            })
            .catch((error) => {
                console.error("Error while fetching single product", error)
            })
    }, [params.id])

    return (
        <>
            <div className="ml-16 mt-16">
                <div className="mb-8 ml-4">
                    <button className="font-bold text-2xl" onClick={goBack}>Back</button>
                </div>
                <div className="flex">
                    <div className="w-1/5">
                        <img className="w-full" src={productImage} alt="productImage" />
                    </div>
                    <div className="ml-8 mt-4">
                        <div className="font-bold text-2xl">{product.productName}</div>
                        <div className="text-2xl flex justify-between my-4">
                            <div className="mr-2">{product.price}</div>
                            <div className="text-red-400 text-xl"><span>-</span><span>{product.discount}</span><span>%</span></div>
                        </div>
                        <div className="bg-green-400 text-center p-4 rounded-2xl cursor-pointer">Add to cart</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;