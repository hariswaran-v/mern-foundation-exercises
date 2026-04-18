// ==============================
// Day 04 - Destructuring + Spread/Rest
// User Profile Manipulation
// ==============================

// ----------------------
// 1. Base Data
// ----------------------
const user = {
  id: 1,
  name: "Hari",
  email: "hari@email.com",

  address: {
    city: "Salem",
    pincode: 636001,
  },

  skills: ["JavaScript", "React"],

  projects: [
    { title: "Portfolio", status: "completed" },
    { title: "Chat App", status: "in-progress" },
  ],
};

// ----------------------
// 2. Destructuring Examples
// ----------------------

// Basic destructuring
const { name, email } = user;
console.log("Name & Email:", name, email);

// Rename
const { name: userName } = user;
console.log("Renamed Name:", userName);

// Remove field using rest
const { email: removedEmail, ...userWithoutEmail } = user;
console.log("User without email:", userWithoutEmail);

// ----------------------
// 3. Spread Operations
// ----------------------

// Update + add field
const updatedUser = {
  ...user,
  name: "Hari Dev",
  role: "Developer",
};
console.log("Updated User:", updatedUser);

// ----------------------
// 4. Function + Destructuring
// ----------------------

const getProjects = ({ projects }) => projects;

const userProjects = getProjects(user);
console.log("Projects:", userProjects);

// ----------------------
// 5. Skills Operations
// ----------------------

const addSkill = (user, newSkill) => ({
  ...user,
  skills: [...user.skills, newSkill],
});

const updatedSkillsUser = addSkill(user, "MongoDB");
console.log("Updated Skills:", updatedSkillsUser.skills);

// ----------------------
// 6. Nested Update (Important)
// ----------------------

const updatePincode = (user, newPincode) => ({
  ...user,
  address: {
    ...user.address,
    pincode: newPincode,
  },
});

const updatedPincodeUser = updatePincode(user, 600001);
console.log("Updated Pincode:", updatedPincodeUser.address);

// ----------------------
// 7. Merge Pattern (Backend Style)
// ----------------------

const mergeUserData = (user, updates) => ({
  ...user,
  ...updates,
});

const mergedUser = mergeUserData(user, {
  role: "Data Engineer",
});

console.log("Merged User:", mergedUser);
