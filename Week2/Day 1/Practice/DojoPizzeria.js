function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza;
}
var pizza1=pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2=pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
var pizza3=pizzaOven("deep dish", "traditional", ["mozzarella", "feta"],["pepperoni", "olives", "onions"]);
var pizza4=pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["lot of pepperoni", "onions"]);
function randomPizza(){
    var randm=Math.random();
    console.log(eval("pizza"+Math.ceil(randm*3+1)))
}
randomPizza();
