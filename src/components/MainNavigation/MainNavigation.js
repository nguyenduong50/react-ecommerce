import { Link, NavLink, useNavigate } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return(
        <div className={`${classes['main-navigation']} row pt-2`}>
            <nav className={`${classes['menu']} col-md-4`}>
                <ul className="row column-gap-4">
                    <li className="col-md-1">
                        <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined} end>
                            Home
                        </NavLink>
                    </li>
                    <li className="col-md-1">
                        <NavLink to="/shop" className={({isActive}) => isActive ? classes.active : undefined}>
                            Shop
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={`${classes['brand']} col-md-4 d-none d-md-block`}>
                <h1 className="text-center">Boutique</h1>
            </div>
            <div className="col-md-4">
                <ul className="row">
                    <li className="col-md-3 offset-md-5 ps-md-4">
                        <i className="fa-solid fa-cart-shopping me-2 d-none d-lg-inline"></i>
                        <NavLink to="/cart" className={({isActive}) => isActive ? classes.active : undefined}>
                            Cart
                        </NavLink>
                    </li>
                    <li className="col-md-3">
                        <i className="fa-solid fa-user me-2 d-none d-lg-inline"></i>
                        <NavLink to="/login" className={({isActive}) => isActive ? classes.active : undefined}>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainNavigation;