import sendRequest from "./send-request";

const BASE_URL = '/api/team';

// AddNewTeam func

export async function addNewTeam(newTeamData) {
    return sendRequest(`${BASE_URL}`, 'POST', newTeamData)
}

//get teams re
export async function getTeams() {
    return sendRequest(`${BASE_URL}`, 'GET')
}

