//importing get token t use in line 55
import sendRequest from './send-request';

// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';
// ==> http://localhost:3001/api/users


export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}  

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}  
