
import convertToDollar from "../utils/currency";


const Product = ({product, setShowCart, addCartItem, removeCartItem}) => {

    const addProduct = () => {
        addCartItem(product);
        setShowCart(true);
    }

    const removeProduct = (productId) => {
        removeCartItem(productId);
    }

    return (
        <div className="product-card--result">
            <img src={product.imgUrl}/>
            <p>{product.name}</p>
            <p>{product.collection}</p>
            <p>{convertToDollar(product.price)}</p>
            <p>Cart Count</p>
            <span className="product-card--buttons">
                <button onClick={() => removeProduct(product.product)}><i class="fa-solid fa-minus"></i></button>
                <span>1</span>
                <button onClick={() => addProduct()}><i class="fa-solid fa-plus"></i></button>
            </span>
            <div>
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    )
}

export default Product;
