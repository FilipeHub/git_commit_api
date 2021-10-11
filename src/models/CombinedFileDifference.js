const mongoose = require('mongoose');
 
const CombinedFileDifferenceSchema = new mongoose.Schema({
    changeKind: {
        type: String,
        enum : [
            'ADDED',
            'COPIED',
            'DELETED',
            'MODIFIED',
            'RENAMED',
            'TYPE_CHANGED'
        ],
        required: true
    },
    baseFile: { 
        path : {
            type: String, 
            required: true
        }
        // required: true
    },
    headFile: { 
        path : {
            type: String, 
            required: true
        }
        // required: true,
    },
    hunks : {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'DiffHunk'
    },
    content : String
});
 
module.exports = mongoose.model('CombinedFileDifference', CombinedFileDifferenceSchema);