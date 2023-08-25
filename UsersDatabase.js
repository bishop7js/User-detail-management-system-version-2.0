const fs = require("fs");

const DatabaseFile = "data.json";

// user add back-end and db
const addUser = (value) => {
  let users = loadUsers();

  const usersArrayLength = users.length;

  let userId;

  if (usersArrayLength > 0) {
    console.log("LLLLLLLLLLLLLLength", usersArrayLength);
    userId = users[usersArrayLength - 1].userId + 1;
  } else {
    userId = 1;
  }

  usersData = {
    userId: userId,
    name: value.name,
    address: value.address,
    contact_number: value.contact_number,
    visit_date: value.visit_date,
  };

  users.push(usersData);

  saveUser(users);
};

// user update back-end and db
const updateUser = (id) => {
  console.log("Update user", id);
};

// user delete back-end and db
const deleteUser = (id) => {
  console.log("Delete user", id);
};

// user read back-end and db
const readUser = (id) => {
  const usersList = loadUsers();

  const Selecteduser = usersList.find((user) => {
    return user.userId === id;
  });

  console.log(Selecteduser.name);
};

// user-list backend and db
const userList = () => {
  const usersList = loadUsers();

  console.log(usersList);
};

// Save user inside the file
const saveUser = (users) => {
  fs.writeFileSync(DatabaseFile, JSON.stringify(users));
};

//load data from file
const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync(DatabaseFile);
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addUser,
  updateUser,
  deleteUser,
  readUser,
  userList,
};
