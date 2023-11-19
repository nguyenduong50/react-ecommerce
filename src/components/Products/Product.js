import Popup from '../UI/Popup/Popup';
import classes from './Product.module.css';
import { useState } from 'react';

const Product = ({product}) => {
    const [showPopup, setShowPopup] = useState(true);

    const popupHandler = (name) => {
        alert(name);
    }

    return(
        <div className={`${classes.product} col-md-3`}>
            <img className="" src={product.img1} onClick={() => popupHandler(product.name)}/>
            <h6 className="text-center text-body-secondary fst-italic px-1 pt-3">{product.name}</h6>
            <p className="text-center text-body-tertiary fst-italic">{product.price}</p>
            <Popup />
        </div>
    )
}

export default Product;