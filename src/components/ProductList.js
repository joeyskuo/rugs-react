import Product from "./Product";
import "../css/_product.css";

const ProductList = ({products, setShowCart, addCartItem}) => {

    return (
        <div id="product-list">
            {products.map((product) => (
                <Product 
                    key={product.parentProductId}
                    product={product}
                    setShowCart={setShowCart}
                    addCartItem={addCartItem}
                />
            ))}
        </div>
    )
}

export default ProductList;