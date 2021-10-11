const axios = require('axios');
const CombinedFileDifference = require('../models/CombinedFileDifference');

const Signature = require('../models/Signature');

module.exports = {
    async show(req, res) {
        const { owner, repository, commitSHA }  = req.params;

        const response = await axios.get(`https://api.github.com/repos/${owner}/${repository}/commits/${commitSHA}`);
        
        const { files } = response.data;

        const combinedFiles = files.map( file => {
            const combinedFile = { 
                changeKind : file.status,
                headFile : { path : file.filename},
                baseFile : { path : file.filename},
                content : file.patch
            }

            // const hunks;

            return combinedFile
        });
        
        console.log(combinedFiles);

        return res.json(combinedFiles);
    }
};
