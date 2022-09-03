import ProductCard from "./ProductCard";
import "../css/_cart.css";

const Cart = ({cartItems}) => {
    return (
        <div id="cart">
            <div className="cart-summary">
            <span>Cart Summary</span>
            {cartItems.map((product) => (
                <ProductCard
                    key={product.parentProductId + "-cart"}
                    product={product}
                />
            ))}
            </div>
        </div>
    )
}

export default Cart;