import React from "react";

const CartContext = React.createContext({
  item: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeITem: (item) => {},
});
export default CartContext;
