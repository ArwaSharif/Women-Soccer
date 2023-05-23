//imports
import styles from "./App.module.css";
import * as userService from "../../utilities/users-service";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//pages
import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../components/Logo/Logo";
import Intro from "../../components/Intro/Intro";
import FWWX23Teams from "../../components/FWWX23Teams/FWWX23Teams";
import AllTeams from "../../components/AllTeams/AllTeams";
import { getUser } from "../../utilities/users-service";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import NewTeamPage from "../NewTeamPage/NewTeamPage";
import AuthPage from "../AuthPage/AuthPage";
import TeamsInfo from "../TeamInfo/TeamInfo";


export default function App() {
  const [user, setUser] = useState(getUser());

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <main className={styles.App}>
      <Logo />
      <NavBar user={user} setUser={setUser} />
      <Intro />
      
      
      <Routes>
        <Route
          path="/signUp-logIn"
          element={<AuthPage user={user} setUser={setUser} />}
        />
        <Route
          path="/FWWX23-teams"
          element={<FWWX23Teams user={user} setUser={setUser} />}
        />
        <Route
          path="/all-teams"
          element={<AllTeams user={user} setUser={setUser} />}
        />
        <Route
          path="/team/:id"
          element={<TeamsInfo user={user} setUser={setUser} />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage user={user} setUser={setUser} />}
        />
        <Route path="/new-team" element={<NewTeamPage user={user} />} />
        {/* {!user ? (
        ) : (
          <Link to="" onClick={handleLogOut}>
            {" "}
            Log Out{" "}
          </Link>
        )} */}
      </Routes>
    </main>
  );
}
// <span> Welcome, {user.name}! </span>
