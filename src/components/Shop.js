import ProductList from "./ProductList";
import Cart from "./Cart";
import data from "../data/products.json";
import { useState } from "react";


const Shop = () => {

    const [showCart, setShowCart] = useState(true);
    const [cartItems, setCartItems] = useState({});

    const addCartItem = (product) => {
        const productId = product.product;
        const cartItem = (cartItems[productId] == undefined) ? 
                                                    {
                                                        "product": product,
                                                        "quantity": 0
                                                    }
                                                    : 
                                                    cartItems[productId];
        cartItem.quantity += 1;
        cartItems[productId] = cartItem;
        setCartItems(cartItems);
    }

    const removeCartItem = () => {

    }


    return (
        <div id="shop">
            <ProductList 
                products={data.products}
                setShowCart={setShowCart}
                addCartItem={addCartItem}
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