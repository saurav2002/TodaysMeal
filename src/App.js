import React, { useState, useReducer } from "react";
import Header from "./component/layoff/Header";
import Meal from "./component/meal/Meal";
import Cart from "./component/cart/Cart";
import CartContext from "./component/context/cart-context";

const reducer = (state, action) => {
  if (action.type === "Add") {
    const updateAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const yesItem = state.items[existingItemIndex];

    let updated;
    if (yesItem) {
      const newitem = {
        ...yesItem,
        amount: yesItem.amount + action.item.amount,
      };

      updated = [...state.items];

      updated.map((data) => {
        if (data.id === yesItem.id) {
          data.amount = newitem.amount;
        }
        return data;
      });
    } else {
      updated = state.items.concat(action.item);
    }

    return {
      items: updated,
      totalAmount: updateAmount,
    };
  }
  if (action.type === "Rem") {
    if (state.totalAmount > 0) {
      const updateAmount = state.totalAmount - action.item.price;

      const updated = [...state.items];

      for (let item = 0; item < updated.length; item++) {
        if (updated[item].id === action.item.id) {
          if (updated[item].amount === 1) {
            updated.splice(item, 1);
          } else {
            updated[item].amount--;
          }
        }
      }

      return {
        items: updated,
        totalAmount: updateAmount,
      };
    }
    return {};
  }

  return {};
};

function App() {
  const [cardState, depatchcard] = useReducer(reducer, {
    items: [],
    totalAmount: 0,
  });
  const [overCart, setOverCart] = useState(false);

  const disableCart = () => {
    setOverCart(false);
  };
  const enableCart = () => {
    setOverCart(true);
  };

  const addItem = (item) => {
    depatchcard({ type: "Add", item: item });
  };
  const removeITem = (item) => {
    depatchcard({ type: "Rem", item: item });
  };

  return (
    <CartContext.Provider
      value={{
        item: cardState.items,
        totalAmount: cardState.totalAmount,
        addItem,
        removeITem,
      }}
    >
      {overCart && <Cart onCancel={disableCart} />}
      <Header onAdd={enableCart} />
      <Meal />
    </CartContext.Provider>
  );
}

export default App;
