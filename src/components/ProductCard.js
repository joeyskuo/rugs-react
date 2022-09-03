import "../css/_productCard.css";
import convertToDollar from "../utils/currency";

const ProductCard = ({product, quantity}) => {

    return(
        <div className="product-card--cart">
            <img src={product.imgUrl}></img>
            <div>
                <p>{product.name}</p>
                <div className="product-card--total">
                    <span>Qty: {quantity}</span>
                    <span>{convertToDollar(quantity * product.price)}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;