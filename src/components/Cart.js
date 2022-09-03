import ProductCard from "./ProductCard";
import "../css/_cart.css";

const Cart = ({cartItems}) => {
    return (
        <div id="cart">
            <div className="cart-backdrop" onClick={() => {console.log("clicked")}}>
            </div>
            <div className="cart-summary">
                <div>
                    <span>Cart Summary</span>
                    <span>X</span>
                </div>
                <div className="cart-summary--items">
                    {cartItems.map((product) => (
                        <ProductCard
                            key={product.parentProductId + "-cart"}
                            product={product}
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