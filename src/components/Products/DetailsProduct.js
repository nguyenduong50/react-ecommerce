import classes from './DatailsProduct.module.css';

const DetailsProduct = ({product}) => {
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
                    <p className="fst-italic text-secondary mt-3">{product.dataProduct.price}</p>
                    <p className="fst-italic mt-3">{product.dataProduct.short_desc}</p>
                    <div>
                        <span className="fw-bold fst-italic">CATEGORY: </span>
                        <span className="fst-italic">{product.dataProduct.category}</span>
                    </div>
                    <div className="input-group mt-3 mb-3">
                        <span className="col-5">
                            <input type="number" className="form-control rounded-0" placeholder="QUANITY" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        </span>
                        <span className="input-group-text btn btn-dark rounded-0" id="basic-addon2">Add to cart</span>
                    </div>
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
        </div>
    )
}

export default DetailsProduct;