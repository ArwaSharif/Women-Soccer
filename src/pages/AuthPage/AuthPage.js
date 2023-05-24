import { useState } from "react";
import styles from "./AuthPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function AuthPage({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {!user && (
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
            )}{" "}
          </div>
        </main>
      )}
    </>
  );
}
