import ProductCard from "./ProductCard";
import "../css/_cart.css";
import convertToDollar from "../utils/currency";
import { useState, useEffect } from "react";

const Cart = ({cartItems, setShowCart}) => {

    const [subTotal, setSubTotal] = useState(0);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        let total = 0;
        let count = 0;

        for(const item of Object.values(cartItems)) {
            const price = item.product.price;
            const quantity = item.quantity;
            total += quantity * price;
            count += quantity;
        }

        setSubTotal(total);
        setItemCount(count);
    },
    [cartItems]);


    return (
        <div id="cart">
            <div className="cart-backdrop" onClick={() => {setShowCart(false)}}>
            </div>
            <div className="cart-summary">
                <div className="cart-summary--header">
                    <span className="cart-summary--title">Cart Summary</span>
                    <i className="fa-sharp fa-solid fa-x cart-summary--close" onClick={() => {setShowCart(false)}}></i>
                </div>
                <div className="cart-summary--items">
                    {Object.entries(cartItems).map(([productId, cartItem]) => (
                        <ProductCard
                            key={productId + "-cart"}
                            product={cartItem.product}
                            quantity={cartItem.quantity}
                        />
                    ))}
                </div>
                <div className="cart-summary--checkout">
                    <p>Subtotal ({itemCount} items):  {convertToDollar(subTotal)}</p>
                    <button>View Cart & Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;