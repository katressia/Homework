// eslint-disable-next-line no-undef
const pizzaToppings = [
  "pepperoni",
  "sausage",
  "cheese",
  "chicken",
  "pineapple",
];

function greetCustomer() {
  console.log(
    `Welcome customers these are our choices of toppings ${pizzaToppings}`
  );
}

greetCustomer();
function getPizzaOrder(size, crust, ...pizzaToppings) {
  console.log(
    `One large ${size} 12 inch ${crust} pizza with ${pizzaToppings} coming up`
  );
  return [size, crust, pizzaToppings];
}

let order = getPizzaOrder("large", "pan", pizzaToppings[0], pizzaToppings[1]);
console.log(order);

function preparePizza(order) {
  const pizza = {
    size: order[0],
    crust: order[1],
    toppings: order[2],
  };
  console.log(
    `Cooking a  ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings}`
  );

  return pizza;
}
let pizza = preparePizza(order);

function servePizza(pizza) {
  let newOrder = `Come get your ${pizza.size} ${pizza.crust} pizza with ${pizza.toppings}`;
  console.log(newOrder);
  return pizza;
}
servePizza(pizza);
