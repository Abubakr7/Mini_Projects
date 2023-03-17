import React, { useEffect, useState } from "react";
import "./App.css";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./layout/Layout";
import Counter from "./containers/Counter/Counter";
import Todos from "./containers/Todos/Todos";
import Users from "./containers/Users/Users";
import Albums from "./containers/Albums/Albums";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import { RequireAuth } from "./utils/RequireAuth";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("isLogged"))) {
      setIsLogged(JSON.parse(sessionStorage.getItem("isLogged")));
    }
  }, [isLogged, navigate]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Link to="/login">login</Link>
              <Link to="/register">register</Link>
              <Outlet />
            </>
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<Counter />} />
          <Route path="todos" element={<Todos />} />
          <Route path="users" element={<Users />} />
          <Route path="albums" element={<Albums />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
