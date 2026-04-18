/**
 * Day 01 - JavaScript Fundamentals
 *
 * Topics Covered:
 * - Variables & Functions
 * - Arrays & Basic Methods
 * - filter → conditional selection
 * - map → transformation
 * - Basic problem solving
 *
 * Practice Implementations:
 * - Basic math function
 * - Even/Odd filtering
 * - Max value finder
 * - Word counter
 * - Greeting generator
 * - Conditional filtering
 * - User filtering (age, active)
 * - Order filtering (business logic)
 * - Product filtering (real-world scenario)
 */

// ==============================
// BASIC FUNCTION
// Concepts: arrow function, parameters
// ==============================

const addNumbers = (a, b) => a + b;
console.log("Addition:", addNumbers(7, 7));

// ==============================
// EVEN & ODD NUMBERS
// Concepts: filter
// ==============================

const numberList = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numberList.filter((num) => num % 2 === 0);
const oddNumbers = numberList.filter((num) => num % 2 !== 0);

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

// ==============================
// MAX NUMBER
// Concepts: Math.max + spread operator
// ==============================

const numberArray = [1, 2, 3, 4, 5, 6, 7];

const getMaxNumber = (numbers) => Math.max(...numbers);

console.log("Max Number:", getMaxNumber(numberArray));

// ==============================
// WORD COUNT
// Concepts: string methods
// ==============================

const countWords = (text) => text.trim().split(" ").length;

console.log("Word Count:", countWords("Hello bro how are you"));

// ==============================
// GREETING FUNCTION
// Concepts: template literals
// ==============================

const generateGreeting = (name) => `Hello, Mr. ${name}`;

console.log(generateGreeting("Hari"));

// ==============================
// FILTER NUMBERS (CONDITIONAL)
// Concepts: filter (multiple conditions)
// ==============================

const filteredNumbersList = [10, 15, 20, 25, 30];

const getFilteredEvenNumbers = (numbers) =>
  numbers.filter((num) => num > 15 && num % 2 === 0);

const filteredEvenNumbers = getFilteredEvenNumbers(filteredNumbersList);

console.log("Filtered Even Numbers:", filteredEvenNumbers);

// ==============================
// USER FILTERING (AGE)
// Concepts: filter + map
// ==============================

const userAgeData = [
  { name: "Hari", age: 22 },
  { name: "Ram", age: 17 },
  { name: "John", age: 25 },
];

const getAdultUserNames = (users) =>
  users.filter(({ age }) => age > 18).map(({ name }) => name);

const adultUserNames = getAdultUserNames(userAgeData);

console.log("Adult Users:", adultUserNames);

// ==============================
// ACTIVE ADULT USERS
// Concepts: multiple condition filtering
// ==============================

const userStatusData = [
  { name: "Hari", age: 22, active: true },
  { name: "Ram", age: 17, active: true },
  { name: "John", age: 25, active: false },
];

const getActiveAdultUserNames = (users) =>
  users.filter(({ age, active }) => age > 18 && active).map(({ name }) => name);

const activeAdultUserNames = getActiveAdultUserNames(userStatusData);

console.log("Active Adult Users:", activeAdultUserNames);

// ==============================
// HIGH VALUE COMPLETED ORDERS
// Concepts: business logic filtering
// ==============================

const orderData = [
  { id: 1, user: "Hari", total: 500, status: "completed" },
  { id: 2, user: "Ram", total: 200, status: "pending" },
  { id: 3, user: "John", total: 800, status: "completed" },
  { id: 4, user: "Alex", total: 100, status: "completed" },
];

const getHighValueCompletedOrderUsers = (orders) =>
  orders
    .filter(({ total, status }) => total >= 500 && status === "completed")
    .map(({ user }) => user);

const highValueCompletedUsers = getHighValueCompletedOrderUsers(orderData);

console.log("High Value Completed Users:", highValueCompletedUsers);

// ==============================
// PREMIUM AVAILABLE PRODUCTS
// Concepts: real-world filtering
// ==============================

const productData = [
  { name: "Laptop", price: 50000, inStock: true },
  { name: "Mouse", price: 500, inStock: true },
  { name: "Keyboard", price: 1500, inStock: false },
  { name: "Monitor", price: 7000, inStock: true },
];

const getAvailablePremiumProductNames = (products) =>
  products
    .filter(({ price, inStock }) => price > 1000 && inStock)
    .map(({ name }) => name);

const availablePremiumProducts = getAvailablePremiumProductNames(productData);

console.log("Available Premium Products:", availablePremiumProducts);
