import "../css/_productCard.css";

const ProductCard = ({product}) => {
    return(
        <div className="product-card--cart">
            <img src={product.imgUrl}></img>
            <div>
                <p>{product.name}</p>
                <span className="product-card--total">
                <p>Qty: 1</p>
                <p>{product.price}</p>
                </span>
            </div>
        </div>
    )
}

export default ProductCard;