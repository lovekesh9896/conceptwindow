const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParse = require('cookie-parser');
const db = require('./db');
const UserRouter = require('./routes/user-router');
const app = express();
const apiPort = 3000;
const passport = require('passport');
const passportJWT = require('./congif/passsport-jwt');
const path = require('path');


app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParse());
app.use('/api', UserRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    return res.send('<h1>Error 404</h1>')
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))