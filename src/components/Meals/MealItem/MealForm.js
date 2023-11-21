import {useState,useRef } from 'react';
import UserInput from '../../UI/UserInput';
import classes from '../MealItem/MealForm.module.css';
const MealForm = (props) =>{
    const inputref = useRef();
    const [amountIsvalid,setamountIsvalid] = useState(true);
    const submitHandler = (e) =>{
        e.preventDefault();
        const inputValue = inputref.current.value;
        const enteredAmountNumber = +inputValue;
        if(inputValue.trim().length === 0 || enteredAmountNumber<1 || enteredAmountNumber>10){
            setamountIsvalid(false);
            return;
        }
            props.OnAddToCart(enteredAmountNumber);
            inputref.current.value = enteredAmountNumber;
         }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <UserInput  
                ref={inputref}
                label="Amount"
                input={{
                    id:"amount_"+ props.id,
                    type:"number",
                    min:"1",
                    max:"10",
                    step:"1",
                    defaultValue:"0"
                }} />
                <button>+ Add</button>
                {
                    (!amountIsvalid && <p>Please enter valid amount</p>)
                }
        </form>
    )
}
export default MealForm;