import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

// Components
import NavBar from "./components/navbar";
import PersistentDrawerLeft from "./components/navbar";
import Footer from "./components/footer";
import Search from "./components/search";
import DashboardGrid from "./components/dashboard";
import registration from "./components/registration";
import Login from "./components/login";
import Settings from "./components/settings/settings"

function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft />
      <Route exact path="/" component={Search} />
      <Route path="/Dashboard/" component={DashboardGrid} />
      <Route path="/Register/" component={registration} />
      <Route path="/Login/" component={Login} />
      <Route path="/Settings/" component={Settings} />
      <Footer />
    </div>
  );
}

export default App;
