import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Users from "./containers/Users/Users";
import Home from "./home/Home";
import Layout from "./layout/Layout";
import { RequireAuth } from "./utils/RequireAuth";
import Dashboard from "./containers/Dashboard/Dashboard";
import HomeContent from "./containers/HomeContent/HomeContent";

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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="homecontent" element={<HomeContent />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
