import { Fragment } from "react";
import BannerHome from '../components/Banner/BannerHome';
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import OtherInfo from "../components/OtherInfo/OtherInfo";
import { json } from "react-router-dom";

const HomePage = () => {
    return (
        <Fragment>
            <BannerHome />
            <Categories />
            <Products />
            <OtherInfo />
        </Fragment>
    );
}

export default HomePage;

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