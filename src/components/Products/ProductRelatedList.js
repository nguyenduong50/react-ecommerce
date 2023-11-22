import { useNavigate } from "react-router-dom";
import classes from './ProductRelatedList.module.css';

const ProductRelatedList = ({productRelated}) => {
    const navigate = useNavigate();
    const detailsPageHandler = (id) => {
        navigate(`/details/${id}`);
        document.documentElement.scrollTop = 0;
    }

    return(
        <div className="container mt-4">
            <div className={`${classes["product-related"]} row`}>
                <h4 className="mt-3 mb-4 fst-italic">RELATED PRODUCTS</h4>
                {productRelated.map((product, index) => (
                    <div key={index} className="col-md-3">
                        <img className="" src={product.img1} onClick={() => detailsPageHandler(product.id)}/>
                        <h5 className="fst-italic text-center mt-2 fs-6">{product.name}</h5>
                        <p className="fst-italic text-secondary text-center mt-1 fs-6">{product.price}</p> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductRelatedList;