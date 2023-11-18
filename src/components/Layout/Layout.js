import { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import classes from './Layout.module.css';

const Layout = () => {
    return(
        <Fragment>
            <Header/>
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    )
}

export default Layout;