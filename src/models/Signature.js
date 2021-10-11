const mongoose = require('mongoose');
 
const SignatureSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    date: { type: String, required: true},
    avatarUrl: { type: String, required: true, nullable: true},
});
 
module.exports = mongoose.model('Signature', SignatureSchema);