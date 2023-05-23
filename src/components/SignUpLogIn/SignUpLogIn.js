import { Link } from "react-router-dom";
import styles from "./SignUpLogIn.module.css";
import AuthPage from "../../pages/AuthPage/AuthPage";

export default function SignUpLogIn({ user }, setUser) {
  return (
    // <Link to="/authPage">

    <div className={styles.SignUpLogIn}>
      {/* <AuthPage user={user} setUser={setUser} /> */}
    </div>
    // </Link>

  );
}
