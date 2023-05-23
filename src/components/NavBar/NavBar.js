import * as userService from "../../utilities/users-service";
import format from "date-fns/format";
import { Link, NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
// Using the import below, we can call any exported function using: userService.someMethod()
import styles from "./NavBar.module.css";
import SignUpLogIn from "../SignUpLogIn/SignUpLogIn";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import NewOtherTeamPage from "../../pages/NewTeamPage/NewTeamPage";
import AuthPage from "../../pages/AuthPage/AuthPage";

export default function NavBar({ user }, setUser) {
  const date = format(new Date(), "EE MM-dd-yyyy hh:mm aaa");

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
      <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to="/signUp-logIn"
        exact
      >
        <div className="loginDiv">
          {!user ? (
            <h6>Sign UP/Log In</h6>
          ) : (
            <span> Welcome, {user.name}! </span>
          )}
          {/* <SignUpLogIn />  */}
        </div>
      </NavLink>
      <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to="/favorites"
        exact
      >
        <div className="loginDiv">
          Favorite
          {/* {user ? <FavoritesPage /> : <AuthPage />} */}
        </div>
      </NavLink>
      <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to="/new-team"
        exact
      >
        <div className="loginDiv">
          Add New Team
          {/* {user ? <FavoritesPage /> : <AuthPage />} */}
        </div>
      </NavLink>
      <div className="logOutDiv">
        {user && (
          <Link to="" onClick={handleLogOut}>
            {" "}
            Log Out{" "}
          </Link>
        )}
      </div>
      &nbsp; | &nbsp;
      <div className="timeDiv">{date}</div>
    </div>
  );
}

//   {/* <NavLink
//     className="navbar-item"
//     activeClassName="is-active"
//     to="/signUp-logIn"
//     exact
// >
//         <div className="loginDiv">
//           Sign Up/Log In
//           {
//     !user ? (
//      <SignUpLogIn />

//     ) : (
//       <span> Welcome, {user.name}! </span>
//     )
//   }
//           {/*  */}
//           {/* <Routes>
//         <Route path="/SignUp-LogIn" element={<AuthPage user={user} setUser={setUser} />} />
//       </Routes> */}
//           {/* {handleClick}   */}
//           {/* <AuthPage user={user} setUser={setUser} /> */}
//           {/* <span> Welcome, {user.name}! </span> */}
//           </div>
//           </NavLink>
//           &nbsp; | &nbsp;
//           <Link to="/favorites">
//           <div className="favsDiv">
//             Favorites

//             {/* <Routes>
//               <Route
//                 path="/favorites"
//                 element={<FavoritesPage user={user} setUser={setUser} />}
//               />
//             </Routes> */}
//           </div>
//           &nbsp; | &nbsp;
//           </Link>
//           <Link to="/newTeam">
//           <div className="addNewTeamDiv">
//             Add A New Team

//             {/* <Routes>
//               <Route
//                 path="/new-team"
//                 element={<AddNewTeamPage user={user} setUser={setUser} />}
//               />
//             </Routes> */}
//           </div> */}
//           </Link>
// import { Link } from "react-router-dom"
// // Using the import below, we can call any exported function using: userService.someMethod()
// import * as userService from '../../utilities/users-service';

// export default function NavBar({user}, setUser) {
//   // Add the following function
//   function handleLogOut() {
//      // Delegate to the users-service
//     userService.logOut();
//     // Update state will also cause a re-render
//     setUser(null)
//   }

//   return (
//     <div>
//         <Link to='/orders'>Order History</Link>
//         {/* an empty space and | a separator */}
//         &nbsp; | &nbsp;
//         <Link to='/orders/new'>New Order</Link>
//         <span> Welcome, {user.name}! </span>
//         <Link to="" onClick={handleLogOut}> Log Out </Link>
//     </div>
//   )
// }
