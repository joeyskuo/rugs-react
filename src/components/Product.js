
import { useState } from "react";
import convertToDollar from "../utils/currency";


const Product = ({product, setShowCart, addCartItem, removeCartItem, getCartItemCount}) => {

    const [cartCount, setCartCount] = useState(0);

    const addProduct = () => {
        addCartItem(product);
        setCartCount(getCartItemCount(product.product));
        setShowCart(true);
    }

    const removeProduct = (productId) => {
        removeCartItem(productId);
        setCartCount(getCartItemCount(product.product));
    }

    return (
        <div className="product-result">
            <img src={product.imgUrl}/>
            <p>{product.name}</p>
            <p>{product.collection}</p>
            <p>{convertToDollar(product.price)}</p>
            <p>Cart Count</p>
            <span className="product-buttons">
                <button onClick={() => removeProduct(product.product)}><i class="fa-solid fa-minus"></i></button>
                <span>{cartCount}</span>
                <button onClick={() => addProduct()}><i class="fa-solid fa-plus"></i></button>
            </span>
            <div>
                <i className="fa-solid fa-cart-shopping product-cart--icon" onClick={() => setShowCart(true)}></i>
            </div>
        </div>
    )
}

export default Product;
