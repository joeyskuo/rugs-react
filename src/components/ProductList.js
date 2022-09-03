import Product from "./Product";
import "../css/_product.css";

const ProductList = ({products}) => {

    return (
        <div id="product-list">
            {products.map((product) => (
                <Product 
                    key={product.parentProductId}
                    product={product}
                />
            ))}
        </div>
    )
}

export default ProductList;