import React from "react";
import Card from "./Card";
import MealRender from "./MealRender";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Farmhouse Pizza",
    description: "Cheeze burst and veggies",
    price: 249,
  },
  {
    id: "m2",
    name: "Cappuccino",
    description: "A german specialty!",
    price: 199,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Crispy Fried Burger",
    price: 149,
  },
  {
    id: "m4",
    name: "Behrouz Biryani",
    description: "Hyderabadi Style",
    price: 299,
  },
];

const List = () => {
  return (
    <section>
      <Card>
        {DUMMY_MEALS.map((meals) => {
          return <MealRender key={meals.id} id={meals.id} meal={meals} />;
        })}
      </Card>
    </section>
  );
};

export default List;
