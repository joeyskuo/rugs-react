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

    const removeCartItem = (productId) => {
        const cartItem = cartItems[productId];
        if(cartItem != undefined) {
            cartItem.quantity -= 1;
            cartItems[productId] = cartItem;
            if(cartItem.quantity == 0) delete cartItems[productId];
            setCartItems(cartItems);
        }
    }

    const getCartItemCount = (productId) => {
        const cartItem = cartItems[productId];
        return (cartItem == undefined) ? 0 : cartItem.quantity;
    }

    return (
        <div id="shop">
            <div className="shop-products--container">
                <ProductList 
                    products={data.products}
                    setShowCart={setShowCart}
                    addCartItem={addCartItem}
                    removeCartItem={removeCartItem}
                    getCartItemCount={getCartItemCount}
                />
            </div>
            {showCart && <Cart 
                            cartItems={cartItems}
                            setShowCart={setShowCart}
                         />    
            }
        </div>
    )
}

export default Shop;