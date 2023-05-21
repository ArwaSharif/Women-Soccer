/*
Service modules: Service modules are where we can organize application specific logic such as functions for signing-up or logging in a user. Service modules often use and depend upon API modules...
*/

// We will use a src/utilities/users-service.js module to organize functions used to sign-up, log in, log out, etc.
// Using the (*) will import all of the exports from a file and put it in a object
import * as usersAPI from "./users-api";

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);

  //persist the token
  //first item is a property and 2nd is an property item
  localStorage.setItem("token", token);

  // Baby step by returning whatever is sent back by the server
  return getUser();
}

// Login func
export async function login(credentials) {
  //in the login.js we pass the email and password as credintials, go to mongodb to check them
  const token = await usersAPI.login(credentials);
  //persist the token
  //first item is a property and 2nd is an property item
  localStorage.setItem("token", token);

  return getUser()

}

//=========Setting the userState When the Page is Loaded or Refreshed==============
// grabbing the token
export function getToken() {
  // getItem returns null if there's no string
  const token = localStorage.getItem("token");// getItem is a local storage built-in method
  if (!token) return null;
  // Obtain the payload of the token and decode it w/ atob
  const payload = JSON.parse(atob(token.split(".")[1])); //splitting at the 1st indexed "."
  // A JWT's expiration is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem("token");// removeItem is a local storage built-in method
    return null;
  }
  return token;
}

// =====calling on the token above
//grabbing the user
export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  localStorage.removeItem("token");
}
