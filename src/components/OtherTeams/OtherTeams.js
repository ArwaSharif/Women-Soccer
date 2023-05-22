import { useState } from "react";
import styles from "./OtherTeams.module.css";

export default function OtherTeams({ setUser }) {
  return (
    <>
      <div className={styles.OtherTeams}>
      <h1>Other Teams</h1>
      <div className={styles.OtherTeamsList}>
        <h4>
          otherTeam.flag
          {/* otherTeam.flag ? otherTeam.flag : otherTeam.flagPlaceholder **find a way to make the container's background white */}
          <br />
          otherTeam.name
          {/* otherTeam.name */}
          <br />
          otherTeam.name.abbrev
          {/* otherTeam.name.abbrev */}
        </h4>
      </div>
      </div>
    </>
  );
}
