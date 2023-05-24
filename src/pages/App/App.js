//imports
import styles from "./App.module.css";
import * as userService from "../../utilities/users-service";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//pages
import NavBar from "../../components/NavBar/NavBar";
import Intro from "../../components/Intro/Intro";
// import FWWX23Teams from "../../components/FWWX23Teams/FWWX23Teams";
import AllTeams from "../../components/AllTeams/AllTeams";
import { getUser } from "../../utilities/users-service";
import { getTeams } from "../../utilities/newTeam-api";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import NewTeamPage from "../NewTeamPage/NewTeamPage";
import AuthPage from "../AuthPage/AuthPage";
import TeamsInfo from "../TeamInfo/TeamInfo";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [teams, setTeams] = useState(getTeams());

  return (
    <main className={styles.App}>
      <NavBar user={user} setUser={setUser} />
      <Intro />

      <Routes>
        <Route
          path="/signUp-logIn"
          element={
            <AuthPage
              user={user}
              setUser={setUser}
              teams={teams}
              setTeams={setTeams}
            />
          }
        />
        {/* <Route
          path="/FWWX23-teams"
          element={
            <FWWX23Teams
              user={user}
              setUser={setUser}
              teams={teams}
              setTeams={setTeams}
            />
          }
        /> */}
        <Route
          path="/all-teams"
          element={
            <AllTeams
              user={user}
              setUser={setUser}
              teams={teams}
              setTeams={setTeams}
            />
          }
        />
        <Route
          path="/team/:id"
          element={
            <TeamsInfo
              user={user}
              setUser={setUser}
              teams={teams}
              setTeams={setTeams}
            />
          }
        />
        <Route
          path="/favorites"
          element={<FavoritesPage user={user} setUser={setUser} />}
        />
        <Route
          path="/new-team"
          element={
            <NewTeamPage
              user={user}
              setUser={setUser}
              teams={teams}
              setTeams={setTeams}
            />
          }
        />
      </Routes>
    </main>
  );
}