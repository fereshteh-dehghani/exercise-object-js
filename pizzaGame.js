/*
Google is launching a network of autonomous pizza delivery drones and 
wants you to create a flexible rewards system (Pizza Points™) 
that can be tweaked in the future. The rules are simple: if a customer
 has made at least N orders of at least Y price, they get a FREE pizza!
Create a function that takes an object of customers, a minimum number of orders
 and a minimum order price. Return an array of customers that are eligible for a free pizza.
Example:
let customersObj = {
    "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
    "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
  }

  pizzaPoints(customersObj, 5, 20) ➞ ["Spider-Man"]

  pizzaPoints(customersObj, 3, 10) ➞ ["Batman", "Spider-Man"]

  pizzaPoints(customersObj, 5, 100) ➞ []
 */