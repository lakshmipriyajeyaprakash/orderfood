import Modal from '../UI/Modal';
import CartDataContext from '../../store/CartDataContext';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Delivered from './Delivered';
import { useContext,useState } from 'react';

const Cart = (props) =>{
    const cartcontext = useContext(CartDataContext);
    const [Order,setOrder] = useState(false);
    const totalAmount = `$${cartcontext.totalAmount.toFixed(2)}`
    const itemCheck = cartcontext.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        cartcontext.removeitem(id);
    }
    const cartItemAddHandler = (item) =>{
        cartcontext.additem({...item, amount:1})
    }
    const orderHandler = () =>{
        cartcontext.clearall();
        setOrder(true);
    }
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartcontext.items.map((item) =>{
               return  <CartItem 
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}></CartItem>} 
            )}
        </ul>
    );
    return (
    <Modal onClose={props.onClose}>
      {!Order ? (
        <>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
              Close
            </button>
            {itemCheck && (
              <button className={classes.button} onClick={orderHandler}>
                Order
              </button>
            )}
          </div>
        </>
      ) : (
        <Delivered onClose={props.onClose} />
      )}
    </Modal>
    );

}
export default Cart;