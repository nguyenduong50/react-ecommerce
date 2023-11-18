import { Fragment } from "react";
import Banner from '../components/Banner/Banner';
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";

const HomePage = () => {
    return (
        <Fragment>
            <Banner />
            <Categories />
            <Products />
        </Fragment>
    );
}

export default HomePage;