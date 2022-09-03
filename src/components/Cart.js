import ProductCard from "./ProductCard";

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