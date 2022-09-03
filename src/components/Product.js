
const Product = ({product}) => {

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
        </div>
    )
}

export default Product;
