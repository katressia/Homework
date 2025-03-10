// eslint-disable-next-line no-undef
const pizzaToppings = [pepperoni, sausage, cheese, chicken, pineapple];


function greetCustomer() {
  let greeting = "Welcome customers";
  for (let topping of "pizzaToppings") {
    greeting += `${topping}`
  }
  console.log(greeting);
}

function getPizzaOrder(size, crust, ...pizzaToppings) {
  console.log(
    `One large ${size} 12 inch ${crust} pizza with ${pizzaToppings} coming up`
  );
  return [size, crust, pizzaToppings];
}

function preparePizza() {
  const pizza = {
    size: size,
    crust: crust,
    toppings: toppings
    }
  console.log(
    `Cooking one large ${pizza.size}, ${pizza.crust}, ${pizza.toppings}`
      }

      function servePizza(pizza) {
        console.log(
          `Come get your ${size} ${crust}} pizza with ${toppings}`
        );
        return pizza;
      }


      greetCustomer(getPizzaOrder);
      getPizzaOrder(preparePizza);
      preparePizza(servePizza);
      