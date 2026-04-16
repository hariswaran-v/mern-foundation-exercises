const students = [
  { name: "Hari", score: 85 },
  { name: "Ram", score: 40 },
  { name: "John", score: 90 },
  { name: "Alex", score: 35 },
];

const getPassedStudentNames = (students) =>
  students.filter(({ score }) => score >= 50).map(({ name }) => name);

const passedStudents = getPassedStudentNames(students);
console.log(passedStudents);

const getAverageScore = (students) =>
  students.reduce((total, { score }) => score + total, 0) / students.length;
const averageScore = getAverageScore(students);
console.log(averageScore);

const getTopScorer = (students) =>
  students.reduce((top, student) => (student.score > top.score ? student : top))
    .name;
const topScorer = getTopScorer(students);
console.log(topScorer);

const orders = [
  { id: 1, amount: 500 },
  { id: 2, amount: 300 },
  { id: 3, amount: 200 },
];
const getTotalRevenue = (orders) =>
  orders.reduce((total, { amount }) => total + amount, 0);
const totalRevenue = getTotalRevenue(orders);
console.log(`Total Revenue is: ${totalRevenue}`);

const users = [
  { name: "Hari", active: true },
  { name: "Ram", active: false },
  { name: "John", active: true },
];
const countActiveUsers = (users) =>
  users.reduce((count, { active }) => (active ? count + 1 : count), 0);
const activeUsers = countActiveUsers(users);
console.log(activeUsers);

const users = [
  { name: "Hari", role: "admin" },
  { name: "Ram", role: "user" },
  { name: "John", role: "admin" },
];
const getGroupedByRole = (users) =>
  users.reduce((acc, { role }) => {
    acc[role] = (acc[role] || 0) + 1;
    return acc;
  }, {});
const groupedByRole = getGroupedByRole(users);
console.log(groupedByRole);

const orders = [
  { user: "Hari", amount: 500, status: "completed" },
  { user: "Ram", amount: 200, status: "pending" },
  { user: "Hari", amount: 300, status: "completed" },
  { user: "John", amount: 700, status: "completed" },
];
const getUserRevenue = (orders) =>
  orders
    .filter(({ status }) => status === "completed")
    .reduce((acc, { user, amount }) => {
      acc[user] = (acc[user] || 0) + amount;
      return acc;
    }, {});

const userRevenue = getUserRevenue(orders);
console.log(userRevenue);

const activities = [
  { user: "Hari", type: "login", duration: 30 },
  { user: "Ram", type: "login", duration: 10 },
  { user: "Hari", type: "logout", duration: 5 },
  { user: "John", type: "login", duration: 50 },
  { user: "Hari", type: "login", duration: 20 },
];
const getUserActivities = (activities) =>
  activities
    .filter(({ type }) => type === "login")
    .reduce((acc, { user, duration }) => {
      acc[user] = (acc[user] || 0) + duration;
      return acc;
    }, {});

const userActivities = getUserActivities(activities);
console.log(userActivities);

const orders = [
  { user: "Hari", status: "completed" },
  { user: "Hari", status: "pending" },
  { user: "Hari", status: "completed" },
  { user: "Ram", status: "pending" },
  { user: "Ram", status: "completed" },
];
const getOrdersSummary = (orders) =>
  orders.reduce((acc, { user, status }) => {
    ((acc[user] = acc[user] || {}),
      (acc[user][status] = (acc[user][status] || 0) + 1));
    return acc;
  }, {});
const ordersSummary = getOrdersSummary(orders);
console.log(ordersSummary);

const orders = [
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
