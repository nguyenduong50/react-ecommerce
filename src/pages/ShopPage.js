import { Fragment } from "react";
import Banner from "../components/Banner/Banner";
import ProductList from "../components/Products/ProductList";
import { json, useLoaderData } from "react-router-dom";

const ShopPage = () => {
    const data = useLoaderData();

    return (
        <Fragment>
            <Banner page="SHOP" pageMap="SHOP"/>
            <ProductList data={data} />
        </Fragment>
    );
}

export default ShopPage;

export async function loader(){
    const response = await fetch('https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74');
    
    if(!response.ok){
        throw json(
            {message: 'Could not fetch products'},
            {status: 500}
        )
    }
    else{
        const data = await response.json();
        return data;
    }
}