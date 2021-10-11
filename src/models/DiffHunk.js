const mongoose = require('mongoose');
 
const DiffHunkSchema = new mongoose.Schema({
    header: { type: String, required: true},
    lines: {
        type: [{
            baseLineNumber : { type: Number, required: true},
            headLineNumber : { type: Number, required: true},
            content : { type: String, required: true}
        }], 
        required: true
    }
});
 
module.exports = mongoose.model('DiffHunk', DiffHunkSchema);