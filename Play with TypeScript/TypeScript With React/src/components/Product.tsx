import { IProduct } from '../App'

interface ProductProps {
    products: IProduct;
    handleAddToCart(id:number):void;
}

function Product({products, handleAddToCart}: ProductProps) {
  return (
    <div>
        <p>Product_id : {products._id}</p>
        <p>Product_name : {products.name}</p>
        <p>Product_price: {products.price}</p>
        <p>Product_category : {products.category}</p>
        <button onClick={() => handleAddToCart(products._id)}>
            Add to Cart
        </button>
    </div>
  )
}

export default Product