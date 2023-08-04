const mongoose = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect('mongodb+srv://dalin:dalin123@dalin.kcifnnr.mongodb.net/BookShop?retryWrites=true&w=majority', {
      autoIndex: true,
      serverSelectionTimeoutMS: 30000 // default 30 seconds
    });
    console.log("MongoDB connected~");
  } catch (err) {
    console.log("Mongoose: ",err);
  }
}
