/*
API modules: API modules are for abstracting logic that make network requests such as AJAX calls to the backend or third-party APIs. This abstraction makes it easier to refactor code to use different techniques, libraries, etc. For example, we are going to be using fetchfor our AJAX communications, however, refactoring to use a library such as Axios would be made easy thanks to the use of API modules.
*/

//importing get token to use in line 55
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
