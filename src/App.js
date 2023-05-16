//imports
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from './utilities/users-service'
//pages
import AuthPage from "./pages/AuthPage/AuthPage";
import NewOrderPage from "./pages/NewOrderPage/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
//components
import NavBar from "./components/NavBar/NavBar";



function App() {
  //invoking the getUser function
  const [user, setUser] = useState(getUser());
  console.log('current user', user)

  return (
    <main className="App">
      {user ? (
        <>
          {/* to have it rendering wherever the user goes */}
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <>
          <AuthPage setUser={setUser} />
        </>
      )}
    </main>
  );
}

export default App;
