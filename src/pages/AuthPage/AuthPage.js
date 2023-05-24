import { useState } from "react";
import styles from "./AuthPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Logo from "../../components/Logo/Logo";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  //to nav bar
  const [showComponent, setShowComponent] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>
          CLICK TO {showLogin ? "SIGN UP" : "LOG IN"}
        </h3>
      </div>
      <div>
      {showLogin ? ( 
        <LoginForm setUser={setUser} />
      ) : ( 
        <SignUpForm setUser={setUser} />
       )} 
       </div>
    </main>
  );
}
