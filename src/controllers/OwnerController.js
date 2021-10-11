
const Owner = require('../models/Owner');

module.exports = {
    async create(req, res) {
        const { name } = req.body;

        let owner = await Owner.findOne({ name: name });
        
        if(!owner) owner = await Owner.create({ name });
    
        return res.json(owner);
    }

};
