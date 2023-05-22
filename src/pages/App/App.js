//imports
import styles from './App.module.css';
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//pages
import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../components/Logo/Logo";
import GroupsTeamsList from "../../components/GroupsTeams/GroupsTeamsList";
import OtherTeams from "../../components/OtherTeams/OtherTeams";
import { getUser } from "../../utilities/users-service";



export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      <Logo />
      <NavBar user={user} setUser={setUser} />
      <div className="Header">
        <h1>Women Soccer </h1>
        <p>
          Get to know more about the teams participating in the coming FIFA
          World Women’s Cup!
        </p>
      </div>
      <hr />
      <div className="groupsDiv">
        <h2>Groups/Teams</h2>
        <GroupsTeamsList user={user} setUser={setUser} />
      </div>
      <hr />
      <div className="otherTeamsDiv">
      <OtherTeams user={user} setUser={setUser} />
      </div>
      {/* <hr /> */}
    </main>
  );
}