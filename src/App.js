import React,{useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartDataContextProvider from './store/CartDataContextProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [CartShown,setCartShown] = useState(false);
  const showCartHandler = () =>{
    setCartShown(true);
  }
  const hideCartHandler = () =>{
    setCartShown(false);
  }
  return (
    <div className="App">
      <CartDataContextProvider>
       {CartShown && <Cart onclose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
            <Meals></Meals>
      </CartDataContextProvider>
    </div>
  );
}

export default App;
