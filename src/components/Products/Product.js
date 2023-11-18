import classes from './Product.module.css';

const Product = ({product}) => {
    return(
        <div className={`${classes.product} col-md-3`}>
            <img src={product.img1}/>
            <h6>{product.name}</h6>
            <p>{product.price}</p>
        </div>
    )
}

export default Product;