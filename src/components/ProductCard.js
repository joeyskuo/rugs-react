import "../css/_cartProduct.css";
import convertToDollar from "../utils/currency";

const ProductCard = ({product, quantity}) => {

    return(
        <div className="product-card--cart">
            <div className="product-card--thumbnail">
                <img src={product.imgUrl}></img>
            </div>
            <div>
                <p className="product-card--name">{product.name}</p>
                <div className="product-card--total">
                    <span>Qty: {quantity}</span>
                    <span>{convertToDollar(quantity * product.price)}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;