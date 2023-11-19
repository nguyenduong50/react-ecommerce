import classes from './Popup.module.css';
import OverLay from './OverLay';

const Popup = ({children}) => {
    return(
        <OverLay>
            <div id={classes["popup"]}>
                {children}
            </div>
        </OverLay>
    )
}

export default Popup;