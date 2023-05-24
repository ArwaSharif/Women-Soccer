const Team = require('../../models/Team')
const User = require('../../models/User')

module.exports = {
    update,
}

async function update(req, res){
    try {
        const updateTeam = await Team.findById(req.body);
        
        updateTeam.user = req.user._id

        updateTeam.save()

        // const user = await User.findByIdAndUpdate(
        //     req.user._id,
        //     {$push : {favorites: newTeam}},
        //     {new: true}
        // )
        console.log(updateTeam)
        res.status(200).send(updateTeam)
    } catch (error) {
        res.status(400).send(error)
    }
}

