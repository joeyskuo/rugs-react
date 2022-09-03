import ProductList from "./ProductList";
import Cart from "./Cart";
import data from "../data/products.json";
import { useState } from "react";


const Shop = () => {

    const [showCart, setShowCart] = useState(true);

    return (
        <div id="shop">
            <ProductList 
                products={data.products}
                setShowCart={setShowCart}
            />
            {showCart && <Cart 
                            cartItems={data.products}
                            setShowCart={setShowCart}
                         />    
            }
        </div>
    )
}

export default Shop;