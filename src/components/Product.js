
const Product = ({product, setShowCart}) => {

    const usDollar = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

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
                <button onClick={() => setShowCart(true)}>(+)</button>
            </span>
            <p>Cart Count</p>
        </div>
    )
}

export default Product;
