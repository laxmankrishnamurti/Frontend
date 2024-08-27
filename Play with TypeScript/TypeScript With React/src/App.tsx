import { useState } from 'react'
import Product from './components/Product';
import './App.css'

export interface IProduct {
  _id: number;
  name: string;
  price: number;
  category: string;
}

function App() {

  const [products, setProducts] = useState<IProduct[]>([
    {
      _id: 1,
      name: "Lenovo ideapad slim-3",
      price: 24500,
      category: "Laptop"
    },
    {
      _id: 2,
      name: "Ryzen 3 Processor",
      price: 38000,
      category: "PC"
    },
    {
      _id: 3,
      name: "Oppo-K10",
      price: 18000,
      category: "Smart Phone"
    }
  ])

  function handleAddToCart(id:number){
    console.log("Product id is : ", id)
  }

  return (
    <>
      {
        products.map((product) => <Product products={product} handleAddToCart={handleAddToCart} key={product._id}/>)
      }
    </>
  )
}

export default App
