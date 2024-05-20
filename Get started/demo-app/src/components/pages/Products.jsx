import Product from "./Product";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../CartContext";

function Home() {

    const [products, setProducts] = useState([]);

    const { name } = useContext(CartContext);

    useEffect(() => {
        fetch('http://localhost:3006/products')
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
                <h1 className="pl-16 text-3xl font-medium my-8">Products {name}</h1>
            </div>
            <div className="flex flex-wrap mt-4 justify-evenly p-8">
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