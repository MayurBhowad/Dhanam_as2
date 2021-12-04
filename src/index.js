const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json())

connectDB()


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api', require('./routes'))

app.listen(PORT, () => {
    console.log('Listening');
});