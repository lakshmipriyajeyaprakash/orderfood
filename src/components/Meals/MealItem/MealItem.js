import classes from "./MealItem.module.css"
import MealForm from "./MealForm";
import CartDataContext from "../../../store/CartDataContext";
import { useContext } from "react";
const MealItem = (props)=>{
    const price = props.price;

    const cartContext = useContext(CartDataContext);
    const addToCartHandler = (amount) => {
        cartContext.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price,
        });
      };
    return (
        <li key = {props.key} className={classes.meal}>
            <div>
                <h3>{props.id}</h3>
                <div className={classes.description}>{props.item}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealForm id={props.id} OnAddToCart={addToCartHandler}></MealForm>
            </div>
        </li>
    );
}
export default MealItem;