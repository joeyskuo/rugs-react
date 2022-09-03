import ProductCard from "./ProductCard";
import "../css/_cart.css";
import convertToDollar from "../utils/currency";

const Cart = ({cartItems, setShowCart}) => {
    return (
        <div id="cart">
            <div className="cart-backdrop" onClick={() => {setShowCart(false)}}>
            </div>
            <div className="cart-summary">
                <div>
                    <span>Cart Summary</span>
                    <span>X</span>
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
                <div>
                    <p>Subtotal (3 items):  $9600.00</p>
                    <button>View Cart & Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;