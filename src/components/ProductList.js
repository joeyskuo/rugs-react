import Product from "./Product";
import "../css/_productList.css";

const ProductList = ({products, setShowCart, addCartItem, removeCartItem}) => {

    return (
        <div id="product-list">
            {products.map((product) => (
                <Product 
                    key={product.parentProductId}
                    product={product}
                    setShowCart={setShowCart}
                    addCartItem={addCartItem}
                    removeCartItem={removeCartItem}
                />
            ))}
        </div>
    )
}

export default ProductList;