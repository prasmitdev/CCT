const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const db = require('./db/db');

dotenv.config({path:'./.env'});

const app = express();
let PORT = process.env.PORT || 3000
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.set('view engine', 'hbs');


db.connect((error) =>{
    if(error){
        console.log(error)
    } else {
        console.log("MYSQL Connected");
    }

});

//Define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});