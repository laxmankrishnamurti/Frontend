import Product from "./Product";
import { useState, useEffect } from "react";

function Home() {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('/users')
            .then((response) => {
                response.json()
            })
            .then((product) => {
                console.log(product)
            })
    }, [])

    return (
        <>
            <div>
                <h1 className="pl-16 text-3xl font-medium my-8">Products</h1>
            </div>
            <div className="flex mt-4 justify-evenly">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </>
    )
}

export default Home