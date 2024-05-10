import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products"
import Cart from "./components/pages/Cart"


function App() {
    return (
        <>
            <Router>
                <Navigation />
                {/* <Switch> */}
                <Routes><Route path="/" Component={Home}></Route></Routes>
                <Routes><Route path="/products" Component={Products}></Route></Routes>
                <Routes><Route path="/cart" Component={Cart}></Route></Routes>
                {/* </Switch> */}
            </Router>
        </>
    )
}

export default App