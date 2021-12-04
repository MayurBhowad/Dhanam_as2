const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json())

connectDB()


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api', require('./routes'))

app.listen(4001, () => {
    console.log('Listening');
});