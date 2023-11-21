import MealItem from "./MealItem/MealItem"
import classes from "./ReadyMeals.module.css"
const meals = [
    {
        "id": "1",
        "item": "HamBurger",
        "price": "$10.60",
    },
    {
        "id": "2",
        "item": "Pizza",
        "price": "$15.20",
    },
    {
        "id": "3",
        "item": "Sweet and Sour Soup",
        "price": "$5.30",
    }
];
const ReadyMeals = () =>{
    const mealList = meals.map(meal=> <MealItem 
        id = {meal.id}
        key = {meal.id}
        item = {meal.item}
        price = {meal.price}
        />)
    return(
        <section className={classes.meals}>
            <ul>{mealList}</ul>
        </section>
    );
}
export default ReadyMeals;