import { useEffect, useState } from 'react';

import classes from './Products.module.css';
import {urlProduct} from '../../config/ProductConfig';
import Product from './Product';
import Popup from '../UI/Popup/Popup';

const Products = () => {
    const [products, setProducts] = useState([]);

    const productsFetch = async () => {
        const response = await fetch(urlProduct);
        const data = await response.json();
    
        let products_tempo = [];
        for(let key in data){
            products_tempo.push({
                id: key,
                name: data[key].name,
                img1: data[key].img1,
                price: parseFloat(data[key].price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}),
                short_desc: data[key].short_desc
            })
        }

        setProducts(products_tempo);
    }
    
    useEffect(() => {
        productsFetch();
    }, []);

    return(
        <section id={classes['top-products']} className={`container`}>
            <h5 className="row">MADE THE HARD WAY</h5>
            <h3 className="row">TOP TRENDING PRODUCTS</h3>
            <div className={`${classes["list-product"]} row d-flex justify-content-between`}>
                {products.map((product, index) => {
                    if(index <= 7){
                        return(
                            <Product key={index} product={product} />
                        )
                    }
                })}
            </div>
        </section>
    )
}

export default Products;