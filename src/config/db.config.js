const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("mongo db connected!"))
        .catch(err => console.log(err))
}

module.exports = connectDB;