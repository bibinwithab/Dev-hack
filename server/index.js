const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

app.listen(PORT, () => {
    console.log(`heard at http://localhost:${PORT}/`)
})
