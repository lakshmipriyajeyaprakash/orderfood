import React from "react";
const CartDataContext = React.createContext({
    items: [],
    totalAmount:0,
    additem: (item) => {},
    removeitem: (id) => {},
    clearAll: () => {},
});
export default CartDataContext;