import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products"
import Cart from "./components/pages/Cart"
import SingleProduct from "./components/pages/SingleProduct"


function App() {
    return (
        <>
            <Router>
                <Navigation />
                <Routes><Route path="/" Component={Home}></Route></Routes>
                <Routes><Route path="/products" Component={Products}></Route></Routes>
                <Routes><Route path="/products/:id" Component={SingleProduct}></Route></Routes>
                <Routes><Route path="/cart" Component={Cart}></Route></Routes>
            </Router>
        </>
    )
}

export default App