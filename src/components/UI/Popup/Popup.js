import classes from './Popup.module.css';
import OverLay from './OverLay';

const Popup = () => {
    return(
        <OverLay>
            <div id={classes["popup"]}>

            </div>
        </OverLay>
    )
}

export default Popup;