/**
 * Day 02 - Array Methods Deep Dive
 *
 * Topics Covered:
 * - map → data transformation
 * - filter → conditional selection
 * - reduce → aggregation & grouping
 *
 * Real-world Implementations:
 * - Student Score Analyzer
 * - Revenue Calculation
 * - Active User Counting
 * - Role-based Grouping
 * - User Revenue Analytics
 * - Login Activity Tracking
 * - Order Status Summary
 * - Final E-commerce Analytics
 */

// ==============================
// STUDENT SCORE ANALYZER
// Concepts: filter + map, reduce (average, max)
// ==============================

const students = [
  { name: "Hari", score: 85 },
  { name: "Ram", score: 40 },
  { name: "John", score: 90 },
  { name: "Alex", score: 35 },
];

const getPassedStudentNames = (students) =>
  students.filter(({ score }) => score >= 50).map(({ name }) => name);

const passedStudentNames = getPassedStudentNames(students);
console.log("Passed Students:", passedStudentNames);

const calculateAverageScore = (students) =>
  students.reduce((total, { score }) => total + score, 0) / students.length;

const averageScore = calculateAverageScore(students);
console.log("Average Score:", averageScore);

const getTopScorerName = (students) =>
  students.reduce((top, student) => (student.score > top.score ? student : top))
    .name;

const topScorerName = getTopScorerName(students);
console.log("Top Scorer:", topScorerName);

// ==============================
// REVENUE CALCULATION
// Concepts: reduce (sum aggregation)
// ==============================

const revenueOrders = [
  { id: 1, amount: 500 },
  { id: 2, amount: 300 },
  { id: 3, amount: 200 },
];

const calculateTotalRevenue = (orders) =>
  orders.reduce((total, { amount }) => total + amount, 0);

const totalRevenue = calculateTotalRevenue(revenueOrders);
console.log("Total Revenue:", totalRevenue);

// ==============================
// ACTIVE USERS COUNT
// Concepts: reduce (conditional counting)
// ==============================

const userList = [
  { name: "Hari", active: true },
  { name: "Ram", active: false },
  { name: "John", active: true },
];

const countActiveUsers = (users) =>
  users.reduce((count, { active }) => (active ? count + 1 : count), 0);

const activeUserCount = countActiveUsers(userList);
console.log("Active Users Count:", activeUserCount);

// ==============================
// GROUP BY ROLE
// Concepts: reduce (grouping, frequency map)
// ==============================

const usersByRoleData = [
  { name: "Hari", role: "admin" },
  { name: "Ram", role: "user" },
  { name: "John", role: "admin" },
];

const getUserCountByRole = (users) =>
  users.reduce((acc, { role }) => {
    acc[role] = (acc[role] || 0) + 1;
    return acc;
  }, {});

const userCountByRole = getUserCountByRole(usersByRoleData);
console.log("User Count By Role:", userCountByRole);

// ==============================
// USER REVENUE ANALYTICS
// Concepts: filter + reduce (group + sum)
// ==============================

const userOrderData = [
  { user: "Hari", amount: 500, status: "completed" },
  { user: "Ram", amount: 200, status: "pending" },
  { user: "Hari", amount: 300, status: "completed" },
  { user: "John", amount: 700, status: "completed" },
];

const getCompletedUserRevenue = (orders) =>
  orders
    .filter(({ status }) => status === "completed")
    .reduce((acc, { user, amount }) => {
      acc[user] = (acc[user] || 0) + amount;
      return acc;
    }, {});

const completedUserRevenue = getCompletedUserRevenue(userOrderData);
console.log("Completed User Revenue:", completedUserRevenue);

// ==============================
// USER LOGIN ACTIVITY
// Concepts: filter + reduce (aggregation)
// ==============================

const activityLogs = [
  { user: "Hari", type: "login", duration: 30 },
  { user: "Ram", type: "login", duration: 10 },
  { user: "Hari", type: "logout", duration: 5 },
  { user: "John", type: "login", duration: 50 },
  { user: "Hari", type: "login", duration: 20 },
];

const getUserLoginDurations = (activities) =>
  activities
    .filter(({ type }) => type === "login")
    .reduce((acc, { user, duration }) => {
      acc[user] = (acc[user] || 0) + duration;
      return acc;
    }, {});

const userLoginDurations = getUserLoginDurations(activityLogs);
console.log("User Login Durations:", userLoginDurations);

// ==============================
// ORDER STATUS SUMMARY
// Concepts: nested grouping (user → status)
// ==============================

const orderStatusData = [
  { user: "Hari", status: "completed" },
  { user: "Hari", status: "pending" },
  { user: "Hari", status: "completed" },
  { user: "Ram", status: "pending" },
  { user: "Ram", status: "completed" },
];

const getUserOrderStatusSummary = (orders) =>
  orders.reduce((acc, { user, status }) => {
    acc[user] = acc[user] || {};
    acc[user][status] = (acc[user][status] || 0) + 1;
    return acc;
  }, {});

const userOrderStatusSummary = getUserOrderStatusSummary(orderStatusData);
console.log("User Order Status Summary:", userOrderStatusSummary);

// ==============================
// FINAL E-COMMERCE ANALYTICS
// Concepts: filter + reduce + multi-field aggregation
// ==============================

const analyticsOrders = [
  { user: "Hari", status: "completed", amount: 500 },
  { user: "Hari", status: "pending", amount: 200 },
  { user: "Hari", status: "completed", amount: 300 },
  { user: "Ram", status: "completed", amount: 400 },
  { user: "Ram", status: "pending", amount: 100 },
  { user: "John", status: "completed", amount: 700 },
];
const getUserAnalytics = (orders) =>
  orders
    .filter((order) => order.status === "completed")
    .reduce((acc, { user, amount }) => {
      // Step 1: initialize user bucket if not exists
      acc[user] = acc[user] || {
        totalRevenue: 0,
        completedCount: 0,
      };

      // Step 2: update values
      acc[user].totalRevenue += amount;
      acc[user].completedCount += 1;

      return acc;
    }, {});

const result = getUserAnalytics(orders);

console.log(result);
