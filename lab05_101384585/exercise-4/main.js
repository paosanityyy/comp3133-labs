"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var customer = new customer_1.Customer('John', 'Smith', 30);
customer.greeter();
customer.getAge(); // This line will cause an error because the getAge method is not defined in the Customer class.
