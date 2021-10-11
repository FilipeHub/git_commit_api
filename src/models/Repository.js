const mongoose = require('mongoose');
 
const RepositorySchema = new mongoose.Schema({
    name: { type: String, required: true} ,
});
 
module.exports = mongoose.model('Repository', RepositorySchema);