import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

//it is a functional component not a class component
export default function LoginForm({ setUser }) {
    //creating our state with email and pass
const [credentials, setCredentials] = useState({
  email: '',
  password: ''
});
 
//state for handling error
const [error, setError] = useState('');

function handleChange(evt) {
  setCredentials({
    //this will be updated every time smth clicked and assigned to value
     ...credentials, [evt.target.name]: evt.target.value 
    });
//   setError('');
}

//bc it's a request, we make it async function
async function handleSubmit(evt) {
  // Prevent form from being submitted to the server when we click submit
  evt.preventDefault();
  try {
    // The promise returned by the signUp service method
    // will resolve to the user object included in the
    // payload of the JSON Web Token (JWT)
    const user = await usersService.login(credentials);
    //setting the user state, it's the prop that we destructured 
    setUser(user);
  } catch {
    setError('Log In Failed - Try Again');
  }
}

return (
  <div>
  <div className="form-container">
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        required
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        required
      />
      <button type="submit" >
        LOGIN
      </button>
    </form>
  </div>
  <p className="error-message">&nbsp;{error}</p>
</div>
  );
}