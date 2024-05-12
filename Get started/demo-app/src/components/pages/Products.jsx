import Product from "./Product";
import { useState, useEffect } from "react";

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then((response) => {
                return response.json()
            })
            .then((product) => {
                setProducts(product)
            })
            .catch((error) => {
                console.log("Error occurs while fetching : ", error)
            })
    }, [])

    return (
        <>
            <div>
                <h1 className="pl-16 text-3xl font-medium my-8">Products</h1>
            </div>
            <div className="flex flex-wrap mt-4 justify-evenly">
                {
                    products.map((product) => {
                        return <Product key={product.id} product={product} />
                    })
                }
            </div>
        </>
    )
}

export default Home