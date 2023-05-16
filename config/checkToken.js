//middleware is used to process requests in an Express app.
/*
write a custom middleware function that:

Checks if there's a token sent in an Authorizationheader of the HTTP request. For additional flexibility, we'll also check for a token being sent as a query string parameter.
Verifies the token is valid and hasn't expired.
Decodes the token to obtain the user data from its payload.
Then finally, adds the user payload to the Express request object.
*/

const jwt = require('jsonwebtoken');


//custom middleware
module.exports = function(req, res, next) {
  // Check for the token being sent in a header or as a query parameter
  let token = req.get('Authorization') || req.query.token;
  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    token = token.replace('Bearer ', '');
    // Check if token is valid and not expired
    // 1st is our token, 2nd secret, func to check if ... 
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      // If valid token, decoded will be the token's entire payload
      // If invalid token, err will be set
      req.user = err ? null : decoded.user;  
      // If your app cares... (optional)
      // converting the date var to miutes instead of seconds
      req.exp = err ? null : new Date(decoded.exp * 1000);  
      return next();
    });
  } else {
    // No token was sent
    req.user = null;
    return next(); // going to the controller action
  }
};