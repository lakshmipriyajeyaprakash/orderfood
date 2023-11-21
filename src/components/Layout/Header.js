import { Fragment } from "react";
import classes from "./Header.module.css";
import headerMainImage from "../../assets/photo1.png";
import HeaderCartButton from './HeaderCartButton.js'
const Header = (props) => {
    return (
    <Fragment>
        <div className={classes.header}>
            <h1>Food Order App</h1>
            <HeaderCartButton OnClick={props.onShowCart}/>
        </div>
        <div className={classes["main-image"]}>
            <img src={headerMainImage} alt="Great Foods for Hunger minds!" /> z
        </div>
    </Fragment>
    );
}
export default Header;