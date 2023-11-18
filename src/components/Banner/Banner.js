import { useNavigate } from 'react-router-dom';
import classes from './Banner.module.css';

const Banner = () => {
    const navigate = useNavigate();
    const shopPageHandler = () => {
        navigate('/shop');
    }

    return(
        <section id={classes.banner} className="container">
            <div className="row">
                <div className={`${classes["banner-info"]} col-12`}>
                    <p className="text-uppercase">
                        New Inspiration 2020
                    </p>
                    <h2 className="text-uppercase">
                        20% off on new seasion
                    </h2>
                    <button className={classes["btn-browse"]} onClick={shopPageHandler}>Browse collections</button>
                </div>
            </div>
        </section>
    )
}

export default Banner;