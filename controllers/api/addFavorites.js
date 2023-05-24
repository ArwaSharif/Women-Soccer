const Team = require('../../models/Team')
const User = require('../../models/User')

module.exports = {
    update,
}

async function update(req, res){
    try {
        // const updateTeam = await Team.findById(req.body);
        
        // newTeam.user = req.user._id

        // newTeam.save()

        const user = await User.findByIdAndUpdate(
            req.user._id,
            {$push : {favorites: req.body}},
            {new: true}
        )
        // console.log(user)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

