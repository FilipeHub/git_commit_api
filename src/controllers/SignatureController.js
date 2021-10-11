const Signature = require('../models/Signature');

module.exports = {
    async showOne(req, res) {
        console.log('ShowONe');
        const { id } = req.params;

        const signature = await Signature.findById(id);

        return res.json(signature);
    }

};
