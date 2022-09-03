
const Product = ({product}) => {

    return (
        <div className="product-card--result">
            <img src={product.padItems.standard.imageUrl}/>
            <p>{product.name}</p>
        </div>
    )
}

export default Product;
