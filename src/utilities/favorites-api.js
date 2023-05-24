import sendRequest from "./send-request";

const BASE_URL = '/api/favorites';

// AddNewTeam func

export async function addFavorites(newFavorite) {
    return sendRequest(`${BASE_URL}`, 'POST', newFavorite)
}
