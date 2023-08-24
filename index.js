const yargs = require("yargs");
const database = require("./UsersDatabase");

//node index.js add --name="Sulakshitha" --address="Colombo" --contact_number=1234 --visit_date="2023/08/23"

// Add a user
yargs.command({
  command: "add",
  describe: "To add a player",
  builder: {
    name: {
      describe: "Name",
      demandOption: true,
      type: "string",
    },
    address: {
      describe: "Adress",
      demandOption: true,
      type: "string",
    },
    contact_number: {
      describe: "Adress",
      demandOption: true,
      type: "string",
    },
    visit_date: {
      describe: "Adress",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    database.addUser(argv);
  },
});

// Update a user
yargs.command({
  command: "update",
  describe: "To update a player",
  builder: {
    id: {
      describe: "Id",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    database.updateUser(argv.id);
  },
});

// Delete a user
yargs.command({
  command: "delete",
  describe: "To delete a player",
  builder: {
    id: {
      describe: "Id",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    database.deleteUser(argv.id);
  },
});

// Read a user
yargs.command({
  command: "read",
  describe: "To Read a player",
  builder: {
    id: {
      describe: "Id",
      demandOption: true,
      type: "number",
    },
  },
  handler(argv) {
    database.readUser(argv.id);
  },
});

// Users list
yargs.command({
    command: "list",
    describe: "To list players",
    handler() {
      database.userList();
    },
  });

yargs.parse();
