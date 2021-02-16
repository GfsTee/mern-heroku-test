require('dotenv').config()
var cors = require('cors')
const express = require('express')
const mongoose = require('mongoose');
const pictures = require('./routes/pictureRoutes')
const path = require('path')

const port = process.env.PORT || 5000;
const app = express()
app.use(express.static(path.join(__dirname, '../build')))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


mongoose.connect(process.env.dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((response) => {
        app.listen(port, () => console.log(`http://localhost:${port}`))
        console.log("DB connected")
    })
    .catch((error) => console.log(error))


app.use('/api', pictures)


