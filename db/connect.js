const mongoose = require("mongoose");

const connection = async (url)=>{
    await mongoose.connect(url);
}
module.exports = connection;


// mongoose.connect(connectionString)
//     .then(() => {
//         console.log("connected to database");
//     })
//     .catch((error) => {
//         console.log(error);
//     });

