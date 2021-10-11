const mongoose = require('mongoose');
 
const CommitSchema = new mongoose.Schema({
    oid: { type: String, required: true},
    subject: { type: String},
    body: { type: String},
    parents: { 
        type : [{ oid : String }],
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Signature'
    },
    committer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Signature'
    }
});
 
module.exports = mongoose.model('Commit', CommitSchema);