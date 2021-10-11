const axios = require('axios');
const Commit = require('../models/Commit');

const Signature = require('../models/Signature');

module.exports = {
    async show(req, res) {
        const { owner, repository, commitSHA }  = req.params;

        const response = await axios.get(`https://api.github.com/repos/${owner}/${repository}/commits/${commitSHA}`);
        
        const { name, email, date, message } = response.data.commit.author;
        const { avatar_url } = response.data.author;
        
        
        const { name : nameCommitter, email : emailCommiter, date : dateCommitter } = response.data.commit.committer;
        const committer_avatar_url = response.data.committer.avatar_url;
        
        const parents = response.data.parents.map( parentCommit => { return { oid: parentCommit.sha }});
        
        const authorSignature = await Signature.create({ name, email, date, avatarUrl : avatar_url });
        
        const committerSignature = await Signature.create({ 
            name : nameCommitter, 
            email : emailCommiter, 
            date : dateCommitter , 
            avatarUrl : committer_avatar_url 
        });
        
        let commit = await Commit.findOne({ oid : commitSHA });

        if(!commit) {
            commit = await Commit.create({
                oid : commitSHA,
                subject : message,
                parents,
                author : authorSignature,
                committer : committerSignature,
            });
        }

        return res.json([commit]);
    }

};

//http://localhost:1234/repositories/FilipeHub/MyAirCnC/commit/f2e635a9353fd09707aae740c69dcaad8b12f07d