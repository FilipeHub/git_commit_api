
const Repository = require('../models/Repository');

module.exports = {
    async create(req, res) {
        const { name } = req.body;
        
        let repository = await Repository.findOne({ name: name });
        
        if(!repository) repository = await Repository.create({ name });
    
        return res.json(repository);
    }

};

//http://localhost:3333/repositories/golemfactory/clay/commit/a1bf367b3af680b1182cc52bb77ba095764a11f9