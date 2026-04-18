// const numbers = [1, 2, 3];

// const newNumbers = [...numbers, 4];
// console.log(newNumbers);

// 🔹 Step 1: User Data (Realistic)
// const user = {
//   id: 101,
//   name: "Hari",
//   projects: [
//     { title: "E-commerce", status: "completed" },
//     { title: "Chat App", status: "in-progress" },
//     { title: "Portfolio", status: "in-progress" },
//   ],
// };
// const updateProjectCompleted = (user, title, status) => ({
//   ...user,
//   projects: user.projects.map((project) =>
//     project.title === title ? { ...project, status } : project,
//   ),
// });
// const updatedUser = updateProjectCompleted(user, "Chat App", "completed");
// console.log(updatedUser);

// const user = { name: "Hari", age: 22 };

// const updateAge = (user, newAge) => ({
//   ...user,
//   age: newAge,
// });
// const udpatedUser = updateAge(user, 26);
// console.log(udpatedUser);

// const user = {
//   name: "Hari",
//   skills: ["JS", "React"],
// };
// const updateUserSkills = (user, newSkill) => ({
//   ...user,
//   skills: [...user.skills, newSkill],
// });
// const updatedUser = updateUserSkills(user, "Node.js");
// console.log(updatedUser);

export const user = {
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
// const updateUserName = (user, newName) => ({
//   ...user,
//   name: newName,
// });
// const updatedUserName = updateUserName(user, "Dheena");
// console.log(newName.name);

// const udpateCityName = (user, newCity) => ({
//   ...user,
//   address: { ...user.address, city: newCity },
// });
// const updatedCityName = udpateCityName(user, "Trichy");
// console.log(updatedCityName.address.city);

// const addSkill = (user, newSkill) => ({
//   ...user,
//   skills: [...user.skills, newSkill],
// });
// const updatedSkills = addSkill(user, "Typescript");
// console.log(updatedSkills.skills);

const updateProjectTitle = (user, oldTitle, newTitle) => {
  const exists = user.projects.some((p) => p.title === oldTitle);
  if (!exists) {
    console.log("Project not found");
    return user;
  }
  return {
    ...user,
    projects: user.projects.map((project) =>
      project.title === oldTitle ? { ...project, title: newTitle } : project,
    ),
  };
};
const updatedProjectTitle = updateProjectTitle(
  user,
  "Cha App",
  "Social Media App",
);
console.log(updatedProjectTitle.projects);
