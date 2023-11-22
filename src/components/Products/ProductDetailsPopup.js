import {  useDispatch } from 'react-redux';
import {productPopupActions} from '../../store';
import classes from './ProductDetailsPopup.module.css';

const ProductDetailsPopup = ({product}) => {
    const dispatch = useDispatch();

    const hidePopupHandler = () => {
        dispatch(productPopupActions.hidePopup());
    }

    return(
        <div className={classes["product-details-popup"]}>
            <div className="row mx-0">
                <div className="col-md-6 py-3">
                    <img src={product.img1} />
                </div>
                <div className="col-md-6 py-5 ps-5 pe-5">
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                    <p>{product.short_desc}</p>
                    <button className="btn btn-dark">
                        <i className="fa-solid fa-cart-shopping me-2 d-none d-lg-inline"></i>
                        View Details
                    </button>
                </div>
            </div>
            <button className={classes["btn-hide-popup"]} type="button" onClick={() => hidePopupHandler()}>x</button>
        </div>
    );
}

export default ProductDetailsPopup;