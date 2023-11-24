import { Fragment, Suspense } from "react";
import DetailsProduct from "../components/Products/DetailsProduct";
import { Await, defer, useLoaderData, json } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import ProductRelatedList from '../components/Products/ProductRelatedList';

const DetailsPage = () => {
    const {product, productRelated} = useLoaderData();

    return (
        <Fragment>
            <Banner page="PRODUCT" pageMap="PRODUCT"/>

            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading ...</p>}>
                <Await resolve={product}>
                    {(productDetail => <DetailsProduct product={productDetail}/>)}
                </Await>
            </Suspense>

            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading ...</p>}>
                <Await resolve={productRelated}>
                    {(productRelated => <ProductRelatedList productRelated={productRelated}/>)}
                </Await>
            </Suspense>
        </Fragment>
    );
}

export default DetailsPage;

async function loadProduct(id){
    const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
    
    if(!response.ok){
        throw json(
            {message: 'Could not fetch products'},
            {status: 500}
        )
    }
    else{
        const data = await response.json();

        let dataProduct = {};
        let productDesc = [];

        for(let key in data){
            if(key === id){
                dataProduct.id = key;
                dataProduct.name = data[key].name;
                dataProduct.img1 = data[key].img1;
                dataProduct.img2 = data[key].img2;
                dataProduct.img3 = data[key].img3;
                dataProduct.img4 = data[key].img4;
                dataProduct.price = parseFloat(data[key].price);
                dataProduct.short_desc = data[key].short_desc;               
                dataProduct.category = data[key].category;
                productDesc = data[key].long_desc.split("\n");
            }
        }

        return {dataProduct, productDesc};
    }
}

async function loadProductRelated(id){
    const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
    
    if(!response.ok){
        throw json(
            {message: 'Could not fetch products'},
            {status: 500}
        )
    }
    else{
        const data = await response.json();

        const productsRelated = [];
        let productRelated = {};

        for(let key in data){
            if(key === id){
                productRelated.id = key;
                productRelated.category = data[key].category;
                productRelated.name = data[key].name;
                productRelated.price = data[key].price;
            }
        }

        for(let key in data){
            if(key !== id && data[key].category === productRelated.category){
                productsRelated.push({
                    id: key,
                    category: data[key].category,
                    name: data[key].name,
                    price: parseFloat(data[key].price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'}),
                    img1: data[key].img1
                })
            }
        }

        return productsRelated;
    }
}

export async function loader({params}){
    const idProduct = params.productID;

    return defer({
        product: await loadProduct(idProduct),
        productRelated: loadProductRelated(idProduct)
    })
}