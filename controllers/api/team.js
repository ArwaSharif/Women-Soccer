const Team = require('../../models/Team')
const User = require('../../models/User')

module.exports = {
    create,
    index, 
}

async function create(req, res){
    try {
        const newTeam = await Team.create(req.body);
        newTeam.user = req.user._id
        newTeam.save()
        console.log('this is new created team', newTeam)
        res.status(200).send(newTeam)
    } catch (error) {
        res.status(400).send(error)
    }
}

async function index(req, res){
    try {
        const teams = await Team.find();
        console.log("this is index in ctrl/api/team", teams)
        res.status(200).json(teams)
    } catch (error) {
        res.status(400).send(error)
    }
}