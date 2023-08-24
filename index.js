const yargs = require('yargs');
const database = require('./UsersDatabase');



yargs.command({
    command: "add",
    describe: "To add a player",
    builder: {
        name: {
            describe: "Name",
            demandOption: true,
            type: "string"
        },
        address: {
            describe: "Adress",
            demandOption: true,
            type: "string"
        },
    },
    handler: function() {
        database.addUser()
    }
})

yargs.parse();