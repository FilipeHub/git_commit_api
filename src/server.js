const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
 
const server = express();

mongoose.connect('mongodb+srv://filipe_user:filipe_user@filipeserver-8wfhq.mongodb.net/database?retryWrites=true&w=majority', 
    {useNewUrlParser:true,
    useUnifiedTopology: true});


server.use(cors('http://localhost:1234'));
server.use(express.json()); 
server.use(routes);
 
server.listen(3333);