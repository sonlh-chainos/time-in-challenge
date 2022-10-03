import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Router from "./routes/Router";
import "./sass/main.scss";
function App() {
  const routing = useRoutes(Router());
  return <div>{routing}</div>;
}

export default App;
