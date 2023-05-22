const Team = require('../../models/Team');

module.exports = {
  index,
  show,
};
 
async function index(req, res) {
  try{
    //populate to have the name and the order?!
    const teams = await Team.find({}).sort('name').populate('teams').exec();
    // re-sort based upon the sortOrder of the categories
    teams.sort((a, b) => a.teams.sortOrder - b.teams.sortOrder);
    res.status(200).json(teams);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const team = await Team.findById(req.params.id);
    res.status(200).json(team);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}