import classes from './Banner.module.css';

const Banner = ({page, pageMap}) => {
    return(
        <div className={`${classes.banner} container`}>
            <div className="row bg-body-secondary py-5">
                <div className="col-md-6 py-4 ps-5 d-flex align-items-center">
                    <h3 className="fst-italic ms-4 mb-0 fs-2">{page}</h3>
                </div>
                <div className="col-md-1 offset-md-4 py-4 ps-5 d-flex align-items-center">
                    <p className="fst-italic mb-0 fs-6 text-body-tertiary">{pageMap}</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;