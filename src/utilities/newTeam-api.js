import sendRequest from "./send-request";

const BASE_URL = '/api/team';

// Add new team 
export async function addNewTeam(newTeamData) {
    return sendRequest(`${BASE_URL}`, 'POST', newTeamData)
}

//get teams 
export async function getTeams() {
    return sendRequest(`${BASE_URL}`, 'GET')
}

