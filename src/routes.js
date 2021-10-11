
const express = require('express');
const CommitController = require('./controllers/CommitController');
const SignatureController = require('./controllers/SignatureController');
const CombinedFileDifferenceController = require('./controllers/CombinedFileDifferenceController');
 
const routes = express.Router();
 
routes.get('/signature/:id', SignatureController.showOne);

routes.get('/repositories/:owner/:repository/commit/:commitSHA', CommitController.show);

routes.get('/repositories/:owner/:repository/commit/:commitSHA/diff', CombinedFileDifferenceController.show);
 
module.exports = routes;
