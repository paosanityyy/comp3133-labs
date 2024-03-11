import { Customer } from "./customer";

let customer = new Customer('John', 'Smith', 30);
customer.greeter();
customer.getAge(); // This line will cause an error because the getAge method is not defined in the Customer class.
