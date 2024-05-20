import productImage from "../../images/productImage.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { useContext } from "react";

function Product(props) {

    const { cart, setCart } = useContext(CartContext);
    const { product } = props;

    const addToCart = (event, product) => {
        event.preventDefault();

        const _cart = { ...cart };  //Because of By-reference  [ {} = empty object]

        if (!_cart.items) {
            _cart.items = {};
        }

        if (!_cart.items[product.id]) {
            _cart.items[product.id] = 1;
        } else {
            _cart.items[product.id] += 1;
        }

        if (!_cart.totalItems) {
            _cart.totalItems = 0;
        }

        _cart.totalItems++;

        setCart(_cart)


    }

    return (
        <>
            <Link to={`/products/${product.id}`} className="w-1/5 flex items-center flex-col justify-center rounded-md p-4 shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300 ease">
                <div className="flex w-full justify-center">
                    <img className="w-1/2" src={productImage} alt="pizzaImage" />
                </div>
                <div className="w-full flex flex-col">
                    <p className="text-center mt-4 text-xl">{product.productName}</p>
                    <div className="w-full flex justify-around mt-4">
                        <p className="bg-orange-400 p-2 rounded-xl"><span>₹</span>{product.price}</p>
                        <p className="bg-red-400 p-2 rounded-xl">- {product.discount}<span>%</span></p>
                        <button onClick={(e) => { addToCart(e, product) }} className="bg-green-400 p-2 rounded-xl">Add</button>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Product;