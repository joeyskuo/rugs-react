import ProductList from "./ProductList";
import Cart from "./Cart";
import data from "../data/products.json";

const Shop = () => {

    return (
        <div id="shop">
            <ProductList products={data.products}></ProductList>
            <Cart cartItems={data.products}></Cart>
        </div>
    )
}

export default Shop;