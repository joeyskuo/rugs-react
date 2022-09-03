
const Product = ({product, setShowCart, addCartItem}) => {

    const usDollar = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    const addProduct = () => {
        addCartItem(product);
        setShowCart(true);
    }

    return (
        <div className="product-card--result">
            <img src={product.imgUrl}/>
            <p>{product.name}</p>
            <p>{product.collection}</p>
            <p>{usDollar.format(product.price)}</p>
            <span>
                <button>Remove</button>
                <button>(-)</button>
                <i className="fa-solid fa-cart-shopping"></i>
                <button onClick={() => addProduct()}>(+)</button>
            </span>
            <p>Cart Count</p>
        </div>
    )
}

export default Product;
