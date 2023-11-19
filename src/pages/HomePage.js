import { Fragment } from "react";
import Banner from '../components/Banner/Banner';
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import OtherInfo from "../components/OtherInfo/OtherInfo";

const HomePage = () => {
    return (
        <Fragment>
            <Banner />
            <Categories />
            <Products />
            <OtherInfo />
        </Fragment>
    );
}

export default HomePage;