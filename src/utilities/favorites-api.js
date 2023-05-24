import sendRequest from "./send-request";

const BASE_URL = '/api/favorites';

// TO DO
// Add to fav func

export async function addFavorites(newFavorite) {
    return sendRequest(`${BASE_URL}`, 'POST', newFavorite)
}
