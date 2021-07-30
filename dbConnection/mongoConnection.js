const mongoose = require('mongoose');
require('dotenv').config();
// const {MONGO_URI} = require('./config/key');



//connecting database 
const mongoConnection = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://adankhan:123Killthething@cluster0.orkbm.mongodb.net/todo?retryWrites=true&w=majority', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        });
        console.log('connected to database yeah !!');
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
}
    
module.exports = mongoConnection;