import * as userService from "../../utilities/users-service";
import format from "date-fns/format";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// Using the import below, we can call any exported function using: userService.someMethod()
import styles from "./NavBar.module.css";
import SignUpLogIn from "../SignUpLogIn/SignUpLogIn";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import NewOtherTeamPage from "../../pages/NewTeamPage/NewTeamPage";
import AuthPage from "../../pages/AuthPage/AuthPage";

export default function NavBar({ user }, setUser) {
  const date = format(new Date(), "EE MM-dd-yyyy hh:mm aaa");
  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  // function handleClick(user) {
  //   !user ? (
  //     // <AuthPage setUser={setUser} />
  //     <Routes>
  //       <Route path="/SignUp-LogIn" element={<AuthPage user={user} setUser={setUser} />} />
  //     </Routes>
  //     // <h6>Hey there, ${user.name}!</h6>
  //   ) : (
  //     <span> Welcome, {user.name}! </span>
  //   );
  // }

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <div className={styles.NavBar}>
      <Link onClick={toggleComponent} to={showComponent ? "/signUp-logIn" : "/"}>
        <div className="loginDiv">
          {!user ? <>Sign UP/Log In</> : <span> Welcome, {user.name}! </span>}
        </div>
      </Link>
      <Link onClick={toggleComponent} to={showComponent ? "/favorites" : "/"}>
        <div className="loginDiv">Favorites</div>
      </Link>
      <Link onClick={toggleComponent} to={showComponent ? "/new-team" : "/"}>
        <div>Add a New Team</div>
      </Link>
      <div>
        {user && (
          <Link to="" onClick={handleLogOut}>
            {" "}
            <div className="logOutDiv">Log Out </div>
          </Link>
        )}
      </div>

      <div className={styles.timeDiv}>{date}</div>
    </div>
  );
}
