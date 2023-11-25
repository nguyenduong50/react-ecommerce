import { Form, redirect, useRouteLoaderData } from 'react-router-dom';
import classes from './DatailsProduct.module.css';
import { useRef, useState } from 'react';
import {cartActions} from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '../UI/Popup/Popup';

const DetailsProduct = ({product}) => {
    const user = useRouteLoaderData('root');
    const dispatch = useDispatch();
    // const amountProduct = useRef();
    const [amountProduct, setAmountProduct] = useState(1);
    
    const [isPopup, setIsPopup] = useState(false);

    const changeAmount = (amount) => {
        if(amountProduct <= 1){
            amount = 1;
        }
        setAmountProduct(prevAmount => prevAmount + amount);
    }

    const popupHandler = () => {
        setIsPopup(!isPopup);
    }

    const addCartHandler = (event) => {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem('currentUserAssignment3')) ?? "guest";

        if(user.email !== currentUser.email){
            alert("Please, Reload page!");
            return redirect("/");
        }

        dispatch(cartActions.addCart({
            id: product.dataProduct.id,
            image: product.dataProduct.img1,
            name: product.dataProduct.name,
            price: parseFloat(product.dataProduct.price),
            amount: parseInt(amountProduct),
            totalPrice: parseFloat(product.dataProduct.price) * parseInt(amountProduct),
            user: user
        }));

        popupHandler();
    }

    return(
        <div className={`${classes["details-product"]} container mt-4`}>
            <div className="row">
                <div className="col-md-6 row">
                    <div className={`${classes["image-small"]} col-3 px-0`}>
                        <img src={product.dataProduct.img2} className="mb-2 ms-3"/>
                        <img src={product.dataProduct.img3} className="mb-2 ms-3" />
                        <img src={product.dataProduct.img4} className="mb-2 ms-3" />
                        <img src={product.dataProduct.img1} className="mb-2 ms-3" />
                    </div>
                    <div className={`${classes["image-large"]} col-9 px-0`}>
                        <img src={product.dataProduct.img1} />
                    </div>
                </div>
                <div className="col-md-6 mt-2 ms-4">
                    <h4 className="fst-italic">{product.dataProduct.name}</h4>
                    <p className="fst-italic text-secondary mt-3">{product.dataProduct.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                    <p className="fst-italic mt-3">{product.dataProduct.short_desc}</p>
                    <div>
                        <span className="fw-bold fst-italic">CATEGORY: </span>
                        <span className="fst-italic">{product.dataProduct.category}</span>
                    </div>
                    <form onSubmit={addCartHandler} className="input-group mt-3 mb-3">
                        <span className="col-5 positon-relative ">
                            {/* <input 
                                type="number" 
                                className="form-control rounded-0" 
                                placeholder="QUANITY" 
                                aria-label="Recipient's username" 
                                aria-describedby="basic-addon2" 
                                min="1"
                                max="5"
                                step="1"
                                defaultValue="1"
                                inputmode="numeric"
                                ref={amountProduct}
                            /> */}
                            <input 
                                type="text" 
                                className="form-control rounded-0"  
                                readOnly
                            />
                            <label className="fst-italic text-secondary position-absolute top-50 translate-middle-y ps-3 pe-5">QUANTITY</label>
                            <span className="position-absolute" id={classes["input-amount"]}>
                                <button className="border-0 bg-white mx-1" type="button" onClick={() => changeAmount(-1)}>
                                    <i className="fa-solid fa-caret-left"></i>
                                </button>
                                <label>{amountProduct}</label> 
                                <button className="border-0 bg-white mx-1" type="button" onClick={() => changeAmount(1)}>
                                    <i className="fa-solid fa-caret-right"></i>
                                </button>
                            </span>
                        </span>
                        <button className="input-group-text btn btn-dark rounded-0" id="basic-addon2" type="submit">Add to cart</button>
                    </form>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-7">
                    <button className="btn btn-dark px-3 py-2 rounded-0">DESCRIPTION</button>
                    <div className="row px-0 mt-4">
                        <h5>PRODUCT DESCRIPTION</h5>
                        {product.productDesc.map((desc, index) => (
                            <div key={index}>{desc}</div>
                        ))}
                    </div>
                </div>
            </div>
            {
                isPopup && 
                <Popup>
                    <div className="container py-5 px-5 position-relative">
                        <div className="row py-5 d-flex justify-content-center align-items-center text-center">
                            <i className="col-2 fa-solid fa-circle-check px-0 fs-1 text-success"></i>
                            <p className="col-10 fs-3 px-2 py-0 mb-0">Order Success</p>
                        </div>
                        <button className="btn btn-primary position-absolute bottom-0 end-0 me-2 mb-2" onClick={popupHandler}>Close</button>
                    </div>
                </Popup>
            }
        </div>
    )
}

export default DetailsProduct;