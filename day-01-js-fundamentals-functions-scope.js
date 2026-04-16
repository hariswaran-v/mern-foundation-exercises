const add = (a, b) => a + b;
console.log(add(7, 7));

const numbers1 = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers1.filter((num) => num % 2 === 0);
const oddNumbers = numbers1.filter((num) => num % 2 !== 0);

console.log(`Even Numbers: ${evenNumbers}`);
console.log(`Odd Numbers: ${oddNumbers}`);

const arr = [1, 2, 3, 4, 5, 6, 7];

const getMaxNumber = (arr) => Math.max(...arr);
console.log(getMaxNumber(arr));

const countWords = (str) => str.trim().split(" ").length;
console.log(countWords("Hello bro how are you"));

const getGreeting = (name) => `Hello, Mr. ${name}`;
console.log(getGreeting("Hari"));

const numbers2 = [10, 15, 20, 25, 30];
const result = numbers2.filter((num) => num > 15 && num % 2 === 0);

console.log(result);

users = [
  { name: "Hari", age: 22 },
  { name: "Ram", age: 17 },
  { name: "John", age: 25 },
];
const adults = users.filter(({ age }) => age > 18).map(({ name }) => name);
console.log(adults);

users = [
  { name: "Hari", age: 22, active: true },
  { name: "Ram", age: 17, active: true },
  { name: "John", age: 25, active: false },
];

const getActiveAdultUserNames = (users) =>
  users
    .filter((user) => user.age > 18 && user.active === true)
    .map((user) => user.name);

const activeUsers = getActiveAdultUserNames(users);

const orders = [
  { id: 1, user: "Hari", total: 500, status: "completed" },
  { id: 2, user: "Ram", total: 200, status: "pending" },
  { id: 3, user: "John", total: 800, status: "completed" },
  { id: 4, user: "Alex", total: 100, status: "completed" },
];
const getHighValueCompletedOrderUsers = (orders) =>
  orders
    .filter(({ total, status }) => total >= 500 && status === "completed")
    .map(({ user }) => user);

const highValueCompletedUsers = getHighValueCompletedOrderUsers(orders);

console.log(highValueCompletedUsers);

const products = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Mouse", price: 500, inStock: true },
  { name: "Keyboard", price: 1500, inStock: false },
  { name: "Monitor", price: 7000, inStock: true },
];
const getAvailablePremiumProductNames = (products) =>
  products
    .filter((product) => product.price > 1000 && product.inStock)
    .map((product) => product.name);

const availablePremiumProducts = getAvailablePremiumProductNames(products);
console.log(availablePremiumProducts);
