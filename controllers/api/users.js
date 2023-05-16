const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

module.exports = { 
  create,
  login,
  checkToken,
 };

// controllers/api/users.js

//this func fires when a request is made to /api/users POST
async function create(req, res) {
  try {
    // Add the user to the database + refers to the param below
    //then()
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    // The client code needs to take this into consideration
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

//async/await new syntax for .the() aka thennables

async function login(req, res) {
  try {
    //query our db to find the specific user's email
    //
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error(); // if user is not found
    // if user found, compare passowrd
    //1st arg from the credentials the user typed in
    //2nd arg what's stored in the database
    const match = await bcrypt.compare(req.body.password, user.password); 
    if (!match) throw new Error(); // if pass doesn't match will throw an err
    res.json(createJWT(user)); // if everything checks out, create token, login
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

/*-- Helper Functions --*/
// jwt creates the token and return the response to the func above
function createJWT(user) {
  //all args to the sign method
  return jwt.sign(
    // data payload/obj
    { user },
    //the secret in .env
    process.env.SECRET, //comparing the token with the secret
    //putting expiration date on the token
    { expiresIn: "24h" }
  );
}
