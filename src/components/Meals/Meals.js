import {Fragment} from 'react'
import ReadyMeals from "./ReadyMeals"
import MealDescription from "../Meals/MealDescription"
const Meals = () =>{
    return (
        <Fragment>
            <MealDescription></MealDescription>
            <ReadyMeals></ReadyMeals>
        </Fragment>
);
}
export default Meals;