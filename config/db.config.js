const { connect } = require("mongoose");

const uri = process.env.MONGOBD_URI;

connect(uri).then(() => {
    console.log('Connected successfully to server');
}).catch((e) => {
    console.log(e);
    console.log('Connected Unsuccessfully to server');
});