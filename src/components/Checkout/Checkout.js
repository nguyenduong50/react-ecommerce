import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";

const Checkout = () => {
    const cart = useSelector(state => state.cart.items);
    const user = useRouteLoaderData('root');

    const [totalBill, setTotalBill] = useState(0);

    useEffect(() => {
        let bill_tempo = 0;

        for(let index in cart){
            if(user.email === cart[index].user.email){
                bill_tempo += cart[index].totalPrice;              
            }      
        }

        setTotalBill(bill_tempo);
    }, [])

    return(
        <div className="container">
            <h5 className="row mt-4 px-0 fst-italic">BULDING DETAILS</h5>
            <div className="row">
                <form className="col-lg-8 ps-0 text-uppercase fst-italic">
                    <label className="form-lable">Full Name:</label>
                    <input type="text" placeholder="Enter Your Full Name Here!"  className="form-control rounded-0 my-2"/>
                    <label className="form-lable">Email:</label>
                    <input type="text" placeholder="Enter Your Email Here!"  className="form-control rounded-0 my-2"/>
                    <label className="form-lable">Phone Number:</label>
                    <input type="text" placeholder="Enter Your Phone Number Here!"  className="form-control rounded-0 my-2"/>
                    <label className="form-lable">Address:</label>
                    <input type="text" placeholder="Enter Your Address Here!"  className="form-control rounded-0 my-2"/>
                    <button className="btn btn-dark rounded-0 mt-1 fst-italic">Place order</button>
                </form>
                <div className="col-lg-4 px-5 py-4 bg-body-secondary fst-italic" >
                    <p className=" fs-4">Your order</p>
                    {
                        cart.map((product, index) => (
                            user.email === product.user.email &&
                            <div className="row border-bottom border-dark-subtle mt-1 px-3 pb-2">
                                <span className="col-md-6 px-0 fw-bold" style={{fontSize: "14px"}}>
                                    {product.name}
                                </span>
                                <span className="col-md-6 px-0 text-end" style={{fontSize: "14px"}}>
                                    {product.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} x {product.amount}
                                </span>
                            </div>
                        ))
                    }
                    <div className="row mt-2 px-3">
                        <span className="col-md-6 px-0 fw-bold" style={{fontSize: "15px"}}>
                            TOTAL
                        </span>
                        <span className="col-md-6 px-0 fw-bold text-end" style={{fontSize: "16px"}}>
                            {totalBill.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;