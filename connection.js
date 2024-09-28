const mongoose = require('mongoose');
async function connection() {
    try{
        await mongoose.connect('mongodb://localhost:27017/batch-3view');
        console.log("db connected.....")
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connection;