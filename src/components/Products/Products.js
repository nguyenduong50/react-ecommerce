import { useEffect, useState } from 'react';

import classes from './Products.module.css';
import {urlProduct} from '../../config/ProductConfig';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    const productsFetch = async () => {
        const response = await fetch(urlProduct);
        const data = await response.json();
    
        setProducts(data);
    }
    
    useEffect(() => {
        productsFetch();
    }, []);

    return(
        <section id={classes['top-products']} className={`container`}>
            <h5>MADE THE HARD WAY</h5>
            <h3>TOP TRENDING PRODUCTS</h3>
            <div className={`${classes["list-product"]} row d-flex justify-content-between`}>
                {products.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
        </section>
    )
}

export default Products;