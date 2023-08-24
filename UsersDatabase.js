const fs = require('fs');

const DatabaseFile = 'data.json';

const addUser = (value) => {
  let users = loadUsers();

  usersData = {
    name: value.name,
    address: value.address,
    contact_number: value.contact_number,
    visit_date: value.visit_date
  }

  users.push(usersData);

  saveUser(users);
};

const updateUser = (id) => {
  console.log("Update user", id)
}

const deleteUser = (id) => {
  console.log("Delete user", id)
}

const readUser = (id) => {
  console.log("Read user", id)
}

const userList = () => {
  console.log("User list")
}

// Save user inside the file
const saveUser = (users) => {
  fs.writeFileSync(DatabaseFile, JSON.stringify(users))
}

//load data from file
const loadUsers = () => {
  const dataBuffer = fs.readFileSync(DatabaseFile);
  const dataJson = dataBuffer.toString();
  return JSON.parse(dataJson)
}

console.log('LLLLLLLLLLload users', loadUsers);



module.exports = {
  addUser,
  updateUser,
  deleteUser,
  readUser,
  userList
};
