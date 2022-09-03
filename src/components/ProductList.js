import Product from "./Product";
import "../css/_product.css";

const ProductList = ({products, setShowCart}) => {

    return (
        <div id="product-list">
            {products.map((product) => (
                <Product 
                    key={product.parentProductId}
                    product={product}
                    setShowCart={setShowCart}
                />
            ))}
        </div>
    )
}

export default ProductList;