import ProductCard from "./ProductCard";
import "../css/_cart.css";

const Cart = ({cartItems}) => {
    return (
        <div id="cart">
            <span>Cart Summary</span>
            {cartItems.map((product) => (
                <ProductCard
                    key={product.parentProductId + "-cart"}
                    product={product}
                />
            ))}
        </div>
    )
}

export default Cart;