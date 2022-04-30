import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Counter from "./containers/Counter/Counter";
import Todos from "./containers/Todos/Todos";
import Users from "./containers/Users/Users";
import Albums from "./containers/Albums/Albums";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
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
