import styles from "./Intro.module.css";
import { Link } from "react-router-dom";
export default function Intro() {
  return (
    <div className={styles.Intro}>
      <h1>Women Soccer </h1>
      <p>
        Get to know more about the teams participating in the coming FIFA World
        Women’s Cup!
      </p>
      <div className="styles.exploreTeamsContainer">
      <Link to='/FWWX23-teams'>
    <button>Explore FIFA WOMEN'S WORLD CUP TEAMS 
      </button>
      </Link>
      <Link to='/all-teams'>
    <button>EXPLORE ALL WOMEN'S NATIONAL TEAMS</button>
    </Link>
      </div>
    </div>
  );
}
